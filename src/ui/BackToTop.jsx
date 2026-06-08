import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { T } from "../theme.js";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Retour en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        width: 46,
        height: 46,
        borderRadius: 99,
        border: `1px solid ${T.line}`,
        background: T.surfaceHi,
        color: T.text,
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        fontSize: 18,
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        pointerEvents: show ? "auto" : "none",
        transition: "all .3s ease",
        zIndex: 55,
      }}
    >
      <ArrowUp size={20} strokeWidth={2.2} />
    </button>
  );
}
