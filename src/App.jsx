import React, { useEffect, useState } from "react";
import { T, PAGES } from "./theme.js";
import Accueil from "./pages/Accueil.jsx";
import Outils from "./pages/Outils.jsx";
import Glossaire from "./pages/Glossaire.jsx";
import Budget from "./topics/Budget.jsx";
import Epargne from "./topics/Epargne.jsx";
import Invest from "./topics/Invest.jsx";
import Fiscalite from "./topics/Fiscalite.jsx";
import Credit from "./topics/Credit.jsx";
import Crypto from "./topics/Crypto.jsx";
import ScrollProgress from "./ui/ScrollProgress.jsx";
import BackToTop from "./ui/BackToTop.jsx";

export default function App() {
  const [page, setPage] = useState("accueil");
  const [topic, setTopic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (p) => { setPage(p); setTopic(null); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
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

  // Update document title
  useEffect(() => {
    const labels = {
      accueil: "EduFinance — Éducation financière",
      budget: "Budget · EduFinance",
      epargne: "Épargne · EduFinance",
      invest: "Investissement · EduFinance",
      fiscalite: "Fiscalité · EduFinance",
      credit: "Crédit · EduFinance",
      crypto: "Crypto & Web3 · EduFinance",
      outils: "Outils · EduFinance",
      glossaire: "Glossaire · EduFinance",
    };
    document.title = labels[page] || "EduFinance";
  }, [page]);

  const hubProps = { openId: topic, onOpen: openTopic, onBack: backToTopics };
  const render = () => {
    switch (page) {
      case "budget": return <Budget {...hubProps} />;
      case "epargne": return <Epargne {...hubProps} />;
      case "invest": return <Invest {...hubProps} />;
      case "fiscalite": return <Fiscalite {...hubProps} />;
      case "credit": return <Credit {...hubProps} />;
      case "crypto": return <Crypto {...hubProps} />;
      case "outils": return <Outils />;
      case "glossaire": return <Glossaire />;
      default: return <Accueil go={go} />;
    }
  };

  return (
    <div style={{ background: T.bg, minHeight: "100vh", color: T.text, fontFamily: T.sans }}>
      <ScrollProgress />

      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(11,17,32,0.82)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 22px", display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={() => go("accueil")} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${T.brand}, ${T.brand2})`, display: "grid", placeItems: "center", color: T.bg, fontWeight: 800, fontSize: 17 }}>€</span>
            <span style={{ fontFamily: T.serif, fontSize: 21, fontWeight: 600, letterSpacing: -0.3 }}>EduFinance</span>
          </button>

          <nav className="ef-nav-desktop" style={{ display: "flex", gap: 2, marginLeft: "auto", flexWrap: "wrap" }}>
            {PAGES.map((p) => (
              <button key={p.id} onClick={() => go(p.id)} style={{
                background: page === p.id ? T.surfaceHi : "transparent",
                color: page === p.id ? T.text : T.textDim,
                border: "none", borderRadius: 9, padding: "9px 13px",
                fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all .2s"
              }}>{p.label}</button>
            ))}
          </nav>

          <button className="ef-nav-burger" aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ marginLeft: "auto", display: "none", background: "transparent", border: `1px solid ${T.line}`, borderRadius: 10, padding: 8, color: T.text, cursor: "pointer", flexDirection: "column", gap: 4 }}>
            <span style={{ width: 18, height: 2, background: T.text, transition: "all .25s", transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
            <span style={{ width: 18, height: 2, background: T.text, transition: "all .25s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 18, height: 2, background: T.text, transition: "all .25s", transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="ef-mobile-menu" style={{ display: "none", borderTop: `1px solid ${T.line}`, background: T.bgSoft, padding: "10px 16px 16px" }}>
            {PAGES.map((p) => (
              <button key={p.id} onClick={() => go(p.id)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  background: page === p.id ? T.surfaceHi : "transparent",
                  color: page === p.id ? T.text : T.textDim,
                  border: "none", borderRadius: 9, padding: "12px 14px",
                  fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 4
                }}>{p.label}</button>
            ))}
          </div>
        )}
      </header>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 22px 64px" }}>{render()}</main>

      <footer style={{ borderTop: `1px solid ${T.line}`, background: T.bgSoft }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 22px", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 380 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${T.brand}, ${T.brand2})`, display: "grid", placeItems: "center", color: T.bg, fontWeight: 800, fontSize: 14 }}>€</span>
              <span style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 600 }}>EduFinance</span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: T.textFaint, margin: 0 }}>
              Plateforme éducative gratuite et sans publicité. Projet Ingénieur Citoyen — Hugo HEYMES, FISE A3 Info.
              Vocation strictement pédagogique, aucun conseil personnalisé.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 11.5, color: T.textFaint, letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>Parcours</div>
            {PAGES.map((p) => (
              <button key={p.id} onClick={() => go(p.id)}
                style={{ all: "unset", cursor: "pointer", fontSize: 13.5, color: T.textDim }}>
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${T.line}`, padding: "16px 22px", textAlign: "center", fontSize: 12.5, color: T.textFaint }}>
          © {new Date().getFullYear()} EduFinance · Contenu éducatif — investir comporte des risques.
        </div>
      </footer>

      <BackToTop />

      <style>{`
        input[type=range]::-webkit-slider-thumb{ -webkit-appearance:none; width:18px; height:18px; border-radius:50%; background:${T.brand}; cursor:pointer; box-shadow:0 0 0 4px rgba(94,232,196,0.2); }
        input[type=range]::-moz-range-thumb{ width:18px; height:18px; border:none; border-radius:50%; background:${T.brand}; cursor:pointer; }
        @media (max-width:780px){ .ef-calc{ grid-template-columns:1fr !important; } }
        @media (max-width:880px){
          .ef-nav-desktop{ display:none !important; }
          .ef-nav-burger{ display:flex !important; }
          .ef-mobile-menu{ display:block !important; }
        }
        @keyframes efFloat1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,30px)} }
        @keyframes efFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-20px)} }
        @keyframes efFloat3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,20px) scale(1.1)} }
        html { scroll-behavior: smooth; }
        ::selection { background: ${T.brand}55; color: ${T.text}; }
      `}</style>
    </div>
  );
}
