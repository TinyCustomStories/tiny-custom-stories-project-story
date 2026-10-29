import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App';

const content = () => within(document.querySelector('.reading-document')!);

function renderBuilder() {
  window.localStorage.setItem('tcs-project-story-reading-mode', 'builder');
  return render(<App />);
}

function renderStory() {
  window.localStorage.removeItem('tcs-project-story-reading-mode');
  return render(<App />);
}

describe('project story site', () => {
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

  it('defaults to Story mode and switches to Builder without changing routes', () => {
    renderStory();

    expect(
      screen.getByRole('heading', {
        name: /stories that know more than your kid’s name/i,
      }),
    ).toBeTruthy();
    expect(
      screen
        .getByRole('button', { name: 'Story' })
        .getAttribute('aria-pressed'),
    ).toBe('true');

    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /personalization needs more than a name/i,
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Builder' }));
    expect(window.localStorage.getItem('tcs-project-story-reading-mode')).toBe(
      'builder',
    );
    expect(
      screen.getByRole('heading', {
        name: /a child is not a prompt/i,
      }),
    ).toBeTruthy();
    expect(window.location.hash).toBe('#/product');

    fireEvent.click(screen.getByRole('button', { name: 'Story' }));
    expect(
      screen.getByRole('heading', {
        name: /personalization needs more than a name/i,
      }),
    ).toBeTruthy();
  });

  it('opens an internal destination at the top with focus on its content', () => {
    renderStory();
    vi.mocked(window.scrollTo).mockClear();

    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);

    expect(window.location.hash).toBe('#/product');
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    expect(document.activeElement).toBe(screen.getByRole('main'));
  });

  it('returns to the beginning even when the footer links to the current page', () => {
    renderStory();
    vi.mocked(window.scrollTo).mockClear();

    fireEvent.click(
      screen.getByRole('link', { name: /Back to the beginning/i }),
    );

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    expect(document.activeElement).toBe(screen.getByRole('main'));
  });

  it('opens history destinations at the top after a hash navigation', () => {
    renderStory();
    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);
    vi.mocked(window.scrollTo).mockClear();

    window.history.replaceState({}, '', '#/development');
    fireEvent(window, new HashChangeEvent('hashchange'));

    expect(
      screen.getByRole('heading', {
        name: /A disclaimer was only the starting point/i,
      }),
    ).toBeTruthy();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    expect(document.activeElement).toBe(screen.getByRole('main'));
  });

  it('keeps the current page when the skip link targets its main content', () => {
    renderStory();
    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);

    window.history.replaceState({}, '', '#main-content');
    fireEvent(window, new HashChangeEvent('hashchange'));

    expect(
      screen.getByRole('heading', {
        name: /personalization needs more than a name/i,
      }),
    ).toBeTruthy();
  });

  it('owns scroll restoration while mounted and restores the browser setting on unmount', () => {
    window.history.scrollRestoration = 'auto';
    const { unmount } = renderStory();

    expect(window.history.scrollRestoration).toBe('manual');

    unmount();
    expect(window.history.scrollRestoration).toBe('auto');
  });

  it('keeps the Tiny Custom Stories brand in the shared header', () => {
    renderBuilder();

    const header = document.querySelector('.site-header');
    const brand = screen.getByRole('link', {
      name: 'Tiny Custom Stories project story home',
    });

    expect(header).toBeTruthy();
    expect(header?.contains(brand)).toBe(true);
    expect(brand.textContent).toContain('Tiny Custom Stories');
  });

  it('keeps reading mode outside the collapsible small-screen navigation', () => {
    renderBuilder();

    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    const navigation = document.getElementById('project-story-navigation');
    const storyButton = screen.getByRole('button', { name: 'Story' });
    const builderButton = screen.getByRole('button', { name: 'Builder' });

    expect(navigation).toBeTruthy();
    expect(navigation?.contains(storyButton)).toBe(false);
    expect(navigation?.contains(builderButton)).toBe(false);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-controls')).toBe(
      'project-story-navigation',
    );

    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(
      screen.getByRole('button', { name: 'Close navigation' }),
    ).toBeTruthy();

    fireEvent.click(storyButton);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(storyButton.getAttribute('aria-pressed')).toBe('true');

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(toggle);

    fireEvent.click(toggle);
    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(window.location.hash).toBe('#/product');
  });

  it('explains the public boundary and preserves knowledge-status distinctions', () => {
    renderBuilder();

    expect(
      screen.getByRole('heading', {
        name: /stories built with care, not just code/i,
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Public library' })[0]);
    expect(
      screen.getByRole('heading', { name: 'Public information is curated.' }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Decision record/i }));
    expect(screen.getAllByText('Confirmed decision').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Open question').length).toBeGreaterThan(0);
    expect(
      content().getByText(/Story work has three ownership boundaries/i),
    ).toBeTruthy();
  });

  it('keeps the established routes while adding development, architecture, and delivery pages', () => {
    renderBuilder();

    fireEvent.click(screen.getAllByRole('link', { name: 'The product' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /a child is not a prompt/i,
      }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    expect(
      screen.getByRole('heading', {
        name: /better questions shaped the architecture/i,
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Architecture' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /separate responsibility before separating machines/i,
      }),
    ).toBeTruthy();
    expect(content().getByText('Story Lifecycle')).toBeTruthy();
    expect(content().getByText('Story Context Selection')).toBeTruthy();
    expect(content().getByText('Story Generation')).toBeTruthy();
    expect(content().getByText('Visual Theme System')).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'How we build' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /small tasks need evidence at the joins/i,
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getAllByRole('link', { name: 'Lessons' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /lessons, changes, and their evidence/i,
      }),
    ).toBeTruthy();
  });

  it('keeps working-record pages out of the main header', () => {
    renderBuilder();

    expect(screen.queryByRole('link', { name: 'Decisions' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'Roadmap' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'Open questions' })).toBeNull();
    expect(
      screen.getAllByRole('link', { name: 'Lessons' }).length,
    ).toBeGreaterThan(0);
  });

  it('groups Sprint 1, 2, and 3 together instead of privileging one in the header', () => {
    renderBuilder();

    expect(screen.queryByRole('link', { name: 'Sprint 1' })).toBeNull();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );

    expect(screen.getByRole('link', { name: /Read Sprint 1/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Read Sprint 2/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Read Sprint 3/i })).toBeTruthy();

    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 2/i }));
    expect(
      screen.getByRole('heading', {
        name: /the child map records change over time/i,
      }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 3/i }));
    expect(
      screen.getByRole('heading', {
        name: /story studio is growing around reversible work/i,
      }),
    ).toBeTruthy();
  });

  it('states the Sprint 1 gate accurately and preserves its legacy route', () => {
    renderBuilder();

    expect(
      content().getByText(/Sprint 1 remains evidence-gated/i),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 1/i }));

    expect(
      screen.getByRole('heading', {
        name: /implementation is not a passed outcome gate/i,
      }),
    ).toBeTruthy();
    expect(content().getByText(/Sprint 1 outcome status/i)).toBeTruthy();
    expect(
      content().getByText(/temporary founder-approved sequencing exception/i),
    ).toBeTruthy();
  });

  it('shows the updated roadmap without treating later planning as completed work', () => {
    renderBuilder();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Outcome roadmap/i }));

    expect(
      content().getByText(/Outcome gate open - explicitly not passed/i),
    ).toBeTruthy();
    expect(
      content().getByText(/Synthetic\/local outcome demonstrated/i),
    ).toBeTruthy();
    expect(
      content().getByText(
        /Reduced synthetic checkpoint underway - outcome gate open/i,
      ),
    ).toBeTruthy();
    expect(content().getByText('Sprint 4 - Visual Theme System')).toBeTruthy();
    expect(
      content().getByText(
        /Visual plan accepted; synthetic groundwork underway/i,
      ),
    ).toBeTruthy();
    expect(screen.getAllByText('Proposal').length).toBeGreaterThan(0);
  });

  it('shows privacy planning in both reading modes', () => {
    renderStory();
    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    const storyHeading = screen.getByRole('heading', {
      name: 'A disclaimer was only the starting point.',
    });
    expect(storyHeading).toBeTruthy();
    const regions = content().getByText(/research, not launch markets/i);
    expect(regions).toBeTruthy();

    fireEvent.click(screen.getByRole('link', { name: /See the Privacy/i }));
    expect(window.location.hash).toBe('#/roadmap');
    const roadmapHeading = screen.getByRole('heading', {
      name: 'Privacy is a release gate, not a footer.',
    });
    expect(roadmapHeading).toBeTruthy();
    const launchGate = content().getByText(/not approved launch markets/i);
    expect(launchGate).toBeTruthy();
    const planned = content().getByText(/planned, not shipped/i);
    expect(planned).toBeTruthy();
    const sourceLink = screen.getByRole('link', {
      name: /Read the full public Privacy & Trust roadmap/i,
    });
    const sourceUrl = sourceLink.getAttribute('href');
    expect(sourceUrl?.endsWith('PrivacyAndTrustRoadmap.md')).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'Builder' }));
    expect(window.location.hash).toBe('#/roadmap');
    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    expect(
      screen.getByRole('heading', {
        name: 'A disclaimer was only the starting point.',
      }),
    ).toBeTruthy();
  });

  it('shows a dated delivery snapshot and concrete CI quality gates', () => {
    renderBuilder();

    fireEvent.click(screen.getAllByRole('link', { name: 'How we build' })[0]);

    expect(content().getByText('3,803')).toBeTruthy();
    expect(content().getByText('813')).toBeTruthy();
    expect(content().getByText('775')).toBeTruthy();
    expect(content().getByText('585')).toBeTruthy();
    expect(content().getByText('506')).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        name: 'Build activity · October 21, 2026',
      }),
    ).toBeTruthy();
    expect(content().getByText('4')).toBeTruthy();
    expect(content().getByText(/1,121 of 1,668 recorded runs/i)).toBeTruthy();
    expect(content().getByText(/October 21, 2026:/i)).toBeTruthy();
    expect(content().getByText('Frontend CI')).toBeTruthy();
    expect(content().getByText('Backend CI')).toBeTruthy();
    expect(content().getByText('Repository tools CI')).toBeTruthy();
    expect(content().getByText('Browser evidence')).toBeTruthy();
    expect(content().getByText('Public-story CI')).toBeTruthy();
    expect(screen.queryByText('We ran too much browser CI')).toBeNull();

    fireEvent.click(screen.getAllByRole('link', { name: 'Lessons' })[0]);
    expect(content().getByText('We ran too much browser CI')).toBeTruthy();
    expect(
      content().getByText('Green tests did not prove the assembled product'),
    ).toBeTruthy();
    expect(
      content().getByText('Our agents were competing for one API budget'),
    ).toBeTruthy();
    expect(
      content().getByText('New tools have to earn a permanent place'),
    ).toBeTruthy();
    expect(
      content().getByText('The experiment we are still running'),
    ).toBeTruthy();
    expect(
      content().getByText('Why this project became my AI laboratory'),
    ).toBeTruthy();
    expect(
      content().getByText(
        /Building it changed AI from something the founder followed/i,
      ),
    ).toBeTruthy();
    expect(content().getByText('The next thing that scares me')).toBeTruthy();
    expect(
      content().getByText(
        /Real users, real AI, and the first staging deployment/i,
      ),
    ).toBeTruthy();
  });

  it('describes epic-scoped task integration, the new CI cadence, and model-choice limits', () => {
    renderBuilder();
    fireEvent.click(screen.getAllByRole('link', { name: 'How we build' })[0]);
    expect(content().getByText(/The new integration rhythm/i)).toBeTruthy();
    expect(screen.getAllByText(/manually/i).length).toBeGreaterThan(0);
    expect(content().getByText(/Tasks live inside epics/i)).toBeTruthy();
    fireEvent.click(screen.getAllByRole('link', { name: 'Lessons' })[0]);
    expect(
      content().getByText('Task success was not epic success'),
    ).toBeTruthy();
    expect(
      content().getByText('We almost made model selection another feature'),
    ).toBeTruthy();
    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 3/i }));
    expect(content().getByText(/default-off OpenRouter adapter/i)).toBeTruthy();
    expect(
      content().getByText(
        /Profile-based entry and canonical saved-child setup/i,
      ),
    ).toBeTruthy();
  });

  it('shows the demonstrated Sprint 2 local outcome without implying real-family release', () => {
    renderBuilder();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 2/i }));

    expect(
      screen.getByRole('heading', {
        name: /Synthetic\/local outcome demonstrated\. Real-family release gated/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        name: /from “a list of questions” to a real capability/i,
      }),
    ).toBeTruthy();
    expect(content().getByText(/Versioned content packs/i)).toBeTruthy();
    expect(
      screen.getAllByText(/qualified privacy, legal, security/i).length,
    ).toBeGreaterThan(0);
    expect(
      content().getByText(
        /does not authorize real-family Alpha collection or use/i,
      ),
    ).toBeTruthy();
  });

  it('shows integrated Sprint 3 authoring without claiming the complete Studio outcome', () => {
    renderBuilder();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 3/i }));

    expect(
      screen.getByRole('heading', {
        name: /Reduced synthetic checkpoint underway\. Outcome gate still open/i,
      }),
    ).toBeTruthy();
    expect(content().getByText(/Landed · Story Studio home/i)).toBeTruthy();
    expect(content().getByText(/Landed · direct page editing/i)).toBeTruthy();
    expect(content().getByText(/Landed · earlier versions/i)).toBeTruthy();
    expect(content().getByText(/Later · integrated approval/i)).toBeTruthy();
  });

  it('preserves the accepted visual recipe and stable public PDF path', () => {
    renderBuilder();

    fireEvent.click(screen.getAllByRole('link', { name: 'Design' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /one design language, different responsibilities/i,
      }),
    ).toBeTruthy();
    expect(content().getByText('70%')).toBeTruthy();
    expect(content().getByText('#27213B')).toBeTruthy();
    expect(content().getByText('Storybook light')).toBeTruthy();

    const pdfLinks = screen.getAllByRole('link', { name: /Project PDF/i });
    expect(pdfLinks.length).toBeGreaterThan(0);
    expect(pdfLinks[0]?.getAttribute('href')).toBe(
      '/documents/tiny-custom-stories-project-dossier.pdf',
    );
  });

  it('offers the public-safe Archify explorer from Home and Architecture', () => {
    renderBuilder();

    expect(
      screen.getByRole('img', {
        name: /simplified preview of the Tiny Custom Stories public architecture/i,
      }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getByRole('link', {
        name: /explore the interactive Tiny Custom Stories architecture/i,
      }),
    );

    const explorer = screen.getByTitle(
      'Interactive Tiny Custom Stories architecture',
    );
    expect(explorer.getAttribute('src')).toBe(
      '/architecture/system.html?embed=1&theme=light',
    );

    const fullView = screen.getByRole('link', {
      name: /open the full explorer/i,
    });
    expect(fullView.getAttribute('href')).toBe('/architecture/system.html');
    expect(content().getByText(/internal repository provenance/i)).toBeTruthy();
  });

  it('links the universal Moving Map Development essay from the seventh lesson in both reading modes', () => {
    renderStory();
    fireEvent.click(screen.getAllByRole('link', { name: 'Lessons' })[0]);

    expect(
      content().getByText('Evidence & lessons · seven chapters'),
    ).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        name: /the plan can be wrong even when every ticket is right/i,
      }),
    ).toBeTruthy();

    const articleLink = content().getByRole('link', {
      name: 'Read the Moving Map Development article →',
    });
    expect(articleLink.getAttribute('href')).toBe('#/articles/moving-map');

    window.location.hash = articleLink.getAttribute('href')!;
    fireEvent(window, new HashChangeEvent('hashchange'));
    expect(
      screen.getByRole('heading', {
        name: 'Everyone Followed the Plan. The Plan Was Wrong.',
      }),
    ).toBeTruthy();
    expect(
      document.querySelector('.moving-map-article')?.textContent,
    ).toContain(
      'The kitchen is making pizzas for orders that have not actually',
    );
    expect(
      document.querySelector('.moving-map-article')?.textContent,
    ).toContain('Moving Map Development (MMD)');
    expect(document.querySelector('.moving-map-origin')?.textContent).toContain(
      'October 28, 2026',
    );
    expect(
      document.querySelector('.moving-map-opening')?.textContent,
    ).not.toContain('Tiny Custom Stories');
    expect(
      content().getByRole('link', {
        name: 'Back to the Moving Map Development lesson ↑',
      }),
    ).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Builder' }));
    expect(
      screen.getByRole('heading', {
        name: 'Everyone Followed the Plan. The Plan Was Wrong.',
      }),
    ).toBeTruthy();
    expect(
      content()
        .getByRole('link', {
          name: 'Back to the Moving Map Development lesson ↑',
        })
        .getAttribute('href'),
    ).toContain('mode=builder');
  });
});
