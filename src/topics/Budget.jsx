import React from "react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List } from "../ui/primitives.jsx";
import { DonutChart, VBars, VizFrame, VizCaption, CashflowDiagram } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "flux", emoji: "💸", title: "Comprendre ses flux d'argent",
    summary: "Revenus, dépenses fixes et variables : la cartographie de base avant tout le reste.",
    intro: "Avant toute méthode, il faut voir clair : d'où vient l'argent, où il part, et sur quoi tu peux vraiment agir.",
    words: 750,
    content: (
      <div>
        <Chapter n="1" title="Entrées et sorties" color={T.brand2}>
          <P>Tout budget repose sur une idée simple : comparer ce qui <B>entre</B> (salaire, bourse, aides, revenus annexes) et ce qui <B>sort</B>. L'objectif n'est pas de tout calculer au centime, mais d'avoir une vision d'ensemble pour ne plus subir ses finances.</P>
          <P>Trois questions suffisent pour démarrer : combien je touche en net chaque mois ? À combien s'élèvent mes charges incompressibles ? Que me reste-t-il vraiment <em>une fois tout payé</em> ?</P>
        </Chapter>
        <Chapter n="2" title="Fixe vs variable" color={T.brand2}>
          <P>On sépare les dépenses en deux familles. Les <B>dépenses fixes</B> reviennent chaque mois pour un montant prévisible : loyer, abonnements, assurances, remboursements. Les <B>dépenses variables</B> fluctuent : courses, sorties, loisirs, vêtements.</P>
          <P>C'est presque toujours sur les variables que se jouent les ajustements, car les fixes sont difficiles à modifier à court terme. Connaître la proportion fixe/variable de ton budget te dit immédiatement quelle est ta marge de manœuvre réelle.</P>
        </Chapter>
        <Chapter n="3" title="Visualiser ses flux" color={T.brand2}>
          <VizFrame title="Schéma d'un budget mensuel sain (exemple : 2 000 € nets)">
            <CashflowDiagram income={2000} fixed={1000} variable={600} savings={400} />
            <VizCaption>Le revenu se sépare en trois flux. L'épargne est traitée comme une dépense incompressible, pas comme un reste.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="4" title="« Se payer en premier »" color={T.brand2}>
          <P>Une règle d'or change tout : plutôt qu'épargner « ce qu'il reste » en fin de mois (souvent zéro), on met de côté <B>dès la réception du revenu</B>, puis on vit avec le reste. C'est le principe « pay yourself first ».</P>
          <Note color={T.brand2}>Cette inversion mentale est étonnamment puissante : ton épargne devient une dépense « obligatoire » comme le loyer, au lieu d'une variable d'ajustement sacrifiée au premier imprévu.</Note>
        </Chapter>
        <Quiz color={T.brand2} questions={[
          { q: "Quelle est la principale différence entre une dépense fixe et variable ?", options: ["Le montant", "La prévisibilité d'un mois à l'autre", "Le moyen de paiement", "L'utilité"], answer: 1, explain: "Une dépense fixe (loyer, assurance) est prévisible et stable. Une variable (courses, loisirs) fluctue. C'est sur les variables que se jouent la plupart des ajustements." },
          { q: "Le principe « pay yourself first » consiste à :", options: ["Augmenter son salaire", "Payer ses dettes en priorité", "Épargner dès la réception du revenu, avant toute dépense", "Acheter ce qu'on désire avant de penser au reste"], answer: 2, explain: "L'idée est d'inverser l'ordre habituel : épargner d'abord (virement automatique), puis vivre avec ce qui reste. Sinon, l'épargne devient la variable d'ajustement et finit souvent à zéro." },
        ]} />
      </div>
    ),
  },
  {
    id: "503020", emoji: "🥧", title: "La méthode 50/30/20",
    summary: "Un cadre simple et visuel pour répartir un revenu net entre besoins, envies et avenir.",
    intro: "Popularisée par Elizabeth Warren, cette méthode propose trois grandes enveloppes pour visualiser un équilibre sain.",
    words: 800,
    content: (
      <div>
        <Chapter n="1" title="Le principe en trois enveloppes" color={T.brand2}>
          <VizFrame title="Répartition cible d'un revenu net">
            <DonutChart data={[
              { label: "Besoins essentiels", value: 50, color: T.brand2 },
              { label: "Envies & plaisirs", value: 30, color: T.brand },
              { label: "Épargne & dettes", value: 20, color: T.accent },
            ]} centerLabel="Revenu net" centerValue="100 %" />
            <VizCaption>Un cadre indicatif — à adapter à ta situation réelle.</VizCaption>
          </VizFrame>
          <List items={[
            { t: "50 % — Besoins", d: "Le vital : logement, alimentation, transport, factures, santé, minimum des dettes." },
            { t: "30 % — Envies", d: "Ce qui améliore la vie sans être indispensable : restaurants, loisirs, abonnements, shopping." },
            { t: "20 % — Avenir", d: "Épargne, fonds d'urgence et remboursement accéléré des dettes au-delà du minimum." },
          ]} color={T.brand2} />
        </Chapter>
        <Chapter n="2" title="Adapter à sa réalité" color={T.brand2}>
          <P>Ces ratios ne sont pas gravés dans le marbre. Dans une grande ville où le loyer engloutit 45 % du revenu, viser 50 % de besoins est irréaliste : on parlera plutôt de 60/20/20, voire 70/15/15 en début de carrière.</P>
          <P>L'important n'est pas le chiffre exact mais d'avoir <B>une intention consciente</B> pour chaque euro. Étudiant à Paris ? Cadre en province ? Indépendant à revenus variables ? Chaque profil ajuste les curseurs.</P>
          <DeepDive>Certaines variantes ajoutent une 4ᵉ enveloppe « générosité/dons », d'autres séparent l'épargne de précaution de l'épargne d'investissement. La méthode « zéro-based budgeting » va plus loin : chaque euro reçoit une mission jusqu'à ce que le solde planifié atteigne zéro. La méthode des « enveloppes physiques » (cash dans des enveloppes par catégorie) fonctionne très bien pour ceux qui ont du mal avec les dépenses variables.</DeepDive>
        </Chapter>
        <Chapter n="3" title="Et si je suis loin du compte ?" color={T.coral}>
          <P>Si tes besoins dépassent 70-80 % de ton revenu, c'est un signal d'alerte : le levier ne sera pas l'épargne (impossible) mais soit <B>augmenter les revenus</B> (formation, changement de poste, complément), soit <B>réduire un poste fixe majeur</B> (logement, transport). Les petites économies (café, abonnements) ne suffiront pas à inverser la tendance.</P>
        </Chapter>
        <Quiz color={T.brand2} questions={[
          { q: "Quelle enveloppe contient le remboursement minimum des dettes ?", options: ["50 % besoins", "30 % envies", "20 % avenir", "Ce n'est pas une dépense"], answer: 0, explain: "Le minimum imposé par le contrat est dans les « besoins » (incompressible). Le remboursement accéléré au-delà du minimum, lui, va dans les « 20 % avenir »." },
          { q: "Le 50/30/20 est-il une règle absolue ?", options: ["Oui, c'est une loi mathématique", "Non, c'est un cadre indicatif à adapter", "C'est obsolète, on utilise 30/30/40 maintenant", "Cela ne fonctionne que pour les hauts revenus"], answer: 1, explain: "C'est un point de repère pédagogique. À Paris ou en début de carrière, on adapte (70/15/15 par exemple). L'essentiel est d'avoir une intention consciente pour chaque euro." },
        ]} />
      </div>
    ),
  },
  {
    id: "suivi", emoji: "🔍", title: "Suivre ses dépenses",
    summary: "L'exercice du mois : traquer les fuites invisibles et reprendre le contrôle sans se priver.",
    intro: "Le levier le plus puissant et le plus simple. La prise de conscience suffit souvent à changer les comportements.",
    words: 720,
    content: (
      <div>
        <Chapter n="1" title="L'exercice des 30 jours" color={T.brand2}>
          <P>Note <B>chaque dépense pendant 30 jours</B>. Une appli de banque, un tableur, ou même un carnet suffisent. La plupart des gens découvrent alors des « fuites » invisibles : abonnements oubliés, micro-achats quotidiens, livraisons impulsives.</P>
        </Chapter>
        <Chapter n="2" title="Cibler les 3 plus gros postes" color={T.brand2}>
          <P>Le réflexe gagnant : classer les dépenses par catégorie et regarder les <B>trois plus gros postes</B>. C'est là que se trouvent les vrais leviers — bien plus que dans le café du matin, qui pèse souvent beaucoup moins qu'on ne le croit.</P>
          <VizFrame title="Où part vraiment l'argent (exemple type)">
            <VBars data={[
              { label: "Logement", v: 700, color: T.brand2 },
              { label: "Courses", v: 320, color: T.brand },
              { label: "Transport", v: 180, color: T.accent },
              { label: "Loisirs", v: 150, color: T.violet },
              { label: "Café/snacks", v: 60, color: T.coral },
            ]} unit=" €" />
            <VizCaption>Réduire de 10 % le logement libère plus que supprimer tous les cafés.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="3" title="Dépenser selon ses valeurs" color={T.brand2}>
          <Note color={T.brand2} title="Astuce psychologie">Distinguer « dépense plaisir assumée » et « dépense automatique non réfléchie » change tout. Le but n'est pas de se priver, mais de dépenser <em>en accord avec ses valeurs</em>.</Note>
          <P>Un exercice utile : à la fin du mois, surligne en vert les dépenses dont tu es content et en rouge celles qui te laissent indifférent. Mois après mois, le rouge diminue mécaniquement.</P>
        </Chapter>
        <Quiz color={T.brand2} questions={[
          { q: "Quel est le poste le plus efficace à optimiser en général ?", options: ["Les cafés et snacks quotidiens", "L'un des trois plus gros postes du budget", "Les abonnements oubliés", "Tous au même niveau"], answer: 1, explain: "Mathématiquement, réduire de 10 % un gros poste libère bien plus que supprimer un petit. Le café du matin coûte rarement plus de 30 €/mois ; le logement, dix fois plus." },
        ]} />
      </div>
    ),
  },
  {
    id: "urgence", emoji: "🛟", title: "Le fonds d'urgence",
    summary: "La réserve de sécurité qui évite l'endettement au premier imprévu. La priorité n°1.",
    intro: "Avant même de penser à épargner pour le plaisir ou à investir, on bâtit son matelas de sécurité.",
    words: 780,
    content: (
      <div>
        <Chapter n="1" title="Pourquoi c'est prioritaire" color={T.brand2}>
          <P>Une réserve couvrant <B>3 à 6 mois de dépenses essentielles</B>, placée sur un support immédiatement disponible, évite de s'endetter au premier imprévu — panne, perte d'emploi, frais de santé — qui, sinon, peut faire basculer tout un équilibre.</P>
          <P>Cette réserve a un coût d'opportunité (elle rapporte peu) mais c'est son rôle : être disponible <em>sans condition</em>. Ce n'est pas un placement, c'est une assurance.</P>
        </Chapter>
        <Chapter n="2" title="Le construire par paliers" color={T.brand2}>
          <List items={[
            { t: "Palier 1", d: "Viser 1 000 € le plus vite possible : il absorbe la majorité des imprévus courants." },
            { t: "Palier 2", d: "Compléter jusqu'à 3 mois de dépenses, puis 6 si ta situation est instable (CDD, freelance)." },
            { t: "Palier 3", d: "Le garder sur un support liquide et garanti — son rôle est la sécurité, pas le rendement." },
          ]} color={T.brand2} />
          <Note color={T.brand2}>Même 500 € de réserve changent radicalement ta capacité à encaisser un coup dur sans recourir au crédit à la consommation.</Note>
        </Chapter>
        <Chapter n="3" title="Les pièges qui ruinent un budget" color={T.coral}>
          <List items={[
            { t: "Le crédit conso pour du confort", d: "Ses taux élevés transforment un achat ponctuel en dette qui dure des années." },
            { t: "Les abonnements zombies", d: "Streaming, applis, salles de sport inutilisées : un audit annuel suffit à les éliminer." },
            { t: "L'inflation du train de vie", d: "Quand le revenu monte, les dépenses suivent et l'épargne reste à zéro. Le piège n°1 des jeunes actifs." },
            { t: "Le BNPL (« paye en 4 fois »)", d: "Présenté comme « gratuit », il fractionne les dépenses et fait perdre la sensation de coût. La somme totale peut vite déraper." },
          ]} color={T.coral} />
          <DeepDive title="Le piège de l'inflation du train de vie">Tu passes de 1 800 € à 2 400 € net : génial. Mais en six mois, un loyer plus grand et des sorties plus fréquentes absorbent toute la hausse. Malgré +33 % de revenu, ton épargne n'a pas bougé. La parade : <B>« verrouiller » une partie de chaque augmentation</B> vers l'épargne automatique avant de s'habituer au nouveau niveau de vie. Règle simple : 50 % de chaque augmentation va en épargne supplémentaire, automatiquement.</DeepDive>
        </Chapter>
        <Quiz color={T.brand2} questions={[
          { q: "Combien faut-il viser pour son fonds d'urgence ?", options: ["1 an de revenus", "3 à 6 mois de dépenses essentielles", "10 % de son patrimoine", "Le montant de son loyer"], answer: 1, explain: "3 mois si situation stable, 6 mois si CDD/freelance. Calculé sur les dépenses essentielles (pas les revenus), car c'est ce qu'il faut couvrir en cas de perte de revenus." },
          { q: "Quel placement pour un fonds d'urgence ?", options: ["ETF actions, pour le rendement", "Crypto, pour la liquidité 24/7", "Livret réglementé (Livret A, LDDS)", "Assurance-vie en unités de compte"], answer: 2, explain: "Le fonds d'urgence doit être disponible sans condition et sans risque de perte. Le rendement est secondaire — son rôle est l'assurance, pas la performance." },
        ]} />
      </div>
    ),
  },
];

export default function Budget(p) {
  return <TopicHub pageId="budget" topics={TOPICS} {...p} />;
}
