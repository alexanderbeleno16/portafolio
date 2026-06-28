---
name: portfolio-vertical-timeline-design
description: "Trigger: vertical timeline, experience timeline, trayectoria, experiencia. Design premium portfolio timelines with glass UI."
license: Apache-2.0
metadata:
  author: "alexa"
  version: "1.0"
---

## Activation Contract

Use this skill when designing or refactoring the portfolio's experience/trajectory section as a vertical timeline. Activate for requests mentioning timeline, experience, trayectoria, experiencia, career path, or vertical chronology.

## Hard Rules

- Build a real vertical timeline: a visible vertical axis, chronological milestones, and cards anchored to that axis.
- Do not replace the timeline with a dashboard, command board, generic card grid, carousel, or horizontal rail.
- Follow the portfolio's glass language: dark surfaces, soft capsule shapes, subtle cyan/blue glow, restrained borders, and premium spacing inspired by the header.
- Keep normal document flow. Never reintroduce sticky scroll-jacking, artificial viewport height, hidden active cards, or blank scroll tails.
- Preserve EN/ES localization, semantic structure, accessible controls, focus-visible states, and mobile readability.
- Prefer clarity over decoration. Every glow, connector, chip, or shadow must reinforce chronology or hierarchy.

## Decision Gates

| Context | Design choice |
| --- | --- |
| Desktop | Centered vertical axis with alternating glass milestone cards, or left axis with wide editorial cards if content is dense. |
| Mobile | Single left-axis vertical timeline; cards stack below each marker without horizontal overflow. |
| Long descriptions | Collapse after the first key bullets with a localized capsule button. |
| Fixed header anchors | Add `scroll-mt-*` to timeline card targets. |

## Execution Steps

1. Inspect the current section, content shape, and existing glass/header styles before editing.
2. Define the vertical axis first: placement, marker rhythm, connector line, and mobile behavior.
3. Design milestone cards with a clear hierarchy: period chip, role, company, start/end metadata, impact bullets, expand/collapse action.
4. Use Tailwind utilities consistent with the existing design tokens; avoid one-off colors outside the portfolio palette.
5. Remove any scroll-driven state, requestAnimationFrame logic, sticky wrappers, or artificial timeline height.
6. Update behavior tests for rendering all items, expand/collapse, localized aria labels, and absence of sticky/artificial-scroll regressions.
7. Validate with tests, typecheck, lint, build, and manual browser review when available.

## Output Contract

Return changed files, design summary, accessibility notes, responsive behavior, validation results, and any remaining visual QA risks.

## References

- None.
