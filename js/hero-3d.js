const HERO_MODEL_VIEWER_SETTINGS = {
  containerSelector: "[data-hero-3d]",
  viewerSelector: "[data-hero-model-viewer]",
  baseOrbit: {
    theta: 238,
    phi: 58,
    // Camera distance: increase this percentage to show the model farther away.
    radius: 42,
  },
  maxScrollRotationDegrees: 45,
  reducedMotionDisablesScrollRotation: true,
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setHero3DStatus(container, status, error = "") {
  container.dataset.hero3dStatus = status;
  container.dataset.hero3dError = error;
  window.__hero3DStatus = {
    status,
    error,
    modelPath: container.querySelector("[data-hero-model-viewer]")?.getAttribute("src") || "",
  };
}

function getScrollProgress(container) {
  const hero = container.closest(".hero-section");
  if (!hero) return 0;

  const rect = hero.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  return clamp((0 - rect.top) / Math.max(rect.height - viewport * 0.35, 1), 0, 1);
}

function initHeroModelViewer(settings = HERO_MODEL_VIEWER_SETTINGS) {
  const container = document.querySelector(settings.containerSelector);
  if (!container) return;

  const viewer = container.querySelector(settings.viewerSelector);
  if (!viewer) return;

  setHero3DStatus(container, "model-viewer-initializing");

  function setOrbit(thetaOffset = 0) {
    const theta = settings.baseOrbit.theta + thetaOffset;
    viewer.setAttribute(
      "camera-orbit",
      `${theta.toFixed(2)}deg ${settings.baseOrbit.phi}deg ${settings.baseOrbit.radius}%`,
    );
  }

  // Scroll interaction: rotates the model-viewer camera horizontally up to approximately 45 degrees.
  function updateScrollOrbit() {
    if (prefersReducedMotion.matches && settings.reducedMotionDisablesScrollRotation) {
      setOrbit(0);
      return;
    }

    const progress = getScrollProgress(container);
    setOrbit(progress * settings.maxScrollRotationDegrees);
  }

  viewer.addEventListener("load", () => {
    container.classList.add("is-loaded");
    setHero3DStatus(container, "loaded");
    updateScrollOrbit();
    console.info("Hero model-viewer loaded:", viewer.getAttribute("src"));
  });

  viewer.addEventListener("error", (event) => {
    const message = event?.detail?.sourceError?.message || "model-viewer-load-error";
    setHero3DStatus(container, "error", message);
    console.error("Hero model-viewer error:", event);
  });

  window.addEventListener("scroll", updateScrollOrbit, { passive: true });
  window.addEventListener("resize", updateScrollOrbit);
  updateScrollOrbit();
}

initHeroModelViewer();
