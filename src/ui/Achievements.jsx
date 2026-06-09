import React, { useEffect, useMemo, useState } from "react";
import { Trophy, Lock, Sparkles, BarChart3, Sprout, TrendingUp, Landmark, Home, Bitcoin, Award } from "lucide-react";
import { T } from "../theme.js";
import { Card } from "./primitives.jsx";

// Définition statique des badges
export const BADGES = [
  { id: "first-step", title: "Premier pas", desc: "Lire au moins 1 thématique", Icon: Sparkles, color: T.brand, requires: (read) => Object.keys(read).length >= 1 },
  { id: "budget-master", title: "Maîtrise du budget", desc: "Lire les 5 thématiques Budget", Icon: BarChart3, color: T.brand2, requires: (read) => countByPage(read, "budget") >= 5 },
  { id: "saver", title: "Épargnant aguerri", desc: "Lire les 6 thématiques Épargne", Icon: Sprout, color: T.brand, requires: (read) => countByPage(read, "epargne") >= 6 },
  { id: "investor", title: "Investisseur éclairé", desc: "Lire les 6 thématiques Investissement", Icon: TrendingUp, color: T.coral, requires: (read) => countByPage(read, "invest") >= 6 },
  { id: "tax-savvy", title: "Au clair avec le fisc", desc: "Lire les 4 thématiques Fiscalité", Icon: Landmark, color: T.accent, requires: (read) => countByPage(read, "fiscalite") >= 4 },
  { id: "borrower-pro", title: "Crédit dompté", desc: "Lire les 5 thématiques Crédit", Icon: Home, color: T.brand2, requires: (read) => countByPage(read, "credit") >= 5 },
  { id: "crypto-safe", title: "Crypto avec recul", desc: "Lire les 5 thématiques Crypto", Icon: Bitcoin, color: T.violet, requires: (read) => countByPage(read, "crypto") >= 5 },
  { id: "completionist", title: "Diplômé EduFinance", desc: "Lire les 31 thématiques", Icon: Trophy, color: T.accent, requires: (read) => Object.keys(read).length >= 31 },
];

function countByPage(read, page) {
  return Object.keys(read).filter((k) => k.startsWith(page + "/")).length;
}

export function getUnlockedIds(readMap) {
  return BADGES.filter((b) => b.requires(readMap)).map((b) => b.id);
}

// Composant : affichage de la grille de badges
export function AchievementsGrid({ readMap }) {
  const unlocked = useMemo(() => new Set(getUnlockedIds(readMap)), [readMap]);
  const unlockedCount = unlocked.size;

  return (
    <Card style={{ padding: "clamp(24px,4vw,32px)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, color: T.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>
            <Award size={14} /> Tes badges
          </div>
          <h2 style={{ fontFamily: T.serif, fontSize: "clamp(22px,3.5vw,28px)", fontWeight: 600, color: T.text, margin: "6px 0 0" }}>
            Progression : {unlockedCount}/{BADGES.length}
          </h2>
        </div>
        <div style={{ flex: "0 0 auto" }}>
          <div style={{ width: 180, height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(unlockedCount / BADGES.length) * 100}%`, background: `linear-gradient(90deg, ${T.brand}, ${T.brand2})`, transition: "width .6s ease" }} />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12 }}>
        {BADGES.map((b) => {
          const isUnlocked = unlocked.has(b.id);
          const Ico = isUnlocked ? b.Icon : Lock;
          return (
            <div key={b.id}
              style={{
                background: isUnlocked ? `${b.color}10` : T.bgSoft,
                border: `1px solid ${isUnlocked ? b.color + "44" : T.line}`,
                borderRadius: 14,
                padding: 16,
                textAlign: "center",
                position: "relative",
                opacity: isUnlocked ? 1 : 0.5,
                transition: "all .3s",
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: isUnlocked ? `linear-gradient(135deg, ${b.color}, ${b.color}88)` : T.surface,
                color: isUnlocked ? T.bg : T.textFaint,
                display: "grid", placeItems: "center",
                margin: "0 auto 10px",
                boxShadow: isUnlocked ? `0 6px 18px -4px ${b.color}55` : "none",
                transition: "all .3s",
              }}>
                <Ico size={22} strokeWidth={2} />
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: isUnlocked ? T.text : T.textDim, marginBottom: 4 }}>{b.title}</div>
              <div style={{ fontSize: 11.5, color: T.textFaint, lineHeight: 1.4 }}>{b.desc}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

// Toast d'unlock
export function BadgeToast({ badge, onClose }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setShown(true), 20);
    const t2 = setTimeout(() => setShown(false), 5500);
    const t3 = setTimeout(onClose, 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onClose]);
  if (!badge) return null;
  const Ico = badge.Icon;
  return (
    <div role="status"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: `translateX(-50%) translateY(${shown ? "0" : "30px"})`,
        opacity: shown ? 1 : 0,
        background: T.surfaceHi,
        border: `1px solid ${badge.color}55`,
        borderRadius: 14,
        padding: "14px 20px 14px 14px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        boxShadow: `0 14px 40px -10px ${badge.color}44, 0 8px 24px rgba(0,0,0,0.5)`,
        zIndex: 150,
        transition: "all .35s cubic-bezier(.22,1,.36,1)",
        maxWidth: "calc(100vw - 32px)",
        fontFamily: T.sans,
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: "50%",
        background: `linear-gradient(135deg, ${badge.color}, ${badge.color}99)`,
        color: T.bg, display: "grid", placeItems: "center", flexShrink: 0,
      }}>
        <Ico size={20} strokeWidth={2.2} />
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: badge.color, marginBottom: 2 }}>Badge débloqué</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>{badge.title}</div>
        <div style={{ fontSize: 12.5, color: T.textDim, marginTop: 1 }}>{badge.desc}</div>
      </div>
    </div>
  );
}
