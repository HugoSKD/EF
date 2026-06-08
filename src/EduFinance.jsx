import React, { useState, useMemo, useEffect, useRef } from "react";

// ============================================================
//  EduFinance — Plateforme d'éducation financière
//  Projet Ingénieur Citoyen — Hugo HEYMES
//  Architecture : onglet → thématiques → leçon détaillée
//  Vocation strictement éducative. Aucun conseil personnalisé.
// ============================================================

const T = {
  bg: "#0B1120", bgSoft: "#111A2E", surface: "#16213A", surfaceHi: "#1D2A47",
  line: "rgba(255,255,255,0.08)", text: "#EAF0FB", textDim: "#9AA8C2", textFaint: "#67748F",
  brand: "#5EE8C4", brand2: "#7CA8FF", accent: "#FFB454", coral: "#FF7A7A", violet: "#B79CFF",
  serif: "'Fraunces', Georgia, serif", sans: "'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif",
};

const PAGES = [
  { id: "accueil", label: "Accueil" },
  { id: "budget", label: "Budget" },
  { id: "epargne", label: "Épargne" },
  { id: "invest", label: "Investissement" },
  { id: "crypto", label: "Crypto & Web3" },
  { id: "calculateur", label: "Calculateur" },
];

const THEME = {
  budget: { c: T.brand2, emoji: "📊", tag: "Les fondamentaux", title: "Maîtriser son budget", intro: "Le budget est la fondation de toute santé financière. Choisis une thématique pour l'approfondir à ton rythme." },
  epargne: { c: T.brand, emoji: "🌱", tag: "Faire fructifier", title: "Épargner intelligemment", intro: "Transformer l'épargne en système plutôt qu'en effort de volonté. Quatre thématiques pour tout comprendre." },
  invest: { c: T.coral, emoji: "📈", tag: "Les marchés", title: "Comprendre l'investissement", intro: "Comprendre les outils, les principes et les pièges — jamais pour te dire quoi acheter. Choisis ton sujet." },
  crypto: { c: T.violet, emoji: "🪙", tag: "Technologies financières", title: "Décrypter la crypto & le Web3", intro: "Comprendre comment ça marche, et surtout repérer les pièges. Quatre thématiques pour y voir clair." },
  calculateur: { c: T.accent, emoji: "🧮", tag: "Outil interactif", title: "Calculateur d'intérêts composés", intro: "" },
};

const euro = (n) => Math.round(n).toLocaleString("fr-FR") + " €";

// ============================================================
//  Hook : animation au scroll
// ============================================================
function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [seen, threshold]);
  return [ref, seen];
}

// ============================================================
//  UI de base
// ============================================================
function Tag({ children, color = T.brand }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color, padding: "6px 12px", borderRadius: 999, background: `${color}14`, border: `1px solid ${color}33` }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: color }} />
      {children}
    </span>
  );
}

function Card({ children, style, hover, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: T.surface, border: `1px solid ${h && hover ? "rgba(94,232,196,0.4)" : T.line}`, borderRadius: 18, padding: 26, transition: "all .25s ease", transform: h && hover ? "translateY(-4px)" : "none", boxShadow: h && hover ? "0 18px 40px -18px rgba(0,0,0,0.7)" : "0 1px 0 rgba(255,255,255,0.03)", cursor: onClick ? "pointer" : "default", ...style }}>
      {children}
    </div>
  );
}

function Chapter({ n, title, color = T.brand, children }) {
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

function P({ children }) { return <p style={{ fontSize: 16, lineHeight: 1.78, color: "#C4D0E6", margin: "0 0 16px" }}>{children}</p>; }
function B({ children }) { return <strong style={{ color: T.text }}>{children}</strong>; }

function Note({ children, color = T.accent, title = "À retenir" }) {
  return (
    <div style={{ borderLeft: `3px solid ${color}`, background: `${color}10`, borderRadius: "0 12px 12px 0", padding: "14px 18px", margin: "20px 0" }}>
      <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 15, lineHeight: 1.68, color: "#D5DEEF" }}>{children}</div>
    </div>
  );
}

function DeepDive({ title = "Pour aller plus loin", children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px dashed ${T.brand}55`, borderRadius: 14, margin: "20px 0", background: "rgba(94,232,196,0.04)", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ all: "unset", cursor: "pointer", width: "100%", boxSizing: "border-box", padding: "13px 18px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: T.brand, fontSize: 16, transform: open ? "rotate(90deg)" : "none", transition: "transform .2s" }}>▸</span>
        <span style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: T.brand }}>🔬 {title}</span>
      </button>
      <div style={{ maxHeight: open ? 800 : 0, transition: "max-height .35s ease", overflow: "hidden" }}>
        <div style={{ padding: "0 18px 16px 40px", fontSize: 14.5, lineHeight: 1.7, color: T.textDim }}>{children}</div>
      </div>
    </div>
  );
}

function List({ items, color = T.brand }) {
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

function Disclaimer({ compact }) {
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

function VizCaption({ children }) { return <div style={{ fontSize: 12.5, color: T.textFaint, textAlign: "center", marginTop: 12, fontStyle: "italic" }}>{children}</div>; }
function Legend({ color, label }) { return <span style={{ display: "flex", alignItems: "center", gap: 7, color: T.textDim }}><span style={{ width: 12, height: 12, background: color, borderRadius: 3 }} />{label}</span>; }
function VizFrame({ title, children }) {
  return (
    <Card style={{ margin: "8px 0 4px", background: T.bgSoft }}>
      {title && <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: T.textFaint, marginBottom: 18, textAlign: "center" }}>{title}</div>}
      {children}
    </Card>
  );
}

// ============================================================
//  VISUALISATIONS ANIMÉES
// ============================================================
function DonutChart({ data, size = 220 }) {
  const [ref, seen] = useInView();
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = size / 2 - 18, cx = size / 2, cy = size / 2, C = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div ref={ref} style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={26} />
        {data.map((d, i) => {
          const frac = d.value / total, dash = seen ? frac * C : 0;
          const el = <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={26} strokeDasharray={`${dash} ${C}`} strokeDashoffset={-offset} style={{ transition: `stroke-dasharray 1s cubic-bezier(.22,1,.36,1) ${i * 0.2}s` }} />;
          offset += seen ? frac * C : 0;
          return el;
        })}
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: d.color }} />
            <span style={{ fontSize: 15, color: T.text, fontWeight: 700 }}>{d.value}%</span>
            <span style={{ fontSize: 14, color: T.textDim }}>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthLine({ width = 560, height = 260, monthly = 150, rate = 0.06, years = 30 }) {
  const [ref, seen] = useInView();
  const pts = useMemo(() => {
    const arr = []; let bal = 0, contrib = 0;
    for (let y = 0; y <= years; y++) { arr.push({ y, bal, contrib }); for (let m = 0; m < 12; m++) { bal = bal * (1 + rate / 12) + monthly; contrib += monthly; } }
    return arr;
  }, [monthly, rate, years]);
  const maxV = pts[pts.length - 1].bal;
  const px = (i) => 44 + (i / years) * (width - 60);
  const py = (v) => height - 34 - (v / maxV) * (height - 56);
  const path = (key) => pts.map((p, i) => `${i === 0 ? "M" : "L"} ${px(i)} ${py(p[key])}`).join(" ");
  const lineRef = useRef(null);
  const [len, setLen] = useState(0);
  useEffect(() => { if (lineRef.current) setLen(lineRef.current.getTotalLength()); }, []);
  return (
    <div ref={ref}>
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: width }}>
        {[0, 0.25, 0.5, 0.75, 1].map((g, i) => (
          <g key={i}>
            <line x1={44} x2={width - 16} y1={py(maxV * g)} y2={py(maxV * g)} stroke="rgba(255,255,255,0.06)" />
            <text x={6} y={py(maxV * g) + 4} fill={T.textFaint} fontSize={10}>{Math.round(maxV * g / 1000)}k</text>
          </g>
        ))}
        <path d={`${path("contrib")} L ${px(years)} ${py(0)} L ${px(0)} ${py(0)} Z`} fill="rgba(255,255,255,0.05)" opacity={seen ? 1 : 0} style={{ transition: "opacity 1s 1s" }} />
        <path d={path("contrib")} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2} strokeDasharray="5 4" opacity={seen ? 1 : 0} style={{ transition: "opacity .8s 1s" }} />
        <path ref={lineRef} d={path("bal")} fill="none" stroke={T.brand} strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={seen ? 0 : len} style={{ transition: "stroke-dashoffset 1.8s ease" }} />
        <text x={px(years)} y={py(pts[years].bal) - 10} fill={T.brand} fontSize={12} fontWeight="700" textAnchor="end" opacity={seen ? 1 : 0} style={{ transition: "opacity .5s 1.6s" }}>{euro(pts[years].bal)}</text>
        <text x={px(years)} y={py(pts[years].contrib) + 16} fill={T.textDim} fontSize={11} textAnchor="end" opacity={seen ? 1 : 0} style={{ transition: "opacity .5s 1.6s" }}>versé : {euro(pts[years].contrib)}</text>
      </svg>
    </div>
  );
}

function RiskBars({ data }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {data.map((d, i) => (
        <div key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 14.5, color: T.text, fontWeight: 700 }}>{d.label}</span>
            <span style={{ fontSize: 12.5, color: d.color }}>risque {d.risk}/5 · rendement {d.ret}/5</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Bar pct={(d.risk / 5) * 100} color={T.coral} seen={seen} delay={i * 0.12} label="risque" />
            <Bar pct={(d.ret / 5) * 100} color={T.brand} seen={seen} delay={i * 0.12 + 0.06} label="rendement" />
          </div>
        </div>
      ))}
    </div>
  );
}
function Bar({ pct, color, seen, delay, label }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ height: 22, borderRadius: 7, background: "rgba(255,255,255,0.05)", overflow: "hidden", position: "relative" }}>
        <div style={{ height: "100%", width: seen ? `${pct}%` : 0, background: `linear-gradient(90deg, ${color}88, ${color})`, borderRadius: 7, transition: `width .9s cubic-bezier(.22,1,.36,1) ${delay}s` }} />
        <span style={{ position: "absolute", left: 9, top: 3, fontSize: 11, color: T.textFaint }}>{label}</span>
      </div>
    </div>
  );
}

function CountUp({ to, suffix = "", duration = 1400 }) {
  const [ref, seen] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf, start;
    const step = (t) => { if (!start) start = t; const p = Math.min((t - start) / duration, 1); setVal(to * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{Math.round(val).toLocaleString("fr-FR")}{suffix}</span>;
}

function InflationViz() {
  const [ref, seen] = useInView();
  const years = [0, 5, 10, 15, 20];
  const data = years.map((y) => ({ y, saving: 1000 * Math.pow(1.01, y), real: 1000 * Math.pow(1.01, y) / Math.pow(1.02, y) }));
  const max = 1000;
  return (
    <div ref={ref}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: 180, gap: 10 }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 150, width: "100%", justifyContent: "center" }}>
              <div title="Solde nominal" style={{ width: 16, height: seen ? `${(d.saving / max) * 100}%` : 0, background: T.brand2, borderRadius: "4px 4px 0 0", transition: `height .8s ${i * 0.1}s` }} />
              <div title="Pouvoir d'achat réel" style={{ width: 16, height: seen ? `${(d.real / max) * 100}%` : 0, background: T.coral, borderRadius: "4px 4px 0 0", transition: `height .8s ${i * 0.1 + 0.05}s` }} />
            </div>
            <span style={{ fontSize: 11, color: T.textFaint }}>{d.y} ans</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: 14, fontSize: 13, flexWrap: "wrap" }}>
        <Legend color={T.brand2} label="Solde affiché (1 %/an)" />
        <Legend color={T.coral} label="Pouvoir d'achat réel (inflation 2 %)" />
      </div>
    </div>
  );
}

// Barres verticales animées génériques
function VBars({ data, max, unit = "" }) {
  const [ref, seen] = useInView();
  const m = max || Math.max(...data.map((d) => d.v));
  return (
    <div ref={ref}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: 180, gap: 12 }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12.5, color: d.color || T.brand, fontWeight: 700, opacity: seen ? 1 : 0, transition: `opacity .4s ${i * 0.1 + 0.5}s` }}>{d.v.toLocaleString("fr-FR")}{unit}</span>
            <div style={{ width: "70%", maxWidth: 54, height: seen ? `${(d.v / m) * 130}px` : 0, background: `linear-gradient(180deg, ${d.color || T.brand}, ${d.color2 || T.brand2})`, borderRadius: "6px 6px 0 0", transition: `height .9s cubic-bezier(.22,1,.36,1) ${i * 0.1}s` }} />
            <span style={{ fontSize: 11.5, color: T.textFaint, textAlign: "center", lineHeight: 1.3 }}>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function btn(color, filled) {
  return { background: filled ? color : "transparent", color: filled ? T.bg : color, border: `1.5px solid ${color}`, borderRadius: 12, padding: "13px 22px", fontSize: 15.5, fontWeight: 700, cursor: "pointer", transition: "all .2s" };
}

// ============================================================
//  Page thématique générique : liste OU leçon
// ============================================================
function TopicHub({ pageId, topics, openId, onOpen, onBack }) {
  const th = THEME[pageId];
  // Vue leçon
  if (openId != null) {
    const topic = topics.find((t) => t.id === openId);
    const idx = topics.findIndex((t) => t.id === openId);
    return (
      <div>
        <button onClick={onBack} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, color: T.textDim, fontSize: 14.5, fontWeight: 600, marginBottom: 22 }}>
          ← Retour aux thématiques · {th.title}
        </button>
        <div style={{ marginBottom: 30, maxWidth: 780 }}>
          <Tag color={th.c}>{topic.emoji}&nbsp;&nbsp;Thématique {idx + 1}/{topics.length}</Tag>
          <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(30px,5.5vw,48px)", lineHeight: 1.05, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>{topic.title}</h1>
          <p style={{ fontSize: "clamp(15px,2.1vw,18px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>{topic.intro}</p>
        </div>
        {topic.content}
        {/* Navigation entre thématiques */}
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
  // Vue liste de thématiques
  return (
    <div>
      <div style={{ marginBottom: 34, maxWidth: 780 }}>
        <Tag color={th.c}>{th.emoji}&nbsp;&nbsp;{th.tag}</Tag>
        <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(34px,6vw,56px)", lineHeight: 1.04, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>{th.title}</h1>
        <p style={{ fontSize: "clamp(16px,2.2vw,19px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>{th.intro}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16 }}>
        {topics.map((t, i) => (
          <Card key={t.id} hover onClick={() => onOpen(t.id)} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 28, width: 50, height: 50, borderRadius: 14, display: "grid", placeItems: "center", background: `${th.c}1A`, border: `1px solid ${th.c}33` }}>{t.emoji}</span>
              <span style={{ fontFamily: T.serif, color: T.textFaint, fontSize: 15 }}>0{i + 1}</span>
            </div>
            <h3 style={{ margin: "0 0 8px", fontSize: 19, color: T.text, fontWeight: 700, lineHeight: 1.25 }}>{t.title}</h3>
            <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: T.textDim, flex: 1 }}>{t.summary}</p>
            <span style={{ color: th.c, fontWeight: 700, fontSize: 14.5 }}>Approfondir →</span>
          </Card>
        ))}
      </div>
      <Disclaimer />
    </div>
  );
}


// ============================================================
//  THÉMATIQUES — BUDGET
// ============================================================
const BUDGET_TOPICS = [
  {
    id: "flux", emoji: "💸", title: "Comprendre ses flux d'argent",
    summary: "Revenus, dépenses fixes et variables : la cartographie de base avant tout le reste.",
    intro: "Avant toute méthode, il faut voir clair : d'où vient l'argent, où il part, et sur quoi tu peux vraiment agir.",
    content: (
      <div>
        <Chapter n="1" title="Entrées et sorties" color={T.brand2}>
          <P>Tout budget repose sur une idée simple : comparer ce qui <B>entre</B> (salaire, bourse, aides, revenus annexes) et ce qui <B>sort</B>. L'objectif n'est pas de tout calculer au centime, mais d'avoir une vision d'ensemble pour ne plus subir ses finances.</P>
        </Chapter>
        <Chapter n="2" title="Fixe vs variable" color={T.brand2}>
          <P>On sépare les dépenses en deux familles. Les <B>dépenses fixes</B> reviennent chaque mois pour un montant prévisible : loyer, abonnements, assurances, remboursements. Les <B>dépenses variables</B> fluctuent : courses, sorties, loisirs, vêtements.</P>
          <P>C'est presque toujours sur les variables que se jouent les ajustements, car les fixes sont difficiles à modifier à court terme. Connaître la proportion fixe/variable de ton budget te dit immédiatement quelle est ta marge de manœuvre réelle.</P>
        </Chapter>
        <Chapter n="3" title="« Se payer en premier »" color={T.brand2}>
          <P>Une règle d'or change tout : plutôt qu'épargner « ce qu'il reste » en fin de mois (souvent zéro), on met de côté <B>dès la réception du revenu</B>, puis on vit avec le reste. C'est le principe « pay yourself first ».</P>
          <Note color={T.brand2}>Cette inversion mentale est étonnamment puissante : ton épargne devient une dépense « obligatoire » comme le loyer, au lieu d'une variable d'ajustement sacrifiée au premier imprévu.</Note>
        </Chapter>
      </div>
    ),
  },
  {
    id: "503020", emoji: "🥧", title: "La méthode 50/30/20",
    summary: "Un cadre simple et visuel pour répartir un revenu net entre besoins, envies et avenir.",
    intro: "Popularisée par Elizabeth Warren, cette méthode propose trois grandes enveloppes pour visualiser un équilibre sain.",
    content: (
      <div>
        <Chapter n="1" title="Le principe en trois enveloppes" color={T.brand2}>
          <VizFrame title="Répartition cible d'un revenu net">
            <DonutChart data={[{ label: "Besoins essentiels", value: 50, color: T.brand2 }, { label: "Envies & plaisirs", value: 30, color: T.brand }, { label: "Épargne & dettes", value: 20, color: T.accent }]} />
            <VizCaption>Un cadre indicatif — à adapter à ta situation réelle.</VizCaption>
          </VizFrame>
          <List items={[{ t: "50 % — Besoins", d: "Le vital : logement, alimentation, transport, factures, santé, minimum des dettes." }, { t: "30 % — Envies", d: "Ce qui améliore la vie sans être indispensable : restaurants, loisirs, abonnements, shopping." }, { t: "20 % — Avenir", d: "Épargne, fonds d'urgence et remboursement accéléré des dettes au-delà du minimum." }]} color={T.brand2} />
        </Chapter>
        <Chapter n="2" title="Adapter à sa réalité" color={T.brand2}>
          <P>Ces ratios ne sont pas gravés dans le marbre. Dans une grande ville où le loyer engloutit 45 % du revenu, viser 50 % de besoins est irréaliste : on parlera plutôt de 60/20/20, voire 70/15/15 en début de carrière.</P>
          <DeepDive>L'important n'est pas le chiffre exact mais d'avoir <B>une intention consciente</B> pour chaque euro. Certaines variantes ajoutent une 4ᵉ enveloppe « générosité/dons », d'autres séparent l'épargne de précaution de l'épargne d'investissement. La méthode « zéro-based budgeting » va plus loin : chaque euro reçoit une mission jusqu'à ce que le solde planifié atteigne zéro.</DeepDive>
        </Chapter>
      </div>
    ),
  },
  {
    id: "suivi", emoji: "🔍", title: "Suivre ses dépenses",
    summary: "L'exercice du mois : traquer les fuites invisibles et reprendre le contrôle sans se priver.",
    intro: "Le levier le plus puissant et le plus simple. La prise de conscience suffit souvent à changer les comportements.",
    content: (
      <div>
        <Chapter n="1" title="L'exercice des 30 jours" color={T.brand2}>
          <P>Note <B>chaque dépense pendant 30 jours</B>. Une appli de banque, un tableur, ou même un carnet suffisent. La plupart des gens découvrent alors des « fuites » invisibles : abonnements oubliés, micro-achats quotidiens, livraisons impulsives.</P>
        </Chapter>
        <Chapter n="2" title="Cibler les 3 plus gros postes" color={T.brand2}>
          <P>Le réflexe gagnant : classer les dépenses par catégorie et regarder les <B>trois plus gros postes</B>. C'est là que se trouvent les vrais leviers — bien plus que dans le café du matin, qui pèse souvent beaucoup moins qu'on ne le croit.</P>
          <VizFrame title="Où part vraiment l'argent (exemple type)">
            <VBars data={[{ label: "Logement", v: 700, color: T.brand2 }, { label: "Courses", v: 320, color: T.brand }, { label: "Transport", v: 180, color: T.accent }, { label: "Loisirs", v: 150, color: T.violet }, { label: "Café/snacks", v: 60, color: T.coral }]} unit=" €" />
            <VizCaption>Réduire de 10 % le logement libère plus que supprimer tous les cafés.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="3" title="Dépenser selon ses valeurs" color={T.brand2}>
          <Note color={T.brand2} title="Astuce psychologie">Distinguer « dépense plaisir assumée » et « dépense automatique non réfléchie » change tout. Le but n'est pas de se priver, mais de dépenser <em>en accord avec ses valeurs</em>.</Note>
        </Chapter>
      </div>
    ),
  },
  {
    id: "urgence", emoji: "🛟", title: "Le fonds d'urgence",
    summary: "La réserve de sécurité qui évite l'endettement au premier imprévu. La priorité n°1.",
    intro: "Avant même de penser à épargner pour le plaisir ou à investir, on bâtit son matelas de sécurité.",
    content: (
      <div>
        <Chapter n="1" title="Pourquoi c'est prioritaire" color={T.brand2}>
          <P>Une réserve couvrant <B>3 à 6 mois de dépenses essentielles</B>, placée sur un support immédiatement disponible, évite de s'endetter au premier imprévu — panne, perte d'emploi, frais de santé — qui, sinon, peut faire basculer tout un équilibre.</P>
        </Chapter>
        <Chapter n="2" title="Le construire par paliers" color={T.brand2}>
          <List items={[{ t: "Palier 1", d: "Viser 1 000 € le plus vite possible : il absorbe la majorité des imprévus courants." }, { t: "Palier 2", d: "Compléter jusqu'à 3 mois de dépenses, puis 6 si ta situation est instable (CDD, freelance)." }, { t: "Palier 3", d: "Le garder sur un support liquide et garanti — son rôle est la sécurité, pas le rendement." }]} color={T.brand2} />
          <Note color={T.brand2}>Même 500 € de réserve changent radicalement ta capacité à encaisser un coup dur sans recourir au crédit à la consommation.</Note>
        </Chapter>
        <Chapter n="3" title="Les pièges qui ruinent un budget" color={T.coral}>
          <List items={[{ t: "Le crédit conso pour du confort", d: "Ses taux élevés transforment un achat ponctuel en dette qui dure des années." }, { t: "Les abonnements zombies", d: "Streaming, applis, salles de sport inutilisées : un audit annuel suffit à les éliminer." }, { t: "L'inflation du train de vie", d: "Quand le revenu monte, les dépenses suivent et l'épargne reste à zéro. Le piège n°1 des jeunes actifs." }]} color={T.coral} />
          <DeepDive title="Le piège de l'inflation du train de vie">Tu passes de 1 800 € à 2 400 € net : génial. Mais en six mois, un loyer plus grand et des sorties plus fréquentes absorbent toute la hausse. Malgré +33 % de revenu, ton épargne n'a pas bougé. La parade : <B>« verrouiller » une partie de chaque augmentation</B> vers l'épargne automatique avant de s'habituer au nouveau niveau de vie.</DeepDive>
        </Chapter>
      </div>
    ),
  },
];
function Budget(p) { return <TopicHub pageId="budget" topics={BUDGET_TOPICS} {...p} />; }

// ============================================================
//  THÉMATIQUES — ÉPARGNE
// ============================================================
const EPARGNE_TOPICS = [
  {
    id: "vs", emoji: "⚖️", title: "Épargne ou investissement ?",
    summary: "Deux outils, deux besoins. Savoir quand l'argent doit rester sûr et quand il peut prendre des risques.",
    intro: "Avant de placer le moindre euro, il faut comprendre à quel besoin chaque solution répond.",
    content: (
      <div>
        <Chapter n="1" title="Sécurité vs croissance" color={T.brand}>
          <P>L'<B>épargne</B> vise la sécurité et le court terme : on veut un argent disponible et stable, quitte à ce qu'il rapporte peu. L'<B>investissement</B> vise le long terme et accepte un risque pour viser un rendement supérieur.</P>
          <P>On bâtit donc d'abord son socle d'épargne (le fonds d'urgence), puis on investit le surplus dont on n'a pas besoin avant plusieurs années.</P>
        </Chapter>
        <Chapter n="2" title="La règle des horizons" color={T.brand}>
          <Note color={T.brand}>L'argent dont tu pourrais avoir besoin dans moins de 3-5 ans n'a en général pas sa place sur des supports risqués : tu pourrais être forcé de vendre au pire moment, en pleine baisse.</Note>
        </Chapter>
      </div>
    ),
  },
  {
    id: "composes", emoji: "❄️", title: "Les intérêts composés",
    summary: "Le concept le plus important de toute l'épargne : l'effet boule de neige qui s'envole avec le temps.",
    intro: "Comprendre cet unique mécanisme change radicalement le rapport à l'argent et au temps.",
    content: (
      <div>
        <Chapter n="1" title="L'effet boule de neige" color={T.brand}>
          <P>Les <B>intérêts composés</B>, ce sont les intérêts qui produisent à leur tour des intérêts. Chaque année, tu gagnes du rendement non seulement sur ton capital, mais aussi sur les gains déjà accumulés. L'effet est modeste au début… puis devient spectaculaire avec le temps.</P>
          <VizFrame title="150 €/mois à 6 % pendant 30 ans">
            <GrowthLine />
            <VizCaption>La courbe verte (valeur totale) s'envole au-dessus de la ligne pointillée (versements) : tout l'écart vient des intérêts composés.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="Le temps &gt; le montant" color={T.brand}>
          <Note color={T.brand}>Commencer tôt avec de petites sommes bat généralement le fait de commencer tard avec de gros versements. Va tester le <B>Calculateur</B> pour le voir en direct.</Note>
          <DeepDive title="La formule et la règle de 72">La valeur future s'écrit <B>VF = VP × (1 + r)ⁿ</B>, où VP est le capital de départ, r le taux par période et n le nombre de périodes. Astuce mentale célèbre, la <B>règle de 72</B> : divise 72 par le taux annuel (%) pour estimer en combien d'années ton capital double. À 6 %, c'est ≈ 12 ans ; à 8 %, ≈ 9 ans.</DeepDive>
        </Chapter>
      </div>
    ),
  },
  {
    id: "supports", emoji: "🏦", title: "Les supports d'épargne",
    summary: "Livrets, assurance-vie, plans dédiés : comprendre le trio disponibilité / rendement / risque.",
    intro: "Un tour d'horizon des grandes familles de supports, sans recommander de produit précis.",
    content: (
      <div>
        <Chapter n="1" title="Les grandes familles" color={T.brand}>
          <List items={[{ t: "Livrets réglementés", d: "Argent disponible à tout moment, capital garanti, mais rendement faible. Idéal pour le fonds d'urgence." }, { t: "Assurance-vie", d: "Enveloppe souple à horizon long, qui peut contenir des supports plus ou moins risqués. Fiscalité avantageuse dans la durée." }, { t: "Plans d'épargne dédiés", d: "Logement, retraite, salariale… chacun a ses règles, plafonds et fiscalité, à étudier au cas par cas." }, { t: "Comptes à terme", d: "Argent bloqué une durée définie contre un taux connu d'avance." }]} color={T.brand} />
        </Chapter>
        <Chapter n="2" title="Le triangle des compromis" color={T.brand}>
          <P>Chaque support se juge sur trois critères : <B>disponibilité</B>, <B>rendement</B> et <B>risque</B>. Améliorer l'un se fait presque toujours au détriment d'un autre. L'objectif n'est pas de te dire lequel choisir, mais que tu saches ce que tu compares.</P>
        </Chapter>
      </div>
    ),
  },
  {
    id: "inflation", emoji: "🔥", title: "Inflation & automatisation",
    summary: "L'ennemi silencieux du pouvoir d'achat, et la stratégie pour épargner sans effort de volonté.",
    intro: "Pourquoi l'argent qui dort s'appauvrit, et comment transformer l'épargne en simple réglage.",
    content: (
      <div>
        <Chapter n="1" title="L'ennemi silencieux : l'inflation" color={T.coral}>
          <P>L'argent qui « dort » perd du pouvoir d'achat. Si les prix montent de 2 % par an et que ton épargne rapporte 1 %, tu t'appauvris en réalité de ~1 % par an, même si le chiffre sur ton compte augmente.</P>
          <VizFrame title="1 000 € à 1 % face à 2 % d'inflation">
            <InflationViz />
            <VizCaption>Le solde affiché grimpe doucement, mais le pouvoir d'achat réel s'érode dans le temps.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="Automatiser pour réussir sans effort" color={T.brand}>
          <P>La meilleure stratégie d'épargne est celle que tu n'as pas à décider chaque mois. Un <B>virement automatique</B> le jour de la paie transforme une question de volonté en simple réglage technique.</P>
          <List items={["Mets en place un virement automatique le lendemain de la réception du salaire.", "Commence petit (même 20 €) : l'habitude compte plus que le montant.", "Augmente le montant à chaque hausse de revenu, avant de t'habituer au nouveau niveau de vie."]} color={T.brand} />
        </Chapter>
      </div>
    ),
  },
];
function Epargne(p) { return <TopicHub pageId="epargne" topics={EPARGNE_TOPICS} {...p} />; }

// ============================================================
//  THÉMATIQUES — INVESTISSEMENT
// ============================================================
const INVEST_TOPICS = [
  {
    id: "risque", emoji: "⚡", title: "La loi risque / rendement",
    summary: "La règle fondamentale à intégrer avant tout : pas de rendement élevé sans risque élevé.",
    intro: "Si tu ne retiens qu'une seule chose de tout ce parcours, que ce soit celle-ci.",
    content: (
      <div>
        <Chapter n="1" title="Aucun gain élevé sans risque" color={T.coral}>
          <P><B>Il n'existe pas de rendement élevé sans risque élevé.</B> Toute promesse de gains importants « sans risque » est, au mieux trompeuse, au pire une arnaque pure.</P>
          <P>Comprendre sa propre <B>tolérance au risque</B> — combien de baisse temporaire peux-tu encaisser sans paniquer et tout vendre ? — est aussi important que le choix des placements eux-mêmes.</P>
        </Chapter>
        <Chapter n="2" title="Visualiser l'échelle" color={T.coral}>
          <VizFrame title="Échelle risque / rendement potentiel">
            <RiskBars data={[{ label: "Livret / fonds d'urgence", risk: 1, ret: 1 }, { label: "Obligations d'État", risk: 2, ret: 2 }, { label: "ETF diversifié actions", risk: 3, ret: 4 }, { label: "Actions individuelles", risk: 4, ret: 4 }, { label: "Crypto-actifs", risk: 5, ret: 5 }]} />
            <VizCaption>Plus on cherche du rendement, plus le risque grimpe. Aucun placement ne combine sécurité totale et gros gains.</VizCaption>
          </VizFrame>
        </Chapter>
      </div>
    ),
  },
  {
    id: "actifs", emoji: "🧱", title: "Les classes d'actifs",
    summary: "Actions, obligations, ETF : ce que tu détiens réellement et pourquoi les ETF reviennent souvent.",
    intro: "Comprendre les briques de base de tout portefeuille d'investissement.",
    content: (
      <div>
        <Chapter n="1" title="Les trois grandes briques" color={T.coral}>
          <List items={[{ t: "Actions", d: "Une part de propriété dans une entreprise. Potentiel élevé sur le long terme, forte volatilité à court terme." }, { t: "Obligations", d: "Un prêt accordé à un État ou une entreprise, remboursé avec intérêts. Généralement plus stable que les actions." }, { t: "ETF indiciels", d: "Un panier qui réplique un indice entier. Diversification immédiate, frais souvent très bas." }]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="Pourquoi les ETF reviennent souvent" color={T.coral}>
          <DeepDive title="Le fonctionnement d'un ETF">Un ETF achète automatiquement des centaines d'entreprises d'un coup. Plutôt que de parier sur une seule société, tu détiens une mini-part de tout un indice. Avantages : <B>diversification instantanée</B>, frais généralement très bas (souvent moins de 0,3 %/an), et pas besoin de « choisir les gagnants ». C'est l'illustration concrète du principe « ne pas mettre tous ses œufs dans le même panier ».</DeepDive>
        </Chapter>
      </div>
    ),
  },
  {
    id: "principes", emoji: "🎯", title: "Les principes qui marchent",
    summary: "Diversifier, voir long terme, surveiller les frais, investir régulièrement : le consensus des pros.",
    intro: "Quelques principes simples font l'objet d'un large consensus, même chez ceux qui ne sont d'accord sur rien d'autre.",
    content: (
      <div>
        <Chapter n="1" title="Trois principes de consensus" color={T.coral}>
          <List items={[{ t: "Diversifier", d: "Répartir entre plusieurs entreprises, secteurs et zones réduit l'impact d'un accident isolé." }, { t: "Voir long terme", d: "Sur des années, le temps lisse une grande partie de la volatilité. Les décisions impulsives lors des baisses sont une cause majeure de pertes." }, { t: "Surveiller les frais", d: "Des frais de 2 %/an amputent une part énorme du capital final sur des décennies. À rendement égal, le moins cher gagne." }]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="L'investissement régulier (DCA)" color={T.brand}>
          <Note color={T.brand}>Verser la même somme chaque mois, quoi qu'il arrive, permet d'acheter « plus quand c'est bas, moins quand c'est haut » sans avoir à deviner le marché. On appelle ça l'investissement programmé (DCA, <em>dollar-cost averaging</em>).</Note>
        </Chapter>
      </div>
    ),
  },
  {
    id: "psycho", emoji: "🧠", title: "Psychologie & check-list",
    summary: "Ton cerveau est ton pire ennemi en bourse. Les biais à connaître et la check-list avant de se lancer.",
    intro: "Investir est autant une affaire de comportement que de chiffres. Voici comment ne pas se saboter.",
    content: (
      <div>
        <Chapter n="1" title="Les biais qui coûtent cher" color={T.violet}>
          <P>Le cerveau humain est mal câblé pour les marchés : il pousse à acheter quand tout va bien (cher) et à vendre quand tout va mal (bas).</P>
          <List items={[{ t: "Le FOMO", d: "La peur de rater pousse à acheter au sommet d'une euphorie, juste avant la chute." }, { t: "La vente panique", d: "Lors d'une baisse, la peur fait vendre à perte ce qu'il aurait souvent fallu conserver." }, { t: "L'excès de confiance", d: "Croire qu'on peut « battre le marché », ce que même les pros réussissent rarement." }, { t: "Les influenceurs", d: "Beaucoup sont rémunérés pour promouvoir un produit. Un conseil gratuit a souvent un coût caché." }]} color={T.violet} />
        </Chapter>
        <Chapter n="2" title="La check-list avant de se lancer" color={T.coral}>
          <List items={["Mon fonds d'urgence (3-6 mois) est-il déjà constitué ?", "Puis-je laisser cet argent investi au moins 5 ans sans en avoir besoin ?", "Ai-je accepté de pouvoir voir la valeur baisser temporairement ?", "Les frais du support sont-ils raisonnables et transparents ?"]} color={T.coral} />
          <Note color={T.coral} title="Avertissement clé">Les performances passées ne préjugent jamais des performances futures. Aucun placement présenté ici n'est une recommandation : ce sont des catégories à comprendre, pas des incitations à acheter.</Note>
        </Chapter>
      </div>
    ),
  },
];
function Invest(p) { return <TopicHub pageId="invest" topics={INVEST_TOPICS} {...p} />; }

// ============================================================
//  THÉMATIQUES — CRYPTO & WEB3
// ============================================================
const CRYPTO_TOPICS = [
  {
    id: "bases", emoji: "🔗", title: "Les bases sans jargon",
    summary: "Blockchain, cryptomonnaie, Web3 : enfin des définitions claires pour comprendre de quoi on parle.",
    intro: "Avant de juger, comprendre. Voici les briques de base expliquées simplement.",
    content: (
      <div>
        <Chapter n="1" title="Trois mots à connaître" color={T.violet}>
          <List items={[{ t: "Blockchain", d: "Un grand registre numérique partagé et décentralisé. Au lieu d'une banque qui tient les comptes, ce sont des milliers d'ordinateurs qui valident et conservent chaque transaction — ce qui rend la falsification très difficile." }, { t: "Cryptomonnaie", d: "Un actif numérique qui circule sur une blockchain (Bitcoin, Ethereum…). Sa valeur dépend uniquement de l'offre et de la demande : pas d'usine ou de bénéfices derrière." }, { t: "Web3", d: "Un ensemble d'applications bâties sur la blockchain : finance décentralisée (DeFi), NFT, portefeuilles numériques, organisations autonomes (DAO)." }]} color={T.violet} />
        </Chapter>
        <Chapter n="2" title="Décentralisé, concrètement ?" color={T.violet}>
          <DeepDive title="Ce que « décentralisé » implique vraiment">Dans le système classique, ta banque est un tiers de confiance qui garde la trace de qui possède quoi. Sur une blockchain, ce rôle est réparti entre de nombreux participants. Avantage théorique : pas d'autorité unique qui peut censurer. Revers : <B>pas de service client, pas de recours en cas d'erreur ou de vol</B>, et c'est à toi seul de sécuriser tes accès.</DeepDive>
        </Chapter>
      </div>
    ),
  },
  {
    id: "risques", emoji: "🌋", title: "Pourquoi c'est si risqué",
    summary: "Volatilité extrême, faible régulation, erreurs irréversibles : trois risques qui se cumulent.",
    intro: "L'un des domaines les plus dangereux pour un débutant. Voici pourquoi, en détail.",
    content: (
      <div>
        <Chapter n="1" title="Trois risques cumulés" color={T.coral}>
          <List items={[{ t: "Volatilité extrême", d: "Il n'est pas rare qu'un crypto-actif perde 50 % ou plus en quelques semaines. Les variations de ±10 % en une journée sont banales." }, { t: "Faible régulation", d: "Peu de protections en cas de fraude, de piratage ou de faillite d'une plateforme. Si elle disparaît, tes fonds aussi." }, { t: "Risque technique irréversible", d: "Une mauvaise adresse ou une clé privée perdue entraîne une perte définitive. Aucune annulation possible." }]} color={T.coral} />
          <VizFrame title="Ampleur des variations typiques sur un an (illustration)">
            <VBars data={[{ label: "Livret", v: 2, color: T.brand }, { label: "ETF actions", v: 25, color: T.accent }, { label: "Action seule", v: 50, color: T.coral }, { label: "Crypto", v: 80, color: T.violet }]} unit=" %" max={80} />
            <VizCaption>Amplitude de variation indicative (haut-bas sur l'année). Plus la barre est haute, plus ça bouge — dans les deux sens.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="La règle d'or" color={T.violet}>
          <Note color={T.violet} title="Règle de prudence">N'engage jamais une somme que tu ne peux pas te permettre de perdre <B>entièrement</B>. Cette règle, partagée par tous les observateurs sérieux, est encore plus vraie ici qu'ailleurs.</Note>
        </Chapter>
      </div>
    ),
  },
  {
    id: "arnaques", emoji: "🚨", title: "Repérer les arnaques",
    summary: "Le sujet le plus important : les signaux d'alerte qui doivent te faire fuir immédiatement.",
    intro: "Les escroqueries sont massives dans ce domaine. Savoir les reconnaître est la meilleure protection.",
    content: (
      <div>
        <Chapter n="1" title="Les signaux d'alerte" color={T.coral}>
          <List items={[{ t: "Rendements « garantis »", d: "Toute promesse de gains fixes et élevés sans risque est presque toujours une arnaque (type pyramide de Ponzi)." }, { t: "Urgence et pression", d: "« Dépêche-toi », « tu vas rater l'occasion » : la précipitation est conçue pour t'empêcher de réfléchir." }, { t: "Opacité totale", d: "Équipe anonyme, documentation floue, projet invérifiable : autant de drapeaux rouges." }, { t: "Sollicitation directe", d: "Un inconnu qui te contacte pour t'« aider à investir », un lien à cliquer pour transférer des fonds : fuis." }]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="Une arnaque en plein essor" color={T.coral}>
          <DeepDive title="L'arnaque du « pig butchering »">Un inconnu noue une relation de confiance (amitié ou romance) sur plusieurs semaines, puis propose une « opportunité crypto » exceptionnelle. La victime voit d'abord de faux gains sur une plateforme bidon, est encouragée à investir toujours plus… jusqu'à ce que tout disparaisse. La leçon : <B>ne jamais mélanger relation personnelle et conseil financier non sollicité</B>, surtout en ligne.</DeepDive>
        </Chapter>
      </div>
    ),
  },
  {
    id: "esprit", emoji: "🧭", title: "Garder l'esprit critique",
    summary: "Si on s'y intéresse malgré tout : les précautions de base et les réflexes valables partout.",
    intro: "L'esprit critique est, au fond, le meilleur outil financier qui soit — bien au-delà de la crypto.",
    content: (
      <div>
        <Chapter n="1" title="Si on s'y intéresse quand même" color={T.violet}>
          <List items={["Se former d'abord, investir ensuite — jamais l'inverse.", "N'y consacrer qu'une part minime de son patrimoine, et seulement après le fonds d'urgence.", "Privilégier les plateformes régulées et reconnues plutôt que des sites obscurs.", "Se méfier de tout ce qui est « trop beau pour être vrai » : ça l'est presque toujours."]} color={T.violet} />
        </Chapter>
        <Chapter n="2" title="Des réflexes valables partout" color={T.brand}>
          <P>Au-delà de la crypto, ces réflexes valent pour tout produit financier « miracle » : se méfier de ce qui paraît trop beau, vérifier les sources, ne jamais décider sous pression émotionnelle, et se rappeler la loi fondamentale — aucun rendement élevé n'existe sans risque correspondant.</P>
        </Chapter>
      </div>
    ),
  },
];
function Crypto(p) { return <TopicHub pageId="crypto" topics={CRYPTO_TOPICS} {...p} />; }

// ============================================================
//  ACCUEIL
// ============================================================
function Accueil({ go }) {
  const cards = [
    { id: "budget", t: "Maîtriser son budget", d: "Flux d'argent, méthode 50/30/20, suivi des dépenses, fonds d'urgence.", n: 4 },
    { id: "epargne", t: "Épargner intelligemment", d: "Épargne vs invest, intérêts composés, supports, inflation & automatisation.", n: 4 },
    { id: "invest", t: "Comprendre l'investissement", d: "Risque/rendement, classes d'actifs, principes, psychologie & check-list.", n: 4 },
    { id: "crypto", t: "Décrypter la crypto & le Web3", d: "Les bases, les risques, repérer les arnaques, garder l'esprit critique.", n: 4 },
    { id: "calculateur", t: "Simuler son épargne", d: "Un calculateur d'intérêts composés interactif et visuel.", n: 0 },
  ];
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 28, border: `1px solid ${T.line}`, background: `radial-gradient(120% 120% at 0% 0%, ${T.surfaceHi} 0%, ${T.bgSoft} 55%, ${T.bg} 100%)`, padding: "clamp(32px,6vw,72px)", marginBottom: 30 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 20%, rgba(94,232,196,0.16), transparent 45%), radial-gradient(circle at 15% 90%, rgba(124,168,255,0.14), transparent 45%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 720 }}>
          <Tag>Éducation financière · gratuite · pour tous</Tag>
          <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(40px,8vw,76px)", lineHeight: 1.0, letterSpacing: -1, margin: "20px 0 18px", color: T.text }}>
            L'argent, enfin<br />
            <span style={{ background: `linear-gradient(100deg, ${T.brand}, ${T.brand2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>expliqué simplement.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px,2.5vw,20px)", lineHeight: 1.65, color: T.textDim, maxWidth: 560, margin: "0 0 30px" }}>
            Des cours clairs et gratuits sur le budget, l'épargne et l'investissement. Chaque thème se décline
            en plusieurs thématiques à approfondir à ton rythme. On vulgarise — mais on va loin pour les curieux.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => go("budget")} style={btn(T.brand, true)}>Commencer à apprendre →</button>
            <button onClick={() => go("calculateur")} style={btn(T.brand)}>Tester le calculateur</button>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, marginBottom: 36 }}>
        {[{ v: 16, s: "", c: T.brand2, d: "thématiques approfondies" }, { v: 4, s: "", c: T.brand, d: "parcours thématiques" }, { v: 100, s: " %", c: T.accent, d: "gratuit & sans publicité" }, { v: 0, s: "", c: T.coral, d: "conseil personnalisé — que de la pédagogie" }].map((x) => (
          <Card key={x.d}>
            <div style={{ fontFamily: T.serif, fontSize: 38, fontWeight: 600, color: x.c }}><CountUp to={x.v} suffix={x.s} /></div>
            <div style={{ fontSize: 13.5, color: T.textDim, marginTop: 4, lineHeight: 1.4 }}>{x.d}</div>
          </Card>
        ))}
      </div>

      <Chapter n="?" title="Pourquoi ce projet" color={T.brand}>
        <P>Les compétences financières de base sont peu enseignées dans le système éducatif traditionnel. Beaucoup de jeunes gèrent leur premier salaire sans repères, ce qui peut mener au surendettement ou, à l'inverse, à une méfiance totale faute de connaissances. EduFinance vise à <B>réduire cette inégalité d'accès à l'information</B> et à donner à chacun les clés pour décider en conscience.</P>
      </Chapter>

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
        <h2 style={{ fontFamily: T.serif, fontSize: 28, fontWeight: 600, color: T.text, margin: 0 }}>Les parcours</h2>
        <span style={{ color: T.textFaint, fontSize: 14 }}>Choisis par où commencer</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 16, marginBottom: 30 }}>
        {cards.map((c) => {
          const th = THEME[c.id];
          return (
            <Card key={c.id} hover onClick={() => go(c.id)} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 30, width: 52, height: 52, borderRadius: 14, display: "grid", placeItems: "center", background: `${th.c}1A`, border: `1px solid ${th.c}33` }}>{th.emoji}</span>
                {c.n > 0 && <span style={{ fontSize: 12, color: T.textFaint, fontWeight: 600 }}>{c.n} thématiques</span>}
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 19, color: T.text, fontWeight: 700 }}>{c.t}</h3>
              <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: T.textDim, flex: 1 }}>{c.d}</p>
              <span style={{ color: th.c, fontWeight: 700, fontSize: 14.5 }}>Explorer →</span>
            </Card>
          );
        })}
      </div>
      <Disclaimer />
    </div>
  );
}

// ============================================================
//  CALCULATEUR
// ============================================================
function Calculateur() {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(150);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(20);
  const data = useMemo(() => {
    const months = years * 12, r = rate / 100 / 12;
    let balance = initial, contributed = initial;
    const pts = [{ year: 0, balance, contributed }];
    for (let m = 1; m <= months; m++) { balance = balance * (1 + r) + monthly; contributed += monthly; if (m % 12 === 0) pts.push({ year: m / 12, balance, contributed }); }
    return pts;
  }, [initial, monthly, rate, years]);
  const final = data[data.length - 1];
  const interest = final.balance - final.contributed;
  const maxBal = final.balance || 1;
  return (
    <div>
      <div style={{ marginBottom: 30, maxWidth: 780 }}>
        <Tag color={T.accent}>🧮&nbsp;&nbsp;Outil interactif</Tag>
        <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(34px,6vw,52px)", lineHeight: 1.04, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>Calculateur d'intérêts composés</h1>
        <p style={{ fontSize: "clamp(16px,2.2vw,19px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>Fais varier les paramètres pour visualiser la croissance d'une épargne. Ces chiffres sont une illustration mathématique, jamais une prévision.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(280px,360px) 1fr", gap: 20, alignItems: "start" }} className="ef-calc">
        <Card style={{ padding: 26 }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 16, color: T.text, fontWeight: 700 }}>Paramètres</h3>
          <Slider label="Capital de départ" value={initial} set={setInitial} min={0} max={50000} step={500} suffix=" €" />
          <Slider label="Versement mensuel" value={monthly} set={setMonthly} min={0} max={2000} step={25} suffix=" €" />
          <Slider label="Rendement annuel" value={rate} set={setRate} min={0} max={12} step={0.5} suffix=" %" />
          <Slider label="Durée" value={years} set={setYears} min={1} max={40} step={1} suffix=" ans" />
        </Card>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, marginBottom: 16 }}>
            <Stat label="Valeur finale" value={euro(final.balance)} color={T.brand} big />
            <Stat label="Total versé" value={euro(final.contributed)} color={T.brand2} />
            <Stat label="Intérêts gagnés" value={euro(interest)} color={T.accent} />
          </div>
          <Card style={{ padding: 22 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 230, paddingTop: 6 }}>
              {data.map((d, i) => (
                <div key={i} title={`Année ${d.year} · ${euro(d.balance)}`} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
                  <div style={{ height: `${(d.balance / maxBal) * 100}%`, background: `linear-gradient(180deg, ${T.brand}, ${T.brand2})`, borderRadius: "5px 5px 0 0", minHeight: 2, transition: "height .3s ease" }} />
                  <div style={{ height: `${(d.contributed / maxBal) * 100}%`, background: "rgba(255,255,255,0.12)", borderRadius: "0 0 3px 3px", marginTop: 1, transition: "height .3s ease" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12, color: T.textFaint }}><span>Année 0</span><span>Année {years}</span></div>
            <div style={{ display: "flex", gap: 20, marginTop: 14, fontSize: 13, flexWrap: "wrap" }}>
              <Legend color={T.brand} label="Valeur totale (avec intérêts)" />
              <Legend color="rgba(255,255,255,0.3)" label="Versements cumulés" />
            </div>
          </Card>
        </div>
      </div>
      <Note>Observe comme la part « intérêts gagnés » s'envole quand tu augmentes la durée : c'est toute la puissance du temps long. À l'inverse, un rendement élevé saisi ici ne dit rien du risque réel qu'il faudrait prendre pour l'obtenir dans la vraie vie.</Note>
      <Disclaimer compact />
    </div>
  );
}
function Slider({ label, value, set, min, max, step, suffix }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 9 }}>
        <label style={{ fontSize: 14, color: T.textDim }}>{label}</label>
        <span style={{ fontSize: 14.5, fontWeight: 800, color: T.brand }}>{value.toLocaleString("fr-FR")}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(parseFloat(e.target.value))} style={{ width: "100%", height: 6, borderRadius: 99, appearance: "none", WebkitAppearance: "none", outline: "none", cursor: "pointer", background: `linear-gradient(90deg, ${T.brand} ${pct}%, rgba(255,255,255,0.1) ${pct}%)` }} />
    </div>
  );
}
function Stat({ label, value, color, big }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 14, padding: 18, borderTop: `3px solid ${color}` }}>
      <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, color: T.textFaint }}>{label}</div>
      <div style={{ fontSize: big ? 28 : 21, fontWeight: 700, color: T.text, fontFamily: T.serif, marginTop: 6 }}>{value}</div>
    </div>
  );
}

// ============================================================
//  APP
// ============================================================
export default function EduFinance() {
  const [page, setPage] = useState("accueil");
  const [topic, setTopic] = useState(null); // thématique ouverte dans l'onglet courant

  const go = (p) => { setPage(p); setTopic(null); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openTopic = (id) => { setTopic(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const backToTopics = () => { setTopic(null); window.scrollTo({ top: 0, behavior: "smooth" }); };

  useEffect(() => {
    const id = "ef-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  const hubProps = { openId: topic, onOpen: openTopic, onBack: backToTopics };
  const render = () => {
    switch (page) {
      case "budget": return <Budget {...hubProps} />;
      case "epargne": return <Epargne {...hubProps} />;
      case "invest": return <Invest {...hubProps} />;
      case "crypto": return <Crypto {...hubProps} />;
      case "calculateur": return <Calculateur />;
      default: return <Accueil go={go} />;
    }
  };

  return (
    <div style={{ background: T.bg, minHeight: "100vh", color: T.text, fontFamily: T.sans }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(11,17,32,0.82)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.line}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "14px 22px", display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={() => go("accueil")} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${T.brand}, ${T.brand2})`, display: "grid", placeItems: "center", color: T.bg, fontWeight: 800, fontSize: 17 }}>€</span>
            <span style={{ fontFamily: T.serif, fontSize: 21, fontWeight: 600, letterSpacing: -0.3 }}>EduFinance</span>
          </button>
          <nav style={{ display: "flex", gap: 2, marginLeft: "auto", flexWrap: "wrap" }}>
            {PAGES.map((p) => (
              <button key={p.id} onClick={() => go(p.id)} style={{ background: page === p.id ? T.surfaceHi : "transparent", color: page === p.id ? T.text : T.textDim, border: "none", borderRadius: 9, padding: "9px 14px", fontSize: 14.5, fontWeight: 600, cursor: "pointer", transition: "all .2s" }}>{p.label}</button>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 22px 64px" }}>{render()}</main>

      <footer style={{ borderTop: `1px solid ${T.line}`, background: T.bgSoft }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 22px", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${T.brand}, ${T.brand2})`, display: "grid", placeItems: "center", color: T.bg, fontWeight: 800, fontSize: 14 }}>€</span>
              <span style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 600 }}>EduFinance</span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: T.textFaint, margin: 0 }}>Plateforme éducative gratuite. Projet Ingénieur Citoyen — Hugo HEYMES. Vocation strictement pédagogique, aucun conseil personnalisé.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {PAGES.map((p) => (<button key={p.id} onClick={() => go(p.id)} style={{ all: "unset", cursor: "pointer", fontSize: 14, color: T.textDim }}>{p.label}</button>))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${T.line}`, padding: "16px 22px", textAlign: "center", fontSize: 12.5, color: T.textFaint }}>© {new Date().getFullYear()} EduFinance · Contenu éducatif — investir comporte des risques.</div>
      </footer>

      <style>{`
        input[type=range]::-webkit-slider-thumb{ -webkit-appearance:none; width:18px; height:18px; border-radius:50%; background:${T.brand}; cursor:pointer; box-shadow:0 0 0 4px rgba(94,232,196,0.2); }
        input[type=range]::-moz-range-thumb{ width:18px; height:18px; border:none; border-radius:50%; background:${T.brand}; cursor:pointer; }
        @media (max-width:720px){ .ef-calc{ grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  );
}
