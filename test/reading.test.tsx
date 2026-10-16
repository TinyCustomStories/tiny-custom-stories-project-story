import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App';

beforeEach(() => {
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
  window.localStorage.clear();
  vi.restoreAllMocks();
});

const paths = [
  '/',
  '/product',
  '/journey',
  '/development',
  '/architecture',
  '/delivery',
  '/learnings',
  '/decisions',
  '/roadmap',
  '/sprint-one',
  '/sprint-two',
  '/sprint-three',
  '/design',
  '/questions',
  '/library',
];

describe('reading and orientation', () => {
  // Catches a route being left out of the shared reading experience, or an index pointing nowhere.
  it.each(['story', 'builder'])(
    'provides usable section links on every route in %s mode',
    (mode) => {
      window.localStorage.setItem('tcs-project-story-reading-mode', mode);
      const view = render(<App />);
      for (const path of paths) {
        window.history.replaceState({}, '', `#${path}`);
        fireEvent(window, new HashChangeEvent('hashchange'));
        const navigation = screen.getByRole('navigation', {
          name: 'On this page',
        });
        const links = within(navigation).getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
        for (const link of links) {
          const id = new URLSearchParams(
            link.getAttribute('href')!.split('?')[1],
          ).get('section');
          expect(id && document.getElementById(id)).toBeTruthy();
        }
        expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
      }
      view.unmount();
    },
  );

  // Catches fragment parsing sending a copied lesson address to Home or leaving the note hidden.
  it('opens a copied lesson address with context, then retains it across reading modes', () => {
    window.history.replaceState(
      {},
      '',
      '#/learnings?section=finish-one-journey',
    );
    render(<App />);
    const heading = document.getElementById('finish-one-journey');
    expect(heading?.tagName).toBe('H2');
    expect(document.activeElement).toBe(heading);
    const current = within(
      screen.getByRole('navigation', { name: 'On this page' }),
    ).getByRole('link', { name: /Finish one journey/i });
    expect(current.getAttribute('aria-current')).toBe('location');
    fireEvent.click(screen.getByRole('button', { name: 'Builder' }));
    expect(window.location.hash).toBe(
      '#/learnings?section=finish-one-journey&mode=builder',
    );
    expect(document.getElementById('finish-one-journey')).toBeTruthy();
    expect(document.activeElement).toBe(
      document.getElementById('finish-one-journey'),
    );
  });

  // Catches local navigation reusing page navigation's unconditional top/focus reset.
  it('opens a shared section in its addressed mode rather than the saved preference', () => {
    window.localStorage.setItem('tcs-project-story-reading-mode', 'builder');
    window.history.replaceState(
      {},
      '',
      '#/product?section=personal-context&mode=story',
    );
    render(<App />);
    expect(
      screen
        .getByRole('button', { name: 'Story' })
        .getAttribute('aria-pressed'),
    ).toBe('true');
    expect(document.activeElement).toBe(
      document.getElementById('personal-context'),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Builder' }));
    expect(document.activeElement).toBe(
      document.getElementById('personal-context'),
    );
    expect(window.location.hash).toContain('mode=builder');
  });

  it('follows a same-route history address into an exclusive topic in the other mode', () => {
    window.history.replaceState({}, '', '#/product');
    render(<App />);
    window.history.replaceState(
      {},
      '',
      '#/product?section=a-kid-is-not-a-prompt&mode=builder',
    );
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(
      screen
        .getByRole('button', { name: 'Builder' })
        .getAttribute('aria-pressed'),
    ).toBe('true');
    expect(document.activeElement).toBe(
      document.getElementById('a-kid-is-not-a-prompt'),
    );
    expect(window.location.hash).toBe(
      '#/product?section=a-kid-is-not-a-prompt&mode=builder',
    );
  });

  it('captures the current section before changing mode even with a route-only URL', () => {
    window.history.replaceState({}, '', '#/learnings');
    render(<App />);
    fireEvent.click(
      within(
        screen.getByRole('navigation', { name: 'On this page' }),
      ).getByRole('link', { name: 'Test the assembled product' }),
    );
    window.history.replaceState({}, '', '#/learnings');
    fireEvent.click(screen.getByRole('button', { name: 'Builder' }));
    expect(document.activeElement).toBe(
      document.getElementById('test-the-assembled-product'),
    );
    expect(window.location.hash).toContain(
      'section=test-the-assembled-product',
    );
  });

  it('jumps between sections, follows history, and returns to the overview', () => {
    window.history.replaceState({}, '', '#/learnings');
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'On this page' });
    fireEvent.click(
      within(nav).getByRole('link', { name: /Test the assembled product/i }),
    );
    expect(window.location.hash).toBe(
      '#/learnings?section=test-the-assembled-product&mode=story',
    );
    expect(document.activeElement).toBe(
      document.getElementById('test-the-assembled-product'),
    );
    window.history.replaceState(
      {},
      '',
      '#/learnings?section=finish-one-journey',
    );
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(document.activeElement).toBe(
      document.getElementById('finish-one-journey'),
    );
    fireEvent.click(within(nav).getByRole('link', { name: 'Overview' }));
    expect(document.activeElement).toBe(
      document.getElementById('reading-overview'),
    );
  });

  // Catches unmounted detail and the inability to compare multiple notes or search all text.
  it('returns focus to the overview on Back to a route-only address', () => {
    window.history.replaceState({}, '', '#/learnings');
    render(<App />);
    fireEvent.click(
      within(
        screen.getByRole('navigation', { name: 'On this page' }),
      ).getByRole('link', { name: 'Finish one journey' }),
    );
    expect(document.activeElement).toBe(
      document.getElementById('finish-one-journey'),
    );
    window.history.replaceState({}, '', '#/learnings');
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(document.activeElement).toBe(
      document.getElementById('reading-overview'),
    );
  });

  it('returns from supporting detail even when the chapter URL is already current', () => {
    window.history.replaceState(
      {},
      '',
      '#/learnings?section=finish-one-journey&mode=story',
    );
    render(<App />);
    const summary = document.querySelector('summary')!;
    summary.focus();
    fireEvent.click(
      screen.getAllByRole('link', { name: 'Return to this chapter ↑' })[0],
    );
    expect(document.activeElement).toBe(
      document.getElementById('finish-one-journey'),
    );
  });

  it('keeps all lesson evidence in the document and expands it together', () => {
    window.history.replaceState({}, '', '#/learnings');
    render(<App />);
    const notes = [
      ...document.querySelectorAll<HTMLDetailsElement>(
        '[data-supporting-note]',
      ),
    ];
    expect(notes.length).toBeGreaterThan(5);
    expect(notes.every((note) => !note.open)).toBe(true);
    fireEvent.click(
      screen.getByRole('button', { name: 'Expand all supporting notes' }),
    );
    expect(notes.every((note) => note.open)).toBe(true);
    expect(document.body.textContent).toContain(
      'The net time saving has not been measured',
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'Collapse all supporting notes' }),
    );
    expect(notes.every((note) => !note.open)).toBe(true);
  });

  it('opens detail addressed by a copied link', () => {
    window.history.replaceState(
      {},
      '',
      '#/learnings?section=parallel-coding-still-shares-one-machine',
    );
    render(<App />);
    const heading = document.getElementById(
      'parallel-coding-still-shares-one-machine',
    );
    expect(heading).toBeTruthy();
    expect(heading?.closest('article')?.querySelector('details')?.open).toBe(
      true,
    );
  });

  it('lets readers choose an individual topic without moving until they submit', () => {
    window.history.replaceState({}, '', '#/learnings');
    render(<App />);
    const startingFocus = document.activeElement;
    fireEvent.change(screen.getByLabelText('Jump to a topic'), {
      target: { value: 'parallel-coding-still-shares-one-machine' },
    });
    expect(document.activeElement).toBe(startingFocus);
    fireEvent.submit(screen.getByRole('form', { name: 'Topic lookup' }));
    expect(document.activeElement).toBe(
      document.getElementById('parallel-coding-still-shares-one-machine'),
    );
    expect(
      document
        .getElementById('parallel-coding-still-shares-one-machine')
        ?.closest('article')
        ?.querySelector('details')?.open,
    ).toBe(true);
  });

  it('closes local navigation with Escape from its trigger and restores trigger focus', () => {
    window.history.replaceState({}, '', '#/learnings');
    render(<App />);
    const trigger = screen.getByRole('button', { name: /On this page/ });
    fireEvent.click(trigger);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'Escape' });
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(trigger);
  });

  it('prints all supporting notes and restores the reader’s choices afterwards', () => {
    window.history.replaceState(
      {},
      '',
      '#/learnings?section=parallel-coding-still-shares-one-machine',
    );
    render(<App />);
    const notes = [
      ...document.querySelectorAll<HTMLDetailsElement>(
        '[data-supporting-note]',
      ),
    ];
    const original = notes.map((note) => note.open);
    fireEvent(window, new Event('beforeprint'));
    expect(notes.every((note) => note.open)).toBe(true);
    fireEvent(window, new Event('afterprint'));
    expect(notes.map((note) => note.open)).toEqual(original);
  });

  it('offers real static-host-compatible page links for modified clicks', () => {
    render(<App />);
    const link = screen.getAllByRole('link', {
      name: 'The product',
    })[0];
    expect(link.getAttribute('href')).toBe('#/product');
    fireEvent.click(link, { ctrlKey: true });
    expect(window.location.hash).toBe('');
  });
});
