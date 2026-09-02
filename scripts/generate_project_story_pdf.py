#!/usr/bin/env python3
"""Generate the curated Tiny Custom Stories public project PDF."""

from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
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
TOTAL_PAGES = 15

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
INFO = HexColor("#245B7A")


def register_fonts() -> tuple[str, str, str, str]:
    """Use accepted fallbacks when project web fonts are unavailable."""

    regular = Path("/System/Library/Fonts/Supplemental/Georgia.ttf")
    bold = Path("/System/Library/Fonts/Supplemental/Georgia Bold.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("TCS-Display", str(regular)))
        pdfmetrics.registerFont(TTFont("TCS-Display-Bold", str(bold)))
        display = "TCS-Display"
        display_bold = "TCS-Display-Bold"
    else:
        display = "Times-Roman"
        display_bold = "Times-Bold"
    return display, display_bold, "Helvetica", "Helvetica-Bold"


DISPLAY, DISPLAY_BOLD, BODY, BODY_BOLD = register_fonts()
MONO = "Courier-Bold"


def style(
    name: str,
    font: str = BODY,
    size: float = 10,
    leading: float | None = None,
    color: Color = INK,
    alignment: int = TA_LEFT,
    space_after: float = 0,
) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.45,
        textColor=color,
        alignment=alignment,
        spaceAfter=space_after,
        allowWidows=0,
        allowOrphans=0,
    )


BODY_STYLE = style("body", size=10.2, leading=15.4, color=MUTED)
BODY_DARK = style("body-dark", size=10.2, leading=15.4, color=SURFACE)
SMALL = style("small", size=8.2, leading=11.7, color=MUTED)
SMALL_DARK = style("small-dark", size=8.2, leading=11.7, color=SURFACE)
CARD_TITLE = style("card-title", font=DISPLAY_BOLD, size=14, leading=16.5)
CARD_TITLE_DARK = style(
    "card-title-dark", font=DISPLAY_BOLD, size=14, leading=16.5, color=SURFACE
)
LABEL = style("label", font=MONO, size=7.2, leading=9, color=PLUM)
LABEL_DARK = style("label-dark", font=MONO, size=7.2, leading=9, color=SUN)


def paragraph(
    canvas: Canvas,
    text: str,
    x: float,
    y_top: float,
    width: float,
    paragraph_style: ParagraphStyle = BODY_STYLE,
) -> float:
    flowable = Paragraph(text, paragraph_style)
    _, height = flowable.wrap(width, HEIGHT)
    flowable.drawOn(canvas, x, y_top - height)
    return y_top - height


def page_base(
    canvas: Canvas,
    page_number: int,
    section: str,
    background: Color = PAPER,
    dark: bool = False,
) -> None:
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
        WIDTH - MARGIN, 21, f"{page_number:02d} / {TOTAL_PAGES:02d}"
    )


def page_title(
    canvas: Canvas,
    title: str,
    subtitle: str,
    dark: bool = False,
    y: float = 690,
) -> float:
    title_style = style(
        "page-title",
        font=DISPLAY_BOLD,
        size=32,
        leading=33.5,
        color=SURFACE if dark else INK,
    )
    subtitle_style = BODY_DARK if dark else BODY_STYLE
    y = paragraph(canvas, title, MARGIN, y, WIDTH - MARGIN * 2, title_style)
    y -= 15
    return paragraph(canvas, subtitle, MARGIN, y, WIDTH - MARGIN * 2, subtitle_style)


def pill(
    canvas: Canvas,
    text: str,
    x: float,
    y: float,
    fill: Color,
    text_color: Color = INK,
) -> float:
    width = max(74, pdfmetrics.stringWidth(text, MONO, 7) + 20)
    canvas.setFillColor(fill)
    canvas.roundRect(x, y, width, 22, 11, fill=1, stroke=0)
    canvas.setFillColor(text_color)
    canvas.setFont(MONO, 7)
    canvas.drawCentredString(x + width / 2, y + 7, text.upper())
    return width


def card(
    canvas: Canvas,
    x: float,
    y_top: float,
    width: float,
    height: float,
    title: str,
    body: str,
    fill: Color = SURFACE,
    accent: Color = SUN,
    dark: bool = False,
    label: str | None = None,
) -> None:
    y = y_top - height
    canvas.setFillColor(accent)
    canvas.roundRect(x + 5, y - 5, width, height, 8, fill=1, stroke=0)
    canvas.setFillColor(fill)
    canvas.setStrokeColor(INK)
    canvas.setLineWidth(1.5)
    canvas.roundRect(x, y, width, height, 8, fill=1, stroke=1)
    cursor = y_top - 18
    if label:
        cursor = paragraph(
            canvas,
            label.upper(),
            x + 16,
            cursor,
            width - 32,
            LABEL_DARK if dark else LABEL,
        )
        cursor -= 9
    cursor = paragraph(
        canvas,
        title,
        x + 16,
        cursor,
        width - 32,
        CARD_TITLE_DARK if dark else CARD_TITLE,
    )
    cursor -= 8
    paragraph(
        canvas,
        body,
        x + 16,
        cursor,
        width - 32,
        SMALL_DARK if dark else SMALL,
    )


def numbered_row(
    canvas: Canvas,
    number: str,
    title: str,
    body: str,
    y_top: float,
    color: Color = CORAL,
) -> float:
    canvas.setStrokeColor(INK)
    canvas.setLineWidth(1.2)
    canvas.line(MARGIN, y_top, WIDTH - MARGIN, y_top)
    canvas.setFillColor(color)
    canvas.setFont(MONO, 9)
    canvas.drawString(MARGIN, y_top - 27, number)
    paragraph(canvas, title, MARGIN + 52, y_top - 14, 190, CARD_TITLE)
    paragraph(canvas, body, MARGIN + 254, y_top - 14, WIDTH - MARGIN * 2 - 254, SMALL)
    return y_top - 72


def cover(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "September 2026 edition", INK, dark=True)
    canvas.setFillColor(CORAL)
    canvas.circle(WIDTH - 112, HEIGHT - 138, 58, fill=1, stroke=0)
    canvas.setFillColor(SUN)
    canvas.circle(WIDTH - 148, HEIGHT - 170, 23, fill=1, stroke=0)
    canvas.setStrokeColor(MINT)
    canvas.setLineWidth(7)
    canvas.line(MARGIN, 507, WIDTH - 165, 507)
    paragraph(
        canvas,
        "Stories built<br/><font color='#E76042'>with care,</font><br/>not just code.",
        MARGIN,
        650,
        455,
        style("cover-title", font=DISPLAY_BOLD, size=48, leading=49, color=SURFACE),
    )
    paragraph(
        canvas,
        "The expanded public guide to the product idea, demonstrated foundation, Sprint 1 boundary, roadmap, design philosophy, and visual recipe.",
        MARGIN,
        420,
        390,
        style("cover-copy", size=13, leading=19, color=SURFACE),
    )
    pill(canvas, "Verified + candid", MARGIN, 310, MINT, SUCCESS)
    pill(canvas, "15 pages", MARGIN + 145, 310, SUN, INK)
    paragraph(
        canvas,
        "A curated project story - not a live export of private work.",
        MARGIN,
        270,
        360,
        SMALL_DARK,
    )


def current_status(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Where the project is now")
    y = page_title(
        canvas,
        "The foundation passed. The family boundary comes next.",
        "Sprint 0 was demonstrated on September 2, 2026. Sprint 1 is now the active planning boundary - not a claim that every account or parent-mode task is already complete.",
    )
    card(
        canvas,
        MARGIN,
        y - 34,
        242,
        210,
        "Sprint 0",
        "Clean React and .NET foundations, documentation, contracts, dependency checks, CI, and browser evidence passed one recorded outcome gate.",
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
        "The accepted account, child-mode, parent-mode, and evidence boundaries are documented. Work becomes ready only when dependencies and acceptance evidence are clear.",
        fill=SURFACE,
        accent=SUN,
        label="Active planning boundary",
    )
    paragraph(
        canvas,
        "The project measures progress by demonstrated family outcomes, not issue count, elapsed calendar time, or optimistic labels.",
        MARGIN,
        225,
        WIDTH - MARGIN * 2,
        style("status-quote", font=DISPLAY_BOLD, size=22, leading=27, color=PLUM),
    )


def purpose(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Purpose and people", LAVENDER)
    y = page_title(
        canvas,
        "A parent turns care into a story a child can enjoy.",
        "Tiny Custom Stories aims to make personalized learning playful and understandable while keeping the technology bounded and worthy of family trust.",
    )
    cards = [
        (
            "Parents lead",
            "Parents choose the purpose, guide creation, review drafts, and decide what a child can read.",
            SUN,
        ),
        (
            "Children receive wonder",
            "The first audience is ages two through six, reading with a parent or independently from an approved library.",
            MINT,
        ),
        (
            "AI assists",
            "AI can help plan words and pictures. It does not become the hero, the parent, or an unexplained authority.",
            CORAL,
        ),
    ]
    for index, (title, body, accent) in enumerate(cards):
        card(
            canvas,
            MARGIN + index * 174,
            y - 42,
            156,
            235,
            title,
            body,
            fill=SURFACE,
            accent=accent,
            label=f"Role {index + 1}",
        )
    paragraph(
        canvas,
        "The intended value is not more content. It is a meaningful family story shaped around a purpose: morals and values, fun and fantasy, or reading development.",
        MARGIN,
        205,
        WIDTH - MARGIN * 2,
        BODY_STYLE,
    )


def alpha_shape(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "The Alpha boundary")
    y = page_title(
        canvas,
        "Small enough to understand. Complete enough to learn from.",
        "The Alpha is deliberately narrow. Confirmed scope, deferred ideas, and unresolved work are kept separate.",
    )
    confirmed = [
        "Website first",
        "Ages two through six",
        "One parent, one family, one child",
        "Cover plus ten illustrated pages",
        "Parent-led guided creation",
        "Approved child-visible library",
    ]
    deferred = [
        "Native app",
        "Narration and video",
        "Public marketplace",
        "Account credits",
        "Multiple children or caregivers",
        "Unreviewed story export",
    ]
    card(
        canvas,
        MARGIN,
        y - 35,
        244,
        310,
        "Confirmed Alpha shape",
        "<br/>".join(f"- {item}" for item in confirmed),
        fill=MINT,
        accent=PLUM,
        label="Accepted",
    )
    card(
        canvas,
        MARGIN + 272,
        y - 35,
        244,
        310,
        "Explicitly later",
        "<br/>".join(f"- {item}" for item in deferred),
        fill=SURFACE,
        accent=CORAL,
        label="Deferred, not rejected",
    )


def sprint_zero(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Sprint 0 evidence", MINT)
    y = page_title(
        canvas,
        "A completed sprint is a demonstrated outcome.",
        "Sprint 0 passed only after the same identified foundation was checked locally and in continuous integration, with unresolved risks carried forward rather than hidden.",
    )
    rows = [
        ("01", "Buildable foundations", "React/Vite and ASP.NET Core foundations build and test without restoring the retired applications."),
        ("02", "Contracts", "The checked-in API contract reproduces deterministically and agrees with runtime behavior."),
        ("03", "Quality gates", "Formatting, linting, types, analyzers, Release builds, unit tests, and dependency thresholds passed."),
        ("04", "Browser evidence", "A controlled Chromium journey and reviewed artifacts showed the web and API foundations working together."),
        ("05", "Clean hand-off", "No remaining Sprint 0 must-have work remained when the gate was recorded."),
    ]
    cursor = y - 28
    for number, title, body in rows:
        cursor = numbered_row(canvas, number, title, body, cursor)


def roadmap(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Outcome-gated roadmap")
    y = page_title(
        canvas,
        "Seven outcomes. No invented delivery dates.",
        "The sequence is a revisable planning proposal. The rule that each sprint must demonstrate its outcome before transition is an accepted decision.",
    )
    items = [
        ("00", "Foundation", "Complete", SUCCESS),
        ("01", "Accounts + parent mode", "Active", CORAL),
        ("02", "Child Map + lifecycle", "Proposed", PLUM),
        ("03", "Text story slice", "Proposed", PLUM),
        ("04", "Characters + art", "Proposed", PLUM),
        ("05", "Library + reader", "Proposed", PLUM),
        ("06", "Alpha readiness", "Proposed", PLUM),
    ]
    cursor = y - 26
    for number, title, state, color in items:
        canvas.setStrokeColor(LINE)
        canvas.line(MARGIN, cursor, WIDTH - MARGIN, cursor)
        canvas.setFillColor(color)
        canvas.setFont(MONO, 9)
        canvas.drawString(MARGIN, cursor - 24, number)
        paragraph(canvas, title, MARGIN + 50, cursor - 12, 290, CARD_TITLE)
        pill(canvas, state, WIDTH - MARGIN - 94, cursor - 30, MINT if state == "Complete" else (SUN if state == "Active" else LAVENDER), INK)
        cursor -= 62


def sprint_one(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Sprint 1", INK, dark=True)
    y = page_title(
        canvas,
        "A shared device needs two honest modes.",
        "The outcome is safe movement between a child-facing library and a protected parent workspace, enforced by the server as well as represented in the interface.",
        dark=True,
    )
    items = [
        ("Child mode", "Default after sign-in. Read-only. Approved stories and ordinary reading navigation only."),
        ("Parent mode", "Deliberate adult entry for family context, creation, review, visibility, settings, and account work."),
        ("Stronger moments", "Recovery, complete export, and account deletion require stronger email re-verification."),
        ("Safe return", "Exit, expiry, or tab closure returns to child mode and conceals private work."),
    ]
    for index, (title, body) in enumerate(items):
        x = MARGIN + (index % 2) * 264
        top = y - 34 - (index // 2) * 196
        card(
            canvas,
            x,
            top,
            244,
            170,
            title,
            body,
            fill=INK,
            accent=SUN if index % 2 == 0 else MINT,
            dark=True,
            label=f"Boundary {index + 1}",
        )


def sprint_one_evidence(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Sprint 1 evidence", SURFACE)
    y = page_title(
        canvas,
        "The boundary has to survive the awkward moments.",
        "A happy-path sign-in is not enough. Sprint 1 evidence covers authorization, failure, recovery, expiry, refresh, isolation, accessibility, and the full return to child mode.",
    )
    evidence = [
        "First and repeat sign-in preserve one family boundary",
        "Child mode cannot read parent data or call protected APIs",
        "Parent entry, failure, throttling, reset, and explicit exit",
        "Expiry, refresh, tab isolation, and concealed private drafts",
        "Stronger checks for recovery, export, and deletion",
        "Keyboard, focus, announcements, reflow, and error recovery",
        "Synthetic browser journey from sign-in back to child mode",
    ]
    cursor = y - 34
    for index, item in enumerate(evidence):
        canvas.setFillColor(MINT if index % 2 == 0 else LAVENDER)
        canvas.roundRect(MARGIN, cursor - 42, WIDTH - MARGIN * 2, 36, 7, fill=1, stroke=0)
        canvas.setFillColor(INK)
        canvas.setFont(MONO, 8)
        canvas.drawString(MARGIN + 12, cursor - 29, f"{index + 1:02d}")
        paragraph(canvas, item, MARGIN + 52, cursor - 16, WIDTH - MARGIN * 2 - 64, SMALL)
        cursor -= 49
    paragraph(
        canvas,
        "Public summary only: operational security parameters and private project links are intentionally omitted.",
        MARGIN,
        132,
        WIDTH - MARGIN * 2,
        LABEL,
    )


def story_journey(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "The intended story journey", LAVENDER)
    y = page_title(
        canvas,
        "A few important hand-offs keep people in charge.",
        "The primary creation direction is a guided form, not a blank AI prompt. The detailed four-section builder and draft-editing behavior remain proposals that need prototype evidence.",
    )
    steps = [
        ("1", "A parent starts", "Choose a purpose and a few understandable inputs."),
        ("2", "A plan takes shape", "Focused tools prepare words and pictures inside bounded contexts."),
        ("3", "A parent reviews", "Generated material remains a draft until the parent accepts it."),
        ("4", "A child reads", "Only approved, child-visible stories reach the calm family library."),
    ]
    for index, (number, title, body) in enumerate(steps):
        x = MARGIN + index * 132
        canvas.setFillColor([SUN, MINT, SURFACE, CORAL][index])
        canvas.setStrokeColor(INK)
        canvas.setLineWidth(1.4)
        canvas.roundRect(x, y - 260, 112, 232, 16, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(DISPLAY_BOLD, 28)
        canvas.drawString(x + 14, y - 72, number)
        paragraph(canvas, title, x + 14, y - 96, 84, CARD_TITLE)
        paragraph(canvas, body, x + 14, y - 142, 84, SMALL)
    paragraph(
        canvas,
        "Personalization should use the minimum relevant family context. More data is not automatically a better story.",
        MARGIN,
        220,
        WIDTH - MARGIN * 2,
        style("journey-quote", font=DISPLAY_BOLD, size=20, leading=25, color=PLUM),
    )


def philosophy(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Design philosophy")
    y = page_title(
        canvas,
        "The why behind every screen, service, and hand-off.",
        "Design includes language, hierarchy, interaction, system feedback, accessibility, privacy, safety, failure handling, architecture boundaries, and honest documentation.",
    )
    principles = [
        ("Human intention leads", "AI assists inside parent-led purpose and review."),
        ("Two modes, not one compromise", "Child and parent needs, density, and authority remain distinct."),
        ("Calm over capture", "No attention traps, autoplay, streaks, or artificial urgency."),
        ("Warmth with clarity", "Character supports meaning instead of competing with it."),
        ("Trust is visible", "Privacy, uncertainty, drafts, progress, and limits appear where they matter."),
        ("Every state is designed", "Loading, empty, interruption, error, expiry, recovery, and return all count."),
        ("Accessibility is structural", "Semantics, focus, contrast, reflow, alternatives, and reduced motion begin early."),
        ("Evidence outranks taste", "Synthetic inspected evidence decides whether confidence is deserved."),
    ]
    for index, (title, body) in enumerate(principles):
        col = index % 2
        row = index // 2
        card(
            canvas,
            MARGIN + col * 264,
            y - 28 - row * 116,
            244,
            98,
            title,
            body,
            fill=SURFACE,
            accent=[SUN, MINT, LAVENDER, CORAL][row],
        )


def visual_recipe(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Visual recipe", PAPER)
    y = page_title(
        canvas,
        "Paper, ink, and a few purposeful sparks.",
        "The paper-and-ink story studio turns philosophy into a reproducible visual language for agents and surfaces.",
    )
    segments = [("70%", "calm foundation", 0.7, PAPER), ("20%", "handcrafted character", 0.2, LAVENDER), ("10%", "emphasis + delight", 0.1, SUN)]
    x = MARGIN
    usable = WIDTH - MARGIN * 2
    for amount, label, fraction, fill in segments:
        segment_width = usable * fraction
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.rect(x, y - 112, segment_width, 88, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(DISPLAY_BOLD, 20 if fraction > 0.15 else 13)
        canvas.drawString(x + 10, y - 58, amount)
        if fraction > 0.15:
            paragraph(canvas, label, x + 10, y - 72, segment_width - 20, SMALL)
        x += segment_width
    palette = [
        ("INK", "#27213B", INK),
        ("PAPER", "#FBF8EF", PAPER),
        ("PLUM", "#6F549F", PLUM),
        ("CORAL", "#E76042", CORAL),
        ("SUN", "#F7B84B", SUN),
        ("MINT", "#9DD3C6", MINT),
        ("LAVENDER", "#E7D8F5", LAVENDER),
    ]
    for index, (name, value, fill) in enumerate(palette):
        col = index % 4
        row = index // 4
        cx = MARGIN + col * 132
        cy = y - 190 - row * 92
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.circle(cx + 24, cy, 22, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(MONO, 7)
        canvas.drawString(cx + 52, cy + 4, name)
        canvas.setFillColor(MUTED)
        canvas.setFont("Courier", 7)
        canvas.drawString(cx + 52, cy - 9, value)
    paragraph(
        canvas,
        "Display: Fraunces 500-700. Body and controls: Nunito Sans 500-800. Metadata: DM Mono 400-500. This PDF uses the accepted Georgia, Helvetica, and Courier fallbacks when the web fonts are unavailable.",
        MARGIN,
        270,
        WIDTH - MARGIN * 2,
        SMALL,
    )
    paragraph(
        canvas,
        "Creative references become general qualities - candid language, simple explanatory drawings, warmth, and human imperfection - never copied lettering, characters, compositions, or signature style.",
        MARGIN,
        190,
        WIDTH - MARGIN * 2,
        style("recipe-quote", font=DISPLAY_BOLD, size=16, leading=21, color=PLUM),
    )


def themes_controls(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Themes and controls", MINT)
    y = page_title(
        canvas,
        "One family of surfaces. Four different responsibilities.",
        "Shared foundations create recognition. The audience, density, authority, and seriousness of the moment determine the theme.",
    )
    themes = [
        ("Storybook light", "Child library + reader", "Large concrete controls, cover-led color, stable navigation."),
        ("Guided studio", "Protected parent work", "Quiet forms, privacy context, recoverable work, explicit approvals."),
        ("Public editorial", "This public story", "Large type, generous space, status labels, original diagrams."),
        ("Serious", "Security + deletion", "Plain language, stable geometry, restrained color, no playful treatment."),
    ]
    for index, (title, label, body) in enumerate(themes):
        card(
            canvas,
            MARGIN + (index % 2) * 264,
            y - 26 - (index // 2) * 180,
            244,
            158,
            title,
            body,
            fill=[SURFACE, PAPER, LAVENDER, INK][index],
            accent=[SUN, PLUM, CORAL, SUN][index],
            dark=index == 3,
            label=label,
        )
    paragraph(
        canvas,
        "Buttons use verb-led labels, strong focus, minimum target sizes, and complete loading, active, disabled, and error behavior. Decorative warmth disappears around consent, security, deletion, and critical failure.",
        MARGIN,
        180,
        WIDTH - MARGIN * 2,
        BODY_STYLE,
    )


def architecture(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Architecture and trust", SURFACE)
    y = page_title(
        canvas,
        "Focused boundaries make creative systems easier to question.",
        "The target is not one giant application or one all-purpose AI context. Product responsibilities stay separate enough to meter, test, replace, and explain.",
    )
    nodes = [
        ("Website", "Child and parent experiences"),
        ("Application API", "Identity, authorization, family rules"),
        ("Story workflow", "Planning, generation, checks, approvals"),
        ("Private data", "Documents and media behind family scope"),
    ]
    for index, (title, body) in enumerate(nodes):
        x = MARGIN + index * 132
        canvas.setFillColor([SUN, MINT, LAVENDER, PAPER][index])
        canvas.setStrokeColor(INK)
        canvas.roundRect(x, y - 190, 112, 156, 30, fill=1, stroke=1)
        paragraph(canvas, title, x + 12, y - 65, 88, CARD_TITLE)
        paragraph(canvas, body, x + 12, y - 116, 88, SMALL)
    paragraph(
        canvas,
        "Provider rule",
        MARGIN,
        y - 232,
        160,
        LABEL,
    )
    provider_bottom = paragraph(
        canvas,
        "Text and image providers are evaluated separately with synthetic evidence for data use, retention, regions, deletion, safety, quality, cost, reliability, and exit. No provider is selected merely because an adapter can call it.",
        MARGIN,
        y - 252,
        WIDTH - MARGIN * 2,
        style("architecture-quote", font=DISPLAY_BOLD, size=15.5, leading=20, color=PLUM),
    )
    paragraph(
        canvas,
        "Confirmed foundations include React/Vite, ASP.NET Core, Clerk behind an application-owned identity boundary, MongoDB for documents, and private S3-compatible media storage. Detailed deployment and workflow products still have open decisions.",
        MARGIN,
        provider_bottom - 14,
        WIDTH - MARGIN * 2,
        SMALL,
    )


def open_questions(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "Open questions", CORAL, dark=True)
    y = page_title(
        canvas,
        "Useful unknowns stay visible.",
        "An open question is not a hidden commitment or a defect in the foundation. It is a named place for research, prototype evidence, qualified review, or a founder decision.",
        dark=True,
    )
    questions = [
        "What family information is necessary, optional, or prohibited?",
        "Which requests and generated content must the platform prevent?",
        "How should parents edit, regenerate, report, or reject AI output?",
        "Which text and image providers meet the evidence bar?",
        "What proves the private Alpha is valuable and safe enough to continue?",
        "What visual and safety system should guide story illustrations?",
    ]
    for index, question in enumerate(questions):
        col = index % 2
        row = index // 2
        x = MARGIN + col * 264
        top = y - 30 - row * 139
        canvas.setFillColor(SURFACE)
        canvas.roundRect(x, top - 116, 244, 104, 8, fill=1, stroke=0)
        canvas.setFillColor(CORAL)
        canvas.setFont(MONO, 8)
        canvas.drawString(x + 14, top - 36, f"Q{index + 1:02d}")
        paragraph(canvas, question, x + 14, top - 50, 216, CARD_TITLE)


def public_library(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "How to read this story")
    y = page_title(
        canvas,
        "Certainty deserves a label. Privacy deserves a boundary.",
        "The public story is a curated translation. It does not render internal documentation automatically or expose private project links, customer information, credentials, or sensitive operational detail.",
    )
    statuses = [
        ("Confirmed decision", "A deliberately adopted choice.", MINT),
        ("Verified fact", "Supported by named evidence.", SURFACE),
        ("Proposal", "A candidate, not a promise.", SUN),
        ("Assumption", "A belief that still needs evidence.", LAVENDER),
        ("Open question", "An unresolved matter kept visible.", CORAL),
    ]
    cursor = y - 28
    for title, body, fill in statuses:
        canvas.setFillColor(fill)
        canvas.setStrokeColor(INK)
        canvas.roundRect(MARGIN, cursor - 54, 172, 42, 20, fill=1, stroke=1)
        canvas.setFillColor(INK)
        canvas.setFont(MONO, 7)
        canvas.drawCentredString(MARGIN + 86, cursor - 38, title.upper())
        paragraph(canvas, body, MARGIN + 202, cursor - 19, 300, BODY_STYLE)
        cursor -= 66
    paragraph(
        canvas,
        "Each public entry is rewritten for a general reader, checked for the public boundary, tied to a safe source reference, and founder-approved before publication.",
        MARGIN,
        170,
        WIDTH - MARGIN * 2,
        style("library-quote", font=DISPLAY_BOLD, size=17, leading=22, color=PLUM),
    )


def next_evidence(canvas: Canvas, page_number: int) -> None:
    page_base(canvas, page_number, "What comes next", INK, dark=True)
    y = page_title(
        canvas,
        "Keep the work small enough to prove and honest enough to change.",
        "The near-term work is not one giant feature. It is a set of focused decisions, contracts, controls, interfaces, failure states, tests, and evidence that together demonstrate Sprint 1.",
        dark=True,
    )
    next_items = [
        ("Account boundary", "Create and resume one internal family only after verified sign-in."),
        ("Child-safe default", "Open into the approved library and reject parent-only API access."),
        ("Protected entry", "Implement parent verification, expiry, refresh, isolation, and safe return."),
        ("Evidence journey", "Demonstrate the complete synthetic browser path with accessibility states."),
    ]
    for index, (title, body) in enumerate(next_items):
        card(
            canvas,
            MARGIN + (index % 2) * 264,
            y - 32 - (index // 2) * 174,
            244,
            150,
            title,
            body,
            fill=INK,
            accent=SUN if index in (0, 3) else MINT,
            dark=True,
            label="Focused work",
        )
    paragraph(
        canvas,
        "Source trail: Alpha scope; Sprint 0 outcome demonstration; Alpha roadmap; Sprint 1 account and protected-parent-mode specification; decision log through DEC-2026-027; open questions; design philosophy; visual design language; and public project-story curation guidance.",
        MARGIN,
        176,
        WIDTH - MARGIN * 2,
        SMALL_DARK,
    )
    paragraph(
        canvas,
        "tinycustomstories.com",
        MARGIN,
        112,
        WIDTH - MARGIN * 2,
        style("closing", font=DISPLAY_BOLD, size=24, leading=28, color=SUN),
    )


PAGES = [
    ("cover", cover),
    ("status", current_status),
    ("purpose", purpose),
    ("alpha", alpha_shape),
    ("sprint-0", sprint_zero),
    ("roadmap", roadmap),
    ("sprint-1", sprint_one),
    ("sprint-1-evidence", sprint_one_evidence),
    ("journey", story_journey),
    ("philosophy", philosophy),
    ("visual-recipe", visual_recipe),
    ("themes-controls", themes_controls),
    ("architecture", architecture),
    ("open-questions", open_questions),
    ("next-evidence", next_evidence),
]


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas = Canvas(str(OUTPUT), pagesize=letter, pageCompression=1)
    canvas.setTitle("Tiny Custom Stories - Public Project Story")
    canvas.setAuthor("Tiny Custom Stories")
    canvas.setSubject(
        "Public guide to the product, Sprint 0 evidence, Sprint 1 boundary, design philosophy, and visual language."
    )
    canvas.setCreator("Tiny Custom Stories public project story generator")
    for page_number, (bookmark, renderer) in enumerate(PAGES, start=1):
        canvas.bookmarkPage(bookmark)
        canvas.addOutlineEntry(bookmark.replace("-", " ").title(), bookmark, level=0)
        renderer(canvas, page_number)
        canvas.showPage()
    canvas.save()
    print(f"Generated {OUTPUT} ({len(PAGES)} pages)")


if __name__ == "__main__":
    build()
