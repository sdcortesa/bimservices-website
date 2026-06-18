# BIM Services Website Plan

## Purpose

This plan defines small, verifiable next steps after the website audit. The current build should not be redesigned in the next iteration unless a new visual spec explicitly asks for it.

## Current Baseline

Ready to keep:

- Static single-page architecture.
- Folder structure with separated HTML, CSS, JS, assets and docs.
- Editable content objects in `js/main.js`.
- Header, Hero, How We Work, Services, Project Experience, About, Contact and Footer sections.
- Cabinet Grotesk + General Sans typography pairing.
- Deep Sapphire, Royal Blue, Neon and Luxe Ivory color system.
- Soft technical radius system.
- Lightweight JavaScript interactions.
- Hero GLB embed using `<model-viewer>`, with the core Hero content still independent from the 3D model.

Still in testing:

- Technical SEO and AI visibility implementation on GitHub Pages.
- Crawlable static HTML fallback for JavaScript-rendered sections.
- Robots policy that allows AI search bots but blocks `GPTBot` training crawls until owner approval.
- Model-viewer Hero integration using `assets/models/hero/main_model.glb`.
- Hero 3D direct model-loading behavior without visual fallback art.
- Hero 3D scroll rotation and restricted horizontal drag.
- Hero 3D performance on GitHub Pages and mobile devices.
- Mobile Hero header separation and 3D color consistency after removing the overlay from above the model.
- Mobile Hero 3D mask intensity now needs visual review to confirm it feels close to desktop without becoming too dark.
- Validate the requested `65%` Hero camera radius on desktop and mobile.
- Hero title font-weight interaction on scroll.
- Fade-only reveal rhythm across the full page.
- Service icon SVG balance inside cards.
- Flat placeholder treatment after removing visible grid textures.
- Workflow card balance after the number moved beside the title.
- Header navigation density after removing Home and Contact from the visible menu.
- Header logo contrast and swap timing between Hero state and scrolled state.
- Initial page fade timing on local vs. hosted load.
- Hero placeholder and parallax intensity.
- Project overlay behavior on touch devices.
- Project carousel rhythm, responsive card count and hover overlay clarity.
- Project and About toggle button motion, icon rotation and label transition.
- Expanded Team editorial layout, LinkedIn links and 2:3 portrait photo crop quality.
- General Sans 300 body weight on small screens.
- Neon accent strength in real browser context.
- Expandable section rhythm for Project Experience and About.
- Group-photo preview quality and crop for the collapsed About state.
- About card reveal rhythm on desktop and mobile.
- Global reveal timing and repetition across the full page.
- Team photo blue-treatment intensity with real photography.
- Contact form flow because the final delivery endpoint is still pending.
- Contact heading scroll-weight emphasis and visual balance after removing temporary direct-contact cards.

Do not touch yet:

- Major layout structure.
- Brand identity direction.
- Final visual redesign.
- New sections or internal pages.
- Booking integration.
- Backend form handling.
- Additional structured data beyond the current Organization schema, until business/entity details are confirmed.

## Milestone 0: Hero 3D, Motion and About QA

Acceptance criteria:

- The provisional GLB appears on the right side of the Hero on desktop.
- On mobile, the 3D visual stacks below the Hero copy without hiding CTAs.
- Scroll rotates the model horizontally in a controlled range of roughly 45 degrees.
- Click-and-drag rotates horizontally only, with no zoom, pan or vertical orbit behavior.
- No visual fallback placeholder appears; loading and error states are exposed with `data-hero3d-status` and `data-hero3d-error`.
- `prefers-reduced-motion` disables the automatic 3D scroll rotation.
- Hero text, CTAs and navigation remain usable if the 3D enhancement fails.
- Header CTA and logo spacing feel balanced within the header container.
- Active placeholders feel cleaner and no longer read as wireframes.
- Service icons feel consistent in size, position and visual weight.
- Global reveal feels smooth as fade-only motion.
- Hero title weight interaction is subtle and reversible without layout shift.
- Workflow cards feel vertically compact and visually connected to their images.
- Workflow number + title reads as one unit without crowding mobile widths.
- Header nav feels cleaner without losing discoverability of Home or Contact.
- Header logo is clearly readable over the Hero and remains clearly readable once the header is scrolled.
- Initial page fade feels polished and does not delay interaction.
- About cards feel identity-first on desktop.
- Project Experience feels understandable and intentional in its collapsed state and carousel expanded state.
- About feels understandable and intentional in its collapsed state with the group preview image.
- The About group preview swaps cleanly with the individual team cards without visual overlap.
- Team and About group photos recover controlled color with a soft blue tint on hover, focus and touch/active states.
- Mobile keeps Team identity content visible without hidden hover-only details.
- Global reveal motion feels consistent and understated across headings, intros and cards.
- Team photos keep a strong branded base state without becoming too dark or too artificial.

Validation:

- Test the Hero on GitHub Pages or a local server, not only as a local file.
- Do not validate the 3D model by opening `index.html` directly from the filesystem; browsers can block GLB loading outside HTTP.
- Temporarily block or rename the GLB path to confirm `data-hero3d-status="error"` and `data-hero3d-error` are exposed.
- Test horizontal drag with mouse and touch.
- Confirm no model-viewer console errors appear during load, resize or scroll.
- Confirm the model-viewer web component and local GLB load on GitHub Pages.
- Review mobile performance on at least one real device before consolidating the 3D direction.
- Review header spacing at desktop, tablet and mobile widths.
- Confirm active placeholder areas no longer show grid textures.
- Check each service icon asset in the rendered service cards.
- Review fade-only reveal timing while scrolling through the page.
- Scroll down and back to the top to confirm Hero title weight behavior.
- Review workflow cards in desktop, tablet and mobile widths.
- Confirm the logo still makes Home discoverable and the CTA still makes Contact obvious after the nav cleanup.
- Review the logo at top-of-page, while scrolling and after returning to the top.
- Confirm the initial page fade feels smooth on first load and page refresh.
- Confirm reduced motion shows the page immediately and keeps the correct logo visible.
- Review About in desktop and mobile viewports in a real browser.
- Review Project Experience and About expansion/collapse in desktop and mobile viewports.
- Confirm the collapsed About preview image path resolves and is easy to replace with a final team photo.
- Check keyboard focus on each team card.
- Check keyboard activation and `aria-expanded` updates on both section toggle buttons.
- Confirm `prefers-reduced-motion` disables reveal transitions cleanly.
- Confirm reveal timing does not feel repetitive or overly delayed.
- Review team photo 2:3 portrait crop, blue hover tint and color recovery with real photos when available.

## Milestone 1: Confirm Contact Conversion Details

Acceptance criteria:

- Real WhatsApp number replaces `[PHONE_NUMBER_TO_CONFIRM]`.
- Real email replaces `[EMAIL_TO_CONFIRM]`.
- Header CTA, Contact quick links, Footer links and form mailto flow all point to real destinations.
- The form has a confirmed delivery path or selected provider.

Validation:

- Click any confirmed direct contact links if they are reintroduced.
- Submit form with valid test data.
- Confirm no placeholder contact strings remain in active UI.

## Milestone 1A: Validate SEO Deployment

Acceptance criteria:

- `https://sdcortesa.github.io/bimservices-website/robots.txt` returns the deployed robots policy.
- `https://sdcortesa.github.io/bimservices-website/sitemap.xml` returns the deployed sitemap.
- Canonical URL, JSON-LD and Open Graph metadata resolve on the deployed page.
- Google Search Console and Bing Webmaster Tools receive the sitemap.

Validation:

- Inspect deployed page source after GitHub Pages deploys.
- Test JSON-LD with a schema validator.
- Confirm no generic LinkedIn URLs or visible development placeholders are published.
- Decide whether `GPTBot` should remain blocked or be allowed later.

## Milestone 2: Live Responsive QA

Acceptance criteria:

- No horizontal overflow at common mobile widths.
- Header mobile menu opens, closes and preserves tap targets.
- Hero text remains legible over the visual.
- Cards stack correctly on mobile and tablet.
- Contact form fields remain comfortable to tap.

Validation:

- Test desktop, tablet and mobile viewport widths in a real browser.
- Review 320px, 375px, 768px, 1024px and 1280px widths.
- Test keyboard focus and Escape behavior in the menu and project overlays.
- Test project carousel movement at desktop, tablet and phone widths.

## Milestone 3: Replace or Approve Visual Placeholders

Acceptance criteria:

- Hero placeholder is replaced with a validated BIM/architectural visual, or explicitly approved as a temporary testing visual.
- Project carousel PNG placeholders are replaced with validated examples or renamed as sample experience.
- Team JPG placeholders are replaced with real `900x1350` portrait photos or approved temporary profile graphics.

Validation:

- Confirm all referenced asset paths exist.
- Confirm image alt text matches the real asset purpose.
- Confirm visual files remain organized under `assets/images/` and favicon/icon files remain organized under `assets/icons/`.

## Milestone 4: Typography and Readability Review

Acceptance criteria:

- Cabinet Grotesk headings feel strong without becoming decorative.
- General Sans body text remains readable at small sizes.
- Navigation, buttons, labels and footer text are not too light.
- No negative heading tracking is reintroduced.

Validation:

- Review rendered Fontshare fonts in browser.
- Check body copy on mobile and desktop.
- Adjust General Sans body weight from 300 to 400 only if live testing shows weak readability.

## Milestone 5: Asset Cleanup

Acceptance criteria:

- Unused project sample SVGs are either removed or intentionally documented as retained samples.
- No broken asset references exist.
- No loose images are added outside `assets/`.

Validation:

- Run a static path check.
- Confirm active assets listed in documentation match current UI references, including Workflow SVGs and the SVG favicon.

## Milestone 6: SEO and Entity Refinement

Acceptance criteria:

- About copy includes confirmed entity information.
- Footer contact and service context are real.
- Project examples do not imply unvalidated work.
- Metadata remains aligned with final messaging.

Validation:

- Confirm one H1.
- Confirm clear H2 and H3 hierarchy.
- Confirm service keywords appear naturally.
- Consider structured data only after business details are confirmed.

## Notes for Future Specs

- Any major change to layout, visual hierarchy or brand tone should arrive as a new spec.
- Contact details and real project evidence are the highest-impact inputs for conversion and entity trust.
- Browser QA should happen before further visual refinements so future changes are based on rendered behavior, not only code inspection.
- Header logo contrast should be reviewed before any further Hero color or overlay adjustments.
- Hero and global motion should be reviewed in a browser before increasing animation complexity.
- Workflow spacing changes should be validated in a live browser before any broader redesign of the framework section.
- About and Project Experience are now interactive enough that future tweaks should be based on live review, not static code assumptions.
