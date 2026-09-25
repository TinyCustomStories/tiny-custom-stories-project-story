import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../src/App';

describe('project story site', () => {
  afterEach(() => {
    cleanup();
    window.history.replaceState({}, '', '/');
  });

  it('explains the public boundary and preserves knowledge-status distinctions', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /stories built with care, not just code/i,
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Public library' })[0]);
    expect(
      screen.getByText(/translation, not an automatic export/i),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Decisions' })[0]);
    expect(screen.getAllByText('Confirmed decision').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Open question').length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Story work has three ownership boundaries/i),
    ).toBeTruthy();
  });

  it('keeps the established routes while adding development and architecture pages', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /a small, human answer to a modern question/i,
      }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    expect(
      screen.getByRole('heading', {
        name: /the architecture changed because the questions got better/i,
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Architecture' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /separate responsibility before separating machines/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText('Story Lifecycle')).toBeTruthy();
    expect(screen.getByText('Story Context Selection')).toBeTruthy();
    expect(screen.getByText('Story Generation')).toBeTruthy();
  });

  it('states the Sprint 1 gate accurately and preserves its legacy route', () => {
    render(<App />);

    expect(
      screen.getByText(/Sprint 1 has substantial implementation evidence/i),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Sprint 1' })[0]);

    expect(
      screen.getByRole('heading', {
        name: /a strong implementation can still have an open outcome gate/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText(/Sprint 1 outcome status/i)).toBeTruthy();
    expect(
      screen.getByText(/temporary founder-approved sequencing exception/i),
    ).toBeTruthy();
  });

  it('shows the updated roadmap without treating later planning as completed work', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link', { name: 'Roadmap' })[0]);

    expect(
      screen.getByText(/Outcome gate open - explicitly not passed/i),
    ).toBeTruthy();
    expect(
      screen.getByText(/Canonical scope \+ synthetic implementation allowed/i),
    ).toBeTruthy();
    expect(screen.getAllByText('Proposal').length).toBeGreaterThan(0);
  });

  it('preserves the accepted visual recipe and stable public PDF path', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link', { name: 'Design' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /the same design dna, expressed for different responsibilities/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText('70%')).toBeTruthy();
    expect(screen.getByText('#27213B')).toBeTruthy();
    expect(screen.getByText('Storybook light')).toBeTruthy();

    const pdfLinks = screen.getAllByRole('link', { name: /Project PDF/i });
    expect(pdfLinks.length).toBeGreaterThan(0);
    expect(pdfLinks[0]?.getAttribute('href')).toBe(
      '/documents/tiny-custom-stories-project-dossier.pdf',
    );
  });
});
