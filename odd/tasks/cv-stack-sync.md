# Synchronize the portfolio stack with the linked CV

## Objective and authorization
Update ES/EN skills from the current publicly linked CV, including AWS/GCP/Azure tooling, languages, mobile/frontend, backend/integration, databases, practices and AI workflows. Preserve existing extra technologies and unpublished ShopiFast captures. Local changes only; no push/deployment.

## Evidence and constraints
Authoritative source: current public Google Drive CV, locally read at /tmp/portfolio-linked-cv.txt and /tmp/portfolio-linked-cv.pdf. Existing public/cv PDF is older and not authoritative. Do not invent proficiency, certifications or individual cloud services. Node is a runtime, represented under backend rather than languages. Generic existing technology icons are acceptable.

## Workflow and recovery
Branch codex/shopifast-preview. Route delegated writer: content, rendering tests and documentation. Strict TDD enabled by /home/alex/.gentle-ai/state.json strict_tdd=true; runner npm test (Vitest/jsdom). Forecast 230–310 authored lines; delivery ask-on-risk. Native RDD default/on; pending boundary158b8cfc5427d12dcd3d24e7b03af1547535e006 includes prior capture unit. Engram mirror PENDING: current authoritative runtime session identity unavailable; do not mutate memory.

## Tasks
- [x] CV-1 Synchronize bilingual groups and AI/practice badges with linked CV while retaining extras. Acceptance: all named linked-CV technologies and practices represented, ES/EN label parity, no cloud service/proficiency invention, no project changes. Checks: focused observed RED/GREEN, all tests/lint/typecheck/build/diff-check; parent desktop/mobile visual QA. Work-unit commit bbdd0dc; native medium/under_budget, review_due=false (332 accumulated authored lines).

## Verification and next step
Focused tests: observed RED 6 failed -> GREEN 6 passed. Rollback: skillGroups/skills descriptions/aiStack, section tests and relevant README note only. Parent visual QA completed. No remote changes authorized.

## Observed implementation evidence
- Authoritative linked PDF confirmed newer than local PDF; stack synchronized without replacing CV files or links.
- Added six bilingual groups and expanded the existing AI panel. Existing extra technologies preserved; all linked CV named skills represented without cloud-service or proficiency invention.
- Focused RED:6 failed before content changes; GREEN:6 passed. Full54 tests/10 files passed; lint/typecheck/build/diff-check passed. Logs /tmp/cv-stack-{red,green,all,build}.log.
- Parent visual QA passed; no overall layout change was required by the existing dynamic group renderer. Native RDD mode on/default observed. Engram mirror remains pending due unavailable current runtime identity.
- Next: user local review. No push/deploy.
- Work-unit commit bbdd0dc implements CV-1. Native assessment against158b8cfc5427d12dcd3d24e7b03af1547535e006: medium/under_budget,332 accumulated lines, review_due=false; no reviewer consent or approval fabricated. Boundary stays pending until a later due slice. Parent visual review passed and task is checked off.

Parent visual QA: local production3001, desktop1440x900 and mobile390x844. All six groups and AWS/GCP/Azure visible; mobile document scrollWidth=clientWidth376 and zero overflowing skills articles. ES->EN->ES switch verified; zero console errors/warnings. Screenshots /tmp/portfolio-stack-cloud.jpg and /tmp/portfolio-stack-mobile.jpg. Full54tests/lint/typecheck/build/diffcheck passed. No failed or skipped functional checks. Native review not due (under budget), boundary remains pending; Engram mirror pending due runtime identity unavailable. Next step: user local review at http://127.0.0.1:3001/#habilidades; no push/deployment.
