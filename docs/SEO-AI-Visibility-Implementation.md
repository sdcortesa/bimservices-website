# SEO + AI Search Visibility Implementation

## Initial Status

- The project is a static single-page website deployed from `main` through Hostinger Git deployment.
- Active remote: `https://github.com/sdcortesa/bimservices-website.git`.
- Production URL used for canonical and sitemap: `https://bimservices.site/`.
- Before this implementation, several core commercial sections were rendered into empty containers by JavaScript.
- Hero, About, Contact and Footer had visible HTML content in the initial document.
- Framework steps, service cards, project cards and team cards needed crawlable fallback HTML.
- Contact email, phone number, real LinkedIn URLs and validated project case studies are not confirmed.

## Problems Found

- Core service and framework content was not fully available in initial HTML without JavaScript.
- `index.html` did not include canonical, Open Graph, Twitter Card or JSON-LD structured data.
- `robots.txt` and `sitemap.xml` were missing.
- Root-level crawler files were not previously aligned with the final production domain.
- The form showed an internal development message when email was not configured.
- Team LinkedIn links used generic `https://www.linkedin.com/` URLs.
- Some active alt text and visible Hero text still used placeholder language.
- The 3D Hero model was configured as eager loading.

## Files Modified

- `index.html`
- `css/styles.css`
- `js/main.js`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `docs/Documentation.md`
- `docs/Implementation-Report.md`
- `docs/Plan.md`
- `docs/SEO-AI-Visibility-Implementation.md`

## Changes Implemented

- Added canonical, robots meta, Open Graph and Twitter Card metadata.
- Added JSON-LD `Organization` schema using only visible and confirmed information.
- Added initial HTML content for:
- BIM Delivery Intelligence Framework steps.
- Six commercial services.
- Six project-experience representative examples.
- Three team profiles.
- Added a visible quick-answer block for conversational search intent.
- Added no-JavaScript CSS fallbacks so expandable Projects and Team content remains visible without JavaScript.
- Removed generic LinkedIn URLs from active Team data and rendering.
- Changed active image alt text to avoid visible placeholder wording.
- Replaced visible Hero placeholder copy with `BIM model visualization`.
- Added a contact-form honeypot field.
- Replaced the email-placeholder development warning with a safer user-facing fallback message.
- Added a short privacy note below the contact submit button.
- Changed the Hero model-viewer loading mode from `eager` to `lazy`.
- Created `robots.txt`, `sitemap.xml` and experimental `llms.txt`.
- Confirmed crawler files live at repository root so Hostinger Git deployment can publish them with the site.
- Removed the old GitHub deployment workflow because Hostinger is now the active deployment target.

## Justification

- Crawlable initial HTML improves traditional SEO and AI answer-engine extraction.
- Canonical and sitemap clarify `https://bimservices.site/` as the production URL.
- JSON-LD helps entity understanding without inventing unconfirmed data.
- Removing generic LinkedIn URLs avoids publishing false or low-trust social signals.
- The form fallback avoids exposing implementation details while making clear that email still needs configuration.
- `llms.txt` is secondary and experimental; it does not replace HTML, metadata, robots or sitemap.

## Final Metadata

- Title: `BIM Services | BIM Modeling, Coordination & Documentation for AEC Teams`
- Meta description: `BIM Delivery Intelligence for AEC teams: BIM modeling, 3D coordination, CAD to BIM and construction documentation support from design information to construction-ready deliverables.`
- Canonical: `https://bimservices.site/`
- Robots meta: `index, follow`
- Open Graph type: `website`
- Twitter Card: `summary`

## Schema Added

- Type: `Organization`
- Name: `BIM Services`
- URL: `https://bimservices.site/`
- Logo: `https://bimservices.site/assets/logos/bim-services-logo.svg`
- Description: visible Footer entity description.
- Area served: `International`, based on the visible Footer note.

No email, phone, social profiles, founders, address, founding date or certifications were added because those details are not confirmed.

## Robots Policy

- `Googlebot`: allowed.
- `Bingbot`: allowed.
- `OAI-SearchBot`: allowed for AI search retrieval.
- `PerplexityBot`: allowed.
- `Perplexity-User`: allowed.
- `GPTBot`: blocked for training crawls until the owner decides otherwise.
- All other crawlers: allowed.
- CSS, JavaScript, images, GLB files and assets are not blocked.

## Sitemap URLs

- `https://bimservices.site/`

## Content Changes

- Added concise, visible answers for:
- What BIM Services does.
- Who BIM Services is for.
- What clients can provide.
- What deliverables clients can receive.
- Existing service and framework copy was preserved.
- No clients, metrics, certifications, addresses, phone numbers, emails or case-study results were invented.

## Tests Executed

- `node --check js/main.js`
- `node --check js/hero-3d.js`
- `git diff --check`
- Static checks for canonical, robots, sitemap, JSON-LD and active placeholder strings.
- Local HTTP checks for `index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`.

## Results

- JavaScript syntax checks passed.
- Whitespace diff check passed with only normal Windows line-ending warnings.
- Core commercial content now exists in `index.html`.
- No confirmed email or social profile was invented.
- Root-level crawler files are available at repository root for Hostinger Git deployment.

## Limitations

- Lighthouse/Core Web Vitals were not measured in this environment.
- Visual browser QA with JavaScript disabled was assessed through static HTML/CSS inspection, not a full browser rendering audit.
- The active GLB is still large and should be optimized before final launch.
- `https://bimservices.site/` is now the canonical production domain.

## Information Needed From Owner

- Final contact email.
- Optional phone or WhatsApp number.
- Real LinkedIn profile URLs, or confirmation to keep social links hidden.
- Final project examples or confirmation that current project items are representative examples.
- Final Hero visual/model optimization direction.
- Privacy/legal copy requirements.
- Decision on whether to allow `GPTBot`.

## Pending Tasks

- Add real email and connect the contact form to a confirmed delivery path.
- Replace representative project visuals/content with validated public project examples if available.
- Optimize/compress `assets/models/hero/main_model.glb`.
- Verify Hostinger auto deployment after each push to `main`.
- Submit the sitemap in Google Search Console and Bing Webmaster Tools.
- Validate rich result / schema parsing with Google Rich Results Test or Schema Markup Validator.

## Search Console Recommendations

- Add the `bimservices.site` domain property.
- Submit `https://bimservices.site/sitemap.xml`.
- Inspect the canonical homepage URL after deployment.
- Monitor indexing status, crawl errors and rendered HTML.

## Future Hosting Recommendations

- Keep canonical, sitemap, JSON-LD URL and Open Graph URL aligned with `https://bimservices.site/`.
- Re-submit sitemap if the domain, URL structure or hosting destination changes.
- Keep GitHub as the source repository and Hostinger as the deployment destination unless a new hosting strategy is selected.
