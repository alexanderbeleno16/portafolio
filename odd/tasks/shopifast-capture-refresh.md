# Refresh authentic ShopiFast captures

## Goal and authorized scope
Replace only three assistant-created blurry catalog/detail/checkout captures with fresh screenshots of the public AWS demo. Preserve two user-provided pending/approved PNGs byte-for-byte and five-image order. Keep AWS first-sentence description already authorized. Local only, no publication authorized.

## Evidence and workflow
- Existing JPEG1295x809,52/48/42KB, text blurred in source; enlargement cannot restore detail. Publicdemo now catalogready with10products after userrestoredservice. No fixtures, credentials, paymentsubmission or formdata.
- Browser/CUA nativecaptureonly: JPEG returned byruntime, PNG/DPRnotexposed. Save nativebytes unchanged, no resampling/recompression/AIenhancement. Verifyactualdimensions >=1900px and inspecttext. Versionedfilenames avoidstaleoptimizedcache; preservecatalogcover/order.
- Branch codex/shopifast-preview; baseline158b8cfc5427d12dcd3d24e7b03af1547535e006. StrictTDDenabled state strict_tdd=true, npmtest/Vitest. Delegatedpreparation alreadycompleted, delegatedwriter content/testrefs afterparentcapture. Forecast50–90authoredtextlines excludingbinaryassets. Deliveryask-on-risk; RDDon/default assesscommit, nativeconsentonlyifdue. No newdeps.

## Tasks
- [x] CAP-1 Capture genuinecatalog, productdetail andemptycheckout; replace firstthree references inES/EN/tests with versionedJPEG. Acceptance: freshnativepixels/no doubleencoding; realdemo UI/fonts/imagesloaded; no paymentaction; originaluserPNGhashesunchanged; originalblurredfilesremoved afterreplacementverified. Checks: testexpectationsREDbeforeasset/refreplacement, GREEN; fulltests/lint/typecheck/build/diff; browserslider/detail/fullscreenvisualproof andcontrast. Rollbacknewcapturefiles/references/tests/docs only; AWSdescriptionkept.

## Progress
- Publiccatalogrestored andverified. Native2560requested yielded2545x1383JPEG165KB; screenshotruntime doesnotexposePNG orquality/DPR. Finalcapturepending.
- Next: nativecaptureallthree, REDrefs, verifyandcommitlocal.

## Observed verification
- AWSpubliccatalog10products loaded; detailquote ready andemptycheckoutlegalcopy loaded. No fielddata/checkbox/payment submitted. Firstdetailcapture hovermagnifier obscuredsummary, rejectedandrecapturedpointeronheading.
- Native unchangedJPEGcatalog1905x1191, detail/checkout1920x1200; copiescmpverified. Previous1295x809 captures replacedonly. UserPNGhashes unchanged. Newversioned-hd paths preventoldcache reuse, ES/ENfiveimageorderandcoverretained.
- RED3failed/3passed thenGREEN6passed; full48tests/9files, lint/typecheck/build/diffpass. Actualnativefiles inspectedwithviewimage; textmoredefined versusoldblur. Browserproduction3001 slidernewpath, detailfiveimages/fullscreen2of5 andnext3of5, closeworks; noerrors. Mobiledefaultanddesktoprequested1440 inspected; screenshotviewporttransitioncanclip capture, nativeoriginals usedfor finalproof.
- Rollbacknewassets/contentrefs/tests/READMEandtask only; preserveauthorizedAWSdescriptionanduserPNGs. No remotepublication. Next:userlocalreview.
- Work-unit0fa4398, nativeRDDmedium/under_budget51textlines, review_due=false; noindependentreview/approvalclaimed. Localbranchonly, productionunchanged.
