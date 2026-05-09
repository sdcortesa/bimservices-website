// Three.js is imported directly here instead of relying on an import map.
// This keeps the Hero module more reliable on GitHub Pages and older browsers with ES module support.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.164.1/examples/jsm/loaders/GLTFLoader.js";

const HERO_MODEL_PATH = new URL("../assets/models/hero/cabana-tusa.glb", import.meta.url).href;
const HERO_MODEL_FALLBACK_PATH = new URL("../assets/images/hero/hero-3d-fallback.png", import.meta.url).href;

// Hero 3D: provisional GLB model used for testing. Replace path when final model is ready.
const HERO_3D_SETTINGS = {
  containerSelector: "[data-hero-3d]",
  canvasSelector: "[data-hero-3d-canvas]",
  fallbackSelector: "[data-hero-3d-fallback]",
  modelPath: HERO_MODEL_PATH,
  fallbackPath: HERO_MODEL_FALLBACK_PATH,
  maxScrollRotationDegrees: 45,
  maxManualRotationDegrees: 45,
  dragSensitivity: 0.006,
  loadTimeoutMs: 9000,
  enableMobile3D: true,
  reducedMotionDisablesScrollRotation: true,
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function showFallback(container) {
  container.classList.add("is-fallback");
  container.classList.remove("is-loaded");
  container.dataset.hero3dStatus = "fallback";
}

function markLoading(container) {
  container.classList.remove("is-fallback", "is-loaded");
  container.dataset.hero3dStatus = "loading";
}

function markLoaded(container) {
  container.classList.add("is-loaded");
  container.classList.remove("is-fallback");
  container.dataset.hero3dStatus = "loaded";
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function frameModel(model, camera) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const targetSize = 2.35;
  const scale = targetSize / maxDimension;

  model.position.sub(center);
  model.scale.setScalar(scale);
  model.rotation.x = -0.02;

  camera.position.set(0.25, 1.05, 4.4);
  camera.lookAt(0, 0.1, 0);
}

function initHero3D(settings = HERO_3D_SETTINGS) {
  const container = document.querySelector(settings.containerSelector);
  if (!container) return;

  const canvasHost = container.querySelector(settings.canvasSelector);
  const fallback = container.querySelector(settings.fallbackSelector);
  if (!canvasHost || !fallback) return;

  fallback.setAttribute("src", settings.fallbackPath);
  markLoading(container);

  if (!settings.enableMobile3D || !supportsWebGL()) {
    showFallback(container);
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  canvasHost.appendChild(renderer.domElement);

  const modelRoot = new THREE.Group();
  scene.add(modelRoot);

  const ambient = new THREE.AmbientLight(0xffffff, 1.35);
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  const fill = new THREE.DirectionalLight(0x8ec7ff, 1.2);
  key.position.set(3, 5, 4);
  fill.position.set(-4, 2, 2);
  scene.add(ambient, key, fill);

  const maxRotation = degreesToRadians(settings.maxManualRotationDegrees);
  const maxScrollRotation = degreesToRadians(settings.maxScrollRotationDegrees);
  let manualRotation = 0;
  let scrollRotation = 0;
  let targetRotation = 0;
  let currentRotation = 0;
  let isDragging = false;
  let lastPointerX = 0;
  let modelLoaded = false;
  let hasFailed = false;
  let isVisible = true;
  let frameId = 0;

  function getPixelRatio() {
    return Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.35 : 1.75);
  }

  function activateFallback(reason = "unknown") {
    hasFailed = true;
    showFallback(container);
    window.cancelAnimationFrame(frameId);
    console.warn(`Hero 3D fallback activated: ${reason}`);
  }

  function updateSize() {
    const rect = container.getBoundingClientRect();
    const width = Math.max(rect.width, 1);
    const height = Math.max(rect.height, 1);
    renderer.setPixelRatio(getPixelRatio());
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  // Scroll interaction: rotates the model horizontally up to approximately 45 degrees.
  function updateScrollRotation() {
    if (prefersReducedMotion.matches && settings.reducedMotionDisablesScrollRotation) {
      scrollRotation = 0;
      return;
    }

    const hero = container.closest(".hero-section");
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const progress = clamp((0 - rect.top) / Math.max(rect.height - viewport * 0.35, 1), 0, 1);
    scrollRotation = progress * maxScrollRotation;
  }

  function updateTargetRotation() {
    targetRotation = clamp(scrollRotation + manualRotation, -maxRotation, maxRotation);
  }

  // Manual interaction: click + drag is restricted to horizontal rotation only. No zoom or vertical orbit.
  function onPointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    isDragging = true;
    lastPointerX = event.clientX;
    container.classList.add("is-dragging");
    container.setPointerCapture?.(event.pointerId);
  }

  function onPointerMove(event) {
    if (!isDragging) return;

    const delta = event.clientX - lastPointerX;
    lastPointerX = event.clientX;
    manualRotation = clamp(
      manualRotation + delta * settings.dragSensitivity,
      -maxRotation,
      maxRotation,
    );
    updateTargetRotation();
  }

  function onPointerUp(event) {
    isDragging = false;
    container.classList.remove("is-dragging");
    container.releasePointerCapture?.(event.pointerId);
  }

  function renderLoop() {
    if (hasFailed) return;

    if (!modelLoaded || !isVisible) {
      frameId = window.requestAnimationFrame(renderLoop);
      return;
    }

    updateScrollRotation();
    updateTargetRotation();
    currentRotation += (targetRotation - currentRotation) * 0.08;
    modelRoot.rotation.y = currentRotation;

    renderer.render(scene, camera);
    frameId = window.requestAnimationFrame(renderLoop);
  }

  const loadTimeout = window.setTimeout(() => {
    if (!modelLoaded) {
      // Fallback: transparent PNG shown when model loading is slow. A late GLB load can still replace it.
      showFallback(container);
      console.warn("Hero 3D fallback shown while the GLB continues loading.");
    }
  }, settings.loadTimeoutMs);

  const loader = new GLTFLoader();
  loader.load(
    settings.modelPath,
    (gltf) => {
      window.clearTimeout(loadTimeout);
      if (hasFailed) return;

      modelRoot.add(gltf.scene);
      frameModel(gltf.scene, camera);
      updateSize();
      modelLoaded = true;
      markLoaded(container);
      renderer.render(scene, camera);
    },
    undefined,
    (error) => {
      window.clearTimeout(loadTimeout);
      activateFallback(error?.message || "model-load-error");
    },
  );

  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerup", onPointerUp);
  container.addEventListener("pointercancel", onPointerUp);
  window.addEventListener("scroll", updateScrollRotation, { passive: true });
  window.addEventListener("resize", updateSize);

  // Mobile: 3D is attempted with optimized settings; fallback is used if performance or loading fails.
  // Reduced motion: disables or simplifies automatic 3D movement.
  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry?.isIntersecting ?? true;
    },
    { threshold: 0.05 },
  );
  visibilityObserver.observe(container);

  updateSize();
  updateScrollRotation();
  renderLoop();
}

initHero3D();
