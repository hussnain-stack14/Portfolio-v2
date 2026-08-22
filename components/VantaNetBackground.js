"use client";

import { useEffect, useRef } from "react";

export default function VantaNetBackground({
  color = 0x2dd4bf,
  backgroundColor = 0x1a1a1d,
  opacity = 15,
  className = "",
}) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadVanta = async () => {
      const NET = (await import("vanta/dist/vanta.net.min")).default;
      const THREE = await import("three");

      if (isMounted && !vantaEffect.current && vantaRef.current) {
        vantaEffect.current = NET({
          el: vantaRef.current,
          THREE,
          color,
          backgroundColor,
          points: 8.0,
          maxDistance: 20.0,
          spacing: 20.0,
          showDots: true,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        });
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (err) {
          // Vanta/StrictMode double-invoke race in dev — safe to ignore
        }
        vantaEffect.current = null;
      }
    };
  }, [color, backgroundColor]);

  return (
    <div
      ref={vantaRef}
      style={{ opacity: opacity / 100 }}
      className={`absolute inset-0 z-0 ${className}`}
    />
  );
}