import React from "react";
import { T } from "../theme.js";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    this.setState({ info });
    if (typeof console !== "undefined") {
      console.error("EduFinance crash:", error, info);
    }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: "100vh", background: T.bg, color: T.text, fontFamily: T.sans, padding: 40, boxSizing: "border-box" }}>
          <div style={{ maxWidth: 760, margin: "60px auto" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.coral, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 12 }}>
              Erreur d'affichage
            </div>
            <h1 style={{ fontFamily: T.serif, fontSize: 32, fontWeight: 600, color: T.text, margin: "0 0 14px" }}>
              Quelque chose s'est mal passé
            </h1>
            <p style={{ fontSize: 16, color: T.textDim, lineHeight: 1.6, marginBottom: 24 }}>
              Le site n'a pas pu se charger correctement. Essaie de recharger la page (Ctrl+Shift+R).
              Si le problème persiste, le message ci-dessous peut aider à diagnostiquer.
            </p>
            <pre style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: 12, padding: 18, fontSize: 13, color: T.coral, overflow: "auto", maxHeight: 260, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {String(this.state.error?.message || this.state.error)}
              {this.state.error?.stack && "\n\n" + this.state.error.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{ marginTop: 18, background: T.brand, color: T.bg, border: "none", borderRadius: 10, padding: "11px 20px", fontWeight: 700, cursor: "pointer", fontSize: 14.5 }}
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
