# BIM Services Website Documentation

## Current Project Status

The project is a static single-page website for BIM Services. The current implementation includes the full homepage narrative: Hero, How We Work / Framework, Services, Project Experience, About, Contact and Footer.

The site is functional as a front-end prototype with editable content stored in `js/main.js`, visual tokens centralized in `css/styles.css`, and organized local assets under `assets/`. Contact details, project imagery, team information and final brand assets remain placeholders.

The latest SEO and AI visibility pass added crawlable initial HTML for framework steps, services, representative project examples and team profiles. JavaScript still enhances interactive blocks, but the core commercial content is no longer empty when JavaScript is disabled.

The latest iteration removed the Hero 3D fallback image and refocused the implementation on loading the provisional GLB model directly. The Hero keeps the existing copy and CTAs while adding a right-side 3D canvas on desktop and a stacked 3D canvas on mobile.

## Project Structure

- `index.html` is the main entry file and includes metadata, Fontshare stylesheet loading, stylesheet and script references.
- `css/styles.css` contains the visual system tokens, layout rules, responsive behavior, component styles and motion/focus states.
- `js/main.js` contains editable content data, rendering functions, navigation behavior, project overlay interaction, Hero parallax, global reveal motion and contact-form mailto logic.
- `js/hero-3d.js` contains the lightweight Hero model-viewer status handling and scroll-orbit refinement.
- `assets/logos/bim-services-logo.svg` is the blue/original SVG logo used once the header is scrolled over light backgrounds.
- `assets/logos/bim-services-logo-white-01.svg` is the light SVG logo used over the Hero at the top of the page.
- `assets/icons/services/` contains six replaceable SVG icons used by the service cards.
- `assets/icons/favicon.svg` is the SVG favicon connected from `index.html`.
- `assets/models/hero/main_model.glb` is the active 3D Hero model.
- `assets/models/hero/cabana-tusa.glb` was removed after the active Hero model was updated.
- `assets/images/hero/hero-main-placeholder.svg` is the temporary Hero background placeholder referenced from CSS.
- `assets/images/workflow/` contains five SVG framework step visuals used by the How We Work cards.
- `assets/images/projects/` contains six active PNG project carousel placeholders plus older SVG placeholders retained for now.
- `assets/images/team/team-group-placeholder.jpg` is the temporary group-photo preview for the collapsed About section.
- `assets/images/team/team-member-01-portrait-placeholder.jpg`, `team-member-02-portrait-placeholder.jpg` and `team-member-03-portrait-placeholder.jpg` are the active individual team-photo placeholders.
- `docs/` contains project memory and audit reports.
- `robots.txt`, `sitemap.xml` and `llms.txt` support crawler discovery and AI-reader context for the production domain `https://bimservices.site/`.

## Implemented Sections

- Hero
- How We Work / Framework
- Services
- Projects
- About
- Contact
- Footer

## Tech Stack

- HTML
- CSS
- JavaScript
- No front-end framework
- `@google/model-viewer` loaded from `unpkg.com` for the Hero GLB embed.
- Fontshare stylesheet loaded from `api.fontshare.com`

## Typography

The active type system uses:

- `Cabinet Grotesk 400` and `Cabinet Grotesk 600` for hierarchy, display text and headings.
- `General Sans 300` and `General Sans 400` for body copy, navigation, buttons, forms, labels and functional UI text.

Usage rules:

- Hero H1 and main section headings use `Cabinet Grotesk 600`.
- Hero subheadline and secondary/card headings use `Cabinet Grotesk 400`.
- Body, UI, navigation, buttons, form controls, footer and longer descriptions use `General Sans`.
- Body copy uses `General Sans 300` to keep the text texture lighter and more refined than the previous state.
- UI emphasis uses `General Sans 400` so navigation, buttons, labels and controls keep enough visual strength.
- The audit-era cleanup that removed negative letter spacing from the Hero H1 and section headings remains in place.

## Color System

Primary visual tokens are defined in `css/styles.css`:

- Deep Sapphire: `#002d72`
- Royal Blue Beam: `#1e88e5`
- Royal Blue Strong: `#0f6fc9`
- Neon: `#d8e022`
- Neon Strong: `#c2cb1d`
- Luxe Ivory Mist: `#fff8e1`
- Text primary: `#0b1220`
- Text secondary: `#4b5563`
- Border soft: `#dde3ea`

Color roles:

- Deep Sapphire provides authority, contrast and footer/Hero depth.
- Royal Blue is the primary interaction color.
- Neon is the secondary accent used for strategic highlights, Header CTA, workflow accents and submit emphasis.
- Luxe Ivory Mist provides warm surface contrast.

## Assets

Current active assets:

- Scrolled header logo: `assets/logos/bim-services-logo.svg`
- Top-of-page header logo: `assets/logos/bim-services-logo-white-01.svg`
- Favicon: `assets/icons/favicon.svg`
- Active Hero GLB model: `assets/models/hero/main_model.glb`
- Service icons: `assets/icons/services/*.svg`
- Hero placeholder: `assets/images/hero/hero-main-placeholder.svg`
- Framework visuals: `assets/images/workflow/workflow-step-01-placeholder.svg` through `workflow-step-05-placeholder.svg`
- Project carousel placeholders: six PNG files in `assets/images/projects/`, including `project-residential-bim-support.png`, `project-coordination-package.png`, `project-documentation-set.png`, `project-specialty-bim-modeling.png`, `project-quantity-estimation.png` and `project-4d-construction-planning.png`
- Team group preview: `assets/images/team/team-group-placeholder.jpg`
- Team portrait placeholders:
- `assets/images/team/team-member-01-portrait-placeholder.jpg`
- `assets/images/team/team-member-02-portrait-placeholder.jpg`
- `assets/images/team/team-member-03-portrait-placeholder.jpg`

Temporary or pending assets:

- Hero visual is a placeholder and should be replaced with a real BIM render, model capture, architectural visual or interactive asset.
- `assets/models/hero/main_model.glb` is the active Hero model and should be optimized before the 3D direction is consolidated.
- Project visuals are placeholders and should be replaced when real or validated project examples are available.
- Team photos and LinkedIn URLs are placeholders.
- The final contact-form delivery endpoint is still pending.
- Older project SVG placeholders still exist in `assets/images/projects/` but are not referenced by the current UI.

## Components

- Header: sticky floating header with logo asset, centered navigation, CTA and mobile hamburger menu.
- Header logo system: two stacked SVG assets with opacity swap between top-of-page Hero state and scrolled light-header state.
- Buttons: shared `.button` styles with primary, secondary and form-submit variants.
- Cards: shared radius/shadow/surface language for workflow, service, project and team cards.
- Service cards: rendered from the `services` array in `js/main.js`.
- Service icons: SVG assets referenced from the service data and sized through the existing `.service-icon` frame.
- SEO quick answers: visible answer cards below Services covering what BIM Services does, who it serves, input materials and deliverables.
- Project carousel: rendered from the `projects` array as six image-led cards in a continuous loop, with hover/focus/tap overlay text.
- Expandable section toggles: editorial link-style controls for Project Experience and About, using accessible buttons with `aria-expanded` and `aria-controls`.
- Team cards: rendered from the `teamMembers` array, with 2:3 editorial portrait photos, name, role text and one LinkedIn action button. Descriptions are intentionally not rendered in the current expanded Team layout.
- Forms: simple contact form with labels, required fields and mailto-based behavior once real email is confirmed.
- Footer: entity description, short navigation and contact placeholders.

## Active Interactions

- Mobile menu opens and closes via hamburger button, outside click, Escape key, nav link click and desktop resize.
- Header gains a scrolled state after scroll starts.
- Header logo starts white over the Hero and crossfades to the blue/original logo once the header enters its scrolled light state.
- Hero H1 subtly increases font weight after scroll starts and returns to normal at the top.
- Visible header navigation now includes only How We Work, Services, Projects and About.
- Internal anchor links navigate within the single page.
- The page uses a short initial fade-in on load, disabled when `prefers-reduced-motion` is enabled.
- Hero 3D is loaded as a progressive enhancement through `js/hero-3d.js`.
- The Hero 3D model rotates horizontally with scroll up to approximately 45 degrees.
- The Hero 3D model supports click-and-drag horizontal rotation only; zoom, pan and vertical orbit are not exposed.
- The Hero 3D canvas uses a transparent background and exposes loading/error states through `data-hero3d-status` and `data-hero3d-error`.
- The Hero 3D scroll rotation is disabled when `prefers-reduced-motion` is active.
- Hero background has subtle scroll-linked parallax, disabled when `prefers-reduced-motion` is enabled.
- Global reveal motion uses Intersection Observer for headings, intros, service cards, contact shell and workflow cards, with reduced-motion fallback. Global reveal is fade-only; Workflow can still reveal card-by-card.
- Workflow cards reuse the same reveal system with a slightly stronger reveal distance and stagger.
- Project overlays appear on hover, focus and tap and show only the project name plus the small service label.
- Project Experience starts collapsed and expands in place to show the current carousel.
- About starts with intro plus group preview image, then expands in place to show the individual team cards.
- The About group preview image uses the same black-and-white base and controlled color/Deep Sapphire hover/touch treatment as the individual team photos.
- Team cards no longer use hover-revealed descriptions in the expanded About state; they show identity first with name, role and LinkedIn action.
- Team photos use a black-and-white editorial base treatment, then recover controlled color with a subtle Deep Sapphire tint on hover, focus or touch/active states.
- Contact form validates required fields, includes a basic honeypot and opens a mailto draft after the real email placeholder is replaced.

## Metadata

- Title: `BIM Services | BIM Modeling, Coordination & Documentation for AEC Teams`
- Meta description: `BIM Delivery Intelligence for AEC teams: BIM modeling, 3D coordination, CAD to BIM and construction documentation support from design information to construction-ready deliverables.`
- Canonical: `https://bimservices.site/`
- H1: `BIM Delivery Intelligence`

SEO notes:

- The page uses one H1.
- Section H2s are clear and entity-oriented.
- Service titles are rendered as H3s through JavaScript.
- Framework, Services, Project Experience and Team content also exist in the initial HTML for crawler and no-JavaScript readability.
- About and footer copy define BIM Services as an AEC BIM support studio.
- `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and Perplexity-User. `GPTBot` is blocked until the owner decides whether to allow training crawls.
- `sitemap.xml` includes the canonical homepage URL.
- JSON-LD `Organization` schema is present in `index.html` and uses only visible confirmed information.
- The site is readable for search and AI answer engines, but richer real project evidence and confirmed contact/entity details are still needed.

## Current Design Decisions

- Single-page structure with anchor navigation only.
- Content is centralized in JavaScript objects to make future copy and service edits easier.
- Visual system is mostly light with strategic Deep Sapphire contrast areas.
- Radius system currently follows a soft technical direction: not fully square and not overly pill-shaped.
- Neon is the active secondary accent replacing the previous Golden Pulse direction.
- Cabinet Grotesk + General Sans is the active typography pairing.
- Motion is lightweight and controlled through CSS transitions, scroll listeners and Intersection Observer instead of a motion library.
- Header branding now uses a light-over-dark to blue-over-light swap rather than one fixed logo color.
- Header navigation intentionally omits Home and Contact because those actions are already handled by the logo and header CTA.
- Active CSS placeholder treatments now favor flat branded surfaces instead of visible grid textures.
- Service card icons are real SVG files so they can be replaced independently later without changing card layout.
- Project Experience and About now use in-place expandable regions instead of showing all secondary content immediately.
- Project Experience uses a continuous carousel: three cards visible on desktop, two on tablet and one on phone.
- About follows an identity-first card pattern: vertical photo, name, role and LinkedIn action.
- Workflow cards now treat number + title as one horizontal heading unit instead of separating the number into a badge.
- The 3D Hero is treated as decorative progressive enhancement: the H1, supporting copy and CTAs remain the primary Hero content and continue to work without the model.
- The 3D implementation now uses `<model-viewer>` because the same GLB worked with that approach in a previous project and it reduces custom Three.js loader risk.
- The Hero model-viewer uses automatic model centering and a test camera radius of `65%`. Vertical orbit stays locked so interaction remains horizontal and presentation-safe.
- On mobile, the 3D region sits above the Hero legibility overlay so its colors remain consistent with desktop, and the Header receives its own Deep Sapphire surface instead of overlapping Hero copy.

## Known Issues

- Real WhatsApp number and email are not confirmed; active contact links still point to placeholders.
- Contact form is front-end/mailto only and does not submit to a backend.
- Contact form does not send externally until a confirmed email or provider is configured.
- LinkedIn profile URLs are not confirmed, so generic LinkedIn links are hidden instead of published.
- Project and team content are not validated real examples.
- Some older project sample SVGs remain unused in the assets folder.
- JavaScript rendering uses `innerHTML` from local constants; safe in the current static context, but should be reconsidered if content becomes externally managed.
- Hero parallax should be tested on physical mobile devices.
- Workflow heading alignment should be checked in a real browser to confirm the new number + title unit stays balanced on desktop and mobile.
- The Hero title weight interaction should be checked in a live browser for subtlety and layout stability.
- The model-viewer Hero should be tested on `https://bimservices.site/` because it depends on the web component script and GLB asset loading.
- Opening `index.html` directly from the filesystem can block GLB loading in some browsers; use the Hostinger deployment or a local HTTP server for 3D testing.
- The fallback PNG was removed from the active Hero flow so model loading issues are not hidden by placeholder art.
- The active `main_model.glb` is approximately 12 MB and has not been web-optimized inside this iteration.
- The 3D Hero should be tested on physical mobile devices for performance, interaction comfort and fallback behavior.
- New service SVG icons should be visually reviewed against the final service-card rhythm.
- The new logo swap should be visually checked in a live browser to confirm contrast and opacity timing at the scroll threshold.
- The initial page fade should be checked against the live Hostinger deployment load behavior to confirm it does not feel too subtle or too slow.
- Project Experience and About toggles should be tested in a live browser to confirm the expand/collapse rhythm and transition height behavior.
- About hover/focus behavior should be visually reviewed in a real browser to confirm reveal height, spacing and rhythm on large screens.
- The collapsed About state still uses a temporary group-photo placeholder instead of a real team image.
- Team photo color treatment should be rebalanced when real headshots replace the current JPG placeholders.
- Live browser review was not completed in this audit because available local runtime/browser commands were not usable in the current environment.

## Pending Recommendations

- Confirm real WhatsApp number and email.
- Replace Hero, project and team placeholders with validated assets. Team member photos should be uploaded as `900x1350` JPG files to match the current 2:3 portrait frame.
- Replace the provisional Hero GLB with the final optimized model.
- Validate model-viewer loading, camera controls and scroll orbit on `https://bimservices.site/`.
- Optimize/compress the final GLB before considering the 3D Hero direction consolidated.
- Replace the About group-photo placeholder with a real team photo when available.
- Each team member already has an individual JPG placeholder ready for direct replacement.
- Decide whether unused legacy project sample placeholders should be deleted or archived.
- Review the lighter General Sans body weight on mobile and lower-density displays.
- Validate Hero parallax and project overlay behavior in a real browser.
- Validate workflow card balance, especially steps with longer titles on tablet and mobile widths.
- Validate the fade-only reveal timing across the page.
- Validate the new service icon assets at desktop and mobile sizes.
- Validate the white-to-blue logo swap across desktop, mobile and anchor navigation states.
- Validate the initial page fade on live hosting and under slower network conditions.
- Validate the Project Experience and About expandable interactions in desktop and mobile browsers.
- Validate About card reveal behavior in desktop and touch contexts.
- Validate the team photo overlay intensity with real skin tones and real photography.
- Consider a backend or form service once contact workflow is defined.
- Add structured data only after entity details are confirmed.

## Last Audit Summary

The latest audit and follow-up iterations reviewed structure, HTML, CSS, JavaScript, assets, responsive behavior, SEO basics, accessibility basics and documentation. The most recent pass replaced the custom Three.js Hero implementation with a `<model-viewer>` embed, removed fallback art and preserved Hero copy, CTAs and page structure.

The Contact section now prioritizes the conversation form and no longer shows the temporary WhatsApp or direct-email cards. Its `Start a Conversation` heading uses a scroll-linked weight emphasis as it approaches the viewport center, with reduced-motion users receiving the static heading state.
