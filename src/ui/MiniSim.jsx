import React, { useState, useMemo } from "react";
import { T, euro } from "../theme.js";

// Slider compact pour démos inline dans les leçons
export function InlineSlider({ label, value, set, min, max, step, suffix = "", color = T.brand }) {
  const p = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
        <span style={{ color: T.textDim }}>{label}</span>
        <span style={{ fontWeight: 700, color }}>{value.toLocaleString("fr-FR")}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => set(parseFloat(e.target.value))}
        style={{ width: "100%", height: 5, borderRadius: 99, appearance: "none", WebkitAppearance: "none", outline: "none", cursor: "pointer", background: `linear-gradient(90deg, ${color} ${p}%, rgba(255,255,255,0.08) ${p}%)` }} />
    </div>
  );
}

// Mini-stat (résultat affiché dans un mini-sim)
export function ResultBox({ label, value, color = T.brand }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 10, padding: "10px 14px", borderTop: `2px solid ${color}` }}>
      <div style={{ fontSize: 10.5, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: T.text, fontFamily: T.serif, marginTop: 2 }}>{value}</div>
    </div>
  );
}

// Frame pour wrapper une mini-sim
export function MiniSimFrame({ title, accent = T.brand, children }) {
  return (
    <div style={{ background: T.bgSoft, border: `1px solid ${accent}33`, borderRadius: 14, padding: 18, margin: "16px 0" }}>
      {title && (
        <div style={{ fontSize: 11, fontWeight: 700, color: accent, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: accent }} /> Mini-simulateur
        </div>
      )}
      {title && <div style={{ fontFamily: T.serif, fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 14 }}>{title}</div>}
      {children}
    </div>
  );
}

// Démo 50/30/20 : entre revenu, calcule les 3 enveloppes
export function BudgetSplitSim({ initial = 2200 }) {
  const [income, setIncome] = useState(initial);
  return (
    <MiniSimFrame title="Combien dans chaque enveloppe selon ton revenu ?" accent={T.brand2}>
      <InlineSlider label="Revenu net mensuel" value={income} set={setIncome} min={600} max={6000} step={50} suffix=" €" color={T.brand2} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 12 }}>
        <ResultBox label="50 % besoins" value={euro(income * 0.5)} color={T.brand2} />
        <ResultBox label="30 % envies" value={euro(income * 0.3)} color={T.brand} />
        <ResultBox label="20 % avenir" value={euro(income * 0.2)} color={T.accent} />
      </div>
    </MiniSimFrame>
  );
}

// Démo intérêts composés : voir l'effet d'un versement + durée
export function CompoundSim({ initialMonthly = 100, initialYears = 20, initialRate = 5 }) {
  const [monthly, setMonthly] = useState(initialMonthly);
  const [years, setYears] = useState(initialYears);
  const [rate, setRate] = useState(initialRate);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    let bal = 0;
    for (let m = 0; m < years * 12; m++) bal = bal * (1 + r) + monthly;
    const contrib = monthly * years * 12;
    return { bal, contrib, gains: bal - contrib };
  }, [monthly, years, rate]);
  return (
    <MiniSimFrame title="Joue avec les paramètres pour voir l'effet" accent={T.brand}>
      <InlineSlider label="Versement mensuel" value={monthly} set={setMonthly} min={25} max={1000} step={25} suffix=" €" color={T.brand} />
      <InlineSlider label="Durée" value={years} set={setYears} min={1} max={40} step={1} suffix=" ans" color={T.brand} />
      <InlineSlider label="Rendement annuel" value={rate} set={setRate} min={1} max={10} step={0.5} suffix=" %" color={T.accent} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 12 }}>
        <ResultBox label="Capital final" value={euro(result.bal)} color={T.brand} />
        <ResultBox label="Total versé" value={euro(result.contrib)} color={T.brand2} />
        <ResultBox label="Intérêts gagnés" value={euro(result.gains)} color={T.accent} />
      </div>
    </MiniSimFrame>
  );
}

// Démo TAEG : effet du taux et de la durée sur mensualité
export function LoanSim({ initialAmount = 200000, initialRate = 3.5, initialYears = 20 }) {
  const [amount, setAmount] = useState(initialAmount);
  const [rate, setRate] = useState(initialRate);
  const [years, setYears] = useState(initialYears);
  const r = rate / 100 / 12;
  const n = years * 12;
  const monthly = r === 0 ? amount / n : (amount * r) / (1 - Math.pow(1 + r, -n));
  const totalCost = monthly * n;
  const interest = totalCost - amount;
  return (
    <MiniSimFrame title="Mensualité et coût total" accent={T.brand2}>
      <InlineSlider label="Montant emprunté" value={amount} set={setAmount} min={5000} max={400000} step={5000} suffix=" €" color={T.brand2} />
      <InlineSlider label="Taux nominal" value={rate} set={setRate} min={1} max={8} step={0.1} suffix=" %" color={T.coral} />
      <InlineSlider label="Durée" value={years} set={setYears} min={1} max={30} step={1} suffix=" ans" color={T.brand2} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 12 }}>
        <ResultBox label="Mensualité" value={euro(monthly)} color={T.brand2} />
        <ResultBox label="Coût total intérêts" value={euro(interest)} color={T.coral} />
        <ResultBox label="Total à rembourser" value={euro(totalCost)} color={T.accent} />
      </div>
    </MiniSimFrame>
  );
}

// Démo inflation : pouvoir d'achat dans N années
export function InflationSim({ initialAmount = 1000, initialYears = 20 }) {
  const [amount, setAmount] = useState(initialAmount);
  const [years, setYears] = useState(initialYears);
  const [rate, setRate] = useState(2);
  const real = amount / Math.pow(1 + rate / 100, years);
  return (
    <MiniSimFrame title="Pouvoir d'achat futur" accent={T.coral}>
      <InlineSlider label="Somme aujourd'hui" value={amount} set={setAmount} min={100} max={50000} step={100} suffix=" €" color={T.brand} />
      <InlineSlider label="Dans combien d'années ?" value={years} set={setYears} min={1} max={40} step={1} suffix=" ans" color={T.brand2} />
      <InlineSlider label="Inflation moyenne" value={rate} set={setRate} min={0} max={6} step={0.5} suffix=" %" color={T.coral} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginTop: 12 }}>
        <ResultBox label="Solde affiché" value={euro(amount)} color={T.brand2} />
        <ResultBox label="Pouvoir d'achat réel" value={euro(real)} color={T.coral} />
      </div>
      <div style={{ fontSize: 12.5, color: T.textFaint, marginTop: 10, fontStyle: "italic" }}>
        À {rate}% d'inflation pendant {years} ans, {amount.toLocaleString("fr-FR")} € équivalent à {Math.round(real).toLocaleString("fr-FR")} € de pouvoir d'achat actuel.
      </div>
    </MiniSimFrame>
  );
}
