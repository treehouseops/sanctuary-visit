---
name: Sanctuary
description: A warm, personal invitation grounded in Sanctuary’s original identity.
colors:
  olive: "#424e39"
  paper: "#f6f5f0"
  ink: "#30382d"
  muted: "#606559"
  line: "#d7d9ce"
  pale: "#e9ecdf"
  white: "#fff"
  olive-hover: "#283622"
  paper-hover: "#e0e6d4"
  field-border: "#bfc3b4"
  field-surface: "#f6f5f05e"
  interest-hover: "#d8ddca"
typography:
  display:
    fontFamily: "Suisse, Arial, sans-serif"
    fontSize: "clamp(3.8rem, 6.1vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Suisse, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.2vw, 4.25rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Suisse, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Suisse, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Suisse, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Suisse, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  square: "0"
  interest: "3px"
  circle: "50%"
spacing:
  compact: "8px"
  field: "12px"
  small: "20px"
  gutter-mobile: "24px"
  medium: "30px"
  large: "40px"
  section-mobile: "68px"
  section: "100px"
components:
  button-dark:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "15px 23px"
  button-dark-hover:
    backgroundColor: "{colors.olive-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "15px 23px"
  button-light-hover:
    backgroundColor: "{colors.paper-hover}"
  field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 12px"
    width: "100%"
  interest:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.interest}"
    padding: "9px 12px"
  interest-selected:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.white}"
  stay-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "25px 28px"
  stay-tab-active:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.white}"
  navigation:
    textColor: "{colors.white}"
---

# Design System: Sanctuary

## Overview

**Creative North Star: "A personal Sanctuary invitation"**

Sanctuary’s implemented world is warm, spacious, and grounded: original Suisse lettering and wordmark, pale limestone surfaces, deep olive, and generous photographic windows. Light typography and quiet rules give the interface the character of personal correspondence.

The visual system is extracted from `app/globals.css` and `app/visit-page.tsx`, with edition copy in `app/visit-content.ts` and brand commitments from `PRODUCT.md`. It records the finished local implementation, not an approved visual comp. Page composition and visitor strategy remain in `.impeccable/surface.md`.

### Visit editions

All three editions inherit this system. A 46px navigation bar links Now, Future, and SXSW and marks the active route with `aria-current="page"`; the original header sits beneath it. A short status strip below the hero explains construction or future-vision context. `/now` and `/sxsw` lead with real Austin photography, with labeled Sanctuary renderings beside their itineraries. `/future` retains the original rendering-led opening. SXSW uses a muted blue-green variant: primary `#344a4c`, pale surface `#e3e9e6`, navigation/footer `#24383b`. Its three itinerary choices represent before, between, and after event plans rather than lengths of stay. Forms remain local previews on all routes.

**Key Characteristics:**

- Original Sanctuary identity and Suisse typography.
- Light, closely tracked headings with generous surrounding space.
- Flat limestone and olive surfaces, divided by fine rules.
- Square controls, restrained state changes, and large image windows.

## Colors

The palette pairs limestone neutrals with an earthy olive primary. Frontmatter values are normative; CSS custom properties with matching names are their runtime source where defined.

### Primary

- **Olive** anchors primary actions, selected duration tabs, selected interests, and the community section.
- **Olive Hover** deepens the primary action on hover.

### Neutral

- **Paper** is the page canvas, light action fill, and request-preview surface.
- **Pale** is the softly green experience-section surface.
- **Ink** carries primary text; **Muted** carries supporting copy and labels.
- **Line** separates editorial lists and disclosures.
- **White** supports text and the original wordmark over dark or photographic backgrounds.
- **Paper Hover**, **Field Surface**, **Field Border**, and **Interest Hover** record reused interaction treatments.

The visit section uses a warmer stone surface, while the footer uses deeper green. These section-specific colors remain local styles rather than a fabricated multi-step brand scale. Sidecar tonal ramps are generated palette previews, not additional shipped tokens.

## Typography

Suisse is locally hosted in regular and light WOFF2 files, with Arial and sans-serif fallbacks. Display, headline, and title roles use the light face; body, labels, and controls use regular. Emphasis is occasional italic within the same family.

The frontmatter captures the desktop hierarchy. Headings balance their wrapping; general paragraphs cap at 68ch, itinerary introductions at 46ch, and visit copy at 32ch. Secondary body copy often steps down to 14px; attribution and helper copy uses 11–12px.

At 1050px and below, the hero display becomes 5rem. At 760px and below it becomes `clamp(2.9rem, 8.4vw, 4.1rem)` with 1.08 line-height; the default headline becomes 2.7rem, with section-specific overrides. Mobile form text rises to 16px and labels become 12px.

**The Light Heading Rule.** Use the light Suisse face and close tracking for large headings; preserve regular-weight reading text and controls.

## Layout

Wide sections use 100px vertical padding and `clamp(24px, 5.55vw, 100px)` horizontal padding, with deliberate section-specific vertical adjustments. At a minimum width of 1700px, horizontal padding becomes `max(100px, calc((100vw - 1500px) / 2))`. This contains the reading surface while retaining full-width background bands.

Editorial content uses asymmetric two-column grids with percentage gaps. The itinerary splits image and text at 0.82fr / 1.18fr; timed rows split a 90px time column from content. Community details use three columns. The three duration choices remain adjacent at all supported widths.

At 1050px, gaps tighten. At 760px, editorial grids stack, section padding becomes 68px 24px, and itinerary time columns narrow to 62px. The itinerary image becomes 300px high; the Austin image becomes 410px high. Two-column form rows remain paired. The navigation becomes a toggle-controlled vertical panel.

The hero is a full-bleed image window with a minimum desktop height of 710px and a height of `min(880px, 100svh)`. Mobile uses 810px height, 100svh maximum, and a 650px minimum. Its source image changes crop from 50% 58% to 62% center.

## Elevation & Depth

The implementation uses no box shadows. Depth comes from alternating paper, pale green, olive, and stone surfaces; fine borders; and photographic contrast. Image overlays are directional translucent gradients used to keep white text readable. Preserve these functional image gradients.

**The Flat Surface Rule.** Separate content with spacing, tone, and fine rules; do not add raised card shadows to this system.

## Shapes

Buttons, fields, image windows, and duration tabs have square corners. Interest controls have the small radius recorded in frontmatter. Circular geometry is reserved for the scroll cue and the thin-line sun motif. Borders are generally 1px; icons use thin strokes rather than filled decorative badges.

## Components

### Buttons and links

Dark and light buttons share inline-flex alignment, a 34px text-to-arrow gap, a minimum height of 54px, and the frontmatter padding. Hover changes fill in 0.2s. The header action is a transparent outlined variant. Underlined text links use a bottom rule and diagonal arrow; ordinary navigation links underline on hover.

Keyboard focus uses a 2px olive-green outline (`#89985f`) offset by 5px on links, buttons, disclosure summaries, and form fields. Preserve the visible focus treatment.

### Duration selector and itinerary

Three equal-width tabs sit between fine horizontal rules. Selected tabs invert to olive and white; unselected hover uses a pale green fill. Desktop titles are 30px light Suisse, with 13px supporting text. Mobile titles become 22px and supporting text 10px; arrows disappear. The active tab exposes its selection semantically and supports Arrow Left/Right, Home, and End keys.

The itinerary is an image beside an unboxed list of timed moments. Fine top borders and a narrow time column organize the list. Changing duration updates both the itinerary and inquiry selector.

### Fields and interests

Fields use a thin neutral border, translucent paper fill, and a minimum height of 49px. Text areas begin at 105px and resize vertically. Labels sit above fields with a 9px gap. Errors rely on native required-field and email validation; no custom error or disabled visual language is established.

Interests are compact bordered controls, wrap with an 8px gap, and invert to olive when selected. Their pressed state is exposed with `aria-pressed`.

### Navigation and disclosures

Desktop navigation is white over the hero, beside the original wordmark and outlined visit action. Mobile navigation opens beneath the header on solid dark green. FAQ rows use native details/summary semantics, fine dividers, and a line-based plus changing to minus when open.

### Request preview

Prepared requests render in a paper-filled, scrollable, wrapping text block with a 450px maximum height. Copy and edit actions follow it. Focus moves into the preview on preparation and back to the first field when editing. The interface explicitly distinguishes preparing a request from sending one.

### Motion

The initial invitation enters with a 14px vertical movement and clipping reveal over 1.1s. Itinerary changes use a 6px movement over 0.45s. Both use `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced-motion preferences disable animation, transitions, and smooth scrolling.

## Do's and Don'ts

### Do:

- Do use original Sanctuary identity assets and locally hosted Suisse.
- Do preserve generous image windows, light headings, and fine dividers.
- Do preserve clear selected states, keyboard focus, and reduced-motion behavior.
- Do identify architectural and vision imagery in visible captions.

### Don't:

- Don't add raised card shadows to the flat surface system.
- Don't round every control into a pill; preserve the observed square form language.
- Don't treat proposed experiences or vision imagery as completed, bookable facilities.
