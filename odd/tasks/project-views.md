# Project browsing views and categories

## Objective and authorized scope
Improve local portfolio project browsing with compact cards, a list view and primary category filters. User expressly forbids push, merge to main, deployment or PR until local review. Preserve all seven projects, ES/EN, real screenshots, demo links, slider and detail/fullscreen galleries. No new libraries or unrelated section redesign.

## Problem and design
Existing two-column cards have long descriptions and many tags, with no filtering or layout choice. Keep dark/charcoal glass, Inter, blue/cyan accents and screenshot colors. Default two-column compact cards, single-column on mobile; alternate horizontal desktop list and mobile stacked rows. Show max three summary lines and first four technologies; remaining count opens existing full-detail modal. Category filter and card/list toggle use aria-pressed, a polite result count, keyboard-accessible buttons, responsive wrapping. Stable IDs retain selection across locale changes, no new persistence.

## Categories
- commerce: Comercio / Commerce — DuoLuxe Essence and Product Payment — ShopiFast.
- ai-data: IA y datos / AI & data — Colombia Monitor and KOA Verify.
- management: Gestión / Management — EduNotas, Optic-AI and MyKondo.
- All count7; category counts2/2/3. Labels localized in existing content. Category defines primary product domain, not technology.

## Workflow and delivery
- Branch codex/project-views; baseline/reviewed boundary66b1392e54df85101bd837523012837adebe83c7.
- Route delegated preparation (4+ files), delegated writer (3+ non-trivial production files). Parent owns design/QA, product decisions and task/mirror.
- Strict TDD enabled by /home/alex/.gentle-ai/state.json strict_tdd=true. Runner npm test (Vitest/jsdom). Observe RED before implementation, GREEN then useful refactor.
- RDD on/default; assess work-unit commit using baseline and committed-only; follow native returned transitions/consent, no fabricated review authority.
- Delivery ask-on-risk; forecast320–390 authored additions+deletions excluding generated assets, running0. 400 is advisory planning heuristic, not code-golf criterion. If forecast/count exceeds budget, resolve chain choice before next commit. No remote action authorized.

## Tasks
- [ ] PV-1 Implement categorized project browser with compact card/list modes and localized accessible controls, tests and README. Route delegated; trigger3+ non-trivial files. Acceptance: all7 visible by default; counts2/2/3; filtering works in both modes; layout/category survive language change; full details and galleries retained; no overflow mobile; no fake demos; no source data loss. Checks: focused RED/GREEN, all tests/lint/typecheck/build/diff-check; local desktop/mobile category→list→detail→gallery interaction, console and screenshot QA. Work-unit commit and RDD outcome pending.

## Verification and progress
- Mapping via CodeGraph completed. Existing components and content are enough; no global CSS required.
- Visual concept being generated for the projects section only; record selected concept and fidelity ledger after inspection before writing source.
- Functional commands: npm test; npm run lint; npm run typecheck; npm run build.
- Rollback boundary: new category/control content, projects-section controls and card layout changes with matching tests/docs; unrelated content untouched.
- Next step: inspect concept, reconcile mirror, delegate RED-first writer and validate locally.

## Visual specification selected
- Concept inspected: /home/alex/.codex/generated_images/01a107c0-f160-7d41-83ec-8eab2e0bf46c/exec-2cb39e32-d7f2-485b-b45e-429d0048942f.png (1041x1510).
- Lock layout: centered heading/description, wrapping category row left and segmented cards/list right, small count, two-column compact cards, rounded24 dark frames, aspect-video media, category label,22px title,14px muted body max3lines, first4 tags, bottom actions. Gap24, blue/cyan active states. All7 order preserved, MyKondo no demo.
- Exact toolbar ES: Todos, Comercio, IA y datos, Gestión; Tarjetas, Lista; '{count} proyectos'; description 'Explora mis proyectos por categoría y elige cómo verlos.' EN localized equivalents. Existing CTA/gallery labels reused; '+N tecnologías' localized.
- Intentional evidence corrections: concept invented screenshot content, technology names, summaries and Optic-AI category; never ship these. Real existing project data/assets override those approximations. Optic-AI belongs to Gestión. All7 same card anatomy (concept's last card had inconsistent horizontal anatomy). Existing Inter and actual screenshot imagery are retained. Concept is a visual guide only, not new product claims.
- List extension: same card components horizontal desktop with ~320px media rail and body/actions right; mobile stacked. No new icons library; grid/list SVG line icons matching existing strokes.

## PV-1 observed verification
- Section RED:5 failed before source changes; GREEN5 passed. Slider readability RED1failed/3passed; GREEN4passed.
- All41 tests across9 files passed; lint/typecheck/build/diff-check passed. Final mechanical heading whitespace change focused5/5 and typecheck passed.
- Browser/IAB localhost desktop1440x1050, concept-native1041x1510 and mobile390x844. All7 default; filters2/2/3; card/list toggles; mobile rows stack and scrollWidth==clientWidth375; locale switch retains category/view; no MyKondo demo; ShopiFast demo URL retained. Extra10 technology action opens full detail, fullscreen image2/3 and return work. No console errors; development Fast Refresh/LCP advisory warnings observed, no runtime failure.
- Fidelity ledger (concept and latest rendered screenshots inspected with view_image): heading/control copy matched; two-column vs one-column list geometry matched;22px/14px card typography and3line summaries matched; dark glass/cyan palette deliberately retains existing site tokens; image tint mismatch removed with control-only contrast; rounded frame/gap/CTA anatomy matched; mobile wrapping checked. Real assets/full original summaries/tags and correct Optic-AI category deliberately override concept inventions; no other material mismatch. Existing global section spacing/nav retained rather than changing unrelated layout.
- QA screenshot evidence outside tracked source: /tmp/project-views-cards-final.jpg, /tmp/project-views-list-final.jpg, /tmp/project-views-mobile-final.jpg. Concept remains preview-only, not shipped UI.
- Source/test/docs authored271 lines; task record additional (total forecast remains below400). Rollback scope as above. No remote operations performed.
- Remaining: coherent local work-unit commit, native committed risk assessment, final user local review. Dev server already running at http://127.0.0.1:3000/#proyectos.
