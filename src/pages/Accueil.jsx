import React from "react";
import { Compass, BarChart3, Sprout, TrendingUp, Landmark } from "lucide-react";
import { T, THEME } from "../theme.js";
import { Tag, Card, Chapter, P, B, Disclaimer, btn } from "../ui/primitives.jsx";
import { CountUp } from "../ui/charts.jsx";

const CARDS = [
  { id: "budget", t: "Maîtriser son budget", d: "Flux d'argent, méthode 50/30/20, suivi des dépenses, fonds d'urgence.", n: 4 },
  { id: "epargne", t: "Épargner intelligemment", d: "Épargne vs invest, intérêts composés, supports, inflation & automatisation.", n: 4 },
  { id: "invest", t: "Comprendre l'investissement", d: "Risque/rendement, classes d'actifs, principes, psychologie & check-list.", n: 4 },
  { id: "fiscalite", t: "Comprendre la fiscalité", d: "Tranches d'imposition, PFU, enveloppes fiscales, réductions et niches.", n: 3 },
  { id: "credit", t: "Crédit & endettement", d: "TAEG, capacité d'emprunt, crédit immo, conso, surendettement.", n: 4 },
  { id: "crypto", t: "Décrypter la crypto & le Web3", d: "Les bases, les risques, repérer les arnaques, garder l'esprit critique.", n: 4 },
  { id: "outils", t: "Boîte à outils", d: "Calculateur d'intérêts composés, budget, crédit, commencer tôt.", n: 4 },
  { id: "glossaire", t: "Glossaire", d: "50+ termes financiers expliqués sans jargon.", n: 0 },
];

const STATS = [
  { v: 23, s: "", c: T.brand2, d: "thématiques approfondies" },
  { v: 6, s: "", c: T.brand, d: "parcours pédagogiques" },
  { v: 4, s: "", c: T.accent, d: "outils interactifs" },
  { v: 50, s: "+", c: T.violet, d: "termes au glossaire" },
];

// Animated floating orbs in the hero
function HeroOrbs() {
  return (
    <>
      <div style={{
        position: "absolute", width: 320, height: 320, borderRadius: "50%",
        background: `radial-gradient(circle, ${T.brand}33, transparent 70%)`,
        top: -80, right: -60, filter: "blur(20px)", animation: "efFloat1 14s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 260, height: 260, borderRadius: "50%",
        background: `radial-gradient(circle, ${T.brand2}33, transparent 70%)`,
        bottom: -60, left: -40, filter: "blur(20px)", animation: "efFloat2 18s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 180, height: 180, borderRadius: "50%",
        background: `radial-gradient(circle, ${T.accent}22, transparent 70%)`,
        top: "30%", left: "45%", filter: "blur(24px)", animation: "efFloat3 22s ease-in-out infinite",
        pointerEvents: "none",
      }} />
    </>
  );
}

export default function Accueil({ go }) {
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 28, border: `1px solid ${T.line}`, background: `radial-gradient(120% 120% at 0% 0%, ${T.surfaceHi} 0%, ${T.bgSoft} 55%, ${T.bg} 100%)`, padding: "clamp(32px,6vw,72px)", marginBottom: 30 }}>
        <HeroOrbs />
        <div style={{ position: "relative", maxWidth: 720 }}>
          <Tag>Éducation financière · gratuite · pour tous</Tag>
          <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(40px,8vw,76px)", lineHeight: 1.0, letterSpacing: -1, margin: "20px 0 18px", color: T.text }}>
            L'argent, enfin<br />
            <span style={{ background: `linear-gradient(100deg, ${T.brand}, ${T.brand2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>expliqué simplement.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px,2.5vw,20px)", lineHeight: 1.65, color: T.textDim, maxWidth: 560, margin: "0 0 30px" }}>
            Des cours clairs et gratuits sur le budget, l'épargne, l'investissement, la fiscalité, le crédit et la crypto.
            Quizzes, simulateurs, glossaire — apprends à ton rythme.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => go("budget")} style={btn(T.brand, true)}>Commencer à apprendre →</button>
            <button onClick={() => go("outils")} style={btn(T.brand)}>Tester les outils</button>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, marginBottom: 36 }}>
        {STATS.map((x) => (
          <Card key={x.d}>
            <div style={{ fontFamily: T.serif, fontSize: 38, fontWeight: 600, color: x.c }}>
              <CountUp to={x.v} suffix={x.s} />
            </div>
            <div style={{ fontSize: 13.5, color: T.textDim, marginTop: 4, lineHeight: 1.4 }}>{x.d}</div>
          </Card>
        ))}
      </div>

      <Chapter n="?" title="Pourquoi ce projet" color={T.brand}>
        <P>Les compétences financières de base sont peu enseignées dans le système éducatif traditionnel. Beaucoup de jeunes gèrent leur premier salaire sans repères, ce qui peut mener au surendettement ou, à l'inverse, à une méfiance totale faute de connaissances. EduFinance vise à <B>réduire cette inégalité d'accès à l'information</B> et à donner à chacun les clés pour décider en conscience.</P>
        <P>Le contenu est strictement éducatif. Tu n'y trouveras <B>aucun conseil personnalisé</B>, aucune recommandation d'achat, aucune publicité. L'objectif est de t'aider à comprendre — pas de te dire quoi faire.</P>
      </Chapter>

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
        <h2 style={{ fontFamily: T.serif, fontSize: 28, fontWeight: 600, color: T.text, margin: 0 }}>Les parcours</h2>
        <span style={{ color: T.textFaint, fontSize: 14 }}>Choisis par où commencer</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 16, marginBottom: 30 }}>
        {CARDS.map((c) => {
          const th = THEME[c.id];
          const ThemeIcon = th.Icon;
          return (
            <Card key={c.id} hover accent={th.c} onClick={() => go(c.id)} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ width: 52, height: 52, borderRadius: 14, display: "grid", placeItems: "center", background: `${th.c}1A`, border: `1px solid ${th.c}33`, color: th.c }}>
                  {ThemeIcon && <ThemeIcon size={26} strokeWidth={1.8} />}
                </span>
                {c.n > 0 && <span style={{ fontSize: 12, color: T.textFaint, fontWeight: 600 }}>{c.n} {c.id === "outils" ? "outils" : "thématiques"}</span>}
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 19, color: T.text, fontWeight: 700 }}>{c.t}</h3>
              <p style={{ margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: T.textDim, flex: 1 }}>{c.d}</p>
              <span style={{ color: th.c, fontWeight: 700, fontSize: 14.5 }}>Explorer →</span>
            </Card>
          );
        })}
      </div>

      <Card style={{ background: `linear-gradient(135deg, ${T.surfaceHi}, ${T.surface})`, padding: "clamp(24px,4vw,40px)" }}>
        <div style={{ maxWidth: 680 }}>
          <Tag color={T.violet} Icon={Compass}>Méthode</Tag>
          <h2 style={{ fontFamily: T.serif, fontSize: "clamp(22px,3.5vw,30px)", fontWeight: 600, color: T.text, margin: "16px 0 12px" }}>
            Apprendre par étapes : du concret aux concepts
          </h2>
          <P>
            Chaque parcours commence par les bases (vocabulaire, intuition) avant d'introduire la théorie.
            Les <B>visualisations animées</B> illustrent les mécanismes-clés, les <B>quiz</B> consolident l'acquis,
            et les <B>simulateurs</B> te permettent d'appliquer à ta propre situation.
          </P>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <button onClick={() => go("budget")} style={{ ...btn(T.brand, true), display: "inline-flex", alignItems: "center", gap: 8 }}><BarChart3 size={16} strokeWidth={2} /> Budget</button>
            <button onClick={() => go("epargne")} style={{ ...btn(T.brand2), display: "inline-flex", alignItems: "center", gap: 8 }}><Sprout size={16} strokeWidth={2} /> Épargne</button>
            <button onClick={() => go("invest")} style={{ ...btn(T.coral), display: "inline-flex", alignItems: "center", gap: 8 }}><TrendingUp size={16} strokeWidth={2} /> Invest</button>
            <button onClick={() => go("fiscalite")} style={{ ...btn(T.accent), display: "inline-flex", alignItems: "center", gap: 8 }}><Landmark size={16} strokeWidth={2} /> Fiscalité</button>
          </div>
        </div>
      </Card>

      <Disclaimer />
    </div>
  );
}
