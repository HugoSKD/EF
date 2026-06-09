import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, ArrowRight, Hash, Calculator, BookOpen, FileText, ChevronRight } from "lucide-react";
import { T, THEME } from "../theme.js";
import { SEARCH_INDEX } from "../data/searchIndex.js";
import { GLOSSARY } from "../data/glossary.js";

// Score de matching simple (fuzzy léger)
function score(item, q) {
  const qq = q.toLowerCase().trim();
  if (!qq) return 1;
  const t = (item.title || "").toLowerCase();
  const d = (item.desc || "").toLowerCase();
  const k = (item.keywords || "").toLowerCase();
  if (t.startsWith(qq)) return 1000;
  if (t.includes(qq)) return 500;
  if (k.includes(qq)) return 300;
  if (d.includes(qq)) return 150;
  // fuzzy : tous les caractères de q apparaissent dans l'ordre dans t
  let idx = 0;
  for (const c of qq) {
    idx = t.indexOf(c, idx);
    if (idx === -1) return 0;
    idx++;
  }
  return 50;
}

const ICONS_BY_TYPE = {
  page: FileText,
  topic: ChevronRight,
  tool: Calculator,
  glossary: BookOpen,
};

export default function CommandPalette({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);

  // Index global qui inclut le glossaire
  const fullIndex = useMemo(() => [
    ...SEARCH_INDEX,
    ...GLOSSARY.map((g) => ({
      type: "glossary",
      page: "glossaire",
      title: g.term,
      desc: g.def.length > 110 ? g.def.slice(0, 107) + "…" : g.def,
      keywords: g.cat,
    })),
  ], []);

  const results = useMemo(() => {
    if (!q.trim()) return fullIndex.slice(0, 12);
    return fullIndex
      .map((it) => ({ it, s: score(it, q) }))
      .filter(({ s }) => s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 20)
      .map(({ it }) => it);
  }, [q, fullIndex]);

  // Shortcut global
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reset état à l'ouverture
  useEffect(() => {
    if (open) {
      setQ("");
      setCursor(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => { setCursor(0); }, [q]);

  const pick = (item) => {
    setOpen(false);
    onNavigate(item.page, item.topic);
  };

  const handleKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); if (results[cursor]) pick(results[cursor]); }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Rechercher (Ctrl+K)"
        className="ef-cmdk-trigger"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: T.surface,
          border: `1px solid ${T.line}`,
          borderRadius: 10,
          padding: "7px 12px",
          color: T.textDim,
          fontSize: 13,
          cursor: "pointer",
          transition: "all .15s",
          fontFamily: T.sans,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.brand + "55")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line)}
      >
        <Search size={14} />
        <span>Rechercher…</span>
        <span style={{ display: "inline-flex", gap: 3, marginLeft: 6 }}>
          <kbd style={kbdStyle}>Ctrl</kbd>
          <kbd style={kbdStyle}>K</kbd>
        </span>
      </button>
    );
  }

  return (
    <>
      <div onClick={() => setOpen(false)}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", zIndex: 200, animation: "ef-fade-in .15s ease" }} />
      <div role="dialog" aria-label="Recherche"
        style={{
          position: "fixed",
          top: "12vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(640px, calc(100vw - 24px))",
          background: T.bgSoft,
          border: `1px solid ${T.line}`,
          borderRadius: 16,
          boxShadow: "0 28px 60px -20px rgba(0,0,0,0.7)",
          zIndex: 201,
          overflow: "hidden",
          fontFamily: T.sans,
          animation: "ef-pop-in .18s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: `1px solid ${T.line}` }}>
          <Search size={18} color={T.textFaint} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Cherche un cours, un terme, un outil…"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: T.text,
              fontSize: 16,
              fontFamily: "inherit",
            }}
          />
          <kbd style={{ ...kbdStyle, padding: "3px 8px" }}>Esc</kbd>
        </div>

        <div style={{ maxHeight: "min(54vh, 460px)", overflowY: "auto", padding: 8 }}>
          {results.length === 0 && (
            <div style={{ padding: "30px 20px", textAlign: "center", color: T.textFaint, fontSize: 14 }}>
              Aucun résultat pour « {q} »
            </div>
          )}
          {results.map((item, i) => {
            const Ico = ICONS_BY_TYPE[item.type] || Hash;
            const th = THEME[item.page] || {};
            const active = i === cursor;
            return (
              <button
                key={`${item.page}-${item.topic || item.title}-${i}`}
                onMouseEnter={() => setCursor(i)}
                onClick={() => pick(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 14px",
                  background: active ? T.surfaceHi : "transparent",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  color: T.text,
                  fontFamily: "inherit",
                  transition: "background .1s",
                }}
              >
                <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 9, background: `${th.c || T.textFaint}1A`, color: th.c || T.textFaint, display: "grid", placeItems: "center" }}>
                  <Ico size={15} strokeWidth={2} />
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: T.textDim, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>{item.desc}</div>
                </span>
                <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: T.textFaint, opacity: active ? 1 : 0.6 }}>
                  {item.type === "topic" ? "Cours" : item.type === "tool" ? "Outil" : item.type === "glossary" ? "Terme" : "Page"}
                </span>
                {active && <ArrowRight size={15} color={T.brand} />}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px", borderTop: `1px solid ${T.line}`, fontSize: 12, color: T.textFaint, gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><kbd style={kbdStyle}>↑</kbd><kbd style={kbdStyle}>↓</kbd> naviguer</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><kbd style={kbdStyle}>↵</kbd> ouvrir</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><kbd style={kbdStyle}>Esc</kbd> fermer</span>
          </div>
          <div>{results.length} résultat{results.length > 1 ? "s" : ""}</div>
        </div>
      </div>
    </>
  );
}

const kbdStyle = {
  display: "inline-block",
  padding: "1px 6px",
  fontSize: 10.5,
  fontFamily: "ui-monospace, SFMono-Regular, monospace",
  background: T.surface,
  border: `1px solid ${T.line}`,
  borderRadius: 5,
  color: T.textDim,
};
