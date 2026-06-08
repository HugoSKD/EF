import React from "react";
import { T } from "../theme.js";
import { useScrollProgress } from "../hooks.js";

export default function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "transparent", zIndex: 60, pointerEvents: "none" }}>
      <div style={{ height: "100%", width: `${p * 100}%`, background: `linear-gradient(90deg, ${T.brand}, ${T.brand2})`, transition: "width .08s linear", boxShadow: `0 0 8px ${T.brand}88` }} />
    </div>
  );
}
