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
});
