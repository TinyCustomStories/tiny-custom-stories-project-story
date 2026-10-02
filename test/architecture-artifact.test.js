import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('public architecture artifact', () => {
  const htmlPath = 'public/architecture/system.html';
  const sourcePath = 'public/architecture/system.architecture.json';
  const previewPath = 'public/architecture/preview.svg';

  it('ships the Archify explorer and accessible preview at stable public paths', () => {
    const html = readFileSync(htmlPath, 'utf8');
    const preview = readFileSync(previewPath, 'utf8');

    expect(html).toContain('name="generator" content="archify');
    expect(html).toContain('data-embed');
    expect(preview).toContain('<title id="title">');
    expect(preview).toContain('<desc id="desc">');
  });

  it('keeps the generated explorer aligned with the curated public source', () => {
    const html = readFileSync(htmlPath, 'utf8');
    const source = JSON.parse(readFileSync(sourcePath, 'utf8'));

    const publicText = [
      ...source.components.flatMap(({ label, sublabel, tag }) => [
        label,
        sublabel,
        tag,
      ]),
      ...(source.boundaries ?? []).map(({ label }) => label),
      ...(source.connections ?? []).map(({ label }) => label),
      ...(source.cards ?? []).flatMap(({ title, items }) => [
        title,
        ...(items ?? []),
      ]),
    ].filter(Boolean);

    for (const value of publicText) {
      expect(html, `missing public architecture text: ${value}`).toContain(
        value,
      );
    }

    for (const { id } of source.components) {
      expect(html, `missing public component id: ${id}`).toContain(
        `data-node-id="${id}"`,
      );
    }

    for (const { id } of source.connections ?? []) {
      expect(html, `missing public connection id: ${id}`).toContain(
        `data-edge-id="${id}"`,
      );
    }
  });

  it('does not publish private repository provenance in the explorer artifacts', () => {
    const combined = [
      readFileSync(htmlPath, 'utf8'),
      readFileSync(sourcePath, 'utf8'),
    ].join('\n');

    const forbidden = [
      'https://github.com/TinyCustomStories/tiny-custom-stories',
      'documentation/Architecture/',
      'apps/web/',
      'apps/api/',
      'ClerkAuthenticationProvider',
      'CurrentFamilyResolutionMiddleware',
      'ParentModeAuthorization',
      'Program.cs',
      'clerk',
      'mongodb',
      'web-api-bearer',
      'S3 adapter',
      'ASP.NET Core',
      '.NET 10',
      '#L',
    ];

    for (const value of forbidden) {
      expect(combined, `private provenance leaked: ${value}`).not.toContain(
        value,
      );
    }
  });
});
