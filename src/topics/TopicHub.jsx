import React, { useEffect, useState } from "react";
import { T, THEME } from "../theme.js";
import { Tag, Card, Disclaimer, btn, Pill } from "../ui/primitives.jsx";
import { useLocalStorage } from "../hooks.js";

const STORAGE_KEY = "ef_read_topics_v1";

export default function TopicHub({ pageId, topics, openId, onOpen, onBack }) {
  const th = THEME[pageId];
  const [read, setRead] = useLocalStorage(STORAGE_KEY, {});

  // Marquer comme lu après 6 secondes sur la page
  useEffect(() => {
    if (openId == null) return;
    const k = `${pageId}/${openId}`;
    if (read[k]) return;
    const t = setTimeout(() => setRead({ ...read, [k]: Date.now() }), 6000);
    return () => clearTimeout(t);
  }, [openId, pageId, read, setRead]);

  // Vue leçon
  if (openId != null) {
    const topic = topics.find((t) => t.id === openId);
    const idx = topics.findIndex((t) => t.id === openId);
    const wordCount = topic.words || 700;
    const minutes = Math.max(2, Math.round(wordCount / 220));
    return (
      <div>
        <button onClick={onBack} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, color: T.textDim, fontSize: 14.5, fontWeight: 600, marginBottom: 22 }}>
          ← Retour aux thématiques · {th.title}
        </button>
        <div style={{ marginBottom: 30, maxWidth: 780 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginBottom: 14 }}>
            <Tag color={th.c}>{topic.emoji}&nbsp;&nbsp;Thématique {idx + 1}/{topics.length}</Tag>
            <Pill color={T.textFaint}>⏱ ~{minutes} min de lecture</Pill>
            {read[`${pageId}/${openId}`] && <Pill color={T.brand}>✓ Lu</Pill>}
          </div>
          <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(30px,5.5vw,48px)", lineHeight: 1.05, margin: "8px 0 14px", color: T.text, letterSpacing: -0.5 }}>{topic.title}</h1>
          <p style={{ fontSize: "clamp(15px,2.1vw,18px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>{topic.intro}</p>
        </div>
        {topic.content}
        {/* Navigation */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36, paddingTop: 24, borderTop: `1px solid ${T.line}` }}>
          {idx > 0 && (
            <button onClick={() => onOpen(topics[idx - 1].id)} style={{ ...btn(th.c), flex: 1, minWidth: 200, textAlign: "left" }}>
              ← {topics[idx - 1].title}
            </button>
          )}
          {idx < topics.length - 1 && (
            <button onClick={() => onOpen(topics[idx + 1].id)} style={{ ...btn(th.c, true), flex: 1, minWidth: 200, textAlign: "right" }}>
              {topics[idx + 1].title} →
            </button>
          )}
        </div>
        <Disclaimer compact />
      </div>
    );
  }

  // Vue liste
  const readCount = topics.filter((t) => read[`${pageId}/${t.id}`]).length;
  return (
    <div>
      <div style={{ marginBottom: 34, maxWidth: 780 }}>
        <Tag color={th.c}>{th.emoji}&nbsp;&nbsp;{th.tag}</Tag>
        <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(34px,6vw,56px)", lineHeight: 1.04, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>{th.title}</h1>
        <p style={{ fontSize: "clamp(16px,2.2vw,19px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>{th.intro}</p>
        {readCount > 0 && (
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, maxWidth: 260, height: 6, borderRadius: 99, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(readCount / topics.length) * 100}%`, background: `linear-gradient(90deg, ${th.c}, ${T.brand})`, transition: "width .6s" }} />
            </div>
            <span style={{ fontSize: 13, color: T.textDim }}>{readCount}/{topics.length} thématiques lues</span>
          </div>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16 }}>
        {topics.map((t, i) => {
          const isRead = read[`${pageId}/${t.id}`];
          return (
            <Card key={t.id} hover accent={th.c} onClick={() => onOpen(t.id)} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 28, width: 50, height: 50, borderRadius: 14, display: "grid", placeItems: "center", background: `${th.c}1A`, border: `1px solid ${th.c}33` }}>{t.emoji}</span>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  {isRead && <span style={{ width: 22, height: 22, borderRadius: 99, background: `${T.brand}22`, color: T.brand, display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800 }}>✓</span>}
                  <span style={{ fontFamily: T.serif, color: T.textFaint, fontSize: 15 }}>0{i + 1}</span>
                </div>
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 19, color: T.text, fontWeight: 700, lineHeight: 1.25 }}>{t.title}</h3>
              <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: T.textDim, flex: 1 }}>{t.summary}</p>
              <span style={{ color: th.c, fontWeight: 700, fontSize: 14.5 }}>Approfondir →</span>
            </Card>
          );
        })}
      </div>
      <Disclaimer />
    </div>
  );
}
