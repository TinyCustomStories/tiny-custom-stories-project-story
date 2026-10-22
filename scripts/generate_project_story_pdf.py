#!/usr/bin/env python3
"""Generate the curated Tiny Custom Stories public project dossier."""

from __future__ import annotations

import json
from pathlib import Path

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "documents" / "tiny-custom-stories-project-dossier.pdf"
DELIVERY_SNAPSHOT = json.loads((ROOT / "src" / "delivery-snapshot.json").read_text())
WIDTH, HEIGHT = letter
MARGIN = 48

INK = HexColor("#27213B")
MUTED = HexColor("#514B62")
PAPER = HexColor("#FBF8EF")
SURFACE = HexColor("#FFFDF7")
LINE = HexColor("#DED5E6")
PLUM = HexColor("#6F549F")
CORAL = HexColor("#E76042")
SUN = HexColor("#F7B84B")
MINT = HexColor("#9DD3C6")
LAVENDER = HexColor("#E7D8F5")
SUCCESS = HexColor("#245B43")


def register_fonts() -> tuple[str, str, str, str]:
    regular = Path("/System/Library/Fonts/Supplemental/Georgia.ttf")
    bold = Path("/System/Library/Fonts/Supplemental/Georgia Bold.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("TCS-Display", str(regular)))
        pdfmetrics.registerFont(TTFont("TCS-Display-Bold", str(bold)))
        return "TCS-Display", "TCS-Display-Bold", "Helvetica", "Helvetica-Bold"
    return "Times-Roman", "Times-Bold", "Helvetica", "Helvetica-Bold"


DISPLAY, DISPLAY_BOLD, BODY, BODY_BOLD = register_fonts()
MONO = "Courier-Bold"


def style(name: str, font: str = BODY, size: float = 10, leading: float | None = None,
          color: Color = INK) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.45,
        textColor=color,
        alignment=TA_LEFT,
        allowWidows=0,
        allowOrphans=0,
    )


BODY_STYLE = style("body", size=10.2, leading=15.4, color=MUTED)
BODY_DARK = style("body-dark", size=10.2, leading=15.4, color=SURFACE)
SMALL = style("small", size=8.2, leading=11.7, color=MUTED)
SMALL_DARK = style("small-dark", size=8.2, leading=11.7, color=SURFACE)
CARD_TITLE = style("card-title", font=DISPLAY_BOLD, size=13.5, leading=16)
CARD_TITLE_DARK = style(
    "card-title-dark", font=DISPLAY_BOLD, size=13.5, leading=16, color=SURFACE
)
LABEL = style("label", font=MONO, size=7, leading=9, color=PLUM)
LABEL_DARK = style("label-dark", font=MONO, size=7, leading=9, color=SUN)


def paragraph(canvas: Canvas, text: str, x: float, y_top: float, width: float,
              paragraph_style: ParagraphStyle = BODY_STYLE) -> float:
    flowable = Paragraph(text, paragraph_style)
    _, height = flowable.wrap(width, HEIGHT)
    flowable.drawOn(canvas, x, y_top - height)
    return y_top - height


def page_base(canvas: Canvas, page_number: int, total_pages: int, section: str,
              background: Color = PAPER, dark: bool = False) -> None:
    canvas.setFillColor(background)
    canvas.rect(0, 0, WIDTH, HEIGHT, fill=1, stroke=0)
    canvas.setFillColor(SUN if dark else PLUM)
    canvas.setFont(MONO, 7)
    canvas.drawString(MARGIN, HEIGHT - 34, section.upper())
    canvas.setFillColor(SURFACE if dark else MUTED)
    canvas.setFont(BODY, 7)
    canvas.drawRightString(WIDTH - MARGIN, HEIGHT - 34, "PUBLIC PROJECT STORY")
    canvas.setStrokeColor(Color(1, 1, 1, 0.24) if dark else LINE)
    canvas.setLineWidth(0.7)
    canvas.line(MARGIN, 35, WIDTH - MARGIN, 35)
    canvas.setFillColor(SURFACE if dark else MUTED)
    canvas.setFont(MONO, 7)
    canvas.drawString(MARGIN, 21, "TINY CUSTOM STORIES")
    canvas.drawRightString(
        WIDTH - MARGIN, 21, f"{page_number:02d} / {total_pages:02d}"
    )


def page_title(canvas: Canvas, title: str, subtitle: str, dark: bool = False,
               y: float = 690) -> float:
    y = paragraph(
        canvas,
        title,
        MARGIN,
        y,
        WIDTH - MARGIN * 2,
        style(
            "page-title",
            font=DISPLAY_BOLD,
            size=31,
            leading=33,
            color=SURFACE if dark else INK,
        ),
    )
    y -= 14
    return paragraph(
        canvas,
        subtitle,
        MARGIN,
        y,
        WIDTH - MARGIN * 2,
        BODY_DARK if dark else BODY_STYLE,
    )


def pill(canvas: Canvas, text: str, x: float, y: float, fill: Color,
         text_color: Color = INK) -> float:
    width = max(74, pdfmetrics.stringWidth(text, MONO, 7) + 20)
    canvas.setFillColor(fill)
    canvas.roundRect(x, y, width, 22, 11, fill=1, stroke=0)
    canvas.setFillColor(text_color)
    canvas.setFont(MONO, 7)
    canvas.drawCentredString(x + width / 2, y + 7, text.upper())
    return width


def card(canvas: Canvas, x: float, y_top: float, width: float, height: float,
         title: str, body: str, fill: Color = SURFACE, accent: Color = SUN,
         dark: bool = False, label: str | None = None) -> None:
    y = y_top - height
    canvas.setFillColor(accent)
    canvas.roundRect(x + 5, y - 5, width, height, 8, fill=1, stroke=0)
    canvas.setFillColor(fill)
    canvas.setStrokeColor(INK)
    canvas.setLineWidth(1.4)
    canvas.roundRect(x, y, width, height, 8, fill=1, stroke=1)
    cursor = y_top - 17
    if label:
        cursor = paragraph(
            canvas,
            label.upper(),
            x + 15,
            cursor,
            width - 30,
            LABEL_DARK if dark else LABEL,
        )
        cursor -= 8
    cursor = paragraph(
        canvas,
        title,
        x + 15,
        cursor,
        width - 30,
        CARD_TITLE_DARK if dark else CARD_TITLE,
    )
    cursor -= 7
    paragraph(
        canvas,
        body,
        x + 15,
        cursor,
        width - 30,
        SMALL_DARK if dark else SMALL,
    )


def rows_page(canvas: Canvas, total: int, n: int, section: str, title: str,
              subtitle: str, rows: list[tuple[str, str, str]],
              background: Color = PAPER) -> None:
    page_base(canvas, n, total, section, background)
    y = page_title(canvas, title, subtitle)
    cursor = y - 24
    for number, row_title, body in rows:
        canvas.setStrokeColor(LINE)
        canvas.line(MARGIN, cursor, WIDTH - MARGIN, cursor)
        canvas.setFillColor(CORAL)
        canvas.setFont(MONO, 8.5)
        canvas.drawString(MARGIN, cursor - 25, number)
        paragraph(canvas, row_title, MARGIN + 45, cursor - 12, 190, CARD_TITLE)
        paragraph(
            canvas,
            body,
            MARGIN + 244,
            cursor - 12,
            WIDTH - MARGIN * 2 - 244,
            SMALL,
        )
        cursor -= 72


def cover(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "October 21, 2026 edition", INK, dark=True)
    canvas.setFillColor(CORAL)
    canvas.circle(WIDTH - 112, HEIGHT - 138, 58, fill=1, stroke=0)
    canvas.setFillColor(SUN)
    canvas.circle(WIDTH - 148, HEIGHT - 170, 23, fill=1, stroke=0)
    canvas.setStrokeColor(MINT)
    canvas.setLineWidth(7)
    canvas.line(MARGIN, 502, WIDTH - 165, 502)
    paragraph(
        canvas,
        "Stories built<br/><font color='#E76042'>with care,</font><br/>not just code.",
        MARGIN, 650, 455,
        style("cover-title", font=DISPLAY_BOLD, size=47, leading=48, color=SURFACE),
    )
    paragraph(
        canvas,
        "An October 21 checkpoint: demonstrated synthetic Child Map and Discovery, a bounded fictional Story Studio trial, new design lessons, transparent delivery evidence, and the gates still open before real-family Alpha.",
        MARGIN, 414, 410,
        style("cover-copy", size=12.5, leading=18.5, color=SURFACE),
    )
    pill(canvas, "Verified + candid", MARGIN, 307, MINT, SUCCESS)
    pill(canvas, f"{total} pages", MARGIN + 145, 307, SUN, INK)
    paragraph(
        canvas,
        "The site and this dossier share a dated public narrative, not a release claim.",
        MARGIN, 265, 420, SMALL_DARK,
    )


def status(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Where the project is now")
    y = page_title(
        canvas,
        "More integrated evidence. The Alpha gate is still open.",
        "Sprint 0 is demonstrated. Sprint 1 remains evidence-gated. Sprint 2 passed its accepted synthetic/local outcome on October 4. Sprint 3 is advancing toward a smaller fictional checkpoint.",
    )
    card(
        canvas, MARGIN, y - 34, 242, 210,
        "Sprint 2",
        "The Child Map and data-driven Discovery passed their assembled synthetic/local outcome, with real local data-store and media evidence. Qualified privacy, security, legal, and child-safety review is still required before real-family use.",
        fill=MINT, accent=PLUM, label="Synthetic/local proven",
    )
    card(
        canvas, MARGIN + 274, y - 34, 242, 210,
        "Sprint 3",
        "Protected editing and revisions exist. A separate, default-off fictional story preview reached development; a fixed synthetic local journey reached persisted approval and reopen. The normal accepted parent outcome remains open.",
        fill=SURFACE, accent=CORAL, label="Partial / outcome open",
    )
    paragraph(
        canvas,
        "A transient AI candidate is not an approved story. A fixed local demonstration is not permission to transfer family data or a passed private Alpha.",
        MARGIN, 220, WIDTH - MARGIN * 2,
        style("status-quote", font=DISPLAY_BOLD, size=15.5, leading=20.5, color=PLUM),
    )


def purpose(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Purpose and people", LAVENDER)
    y = page_title(
        canvas,
        "A parent turns care and intent into a story a child can enjoy.",
        "Tiny Custom Stories aims to make personalized learning playful and understandable while keeping technology bounded and worthy of family trust.",
    )
    data = [
        ("Parents lead", "Choose purpose and permitted context, then review and approve. The system should never decide silently which family facts belong in a story.", SUN),
        ("Children receive wonder", "The product direction covers ages two through twelve. A child sees approved, family-visible stories rather than parent controls or drafts.", MINT),
        ("AI assists", "Generation can propose a draft, but it does not own family authority, persisted Story truth, or the decision to publish to a child.", CORAL),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + i * 174, y - 42, 156, 235, title, body, fill=SURFACE, accent=accent, label=f"Role {i + 1}")
    paragraph(
        canvas,
        "The goal is not infinite AI content or attention captured. It is a meaningful, parent-directed story for fun and fantasy, morals and values, or reading development.",
        MARGIN, 205, WIDTH - MARGIN * 2, SMALL,
    )


def sprint0(canvas: Canvas, n: int, total: int) -> None:
    rows_page(
        canvas, total, n, "Sprint 0 evidence",
        "A completed sprint is a demonstrated outcome.",
        "Sprint 0 passed only after the same identified foundation was checked locally and in CI, with unresolved risks carried forward rather than hidden.",
        [
            ("01", "Buildable foundations", "React/Vite and ASP.NET Core foundations build and test independently of the retired applications."),
            ("02", "Contracts", "The checked-in API contract reproduces deterministically and agrees with runtime behavior."),
            ("03", "Quality gates", "Formatting, linting, types, analyzers, Release builds, tests, and dependency thresholds passed."),
            ("04", "Browser evidence", "A controlled browser journey and reviewed artifacts showed the web and API foundations working together."),
            ("05", "Clean hand-off", "The recorded gate found no remaining Sprint 0 must-have work."),
        ],
        MINT,
    )


def sprint1(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Sprint 1", INK, dark=True)
    y = page_title(
        canvas,
        "A strong implementation can still have an open outcome gate.",
        "Sprint 1 built the family-access boundary deeply: child-safe default mode, protected parent authority, expiry, recovery, isolation, protected work restoration, accessibility, and end-to-end evidence. One required provider proof remains unresolved.",
        dark=True,
    )
    data = [
        ("Child mode", "Default after sign-in. Read-only. Parent data and protected actions stay unavailable.", SUN),
        ("Parent mode", "Deliberate adult entry with server-enforced authority for sensitive family and story work.", MINT),
        ("Awkward states", "Expiry, refresh, lock contention, recovery, and concealed protected work are part of the behavior.", SUN),
        ("Gate status", "Substantial implementation is not being used as a substitute for the unresolved provider evidence.", MINT),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + (i % 2) * 264, y - 30 - (i // 2) * 174, 244, 150, title, body, fill=INK, accent=accent, dark=True, label=f"Boundary {i + 1}")


def sprint1_evidence(canvas: Canvas, n: int, total: int) -> None:
    rows_page(
        canvas, total, n, "Sprint 1 evidence",
        "The awkward moments were treated as product behavior.",
        "The gate remains open, but the evidence base is much richer than the September 2 public snapshot showed.",
        [
            ("01", "Family isolation", "First and repeat sign-in preserve one internal family boundary without cross-family access."),
            ("02", "Child-safe authorization", "Child mode cannot read protected parent information or successfully call parent-only APIs."),
            ("03", "Expiry and recovery", "Entry, failure, expiry, refresh, lock contention, and recovery paths have targeted coverage."),
            ("04", "Protected work", "Temporary parent-only work restores only inside the authorized boundary."),
            ("05", "Accessibility", "Keyboard, focus, announcements, reflow, error recovery, and responsive evidence are explicit."),
            ("06", "End-to-end journey", "Synthetic browser evidence exercises sign-in, protected entry, and return to child mode."),
        ],
    )


def sprint2(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Sprint 2 - Child Map + Discovery", LAVENDER)
    y = page_title(
        canvas,
        "The Child Map outcome was demonstrated locally.",
        "The accepted synthetic/local outcome closed on October 4 after assembled browser, API, database, private-media, and founder walkthrough evidence. This is not clearance for real-family Alpha.",
    )
    data = [
        ("Temporal truth", "Protected Child Map lifecycle, current/history views, Right Now, Then & Now, stale-write handling, correction, and recovery have demonstrated synthetic/local evidence.", SUN),
        ("Data-driven Discovery", "Versioned content packs, immutable catalog snapshots, indexed candidates, and deterministic contextual scoring and diversity do not depend on runtime AI interpreting a child.", MINT),
        ("Deletion and media", "Deletion participation and private-media flows have local evidence. Broader source-versus-story cleanup and real provider-copy handling remain later boundaries.", CORAL),
        ("Trust before release", "The conservative privacy, collection, retention, and provider-transfer direction exists. Qualified legal, privacy, security, and child-safety review is still required.", PLUM),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + (i % 2) * 264, y - 28 - (i // 2) * 182, 244, 158, title, body, fill=SURFACE, accent=accent, label=f"Sprint 2 {i + 1}")
    paragraph(
        canvas,
        "October 4 marked an accepted synthetic/local outcome, not a public launch. The child and parent trust boundary remains more important than the number of merged implementation tasks.",
        MARGIN, 142, WIDTH - MARGIN * 2, SMALL,
    )


def sprint3(canvas: Canvas, n: int, total: int) -> None:
    rows_page(
        canvas, total, n, "Sprint 3 - Story Studio",
        "A working slice is progress, not the whole parent journey.",
        "The October 14 reset narrowed the next outcome to one profile-only fictional offline story. Later developer-only experiments are separate, and the complete Sprint 3 gate is open.",
        [
            ("01", "Protected Story Studio", "Saved setup and purpose, direct page or cover editing, earlier-version restore, and review work have reached development."),
            ("02", "Accepted smaller target", "A fresh plan, deterministic cover and ten text pages, checked exact-revision approval, and protected reopen form the accepted intermediate outcome."),
            ("03", "Fictional AI preview", "October 20 checkpoints brought a default-off local preview with independent curated idea and feel choices. Candidates are unassessed and unsaved."),
            ("04", "Bounded real local test", "An October 21 fixed-story test used the real local web app, API, and database to approve and reopen an immutable story after restart."),
            ("05", "Epic-only mapping", "Later dormant mapping and optional-context contracts remain isolated on epic branches, not enabled production or family-data transfer."),
            ("06", "Outcome still open", "The complete normal journey, quality and safety evidence, provider clearance, and real-family release remain unproven."),
        ],
    )


def architecture(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Capability architecture")
    y = page_title(
        canvas,
        "Separate responsibility before separating machines.",
        "The project now makes ownership explicit inside the application first. A capability may later become a worker or service when operational evidence justifies that boundary.",
    )
    nodes = [
        ("Web", "Child-safe and protected-parent experiences", SUN),
        ("API", "Family authority + application contracts", MINT),
        ("Discovery", "Questions, eligibility, pacing, follow-ups", LAVENDER),
        ("Story", "Lifecycle, Context Selection, Generation", SURFACE),
    ]
    for i, (title, body, fill) in enumerate(nodes):
        x = MARGIN + i * 132
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.roundRect(x, y - 190, 112, 156, 30, fill=1, stroke=1)
        paragraph(canvas, title, x + 12, y - 65, 88, CARD_TITLE)
        paragraph(canvas, body, x + 12, y - 116, 88, SMALL)
    paragraph(canvas, "Story capability ownership", MARGIN, y - 232, 180, LABEL)
    paragraph(
        canvas,
        "<b>Story Lifecycle</b> owns Story truth, persistence, revisions, approval, and deletion participation.<br/>"
        "<b>Story Context Selection</b> owns policy, permitted candidates, parent selection, and ContextBundle construction.<br/>"
        "<b>Story Generation</b> consumes minimized versioned artifacts and returns candidates/findings; it does not own family authorization or Story persistence.",
        MARGIN,
        y - 252,
        WIDTH - MARGIN * 2,
        BODY_STYLE,
    )
    paragraph(
        canvas,
        "Physical extraction remains evidence-led. Worker/service extraction, durable workflow technology, broker, deployment platform, and production MCP adapters are still open operational choices.",
        MARGIN,
        182,
        WIDTH - MARGIN * 2,
        style("arch-quote", font=DISPLAY_BOLD, size=15.5, leading=20, color=PLUM),
    )


def roadmap(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Outcome-gated roadmap")
    y = page_title(
        canvas,
        "Seven outcomes. Different levels of evidence.",
        "Sprint 2's synthetic/local milestone is demonstrated. Sprint 3 has bounded fictional experiments and an open end-to-end outcome. Sprint 4 has an accepted Visual Theme System direction, not a finished visual layer.",
    )
    items = [
        ("00", "Foundation", "Proven", MINT),
        ("01", "Accounts + parent mode", "Gate open", CORAL),
        ("02", "Child Map + Discovery", "Synthetic", MINT),
        ("03", "Story Studio", "Partial", SUN),
        ("04", "Visual Theme System", "Planned", LAVENDER),
        ("05", "Child library + reader", "Later", LAVENDER),
        ("06", "Alpha safety + release", "Later", LAVENDER),
    ]
    cursor = y - 26
    for number, title, state, fill in items:
        canvas.setStrokeColor(LINE)
        canvas.line(MARGIN, cursor, WIDTH - MARGIN, cursor)
        canvas.setFillColor(CORAL)
        canvas.setFont(MONO, 8.5)
        canvas.drawString(MARGIN, cursor - 24, number)
        paragraph(canvas, title, MARGIN + 50, cursor - 12, 290, CARD_TITLE)
        pill(canvas, state, WIDTH - MARGIN - 100, cursor - 30, fill, INK)
        cursor -= 62
    paragraph(
        canvas,
        "One reviewed epic slice is not a finished sprint. Controlled visuals, staging, provider policy, and qualified release reviews remain bounded, separately evidenced decisions.",
        MARGIN, 118, WIDTH - MARGIN * 2, SMALL,
    )


def delivery(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "How the work is delivered", MINT)
    y = page_title(
        canvas,
        "Work becomes evidence when its boundaries are clear.",
        "The October 21 GitHub snapshot covers historical activity in the main product repository, not a live metric, a productivity score, or evidence that an outcome gate passed.",
    )
    snapshot = DELIVERY_SNAPSHOT
    stats = [
        (f"{snapshot['commits']:,}", "commits", "development ancestry"),
        (f"{snapshot['pullRequestsCreated']:,}", "pull requests", "created"),
        (f"{snapshot['pullRequestsMerged']:,}", "PRs merged", "reviewed + landed"),
        (f"{snapshot['issuesTracked']:,}", "issues", "tracked"),
        (f"{snapshot['taskIssues']:,}", "task issues", "implementation / validation"),
        (f"{snapshot['workflowRuns']:,}", "workflow runs", "historical Actions"),
    ]
    usable = WIDTH - MARGIN * 2
    gap = 10
    card_width = (usable - gap * 2) / 3
    for i, (value, title, detail) in enumerate(stats):
        col, row = i % 3, i // 3
        x = MARGIN + col * (card_width + gap)
        top = y - 28 - row * 112
        card(
            canvas,
            x,
            top,
            card_width,
            92,
            f"{value} {title}",
            detail,
            fill=SURFACE if i % 2 == 0 else LAVENDER,
            accent=[SUN, MINT, CORAL][col],
            label=f"Snapshot {i + 1}",
        )

    paragraph(
        canvas,
        f"{snapshot['plannedSprints']} outcome-gated sprints are mapped. "
        f"{snapshot['closedIssues']:,} issues are closed and {snapshot['openIssues']:,} remain open. "
        f"The product repository has {snapshot['workflowDefinitions']} CI workflow files; "
        f"{snapshot['successfulWorkflowRuns']:,} of {snapshot['workflowRuns']:,} historical workflow runs completed successfully. "
        "These include superseded builds and are not the current-code pass rate.",
        MARGIN,
        y - 268,
        usable,
        BODY_STYLE,
    )

    paragraph(
        canvas,
        "IDEA / EVIDENCE  ->  ACCEPTED DECISION  ->  OWNED ISSUE  ->  FOCUSED PR  ->  INDEPENDENT REVIEW  ->  EPIC CHECKPOINT  ->  ASSEMBLED OUTCOME",
        MARGIN,
        y - 350,
        usable,
        style("delivery-loop", font=MONO, size=6.8, leading=10.5, color=PLUM),
    )

    card(
        canvas,
        MARGIN,
        y - 370,
        (usable - gap) / 2,
        132,
        "Small, explicit work",
        "Reconcile the original parent journey before generating more Ready tasks. Give each issue an owner, evidence target, and route into a reviewed epic checkpoint.",
        fill=SURFACE,
        accent=SUN,
        label="Execution",
    )
    card(
        canvas,
        MARGIN + (usable - gap) / 2 + gap,
        y - 370,
        (usable - gap) / 2,
        132,
        "Verification before completion",
        "Focused local checks, independent review, and exact-head epic verification matter more than raw activity. Hosted browser checks are selective.",
        fill=SURFACE,
        accent=CORAL,
        label="Review",
    )
    paragraph(
        canvas,
        f"Snapshot: {snapshot['snapshotDate']}. Reachable commits include older merged history, so totals do not measure recent development velocity.",
        MARGIN,
        72,
        usable,
        SMALL,
    )


def philosophy(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Design philosophy")
    y = page_title(
        canvas,
        "The why behind every screen and hand-off.",
        "The shared philosophy guides child reading, protected parent workflows, public storytelling, and agent implementation without forcing those surfaces to look alike.",
    )
    items = [
        ("Human intention leads", "AI assists inside parent-led purpose and review."),
        ("Two modes, two needs", "Child and parent authority and density remain distinct."),
        ("Calm over capture", "No attention traps, autoplay, streaks, or artificial urgency."),
        ("Warmth with clarity", "Character supports meaning instead of competing with it."),
        ("Trust is visible", "Privacy, uncertainty, drafts, progress, and limits appear where they matter."),
        ("Every state is designed", "Loading, interruption, error, expiry, recovery, and return count."),
        ("Accessibility is structural", "Semantics, focus, contrast, reflow, alternatives, and reduced motion begin early."),
        ("Evidence outranks taste", "Inspect actual use; screenshots and confident agents are not proof alone."),
    ]
    for i, (title, body) in enumerate(items):
        card(canvas, MARGIN + (i % 2) * 264, y - 28 - (i // 2) * 116, 244, 98, title, body, fill=SURFACE, accent=[SUN, MINT, LAVENDER, CORAL][i // 2])


def visual_recipe(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Visual recipe")
    y = page_title(
        canvas,
        "One reproducible visual language, not copied pages.",
        "The philosophy defines why. The paper-and-ink visual language specifies typography, semantic colors, spacing, responsive layout, controls, and interaction states for reusable agent work.",
    )
    segments = [
        ("70%", "calm foundation", 0.70, PAPER),
        ("20%", "handcrafted character", 0.20, LAVENDER),
        ("10%", "emphasis", 0.10, SUN),
    ]
    x = MARGIN
    usable = WIDTH - MARGIN * 2
    for amount, label, fraction, fill in segments:
        w = usable * fraction
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.rect(x, y - 112, w, 88, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(DISPLAY_BOLD, 20 if fraction > 0.15 else 13)
        canvas.drawString(x + 10, y - 58, amount)
        if fraction > 0.15:
            paragraph(canvas, label, x + 10, y - 72, w - 20, SMALL)
        x += w
    palette = [
        ("INK", "#27213B", INK), ("PAPER", "#FBF8EF", PAPER),
        ("PLUM", "#6F549F", PLUM), ("CORAL", "#E76042", CORAL),
        ("SUN", "#F7B84B", SUN), ("MINT", "#9DD3C6", MINT),
        ("LAVENDER", "#E7D8F5", LAVENDER),
    ]
    for i, (name, value, fill) in enumerate(palette):
        col, row = i % 4, i // 4
        cx, cy = MARGIN + col * 132, y - 190 - row * 92
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.circle(cx + 24, cy, 22, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(MONO, 7)
        canvas.drawString(cx + 52, cy + 4, name)
        canvas.setFillColor(MUTED)
        canvas.setFont("Courier", 7)
        canvas.drawString(cx + 52, cy - 9, value)
    paragraph(canvas, "Display: Fraunces. Body and controls: Nunito Sans. Metadata: DM Mono. The generated dossier keeps accepted fallback fonts when those web fonts are unavailable.", MARGIN, 265, WIDTH - MARGIN * 2, SMALL)
    paragraph(
        canvas,
        "A coherent design system gives agents direction without erasing personality: shared values, reusable components, and approved differences for each surface.",
        MARGIN,
        186,
        WIDTH - MARGIN * 2,
        style("recipe-quote", font=DISPLAY_BOLD, size=16, leading=21, color=PLUM),
    )



def design_lesson(canvas: Canvas, n: int, total: int) -> None:
    rows_page(
        canvas, total, n, "Design lesson",
        "A design philosophy became a development tool.",
        "Two living references helped different AI coding agents make coherent choices. The founder found them useful, but this is not measured usability research.",
        [
            ("01", "Philosophy: why", "Start with parent intent, child safety, clarity, trust, and accessibility before debating decoration."),
            ("02", "Visual language: how", "Define colors, type, spacing, components, states, and responsive layouts so new pages belong to the product."),
            ("03", "Different surfaces", "Child, parent, serious, and public experiences express shared product values differently."),
            ("04", "Agent handoffs", "Agents read both documents, reuse patterns, and explain exceptions rather than inventing a fresh style."),
            ("05", "Keep checking", "The founder experienced better consistency, but there is no measured speedup or independent family study."),
        ],
        LAVENDER,
    )


def questions(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Open questions", CORAL, dark=True)
    y = page_title(
        canvas,
        "Useful unknowns stay visible.",
        "Qualified review, story context and provider policy, deletion, story quality, staging, and real-family value still need independent evidence.",
        dark=True,
    )
    items = [
        "What must qualified privacy, legal, security, and child-safety review validate before real-family Alpha use?",
        "Which policy-permitted Child Map observations may be used for a specific story or external provider?",
        "What happens to drafts and approved stories when their Child Map sources are later deleted?",
        "When should Story Generation move from the API process to a worker or service?",
        "Which providers, workflow products, and deployment choices meet the evidence bar?",
        "Will parents and children find meaningful value beyond a local fictional demonstration?",
    ]
    for i, question in enumerate(items):
        x = MARGIN + (i % 2) * 264
        top = y - 28 - (i // 2) * 137
        canvas.setFillColor(SURFACE)
        canvas.roundRect(x, top - 132, 244, 120, 8, fill=1, stroke=0)
        canvas.setFillColor(CORAL)
        canvas.setFont(MONO, 8)
        canvas.drawString(x + 14, top - 34, f"Q{i + 1:02d}")
        paragraph(canvas, question, x + 14, top - 48, 216, CARD_TITLE)


def library(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "How to read this story")
    y = page_title(
        canvas,
        "Certainty deserves a label. Privacy deserves a boundary.",
        "The public story is a curated translation. It does not render internal documentation automatically or expose private project links, family information, credentials, or attack-relevant operating detail.",
    )
    statuses = [
        ("Confirmed decision", "A deliberately adopted choice.", MINT),
        ("Verified fact", "Supported by named repository evidence.", SURFACE),
        ("Proposal", "A candidate direction, not a promise.", SUN),
        ("Assumption", "A belief that still needs evidence.", LAVENDER),
        ("Open question", "An unresolved matter kept visible.", CORAL),
    ]
    cursor = y - 26
    for title, body, fill in statuses:
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.roundRect(MARGIN, cursor - 52, 172, 40, 20, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(MONO, 7)
        canvas.drawCentredString(MARGIN + 86, cursor - 37, title.upper())
        paragraph(canvas, body, MARGIN + 202, cursor - 18, 300, BODY_STYLE)
        cursor -= 64
    paragraph(
        canvas,
        "Every material public update should preserve knowledge status, public safety, existing route compatibility, and the site's established visual language unless newer accepted evidence explicitly supersedes it.",
        MARGIN,
        164,
        WIDTH - MARGIN * 2,
        style("library-quote", font=DISPLAY_BOLD, size=16, leading=21, color=PLUM),
    )


def next_page(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "What comes next", INK, dark=True)
    y = page_title(
        canvas,
        "Finish the evidence, then keep composing deliberately.",
        "The near-term project is still a chain of explicit decisions, small implementation slices, synthetic evidence, review, and outcome gates—not one giant autonomous build.",
        dark=True,
    )
    data = [
        ("Close Sprint 2 honestly", "Finish the remaining People/Places/media/deletion slices, cross-cutting evidence, qualified review, and integrated outcome demonstration.", SUN),
        ("Keep Discovery deterministic", "Use the versioned data-driven catalog and controlled context boundary without introducing runtime family-data AI interpretation.", MINT),
        ("Complete generation foundations", "Finish the bounded ten-page generation, checking, recovery, progress, and approved provider path before calling Story generation complete.", MINT),
        ("Build the visible Studio", "Layer editing, revision history, continuity choices, cover changes, and approval on top of the landed Story foundations.", SUN),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + (i % 2) * 264, y - 30 - (i // 2) * 174, 244, 150, title, body, fill=INK, accent=accent, dark=True, label="Focused next work")
    paragraph(canvas, "Source trail: current Sprint 0/1 gate records; October 1 Sprint 2 outcome and privacy records; Child Map Discovery architecture; Sprint 3 canonical specification and Story capability architecture; current repository implementation evidence; design language; and public-story curation guidance.", MARGIN, 166, WIDTH - MARGIN * 2, SMALL_DARK)


PAGES = [
    ("cover", cover),
    ("status", status),
    ("purpose", purpose),
    ("sprint-0", sprint0),
    ("sprint-1", sprint1),
    ("sprint-1-evidence", sprint1_evidence),
    ("sprint-2-discovery", sprint2),
    ("sprint-3-story-studio", sprint3),
    ("architecture", architecture),
    ("roadmap", roadmap),
    ("delivery", delivery),
    ("philosophy", philosophy),
    ("visual-recipe", visual_recipe),
    ("design-lesson", design_lesson),
    ("open-questions", questions),
    ("public-library", library),
    ("next", next_page),
]


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(OUTPUT), pagesize=letter, pageCompression=1, invariant=1)
    canvas.setTitle("Tiny Custom Stories - Public Project Story - October 21, 2026")
    canvas.setAuthor("Tiny Custom Stories")
    canvas.setSubject(
        "Public guide to the product, delivery evidence, Child Map and data-driven Discovery, "
        "Story Studio synthetic evidence, capability architecture, design lessons, roadmap, and open questions."
    )
    canvas.setCreator("Tiny Custom Stories public project story generator")
    total = len(PAGES)
    for page_number, (bookmark, renderer) in enumerate(PAGES, start=1):
        canvas.bookmarkPage(bookmark)
        canvas.addOutlineEntry(bookmark.replace("-", " ").title(), bookmark, level=0)
        renderer(canvas, page_number, total)
        canvas.showPage()
    canvas.save()
    print(f"Generated {OUTPUT} ({total} pages)")


if __name__ == "__main__":
    build()
