# Add Product Payment to the portfolio

## Objective and authorization
Add the user's Product Payment (ShopiFast) project using the existing portfolio card and slideshow design, authentic screenshots from https://d12hv8vhtndguc.cloudfront.net/, and verified technology descriptions in both existing languages. No deployment, push, PR, credentials, or payment submission is authorized.

## Problem and scope
The project is missing from the portfolio. Reuse existing components, add screenshot assets, bilingual content, focused tests, and relevant documentation. Preserve existing project order and styling. Verify technologies against the local /home/alex/Documents/product-payment source; never expose secrets or private brief details.

## Workflow
- Feature branch: codex/add-product-payment; initial reviewed boundary: e7fd5da03429700ea013ef6ba203e99c6210a0b9.
- TDD: enabled by /home/alex/.gentle-ai/state.json strict_tdd=true; runner: npm test (vitest run). Observe RED, GREEN, then refactor only if useful.
- RDD: on, deciding source default; assess committed candidate and follow native consent/transitions if due.
- Delivery: ask-on-risk; forecast ~180 authored added/deleted lines, screenshot binaries excluded. No PR requested; running count pending commit (94 source/docs/test lines; task document additional).

## Tasks
- [ ] PP-1 Add authentic gallery assets and bilingual project entry, tests and documentation. Route: delegated writer (content, tests and docs are 2+ non-trivial files); preparation delegated because mapping spans 4+ files. Parent captures catalog/detail/checkout without entering personal/payment data or submitting. Acceptance: correct demo URL, verified frontend/backend/AWS/testing details, existing slider and gallery work, assets exist, no existing project reordered. Checks: focused RED/GREEN, all tests, lint, typecheck, build; desktop/mobile UI, slider/modal interaction and console. Commit identity and RDD assessment pending.

## Evidence and progress
- Prepared using CodeGraph and local source evidence. Technologies include React, Vite, TypeScript, Redux Toolkit, NestJS, TypeORM, PostgreSQL, Jest; AWS deployment topology to be verified in source by writer.
- Dependencies currently absent; install existing lockfile only, without manifest changes.
- Existing landing test reportedly has a stale index assertion; confirm baseline and fix only related fragility if necessary.
- Browser source reachable and titled ShopiFast · Productos; public catalog observed. Screenshots not saved yet.
- Rollback: remove only new project entries, its gallery assets and corresponding tests/docs.
- Next step: install locked dependencies, save screenshots, delegate RED-first implementation.

## PP-1 verification observed
- npm ci completed from existing lock; manifests unchanged. npm reports 17 existing dependency advisories (1 critical); no upgrades authorized or attempted.
- Baseline focused tests: 2 stale KOA index failures / 3 tests. Title lookup repair made assertions resilient. New-project RED: 3 failures / 6 tests; GREEN 6/6.
- Full tests 35/35 across 8 files; typecheck, lint, production build and diff check passed.
- Real screenshots saved: catalog.jpg, product-detail.jpg, checkout.jpg (desktop 1440x900); public AWS source checkout left empty/unsubmitted.
- Browser QA: localhost page identity and nonblank content, no overlay or console errors; Spanish/English content, slider1→2→3, detail modal, fullscreen and close observed. Desktop1440 and mobile390; mobile scrollWidth==clientWidth375 (no horizontal overflow).
- UI evidence outside repository: /tmp/portfolio-payment-gallery.jpg, /tmp/portfolio-payment-mobile.jpg, /tmp/portfolio-payment-fullscreen.jpg.
- Initial precommit assessment unavailable due undeclared untracked assets; committed-only preflight before any commit failed unrelated-target inconsistency. Real committed candidate assessment pending; no risk downgrade inferred.
- Remaining: commit coherent work unit, assess native RDD, record authority and completion.
