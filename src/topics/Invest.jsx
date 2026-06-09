import React from "react";
import { Zap, Blocks, Target, Brain, LayoutGrid } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List } from "../ui/primitives.jsx";
import { RiskBars, VizFrame, VizCaption, FeesImpact, DonutChart } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "risque", Icon: Zap, title: "La loi risque / rendement",
    summary: "La règle fondamentale à intégrer avant tout : pas de rendement élevé sans risque élevé.",
    intro: "Si tu ne retiens qu'une seule chose de tout ce parcours, que ce soit celle-ci.",
    words: 700,
    content: (
      <div>
        <Chapter n="1" title="Aucun gain élevé sans risque" color={T.coral}>
          <P><B>Il n'existe pas de rendement élevé sans risque élevé.</B> Toute promesse de gains importants « sans risque » est, au mieux trompeuse, au pire une arnaque pure.</P>
          <P>Comprendre sa propre <B>tolérance au risque</B> — combien de baisse temporaire peux-tu encaisser sans paniquer et tout vendre ? — est aussi important que le choix des placements eux-mêmes.</P>
        </Chapter>
        <Chapter n="2" title="Visualiser l'échelle" color={T.coral}>
          <VizFrame title="Échelle risque / rendement potentiel">
            <RiskBars data={[
              { label: "Livret / fonds d'urgence", risk: 1, ret: 1 },
              { label: "Obligations d'État", risk: 2, ret: 2 },
              { label: "Fonds en euros (assurance-vie)", risk: 1, ret: 2 },
              { label: "ETF diversifié actions", risk: 3, ret: 4 },
              { label: "Actions individuelles", risk: 4, ret: 4 },
              { label: "Crypto-actifs", risk: 5, ret: 5 },
            ]} />
            <VizCaption>Plus on cherche du rendement, plus le risque grimpe. Aucun placement ne combine sécurité totale et gros gains.</VizCaption>
          </VizFrame>
        </Chapter>
        <Quiz color={T.coral} questions={[
          { q: "Une publicité promet « 12 %/an garantis sans risque ». Que faire ?", options: ["Investir tout de suite avant que ce soit trop tard", "Diversifier en y mettant la moitié", "Fuir : c'est presque certainement une arnaque", "Demander une commission supplémentaire"], answer: 2, explain: "Aucun produit financier sérieux ne combine rendement élevé et absence de risque. La promesse de gains fixes élevés est le marqueur principal des arnaques pyramidales (Ponzi)." },
        ]} />
      </div>
    ),
  },
  {
    id: "actifs", Icon: Blocks, title: "Les classes d'actifs",
    summary: "Actions, obligations, ETF : ce que tu détiens réellement et pourquoi les ETF reviennent souvent.",
    intro: "Comprendre les briques de base de tout portefeuille d'investissement.",
    words: 850,
    content: (
      <div>
        <Chapter n="1" title="Les grandes briques" color={T.coral}>
          <List items={[
            { t: "Actions", d: "Une part de propriété dans une entreprise. Potentiel élevé sur le long terme, forte volatilité à court terme." },
            { t: "Obligations", d: "Un prêt accordé à un État ou une entreprise, remboursé avec intérêts. Généralement plus stable que les actions." },
            { t: "ETF indiciels", d: "Un panier qui réplique un indice entier (CAC 40, S&P 500, MSCI World). Diversification immédiate, frais souvent très bas." },
            { t: "Immobilier (SCPI, REIT)", d: "Investir dans la pierre via des sociétés. Accessible avec quelques centaines d'euros, mais frais d'entrée souvent élevés." },
            { t: "Matières premières (or, etc.)", d: "Diversification face aux marchés actions. Pas de rendement intrinsèque — la performance dépend du prix de revente." },
          ]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="Pourquoi les ETF reviennent souvent" color={T.coral}>
          <DeepDive title="Le fonctionnement d'un ETF">Un ETF achète automatiquement des centaines d'entreprises d'un coup. Plutôt que de parier sur une seule société, tu détiens une mini-part de tout un indice. Avantages : <B>diversification instantanée</B>, frais généralement très bas (souvent moins de 0,3 %/an contre 1,5-2 % pour les fonds actifs), et pas besoin de « choisir les gagnants ». C'est l'illustration concrète du principe « ne pas mettre tous ses œufs dans le même panier ». L'inconvénient : pas d'espoir de battre le marché. Mais les études montrent que <em>très peu de gestionnaires actifs y arrivent</em> sur le long terme.</DeepDive>
        </Chapter>
        <Quiz color={T.coral} questions={[
          { q: "Qu'est-ce qu'un ETF ?", options: ["Une cryptomonnaie", "Un fonds coté en bourse qui réplique un indice", "Une assurance-vie", "Un type d'obligation"], answer: 1, explain: "Un ETF (Exchange-Traded Fund) suit automatiquement un indice (S&P 500, CAC 40, MSCI World…). Tu détiens une mini-part de toutes les entreprises de l'indice, ce qui te diversifie instantanément." },
          { q: "Quel est le principal avantage d'un ETF par rapport à un fonds géré activement ?", options: ["Il rapporte toujours plus", "Les frais sont généralement bien plus bas", "Il est exonéré d'impôt", "Il garantit le capital"], answer: 1, explain: "Les ETF indiciels ont des frais souvent inférieurs à 0,3 %/an, contre 1,5 à 2,5 % pour beaucoup de fonds actifs. Sur 30 ans, cet écart fait une différence énorme — voir la thématique suivante." },
        ]} />
      </div>
    ),
  },
  {
    id: "principes", Icon: Target, title: "Les principes qui marchent",
    summary: "Diversifier, voir long terme, surveiller les frais, investir régulièrement : le consensus des pros.",
    intro: "Quelques principes simples font l'objet d'un large consensus, même chez ceux qui ne sont d'accord sur rien d'autre.",
    words: 850,
    content: (
      <div>
        <Chapter n="1" title="Trois principes de consensus" color={T.coral}>
          <List items={[
            { t: "Diversifier", d: "Répartir entre plusieurs entreprises, secteurs et zones réduit l'impact d'un accident isolé." },
            { t: "Voir long terme", d: "Sur des années, le temps lisse une grande partie de la volatilité. Les décisions impulsives lors des baisses sont une cause majeure de pertes." },
            { t: "Surveiller les frais", d: "Des frais de 2 %/an amputent une part énorme du capital final sur des décennies. À rendement égal, le moins cher gagne." },
          ]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="L'impact massif des frais" color={T.coral}>
          <VizFrame title="200 €/mois pendant 30 ans, rendement brut 7 %/an">
            <FeesImpact />
            <VizCaption>Total versé : 72 000 €. Selon les frais, le capital final varie de plus de 80 000 €. Les frais sont la variable la plus prévisible et la plus actionnable.</VizCaption>
          </VizFrame>
          <Note color={T.coral}>Les performances passées sont incertaines. Les frais, eux, sont garantis. C'est le seul levier que tu maîtrises complètement.</Note>
        </Chapter>
        <Chapter n="3" title="L'investissement régulier (DCA)" color={T.brand}>
          <Note color={T.brand}>Verser la même somme chaque mois, quoi qu'il arrive, permet d'acheter « plus quand c'est bas, moins quand c'est haut » sans avoir à deviner le marché. On appelle ça l'investissement programmé (DCA, <em>dollar-cost averaging</em>).</Note>
          <P>Avantages psychologiques majeurs : aucune décision à prendre, aucune émotion à gérer, aucun « bon moment » à attendre. Les études montrent que les particuliers qui font du DCA performent en moyenne mieux que ceux qui essaient de timer le marché.</P>
        </Chapter>
        <Quiz color={T.coral} questions={[
          { q: "Sur 30 ans, des frais de 2 % au lieu de 0,2 %, c'est :", options: ["Une différence négligeable", "Une perte de quelques milliers d'euros", "Une perte massive (souvent plusieurs dizaines de milliers d'euros)", "Un gain, parce que cela paye un meilleur gérant"], answer: 2, explain: "Les frais s'appliquent au capital total chaque année. Sur 30 ans, l'écart cumulé est énorme : c'est la variable la plus puissante et la plus actionnable du long terme." },
          { q: "Le DCA (investissement régulier) sert principalement à :", options: ["Battre le marché", "Lisser le prix d'achat et éviter le timing émotionnel", "Réduire les impôts", "Garantir le capital"], answer: 1, explain: "Verser une somme fixe régulière permet d'acheter plus quand les prix baissent et moins quand ils montent, sans décision émotionnelle. C'est puissant car notre cerveau est mal câblé pour timer correctement." },
        ]} />
      </div>
    ),
  },
  {
    id: "psycho", Icon: Brain, title: "Psychologie & check-list",
    summary: "Ton cerveau est ton pire ennemi en bourse. Les biais à connaître et la check-list avant de se lancer.",
    intro: "Investir est autant une affaire de comportement que de chiffres. Voici comment ne pas se saboter.",
    words: 800,
    content: (
      <div>
        <Chapter n="1" title="Les biais qui coûtent cher" color={T.violet}>
          <P>Le cerveau humain est mal câblé pour les marchés : il pousse à acheter quand tout va bien (cher) et à vendre quand tout va mal (bas).</P>
          <List items={[
            { t: "Le FOMO", d: "La peur de rater pousse à acheter au sommet d'une euphorie, juste avant la chute." },
            { t: "La vente panique", d: "Lors d'une baisse, la peur fait vendre à perte ce qu'il aurait souvent fallu conserver." },
            { t: "L'excès de confiance", d: "Croire qu'on peut « battre le marché », ce que même les pros réussissent rarement." },
            { t: "Le biais de récence", d: "Surpondérer les événements récents : « ça monte depuis 6 mois donc ça va continuer »." },
            { t: "Les influenceurs", d: "Beaucoup sont rémunérés pour promouvoir un produit. Un conseil gratuit a souvent un coût caché." },
          ]} color={T.violet} />
        </Chapter>
        <Chapter n="2" title="La check-list avant de se lancer" color={T.coral}>
          <List items={[
            "Mon fonds d'urgence (3-6 mois) est-il déjà constitué ?",
            "Puis-je laisser cet argent investi au moins 5 ans sans en avoir besoin ?",
            "Ai-je accepté de pouvoir voir la valeur baisser temporairement de 30-40 % ?",
            "Les frais du support sont-ils raisonnables et transparents ?",
            "Ma stratégie est-elle écrite quelque part, pour me forcer à m'y tenir en cas de panique ?",
          ]} color={T.coral} />
          <Note color={T.coral} title="Avertissement clé">Les performances passées ne préjugent jamais des performances futures. Aucun placement présenté ici n'est une recommandation : ce sont des catégories à comprendre, pas des incitations à acheter.</Note>
        </Chapter>
        <Quiz color={T.violet} questions={[
          { q: "Qu'est-ce que le FOMO en investissement ?", options: ["Un type d'obligation", "La peur de rater une opportunité, qui pousse à acheter au sommet", "Une stratégie professionnelle", "Une taxe sur les plus-values"], answer: 1, explain: "Fear Of Missing Out : la peur de rater pousse à acheter quand tout le monde en parle (et que les prix sont déjà hauts). Statistiquement, c'est le pire moment pour entrer." },
          { q: "Quel point doit être validé AVANT d'investir ?", options: ["Avoir reçu un tuyau d'un ami", "Avoir constitué son fonds d'urgence", "Suivre un influenceur crypto", "Avoir 50 000 € disponibles"], answer: 1, explain: "Le fonds d'urgence est la fondation. Investir sans ce filet de sécurité expose à devoir vendre en urgence, potentiellement au pire moment." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "allocation", Icon: LayoutGrid, title: "Construire son allocation",
  summary: "Combien d'actions, combien d'obligations, combien de cash ? Le seul vrai choix d'investisseur.",
  intro: "Les études convergent : c'est l'allocation entre classes d'actifs — et non le choix précis des titres — qui explique l'essentiel des résultats long terme.",
  words: 900,
  content: (
    <div>
      <Chapter n="1" title="L'allocation, plus important que le choix des titres" color={T.coral}>
        <P>Une étude classique (Brinson, Hood, Beebower) attribue <B>plus de 90 % de la variance des rendements d'un portefeuille</B> à son allocation entre grandes classes d'actifs (actions / obligations / cash), et moins de 10 % au choix précis des titres ou au timing d'achat.</P>
        <P>En clair : passer du temps à choisir « la bonne action » est presque toujours un mauvais usage du temps. Définir une allocation cohérente avec son horizon et sa tolérance au risque est l'arbitrage qui compte vraiment.</P>
      </Chapter>
      <Chapter n="2" title="La règle « 100 − âge »" color={T.coral}>
        <P>Une heuristique vieille mais utile : <B>part en actions ≈ 100 − âge</B>. À 25 ans, ≈ 75 % en actions ; à 50 ans, ≈ 50 %. Le reste est réparti entre obligations et cash.</P>
        <P>Avec l'allongement de la vie active et la baisse des taux obligataires, beaucoup d'experts proposent désormais <B>110 − âge</B> ou même <B>120 − âge</B> pour des profils tolérants au risque.</P>
        <VizFrame title="Exemple d'allocation à 25 ans (règle 110 − âge)">
          <DonutChart data={[
            { label: "Actions (ETF monde)", value: 75, color: T.coral },
            { label: "Obligations", value: 15, color: T.brand2 },
            { label: "Fonds euros / cash", value: 10, color: T.brand },
          ]} centerLabel="25 ans" centerValue="110−25" />
          <VizCaption>Profil long terme : forte exposition actions, petit coussin obligataire, liquidité réduite.</VizCaption>
        </VizFrame>
      </Chapter>
      <Chapter n="3" title="Les trois portefeuilles classiques" color={T.coral}>
        <List items={[
          { t: "Prudent", d: "20-30 % actions, 50-60 % obligations, 20 % cash. Volatilité faible mais rendement réel parfois proche de zéro après inflation." },
          { t: "Équilibré (60/40)", d: "60 % actions, 40 % obligations. L'un des portefeuilles les plus étudiés et plus stables, recommandé par nombre d'investisseurs institutionnels." },
          { t: "Offensif", d: "80-100 % actions. Profil jeune, horizon > 10 ans, capable d'encaisser une baisse temporaire de 30-50 % sans paniquer." },
        ]} color={T.coral} />
      </Chapter>
      <Chapter n="4" title="Rééquilibrer périodiquement" color={T.coral}>
        <P>Avec le temps, les classes performantes prennent du poids et le portefeuille dérive de la cible. Un rééquilibrage <B>annuel ou semestriel</B> permet de :</P>
        <List items={[
          "Conserver le niveau de risque souhaité (sinon on devient « plus actions » que prévu après une bonne année).",
          "Vendre haut et acheter bas mécaniquement (on allège la classe qui a monté pour renforcer celle qui a baissé).",
          "S'imposer une discipline qui contre le biais émotionnel.",
        ]} color={T.coral} />
        <DeepDive title="La glide path : ajuster avec l'âge">Les fonds « cycle de vie » (target-date funds) appliquent automatiquement une « glide path » : la part actions diminue progressivement à mesure que l'on s'approche d'un objectif (retraite, achat). Le PER en mode « gestion pilotée par horizon » fonctionne ainsi par défaut.</DeepDive>
      </Chapter>
      <Quiz color={T.coral} questions={[
        { q: "D'après la règle « 100 − âge », quelle part en actions à 30 ans ?", options: ["100 %", "≈ 70 %", "30 %", "0 %"], answer: 1, explain: "100 − 30 = 70 %. À 30 ans avec horizon long, on peut se permettre une forte exposition actions. Le reste va en obligations et cash." },
        { q: "Selon les études classiques (Brinson et al.), qu'est-ce qui explique l'essentiel de la performance long terme ?", options: ["Le timing d'entrée", "Le choix précis des titres", "L'allocation entre classes d'actifs", "Le hasard"], answer: 2, explain: "Plus de 90 % de la variance des rendements est expliquée par l'allocation (% actions / obligations / cash) — pas par le stock-picking ni par le timing. C'est le levier le plus important." },
      ]} />
    </div>
  ),
});

export default function Invest(p) {
  return <TopicHub pageId="invest" topics={TOPICS} {...p} />;
}
