# Synchronize the portfolio stack with the linked CV

## Objective and authorization
Update ES/EN skills from the current publicly linked CV, including AWS/GCP/Azure tooling, languages, mobile/frontend, backend/integration, databases, practices and AI workflows. Preserve existing extra technologies and unpublished ShopiFast captures. Local changes only; no push/deployment.

## Evidence and constraints
Authoritative source: current public Google Drive CV, locally read at /tmp/portfolio-linked-cv.txt and /tmp/portfolio-linked-cv.pdf. Existing public/cv PDF is older and not authoritative. Do not invent proficiency, certifications or individual cloud services. Node is a runtime, represented under backend rather than languages. Generic existing technology icons are acceptable.

## Workflow and recovery
Branch codex/shopifast-preview. Route delegated writer: content, rendering tests and documentation. Strict TDD enabled by /home/alex/.gentle-ai/state.json strict_tdd=true; runner npm test (Vitest/jsdom). Forecast 230–310 authored lines; delivery ask-on-risk. Native RDD default/on; pending boundary158b8cfc5427d12dcd3d24e7b03af1547535e006 includes prior capture unit. Engram mirror PENDING: current authoritative runtime session identity unavailable; do not mutate memory.

## Tasks
- [ ] CV-1 Synchronize bilingual groups and AI/practice badges with linked CV while retaining extras. Acceptance: all named linked-CV technologies and practices represented, ES/EN label parity, no cloud service/proficiency invention, no project changes. Checks: focused observed RED/GREEN, all tests/lint/typecheck/build/diff-check; parent desktop/mobile visual QA. Work-unit commit and RDD assessment pending.

## Verification and next step
RED-first tests pending. Rollback: skillGroups/skills descriptions/aiStack, section tests and relevant README note only. Parent owns visual QA. No remote changes authorized.

## Observed implementation evidence
- Authoritative linked PDF confirmed newer than local PDF; stack synchronized without replacing CV files or links.
- Added six bilingual groups and expanded the existing AI panel. Existing extra technologies preserved; all linked CV named skills represented without cloud-service or proficiency invention.
- Focused RED:6 failed before content changes; GREEN:6 passed. Full54 tests/10 files passed; lint/typecheck/build/diff-check passed. Logs /tmp/cv-stack-{red,green,all,build}.log.
- Parent visual QA pending; no overall layout change was required by the existing dynamic group renderer. Native RDD mode on/default observed. Engram mirror remains pending due unavailable current runtime identity.
- Next: work-unit commit/native assessment, then parent local desktop/mobile review. No push/deploy.
