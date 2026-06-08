import React, { useState } from "react";
import { ClipboardList, Check, X, Target, ThumbsUp, RotateCcw } from "lucide-react";
import { T } from "../theme.js";

export default function Quiz({ questions, color = T.brand, onComplete }) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[idx];

  const pick = (i) => {
    if (picked != null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx === questions.length - 1) {
      setDone(true);
      onComplete?.(score + (picked === q.answer ? 0 : 0));
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  };

  const restart = () => { setIdx(0); setPicked(null); setScore(0); setDone(false); };

  if (done) {
    const finalScore = score;
    const total = questions.length;
    const ratio = finalScore / total;
    const verdict =
      ratio === 1 ? { t: "Sans-faute", VIcon: Target, c: T.brand, msg: "Tu as parfaitement assimilé cette leçon." } :
      ratio >= 0.7 ? { t: "Très bien", VIcon: ThumbsUp, c: T.brand2, msg: "Tu maîtrises les notions essentielles." } :
      ratio >= 0.4 ? { t: "Pas mal", VIcon: null, c: T.accent, msg: "Quelques notions à revoir, n'hésite pas à relire les passages clés." } :
      { t: "À retravailler", VIcon: null, c: T.coral, msg: "Reprends la leçon plus calmement, les concepts en valent la peine." };
    const VIcon = verdict.VIcon;
    return (
      <div style={{ background: T.bgSoft, border: `1px solid ${verdict.c}55`, borderRadius: 18, padding: 26, margin: "24px 0" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: verdict.c, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 10 }}>
          <ClipboardList size={14} strokeWidth={2} /> Quiz terminé
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: T.serif, fontSize: 28, fontWeight: 600, color: T.text, marginBottom: 6 }}>
          {finalScore} / {total} — {verdict.t}
          {VIcon && <VIcon size={26} strokeWidth={2} color={verdict.c} />}
        </div>
        <div style={{ fontSize: 15, color: T.textDim, lineHeight: 1.6, marginBottom: 16 }}>{verdict.msg}</div>
        <button onClick={restart} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: verdict.c, border: `1.5px solid ${verdict.c}`, borderRadius: 10, padding: "10px 18px", fontWeight: 700, cursor: "pointer" }}>
          <RotateCcw size={15} strokeWidth={2.2} /> Refaire le quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: T.bgSoft, border: `1px solid ${color}33`, borderRadius: 18, padding: 26, margin: "24px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color, letterSpacing: 0.5, textTransform: "uppercase" }}>
          <ClipboardList size={14} strokeWidth={2} /> Quiz · Question {idx + 1}/{questions.length}
        </span>
        <div style={{ display: "flex", gap: 4 }}>
          {questions.map((_, i) => (
            <span key={i} style={{ width: 22, height: 4, borderRadius: 2, background: i <= idx ? color : "rgba(255,255,255,0.1)", transition: "background .3s" }} />
          ))}
        </div>
      </div>
      <div style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 600, color: T.text, lineHeight: 1.35, marginBottom: 16 }}>{q.q}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = picked != null && i === q.answer;
          const isWrong = isPicked && i !== q.answer;
          const bg = isCorrect ? `${T.brand}22` : isWrong ? `${T.coral}22` : isPicked ? `${color}15` : T.surface;
          const bd = isCorrect ? T.brand : isWrong ? T.coral : isPicked ? color : T.line;
          return (
            <button key={i} onClick={() => pick(i)} disabled={picked != null}
              style={{
                textAlign: "left",
                background: bg,
                border: `1px solid ${bd}`,
                borderRadius: 12,
                padding: "12px 16px",
                color: T.text,
                fontSize: 15,
                cursor: picked == null ? "pointer" : "default",
                transition: "all .2s",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, background: "rgba(255,255,255,0.05)", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700, color: T.textDim, flexShrink: 0 }}>
                {String.fromCharCode(65 + i)}
              </span>
              <span style={{ flex: 1 }}>{opt}</span>
              {isCorrect && <Check size={18} strokeWidth={3} color={T.brand} />}
              {isWrong && <X size={18} strokeWidth={3} color={T.coral} />}
            </button>
          );
        })}
      </div>
      {picked != null && (
        <div style={{ marginTop: 14, padding: "12px 14px", background: `${(picked === q.answer ? T.brand : T.coral)}10`, borderLeft: `3px solid ${picked === q.answer ? T.brand : T.coral}`, borderRadius: "0 8px 8px 0" }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: picked === q.answer ? T.brand : T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>
            {picked === q.answer ? "Correct" : "Réponse attendue : " + String.fromCharCode(65 + q.answer)}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, color: "#D5DEEF" }}>{q.explain}</div>
        </div>
      )}
      {picked != null && (
        <button onClick={next} style={{ marginTop: 14, background: color, color: T.bg, border: "none", borderRadius: 10, padding: "11px 20px", fontWeight: 700, cursor: "pointer", fontSize: 14.5 }}>
          {idx === questions.length - 1 ? "Voir le résultat" : "Question suivante →"}
        </button>
      )}
    </div>
  );
}
