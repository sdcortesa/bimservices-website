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

Still in testing:

- Hero placeholder and parallax intensity.
- Project overlay behavior on touch devices.
- General Sans 300 body weight on small screens.
- Neon accent strength in real browser context.
- About card reveal rhythm on desktop and mobile.
- Global reveal timing and repetition across the full page.
- Team photo blue-treatment intensity with real photography.
- Contact flow because WhatsApp and email are placeholders.

Do not touch yet:

- Major layout structure.
- Brand identity direction.
- Final visual redesign.
- New sections or internal pages.
- Booking integration.
- Backend form handling.
- Structured data, until business/entity details are confirmed.

## Milestone 0: Motion and About QA

Acceptance criteria:

- About cards feel identity-first on desktop.
- Role and description reveal smoothly on hover and keyboard focus.
- Mobile keeps About details visible without hidden hover-only content.
- Global reveal motion feels consistent and understated across headings, intros and cards.
- Team photos keep a strong branded base state without becoming too dark or too artificial.

Validation:

- Review About in desktop and mobile viewports in a real browser.
- Check keyboard focus on each team card.
- Confirm `prefers-reduced-motion` disables reveal transitions cleanly.
- Confirm reveal timing does not feel repetitive or overly delayed.
- Review team photo overlay and hover recovery with real photos when available.

## Milestone 1: Confirm Contact Conversion Details

Acceptance criteria:

- Real WhatsApp number replaces `[PHONE_NUMBER_TO_CONFIRM]`.
- Real email replaces `[EMAIL_TO_CONFIRM]`.
- Header CTA, Contact quick links, Footer links and form mailto flow all point to real destinations.
- Placeholder warning in the form is no longer triggered when required fields are valid.

Validation:

- Click WhatsApp link.
- Click email link.
- Submit form with valid test data.
- Confirm no placeholder contact strings remain in active UI.

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

## Milestone 3: Replace or Approve Visual Placeholders

Acceptance criteria:

- Hero placeholder is replaced with a validated BIM/architectural visual, or explicitly approved as a temporary testing visual.
- Project placeholders are replaced with validated examples or renamed as sample experience.
- Team JPG placeholders are replaced with real photos or approved temporary profile graphics.

Validation:

- Confirm all referenced asset paths exist.
- Confirm image alt text matches the real asset purpose.
- Confirm visual files remain organized under `assets/images/`.

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
- Confirm active assets listed in documentation match current UI references.

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
- About and global reveal motion are now interactive enough that future tweaks should be based on live review, not static code assumptions.
