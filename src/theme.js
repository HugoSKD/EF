import {
  BarChart3, Sprout, TrendingUp, Landmark, Home, Bitcoin, Calculator, BookOpen,
} from "lucide-react";

export const T = {
  bg: "#0B1120",
  bgSoft: "#111A2E",
  surface: "#16213A",
  surfaceHi: "#1D2A47",
  line: "rgba(255,255,255,0.08)",
  text: "#EAF0FB",
  textDim: "#9AA8C2",
  textFaint: "#67748F",
  brand: "#5EE8C4",
  brand2: "#7CA8FF",
  accent: "#FFB454",
  coral: "#FF7A7A",
  violet: "#B79CFF",
  serif: "'Fraunces', Georgia, serif",
  sans: "'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif",
};

export const PAGES = [
  { id: "accueil", label: "Accueil" },
  { id: "budget", label: "Budget" },
  { id: "epargne", label: "Épargne" },
  { id: "invest", label: "Investissement" },
  { id: "fiscalite", label: "Fiscalité" },
  { id: "credit", label: "Crédit" },
  { id: "crypto", label: "Crypto" },
  { id: "outils", label: "Outils" },
  { id: "glossaire", label: "Glossaire" },
];

export const THEME = {
  budget: { c: T.brand2, Icon: BarChart3, tag: "Les fondamentaux", title: "Maîtriser son budget", intro: "Le budget est la fondation de toute santé financière. Choisis une thématique pour l'approfondir à ton rythme." },
  epargne: { c: T.brand, Icon: Sprout, tag: "Faire fructifier", title: "Épargner intelligemment", intro: "Transformer l'épargne en système plutôt qu'en effort de volonté. Quatre thématiques pour tout comprendre." },
  invest: { c: T.coral, Icon: TrendingUp, tag: "Les marchés", title: "Comprendre l'investissement", intro: "Comprendre les outils, les principes et les pièges — jamais pour te dire quoi acheter. Choisis ton sujet." },
  fiscalite: { c: T.accent, Icon: Landmark, tag: "Impôts & enveloppes", title: "Comprendre la fiscalité", intro: "Comment l'État prélève sur tes revenus et tes placements — et les enveloppes qui changent la donne sur le long terme." },
  credit: { c: T.brand2, Icon: Home, tag: "Emprunter sans se piéger", title: "Crédit et endettement", intro: "Mensualité, TAEG, capacité d'emprunt, surendettement : les mécaniques à comprendre avant de signer." },
  crypto: { c: T.violet, Icon: Bitcoin, tag: "Technologies financières", title: "Décrypter la crypto & le Web3", intro: "Comprendre comment ça marche, et surtout repérer les pièges. Quatre thématiques pour y voir clair." },
  outils: { c: T.accent, Icon: Calculator, tag: "Outils interactifs", title: "Boîte à outils", intro: "Quatre simulateurs pour visualiser concrètement les mécanismes financiers — jamais pour te dire quoi faire." },
  glossaire: { c: T.brand, Icon: BookOpen, tag: "Lexique", title: "Glossaire", intro: "Tous les termes financiers expliqués sans jargon. Cherche un mot, ou parcours par thème." },
};

export const euro = (n) => Math.round(n).toLocaleString("fr-FR") + " €";
export const pct = (n, d = 1) => n.toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d }) + " %";
