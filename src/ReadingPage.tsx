import React from 'react';

export type ReadingMode = 'story' | 'builder';
export const ReadingContext = React.createContext({
  route: '/',
  mode: 'story' as ReadingMode,
});

type Entry = { id: string; label: string; level: number };
export function sectionId(text: string) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function ReadingPage({ children }: { children: React.ReactNode }) {
  const { route, mode } = React.useContext(ReadingContext);
  const parts = React.Children.toArray(children);
  const root = React.useRef<HTMLDivElement>(null);
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [current, setCurrent] = React.useState('reading-overview');
  const [navOpen, setNavOpen] = React.useState(false);
  const [topic, setTopic] = React.useState('');
  const [locationNote, setLocationNote] = React.useState('');

  React.useLayoutEffect(() => {
    const page = root.current!;
    const headings = [
      ...page.querySelectorAll<HTMLElement>(
        '.reading-document h2, .reading-document h3',
      ),
    ];
    const seen = new Set<string>(['reading-overview']);
    const indexed = headings
      .filter((h) => !h.closest('[data-no-outline]'))
      .map((h) => {
        const base =
          h.dataset.readingKey || h.id || sectionId(h.textContent || 'section');
        let id = base;
        let suffix = 2;
        while (seen.has(id)) id = `${base}-${suffix++}`;
        seen.add(id);
        h.id = id;
        h.tabIndex = -1;
        return {
          id,
          label: h.dataset.navLabel || h.textContent || '',
          level: Number(h.tagName.slice(1)),
        };
      });
    setEntries([
      { id: 'reading-overview', label: 'Overview', level: 2 },
      ...indexed,
    ]);

    const shell = page.closest<HTMLElement>('.page-shell')!;
    const header = shell.querySelector<HTMLElement>('.site-header')!;
    const measureHeader = () =>
      shell.style.setProperty(
        '--reading-header-height',
        `${header.getBoundingClientRect().height}px`,
      );
    measureHeader();
    const resize =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(measureHeader)
        : null;
    resize?.observe(header);

    const navigate = () => {
      if (window.location.hash === '#main-content') return;
      const [path, query] = window.location.hash.slice(1).split('?');
      if (path !== route) return;
      const addressedMode = new URLSearchParams(query).get('mode');
      // Let App render an explicitly addressed mode before resolving its headings.
      if (
        (addressedMode === 'story' || addressedMode === 'builder') &&
        addressedMode !== mode
      )
        return;
      const id =
        new URLSearchParams(query).get('section') || 'reading-overview';
      // Unknown section addresses fall back to the overview without losing the page.
      const addressed = document.getElementById(id);
      const target =
        (addressed && page.contains(addressed) ? addressed : null) ||
        page.querySelector<HTMLElement>('#reading-overview');
      if (!target) return;
      if (!addressed && id !== 'reading-overview') {
        setLocationNote(
          'This view covers that topic differently. Start with the overview or choose a section.',
        );
        window.history.replaceState(
          {},
          '',
          `#${route}?section=reading-overview&mode=${mode}`,
        );
      } else setLocationNote('');
      for (
        let parent = target.parentElement;
        parent && parent !== page;
        parent = parent.parentElement
      ) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
      }
      target
        .closest('article')
        ?.querySelectorAll<HTMLDetailsElement>('[data-supporting-note]')
        .forEach((note) => {
          note.open = true;
        });
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      setCurrent(target.id);
      setNavOpen(false);
    };
    navigate();
    window.addEventListener('hashchange', navigate);

    // Read position only: never changes focus, history, or scroll while the reader scrolls.
    let frame = 0;
    const track = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const edge =
          header.getBoundingClientRect().height +
          (window.innerWidth <= 950 ? 90 : 40);
        let active = 'reading-overview';
        for (const h of headings) {
          if (
            h.getClientRects().length &&
            h.getBoundingClientRect().top <= edge
          )
            active = h.id;
        }
        setCurrent(active);
      });
    };
    window.addEventListener('scroll', track, { passive: true });
    return () => {
      window.removeEventListener('hashchange', navigate);
      window.removeEventListener('scroll', track);
      cancelAnimationFrame(frame);
      resize?.disconnect();
    };
  }, [route, mode]);

  React.useEffect(() => {
    const remember = (event: Event) => {
      const nextMode = (event as CustomEvent<ReadingMode>).detail;
      if (
        current !== 'reading-overview' ||
        window.location.hash.includes('section=')
      ) {
        window.history.replaceState(
          {},
          '',
          `#${route}?section=${encodeURIComponent(current)}&mode=${nextMode}`,
        );
      }
    };
    window.addEventListener('reading-mode-change', remember);
    return () => window.removeEventListener('reading-mode-change', remember);
  }, [current, route]);

  const currentIndex = entries.findIndex((entry) => entry.id === current);
  const currentEntry = entries
    .slice(0, currentIndex + 1)
    .reverse()
    .find((entry) => entry.level === 2);
  const topics = entries.filter((entry) => entry.level === 3);
  const linkTo = (id: string) =>
    `#${route}?section=${encodeURIComponent(id)}&mode=${mode}`;
  const follow = (event: React.MouseEvent<HTMLElement>, id: string) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    window.history.pushState({}, '', linkTo(id));
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  return (
    <div
      ref={root}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && navOpen) {
          setNavOpen(false);
          root.current
            ?.querySelector<HTMLButtonElement>('.reading-nav-toggle')
            ?.focus();
        }
      }}
      onClick={(event) => {
        if (event.defaultPrevented || !(event.target instanceof Element))
          return;
        const anchor = event.target.closest<HTMLAnchorElement>('a');
        const href = anchor?.getAttribute('href');
        if (!href?.startsWith(`#${route}?`)) return;
        const id = new URLSearchParams(href.split('?')[1]).get('section');
        if (id) follow(event, id);
      }}
      className={`reading-page reading-${mode}${route === '/' ? ' reading-home' : ''}`}
    >
      <div id="reading-overview" className="reading-opening" tabIndex={-1}>
        {parts[0]}
        {locationNote && (
          <p className="reading-location-note" role="status">
            {locationNote}
          </p>
        )}
      </div>
      <div className="reading-layout">
        <aside className="reading-rail">
          <button
            className="reading-nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="reading-sections"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span>On this page</span>
            <span>
              {currentEntry?.label || 'Overview'}{' '}
              <span aria-hidden="true">{navOpen ? '−' : '+'}</span>
            </span>
          </button>
          <nav
            id="reading-sections"
            className={navOpen ? 'reading-nav is-open' : 'reading-nav'}
            aria-label="On this page"
          >
            <p className="reading-nav-title">
              {mode === 'story' ? 'Read the chapters' : 'Browse this reference'}
            </p>
            <ol>
              {entries
                .filter((entry) => entry.level === 2)
                .map((entry) => (
                  <li
                    key={entry.id}
                    className={
                      entry.level === 3 ? 'reading-subsection' : undefined
                    }
                  >
                    <a
                      href={linkTo(entry.id)}
                      aria-current={
                        currentEntry?.id === entry.id ? 'location' : undefined
                      }
                      onClick={(event) => follow(event, entry.id)}
                    >
                      {entry.label}
                    </a>
                  </li>
                ))}
            </ol>
            {topics.length > 0 && (
              <form
                className="reading-topic-form"
                aria-label="Topic lookup"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!topic) return;
                  window.history.pushState({}, '', linkTo(topic));
                  window.dispatchEvent(new HashChangeEvent('hashchange'));
                }}
              >
                <label htmlFor="reading-topic">Jump to a topic</label>
                <select
                  id="reading-topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                >
                  <option value="">Choose a topic</option>
                  {topics.map((entry) => (
                    <option key={entry.id} value={entry.id}>
                      {entry.label}
                    </option>
                  ))}
                </select>
                <button type="submit" disabled={!topic}>
                  Go to topic →
                </button>
              </form>
            )}
          </nav>
        </aside>
        <div className="reading-document">
          {parts.slice(1)}
          <a
            className="reading-return"
            href={linkTo('reading-overview')}
            onClick={(event) => follow(event, 'reading-overview')}
          >
            Return to overview ↑
          </a>
        </div>
      </div>
    </div>
  );
}
