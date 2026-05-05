# Implementation Report

## Audit Implementation Summary

This iteration applied a minimal refinement to the header and initial page load. The header now uses a white logo over the Hero, swaps to the blue/original logo once the sticky header enters its light scrolled state, and the page fades in softly on first load. The patch stayed within branding state and motion without changing layout, copy or section structure.

## Files Modified

- `css/styles.css`
- `js/main.js`
- `assets/logos/bim-services-logo-white-01.svg`
- `assets/logos/bim-services-logo-1.png`
- `index.html`
- `docs/Documentation.md`
- `docs/Implementation-Report.md`
- `docs/Plan.md`

## Main Changes

- Added a two-state header logo system for top-of-page vs. scrolled header states.
- Connected the new white logo asset at `assets/logos/bim-services-logo-white-01.svg`.
- Removed the older tracked PNG logo asset in favor of SVG-based logo states.
- Added a short initial page fade-in that respects reduced-motion preferences.
- Preserved all existing text, layout, navigation and section structure.
- Updated project documentation to reflect the logo-state change, load fade and GitHub sync state.

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

- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/logos/bim-services-logo-white-01.svg`
- `assets/logos/bim-services-logo-1.png`
- `docs/Documentation.md`
- `docs/Plan.md`
- `docs/Implementation-Report.md`

### Commit and push status

- The repository was prepared for a single commit containing header markup, styles, behavior, logo assets and documentation together.
- Recommended commit message for this snapshot: `Refine header logo state and initial page fade`
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
