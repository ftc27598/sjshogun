import { useEffect, useRef, useState } from "react";

interface PollinateModelProps {
  frontView: boolean;
  sectionRef: React.RefObject<HTMLElement>;
}

export default function PollinateModel({ frontView, sectionRef }: PollinateModelProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controller = useRef<{ setFrontView: (front: boolean) => void }>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;
    import("./create-pollinate-scene").then(async ({ createPollinateScene }) => {
      if (cancelled || !hostRef.current || !sectionRef.current) return;
      try {
        const scene = await createPollinateScene(hostRef.current, sectionRef.current);
        if (cancelled) { scene.dispose(); return; }
        controller.current = scene;
        dispose = scene.dispose;
        setReady(true);
      } catch {
        // Keep the static product render on devices without WebGL.
      }
    }).catch(() => { /* Keep the static render if the scene cannot load. */ });
    return () => { cancelled = true; controller.current = undefined; dispose?.(); };
  }, [sectionRef]);

  useEffect(() => { controller.current?.setFrontView(frontView); }, [frontView, ready]);

  return <div className={`pp-model ${ready ? "pp-model-ready" : ""}`}>
    <img className="pp-model-poster" src="/project-pollinate/bee-hotel-render.png" width="540" height="420" decoding="async" aria-hidden={ready} alt="Printable bee hotel housing with a removable roof and natural nesting reeds" />
    <div className="pp-model-canvas" ref={hostRef} role="img" aria-hidden={!ready} aria-label="3D model of the Project Pollinate bee hotel. Use the view buttons to see the front or side." />
  </div>;
}
