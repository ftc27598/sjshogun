import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// This scene uses the same boolean solids as the delivered STL files.
export async function createPollinateScene(host: HTMLElement, section: HTMLElement) {
  const asset = await new GLTFLoader().loadAsync("/project-pollinate/bee-hotel-assembly.glb");
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 50);
  const model = new THREE.Group();
  const housingMaterial = new THREE.MeshStandardMaterial({ color: "#cecec3", roughness: 0.48 });
  const roofMaterial = new THREE.MeshStandardMaterial({ color: "#c5a14e", roughness: 0.4 });
  const originalMaterials = new Set<THREE.Material>();
  asset.scene.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return;
    (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => originalMaterials.add(material));
    object.material = object.name === "roof" ? roofMaterial : housingMaterial;
    object.castShadow = true; object.receiveShadow = true;
  });
  originalMaterials.forEach(material => material.dispose());
  asset.scene.rotation.x = -Math.PI / 2;
  asset.scene.scale.setScalar(0.01);
  asset.scene.position.set(0, -0.8, 0.75);
  model.add(asset.scene); scene.add(model);
  const roof = asset.scene.getObjectByName("roof");

  let seed = 721;
  const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const reedCanvas = document.createElement("canvas"); reedCanvas.width = reedCanvas.height = 256;
  const fiber = reedCanvas.getContext("2d")!;
  fiber.fillStyle = "#decb9c"; fiber.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 500; i++) {
    fiber.fillStyle = "rgba(70,47,18," + random() * 0.15 + ")";
    fiber.fillRect(random() * 256, random() * 256, 0.2 + random(), 20 + random() * 200);
  }
  const reedTexture = new THREE.CanvasTexture(reedCanvas); reedTexture.colorSpace = THREE.SRGBColorSpace;
  const reedMaterials = ["#d2be97", "#eee0c3", "#b7a07b", "#e4d4b2"].map(color => new THREE.MeshStandardMaterial({ color, map: reedTexture, roughness: 0.95, side: THREE.DoubleSide }));
  const innerMaterial = new THREE.MeshStandardMaterial({ color: "#51402b", roughness: 1, side: THREE.BackSide });
  const endMaterial = new THREE.MeshStandardMaterial({ color: "#16110c", roughness: 1 });
  const ringGeometry = new THREE.RingGeometry(0.56, 1, 24);
  const tubeGeometry = new THREE.CylinderGeometry(1, 1, 1, 24, 1, true);
  const endGeometry = new THREE.CircleGeometry(1, 24);
  // 48 removable natural reeds: the explicit capacity assumption in the impact estimate.
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      const radius = 0.075 + random() * 0.012;
      const x = -0.71 + col * 0.203, y = -0.65 + row * 0.24;
      const front = 0.76 - random() * 0.02;
      const material = reedMaterials[Math.floor(random() * reedMaterials.length)];
      const outer = new THREE.Mesh(tubeGeometry, material);
      outer.rotation.x = Math.PI / 2; outer.scale.set(radius, 1.45, radius);
      outer.position.set(x, y, front - 0.725); outer.castShadow = outer.receiveShadow = true; model.add(outer);
      const inside = new THREE.Mesh(tubeGeometry, innerMaterial);
      inside.rotation.x = Math.PI / 2; inside.scale.set(radius * 0.56, 1.45, radius * 0.56);
      inside.position.copy(outer.position); model.add(inside);
      const lip = new THREE.Mesh(ringGeometry, material);
      lip.scale.setScalar(radius); lip.position.set(x, y, front + 0.001); lip.receiveShadow = true; model.add(lip);
      const end = new THREE.Mesh(endGeometry, endMaterial);
      end.scale.setScalar(radius * 0.56); end.position.set(x, y, front - 0.4); model.add(end);
    }
  }
  scene.add(new THREE.HemisphereLight("#e6e9f3", "#141210", 1.2));
  const key = new THREE.DirectionalLight("#fff5e8", 3.4); key.position.set(-3, 5, 5); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); key.shadow.camera.left = -3; key.shadow.camera.right = 3;
  key.shadow.camera.top = 3; key.shadow.camera.bottom = -3; key.shadow.normalBias = 0.015; scene.add(key);
  const rim = new THREE.DirectionalLight("#ffffff", 3); rim.position.set(3, 3, -2); scene.add(rim);
  const fill = new THREE.DirectionalLight("#aac1df", 0.6); fill.position.set(4, 1, 5); scene.add(fill);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0, active = false, disposed = false, frontView = false;
  let scrollProgress = 0, angle = -0.38, targetAngle = -0.38;
  const pointer = { x: 0, y: 0 }; let pointerX = 0, pointerY = 0;
  function draw() {
    frame = 0; if (disposed || !active || document.hidden) return;
    angle += (targetAngle - angle) * 0.07;
    pointerX += (pointer.x - pointerX) * 0.05; pointerY += (pointer.y - pointerY) * 0.05;
    model.rotation.y = angle + pointerX * 0.035; model.rotation.x = pointerY * 0.012;
    if (roof) roof.position.z = reducedMotion.matches ? 0 : scrollProgress * 35;
    camera.position.set(0, frontView ? 0.25 : 0.65, host.clientWidth < 600 ? 7.4 : 4.7);
    camera.lookAt(0, 0.15, 0); renderer.render(scene, camera);
    if (Math.abs(angle - targetAngle) > 0.0005 || Math.abs(pointer.x - pointerX) > 0.001 || Math.abs(pointer.y - pointerY) > 0.001) requestDraw();
  }
  function requestDraw() { if (!frame && !disposed && active) frame = requestAnimationFrame(draw); }
  function updateTarget() {
    targetAngle = frontView ? 0 : -0.38 + (reducedMotion.matches ? 0 : scrollProgress * 0.5);
    if (reducedMotion.matches) angle = targetAngle; requestDraw();
  }
  function onScroll() {
    if (!active) return;
    const rect = section.getBoundingClientRect();
    scrollProgress = THREE.MathUtils.clamp(-rect.top / Math.max(section.offsetHeight - window.innerHeight, 1), 0, 1); updateTarget();
  }
  function onPointer(event: PointerEvent) {
    if (reducedMotion.matches || event.pointerType !== "mouse") return;
    const rect = host.getBoundingClientRect(); pointer.x = (event.clientX - rect.left) / rect.width - 0.5; pointer.y = (event.clientY - rect.top) / rect.height - 0.5; requestDraw();
  }
  function onLeave() { pointer.x = 0; pointer.y = 0; requestDraw(); }
  const resize = new ResizeObserver(() => {
    const { width, height } = host.getBoundingClientRect(); if (!width || !height) return;
    renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); requestDraw();
  }); resize.observe(host);
  const visibility = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; if (active) onScroll(); }, { rootMargin: "100px" }); visibility.observe(host);
  const onVisibility = () => requestDraw(); document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("scroll", onScroll, { passive: true }); host.addEventListener("pointermove", onPointer); host.addEventListener("pointerleave", onLeave); reducedMotion.addEventListener("change", updateTarget);
  return {
    setFrontView(front: boolean) { frontView = front; updateTarget(); },
    dispose() {
      disposed = true; cancelAnimationFrame(frame); resize.disconnect(); visibility.disconnect();
      window.removeEventListener("scroll", onScroll); document.removeEventListener("visibilitychange", onVisibility);
      host.removeEventListener("pointermove", onPointer); host.removeEventListener("pointerleave", onLeave); reducedMotion.removeEventListener("change", updateTarget);
      const geometries = new Set<THREE.BufferGeometry>(), materials = new Set<THREE.Material>();
      scene.traverse(object => { if (object instanceof THREE.Mesh) { geometries.add(object.geometry); (Array.isArray(object.material) ? object.material : [object.material]).forEach(item => materials.add(item)); } });
      geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose()); reedTexture.dispose(); renderer.dispose(); renderer.domElement.remove();
    },
  };
}
