import React, { useMemo, useState } from "react";
import { T } from "../theme.js";
import { Tag, Card } from "../ui/primitives.jsx";
import { GLOSSARY, GLOSSARY_CATS } from "../data/glossary.js";

export default function Glossaire() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tous");

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      if (cat !== "Tous" && g.cat !== cat) return false;
      if (!ql) return true;
      return g.term.toLowerCase().includes(ql) || g.def.toLowerCase().includes(ql);
    }).sort((a, b) => a.term.localeCompare(b.term, "fr"));
  }, [q, cat]);

  return (
    <div>
      <div style={{ marginBottom: 30, maxWidth: 780 }}>
        <Tag color={T.brand}>📖&nbsp;&nbsp;Lexique financier</Tag>
        <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(34px,6vw,52px)", lineHeight: 1.04, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>
          Glossaire
        </h1>
        <p style={{ fontSize: "clamp(16px,2.2vw,19px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>
          {GLOSSARY.length} termes financiers expliqués sans jargon. Cherche un mot, ou filtre par thème.
        </p>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
        <div style={{ flex: "1 1 280px", position: "relative" }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Chercher un terme (ex: ETF, inflation, TAEG…)"
            style={{
              width: "100%",
              boxSizing: "border-box",
              background: T.surface,
              border: `1px solid ${T.line}`,
              borderRadius: 12,
              color: T.text,
              fontSize: 15,
              padding: "13px 16px 13px 42px",
              outline: "none",
              fontFamily: T.sans,
            }}
            onFocus={(e) => (e.target.style.borderColor = T.brand)}
            onBlur={(e) => (e.target.style.borderColor = T.line)}
          />
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: T.textFaint, pointerEvents: "none", fontSize: 16 }}>🔍</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
        {GLOSSARY_CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            style={{
              background: cat === c ? T.brand : "transparent",
              color: cat === c ? T.bg : T.textDim,
              border: `1px solid ${cat === c ? T.brand : T.line}`,
              borderRadius: 99,
              padding: "7px 14px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all .2s",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 13, color: T.textFaint, marginBottom: 14 }}>
        {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
        {filtered.map((g) => (
          <Card key={g.term} style={{ padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
              <h3 style={{ margin: 0, fontSize: 17, color: T.text, fontWeight: 700, fontFamily: T.serif }}>{g.term}</h3>
              <span style={{ fontSize: 10.5, color: T.textFaint, padding: "3px 8px", borderRadius: 99, background: "rgba(255,255,255,0.04)", border: `1px solid ${T.line}`, whiteSpace: "nowrap", letterSpacing: 0.4, textTransform: "uppercase", fontWeight: 700 }}>{g.cat}</span>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: T.textDim }}>{g.def}</p>
          </Card>
        ))}
        {filtered.length === 0 && (
          <Card style={{ gridColumn: "1 / -1", textAlign: "center", padding: 40 }}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>🔍</div>
            <div style={{ fontSize: 16, color: T.textDim }}>Aucun terme trouvé pour « {q} »</div>
          </Card>
        )}
      </div>
    </div>
  );
}
