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
- Delivery ask-on-risk; forecast320–390 authored additions+deletions excluding generated assets, running382 authored lines across local work-unit/documentation commits before final proof update; native pending slice366 lines. 400 is advisory planning heuristic, not code-golf criterion. If forecast/count exceeds budget, resolve chain choice before next commit. No remote action authorized.

## Tasks
- [x] PV-1 Implement categorized project browser with compact card/list modes and localized accessible controls, tests and README. Route delegated; trigger3+ non-trivial files. Acceptance: all7 visible by default; counts2/2/3; filtering works in both modes; layout/category survive language change; full details and galleries retained; no overflow mobile; no fake demos; no source data loss. Checks: focused RED/GREEN, all tests/lint/typecheck/build/diff-check; local desktop/mobile category→list→detail→gallery interaction, console and screenshot QA. Work-unit commit bbc3f92; native RDD medium/under_budget, review_due=false.

## Verification and progress
- Mapping via CodeGraph completed. Existing components and content are enough; no global CSS required.
- Visual concept inspected; selected specification and completed fidelity ledger recorded below.
- Functional commands: npm test; npm run lint; npm run typecheck; npm run build.
- Rollback boundary: new category/control content, projects-section controls and card layout changes with matching tests/docs; unrelated content untouched.
- Next step: user reviews local project browser before authorizing any publication.

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
- Completed local work-unit commit bbc3f92; native committed assessment medium/under_budget (317 lines), review_due=false; no reviewer run/approval fabricated. Remaining: user local review. Dev server already running at http://127.0.0.1:3000/#proyectos.

## Accepted local review corrections
- User browser review at438x799 found EduNotas indicator row overflowing its card, and Demo larger than Detalle. Verified causes:13 fixed20px pips plus gaps/padding in an unbounded absolute row; ButtonLink min-h-12 overrides card h-10 while outline stays40px.
- [x] PV-2 Bound slider indicators and unify project action sizes. Route delegated writer (slider/card plus tests, 2+ non-trivial files); mapping delegated. Acceptance: all13 indicators stay inside media at438/390/mobile and320px desktop list rail; final indicator selects image13; Demo and Detalle have equal40px height and112px width with matching spacing/radius, blue vs outline preserved, ES/EN/cards/list. Checks: focused observed RED/GREEN, full tests/lint/typecheck/build/diff; Browser/IAB DOM geometry+screenshots at438/390 anddesktop. No shared button/global CSS redesign. Forecast35–55 authored lines, accumulated317+correction/task proof expected below400. Work-unit e040fef; RDD medium/under_budget, review_due=false. No remote authorization; no push/deploy.
- Earlier no-horizontal-page-overflow QA did not establish containment of the internal13-pip row or equal action geometry; PV-1 remains completed but these two acceptance refinements are pending PV-2.
- Rollback PV-2: slider container/pip sizing and card action sizing with regression tests only. Strict TDD and runner npm test unchanged. RDD on/default; baseline remains66b1392 since prior medium slice is under_budget. Next: RED-first correction, local geometry QA, work-unit commit/risk assessment.

## PV-2 observed correction evidence
- RED2failed/9passed, GREEN11passed for initial correction. Short-pill refinement RED2failed/4passed then GREEN6passed. Full44 tests/9files; lint/typecheck/build/diff-check passed.
- Browser/IAB requested438x799 and390x844 plus desktop1440 list/card, ES/EN. Long13-pip media318.75/pill278.75 and narrow275.11/pill235.11 both contained; list media320/pill280 contained. Last13 indicator selects aria-current=true. Short4-pip pill117.98 fits without empty stretch. Both actions111.99x40px, radius12px, padding0; Demo rgb(5,102,217), Detalle transparent. No console errors/overlay; page remains nonblank localhost portfolio.
- Reference screenshots showed internal overflow and48vs40 heights; after screenshots /tmp/project-controls-pips-fixed.jpg and /tmp/project-controls-buttons-fixed.jpg show corrections. Scope preserves all gallery controls and blue/outline. Browser CSS dimensions can differ from requested viewport override; containment validated directly by measured DOM bounds, not inferred from requested resolution.
- Correction authored43 lines plus task evidence; accumulated candidate expected below400. No push, merge, deploy or dependency changes. Completed work-unit e040fef and native medium/under_budget assessment (366-line pending slice); user local review remains.

## PV-3 accepted scope revision
- User replaces compact mobile-list proposal: hide layout switch below md (768px, existing horizontal-list breakpoint); show icon-only switch on md+ with localized accessible names and hover titles. Mobile keeps existing stacked cards. Preserve categories, desktop state, ES/EN and galleries.
- [x] PV-3 Implement responsive icon-only layout switch. Route delegated writer/preparation; section, regression tests and README. Strict TDD enabled, npm test. Acceptance: no visible selector below768px; md+ controls are icon-only, named accessibly; cards/list still work; no unrelated layout changes. Checks: observed RED/GREEN, full tests/lint/typecheck/build, local browser mobile/desktop.
- Revised forecast25–45 authored lines; cumulative388 before this task. Delivery chain strategy unresolved; implementation authorized, no next commit until strategy resolved. No remote operations.
- PV-3 implementation and functional verification observed: RED1failed/6passed, GREEN7passed; full45 tests/9files, lint/typecheck/build/diff passed. Source/test/docs30 authored lines. Browser localhost requested438x799: selector invisible;1440x1050: two icon-only40x40 buttons with Spanish accessible names, list then cards data-layout transitions observed; no console errors. Screenshots /tmp/project-switch-mobile.jpg and /tmp/project-switch-desktop.jpg. Viewport reset.
- PV-3 remains unchecked only because work-unit commit/delivery strategy is pending user decision; code is available locally for review. No remote actions. Rollback section control utilities/markup, associated test and README sentence only.

## Authorized delivery
- User explicitly authorized push/merge to configured origin/main and Vercel publication, then accepted size:exception for single release (411 authored text lines before this delivery record). Delivery exception-ok; no chain required. Existing Git repository authentication authorized; no force push.
- PV-3 functional/browser checks complete; release recheck45tests, lint,typecheck,build passed. Native RDD remains on/default; candidate consent unchanged.

## Release review evidence
- Work-unit d67146a closes PV-3 plus mechanical ShopiFast title/gallery corrections. Native reliability review approved with no findings, acknowledged lineage review-f1fa25ae1b9838fb at d67146a (415 authored text lines including delivery record). Reviewer read patches/tests and binary metadata; rendered geometry proof remains earlier local browser QA, not independently rerun by reviewer.
- Full45 tests, lint,typecheck,build passed. User authorizes single size exception and push/merge publication. Next: normal fast-forward main and verify Vercel production.
