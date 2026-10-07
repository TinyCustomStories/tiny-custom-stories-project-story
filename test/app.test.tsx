import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../src/App';

function renderBuilder() {
  window.localStorage.setItem('tcs-project-story-reading-mode', 'builder');
  return render(<App />);
}

function renderStory() {
  window.localStorage.removeItem('tcs-project-story-reading-mode');
  return render(<App />);
}

describe('project story site', () => {
  afterEach(() => {
    cleanup();
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
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
        name: /three facts can look personalized/i,
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
        name: /three facts can look personalized/i,
      }),
    ).toBeTruthy();
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
      screen.getByText(/translation, not an automatic export/i),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Decision record/i }));
    expect(screen.getAllByText('Confirmed decision').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Open question').length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Story work has three ownership boundaries/i),
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

    fireEvent.click(screen.getAllByRole('link', { name: 'How we build' })[0]);
    expect(
      screen.getByRole('heading', {
        name: /small tasks, hard gates, and a lot of receipts/i,
      }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'What we learned' })[0],
    );
    expect(
      screen.getByRole('heading', {
        name: /the expensive mistakes are part of the story/i,
      }),
    ).toBeTruthy();
  });

  it('keeps working-record pages out of the main header', () => {
    renderBuilder();

    expect(screen.queryByRole('link', { name: 'Decisions' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'Roadmap' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'Open questions' })).toBeNull();
    expect(
      screen.getAllByRole('link', { name: 'What we learned' }).length,
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
        name: /a living child map needs a capability, not a questionnaire/i,
      }),
    ).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 3/i }));
    expect(
      screen.getByRole('heading', {
        name: /story creation is becoming a reversible composition workflow/i,
      }),
    ).toBeTruthy();
  });

  it('states the Sprint 1 gate accurately and preserves its legacy route', () => {
    renderBuilder();

    expect(screen.getByText(/Sprint 1 remains evidence-gated/i)).toBeTruthy();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Read Sprint 1/i }));

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
    renderBuilder();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'Development story' })[0],
    );
    fireEvent.click(screen.getByRole('link', { name: /Outcome roadmap/i }));

    expect(
      screen.getByText(/Outcome gate open - explicitly not passed/i),
    ).toBeTruthy();
    expect(
      screen.getByText(/Synthetic\/local outcome demonstrated/i),
    ).toBeTruthy();
    expect(
      screen.getByText(/Authoring workspace underway - outcome gate open/i),
    ).toBeTruthy();
    expect(screen.getAllByText('Proposal').length).toBeGreaterThan(0);
  });

  it('shows a dated delivery snapshot and concrete CI quality gates', () => {
    renderBuilder();

    fireEvent.click(screen.getAllByRole('link', { name: 'How we build' })[0]);

    expect(screen.getByText('1,262')).toBeTruthy();
    expect(screen.getByText('497')).toBeTruthy();
    expect(screen.getByText('1,344')).toBeTruthy();
    expect(
      screen.getByText(/941 of the 1,344 recorded workflow runs/i),
    ).toBeTruthy();
    expect(screen.getByText('Frontend CI')).toBeTruthy();
    expect(screen.getByText('Backend CI')).toBeTruthy();
    expect(screen.getByText('Repository tools CI')).toBeTruthy();
    expect(screen.getByText('Browser evidence')).toBeTruthy();
    expect(screen.getByText('Public-story CI')).toBeTruthy();
    expect(screen.queryByText('We ran too much browser CI')).toBeNull();

    fireEvent.click(
      screen.getAllByRole('link', { name: 'What we learned' })[0],
    );
    expect(screen.getByText('We ran too much browser CI')).toBeTruthy();
    expect(
      screen.getByText('Green tests did not prove the assembled product'),
    ).toBeTruthy();
    expect(
      screen.getByText('Our agents were competing for one API budget'),
    ).toBeTruthy();
    expect(
      screen.getByText('New tools have to earn a permanent place'),
    ).toBeTruthy();
    expect(
      screen.getByText('The experiment we are still running'),
    ).toBeTruthy();
    expect(
      screen.getByText('Why this project became my AI laboratory'),
    ).toBeTruthy();
    expect(
      screen.getByText('Building the product changed how I learn.'),
    ).toBeTruthy();
    expect(screen.getByText('The next thing that scares me')).toBeTruthy();
    expect(
      screen.getByText(
        /Real users, real AI, and the first staging deployment/i,
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
    expect(screen.getByText(/Versioned content packs/i)).toBeTruthy();
    expect(
      screen.getAllByText(/qualified privacy, legal, security/i).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByText(
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
        name: /Protected authoring workspace underway\. Outcome gate still open/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText(/Landed · Story Studio home/i)).toBeTruthy();
    expect(screen.getByText(/Landed · direct page editing/i)).toBeTruthy();
    expect(screen.getByText(/Landed · earlier versions/i)).toBeTruthy();
    expect(screen.getByText(/Later · integrated approval/i)).toBeTruthy();
  });

  it('preserves the accepted visual recipe and stable public PDF path', () => {
    renderBuilder();

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
    expect(screen.getByText(/internal repository provenance/i)).toBeTruthy();
  });
});
