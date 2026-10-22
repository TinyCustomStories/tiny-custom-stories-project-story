#!/usr/bin/env python3
"""Validate the dated public dossier and render every page for review."""

from __future__ import annotations

import math
from pathlib import Path

import fitz
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "public" / "documents" / "tiny-custom-stories-project-dossier.pdf"
PREVIEW = ROOT / "build" / "dossier-contact-sheet.png"
EXPECTED_PAGES = 17

REQUIRED = {
    0: ("october 21, 2026 edition", "17 pages"),
    1: ("sprint 2", "synthetic/local"),
    6: ("the child map outcome was demonstrated locally",),
    7: ("a working slice is progress", "outcome still open"),
    9: ("visual theme system",),
    10: ("3,803", "813", "775", "1,668"),
    13: ("a design philosophy became a development tool",),
    16: ("prove the parent journey",),
}


def clean(text: str) -> str:
    return " ".join(text.lower().split())


def verify() -> None:
    if not PDF.is_file():
        raise RuntimeError(f"Missing generated PDF: {PDF}")

    doc = fitz.open(PDF)
    if doc.is_encrypted or doc.page_count != EXPECTED_PAGES:
        raise RuntimeError(
            f"Expected {EXPECTED_PAGES} readable PDF pages, found {doc.page_count}"
        )

    thumbs: list[Image.Image] = []
    full_text: list[str] = []
    for index, page in enumerate(doc):
        if abs(page.rect.width - 612) > 1 or abs(page.rect.height - 792) > 1:
            raise RuntimeError(f"Page {index + 1}: wrong page size {page.rect}")

        extracted = clean(page.get_text(sort=True))
        full_text.append(extracted)
        if len(extracted) < 140:
            raise RuntimeError(
                f"Page {index + 1}: text may be absent or not extractable"
            )
        for phrase in REQUIRED.get(index, ()):
            if clean(phrase) not in extracted:
                raise RuntimeError(
                    f"Page {index + 1}: missing expected phrase {phrase!r}"
                )

        for block in page.get_text("dict")["blocks"]:
            if block.get("type") != 0:
                continue
            for line in block["lines"]:
                for span in line["spans"]:
                    box = fitz.Rect(span["bbox"])
                    if (
                        box.x0 < -1
                        or box.y0 < -1
                        or box.x1 > page.rect.width + 1
                        or box.y1 > page.rect.height + 1
                    ):
                        raise RuntimeError(
                            f"Page {index + 1}: text outside page boundary"
                        )

        # Render every page (not only the cover). Preserve a contact sheet
        # for a human visual review of alignment, density, and diagrams.
        pix = page.get_pixmap(matrix=fitz.Matrix(0.8, 0.8), alpha=False)
        thumb = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        thumb.thumbnail((234, 307))
        thumbs.append(thumb)

    complete = " ".join(full_text)
    if "october 1, 2026 edition" in complete:
        raise RuntimeError("Old October 1 edition label remains in the PDF")
    if "sprint 2 is substantially implemented" in complete:
        raise RuntimeError("Outdated Sprint 2 gate language remains in the PDF")

    cols = 4
    cell_w, cell_h = 252, 337
    contact = Image.new(
        "RGB", (cols * cell_w, math.ceil(len(thumbs) / cols) * cell_h), "#f4f0ea"
    )
    draw = ImageDraw.Draw(contact)
    for index, thumb in enumerate(thumbs):
        x = (index % cols) * cell_w + (cell_w - thumb.width) // 2
        y = (index // cols) * cell_h + 7
        contact.paste(thumb, (x, y))
        draw.text(
            ((index % cols) * cell_w + 12, (index // cols + 1) * cell_h - 19),
            f"Page {index + 1} of {len(thumbs)}",
            fill="#27213b",
        )
    PREVIEW.parent.mkdir(parents=True, exist_ok=True)
    contact.save(PREVIEW, optimize=True)
    doc.close()
    print(
        f"Verified {EXPECTED_PAGES} extractable, bounded and rasterized pages; "
        f"contact sheet: {PREVIEW}"
    )


if __name__ == "__main__":
    verify()
