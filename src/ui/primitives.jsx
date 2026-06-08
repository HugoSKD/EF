import React, { useState } from "react";
import { T } from "../theme.js";

export function Tag({ children, color = T.brand }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color, padding: "6px 12px", borderRadius: 999, background: `${color}14`, border: `1px solid ${color}33` }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: color }} />
      {children}
    </span>
  );
}

export function Card({ children, style, hover, onClick, accent }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: T.surface,
        border: `1px solid ${h && hover ? (accent ? `${accent}55` : "rgba(94,232,196,0.4)") : T.line}`,
        borderRadius: 18,
        padding: 26,
        transition: "all .25s ease",
        transform: h && hover ? "translateY(-4px)" : "none",
        boxShadow: h && hover ? `0 18px 40px -18px ${accent ? accent + "55" : "rgba(0,0,0,0.7)"}` : "0 1px 0 rgba(255,255,255,0.03)",
        cursor: onClick ? "pointer" : "default",
        position: "relative",
        ...style,
      }}>
      {children}
    </div>
  );
}

export function Chapter({ n, title, color = T.brand, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 16 }}>
        <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 10, background: `${color}1A`, border: `1px solid ${color}33`, color, display: "grid", placeItems: "center", fontFamily: T.serif, fontWeight: 600, fontSize: 16 }}>{n}</span>
        <h2 style={{ fontFamily: T.serif, fontSize: "clamp(20px,3.2vw,26px)", fontWeight: 600, color: T.text, margin: 0, letterSpacing: -0.3 }}>{title}</h2>
      </div>
      <div style={{ maxWidth: 780 }}>{children}</div>
    </section>
  );
}

export function P({ children }) {
  return <p style={{ fontSize: 16, lineHeight: 1.78, color: "#C4D0E6", margin: "0 0 16px" }}>{children}</p>;
}
export function B({ children }) {
  return <strong style={{ color: T.text }}>{children}</strong>;
}

export function Note({ children, color = T.accent, title = "À retenir" }) {
  return (
    <div style={{ borderLeft: `3px solid ${color}`, background: `${color}10`, borderRadius: "0 12px 12px 0", padding: "14px 18px", margin: "20px 0" }}>
      <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 15, lineHeight: 1.68, color: "#D5DEEF" }}>{children}</div>
    </div>
  );
}

export function DeepDive({ title = "Pour aller plus loin", children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px dashed ${T.brand}55`, borderRadius: 14, margin: "20px 0", background: "rgba(94,232,196,0.04)", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ all: "unset", cursor: "pointer", width: "100%", boxSizing: "border-box", padding: "13px 18px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: T.brand, fontSize: 16, transform: open ? "rotate(90deg)" : "none", transition: "transform .2s" }}>▸</span>
        <span style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: T.brand }}>🔬 {title}</span>
      </button>
      <div style={{ maxHeight: open ? 1200 : 0, transition: "max-height .45s ease", overflow: "hidden" }}>
        <div style={{ padding: "0 18px 16px 40px", fontSize: 14.5, lineHeight: 1.7, color: T.textDim }}>{children}</div>
      </div>
    </div>
  );
}

export function List({ items, color = T.brand }) {
  return (
    <div style={{ margin: "4px 0 18px" }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
          <span style={{ flexShrink: 0, marginTop: 3, width: 22, height: 22, borderRadius: 7, background: `${color}1A`, color, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 800 }}>{i + 1}</span>
          <span style={{ fontSize: 15.5, lineHeight: 1.68, color: "#C4D0E6" }}>{typeof it === "string" ? it : <><B>{it.t}.</B> {it.d}</>}</span>
        </div>
      ))}
    </div>
  );
}

export function Disclaimer({ compact }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start", background: T.bgSoft, border: `1px solid ${T.line}`, borderRadius: 14, padding: compact ? "13px 16px" : "18px 20px", margin: "32px 0 8px" }}>
      <span style={{ fontSize: 18 }}>⚖️</span>
      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: T.textDim }}>
        <B>Contenu strictement éducatif.</B> EduFinance n'offre aucun conseil personnalisé ni recommandation
        d'achat de produit financier. Tout investissement comporte un risque de perte. Consultez un
        professionnel qualifié avant toute décision importante.
      </p>
    </div>
  );
}

export function btn(color, filled) {
  return {
    background: filled ? color : "transparent",
    color: filled ? T.bg : color,
    border: `1.5px solid ${color}`,
    borderRadius: 12,
    padding: "13px 22px",
    fontSize: 15.5,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all .2s",
  };
}

export function Pill({ children, color = T.textFaint }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color, padding: "3px 9px", borderRadius: 99, background: `${color}15`, border: `1px solid ${color}33` }}>
      {children}
    </span>
  );
}

export function Divider() {
  return <div style={{ height: 1, background: T.line, margin: "28px 0" }} />;
}

export function TwoCol({ children, gap = 20 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap }} className="ef-twocol">
      {children}
    </div>
  );
}
