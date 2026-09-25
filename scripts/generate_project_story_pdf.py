#!/usr/bin/env python3
"""Generate the curated Tiny Custom Stories public project dossier."""

from __future__ import annotations

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
    page_base(canvas, n, total, "September 24, 2026 edition", INK, dark=True)
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
        MARGIN,
        650,
        455,
        style("cover-title", font=DISPLAY_BOLD, size=47, leading=48, color=SURFACE),
    )
    paragraph(
        canvas,
        "An updated public guide to the product, demonstrated foundation, open Sprint 1 gate, Child Map Discovery, Story Studio architecture, roadmap, design language, and useful unknowns.",
        MARGIN,
        414,
        410,
        style("cover-copy", size=12.5, leading=18.5, color=SURFACE),
    )
    pill(canvas, "Verified + candid", MARGIN, 307, MINT, SUCCESS)
    pill(canvas, f"{total} pages", MARGIN + 145, 307, SUN, INK)
    paragraph(
        canvas,
        "Same design DNA. More mature architecture. No false finish line.",
        MARGIN,
        265,
        390,
        SMALL_DARK,
    )


def status(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Where the project is now")
    y = page_title(
        canvas,
        "The project moved forward without rewriting the past.",
        "Sprint 0 is demonstrated. Sprint 1 has substantial implementation and evidence, but its outcome gate remains explicitly open. Sprint 2 and Sprint 3 may proceed only inside a documented synthetic-input exception.",
    )
    card(
        canvas,
        MARGIN,
        y - 34,
        242,
        210,
        "Sprint 0",
        "Clean React and .NET foundations, architecture, CI, contracts, dependency checks, and browser evidence passed the recorded outcome gate.",
        fill=MINT,
        accent=PLUM,
        label="Outcome demonstrated",
    )
    card(
        canvas,
        MARGIN + 274,
        y - 34,
        242,
        210,
        "Sprint 1",
        "Family access and protected-parent-mode work is implemented deeply. A required provider proof remains unresolved, so the gate is not passed.",
        fill=SURFACE,
        accent=CORAL,
        label="Gate open",
    )
    paragraph(
        canvas,
        "A temporary sequencing exception allows synthetic Sprint 2/3 work. It does not rename Sprint 1 as complete, and the unresolved evidence must be revisited before Sprint 4.",
        MARGIN,
        220,
        WIDTH - MARGIN * 2,
        style("status-quote", font=DISPLAY_BOLD, size=16, leading=21, color=PLUM),
    )


def purpose(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Purpose and people", LAVENDER)
    y = page_title(
        canvas,
        "A parent turns care and intent into a story a child can enjoy.",
        "Tiny Custom Stories aims to make personalized learning playful and understandable while keeping the technology bounded and worthy of family trust.",
    )
    data = [
        ("Parents lead", "Choose purpose, context, review, and approval. The system should not silently decide what family information belongs in a story.", SUN),
        ("Children receive wonder", "The first audience is ages two through six, reading with a parent or independently from a parent-approved library.", MINT),
        ("AI assists", "Generation can help plan and write. It does not own family authority, Story truth, or the decision to make a story child-visible.", CORAL),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + i * 174, y - 42, 156, 235, title, body, fill=SURFACE, accent=accent, label=f"Role {i + 1}")
    paragraph(
        canvas,
        "The product is not trying to maximize content or attention. It is trying to help a family make a meaningful story for a purpose: morals and values, fun and fantasy, or reading development.",
        MARGIN,
        205,
        WIDTH - MARGIN * 2,
        SMALL,
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
    page_base(canvas, n, total, "Sprint 2 - Child Map Discovery", LAVENDER)
    y = page_title(
        canvas,
        "The Child Map became a living record, not a completion form.",
        "Sprint 2 separates durable Child Map information from Discovery operating state. Discovery can evolve without hard-coding one questionnaire into the main application.",
    )
    data = [
        ("Versioned questions", "Approved question definitions are content with stable identifiers and answer schemas.", SUN),
        ("Typed answers", "The renderer understands the question shape rather than baking each prompt into a bespoke screen.", MINT),
        ("Deterministic eligibility", "Age, context, history, pacing, and cooldown rules decide what may be asked before optional future intelligence.", CORAL),
        ("Bounded follow-ups", "Follow-up depth is explicit and limited instead of allowing an open-ended hidden conversation.", PLUM),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + (i % 2) * 264, y - 28 - (i // 2) * 174, 244, 150, title, body, fill=SURFACE, accent=accent, label=f"Discovery {i + 1}")
    paragraph(
        canvas,
        "Sprint 2 does not send Child Map text or photos to an external AI provider for runtime interpretation. Future AI authoring, ranking, or phrasing can sit behind replaceable capability boundaries.",
        MARGIN,
        154,
        WIDTH - MARGIN * 2,
        SMALL,
    )


def sprint3(canvas: Canvas, n: int, total: int) -> None:
    rows_page(
        canvas, total, n, "Sprint 3 - Story Studio",
        "Story creation became a reversible composition workflow.",
        "The canonical Sprint 3 experience is one guided Story Studio from intent through approval. The story is a composition, not a one-shot prompt response.",
        [
            ("01", "Review context", "The parent sees a small permitted personalization set, may remove items, add story-only details, or choose a completely fictional mode."),
            ("02", "Plan before writing", "Story purpose and reading choices become a visible Story Plan before generation."),
            ("03", "Compose ten text pages", "Sprint 3 proves a cover plus exactly ten text pages. AI-generated illustrations remain Sprint 4."),
            ("04", "Revise locally", "Direct editing, paragraph-scoped assistance, page rewrite, visible continuity choices, and lightweight restore reduce destructive regeneration."),
            ("05", "Approve a stable version", "Approval creates Story truth that later draft edits do not silently mutate."),
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
        "Seven outcomes, with the current exception visible.",
        "The roadmap remains outcome-based. The temporary Sprint 1 sequencing exception permits bounded synthetic Sprint 2/3 work; it does not convert the open Sprint 1 gate into a pass.",
    )
    items = [
        ("00", "Foundation", "Demonstrated", MINT),
        ("01", "Accounts + parent mode", "Gate open", CORAL),
        ("02", "Child Map + Discovery", "Canonical", SUN),
        ("03", "Story Studio", "Canonical", SUN),
        ("04", "Characters + art", "Later", LAVENDER),
        ("05", "Library + reader", "Later", LAVENDER),
        ("06", "Alpha readiness", "Later", LAVENDER),
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
    paragraph(canvas, "Before Sprint 4 starts, the unresolved Sprint 1 provider evidence must be revisited. Later sprint definitions remain proposals until their scope and evidence mature.", MARGIN, 118, WIDTH - MARGIN * 2, SMALL)


def delivery(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "How the work is delivered", MINT)
    y = page_title(
        canvas,
        "Detailed input is part of the engineering system.",
        "The project intentionally prefers precise, reviewable implementation slices over a small number of ambiguous tickets. This also makes AI-assisted implementation less dependent on rediscovering architecture and product intent.",
    )
    data = [
        ("Human direction", "Product and architecture choices are made explicitly and recorded.", SUN),
        ("Explicit tasks", "Dependencies, non-goals, acceptance criteria, tests, and visual references are written down.", CORAL),
        ("AI-assisted implementation", "Implementation agents work inside the documented contracts rather than inventing hidden product decisions.", LAVENDER),
        ("Evidence + PR", "Automated checks, targeted boundary evidence, review, and the sprint outcome gate determine whether work is done.", MINT),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + (i % 2) * 264, y - 28 - (i // 2) * 174, 244, 150, title, body, fill=SURFACE, accent=accent, label=f"Step {i + 1}")
    paragraph(canvas, "Task count is not a success metric. Clarity, reviewability, evidence, and safe dependency order are more important than keeping the backlog artificially small.", MARGIN, 154, WIDTH - MARGIN * 2, SMALL)


def philosophy(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Design philosophy")
    y = page_title(
        canvas,
        "The why behind every screen, service, and hand-off.",
        "The same philosophy now spans child, parent, public, documentation, and technical work without forcing every surface into one visual template.",
    )
    items = [
        ("Human intention leads", "AI assists inside parent-led purpose and review."),
        ("Two modes, two needs", "Child and parent authority and density remain distinct."),
        ("Calm over capture", "No attention traps, autoplay, streaks, or artificial urgency."),
        ("Warmth with clarity", "Character supports meaning instead of competing with it."),
        ("Trust is visible", "Privacy, uncertainty, drafts, progress, and limits appear where they matter."),
        ("Every state is designed", "Loading, interruption, error, expiry, recovery, and return count."),
        ("Accessibility is structural", "Semantics, focus, contrast, reflow, alternatives, and reduced motion begin early."),
        ("Evidence outranks taste", "Synthetic inspected evidence decides whether confidence is deserved."),
    ]
    for i, (title, body) in enumerate(items):
        card(canvas, MARGIN + (i % 2) * 264, y - 28 - (i // 2) * 116, 244, 98, title, body, fill=SURFACE, accent=[SUN, MINT, LAVENDER, CORAL][i // 2])


def visual_recipe(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Visual recipe")
    y = page_title(
        canvas,
        "Same design DNA, more mature story.",
        "The public site keeps its paper-and-ink editorial identity. New architecture and development content extends existing components and rhythms rather than introducing a generic dashboard or documentation-site aesthetic.",
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
        "Continuity rule: existing foundation -> additive evolution -> targeted refinement. New content should feel like the September site grew, not like somebody replaced it.",
        MARGIN,
        186,
        WIDTH - MARGIN * 2,
        style("recipe-quote", font=DISPLAY_BOLD, size=16, leading=21, color=PLUM),
    )


def questions(canvas: Canvas, n: int, total: int) -> None:
    page_base(canvas, n, total, "Open questions", CORAL, dark=True)
    y = page_title(
        canvas,
        "Useful unknowns stay visible.",
        "The capability boundaries are clearer, but privacy, derived-artifact lifecycle, provider transfer, physical extraction, and Alpha evidence still require deliberate decisions.",
        dark=True,
    )
    items = [
        "Which Child Map information is necessary, optional, or prohibited?",
        "Which permitted Child Map observations may be used for a specific story or external provider?",
        "What happens to drafts and approved stories when their Child Map sources are later deleted?",
        "When should Story Generation move from the API process to a worker or service?",
        "Which providers, workflow products, and deployment choices meet the evidence bar?",
        "What proves the private Alpha is valuable and safe enough to continue?",
    ]
    for i, question in enumerate(items):
        x = MARGIN + (i % 2) * 264
        top = y - 28 - (i // 2) * 137
        canvas.setFillColor(SURFACE)
        canvas.roundRect(x, top - 112, 244, 100, 8, fill=1, stroke=0)
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
        "Keep the boundaries clear enough to change safely.",
        "The near-term project is not one giant autonomous build. It is a chain of explicit product decisions, small implementation slices, public-safe architecture, synthetic evidence, review, and outcome gates.",
        dark=True,
    )
    data = [
        ("Finish the evidence", "Revisit the unresolved Sprint 1 provider proof before Sprint 4.", SUN),
        ("Build Discovery safely", "Implement accepted versioned question and Child Map lifecycle contracts with synthetic data first.", MINT),
        ("Compose stories reversibly", "Build Story Studio around policy-limited context, scoped revisions, and stable approval.", MINT),
        ("Extract only when earned", "Move generation into a worker/service only when operational evidence justifies the added boundary.", SUN),
    ]
    for i, (title, body, accent) in enumerate(data):
        card(canvas, MARGIN + (i % 2) * 264, y - 30 - (i // 2) * 174, 244, 150, title, body, fill=INK, accent=accent, dark=True, label="Focused next work")
    paragraph(canvas, "Source trail: Sprint 0 outcome evidence; Sprint 1 specification and evidence; DEC-2026-039 through DEC-2026-043; Sprint 2 and Sprint 3 canonical specifications; ADR-0016 and ADR-0017; current architecture; design philosophy; visual design language; and public-story curation guidance.", MARGIN, 166, WIDTH - MARGIN * 2, SMALL_DARK)


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
    ("open-questions", questions),
    ("public-library", library),
    ("next", next_page),
]


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(OUTPUT), pagesize=letter, pageCompression=1)
    canvas.setTitle("Tiny Custom Stories - Public Project Story")
    canvas.setAuthor("Tiny Custom Stories")
    canvas.setSubject(
        "Public guide to the product, delivery evidence, Child Map Discovery, "
        "Story Studio capability architecture, design language, roadmap, and open questions."
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
