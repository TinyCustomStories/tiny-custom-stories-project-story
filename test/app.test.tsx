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
    fireEvent.click(screen.getByRole('link', { name: 'Public library' }));

    expect(screen.getByText(/Founder approval:/i)).toBeTruthy();
    fireEvent.click(screen.getByRole('link', { name: 'Decisions' }));
    expect(screen.getAllByText('Confirmed decision').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Open question').length).toBeGreaterThan(0);
  });

  it('moves between readable public pages without a full-page navigation', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);

    expect(
      screen.getByRole('heading', {
        name: /a small, human answer to a modern question/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText(/Personalized story:/i)).toBeTruthy();
  });

  it('publishes the verified Sprint 0 transition and accepted Sprint 1 boundary', () => {
    render(<App />);

    expect(screen.getByText(/Sprint 0 is complete/i)).toBeTruthy();
    fireEvent.click(screen.getByRole('link', { name: 'Sprint 1' }));

    expect(
      screen.getByRole('heading', {
        name: /a shared device needs two honest modes/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText(/Sprint 1 outcome gate/i)).toBeTruthy();
    expect(screen.getByText(/Child mode comes first/i)).toBeTruthy();
    expect(screen.getByText(/Parent work is protected/i)).toBeTruthy();
  });

  it('shows the accepted visual recipe and links the public PDF', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('link', { name: 'Design' }));
    expect(
      screen.getByRole('heading', {
        name: /one philosophy. one recipe. room to feel human/i,
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
