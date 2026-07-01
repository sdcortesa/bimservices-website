const brandName = "BIM Services";

// SEO metadata is provisional and should remain easy to update.
const seoMetadata = {
  title: "BIM Services | BIM Modeling, Coordination & Documentation for AEC Teams",
  description:
    "BIM Delivery Intelligence for AEC teams: BIM modeling, 3D coordination, CAD to BIM and construction documentation support from design information to construction-ready deliverables.",
};

const assetVersion = "20260701-projects-refresh";

// Content system: keep hero, framework, services and SEO metadata editable.
const navItems = [
  { label: "How We Work", href: "#how-we-work" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

const footerNavItems = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
];

const headerContent = {
  ctaLabel: "Let's talk",
  ctaHref: "#contact",
};

// Hero copy: keep H1, subheadline, supporting copy and CTAs editable here.
const heroContent = {
  eyebrow: "For architecture, engineering and construction teams",
  h1: "BIM Delivery Intelligence",
  subheadline: "From BIM models to construction-ready project delivery.",
  supportingCopy: [
    "We help architecture, engineering and construction teams transform project information into coordinated models, technical documentation and deliverables ready for construction.",
    "You don't need to have the full scope defined to start working with us.",
  ],
  primaryCta: {
    label: "Tell us about your project",
    href: "#contact",
  },
  secondaryCta: {
    label: "See how we work",
    href: "#how-we-work",
  },
  visualTagText: "BIM model visualization",
};

const frameworkContent = {
  kicker: "How We Work",
  title: "The BIM Delivery Intelligence Framework",
  intro:
    "A structured method to turn incomplete or uncoordinated project information into construction-ready deliverables.",
};

// BDI Framework steps: these are internal method steps, not homepage sections.
// Workflow visual assets live in ./assets/images/workflow/
const frameworkSteps = [
  {
    number: "01",
    title: "Model",
    description:
      "Create or receive the BIM model from design or existing documentation.",
    image: "./assets/images/workflow/workflow-step-01-placeholder.svg",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Organize information, parameters, views, families, naming conventions and project standards.",
    image: "./assets/images/workflow/workflow-step-02-placeholder.svg",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "Detect clashes, inconsistencies and technical conflicts across disciplines.",
    image: "./assets/images/workflow/workflow-step-03-placeholder.svg",
  },
  {
    number: "04",
    title: "Quantify",
    description:
      "Extract quantities, cost data and decision-ready project information.",
    image: "./assets/images/workflow/workflow-step-04-placeholder.svg",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Issue coordinated models, documentation, reports, and deliverables.",
    image: "./assets/images/workflow/workflow-step-05-placeholder.svg",
  },
];

const servicesContent = {
  kicker: "Services",
  title: "BIM Services Across the Framework",
  intro:
    "BIM Services adapts to your project stage, team structure and level of information available. Each service can support a specific need or work as part of the BIM Delivery Intelligence Framework.",
};

// Services: commercial service cards, separate from BDI Framework steps.
// Service icons: SVG assets are placeholders and can be replaced later without changing card layout.
const services = [
  {
    title: "CAD to BIM",
    description:
      "Convert existing CAD files, PDFs or drawings into structured BIM models ready for coordination and development.",
    icon: "./assets/icons/services/cad-to-bim-icon.svg",
    frameworkRelation: ["Model", "Structure"],
  },
  {
    title: "Specialty BIM Modeling",
    description:
      "Create detailed BIM models for architecture, structure and MEP systems with clear technical organization.",
    icon: "./assets/icons/services/specialty-bim-modeling-icon.svg",
    frameworkRelation: ["Model", "Structure"],
  },
  {
    title: "3D Coordination",
    description:
      "Identify and resolve clashes between disciplines before construction to reduce rework and coordination issues.",
    icon: "./assets/icons/services/coordination-3d-icon.svg",
    frameworkRelation: ["Coordinate"],
  },
  {
    title: "Construction Documentation",
    description:
      "Produce drawings, specifications and technical documentation ready for permits, coordination and construction.",
    icon: "./assets/icons/services/construction-documentation-icon.svg",
    frameworkRelation: ["Deliver"],
  },
  {
    title: "Cost & Quantity Estimation",
    description:
      "Extract quantities, material takeoffs and cost-related project information directly from BIM models.",
    icon: "./assets/icons/services/cost-quantity-estimation-icon.svg",
    frameworkRelation: ["Quantify"],
  },
  {
    title: "4D Construction Planning",
    description:
      "Support sequencing and timeline planning through 4D simulation based on model and construction data.",
    icon: "./assets/icons/services/construction-planning-4d-icon.svg",
    frameworkRelation: ["Quantify", "Deliver"],
  },
];

const projectExperienceContent = {
  kicker: "Project Experience",
  title: "Selected Project Experience",
  intro:
    "BDI Framework applied to project examples across architecture, infrastructure and construction.",
};

// Project Experience placeholders: replace with real project content when validated.
// TEMP assets live in ./assets/images/projects/
const projects = [
  {
    title: "Residential BIM Support",
    type: "Residential",
    servicesApplied: "CAD to BIM + Specialty BIM Modeling",
    image: `./assets/images/projects/project-residential-bim-support.png?v=${assetVersion}`,
    alt: "Representative visual for Residential BIM Support",
  },
  {
    title: "Coordination Package",
    type: "AEC Coordination",
    servicesApplied: "3D Coordination + Clash Review",
    image: `./assets/images/projects/project-coordination-package.png?v=${assetVersion}`,
    alt: "Representative visual for Coordination Package",
  },
  {
    title: "Documentation Set",
    type: "Technical Documentation",
    servicesApplied: "Construction Documentation",
    image: `./assets/images/projects/project-documentation-set.png?v=${assetVersion}`,
    alt: "Representative visual for Documentation Set",
  },
  {
    title: "Specialty BIM Modeling",
    type: "BIM Modeling",
    servicesApplied: "Specialty BIM Modeling",
    image: `./assets/images/projects/project-specialty-bim-modeling.png?v=${assetVersion}`,
    alt: "Representative visual for Specialty BIM Modeling",
  },
  {
    title: "Quantity Estimation",
    type: "Cost & Quantity",
    servicesApplied: "Quantity Takeoff + Cost Data",
    image: `./assets/images/projects/project-quantity-estimation.png?v=${assetVersion}`,
    alt: "Representative visual for Quantity Estimation",
  },
  {
    title: "4D Construction Planning",
    type: "Planning",
    servicesApplied: "4D Construction Planning",
    image: `./assets/images/projects/project-4d-construction-planning.png?v=${assetVersion}`,
    alt: "Representative visual for 4D Construction Planning",
  },
];

const aboutContent = {
  kicker: "Team",
  title: "Team",
};

// Team data: expanded About cards intentionally show only name, role and LinkedIn.
// TEMP JPG assets live in ./assets/images/team/
const teamMembers = [
  {
    name: "Sergio Cortes",
    role: "BIM Delivery Lead",
    initials: "SC",
    image: "./assets/images/team/team-member-01-portrait-placeholder.jpg",
    alt: "Portrait of Sergio Cortes",
    linkedinUrl: "",
  },
  {
    name: "Tatiana Hernandez",
    role: "Operations & Documentation Lead",
    initials: "TH",
    image: "./assets/images/team/team-member-02-portrait-placeholder.jpg",
    alt: "Portrait of Tatiana Hernandez",
    linkedinUrl: "",
  },
  {
    name: "Camilo Ramirez",
    role: "BIM Production Lead",
    initials: "CR",
    image: "./assets/images/team/team-member-03-portrait-placeholder.jpg",
    alt: "Portrait of Camilo Ramirez",
    linkedinUrl: "",
  },
];

const contactContent = {
  kicker: "Contact",
  title: "Start a Conversation",
  intro:
    "You don't need to have everything defined before reaching out. Tell us about your project and we'll help you identify the right support.",
  submitLabel: "Send message",
  messagePlaceholder: "Tell us about your project, timeline or support needs.",
};

const footerContent = {
  entityDescription:
    "BIM Services provides BIM modeling, 3D coordination, construction documentation and technical support for architecture, engineering and construction teams.",
  locationNote: "Serving international AEC teams.",
};

// Contact data: replace the email when confirmed to activate form submission.
const contactInfo = {
  emailAddress: "[EMAIL_TO_CONFIRM]",
};

// Motion settings: keep animations controlled and easy to disable or adjust.
const motionSettings = {
  heroParallaxStrength: 0.08,
  revealDuration: 620,
  revealThreshold: 0.18,
  revealRootMargin: "0px 0px -8% 0px",
  aboutCardsDelay: 40,
  workflowRevealDistance: 24,
  workflowRevealDuration: 500,
  workflowStaggerDelay: 120,
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setTextContent(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function bindSeoMetadata() {
  document.title = seoMetadata.title;

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", seoMetadata.description);
  }
}

function renderNavigation() {
  const primaryNav = document.querySelector('[data-nav="primary"]');
  const footerNav = document.querySelector('[data-nav="footer"]');

  if (primaryNav) {
    primaryNav.innerHTML = navItems
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
  }

  if (footerNav) {
    footerNav.innerHTML = footerNavItems
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
  }
}

function bindHeaderContent() {
  const headerCta = document.querySelector("#header-contact-cta");
  if (!headerCta) return;

  headerCta.textContent = headerContent.ctaLabel;
  headerCta.setAttribute("href", headerContent.ctaHref);
}

function bindHeroContent() {
  document.querySelectorAll("[data-brand]").forEach((element) => {
    element.textContent = brandName;
  });

  setTextContent("#hero-eyebrow", heroContent.eyebrow);
  setTextContent("#hero-headline", heroContent.h1);
  setTextContent("#hero-subtitle", heroContent.subheadline);
  setTextContent("#hero-supporting", heroContent.supportingCopy[0]);
  setTextContent("#hero-microcopy", heroContent.supportingCopy[1]);
  setTextContent("#hero-visual-tag-text", heroContent.visualTagText);

  const primaryCta = document.querySelector("#hero-primary-cta");
  const secondaryCta = document.querySelector("#hero-secondary-cta");

  if (primaryCta) {
    primaryCta.textContent = heroContent.primaryCta.label;
    primaryCta.setAttribute("href", heroContent.primaryCta.href);
  }

  if (secondaryCta) {
    secondaryCta.textContent = heroContent.secondaryCta.label;
    secondaryCta.setAttribute("href", heroContent.secondaryCta.href);
  }
}

function bindFrameworkContent() {
  setTextContent("#framework-kicker", frameworkContent.kicker);
  setTextContent("#how-we-work-title", frameworkContent.title);
  setTextContent("#framework-intro", frameworkContent.intro);
}

function renderFramework() {
  const frameworkGrid = document.querySelector("#framework-grid");
  if (!frameworkGrid) return;

  frameworkGrid.innerHTML = frameworkSteps
    .map(
      (step, index) => `
        <article
          class="workflow-card"
          data-workflow-card
          style="
            --reveal-delay: ${index * motionSettings.workflowStaggerDelay}ms;
            --reveal-duration: ${motionSettings.workflowRevealDuration}ms;
            --reveal-distance: ${motionSettings.workflowRevealDistance}px;
          "
        >
          <!-- Workflow visual placeholder. Replace with final visual asset when available. -->
          <div class="workflow-card-visual" aria-hidden="true">
            <img src="${step.image}" alt="" loading="lazy" />
          </div>
          <div class="workflow-step-heading">
            <span class="workflow-number">${step.number}</span>
            <h3 class="workflow-step-title">${step.title}</h3>
          </div>
          <p>${step.description}</p>
        </article>
      `,
    )
    .join("");
}

function bindServicesContent() {
  setTextContent("#services-kicker", servicesContent.kicker);
  setTextContent("#services-title", servicesContent.title);
  setTextContent("#services-intro", servicesContent.intro);
}

function renderServices() {
  const servicesGrid = document.querySelector("#services-grid");
  if (!servicesGrid) return;

  servicesGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card reveal">
          <div class="service-card-heading">
            <div class="service-icon" aria-hidden="true">
              <img src="${service.icon}" alt="" loading="lazy" />
            </div>
            <h3>${service.title}</h3>
          </div>
          <p>${service.description}</p>
        </article>
      `,
    )
    .join("");
}

function bindProjectExperienceContent() {
  setTextContent("#projects-kicker", projectExperienceContent.kicker);
  setTextContent("#projects-title", projectExperienceContent.title);
  setTextContent("#projects-intro", projectExperienceContent.intro);
}

function createProjectMedia(project) {
  if (project.image) {
    return `
      <img src="${project.image}" alt="${project.alt}" class="project-image" loading="lazy" decoding="async" />
    `;
  }

  return `
    <div class="project-placeholder" aria-label="${project.alt}">
      <span>Project image</span>
    </div>
  `;
}

function renderProjects() {
  const projectsGrid = document.querySelector("#projects-grid");
  if (!projectsGrid) return;

  function renderProjectSet(isDuplicate = false) {
    return projects
      .map(
        (project, index) => `
          <article class="project-card">
            <button
              class="project-media"
              type="button"
              aria-expanded="false"
              aria-label="Show details for ${project.title}"
              data-project-trigger="${index}"
              ${isDuplicate ? 'tabindex="-1"' : ""}
            >
              ${createProjectMedia(project)}
              <div class="project-overlay">
                <h3>${project.title}</h3>
                <p class="project-services">${project.servicesApplied}</p>
              </div>
            </button>
          </article>
        `,
      )
      .join("");
  }

  projectsGrid.innerHTML = `
    <div class="projects-carousel" aria-label="Project experience carousel">
      <div class="projects-carousel-viewport">
        <div class="projects-carousel-track">
          <div class="projects-carousel-set">${renderProjectSet()}</div>
          <div class="projects-carousel-set" aria-hidden="true">${renderProjectSet(true)}</div>
        </div>
      </div>
    </div>
  `;
}

function bindAboutContent() {
  setTextContent("#about-kicker", aboutContent.kicker);
  setTextContent("#about-title", aboutContent.title);
}

function createTeamMedia(member) {
  if (member.image) {
    return `
      <div class="team-photo">
        <img class="team-image" src="${member.image}" alt="${member.alt}" />
      </div>
    `;
  }

  return `
    <div class="team-photo">
      <div class="team-placeholder" aria-label="${member.alt}">${member.initials}</div>
    </div>
  `;
}

function renderTeam() {
  const teamGrid = document.querySelector("#team-grid");
  if (!teamGrid) return;

  teamGrid.innerHTML = teamMembers
    .map((member) => {
      const linkedInLink = member.linkedinUrl
        ? `
              <a
                class="team-linkedin"
                href="${member.linkedinUrl}"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile for ${member.name}"
              >
                <span aria-hidden="true">in</span>
              </a>
        `
        : "";

      return `
        <article
          class="team-card"
          tabindex="0"
        >
          ${createTeamMedia(member)}
          <div class="team-card-body">
            <div class="team-member-meta">
              <div>
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
              </div>
              ${linkedInLink}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function bindContactContent() {
  setTextContent("#contact-kicker", contactContent.kicker);
  setTextContent("#contact-title", contactContent.title);
  setTextContent("#contact-intro", contactContent.intro);

  const submitButton = document.querySelector("#contact-submit");
  if (submitButton) {
    submitButton.textContent = contactContent.submitLabel;
  }

  const messageField = document.querySelector("#message");
  if (messageField) {
    messageField.setAttribute("placeholder", contactContent.messagePlaceholder);
  }
}

function bindFooterContent() {
  setTextContent("#footer-entity-description", footerContent.entityDescription);
  setTextContent("#footer-location-note", footerContent.locationNote);
}

function bindContactInfo() {
  setTextContent("#footer-year", new Date().getFullYear().toString());
}

function setupContactTitleScrollWeight() {
  const contactTitle = document.querySelector("#contact-title");
  if (!contactTitle || prefersReducedMotion.matches) return;

  let isTicking = false;

  // Contact title scroll interaction: increase weight near the viewport center in either direction.
  function updateContactTitleWeight() {
    const rect = contactTitle.getBoundingClientRect();
    const titleCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const emphasisRange = window.innerHeight * 0.34;
    const isEmphasized = Math.abs(titleCenter - viewportCenter) < emphasisRange;

    contactTitle.classList.toggle("is-scroll-emphasized", isEmphasized);
    isTicking = false;
  }

  function onScroll() {
    if (isTicking) return;
    isTicking = true;
    window.requestAnimationFrame(updateContactTitleWeight);
  }

  updateContactTitleWeight();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const headerCta = document.querySelector("#header-contact-cta");
  const heroTitle = document.querySelector("#hero-headline");

  if (!header || !toggle) return;

  function closeMenu() {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  // Header scroll behavior: adjust background, blur, border or shadow here.
  function updateHeaderScrollState() {
    const isScrolled = window.scrollY > 12;
    header.classList.toggle("is-scrolled", isScrolled);

    // Hero title scroll interaction: subtly increase font weight when the user starts scrolling.
    if (!prefersReducedMotion.matches) {
      heroTitle?.classList.toggle("hero-title--scrolled", isScrolled);
    }
  }

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  if (headerCta) {
    headerCta.addEventListener("click", () => {
      closeMenu();
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (!target.closest(".site-header")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });

  updateHeaderScrollState();
  window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
}

function setupInitialPageFade() {
  const body = document.body;
  if (!body) return;

  // Reduced motion: show the page immediately instead of animating the initial load.
  if (prefersReducedMotion.matches) {
    body.classList.remove("is-loading");
    body.classList.add("is-loaded");
    return;
  }

  function markPageLoaded() {
    body.classList.remove("is-loading");
    body.classList.add("is-loaded");
  }

  if (document.readyState === "complete") {
    window.requestAnimationFrame(markPageLoaded);
    return;
  }

  window.addEventListener("load", markPageLoaded, { once: true });
}

function setupProjectOverlays() {
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const triggers = Array.from(document.querySelectorAll("[data-project-trigger]"));

  if (!cards.length || !triggers.length) return;

  function closeAll() {
    cards.forEach((card) => card.classList.remove("is-active"));
    triggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const card = trigger.closest(".project-card");
      if (!card) return;

      const shouldOpen = !card.classList.contains("is-active");
      closeAll();

      if (shouldOpen) {
        card.classList.add("is-active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (!target.closest(".project-card")) {
      closeAll();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
}

function setupHeroParallax() {
  const heroVisualLayer = document.querySelector("[data-hero-parallax]");
  if (!heroVisualLayer) return;

  if (prefersReducedMotion.matches) {
    heroVisualLayer.style.transform = "";
    return;
  }

  let isTicking = false;

  // Hero parallax: keep subtle. Disable or reduce here if performance or clarity is affected.
  function updateParallax() {
    const offset = Math.max(window.scrollY, 0) * motionSettings.heroParallaxStrength;
    heroVisualLayer.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
    isTicking = false;
  }

  function onScroll() {
    if (isTicking) return;

    isTicking = true;
    window.requestAnimationFrame(updateParallax);
  }

  updateParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupRevealMotion() {
  const revealTargets = Array.from(document.querySelectorAll(".reveal, [data-workflow-card]"));

  if (!revealTargets.length) return;

  // Reduced motion: reveal animations are disabled or simplified when prefers-reduced-motion is active.
  if (prefersReducedMotion.matches) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("motion-safe");

  // Global reveal motion: reusable scroll reveal for sections, headings, grids and cards.
  // Intersection Observer: triggers reveal motion when elements enter the viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target;

        target.classList.add("is-visible");
        observer.unobserve(target);
      });
    },
    {
      threshold: motionSettings.revealThreshold,
      rootMargin: motionSettings.revealRootMargin,
    },
  );

  revealTargets.forEach((target) => {
    observer.observe(target);
  });
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (!form || !formStatus) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.classList.remove("is-warning", "is-error");

    if (!form.reportValidity()) {
      formStatus.textContent = "Please complete the required fields before sending your message.";
      formStatus.classList.add("is-error");
      return;
    }

    const formData = new FormData(form);
    const websiteField = String(formData.get("website") || "").trim();

    if (websiteField) {
      form.reset();
      formStatus.textContent = "Thank you. Your message has been received for review.";
      return;
    }

    const hasConfirmedEmail = !contactInfo.emailAddress.includes("[");

    if (!hasConfirmedEmail) {
      formStatus.textContent =
        "Your message is ready, but the contact email destination has not been connected yet. Please copy your message and send it through the confirmed contact channel when available.";
      formStatus.classList.add("is-warning");
      return;
    }

    const subject = `BIM Services inquiry from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Company / Project: ${formData.get("companyProject") || "-"}`,
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");

    const mailtoUrl = `mailto:${contactInfo.emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    formStatus.textContent = "Your email draft is opening in your default mail client.";
    formStatus.classList.remove("is-warning");
  });
}

bindSeoMetadata();
renderNavigation();
bindHeaderContent();
bindHeroContent();
bindFrameworkContent();
renderFramework();
bindServicesContent();
renderServices();
bindProjectExperienceContent();
renderProjects();
bindAboutContent();
renderTeam();
bindContactContent();
bindFooterContent();
bindContactInfo();
setupNavigation();
setupInitialPageFade();
setupHeroParallax();
setupRevealMotion();
setupProjectOverlays();
setupContactForm();
setupContactTitleScrollWeight();
