# Implementation Report

## Contact Cleanup + Scroll Weight Review

- Removed the temporary WhatsApp and direct-email action cards from the Contact section.
- Removed the matching temporary WhatsApp and email links from the footer.
- Preserved the Email field inside the contact form and the internal placeholder email used by the current form-submission prototype.
- Added `setupContactTitleScrollWeight()` in `js/main.js`.
- `Start a Conversation` changes from heading weight `400` to `600` when it approaches the viewport center, making the effect visible while scrolling down or back up.
- The interaction uses `requestAnimationFrame` and a passive scroll listener.
- When `prefers-reduced-motion` is enabled, the scroll-linked title emphasis is not initialized.
- Modified files: `index.html`, `css/styles.css`, `js/main.js`, `docs/Documentation.md`, `docs/Plan.md`, and `docs/Implementation-Report.md`.

## Audit Implementation Summary

This iteration replaced the custom Three.js Hero implementation with a `<model-viewer>` embed, matching the approach that already worked in another project. The pass preserved the Hero copy, CTAs, navigation, metadata and page structure while keeping the local GLB model and a controlled Hero 3D area.

## Files Modified

- `assets/models/hero/cabana-tusa.glb`
- `css/styles.css`
- `js/hero-3d.js`
- `index.html`
- `docs/Documentation.md`
- `docs/Implementation-Report.md`
- `docs/Plan.md`

Pre-existing manual change detected and preserved:

- `assets/images/hero/hero-main-placeholder.svg`

## Main Changes

- Replaced the custom Three.js Hero enhancement with a `<model-viewer>` embed.
- Moved the provisional `cabana-tusa.glb` model from the project root into `assets/models/hero/`.
- Removed the transparent PNG fallback from the active Hero flow.
- Kept the decorative Hero 3D area on the right side of the Hero on desktop.
- Added mobile stacking so the 3D visual appears below the Hero copy.
- Kept scroll-linked camera orbit refinement through `js/hero-3d.js`.
- Enabled model-viewer camera controls while disabling zoom and pan.
- Preserved existing copy, section structure, service order, metadata and navigation.

## Workflow Image Asset Update

- Updated the five How We Work / Framework image references in `js/main.js` back to SVG after the workflow visuals were replaced manually.
- Active workflow assets now use:
  - `assets/images/workflow/workflow-step-01-placeholder.svg`
  - `assets/images/workflow/workflow-step-02-placeholder.svg`
  - `assets/images/workflow/workflow-step-03-placeholder.svg`
  - `assets/images/workflow/workflow-step-04-placeholder.svg`
  - `assets/images/workflow/workflow-step-05-placeholder.svg`
- The previous PNG workflow references are no longer active.
- No workflow text, step order, layout or interaction behavior was changed.

## Favicon Asset Review

- Created `assets/icons/favicon.svg` as a real editable SVG favicon asset.
- Connected the favicon from `index.html` with `<link rel="icon" href="./assets/icons/favicon.svg" type="image/svg+xml" />`.
- The favicon uses the active BIM Services palette: Deep Sapphire, white and Neon.
- No layout, content, navigation or interaction behavior was changed.

## 3D Hero Integration Review

### Library and loading approach

- The Hero now uses `@google/model-viewer` loaded from `https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js`.
- This matches the working embed approach provided by the user from another project.
- The custom Three.js scene, `GLTFLoader` and local vendor modules were removed from the active implementation.
- The implementation avoids a build step or package manager dependency.

### Model asset

- Final GLB path used: `assets/models/hero/cabana-tusa.glb`
- The model is referenced directly from the `<model-viewer>` tag as `./assets/models/hero/cabana-tusa.glb`.
- The model was not renamed.
- The original file was detected as an untracked root-level asset before implementation and moved into `assets/models/hero/` to avoid leaving a loose 3D asset in the project root.
- This GLB is provisional and should be replaced with the final optimized Hero model later.

### Fallback removal

- The visual fallback image was removed from `index.html`.
- Fallback-specific CSS was removed from `css/styles.css`.
- `assets/images/hero/hero-3d-fallback.png` was deleted from the repo.
- The Hero now exposes real loading/error state through `data-hero3d-status` and `data-hero3d-error` instead of masking the issue with placeholder art.

### Hero integration

- `index.html` now includes a decorative `.hero-3d` region inside the existing Hero stage.
- The region contains a `<model-viewer>` element.
- The model-viewer background and poster color are transparent so the model integrates with the current Deep Sapphire Hero background.
- CSS positions the 3D area on the right side of the Hero on desktop.
- On mobile, the same 3D region stacks below the Hero copy to avoid competing with the H1, supporting copy and CTAs.
- The Hero overlay now sits above the 3D layer with `pointer-events: none` to visually integrate the model without blocking drag interaction or CTA clicks.

### Scroll rotation

- Scroll orbit refinement is implemented in `js/hero-3d.js`.
- Setting used: `maxScrollRotationDegrees: 45`
- The model-viewer camera orbit updates horizontally based on Hero scroll progress.
- The scroll effect does not zoom, pan or move the model vertically.

### Manual interaction

- Manual interaction is handled by `model-viewer` through `camera-controls`.
- Zoom is disabled with `disable-zoom`.
- Pan is disabled with `disable-pan`.
- Camera orbit limits keep the model in a controlled range.

### Mobile behavior

- Mobile 3D remains enabled through the same `<model-viewer>` element.
- The 3D area uses a controlled responsive height and appears below the Hero text.
- If model-viewer or model loading fails on mobile, the Hero 3D region stays empty and exposes debug state instead of showing fallback art.

### Reduced motion

- `prefers-reduced-motion` disables automatic scroll-driven 3D rotation.
- The scene can remain static, and the rest of the Hero content stays accessible.
- CSS reduced-motion rules also remove visual transitions globally.

### Performance considerations

- `<model-viewer>` owns the renderer and GLB loading lifecycle.
- The implementation is simpler than the previous custom Three.js setup.
- If the model fails, the error is logged and stored on `data-hero3d-error`.

### Model loading fix

- The screenshot review showed the Hero was staying in fallback state.
- The custom Three.js path was replaced by the user-proven `<model-viewer>` approach.
- `js/hero-3d.js` now only manages debug status and scroll orbit refinement.
- A `data-hero3d-status` attribute now reports `model-viewer-initializing`, `loaded` or `error` on the Hero 3D container for easier debugging.
- `data-hero3d-error` stores the latest error message when model or module loading fails.

### Local vendor cleanup

- Removed the local Three.js vendor files:
  - `js/vendor/three.bundle.mjs`
  - `js/vendor/GLTFLoader.bundle.mjs`
- The active Hero no longer includes a visual fallback image, so model-loading failures are no longer hidden by placeholder art.

### Accessibility

- The 3D region is marked `aria-hidden="true"` because it is decorative.
- Hero H1, supporting copy and CTAs remain normal HTML and do not depend on the 3D model.
- The overlay uses `pointer-events: none`, so it does not block Hero links or 3D drag interaction.

### Git state before implementation

- Local branch: `main`
- Tracking branch: `origin/main`
- Pre-existing changes detected before coding:
  - `assets/images/hero/hero-main-placeholder.svg`
  - untracked root file `cabana-tusa.glb`
- The pre-existing Hero placeholder SVG change was preserved.

### Git state after implementation and sync

- Modified files include:
  - `assets/images/hero/hero-main-placeholder.svg`
  - `css/styles.css`
  - `index.html`
  - `docs/Documentation.md`
  - `docs/Implementation-Report.md`
  - `docs/Plan.md`
- New files include:
  - `assets/models/hero/cabana-tusa.glb`
  - `js/hero-3d.js`
- Implementation commit created: `65ab2b6`
- Commit message used: `Add Three.js 3D hero integration`
- Push to `origin/main`: completed successfully.
- A follow-up documentation sync commit was prepared after this line so the report reflects the final GitHub state.

### Validation performed

- `node --check js/main.js` completed without syntax errors.
- `node --check js/hero-3d.js` completed without syntax errors.
- Static path checks confirmed the GLB, logo assets, CSS and JavaScript files exist.
- A temporary Node static server confirmed local HTTP access for:
  - `/index.html`
  - `/assets/models/hero/cabana-tusa.glb`
  - `/js/hero-3d.js`
- Browser automation with Playwright was not available in the current environment, so visual WebGL QA remains pending.
- Node fetch confirmed the `@google/model-viewer` script URL returns `200`.
- Local static-server checks confirmed `/index.html`, `/js/hero-3d.js` and `/assets/models/hero/cabana-tusa.glb` resolve with HTTP `200`.

### Model-viewer replacement pass

- Replaced the custom Three.js canvas host with a native `<model-viewer>` element in `index.html`.
- Removed the local Three.js vendor files from `js/vendor/`.
- Kept `js/hero-3d.js` as a small helper for load/error status and scroll orbit updates.
- Current debug states are exposed through `data-hero3d-status` and `data-hero3d-error`.
- The active model path remains `./assets/models/hero/cabana-tusa.glb`.

### Hero model layout refinement

- Expanded the Hero 3D area so the model occupies the right visual field instead of appearing as a small floating object.
- Moved the model-viewer camera closer with `camera-orbit="238deg 58deg 32%"`.
- Kept zoom and pan disabled.
- Locked vertical camera orbit by using the same polar angle in `min-camera-orbit` and `max-camera-orbit`.
- Kept horizontal camera orbit constrained between `200deg` and `290deg`.
- Added a subtle branded radial glow behind the model to integrate it with the Deep Sapphire Hero background.

### Open review points

- Test model-viewer and GLB loading on GitHub Pages, not only via static code inspection.
- If a fallback is reintroduced later, use it only after the GLB loading path is confirmed stable.
- Optimize the final GLB before consolidating the 3D Hero direction.
- Review mobile performance on a real device before increasing visual complexity.
- Confirm the 45-degree scroll and drag range feels subtle enough in a live browser.

## Hero Polish + Global Motion Refinement Review

### Header spacing

- Added balanced inline padding to `.header-shell` so the logo and CTA sit slightly farther from the lateral edges.
- Increased the `Let's talk` CTA inline padding slightly while keeping the same button style, text and destination.
- The logo still links to `#home`, and the CTA still links to `#contact`.

### Placeholder grid cleanup

- Removed visible CSS grid textures from:
  - Hero visual placeholder treatment
  - service icon placeholder frame
  - project placeholder fallback
  - team placeholder fallback
  - contact-panel decorative treatment
- The Hero placeholder now uses `Deep Sapphire` as a flat branded surface.
- Project and service placeholder surfaces use `--color-surface-blue` for a softer branded surface.

### Service SVG icons

- Created six SVG service icon assets:
  - `assets/icons/services/cad-to-bim-icon.svg`
  - `assets/icons/services/specialty-bim-modeling-icon.svg`
  - `assets/icons/services/coordination-3d-icon.svg`
  - `assets/icons/services/construction-documentation-icon.svg`
  - `assets/icons/services/cost-quantity-estimation-icon.svg`
  - `assets/icons/services/construction-planning-4d-icon.svg`
- The icons are referenced from the `services` array in `js/main.js`.
- The existing `.service-icon` frame still controls size and position, so service-card layout did not change.

### Global reveal motion

- Global reveal is now opacity-only.
- Removed global `translateY` from `.reveal` elements.
- Added `--motion-reveal-duration: 620ms`.
- Workflow cards keep their card-by-card reveal with translate because that section is intentionally sequential.

### Hero title scroll interaction

- `setupNavigation()` now also toggles `.hero-title--scrolled` on `#hero-headline` once scroll passes the existing header threshold.
- The title moves from the normal heading weight to `--font-weight-heading-active`.
- The effect is reversible when returning to the top.
- The effect is disabled when `prefers-reduced-motion` is active.

### Microinteractions

- Header CTA spacing and service icon surfaces were softened without changing behavior.
- Reveal timing was smoothed to feel less directional and less theatrical.
- Existing hover/focus behaviors were preserved.

### Reduced motion

- Reduced motion continues to disable long transitions and scroll-driven animation.
- The Hero title weight transition is also removed under reduced motion.

### Git state before implementation

- Local branch: `main`
- Tracking branch: `origin/main`
- Pre-existing manual modifications were detected before coding:
  - `assets/images/team/team-group-placeholder.jpg`
  - `assets/logos/bim-services-logo-white-01.svg`

### Open review points

- Verify in a browser that the Hero title weight change is visible but not distracting.
- Confirm the fade-only reveal feels smooth on GitHub Pages.
- Review the new service icons visually once real service icon direction is defined.

### Commit and push status

- Commit created: `1e9a622`
- Commit message used: `Polish hero motion, placeholders and service icons`
- Push to `origin/main`: completed successfully

## Workflow Alignment + Header Cleanup Review

### Workflow adjustments

- The workflow card content block was compacted by:
  - reducing internal card padding slightly
  - reducing the gap between the visual placeholder and the text block
  - removing the isolated badge treatment from the number
  - limiting vertical spread inside the card
- The card still keeps the same five framework steps and the same text content.

### Number + title logic

- The step number now sits directly beside the title in a shared horizontal heading unit.
- The number uses the blue interaction family and keeps strong scale, but no longer behaves like a separate badge or label.
- This makes each heading read more like:
  - `01 Model`
  - `02 Structure`
  - `03 Coordinate`
  - `04 Quantify`
  - `05 Deliver`

### Spacing changes

- Workflow card padding was reduced slightly for a more compact internal rhythm.
- The visual-to-heading gap was reduced so the lower block no longer feels dropped too far down.
- A dedicated `.workflow-step-heading` wrapper now controls alignment and gap between number and title.
- Mobile overrides reduce number size and heading gap slightly to avoid awkward wrapping.

### Header cleanup

- Removed `Home` from the visible primary navigation.
- Removed `Contact` from the visible primary navigation.
- Final visible nav now keeps:
  - `How We Work`
  - `Services`
  - `Projects`
  - `About`
- The logo still links to `#home`.
- The `Let's talk` CTA still links to `#contact`.

### Files modified for this iteration

- `assets/images/projects/project-coordination-package.svg`
- `assets/images/projects/project-documentation-set.svg`
- `assets/images/projects/project-residential-bim-support.svg`
- `assets/images/workflow/workflow-step-04-placeholder.png`
- `assets/images/workflow/workflow-step-05-placeholder.png`
- `assets/logos/bim-services-logo-white-01.svg`
- `assets/logos/bim-services-logo.svg`
- `index.html`
- `js/main.js`
- `css/styles.css`
- `docs/Documentation.md`
- `docs/Plan.md`
- `docs/Implementation-Report.md`

### Git state before implementation

- Local branch: `main`
- Tracking branch: `origin/main`
- Pre-existing manual modifications were detected before coding:
  - `assets/images/projects/project-coordination-package.svg`
  - `assets/images/projects/project-documentation-set.svg`
  - `assets/images/projects/project-residential-bim-support.svg`
  - `assets/images/workflow/workflow-step-04-placeholder.png`
  - `assets/images/workflow/workflow-step-05-placeholder.png`
  - `assets/logos/bim-services-logo-white-01.svg`
  - `assets/logos/bim-services-logo.svg`
- No untracked files were detected in the initial review.

### Open review points

- Confirm the new workflow heading balance in a live browser, especially on tablet widths.
- Check whether step descriptions should tighten or loosen slightly once real browser rendering is reviewed.
- Confirm that removing Home and Contact from the visible nav still feels intuitive for first-time visitors.

## Header Logo Swap + Initial Fade Review

### Logo assets used

- Top-of-page / Hero logo:
  - `assets/logos/bim-services-logo-white-01.svg`
- Scrolled light-header logo:
  - `assets/logos/bim-services-logo.svg`

### Header state detection

- The implementation reuses the existing `is-scrolled` class already applied to `.site-header` in `setupNavigation()` inside `js/main.js`.
- No extra scroll listener was introduced.
- The same threshold already used for the sticky header visual state now also controls the logo swap.

### Swap technique

- The header uses two stacked `<img>` elements inside the existing `.site-logo` link.
- CSS toggles their opacity based on `.site-header.is-scrolled`.
- This was preferred over changing `src` with JavaScript because it avoids image flicker and keeps the swap simple.

### Transition timing

- Logo crossfade transition: `220ms ease-out`

### Initial page fade

- A small inline script in `index.html` adds a `js` class to the root element.
- The `body` starts with `is-loading` and is switched to `is-loaded` by `setupInitialPageFade()` in `js/main.js`.
- CSS controls the fade through opacity transition.

Approximate timing:

- Initial page fade: `420ms ease-out`

### Reduced motion

- If `prefers-reduced-motion` is active:
  - the page is shown immediately
  - body fade transition is removed
  - logo opacity transition is removed

### Files touched for this patch

- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/logos/bim-services-logo-white-01.svg`
- `docs/Documentation.md`
- `docs/Plan.md`
- `docs/Implementation-Report.md`

### Decisions assumed by Codex

- The new white SVG provided locally was normalized to the dashed filename `bim-services-logo-white-01.svg` to match the spec path exactly.
- The previously tracked `assets/logos/bim-services-logo-1.png` was treated as obsolete for the active header system because the spec now relies on the two SVG assets.

### Open review points

- Confirm the white logo still feels crisp over the Hero on all screen densities.
- Confirm the 220ms crossfade is subtle enough and does not feel delayed at the scroll threshold.
- Confirm the page fade still feels good once tested on GitHub Pages, not only locally.

## Typography Update Review

### Fonts loaded

The homepage now loads its typefaces from Fontshare in `index.html`:

- `Cabinet Grotesk`
- `General Sans`

Verified endpoint:

- `https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,600&f[]=general-sans@300,400&display=swap`

The Fontshare CSS endpoint was rechecked during this iteration and returned HTTP `200`.

### Exact weights used

- `Cabinet Grotesk 400`
- `Cabinet Grotesk 600`
- `General Sans 300`
- `General Sans 400`

### Where Cabinet Grotesk is applied

- Hero title
- Hero subheadline
- Main section headings
- Framework step titles and numbers
- Service, project and team card headings
- Team placeholder initials

### Where General Sans is applied

- Body text
- Navigation
- Buttons
- Labels
- Inputs and textarea
- Captions, tags and metadata-style text
- Footer
- Longer descriptions and interface copy

### Adjustment for a lighter and more refined body texture

The body system now uses `General Sans 300` as the default reading weight, with `General Sans 400` for UI emphasis. To keep the system lighter overall:

- `--font-weight-body` remains `300`
- `--font-weight-body-medium` was reduced to `300`
- `--font-weight-body-strong` was reduced to `400`

This keeps paragraphs, descriptions and supporting copy visibly lighter while navigation, buttons, labels and controls still retain enough presence.

### Font-size, line-height and spacing changes

- No font-size changes were introduced in this iteration.
- No line-height changes were introduced in this iteration.
- No spacing changes were introduced in this iteration.
- The previous cleanup that removed negative heading tracking remains in place.

This update stayed focused on the font families and weight logic.

## Team Photo Color Treatment Review

### Technique used

- A dedicated `.team-photo` wrapper was added around the team image in `js/main.js`.
- The branded color treatment is applied in CSS through:
  - a `::after` overlay on `.team-photo`
  - image `filter` values on `.team-image`

This keeps the photo treatment isolated, reusable and easy to retune without changing the content structure.

### Brand color used

- Base overlay color: `Deep Sapphire` / `#002D72`

### Approximate values applied

Base state:

- Overlay opacity: `0.26`
- Saturation: `0.62`
- Contrast: `0.96`
- Brightness: `0.94`

Hover / focus state:

- Overlay opacity: `0.08`
- Saturation: `0.84`
- Contrast: `1`
- Brightness: `0.98`
- Slight image scale: `1.02`

Transition timing:

- Shared image-treatment transition: `520ms ease-out`

### How hover works

- The effect activates on `.team-card:hover`, `.team-card:focus-visible` and `.team-card:focus-within`.
- On hover/focus:
  - the blue overlay softens
  - color recovers partially
  - a light scale is applied

The hover does not fully remove the treatment, so the image never becomes completely raw or overly saturated.

### Mobile behavior

- Mobile keeps the branded base treatment all the time.
- The photo still reads clearly without depending on hover.
- No extra tap interaction is required for the image treatment.

### Skin-tone and realism considerations

- The effect was tuned conservatively so the placeholders remain legible and facial zones should stay readable once real headshots are introduced.
- Because the current team visuals are still placeholders, the exact overlay balance should be rechecked with real portraits and real skin tones.

### Open review points

- Validate whether `0.26` base overlay opacity is still the right balance with real photographs.
- Check whether the hover recovery should stay this subtle or recover slightly more color for final portraits.
- Review the treatment on lower-quality or lower-contrast photos before treating it as final.

## About Interaction + Global Reveal Motion Review

### What changed in About

- Team cards now use a clearer internal hierarchy in `js/main.js`:
  - visual first
  - name second
  - secondary details grouped inside `.team-details`
- Team visuals were enlarged to fill the card width with a consistent `5 / 4` aspect ratio.
- Team names were given stronger visual hierarchy through a larger size and heavier heading weight.

### Desktop hover behavior

- On desktop pointer/hover devices, `.team-details` starts collapsed.
- Role and description reveal on `.team-card:hover`, `.team-card:focus-visible` and `.team-card:focus-within`.
- The reveal uses:
  - opacity
  - slight `translateY`
  - compact internal expansion through `max-height`
  - controlled margin transition

The effect stays inside the card and does not use overlays, flips or modal-like behavior.

### Mobile / touch behavior

- Mobile keeps role and description visible by default.
- No hover-only dependency remains on small screens.
- The cards stay readable and stable without requiring a tap-to-expand pattern.

### Global reveal system

- The previous mixed reveal behavior has been consolidated around `setupRevealMotion()` in `js/main.js`.
- The system now observes:
  - generic `.reveal` elements
  - workflow cards
- The shared motion pattern is:
  - `opacity: 0 -> 1`
  - gentle `translateY`
  - controlled duration and threshold through `motionSettings`

### Workflow reuse

- Workflow still keeps its own slightly stronger reveal distance and stagger.
- Instead of a separate reveal implementation, it now uses the same reveal property naming:
  - `--reveal-delay`
  - `--reveal-duration`
  - `--reveal-distance`
- This keeps Workflow aligned with the new global system without flattening its behavior completely.

### Reduced motion

- `prefers-reduced-motion` still short-circuits the reveal logic in JavaScript and marks all reveal targets visible immediately.
- Existing CSS also disables transitions and animations under reduced motion.
- Hero parallax remains disabled under reduced motion.

### Elements receiving reveal motion

- Hero stage
- Section headings
- Intro copy blocks
- Service cards
- Contact shell
- Workflow cards

### Open review points

- The final reveal rhythm should be checked in a live browser across desktop and mobile.
- About card reveal height should be visually tested with real team bios if the text grows.

### Risks / weaknesses

- Team cards are now keyboard-focusable via `tabindex="0"` to support non-hover reveal, which should be checked in a live browser to confirm focus order feels natural.
- The new global reveal system is simpler and more maintainable than the previous split approach, but it still benefits from real-device tuning before being treated as final.

## Expandable Sections Review

### Project Experience

- `Selected Project Experience` now starts in a compact editorial state inside `index.html`.
- The collapsed state shows:
  - section heading
  - intro copy
  - one toggle button labeled `View project experience`
- The expanded state reveals the existing project cards in place inside `#project-experience-content`.
- The same button switches to `Show less` and collapses the region again.

### About

- `About BIM Services` now starts as a compact block with:
  - section heading
  - existing intro copy
  - a temporary group-photo preview
  - one toggle button labeled `Meet the team`
- The expanded state hides the preview image and reveals the existing individual team cards inside `#about-team-content`.
- The same button switches to `Show less` and restores the collapsed preview state when pressed again.

### Toggle implementation

- Both sections use real `<button>` controls.
- Each button updates:
  - `aria-expanded`
  - `aria-controls`
  - visible button label text
- Each expandable region updates:
  - `hidden`
  - `aria-hidden`
  - `inert`
- The expand/collapse behavior is centralized in `setExpandableSectionState()` and `setupExpandableSections()` in `js/main.js`.

### Motion behavior

- Expand/collapse uses in-place height and opacity transitions.
- The effect is intentionally separate from the viewport-based reveal system.
- Transition timing is controlled with `--expandable-duration` in `css/styles.css`.

### Mobile behavior

- The same buttons work on touch devices without hover.
- The page grows naturally when a section opens; no modal or drawer pattern is used.
- The toggle button stretches to full width on small screens to make tapping clearer.

### Assets created or reused

- Created `assets/images/team/team-group-placeholder.jpg` for the collapsed About preview.
- Reused the existing individual JPG team placeholders for the expanded About state.
- Reused the existing project placeholder cards for the expanded Projects state.

### Open review points

- Check in a live browser whether the expand/collapse height transition feels fast enough on longer content.
- Confirm whether `Show less` is the final preferred label or whether a more editorial variation is needed later.
- Replace the group-photo placeholder with a real team image once available.

## GitHub Sync Review

### Repository status before changes

- Local branch: `main`
- Tracking branch: `origin/main`
- Working tree was not clean before this iteration started.
- Detected logo-related local changes before implementation:
  - deleted tracked file: `assets/logos/bim-services-logo-1.png`
  - added local white SVG asset with underscore naming that was normalized into `assets/logos/bim-services-logo-white-01.svg`

### Files created or modified

- `assets/images/projects/project-coordination-package.svg`
- `assets/images/projects/project-documentation-set.svg`
- `assets/images/projects/project-residential-bim-support.svg`
- `assets/images/workflow/workflow-step-04-placeholder.png`
- `assets/images/workflow/workflow-step-05-placeholder.png`
- `assets/logos/bim-services-logo-white-01.svg`
- `assets/logos/bim-services-logo.svg`
- `index.html`
- `css/styles.css`
- `js/main.js`
- `docs/Documentation.md`
- `docs/Plan.md`
- `docs/Implementation-Report.md`

### Commit and push status

- Commit created: `ea1533c`
- Commit message used: `Refine workflow alignment and header navigation`
- Push to `origin/main`: completed successfully
- No merge conflicts or broken path warnings were detected during the static review.

### Notes

- No folder restructuring was introduced.
- No temporary files were left outside `assets/`.
- The iteration should be committed and pushed together so markup, styles, behavior, asset and docs remain synchronized.

## SEO / Metadata Review

The current metadata remains aligned with the content strategy:

- Title: `BIM Services | BIM Modeling, Coordination & Documentation for AEC Teams`
- Meta description: `BIM Delivery Intelligence for AEC teams: BIM modeling, 3D coordination, CAD to BIM and construction documentation support from design information to construction-ready deliverables.`
- H1: `BIM Delivery Intelligence`

The audit confirmed one static H1 in `index.html`, clear H2 section headings, and H3 service/project/team headings rendered from JavaScript. No SEO copy changes were applied because the current content already reflects the approved Content, Messaging & SEO structure.

## Accessibility Review

Applied accessibility-related changes:

- Added `aria-label="Contact BIM Services on WhatsApp"` to the WhatsApp quick-contact link.
- Added `aria-label="Email BIM Services"` to the email quick-contact link.
- Added visible fallback contact values to quick-contact and footer links before JavaScript hydration.

Reviewed and kept:

- One H1.
- Section `aria-labelledby` usage.
- Form labels tied to inputs.
- Menu button with `aria-controls` and `aria-expanded`.
- Focus-visible styles in CSS.
- Reduced-motion handling for Hero parallax and Workflow reveal.

Open accessibility notes:

- Placeholder WhatsApp and email URLs are not real destinations yet.
- Project overlay interaction should be keyboard and touch tested in a live browser.
- The lighter `General Sans 300` body text should be reviewed on real devices.
- Team photo treatment should be checked against real faces to confirm contrast and clarity remain comfortable.

## Responsive Review

Static CSS review confirmed responsive rules for:

- Desktop grids.
- Tablet service, project, team and footer layouts.
- Mobile hamburger menu.
- Mobile Hero stacking and button layout.
- Mobile one-column cards and contact form.

Applied responsive-related typography cleanup:

- Removed viewport-driven heading font sizing and retained controlled mobile overrides.

Open responsive notes:

- A live viewport test is still needed for 320px to 390px mobile widths.
- Hero parallax and project overlay behavior should be tested on touch devices.
- Header spacing between 768px and 1023px should be visually reviewed in-browser.

## Assets / Paths Review

Reviewed active asset references:

- `assets/logos/bim-services-logo.svg`
- `assets/icons/favicon.svg`
- `assets/images/hero/hero-main-placeholder.svg`
- `assets/images/workflow/workflow-step-01-placeholder.svg`
- `assets/images/workflow/workflow-step-02-placeholder.svg`
- `assets/images/workflow/workflow-step-03-placeholder.svg`
- `assets/images/workflow/workflow-step-04-placeholder.svg`
- `assets/images/workflow/workflow-step-05-placeholder.svg`
- `assets/images/projects/project-residential-bim-support.svg`
- `assets/images/projects/project-coordination-package.svg`
- `assets/images/projects/project-documentation-set.svg`
- `assets/images/team/team-member-01-placeholder.jpg`
- `assets/images/team/team-member-02-placeholder.jpg`
- `assets/images/team/team-member-03-placeholder.jpg`

Static path checks found the active asset references resolved to existing files. The older `project-sample-01.svg`, `project-sample-02.svg` and `project-sample-03.svg` files appear unused by the current UI and were left in place pending cleanup approval.

### Team placeholder asset update

- Replaced the shared SVG team placeholder reference with three individual JPG placeholders.
- Each team member now points to its own file in `js/main.js`, which makes future replacement easier without changing card markup or the content structure.
- New files created:
  - `assets/images/team/team-member-01-placeholder.jpg`
  - `assets/images/team/team-member-02-placeholder.jpg`
  - `assets/images/team/team-member-03-placeholder.jpg`

## Pending Decisions

- Confirm final WhatsApp number and email address.
- Decide whether placeholder contact links should remain clickable before real contact details exist.
- Replace or approve the Hero visual placeholder.
- Replace project placeholders with validated project examples.
- Replace team placeholders with real photos and roles.
- Confirm the final preferred balance between branded blue tint and recovered hover color once real portraits are available.
- Decide whether unused legacy project sample SVGs should be deleted.
- Validate Cabinet Grotesk heading rhythm in a real browser and on mobile devices.
- Validate the lighter General Sans body typography in a real browser and on mobile devices.
- Validate Hero parallax and project overlays in a live browser.
- Decide whether a backend/contact service is required instead of mailto behavior.
