import React, { useEffect, useMemo, useRef, useState } from "react";
import { T, euro } from "../theme.js";
import { useInView } from "../hooks.js";
import { Card } from "./primitives.jsx";

export function VizCaption({ children }) {
  return <div style={{ fontSize: 12.5, color: T.textFaint, textAlign: "center", marginTop: 12, fontStyle: "italic" }}>{children}</div>;
}

export function Legend({ color, label }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 7, color: T.textDim }}>
      <span style={{ width: 12, height: 12, background: color, borderRadius: 3 }} />
      {label}
    </span>
  );
}

export function VizFrame({ title, children }) {
  return (
    <Card style={{ margin: "8px 0 4px", background: T.bgSoft }}>
      {title && (
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: T.textFaint, marginBottom: 18, textAlign: "center" }}>
          {title}
        </div>
      )}
      {children}
    </Card>
  );
}

export function DonutChart({ data, size = 220, centerLabel, centerValue }) {
  const [ref, seen] = useInView();
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = size / 2 - 18, cx = size / 2, cy = size / 2, C = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div ref={ref} style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
      <div style={{ position: "relative" }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={26} />
          {data.map((d, i) => {
            const frac = d.value / total, dash = seen ? frac * C : 0;
            const el = (
              <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={26}
                strokeDasharray={`${dash} ${C}`} strokeDashoffset={-offset}
                style={{ transition: `stroke-dasharray 1s cubic-bezier(.22,1,.36,1) ${i * 0.2}s` }} />
            );
            offset += seen ? frac * C : 0;
            return el;
          })}
        </svg>
        {(centerLabel || centerValue) && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }}>
            <div>
              {centerValue && <div style={{ fontFamily: T.serif, fontSize: 26, fontWeight: 700, color: T.text }}>{centerValue}</div>}
              {centerLabel && <div style={{ fontSize: 11.5, color: T.textFaint, letterSpacing: 0.5, textTransform: "uppercase" }}>{centerLabel}</div>}
            </div>
          </div>
        )}
      </div>
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

export function GrowthLine({ width = 560, height = 260, monthly = 150, rate = 0.06, years = 30 }) {
  const [ref, seen] = useInView();
  const pts = useMemo(() => {
    const arr = []; let bal = 0, contrib = 0;
    for (let y = 0; y <= years; y++) {
      arr.push({ y, bal, contrib });
      for (let m = 0; m < 12; m++) { bal = bal * (1 + rate / 12) + monthly; contrib += monthly; }
    }
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
        <defs>
          <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={T.brand} stopOpacity="0.35" />
            <stop offset="100%" stopColor={T.brand} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75, 1].map((g, i) => (
          <g key={i}>
            <line x1={44} x2={width - 16} y1={py(maxV * g)} y2={py(maxV * g)} stroke="rgba(255,255,255,0.06)" />
            <text x={6} y={py(maxV * g) + 4} fill={T.textFaint} fontSize={10}>{Math.round(maxV * g / 1000)}k</text>
          </g>
        ))}
        <path d={`${path("bal")} L ${px(years)} ${py(0)} L ${px(0)} ${py(0)} Z`} fill="url(#growthFill)" opacity={seen ? 1 : 0} style={{ transition: "opacity 1.4s 1s" }} />
        <path d={`${path("contrib")} L ${px(years)} ${py(0)} L ${px(0)} ${py(0)} Z`} fill="rgba(255,255,255,0.05)" opacity={seen ? 1 : 0} style={{ transition: "opacity 1s 1s" }} />
        <path d={path("contrib")} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2} strokeDasharray="5 4" opacity={seen ? 1 : 0} style={{ transition: "opacity .8s 1s" }} />
        <path ref={lineRef} d={path("bal")} fill="none" stroke={T.brand} strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={seen ? 0 : len} style={{ transition: "stroke-dashoffset 1.8s ease" }} />
        <text x={px(years)} y={py(pts[years].bal) - 10} fill={T.brand} fontSize={12} fontWeight="700" textAnchor="end" opacity={seen ? 1 : 0} style={{ transition: "opacity .5s 1.6s" }}>{euro(pts[years].bal)}</text>
        <text x={px(years)} y={py(pts[years].contrib) + 16} fill={T.textDim} fontSize={11} textAnchor="end" opacity={seen ? 1 : 0} style={{ transition: "opacity .5s 1.6s" }}>versé : {euro(pts[years].contrib)}</text>
      </svg>
    </div>
  );
}

export function RiskBars({ data }) {
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

export function CountUp({ to, suffix = "", duration = 1400, decimals = 0 }) {
  const [ref, seen] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  const fmt = decimals > 0
    ? val.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : Math.round(val).toLocaleString("fr-FR");
  return <span ref={ref}>{fmt}{suffix}</span>;
}

export function InflationViz() {
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

export function VBars({ data, max, unit = "" }) {
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

// =================================================
//  NOUVELLES VISUALISATIONS
// =================================================

// Two investors comparison line chart
export function TwoInvestors({ width = 580, height = 280 }) {
  const [ref, seen] = useInView();
  const data = useMemo(() => {
    const rate = 0.07 / 12;
    // Alice: 200€/mois pendant 10 ans (25→35), puis stop, laisse fructifier jusqu'à 65 ans
    // Bob:   200€/mois pendant 30 ans (35→65)
    let aliceBal = 0, bobBal = 0, aliceContrib = 0, bobContrib = 0;
    const pts = [];
    for (let age = 25; age <= 65; age++) {
      for (let m = 0; m < 12; m++) {
        if (age < 35) { aliceBal = aliceBal * (1 + rate) + 200; aliceContrib += 200; }
        else { aliceBal = aliceBal * (1 + rate); }
        if (age >= 35) { bobBal = bobBal * (1 + rate) + 200; bobContrib += 200; }
      }
      pts.push({ age, alice: aliceBal, bob: bobBal, aliceContrib, bobContrib });
    }
    return pts;
  }, []);
  const max = Math.max(...data.map((d) => Math.max(d.alice, d.bob)));
  const px = (age) => 50 + ((age - 25) / 40) * (width - 70);
  const py = (v) => height - 40 - (v / max) * (height - 60);
  const pathOf = (key) => data.map((p, i) => `${i === 0 ? "M" : "L"} ${px(p.age)} ${py(p[key])}`).join(" ");
  const aliceRef = useRef(null), bobRef = useRef(null);
  const [aLen, setALen] = useState(0), [bLen, setBLen] = useState(0);
  useEffect(() => {
    if (aliceRef.current) setALen(aliceRef.current.getTotalLength());
    if (bobRef.current) setBLen(bobRef.current.getTotalLength());
  }, []);
  const aliceFinal = data[data.length - 1].alice;
  const bobFinal = data[data.length - 1].bob;
  return (
    <div ref={ref}>
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: width }}>
        {[0, 0.25, 0.5, 0.75, 1].map((g, i) => (
          <g key={i}>
            <line x1={50} x2={width - 16} y1={py(max * g)} y2={py(max * g)} stroke="rgba(255,255,255,0.06)" />
            <text x={6} y={py(max * g) + 4} fill={T.textFaint} fontSize={10}>{Math.round(max * g / 1000)}k</text>
          </g>
        ))}
        {[25, 35, 45, 55, 65].map((a) => (
          <text key={a} x={px(a)} y={height - 16} fill={T.textFaint} fontSize={10} textAnchor="middle">{a} ans</text>
        ))}
        {/* Zone Alice cotise */}
        <rect x={px(25)} y={20} width={px(35) - px(25)} height={height - 60} fill={T.brand} opacity={seen ? 0.06 : 0} style={{ transition: "opacity 1s .3s" }} />
        <text x={(px(25) + px(35)) / 2} y={36} fill={T.brand} fontSize={10} textAnchor="middle" opacity={seen ? 0.8 : 0} style={{ transition: "opacity 1s .5s" }}>Alice cotise</text>
        <rect x={px(35)} y={20} width={px(65) - px(35)} height={height - 60} fill={T.brand2} opacity={seen ? 0.04 : 0} style={{ transition: "opacity 1s .5s" }} />
        <text x={(px(35) + px(65)) / 2} y={36} fill={T.brand2} fontSize={10} textAnchor="middle" opacity={seen ? 0.8 : 0} style={{ transition: "opacity 1s .7s" }}>Bob cotise</text>
        <path ref={aliceRef} d={pathOf("alice")} fill="none" stroke={T.brand} strokeWidth={3} strokeLinecap="round" strokeDasharray={aLen} strokeDashoffset={seen ? 0 : aLen} style={{ transition: "stroke-dashoffset 2s ease" }} />
        <path ref={bobRef} d={pathOf("bob")} fill="none" stroke={T.brand2} strokeWidth={3} strokeLinecap="round" strokeDasharray={bLen} strokeDashoffset={seen ? 0 : bLen} style={{ transition: "stroke-dashoffset 2s .3s ease" }} />
        <text x={px(65)} y={py(aliceFinal) - 8} fill={T.brand} fontSize={12} fontWeight="700" textAnchor="end" opacity={seen ? 1 : 0} style={{ transition: "opacity .5s 2.2s" }}>{euro(aliceFinal)}</text>
        <text x={px(65)} y={py(bobFinal) + 16} fill={T.brand2} fontSize={12} fontWeight="700" textAnchor="end" opacity={seen ? 1 : 0} style={{ transition: "opacity .5s 2.4s" }}>{euro(bobFinal)}</text>
      </svg>
      <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: 8, fontSize: 13, flexWrap: "wrap" }}>
        <Legend color={T.brand} label="Alice : 200 €/mois de 25 à 35 ans, puis stop (24 000 € versés)" />
        <Legend color={T.brand2} label="Bob : 200 €/mois de 35 à 65 ans (72 000 € versés)" />
      </div>
    </div>
  );
}

// Fees impact comparison
export function FeesImpact() {
  const [ref, seen] = useInView();
  const scenarios = useMemo(() => {
    const compute = (fee) => {
      const r = (0.07 - fee) / 12; let bal = 0;
      for (let m = 0; m < 30 * 12; m++) bal = bal * (1 + r) + 200;
      return Math.round(bal);
    };
    return [
      { fee: 0.001, label: "0,1 % de frais (ETF low-cost)", color: T.brand },
      { fee: 0.01, label: "1 % de frais (typique courtier)", color: T.accent },
      { fee: 0.02, label: "2 % de frais (gestion active)", color: T.coral },
    ].map((s) => ({ ...s, value: compute(s.fee) }));
  }, []);
  const max = Math.max(...scenarios.map((s) => s.value));
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {scenarios.map((s, i) => (
        <div key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 14.5, color: T.text, fontWeight: 700 }}>{s.label}</span>
            <span style={{ fontSize: 14.5, color: s.color, fontWeight: 700 }}>{euro(s.value)}</span>
          </div>
          <div style={{ height: 26, borderRadius: 7, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: seen ? `${(s.value / max) * 100}%` : 0, background: `linear-gradient(90deg, ${s.color}88, ${s.color})`, borderRadius: 7, transition: `width 1.1s cubic-bezier(.22,1,.36,1) ${i * 0.2}s` }} />
          </div>
        </div>
      ))}
      <div style={{ fontSize: 12.5, color: T.textFaint, marginTop: 4 }}>
        Base : 200 €/mois pendant 30 ans, rendement brut de 7 %/an. Total versé : 72 000 €.
      </div>
    </div>
  );
}

// Cashflow Sankey-like (simplified)
export function CashflowDiagram({ income = 2000, fixed = 1000, variable = 600, savings = 400 }) {
  const [ref, seen] = useInView();
  const total = fixed + variable + savings;
  const f = (v) => (v / total) * 220;
  return (
    <div ref={ref}>
      <svg width="100%" viewBox="0 0 560 280" style={{ maxWidth: 560 }}>
        <defs>
          <linearGradient id="flow1" x1="0" x2="1"><stop offset="0%" stopColor={T.brand} /><stop offset="100%" stopColor={T.brand2} /></linearGradient>
          <linearGradient id="flow2" x1="0" x2="1"><stop offset="0%" stopColor={T.brand2} /><stop offset="100%" stopColor={T.coral} /></linearGradient>
          <linearGradient id="flow3" x1="0" x2="1"><stop offset="0%" stopColor={T.brand2} /><stop offset="100%" stopColor={T.accent} /></linearGradient>
          <linearGradient id="flow4" x1="0" x2="1"><stop offset="0%" stopColor={T.brand2} /><stop offset="100%" stopColor={T.brand} /></linearGradient>
        </defs>
        {/* Source : revenu */}
        <rect x={20} y={130 - 110} width={70} height={220} fill={T.brand2} opacity={seen ? 0.85 : 0} rx={4} style={{ transition: "opacity .9s" }} />
        <text x={55} y={120} textAnchor="middle" fill={T.bg} fontSize={11} fontWeight={700}>Revenu</text>
        <text x={55} y={138} textAnchor="middle" fill={T.bg} fontSize={13} fontWeight={800}>{euro(income)}</text>
        {/* Cibles */}
        {[
          { label: "Fixe (loyer, factures…)", v: fixed, color: T.coral, grad: "flow2", y: 30 },
          { label: "Variable (courses, loisirs)", v: variable, color: T.accent, grad: "flow3", y: 120 },
          { label: "Épargne / invest", v: savings, color: T.brand, grad: "flow4", y: 210 },
        ].map((c, i) => {
          const h = f(c.v);
          const yStart = 130 - 110 + [0, f(fixed), f(fixed) + f(variable)][i];
          return (
            <g key={i}>
              <path
                d={`M 90 ${yStart} C 250 ${yStart}, 350 ${c.y + h / 2}, 460 ${c.y + h / 2 - h / 2} L 460 ${c.y + h / 2 + h / 2} C 350 ${c.y + h / 2 + h / 2}, 250 ${yStart + h}, 90 ${yStart + h} Z`}
                fill={`url(#${c.grad})`}
                opacity={seen ? 0.55 : 0}
                style={{ transition: `opacity 1s ${0.3 + i * 0.2}s` }}
              />
              <rect x={460} y={c.y} width={70} height={h} fill={c.color} opacity={seen ? 0.9 : 0} rx={4} style={{ transition: `opacity .9s ${0.4 + i * 0.2}s` }} />
              <text x={495} y={c.y + h / 2 - 2} textAnchor="middle" fill={T.bg} fontSize={11} fontWeight={700}>{euro(c.v)}</text>
              <text x={495} y={c.y + h / 2 + 12} textAnchor="middle" fill={T.bg} fontSize={9.5} fontWeight={600}>{Math.round((c.v / total) * 100)}%</text>
              <text x={550} y={c.y + h / 2 + 4} textAnchor="start" fill={T.textDim} fontSize={11} style={{ display: "none" }}>{c.label}</text>
            </g>
          );
        })}
        {[
          { label: "Fixe", y: 60 },
          { label: "Variable", y: 150 },
          { label: "Épargne", y: 240 },
        ].map((c, i) => (
          <text key={i} x={530} y={c.y - 4} textAnchor="middle" fill={T.textDim} fontSize={11}>{c.label}</text>
        ))}
      </svg>
    </div>
  );
}

// Scatter — opportunités vs arnaques
export function ScamScatter() {
  const [ref, seen] = useInView();
  const items = [
    { x: 18, y: 25, label: "Livret réglementé", color: T.brand, risk: "OK" },
    { x: 35, y: 45, label: "ETF mondial", color: T.brand, risk: "OK" },
    { x: 55, y: 60, label: "Action individuelle", color: T.accent, risk: "Risqué" },
    { x: 78, y: 78, label: "Crypto majeure", color: T.coral, risk: "Très risqué" },
    { x: 92, y: 12, label: "« Rendement garanti 30 %/mois »", color: T.coral, risk: "ARNAQUE" },
    { x: 84, y: 8, label: "Token inconnu via DM", color: T.coral, risk: "ARNAQUE" },
  ];
  return (
    <div ref={ref}>
      <svg width="100%" viewBox="0 0 560 320" style={{ maxWidth: 560 }}>
        {/* Axes */}
        <line x1={50} x2={540} y1={280} y2={280} stroke="rgba(255,255,255,0.15)" />
        <line x1={50} x2={50} y1={20} y2={280} stroke="rgba(255,255,255,0.15)" />
        <text x={295} y={310} textAnchor="middle" fill={T.textFaint} fontSize={11}>Risque réel →</text>
        <text x={20} y={150} fill={T.textFaint} fontSize={11} transform="rotate(-90 20 150)" textAnchor="middle">← Promesse de rendement</text>
        {/* Zone arnaque */}
        <rect x={350} y={20} width={190} height={80} fill={T.coral} opacity={seen ? 0.08 : 0} style={{ transition: "opacity 1s" }} />
        <text x={445} y={50} textAnchor="middle" fill={T.coral} fontSize={11} fontWeight={700} opacity={seen ? 0.9 : 0} style={{ transition: "opacity 1s .2s" }}>ZONE D'ARNAQUE</text>
        <text x={445} y={66} textAnchor="middle" fill={T.coral} fontSize={10} opacity={seen ? 0.7 : 0} style={{ transition: "opacity 1s .3s" }}>fort rendement promis, peu de risque visible</text>
        {items.map((p, i) => (
          <g key={i} opacity={seen ? 1 : 0} style={{ transition: `opacity .5s ${0.5 + i * 0.1}s` }}>
            <circle cx={50 + (p.x / 100) * 490} cy={20 + (p.y / 100) * 260} r={9} fill={p.color} opacity={0.85} />
            <text x={50 + (p.x / 100) * 490 + 14} y={20 + (p.y / 100) * 260 + 4} fill={T.textDim} fontSize={11}>{p.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Loan payoff timeline
export function LoanBars({ data }) {
  const [ref, seen] = useInView();
  const max = Math.max(...data.map((d) => d.principal + d.interest));
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {data.map((d, i) => (
        <div key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 14.5, color: T.text, fontWeight: 700 }}>{d.label}</span>
            <span style={{ fontSize: 13, color: T.textDim }}>{euro(d.principal + d.interest)} <span style={{ color: T.coral }}>(intérêts : {euro(d.interest)})</span></span>
          </div>
          <div style={{ height: 26, borderRadius: 7, background: "rgba(255,255,255,0.05)", overflow: "hidden", display: "flex" }}>
            <div style={{ height: "100%", width: seen ? `${(d.principal / max) * 100}%` : 0, background: T.brand2, transition: `width 1s ${i * 0.15}s` }} />
            <div style={{ height: "100%", width: seen ? `${(d.interest / max) * 100}%` : 0, background: T.coral, transition: `width 1s ${i * 0.15 + 0.1}s` }} />
          </div>
        </div>
      ))}
      <div style={{ display: "flex", gap: 18, justifyContent: "center", fontSize: 13, marginTop: 4 }}>
        <Legend color={T.brand2} label="Capital emprunté" />
        <Legend color={T.coral} label="Intérêts payés" />
      </div>
    </div>
  );
}

// Bracket bars (tranches d'imposition)
export function BracketBars({ income = 30000 }) {
  const [ref, seen] = useInView();
  const brackets = [
    { up: 11497, rate: 0, color: T.brand },
    { up: 29315, rate: 0.11, color: T.brand2 },
    { up: 83823, rate: 0.30, color: T.accent },
    { up: 180294, rate: 0.41, color: T.coral },
    { up: Infinity, rate: 0.45, color: T.violet },
  ];
  let remaining = income, tax = 0, prev = 0;
  const used = [];
  for (const b of brackets) {
    const cap = Math.min(b.up, income) - prev;
    if (cap <= 0) break;
    const t = cap * b.rate;
    used.push({ amount: cap, rate: b.rate, tax: t, color: b.color, from: prev, to: prev + cap });
    tax += t;
    prev = b.up;
    if (income <= b.up) break;
  }
  const max = income;
  return (
    <div ref={ref}>
      <div style={{ display: "flex", height: 38, borderRadius: 10, overflow: "hidden", border: `1px solid ${T.line}` }}>
        {used.map((u, i) => (
          <div key={i} title={`${euro(u.amount)} à ${Math.round(u.rate * 100)}% → ${euro(u.tax)} d'impôt`} style={{ width: seen ? `${(u.amount / max) * 100}%` : 0, background: u.color, transition: `width .9s cubic-bezier(.22,1,.36,1) ${i * 0.15}s`, display: "grid", placeItems: "center", color: T.bg, fontWeight: 700, fontSize: 11.5 }}>
            {Math.round(u.rate * 100)}%
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12, color: T.textFaint }}>
        <span>0 €</span>
        <span>{euro(income)}</span>
      </div>
      <div style={{ marginTop: 14, padding: "12px 16px", background: T.bgSoft, borderRadius: 10, border: `1px solid ${T.line}` }}>
        <div style={{ fontSize: 13, color: T.textDim }}>Impôt total estimé</div>
        <div style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 700, color: T.text }}>{euro(tax)}</div>
        <div style={{ fontSize: 12, color: T.textFaint, marginTop: 2 }}>Taux moyen : {((tax / income) * 100).toFixed(1)} % · Taux marginal : {Math.round(used[used.length - 1].rate * 100)} %</div>
      </div>
    </div>
  );
}
