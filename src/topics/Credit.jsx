import React from "react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List } from "../ui/primitives.jsx";
import { LoanBars, VizFrame, VizCaption } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "taeg", emoji: "🎯", title: "TAEG : le seul taux qui compte",
    summary: "Pourquoi comparer deux crédits avec leur taux nominal est trompeur, et ce que cache vraiment le TAEG.",
    intro: "Le taux affiché en grand n'est jamais le coût réel. Voici ce qu'il faut chercher.",
    words: 750,
    content: (
      <div>
        <Chapter n="1" title="Taux nominal vs TAEG" color={T.brand2}>
          <P>Le <B>taux nominal</B> est le taux brut, hors frais. Le <B>TAEG (Taux Annuel Effectif Global)</B> intègre tous les coûts du crédit : intérêts, frais de dossier, assurance emprunteur, garanties. C'est le seul taux qui permet de <em>vraiment comparer</em> deux offres.</P>
          <Note color={T.brand2}>Légalement, toute publicité de crédit en France doit afficher le TAEG. Si seul le taux nominal est mis en avant, méfie-toi.</Note>
        </Chapter>
        <Chapter n="2" title="L'assurance, pas un détail" color={T.brand2}>
          <P>Sur un crédit immobilier, l'assurance emprunteur peut représenter <B>jusqu'à un tiers du coût total</B>. Depuis la loi Lemoine (2022), on peut résilier à tout moment et choisir un autre assureur (« délégation d'assurance »). Cette comparaison seule peut faire économiser 5 000 à 15 000 € sur un prêt.</P>
        </Chapter>
        <Chapter n="3" title="Lire une offre" color={T.brand2}>
          <List items={[
            { t: "Montant emprunté", d: "Capital initial — toujours connu." },
            { t: "Durée", d: "Plus elle est longue, plus le coût total grimpe — mais la mensualité baisse." },
            { t: "TAEG", d: "Coût total annualisé. Le seul comparable entre offres." },
            { t: "Mensualité totale (avec assurance)", d: "Ce que tu paies vraiment chaque mois." },
            { t: "Coût total du crédit", d: "Somme de tout ce que tu auras versé en intérêts + assurance + frais." },
          ]} color={T.brand2} />
        </Chapter>
        <Quiz color={T.brand2} questions={[
          { q: "Pourquoi ne pas se fier au seul taux nominal ?", options: ["Il est faux", "Il n'inclut pas les frais et l'assurance", "Il est interdit en France", "Il dépend de la banque"], answer: 1, explain: "Le taux nominal n'intègre ni les frais de dossier, ni l'assurance, ni les garanties. Deux offres peuvent avoir le même taux nominal mais des TAEG très différents. Seul le TAEG permet une vraie comparaison." },
        ]} />
      </div>
    ),
  },
  {
    id: "immo", emoji: "🏠", title: "Le crédit immobilier",
    summary: "Capacité d'emprunt, apport, durée : ce qui détermine vraiment combien tu peux emprunter.",
    intro: "Le plus gros engagement financier d'une vie. Voici les leviers qui comptent.",
    words: 900,
    content: (
      <div>
        <Chapter n="1" title="La capacité d'emprunt" color={T.brand2}>
          <P>Les banques françaises appliquent un <B>taux d'endettement maximum de 35 %</B> des revenus nets (HCSF). En clair : la somme de toutes tes mensualités de crédit (immo + conso) ne doit pas dépasser 35 % de tes revenus.</P>
          <Note color={T.brand2}>Pour 2 500 € de revenu net, la mensualité totale maximum est de 875 €. Sur 25 ans à 3,5 %, cela correspond à un emprunt d'environ 175 000 €.</Note>
        </Chapter>
        <Chapter n="2" title="L'impact de la durée" color={T.brand2}>
          <P>Allonger la durée baisse la mensualité — mais explose le coût total. Comparons un emprunt de 200 000 € à 3,5 % :</P>
          <VizFrame title="Coût total d'un emprunt de 200 000 € à 3,5 % selon la durée">
            <LoanBars data={[
              { label: "15 ans", principal: 200000, interest: 57500 },
              { label: "20 ans", principal: 200000, interest: 78400 },
              { label: "25 ans", principal: 200000, interest: 100800 },
              { label: "30 ans", principal: 200000, interest: 124000 },
            ]} />
            <VizCaption>Passer de 20 à 30 ans = +45 000 € d'intérêts payés, pour une mensualité allégée d'environ 250 €/mois.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="3" title="L'apport personnel" color={T.brand2}>
          <P>Les banques demandent généralement un apport d'au moins <B>10 %</B> du prix (frais de notaire). Un apport plus important (15-20 %) ouvre l'accès à de meilleurs taux et rassure la banque sur ta capacité d'épargne.</P>
          <DeepDive>L'apport optimal n'est pas forcément le plus élevé possible. Si tes placements rapportent plus que ton taux d'emprunt, garder de la liquidité pour investir peut être pertinent. À l'inverse, sans épargne de sécurité au-delà de l'apport, c'est imprudent. La règle de prudence : garder au moins 6 mois de dépenses + l'apport.</DeepDive>
        </Chapter>
        <Chapter n="4" title="Quand renégocier ?" color={T.brand2}>
          <List items={[
            "Quand les taux du marché sont inférieurs d'au moins 0,7-1 point à ton taux actuel.",
            "Quand il te reste plus de la moitié du capital à rembourser (l'essentiel des intérêts est en début de prêt).",
            "Quand l'opération couvre largement les frais (indemnités de remboursement anticipé + frais du nouveau prêt).",
          ]} color={T.brand2} />
        </Chapter>
        <Quiz color={T.brand2} questions={[
          { q: "Pour 3 000 € de revenu net, quelle mensualité maximum les banques acceptent en général ?", options: ["500 €", "1 050 € (35 %)", "1 500 €", "Tout dépend de ton score de crédit"], answer: 1, explain: "Le HCSF français plafonne à 35 %. 3 000 € × 35 % = 1 050 € pour TOUTES tes mensualités de crédit cumulées (immo + conso + auto…). Quelques exceptions existent mais sont marginales." },
          { q: "Tu compares deux prêts immobiliers : 20 ans vs 30 ans, même montant. Vrai ou faux : « le 30 ans est meilleur car la mensualité est plus basse » ?", options: ["Vrai dans tous les cas", "Faux : tu paies bien plus d'intérêts au total", "Vrai si tu places la différence", "Aucune différence sur le long terme"], answer: 1, explain: "Sur 30 ans à 3,5 %, on paie environ 45 000 € d'intérêts en plus qu'en 20 ans. La mensualité est plus douce, mais le coût total est massif. La bonne durée est celle qui combine mensualité supportable et coût total raisonnable." },
        ]} />
      </div>
    ),
  },
  {
    id: "conso", emoji: "💳", title: "Crédit conso : pièges à éviter",
    summary: "Pourquoi les taux à 18 % et le « paye en 4 fois » sont des outils financiers dangereux.",
    intro: "Le crédit à la consommation est utile dans certains cas, désastreux dans beaucoup d'autres.",
    words: 800,
    content: (
      <div>
        <Chapter n="1" title="Les vrais taux du crédit conso" color={T.coral}>
          <P>Les crédits à la consommation classiques tournent autour de <B>4-8 % TAEG</B> pour un prêt personnel, mais les crédits renouvelables (revolving) peuvent atteindre <B>15-20 %</B>. À ces taux, un achat « ponctuel » devient une dette qui dure des années.</P>
          <Note color={T.coral}>Un crédit revolving de 1 500 € remboursé au minimum à 18 % de TAEG peut prendre plus de 10 ans à solder, pour un coût total dépassant le double du capital initial.</Note>
        </Chapter>
        <Chapter n="2" title="Le piège du BNPL" color={T.coral}>
          <P>« Paye en 4 fois » et autres formules de paiement fractionné sont juridiquement des crédits, mais présentés comme indolores. Trois problèmes :</P>
          <List items={[
            "Tu perds la perception du coût total : 200 € fractionnés en 4 paraissent moins qu'une dépense unique.",
            "Multiplier les BNPL rend le suivi très difficile et peut mener au surendettement insidieux.",
            "En cas d'incident, les frais sont souvent très élevés.",
          ]} color={T.coral} />
        </Chapter>
        <Chapter n="3" title="Quand le crédit conso a du sens" color={T.brand}>
          <P>Pas toujours négatif, le crédit conso peut être utile pour :</P>
          <List items={[
            "Un équipement essentiel à un usage productif (véhicule pour aller travailler, formation rentable).",
            "Éviter de casser une épargne fiscalement avantageuse (PEA, assurance-vie après 8 ans).",
            "Profiter d'un prêt à 0 % réellement intéressant (auto, écologie).",
          ]} color={T.brand} />
          <DeepDive>Avant tout crédit conso : se demander si l'achat peut attendre, comparer au coût d'épargne accélérée, et exiger plusieurs offres TAEG. Un « non » à 18 % vaut mieux qu'un « oui » mal négocié.</DeepDive>
        </Chapter>
        <Quiz color={T.coral} questions={[
          { q: "Pourquoi le crédit renouvelable (revolving) est particulièrement dangereux ?", options: ["Il a un taux très bas", "Son TAEG est très élevé (souvent 15-20 %) et il se prolonge facilement", "Il est interdit en France", "Il est exonéré d'intérêts"], answer: 1, explain: "Les taux peuvent atteindre 20 % TAEG. Combiné à un remboursement minimum faible, la dette peut s'éterniser des années pour des montants modestes. C'est le principal pourvoyeur de surendettement." },
          { q: "Le « paye en 4 fois sans frais » est :", options: ["Un cadeau de la banque", "Juridiquement un crédit, présenté de façon à minimiser sa perception", "Une nouvelle forme d'épargne", "Réservé aux mineurs"], answer: 1, explain: "Le BNPL (Buy Now, Pay Later) est un crédit. Le fractionnement « indolore » masque le coût psychologique réel et peut empiler des dettes invisibles. Très utilisé par le commerce en ligne pour faire grimper le panier moyen." },
        ]} />
      </div>
    ),
  },
  {
    id: "surendet", emoji: "⛔", title: "Surendettement : comprendre, prévenir, réagir",
    summary: "Comment ça arrive, les signaux d'alerte, et la procédure officielle en France.",
    intro: "Un sujet tabou mais essentiel : 100 000 dossiers sont déposés chaque année en France.",
    words: 850,
    content: (
      <div>
        <Chapter n="1" title="Comment on bascule" color={T.coral}>
          <P>Le surendettement résulte rarement d'un seul mauvais choix. C'est en général la combinaison d'un <B>événement déclencheur</B> (perte d'emploi, séparation, maladie) et d'une <B>fragilité préexistante</B> (absence de fonds d'urgence, multiples crédits à la consommation).</P>
          <List items={[
            { t: "Perte de revenus brutale", d: "Sans fonds d'urgence, chaque mensualité devient un combat." },
            { t: "Accumulation de petits crédits", d: "Plusieurs revolving + BNPL + crédit auto, chacun supportable seul, ingérables ensemble." },
            { t: "Faux dépannage par nouveau crédit", d: "Le piège classique : emprunter pour rembourser, ce qui retarde et aggrave le problème." },
          ]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="Les signaux d'alerte" color={T.coral}>
          <List items={[
            "Tu as recours à un découvert chaque mois.",
            "Plus de 35 % de tes revenus partent en mensualités.",
            "Tu utilises un crédit (même 0 %) pour payer une dépense courante.",
            "Tu reportes des paiements (loyer, électricité…) pour honorer une mensualité.",
            "Tu reçois des relances ou des mises en demeure.",
          ]} color={T.coral} />
        </Chapter>
        <Chapter n="3" title="La procédure de surendettement" color={T.brand}>
          <P>En France, le dossier de surendettement se dépose <B>à la Banque de France</B>, gratuitement. La commission peut :</P>
          <List items={[
            { t: "Étaler les dettes", d: "Sur plusieurs années, avec gel ou réduction des intérêts." },
            { t: "Effacer partiellement", d: "Si la situation est jugée irrémédiablement compromise." },
            { t: "Procédure de rétablissement personnel", d: "Effacement total des dettes en cas d'impossibilité absolue de remboursement (rare, mais existe)." },
          ]} color={T.brand} />
          <Note color={T.brand}>Déposer un dossier est un droit. Ce n'est pas un échec personnel : c'est une procédure légale conçue pour donner une seconde chance et protéger d'un harcèlement de créanciers. Des associations (CRESUS, Familles Rurales, UDAF) accompagnent gratuitement.</Note>
        </Chapter>
        <Quiz color={T.brand} questions={[
          { q: "Où dépose-t-on un dossier de surendettement en France ?", options: ["Au tribunal", "À la Banque de France, gratuitement", "Chez un huissier", "Auprès de l'employeur"], answer: 1, explain: "Le dépôt se fait gratuitement à la Banque de France. C'est une procédure légale, pas honteuse : elle est conçue pour permettre la sortie d'une spirale d'endettement et stopper les poursuites des créanciers." },
          { q: "Quel est le piège classique du surendettement débutant ?", options: ["Ne pas avoir de carte bleue", "Utiliser un nouveau crédit pour rembourser les anciens", "Trop épargner", "Acheter en cash"], answer: 1, explain: "Emprunter pour rembourser empile les frais et masque la situation. À ce stade, il faut parler à sa banque, contacter une association ou la Banque de France — pas signer un nouveau crédit." },
        ]} />
      </div>
    ),
  },
];

export default function Credit(p) {
  return <TopicHub pageId="credit" topics={TOPICS} {...p} />;
}
