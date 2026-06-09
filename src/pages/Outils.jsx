import React, { useMemo, useState } from "react";
import { Calculator, Snowflake, PieChart, Home, Clock, Wallet, Stethoscope, Scale } from "lucide-react";
import { T, euro } from "../theme.js";
import { Tag, Card, Note, B } from "../ui/primitives.jsx";
import { CashflowDiagram, VizFrame, VizCaption, Legend } from "../ui/charts.jsx";

const TOOLS = [
  { id: "composes", label: "Intérêts composés", Icon: Snowflake },
  { id: "budget", label: "Budget 50/30/20", Icon: PieChart },
  { id: "credit", label: "Mensualité crédit", Icon: Home },
  { id: "early", label: "Commencer tôt", Icon: Clock },
  { id: "salaire", label: "Brut → Net", Icon: Wallet },
  { id: "diag", label: "Diagnostic", Icon: Stethoscope },
  { id: "pea", label: "PEA vs CTO", Icon: Scale },
];

function Slider({ label, value, set, min, max, step, suffix, color = T.brand }) {
  const p = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 9 }}>
        <label style={{ fontSize: 14, color: T.textDim }}>{label}</label>
        <span style={{ fontSize: 14.5, fontWeight: 800, color }}>{value.toLocaleString("fr-FR")}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(parseFloat(e.target.value))}
        style={{ width: "100%", height: 6, borderRadius: 99, appearance: "none", WebkitAppearance: "none", outline: "none", cursor: "pointer", background: `linear-gradient(90deg, ${color} ${p}%, rgba(255,255,255,0.1) ${p}%)` }} />
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

// ===== Outil 1 : intérêts composés =====
function CompoundTool() {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(150);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(20);
  const data = useMemo(() => {
    const months = years * 12, r = rate / 100 / 12;
    let balance = initial, contributed = initial;
    const pts = [{ year: 0, balance, contributed }];
    for (let m = 1; m <= months; m++) {
      balance = balance * (1 + r) + monthly;
      contributed += monthly;
      if (m % 12 === 0) pts.push({ year: m / 12, balance, contributed });
    }
    return pts;
  }, [initial, monthly, rate, years]);
  const final = data[data.length - 1];
  const interest = final.balance - final.contributed;
  const maxBal = final.balance || 1;
  return (
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
  );
}

// ===== Outil 2 : Budget 50/30/20 =====
function BudgetTool() {
  const [income, setIncome] = useState(2200);
  const [rent, setRent] = useState(650);
  const [bills, setBills] = useState(180);
  const [food, setFood] = useState(350);
  const [transport, setTransport] = useState(120);
  const [leisure, setLeisure] = useState(250);
  const [subs, setSubs] = useState(45);
  const needs = rent + bills + food + transport;
  const wants = leisure + subs;
  const savings = Math.max(0, income - needs - wants);
  const total = needs + wants + savings;
  const target = { needs: income * 0.5, wants: income * 0.3, savings: income * 0.2 };
  const status = (actual, ideal, lower) => {
    if (lower) return actual <= ideal ? T.brand : T.coral;
    return actual >= ideal ? T.brand : T.accent;
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(280px,360px) 1fr", gap: 20, alignItems: "start" }} className="ef-calc">
      <Card style={{ padding: 26 }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 16, color: T.text, fontWeight: 700 }}>Ton budget mensuel</h3>
        <Slider label="Revenu net mensuel" value={income} set={setIncome} min={500} max={6000} step={50} suffix=" €" color={T.brand2} />
        <div style={{ height: 1, background: T.line, margin: "16px 0" }} />
        <div style={{ fontSize: 11.5, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>Besoins essentiels</div>
        <Slider label="Loyer" value={rent} set={setRent} min={0} max={2500} step={25} suffix=" €" color={T.brand2} />
        <Slider label="Factures" value={bills} set={setBills} min={0} max={500} step={5} suffix=" €" color={T.brand2} />
        <Slider label="Courses" value={food} set={setFood} min={0} max={800} step={10} suffix=" €" color={T.brand2} />
        <Slider label="Transport" value={transport} set={setTransport} min={0} max={500} step={5} suffix=" €" color={T.brand2} />
        <div style={{ height: 1, background: T.line, margin: "16px 0" }} />
        <div style={{ fontSize: 11.5, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>Envies</div>
        <Slider label="Loisirs / sorties" value={leisure} set={setLeisure} min={0} max={1000} step={10} suffix=" €" color={T.brand} />
        <Slider label="Abonnements" value={subs} set={setSubs} min={0} max={200} step={5} suffix=" €" color={T.brand} />
      </Card>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, marginBottom: 16 }}>
          <Stat label={`Besoins (${Math.round((needs / income) * 100)}%)`} value={euro(needs)} color={status(needs, target.needs, true)} big />
          <Stat label={`Envies (${Math.round((wants / income) * 100)}%)`} value={euro(wants)} color={status(wants, target.wants, true)} />
          <Stat label={`Épargne possible (${Math.round((savings / income) * 100)}%)`} value={euro(savings)} color={status(savings, target.savings, false)} />
        </div>
        <Card>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 14, textAlign: "center" }}>Comparaison avec la cible 50/30/20</div>
          {[
            { label: "Besoins", actual: needs, ideal: target.needs, color: T.brand2 },
            { label: "Envies", actual: wants, ideal: target.wants, color: T.brand },
            { label: "Épargne", actual: savings, ideal: target.savings, color: T.accent },
          ].map((b) => {
            const max = Math.max(b.actual, b.ideal) * 1.1 || 1;
            return (
              <div key={b.label} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                  <span style={{ color: T.textDim }}>{b.label}</span>
                  <span style={{ color: T.text, fontWeight: 700 }}>{euro(b.actual)} <span style={{ color: T.textFaint }}>/ cible {euro(b.ideal)}</span></span>
                </div>
                <div style={{ position: "relative", height: 20, background: "rgba(255,255,255,0.04)", borderRadius: 7, overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${(b.actual / max) * 100}%`, background: `linear-gradient(90deg, ${b.color}88, ${b.color})`, transition: "width .4s" }} />
                  <div title="Cible 50/30/20" style={{ position: "absolute", left: `${(b.ideal / max) * 100}%`, top: -2, bottom: -2, width: 2, background: T.text, opacity: 0.4 }} />
                </div>
              </div>
            );
          })}
          <Note compact color={savings >= target.savings ? T.brand : T.accent} title={savings >= target.savings ? "Bravo" : "À ajuster"}>
            {savings >= target.savings
              ? `Tu épargnes ${Math.round((savings / income) * 100)} % de tes revenus, soit au-dessus de la cible de 20 %. Beau travail.`
              : `Tu épargnes ${Math.round((savings / income) * 100)} % — la cible est 20 %. Regarde les postes « besoins » dépassant ${euro(target.needs)} : c'est souvent là que se cache la marge.`}
          </Note>
        </Card>
      </div>
    </div>
  );
}

// ===== Outil 3 : Mensualité crédit =====
function LoanTool() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(3.5);
  const [years, setYears] = useState(20);
  const [insurance, setInsurance] = useState(0.34);
  const r = rate / 100 / 12;
  const n = years * 12;
  const monthly = r === 0 ? amount / n : (amount * r) / (1 - Math.pow(1 + r, -n));
  const insuranceMonthly = (amount * (insurance / 100)) / 12;
  const totalMonthly = monthly + insuranceMonthly;
  const totalCost = totalMonthly * n;
  const interestCost = totalCost - amount;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(280px,360px) 1fr", gap: 20, alignItems: "start" }} className="ef-calc">
      <Card style={{ padding: 26 }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 16, color: T.text, fontWeight: 700 }}>Paramètres du prêt</h3>
        <Slider label="Montant emprunté" value={amount} set={setAmount} min={5000} max={500000} step={5000} suffix=" €" color={T.brand2} />
        <Slider label="Taux nominal" value={rate} set={setRate} min={0} max={8} step={0.05} suffix=" %" color={T.brand2} />
        <Slider label="Durée" value={years} set={setYears} min={1} max={30} step={1} suffix=" ans" color={T.brand2} />
        <Slider label="Assurance (taux annuel)" value={insurance} set={setInsurance} min={0} max={1.2} step={0.02} suffix=" %" color={T.coral} />
      </Card>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, marginBottom: 16 }}>
          <Stat label="Mensualité totale" value={euro(totalMonthly)} color={T.brand2} big />
          <Stat label="Dont assurance" value={euro(insuranceMonthly)} color={T.coral} />
          <Stat label="Coût total intérêts + ass." value={euro(interestCost)} color={T.coral} />
          <Stat label="Coût total payé" value={euro(totalCost)} color={T.accent} />
        </div>
        <Card>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 14, textAlign: "center" }}>Répartition du coût total</div>
          <div style={{ display: "flex", height: 30, borderRadius: 8, overflow: "hidden" }}>
            <div title={`Capital : ${euro(amount)}`} style={{ width: `${(amount / totalCost) * 100}%`, background: T.brand2, display: "grid", placeItems: "center", color: T.bg, fontWeight: 700, fontSize: 12 }}>
              Capital
            </div>
            <div title={`Intérêts + assurance : ${euro(interestCost)}`} style={{ width: `${(interestCost / totalCost) * 100}%`, background: T.coral, display: "grid", placeItems: "center", color: T.bg, fontWeight: 700, fontSize: 12 }}>
              Coûts
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 13, color: T.textDim }}>
            <span>{euro(amount)} ({Math.round((amount / totalCost) * 100)} %)</span>
            <span>{euro(interestCost)} ({Math.round((interestCost / totalCost) * 100)} %)</span>
          </div>
          <Note compact color={T.coral} title="À retenir">
            Le coût total dépasse le capital de <strong style={{ color: T.text }}>{euro(interestCost)}</strong>. L'assurance seule représente <strong style={{ color: T.text }}>{euro(insuranceMonthly * n)}</strong> ({Math.round((insuranceMonthly * n / interestCost) * 100)}% du surcoût). C'est souvent le premier poste à négocier.
          </Note>
        </Card>
      </div>
    </div>
  );
}

// ===== Outil 4 : Commencer tôt =====
function EarlyTool() {
  const [monthly, setMonthly] = useState(150);
  const [rate, setRate] = useState(7);
  const [startAge, setStartAge] = useState(25);
  const [endAge, setEndAge] = useState(65);
  const data = useMemo(() => {
    const r = rate / 100 / 12;
    let bal = 0, contrib = 0;
    const pts = [];
    for (let age = startAge; age <= endAge; age++) {
      for (let m = 0; m < 12; m++) { bal = bal * (1 + r) + monthly; contrib += monthly; }
      pts.push({ age, bal, contrib });
    }
    return pts;
  }, [monthly, rate, startAge, endAge]);
  const final = data[data.length - 1] || { bal: 0, contrib: 0 };
  // Comparaison : "et si tu avais commencé 10 ans plus tard"
  const lateData = useMemo(() => {
    const r = rate / 100 / 12;
    let bal = 0, contrib = 0;
    const start = Math.min(startAge + 10, endAge);
    for (let age = start; age <= endAge; age++) {
      for (let m = 0; m < 12; m++) { bal = bal * (1 + r) + monthly; contrib += monthly; }
    }
    return { bal, contrib };
  }, [monthly, rate, startAge, endAge]);
  const lostByDelay = final.bal - lateData.bal;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(280px,360px) 1fr", gap: 20, alignItems: "start" }} className="ef-calc">
      <Card style={{ padding: 26 }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 16, color: T.text, fontWeight: 700 }}>Tes versements</h3>
        <Slider label="Versement mensuel" value={monthly} set={setMonthly} min={25} max={1000} step={25} suffix=" €" />
        <Slider label="Rendement annuel" value={rate} set={setRate} min={1} max={10} step={0.5} suffix=" %" />
        <Slider label="Âge de début" value={startAge} set={setStartAge} min={18} max={endAge - 5} step={1} suffix=" ans" />
        <Slider label="Âge de fin" value={endAge} set={setEndAge} min={startAge + 5} max={75} step={1} suffix=" ans" />
      </Card>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, marginBottom: 16 }}>
          <Stat label={`Capital à ${endAge} ans`} value={euro(final.bal)} color={T.brand} big />
          <Stat label="Total versé" value={euro(final.contrib)} color={T.brand2} />
          <Stat label="Coût d'un retard de 10 ans" value={"−" + euro(lostByDelay)} color={T.coral} />
        </div>
        <Card>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 14 }}>Évolution du capital par âge</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 200 }}>
            {data.map((d, i) => (
              <div key={i} style={{ flex: 1, height: `${(d.bal / final.bal) * 100}%`, background: `linear-gradient(180deg, ${T.brand}, ${T.brand2})`, borderRadius: "3px 3px 0 0", minHeight: 2, transition: "height .3s ease" }} title={`${d.age} ans : ${euro(d.bal)}`} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12, color: T.textFaint }}>
            <span>{startAge} ans</span>
            <span>{endAge} ans</span>
          </div>
          <Note color={T.coral} title="Le prix de l'attente" compact>
            Retarder de 10 ans avec les mêmes versements mensuels te coûte environ <strong style={{ color: T.text }}>{euro(lostByDelay)}</strong> de capital final. Le temps a un effet asymétrique : <em>les premières années pèsent plus que les dernières</em>.
          </Note>
        </Card>
      </div>
    </div>
  );
}

// ===== Outil 5 : Salaire brut → net =====
function SalaryTool() {
  const [brut, setBrut] = useState(2500);
  const [cadre, setCadre] = useState(false);
  // Taux moyen de cotisations salariales en France (simplifié 2025/26)
  const tauxCotis = cadre ? 0.25 : 0.22;
  const netAvantImpot = brut * (1 - tauxCotis);
  const [tmi, setTmi] = useState(11);
  // Approximation simplifiée du PAS (prélèvement à la source) :
  // 10 % d'abattement, puis application de la TMI sélectionnée
  const baseImpot = netAvantImpot * 0.9;
  const impotMensuel = (baseImpot * tmi) / 100;
  const netApresImpot = netAvantImpot - impotMensuel;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(280px,360px) 1fr", gap: 20, alignItems: "start" }} className="ef-calc">
      <Card style={{ padding: 26 }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 16, color: T.text, fontWeight: 700 }}>Ton salaire</h3>
        <Slider label="Salaire BRUT mensuel" value={brut} set={setBrut} min={800} max={10000} step={50} suffix=" €" color={T.brand2} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "10px 14px", background: T.surface, borderRadius: 10, border: `1px solid ${T.line}` }}>
          <label style={{ fontSize: 14, color: T.textDim, flex: 1 }}>Statut cadre (cotisations un peu plus élevées)</label>
          <button onClick={() => setCadre(!cadre)} style={{ background: cadre ? T.brand : T.surfaceHi, color: cadre ? T.bg : T.textDim, border: "none", borderRadius: 99, padding: "5px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{cadre ? "OUI" : "NON"}</button>
        </div>
        <Slider label="Ton taux d'imposition (TMI)" value={tmi} set={setTmi} min={0} max={45} step={1} suffix=" %" color={T.accent} />
      </Card>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, marginBottom: 16 }}>
          <Stat label="Salaire brut" value={euro(brut)} color={T.textFaint} />
          <Stat label="Net avant impôt" value={euro(netAvantImpot)} color={T.brand2} />
          <Stat label="Impôt PAS estimé" value={"−" + euro(impotMensuel)} color={T.coral} />
          <Stat label="Net après impôt" value={euro(netApresImpot)} color={T.brand} big />
        </div>
        <Card>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 14, textAlign: "center" }}>Décomposition mensuelle</div>
          <div style={{ display: "flex", height: 36, borderRadius: 10, overflow: "hidden" }}>
            <div title={`Cotisations sociales : ${euro(brut - netAvantImpot)}`} style={{ width: `${((brut - netAvantImpot) / brut) * 100}%`, background: T.textFaint, display: "grid", placeItems: "center", color: T.bg, fontWeight: 700, fontSize: 11 }}>
              Cotisations
            </div>
            <div title={`Impôt PAS : ${euro(impotMensuel)}`} style={{ width: `${(impotMensuel / brut) * 100}%`, background: T.coral, display: "grid", placeItems: "center", color: T.bg, fontWeight: 700, fontSize: 11 }}>
              Impôt
            </div>
            <div title={`Net en poche : ${euro(netApresImpot)}`} style={{ width: `${(netApresImpot / brut) * 100}%`, background: T.brand, display: "grid", placeItems: "center", color: T.bg, fontWeight: 700, fontSize: 11 }}>
              Net
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12, color: T.textFaint }}>
            <span>{Math.round((brut - netAvantImpot) / brut * 100)} % cotisations</span>
            <span>{Math.round(impotMensuel / brut * 100)} % impôt</span>
            <span>{Math.round(netApresImpot / brut * 100)} % en poche</span>
          </div>
        </Card>
        <Note color={T.accent} title="Approximation pédagogique" compact>
          Calcul simplifié à des fins éducatives. Les cotisations réelles varient selon la convention collective, les avantages
          en nature, la mutuelle d'entreprise, etc. Pour un calcul précis, consulte ta fiche de paie ou le simulateur officiel sur
          impots.gouv.fr.
        </Note>
      </div>
    </div>
  );
}

// ===== Outil 6 : Diagnostic financier =====
const DIAG_QUESTIONS = [
  { id: "urgence", q: "As-tu un fonds d'urgence couvrant au moins 3 mois de dépenses ?", opts: [{ l: "Oui", v: 2 }, { l: "Partiellement (< 3 mois)", v: 1 }, { l: "Non", v: 0 }] },
  { id: "epargne", q: "Quel pourcentage de tes revenus épargnes-tu chaque mois ?", opts: [{ l: "≥ 20 %", v: 2 }, { l: "5-20 %", v: 1 }, { l: "< 5 % ou rien", v: 0 }] },
  { id: "dettes", q: "As-tu des dettes à taux élevé (revolving, conso) en cours ?", opts: [{ l: "Aucune", v: 2 }, { l: "Une seule, gérable", v: 1 }, { l: "Plusieurs / situation tendue", v: 0 }] },
  { id: "auto", q: "Ton épargne est-elle automatisée (virement le jour de la paie) ?", opts: [{ l: "Oui", v: 2 }, { l: "En projet", v: 1 }, { l: "Non", v: 0 }] },
  { id: "invest", q: "Investis-tu une partie de ton épargne sur le long terme (PEA, AV, ETF…) ?", opts: [{ l: "Oui, allocation pensée", v: 2 }, { l: "Un peu, sans plan clair", v: 1 }, { l: "Non, tout en livret", v: 0 }] },
  { id: "audit", q: "Quand as-tu audité tes contrats (assurance, mobile, banque) pour la dernière fois ?", opts: [{ l: "Cette année", v: 2 }, { l: "Il y a 1-2 ans", v: 1 }, { l: "Jamais ou ne sais plus", v: 0 }] },
  { id: "fisca", q: "Comprends-tu ta tranche marginale d'imposition (TMI) ?", opts: [{ l: "Oui, je sais", v: 2 }, { l: "Vaguement", v: 1 }, { l: "Pas du tout", v: 0 }] },
];

function DiagnosticTool() {
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const answeredAll = DIAG_QUESTIONS.every((q) => answers[q.id] != null);
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = DIAG_QUESTIONS.length * 2;
  const pctVal = (score / max) * 100;
  const verdict =
    pctVal >= 85 ? { c: T.brand, label: "Excellent", msg: "Ton hygiène financière est solide. Concentre-toi sur l'optimisation long terme et l'allocation d'investissement." } :
    pctVal >= 65 ? { c: T.brand2, label: "Bon", msg: "Les fondations sont bonnes. Quelques points peuvent être renforcés pour passer au niveau supérieur." } :
    pctVal >= 40 ? { c: T.accent, label: "À renforcer", msg: "Plusieurs leviers importants sont à activer. Concentre-toi d'abord sur les bases : fonds d'urgence et automatisation." } :
    { c: T.coral, label: "Priorité aux fondations", msg: "L'essentiel est encore à construire. Commence par les parcours Budget et Épargne — l'investissement vient après." };

  if (done) {
    return (
      <Card>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ width: 90, height: 90, borderRadius: "50%", background: `conic-gradient(${verdict.c} ${pctVal * 3.6}deg, rgba(255,255,255,0.06) 0deg)`, display: "grid", placeItems: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: T.surface, display: "grid", placeItems: "center", fontFamily: T.serif, fontSize: 22, fontWeight: 700, color: T.text }}>
              {Math.round(pctVal)}%
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: verdict.c, letterSpacing: 0.5, textTransform: "uppercase" }}>Score : {score}/{max}</div>
            <div style={{ fontFamily: T.serif, fontSize: 26, fontWeight: 600, color: T.text }}>{verdict.label}</div>
          </div>
        </div>
        <div style={{ fontSize: 15, color: T.textDim, lineHeight: 1.65, marginBottom: 18 }}>{verdict.msg}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
          {DIAG_QUESTIONS.map((q) => {
            const v = answers[q.id];
            const c = v === 2 ? T.brand : v === 1 ? T.accent : T.coral;
            return (
              <div key={q.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: T.bgSoft, borderRadius: 10, borderLeft: `3px solid ${c}` }}>
                <span style={{ width: 22, height: 22, borderRadius: 99, background: `${c}22`, color: c, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 11, flexShrink: 0 }}>{v}</span>
                <span style={{ fontSize: 14, color: T.textDim, flex: 1 }}>{q.q}</span>
              </div>
            );
          })}
        </div>
        <button onClick={() => { setAnswers({}); setDone(false); }}
          style={{ background: "transparent", color: verdict.c, border: `1.5px solid ${verdict.c}`, borderRadius: 10, padding: "10px 18px", fontWeight: 700, cursor: "pointer" }}>
          Refaire le diagnostic
        </button>
      </Card>
    );
  }

  return (
    <Card>
      <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Diagnostic en 7 questions</div>
      <h3 style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 600, color: T.text, margin: "0 0 18px" }}>Où en es-tu sur les fondations ?</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {DIAG_QUESTIONS.map((q, qi) => (
          <div key={q.id}>
            <div style={{ fontSize: 14.5, color: T.text, fontWeight: 600, marginBottom: 8 }}>
              <span style={{ color: T.textFaint, marginRight: 8 }}>{qi + 1}.</span>{q.q}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {q.opts.map((opt, oi) => {
                const picked = answers[q.id] === opt.v;
                return (
                  <button key={oi} onClick={() => setAnswers({ ...answers, [q.id]: opt.v })}
                    style={{
                      background: picked ? T.accent + "22" : T.surface,
                      color: picked ? T.text : T.textDim,
                      border: `1px solid ${picked ? T.accent : T.line}`,
                      borderRadius: 10,
                      padding: "8px 14px",
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all .15s",
                    }}>{opt.l}</button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <button disabled={!answeredAll} onClick={() => setDone(true)}
        style={{ marginTop: 22, background: answeredAll ? T.accent : T.surfaceHi, color: answeredAll ? T.bg : T.textFaint, border: "none", borderRadius: 10, padding: "12px 22px", fontWeight: 700, cursor: answeredAll ? "pointer" : "not-allowed", fontSize: 15 }}>
        {answeredAll ? "Voir mon diagnostic" : `Réponds aux ${DIAG_QUESTIONS.length - Object.keys(answers).length} questions restantes`}
      </button>
    </Card>
  );
}

// ===== Outil 7 : PEA vs CTO =====
function PeaCtoTool() {
  const [monthly, setMonthly] = useState(200);
  const [years, setYears] = useState(15);
  const [grossRate, setGrossRate] = useState(7);
  const compute = (enveloppe) => {
    const r = grossRate / 100 / 12;
    let bal = 0;
    for (let m = 0; m < years * 12; m++) bal = bal * (1 + r) + monthly;
    const contrib = monthly * years * 12;
    const gains = bal - contrib;
    let tax;
    if (enveloppe === "pea") {
      // PEA après 5 ans : exonéré d'IR, soumis aux PS (17,2 %)
      tax = years >= 5 ? gains * 0.172 : gains * 0.30;
    } else {
      // CTO : PFU 30 % chaque cession (approximation : on applique en fin sur les gains totaux)
      tax = gains * 0.30;
    }
    return { bal, contrib, gains, tax, net: bal - tax };
  };
  const pea = compute("pea");
  const cto = compute("cto");
  const diff = pea.net - cto.net;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(280px,360px) 1fr", gap: 20, alignItems: "start" }} className="ef-calc">
      <Card style={{ padding: 26 }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 16, color: T.text, fontWeight: 700 }}>Hypothèses</h3>
        <Slider label="Versement mensuel" value={monthly} set={setMonthly} min={25} max={1000} step={25} suffix=" €" />
        <Slider label="Durée" value={years} set={setYears} min={1} max={40} step={1} suffix=" ans" />
        <Slider label="Rendement annuel brut" value={grossRate} set={setGrossRate} min={1} max={12} step={0.5} suffix=" %" />
        <Note color={T.accent} compact title="Modèle">
          PEA : exonéré d'impôt après 5 ans, soumis aux prélèvements sociaux (17,2 %). CTO : PFU 30 % (12,8 % IR + 17,2 % PS).
        </Note>
      </Card>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <Card style={{ borderTop: `3px solid ${T.brand}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>PEA</div>
            <div style={{ fontFamily: T.serif, fontSize: 28, fontWeight: 700, color: T.text }}>{euro(pea.net)}</div>
            <div style={{ fontSize: 12.5, color: T.textDim, marginTop: 6, lineHeight: 1.6 }}>
              Brut : {euro(pea.bal)}<br />
              Impôt : −{euro(pea.tax)}<br />
              Versé : {euro(pea.contrib)}
            </div>
          </Card>
          <Card style={{ borderTop: `3px solid ${T.coral}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>CTO (PFU 30 %)</div>
            <div style={{ fontFamily: T.serif, fontSize: 28, fontWeight: 700, color: T.text }}>{euro(cto.net)}</div>
            <div style={{ fontSize: 12.5, color: T.textDim, marginTop: 6, lineHeight: 1.6 }}>
              Brut : {euro(cto.bal)}<br />
              Impôt : −{euro(cto.tax)}<br />
              Versé : {euro(cto.contrib)}
            </div>
          </Card>
        </div>
        <Card style={{ background: `linear-gradient(135deg, ${T.brand}10, ${T.brand2}10)` }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Économie PEA</div>
          <div style={{ fontFamily: T.serif, fontSize: 32, fontWeight: 700, color: T.text }}>+{euro(diff)}</div>
          <div style={{ fontSize: 14, color: T.textDim, marginTop: 6, lineHeight: 1.6 }}>
            soit <B>{((diff / cto.net) * 100).toFixed(1)} %</B> de capital final en plus pour les mêmes versements, juste grâce à
            l'enveloppe fiscale. C'est l'illustration concrète de l'intérêt des enveloppes (PEA, AV après 8 ans, PER).
          </div>
        </Card>
        <Note color={T.coral} compact title="Limites du modèle">
          Calcul simplifié : on applique l'impôt en une seule fois en fin de période. En réalité, le CTO impose à chaque cession,
          ce qui peut différer selon les arbitrages. Le PEA est plafonné à 150 000 € de versements.
        </Note>
      </div>
    </div>
  );
}

export default function Outils() {
  const [active, setActive] = useState("composes");
  return (
    <div>
      <div style={{ marginBottom: 30, maxWidth: 780 }}>
        <Tag color={T.accent} Icon={Calculator}>Boîte à outils</Tag>
        <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(34px,6vw,52px)", lineHeight: 1.04, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>
          Simulateurs interactifs
        </h1>
        <p style={{ fontSize: "clamp(16px,2.2vw,19px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>
          Quatre outils pour visualiser concrètement les mécanismes financiers. Aucun n'est un conseil personnalisé — ce sont des illustrations mathématiques.
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {TOOLS.map((t) => {
          const ToolIcon = t.Icon;
          return (
            <button key={t.id} onClick={() => setActive(t.id)}
              style={{
                background: active === t.id ? T.surfaceHi : T.surface,
                color: active === t.id ? T.text : T.textDim,
                border: `1px solid ${active === t.id ? T.accent + "55" : T.line}`,
                borderRadius: 12,
                padding: "11px 18px",
                fontSize: 14.5,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all .2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}>
              <ToolIcon size={17} strokeWidth={1.9} />
              {t.label}
            </button>
          );
        })}
      </div>

      {active === "composes" && <CompoundTool />}
      {active === "budget" && <BudgetTool />}
      {active === "credit" && <LoanTool />}
      {active === "early" && <EarlyTool />}
      {active === "salaire" && <SalaryTool />}
      {active === "diag" && <DiagnosticTool />}
      {active === "pea" && <PeaCtoTool />}
    </div>
  );
}
