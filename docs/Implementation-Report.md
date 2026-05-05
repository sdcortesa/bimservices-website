# Implementation Report

## Audit Implementation Summary

This iteration refined the visual treatment of the team photos inside About. The change stayed narrowly focused on image presentation and hover behavior: no copy, structure, layout, asset files or general interaction model were changed.

## Files Modified

- `css/styles.css`
- `js/main.js`
- `docs/Documentation.md`
- `docs/Implementation-Report.md`
- `docs/Plan.md`

## Main Changes

- Wrapped team images in a dedicated `.team-photo` container in `js/main.js`.
- Added a Deep Sapphire overlay treatment and controlled desaturation/brightness to team photos in `css/styles.css`.
- Made the image treatment react to whole-card hover/focus rather than direct image hover.
- Kept the base treatment strong enough for mobile, where hover is not available.
- Updated project documentation to reflect the new team-photo treatment.

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

- The About team grid now acts as a grouped reveal trigger through `data-reveal-group="about-team"` in `index.html`.
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
  - grouped reveal containers such as the About team grid
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
- Project cards
- Team cards
- Contact shell
- Workflow cards

### Open review points

- The final reveal rhythm should be checked in a live browser across desktop and mobile.
- About card reveal height should be visually tested with real team bios if the text grows.
- The grouped About reveal should be checked on very small screens, where lower cards may still begin animating before they are fully in view.

### Risks / weaknesses

- Team cards are now keyboard-focusable via `tabindex="0"` to support non-hover reveal, which should be checked in a live browser to confirm focus order feels natural.
- Grouped About reveal is intentionally synchronized, but that means mobile can reveal lower cards slightly earlier than their exact viewport entry.
- The new global reveal system is simpler and more maintainable than the previous split approach, but it still benefits from real-device tuning before being treated as final.

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
