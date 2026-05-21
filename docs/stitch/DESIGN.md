---
name: Systemic Elegance
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#919094'
  outline-variant: '#46464a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#313031'
  primary-container: '#0a0a0b'
  on-primary-container: '#7a797a'
  inverse-primary: '#5f5e5f'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#000c10'
  on-tertiary-container: '#00859c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1c1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is engineered to reflect the precision, scalability, and technical depth of a Senior Systems Architect. The brand personality is authoritative yet understated, prioritizing information density and legibility through a high-end minimalist lens.

The aesthetic utilizes **Minimalism** with a **Glassmorphic** overlay layer. It leans into "Dark Mode by Default," evoking the environments where complex systems are built. The emotional response should be one of absolute trust and technical mastery, using high whitespace to allow complex engineering concepts room to breathe. Visual interest is driven not by clutter, but by the subtle interplay of light (glows and blurs) against a deep, infinite background.

## Colors
The palette is rooted in the "Midnight" spectrum. The primary background (`#0A0A0B`) provides a foundation of depth. **Electric Blue** serves as the functional primary accent, used for actions and critical paths, while **Cyan** provides a secondary highlight for data visualization and subtle gradients.

- **Primary:** Deep Midnight (#0A0A0B) â€“ Background and structural foundation.
- **Accent Primary:** Electric Blue (#3B82F6) â€“ Interactive elements and primary focus.
- **Accent Secondary:** Cyan (#06B6D4) â€“ Highlights, syntax highlighting, and success states.
- **Surface:** A semi-transparent variation of the neutral palette for glassmorphism.
- **Typography:** Pure white for high-contrast headings, and cool grey (`#94A3B8`) for secondary descriptive text.

## Typography
The typography system relies on **Inter** for its clean, Swiss-inspired neo-grotesque qualities, ensuring readability across complex technical documentation. To reinforce the engineering focus, **JetBrains Mono** is used sparingly for technical labels, code snippets, and metadata.

Headings should use tight letter-spacing to appear more "designed" and high-end. Body text maintains a generous line height (1.6) to improve scanability of long-form technical case studies. A strict hierarchy is enforced, using size and color weight (white vs. muted grey) rather than excessive bolding.

## Layout & Spacing
This design system uses a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is "Centric Content": while the background is infinite, content is contained within a 1280px max-width wrapper.

Spacing follows an 8px geometric progression. To achieve the "premium" feel, vertical margins between sections are intentionally oversized (`120px+`), creating a sense of luxury and focus. Elements should be grouped using proximity; related technical specs use `16px` or `24px` gaps, while distinct conceptual blocks use `48px` to `64px`.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and light emission rather than heavy shadows.

- **Base Layer:** Pure `#0A0A0B` background.
- **Mid Layer (Cards):** Background blur (20px to 40px) with a semi-transparent fill (`rgba(255, 255, 255, 0.03)`).
- **Borders:** "Micro-borders" are essential. Use 1px or 0.5px solid strokes with a linear gradient (top-left to bottom-right) starting at `rgba(255,255,255,0.15)` and fading to `rgba(255,255,255,0.02)`.
- **Glows:** Active states and primary cards use a soft, diffused outer glow (e.g., `box-shadow: 0 0 30px rgba(59, 130, 246, 0.1)`).

## Shapes
The shape language is modern and approachable, utilizing a **Rounded** (Level 2) logic. 

- **Standard Elements:** 0.5rem (8px) radius for input fields and small buttons.
- **Container Elements:** 1rem (16px) for cards and modals.
- **Section Accents:** 1.5rem (24px) for large hero images or featured project containers.

This consistency in rounding softens the "cold" nature of the dark technical palette, making the software feel modern and user-friendly.

## Components

### Buttons
- **Primary:** Solid Electric Blue background with white text. On hover, add a `0 0 20px rgba(59, 130, 246, 0.4)` glow.
- **Secondary:** Transparent background with a 1px white border at 20% opacity. Text is white.
- **Ghost:** No border or background. Cyan text. Used for less critical navigation.

### Cards
Cards are the primary container. They must feature a `backdrop-filter: blur(12px)` and a subtle gradient border. Padding should be generous (default `32px`).

### Input Fields
Darker than the base background (`#000000`). Use the Accent Primary color for the 1px bottom border only on focus to keep the interface clean and "architectural."

### Chips/Tags
Small, pill-shaped tags for technical skills (e.g., "Kubernetes," "Rust"). These use a dark grey background (`#17171A`) with `label-caps` typography and 1px borders.

### Progress Bars / Data Vis
Utilize the Cyan-to-Blue gradient. Always use rounded caps for progress bars to match the shape language.

### Code Blocks
Custom-styled with a slightly lighter background than the base, using **JetBrains Mono**. Syntax highlighting should be limited to the accent palette (White, Blue, Cyan, and a muted Grey).