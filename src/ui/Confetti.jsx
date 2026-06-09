import React, { useEffect, useMemo, useState } from "react";
import { T } from "../theme.js";

const COLORS = [T.brand, T.brand2, T.accent, T.coral, T.violet];

export default function Confetti({ active, durationMs = 2200 }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (active) {
      setShow(true);
      const t = setTimeout(() => setShow(false), durationMs);
      return () => clearTimeout(t);
    }
  }, [active, durationMs]);

  const pieces = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      dx: (Math.random() - 0.5) * 240,
      delay: Math.random() * 200,
      color: COLORS[i % COLORS.length],
      size: 7 + Math.random() * 6,
      shape: Math.random() > 0.5 ? "circle" : "square",
      rotate: Math.random() * 360,
    }));
  }, [show]);

  if (!show) return null;

  return (
    <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 180, overflow: "hidden" }}>
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: "-20px",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            transform: `rotate(${p.rotate}deg)`,
            animation: `ef-confetti ${1.6 + Math.random() * 0.6}s cubic-bezier(.18,.7,.6,1) ${p.delay}ms forwards`,
            // dx en custom property pour translation horizontale
            "--dx": `${p.dx}px`,
          }}
        />
      ))}
    </div>
  );
}
