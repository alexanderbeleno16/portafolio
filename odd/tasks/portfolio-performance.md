# Portfolio image delivery performance

## Goal and authorization
Improve local portfolio image loading and perceived browsing fluency without changing visual design or project content. No push, merge, remote execution or deployment authorized for this new work.

## Evidence and scope
Next optimizer already active; hero priority, lazy project loading, paused offscreen/reduced-motion slider and dynamic modal exist. Do not destructively recompress original assets or add libraries. Verified sizes hints diverge from card breakpoint768px and list rail320px. Production local800px list image declares92vw despite320px rendered rail; requested750px variant observed. Raw source size is not transferred size.

## Workflow
- Branch codex/portfolio-performance, baseline1beb279aee823ccc01f2a2546d9f573a25fbc267.
- Strict TDD enabled from /home/alex/.gentle-ai/state.json strict_tdd=true; runner npm test (Vitest/jsdom). Observed RED then GREEN.
- Route delegated mapping (4+files), delegated writer (hero/card/slider plus tests).
- Delivery ask-on-risk; forecast90–140 authored lines including task proof, no chains anticipated. RDD on/default, assess committed unit against baseline; follow native consent if due.

## Tasks
- [x] PERF-1 Align responsive image sizes with actual hero, card and list dimensions. Preserve hero priority, lazy loading and optimizer, all slider/gallery/filter/locale interactions. Tests: responsive size hints and layout wiring; full test/lint/typecheck/build/diff. Browser production localhost mobile390/tablet800/desktop1440; compare same image width selection and HTTP bytes with same Accept; verify visual and controls. Work-unit commit after proof.

## Acceptance and measurement
- Desktop/tablet list declares320px, tablet cards declare half available width, mobile hero declares actual288px cap. No eager loading of all gallery images.
- Observe smaller requested variant on fresh production page where applicable, quantify same-source optimized response byte savings, not raw-file comparison.
- CUA read-only evaluation does not expose performance.getEntriesByType; LCP/CLS/long-task timing unavailable in this runtime. Do not claim measured overall speed/frame-rate improvement. Continuous animation changes deferred absent trace evidence.
- Rollback: sizes prop and wiring in slider/card/hero with tests/docs only.
- Production baseline server127.0.0.1:3001; existing dev3000. Next: RED-first implementation and reproducible image request comparison.

## Observed results
- RED2failed/12passed, GREEN14passed; full47tests/9files, lint/typecheck/build/diff pass.39 authored source/test/docs lines; no assets/deps/animations changed.
- Production Browser/IAB mobile390, tablet800, desktop1440: correct sizes hints, list320px; fresh local host list situacion.png selected640px versus baseline750px. Same Next WebP q75/Accept response9858 versus12450bytes (20.8percent smaller for this example, not overallsite). Existing browser cache may retain larger candidates; fresh localhost origin used after initial127.0.0.1 reused750 variant.
- Mobile hero286px rendered and384px selected; selector remains hidden. Category filter returns2 commerce projects; dynamic ShopiFast detail dialog waitsvisible and opens; zero console errors. Screenshot/tmp/portfolio-performance-list.jpg and/tmp/portfolio-performance-gallery.jpg. Requested viewports not asserted as benchmarknetwork/deviceDPR.
- LCP/CLS/longtasks unavailable in CUA read-onlyscope; no globaltiming/frame-rate claim. Shape/filter animation changes deliberately deferred pendingtrace evidence. Originals, hero priority, lazyproject loading, offscreenpause retained.
- Next: user local review; no remoteauthorization.
- Work-unit15fad00; native RDD medium/under_budget (69 authored lines), review_due=false; no independent review run or approval claimed. Baseline stays1beb279 for pending slice. Working local branch only.

## Accepted alignment and publication
- User requests category filters centered only below768px; md+ left alignment. Mechanical section/test correction; RED1failed/8passed thenGREEN9passed; build and browser538center/1440flex-start passed.
- User explicitly authorizes publication to existing GitHub origin/main and Vercel using configured repo authentication. No force push or new remote service.
