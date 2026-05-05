const brandName = "BIM Services";

// SEO metadata is provisional and should remain easy to update.
const seoMetadata = {
  title: "BIM Services | BIM Modeling, Coordination & Documentation for AEC Teams",
  description:
    "BIM Delivery Intelligence for AEC teams: BIM modeling, 3D coordination, CAD to BIM and construction documentation support from design information to construction-ready deliverables.",
};

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
  visualTagText: "Visual area - to be replaced",
};

const frameworkContent = {
  kicker: "How We Work",
  title: "The BIM Delivery Intelligence Framework",
  intro:
    "A structured method to turn incomplete or uncoordinated project information into construction-ready deliverables.",
};

// BDI Framework steps: these are internal method steps, not homepage sections.
// Workflow visual placeholder assets live in ./assets/images/workflow/
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
const services = [
  {
    title: "CAD to BIM",
    description:
      "Convert existing CAD files, PDFs or drawings into structured BIM models ready for coordination and development.",
    frameworkRelation: ["Model", "Structure"],
  },
  {
    title: "Specialty BIM Modeling",
    description:
      "Create detailed BIM models for architecture, structure and MEP systems with clear technical organization.",
    frameworkRelation: ["Model", "Structure"],
  },
  {
    title: "3D Coordination",
    description:
      "Identify and resolve clashes between disciplines before construction to reduce rework and coordination issues.",
    frameworkRelation: ["Coordinate"],
  },
  {
    title: "Construction Documentation",
    description:
      "Produce drawings, specifications and technical documentation ready for permits, coordination and construction.",
    frameworkRelation: ["Deliver"],
  },
  {
    title: "Cost & Quantity Estimation",
    description:
      "Extract quantities, material takeoffs and cost-related project information directly from BIM models.",
    frameworkRelation: ["Quantify"],
  },
  {
    title: "4D Construction Planning",
    description:
      "Support sequencing and timeline planning through 4D simulation based on model and construction data.",
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
    result:
      "Structured BIM information prepared for design development and coordination.",
    image: "./assets/images/projects/project-residential-bim-support.svg",
    alt: "Placeholder project image for Residential BIM Support",
  },
  {
    title: "Coordination Package",
    type: "AEC Coordination",
    servicesApplied: "3D Coordination + Clash Review",
    result:
      "Discipline conflicts identified and organized for technical resolution.",
    image: "./assets/images/projects/project-coordination-package.svg",
    alt: "Placeholder project image for Coordination Package",
  },
  {
    title: "Documentation Set",
    type: "Technical Documentation",
    servicesApplied: "Construction Documentation",
    result:
      "Drawings and technical information prepared for review, permits or construction.",
    image: "./assets/images/projects/project-documentation-set.svg",
    alt: "Placeholder project image for Documentation Set",
  },
];

const aboutContent = {
  kicker: "About",
  title: "About BIM Services",
  paragraphs: [
    "BIM Services is a technical support studio specialized in BIM coordination, modeling and construction documentation for AEC teams.",
    "We work with architecture firms, engineering offices, contractors and developers who need external production capacity, technical clarity and organized project delivery.",
    "Our team combines technical expertise in Revit, BIM workflows and construction documentation with a flexible, client-adapted approach.",
  ],
};

// Team data: replace placeholders with real photos, names, roles and descriptions.
// TEMP JPG assets live in ./assets/images/team/
const teamMembers = [
  {
    name: "Sergio Cortes",
    role: "BIM Delivery Lead",
    description: "Sergio leads BIM delivery, design coordination and technical documentation, helping turn project information into organized Revit models and construction-ready deliverables.",
    initials: "SC",
    image: "./assets/images/team/team-member-01-placeholder.jpg",
    alt: "Team photo placeholder for Team Member 01",
  },
  {
    name: "Tatiana Hernandez",
    role: "Operations & Documentation Lead",
    description: "Tatiana leads project organization, documentation workflows and internal coordination, helping keep information clear, consistent and aligned with each project’s standards.",
    initials: "TH",
    image: "./assets/images/team/team-member-02-placeholder.jpg",
    alt: "Team photo placeholder for Team Member 02",
  },
  {
    name: "Camilo Ramirez",
    role: "BIM Production Lead",
    description: "Camilo leads BIM production and Revit modeling support, helping develop coordinated models, drawing packages and technical documentation for AEC teams.",
    initials: "CR",
    image: "./assets/images/team/team-member-03-placeholder.jpg",
    alt: "Team photo placeholder for Team Member 03",
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

// Contact data: replace WhatsApp number and email when confirmed.
const contactInfo = {
  whatsappUrl: "https://wa.me/[PHONE_NUMBER_TO_CONFIRM]",
  whatsappDisplay: "[PHONE_NUMBER_TO_CONFIRM]",
  emailAddress: "[EMAIL_TO_CONFIRM]",
  emailHref: "mailto:[EMAIL_TO_CONFIRM]",
};

// Motion settings: keep animations controlled and easy to disable or adjust.
const motionSettings = {
  heroParallaxStrength: 0.08,
  revealDistance: 18,
  revealDuration: 520,
  revealThreshold: 0.18,
  revealRootMargin: "0px 0px -8% 0px",
  aboutCardsDelay: 40,
  workflowRevealDistance: 24,
  workflowRevealDuration: 500,
  workflowStaggerDelay: 120,
};

// Expandable sections: controls in-place expand/collapse for Projects and About.
const expandableSections = [
  {
    sectionId: "projects",
    toggleId: "projects-toggle",
    contentId: "project-experience-content",
    previewId: null,
    buttonTextClosed: "View project experience",
    buttonTextOpen: "Show less",
  },
  {
    sectionId: "about",
    toggleId: "about-toggle",
    contentId: "about-team-content",
    previewId: "about-team-preview",
    buttonTextClosed: "Meet the team",
    buttonTextOpen: "Show less",
  },
];

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
          <div class="service-icon" aria-hidden="true"></div>
          <div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
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
      <img src="${project.image}" alt="${project.alt}" class="project-image" />
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

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card">
          <button
            class="project-media"
            type="button"
            aria-expanded="false"
            aria-label="Show details for ${project.title}"
            data-project-trigger="${index}"
          >
            ${createProjectMedia(project)}
            <div class="project-overlay">
              <span class="project-tag">${project.type}</span>
              <h3>${project.title}</h3>
              <p class="project-services">${project.servicesApplied}</p>
              <p>${project.result}</p>
            </div>
          </button>

          <div class="project-body">
            <span class="project-tag">${project.type}</span>
            <h3>${project.title}</h3>
            <p class="project-services">${project.servicesApplied}</p>
            <p>${project.result}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function bindAboutContent() {
  setTextContent("#about-kicker", aboutContent.kicker);
  setTextContent("#about-title", aboutContent.title);

  const aboutCopy = document.querySelector("#about-copy");
  if (!aboutCopy) return;

  aboutCopy.innerHTML = aboutContent.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
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
    .map(
      (member) => `
        <article
          class="team-card"
          tabindex="0"
        >
          ${createTeamMedia(member)}
          <div class="team-card-body">
            <h3>${member.name}</h3>
            <div class="team-details">
              <p class="team-role">${member.role}</p>
              <p class="team-description">${member.description}</p>
            </div>
          </div>
        </article>
      `,
    )
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
  setTextContent("#whatsapp-display", contactInfo.whatsappDisplay);
  setTextContent("#email-display", contactInfo.emailAddress);
  setTextContent("#footer-year", new Date().getFullYear().toString());

  const whatsappLink = document.querySelector("#whatsapp-link");
  const emailLink = document.querySelector("#email-link");
  const footerWhatsappLink = document.querySelector("#footer-whatsapp-link");
  const footerEmailLink = document.querySelector("#footer-email-link");

  if (whatsappLink) {
    whatsappLink.setAttribute("href", contactInfo.whatsappUrl);
  }

  if (emailLink) {
    emailLink.setAttribute("href", contactInfo.emailHref);
  }

  if (footerWhatsappLink) {
    footerWhatsappLink.setAttribute("href", contactInfo.whatsappUrl);
    footerWhatsappLink.textContent = `WhatsApp: ${contactInfo.whatsappDisplay}`;
  }

  if (footerEmailLink) {
    footerEmailLink.setAttribute("href", contactInfo.emailHref);
    footerEmailLink.textContent = `Email: ${contactInfo.emailAddress}`;
  }
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const headerCta = document.querySelector("#header-contact-cta");

  if (!header || !toggle) return;

  function closeMenu() {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  // Header scroll behavior: adjust background, blur, border or shadow here.
  function updateHeaderScrollState() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
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

function updateExpandableButton(button, text) {
  const label = button.querySelector("[data-toggle-label]");
  if (label) {
    label.textContent = text;
    return;
  }

  button.textContent = text;
}

function setExpandableSectionState(config, expanded, options = {}) {
  const { instant = false } = options;
  const section = document.querySelector(`[data-expandable-section="${config.sectionId}"]`);
  const button = document.querySelector(`#${config.toggleId}`);
  const content = document.querySelector(`#${config.contentId}`);
  const preview = config.previewId ? document.querySelector(`#${config.previewId}`) : null;

  if (!section || !button || !content) return;

  // Accessibility: toggle buttons update aria-expanded and control their related content region.
  button.setAttribute("aria-expanded", String(expanded));
  updateExpandableButton(
    button,
    expanded ? config.buttonTextOpen : config.buttonTextClosed,
  );
  section.classList.toggle("is-expanded", expanded);
  content.setAttribute("aria-hidden", String(!expanded));
  content.toggleAttribute("inert", !expanded);

  if (preview) {
    preview.classList.toggle("is-hidden", expanded);
    preview.setAttribute("aria-hidden", String(expanded));
  }

  if (prefersReducedMotion.matches || instant) {
    content.hidden = !expanded;
    content.classList.toggle("is-expanded", expanded);
    content.style.maxHeight = expanded ? "none" : "";
    delete content.dataset.animating;
    return;
  }

  if (expanded) {
    content.dataset.animating = "true";
    content.hidden = false;
    content.style.maxHeight = "0px";

    window.requestAnimationFrame(() => {
      content.classList.add("is-expanded");
      content.style.maxHeight = `${content.scrollHeight}px`;
    });

    const handleExpandEnd = (event) => {
      if (event.target !== content || event.propertyName !== "max-height") return;

      content.style.maxHeight = "none";
      delete content.dataset.animating;
      content.removeEventListener("transitionend", handleExpandEnd);
    };

    content.addEventListener("transitionend", handleExpandEnd);
    return;
  }

  const currentHeight = content.scrollHeight;
  content.dataset.animating = "true";
  content.style.maxHeight = `${currentHeight}px`;

  window.requestAnimationFrame(() => {
    content.classList.remove("is-expanded");
    content.style.maxHeight = "0px";
  });

  const handleCollapseEnd = (event) => {
      if (event.target !== content || event.propertyName !== "max-height") return;

      content.hidden = true;
      content.style.maxHeight = "";
      delete content.dataset.animating;
      content.removeEventListener("transitionend", handleCollapseEnd);
    };

  content.addEventListener("transitionend", handleCollapseEnd);
}

function setupExpandableSections() {
  // Project Experience: collapsed state shows heading, intro and toggle only.
  // About: collapsed state shows intro and group photo; expanded state shows individual team cards.
  expandableSections.forEach((config) => {
    const button = document.querySelector(`#${config.toggleId}`);
    if (!button) return;

    setExpandableSectionState(config, false, { instant: true });

    button.addEventListener("click", () => {
      const content = document.querySelector(`#${config.contentId}`);
      if (content?.dataset.animating === "true") return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      setExpandableSectionState(config, !expanded);
    });
  });
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (!form || !formStatus) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const hasConfirmedEmail = !contactInfo.emailAddress.includes("[");

    if (!hasConfirmedEmail) {
      formStatus.textContent =
        "Update the contact email placeholder in js/main.js to activate email sending from this form.";
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
setupExpandableSections();
setupProjectOverlays();
setupContactForm();
