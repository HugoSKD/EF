import React from "react";
import { Scale, Snowflake, Building2, Flame, Target } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { GrowthLine, InflationViz, VizFrame, VizCaption, TwoInvestors } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "vs", Icon: Scale, title: "Épargne ou investissement ?",
    summary: "Deux outils, deux besoins. Savoir quand l'argent doit rester sûr et quand il peut prendre des risques.",
    intro: "Avant de placer le moindre euro, il faut comprendre à quel besoin chaque solution répond.",
    words: 650,
    content: (
      <div>
        <Chapter n="1" title="Sécurité vs croissance" color={T.brand}>
          <P>L'<B>épargne</B> vise la sécurité et le court terme : on veut un argent disponible et stable, quitte à ce qu'il rapporte peu. L'<B>investissement</B> vise le long terme et accepte un risque pour viser un rendement supérieur.</P>
          <P>On bâtit donc d'abord son socle d'épargne (le fonds d'urgence), puis on investit le surplus dont on n'a pas besoin avant plusieurs années.</P>
        </Chapter>
        <Chapter n="2" title="La règle des horizons" color={T.brand}>
          <Note color={T.brand}>L'argent dont tu pourrais avoir besoin dans moins de 3-5 ans n'a en général pas sa place sur des supports risqués : tu pourrais être forcé de vendre au pire moment, en pleine baisse.</Note>
          <List items={[
            { t: "Court terme (< 1 an)", d: "Livret réglementé ou compte courant. Disponibilité totale." },
            { t: "Moyen terme (1-5 ans)", d: "Fonds en euros d'assurance-vie, comptes à terme. Stabilité, rendement modéré." },
            { t: "Long terme (> 5 ans)", d: "ETF, PEA, unités de compte. Volatilité acceptée pour un rendement potentiel supérieur." },
          ]} color={T.brand} />
        </Chapter>
        <Quiz color={T.brand} questions={[
          { q: "Où placer un argent dont on aura besoin dans 18 mois pour un projet précis ?", options: ["ETF actions", "Livret réglementé ou support sécurisé", "Crypto", "Assurance-vie en unités de compte"], answer: 1, explain: "Sur un horizon court, un placement risqué peut être en moins-value au moment où on en a besoin. La sécurité prime sur le rendement." },
        ]} />
      </div>
    ),
  },
  {
    id: "composes", Icon: Snowflake, title: "Les intérêts composés",
    summary: "Le concept le plus important de toute l'épargne : l'effet boule de neige qui s'envole avec le temps.",
    intro: "Comprendre cet unique mécanisme change radicalement le rapport à l'argent et au temps.",
    words: 900,
    content: (
      <div>
        <Chapter n="1" title="L'effet boule de neige" color={T.brand}>
          <P>Les <B>intérêts composés</B>, ce sont les intérêts qui produisent à leur tour des intérêts. Chaque année, tu gagnes du rendement non seulement sur ton capital, mais aussi sur les gains déjà accumulés. L'effet est modeste au début… puis devient spectaculaire avec le temps.</P>
          <VizFrame title="150 €/mois à 6 % pendant 30 ans">
            <GrowthLine />
            <VizCaption>La courbe verte (valeur totale) s'envole au-dessus de la ligne pointillée (versements) : tout l'écart vient des intérêts composés.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="Le temps &gt; le montant" color={T.brand}>
          <P>Voici l'illustration la plus frappante : commencer tôt avec de petites sommes bat <em>presque toujours</em> commencer tard avec de plus gros versements.</P>
          <VizFrame title="Alice (commence à 25 ans) vs Bob (commence à 35 ans)">
            <TwoInvestors />
            <VizCaption>Même versement mensuel, même rendement. Alice n'a cotisé que 10 ans, Bob 30 ans — pourtant Alice finit devant.</VizCaption>
          </VizFrame>
          <Note color={T.brand}>Le temps a un effet asymétrique : 10 ans gagnés au début valent plus que 20 ans ajoutés à la fin. Va tester le <B>Calculateur</B> pour le voir en direct sur ton propre cas.</Note>
        </Chapter>
        <Chapter n="3" title="La formule et la règle de 72" color={T.brand}>
          <DeepDive title="Le calcul exact et l'astuce mentale">La valeur future s'écrit <B>VF = VP × (1 + r)ⁿ</B>, où VP est le capital de départ, r le taux par période et n le nombre de périodes. Astuce mentale célèbre, la <B>règle de 72</B> : divise 72 par le taux annuel (%) pour estimer en combien d'années ton capital double. À 3 %, c'est ≈ 24 ans ; à 6 %, ≈ 12 ans ; à 9 %, ≈ 8 ans. Étonnamment précise pour un calcul de tête.</DeepDive>
        </Chapter>
        <Quiz color={T.brand} questions={[
          { q: "Selon la règle de 72, en combien d'années un capital double à 6 % par an ?", options: ["6 ans", "12 ans", "20 ans", "36 ans"], answer: 1, explain: "72 ÷ 6 = 12 ans. C'est une excellente approximation des intérêts composés sans calculatrice." },
          { q: "Pour les intérêts composés, qu'est-ce qui compte le plus ?", options: ["Le rendement annuel", "Le montant des versements", "La durée", "Le timing parfait du marché"], answer: 2, explain: "Sur les longues périodes, la durée a un effet exponentiel. Commencer 10 ans plus tôt avec des petits montants bat souvent commencer plus tard avec de gros versements." },
        ]} />
      </div>
    ),
  },
  {
    id: "supports", Icon: Building2, title: "Les supports d'épargne",
    summary: "Livrets, assurance-vie, plans dédiés : comprendre le trio disponibilité / rendement / risque.",
    intro: "Un tour d'horizon des grandes familles de supports, sans recommander de produit précis.",
    words: 850,
    content: (
      <div>
        <Chapter n="1" title="Les grandes familles (France)" color={T.brand}>
          <List items={[
            { t: "Livrets réglementés", d: "Livret A, LDDS, LEP : argent disponible à tout moment, capital garanti, intérêts non imposés. Rendement faible. Idéal pour le fonds d'urgence." },
            { t: "Assurance-vie", d: "Enveloppe souple à horizon long. Peut contenir des fonds en euros (sécurisés) et des unités de compte (risquées). Fiscalité avantageuse après 8 ans, idéale pour la transmission." },
            { t: "PEA (Plan d'Épargne en Actions)", d: "Enveloppe dédiée aux actions européennes. Gains exonérés d'impôt après 5 ans (hors prélèvements sociaux). Plafond 150 000 €." },
            { t: "PER (Plan d'Épargne Retraite)", d: "Versements déductibles du revenu imposable (utile pour les TMI à 30 %+). Capital bloqué jusqu'à la retraite, sauf cas exceptionnels (achat résidence principale, accidents de la vie)." },
            { t: "Comptes à terme", d: "Argent bloqué une durée définie contre un taux connu d'avance. Reviennent en force quand les taux remontent." },
          ]} color={T.brand} />
        </Chapter>
        <Chapter n="2" title="Le triangle des compromis" color={T.brand}>
          <P>Chaque support se juge sur trois critères : <B>disponibilité</B>, <B>rendement</B> et <B>risque</B>. Améliorer l'un se fait presque toujours au détriment d'un autre. L'objectif n'est pas de te dire lequel choisir, mais que tu saches ce que tu compares.</P>
          <DeepDive>L'erreur classique : tout placer en livrets « par sécurité ». Sur le long terme, c'est l'<em>inflation</em> qui devient le vrai risque — voir la thématique suivante. À l'autre extrême, mettre son fonds d'urgence en ETF actions est tout aussi risqué : tu pourrais devoir vendre en pleine baisse.</DeepDive>
        </Chapter>
        <Quiz color={T.brand} questions={[
          { q: "Quelle enveloppe a une fiscalité avantageuse après 8 ans en France ?", options: ["Le PEA", "L'assurance-vie", "Le Livret A", "Le compte à terme"], answer: 1, explain: "L'assurance-vie offre un abattement annuel sur les gains après 8 ans de détention, et une fiscalité spécifique sur la transmission. Le PEA, lui, devient fiscalement avantageux après 5 ans." },
          { q: "Que signifie que le PER « bloque » l'argent ?", options: ["Tu ne peux pas y verser plus", "Le capital est inaccessible jusqu'à la retraite (sauf cas exceptionnels)", "Il est plafonné à 1 000 €/an", "Il rapporte 0 %"], answer: 1, explain: "Le PER échange une déduction fiscale immédiate contre un blocage du capital. Les sorties anticipées sont limitées à des cas précis (achat résidence principale, invalidité, décès du conjoint…)." },
        ]} />
      </div>
    ),
  },
  {
    id: "inflation", Icon: Flame, title: "Inflation & automatisation",
    summary: "L'ennemi silencieux du pouvoir d'achat, et la stratégie pour épargner sans effort de volonté.",
    intro: "Pourquoi l'argent qui dort s'appauvrit, et comment transformer l'épargne en simple réglage.",
    words: 720,
    content: (
      <div>
        <Chapter n="1" title="L'ennemi silencieux : l'inflation" color={T.coral}>
          <P>L'argent qui « dort » perd du pouvoir d'achat. Si les prix montent de 2 % par an et que ton épargne rapporte 1 %, tu t'appauvris en réalité de ~1 % par an, même si le chiffre sur ton compte augmente.</P>
          <VizFrame title="1 000 € à 1 % face à 2 % d'inflation">
            <InflationViz />
            <VizCaption>Le solde affiché grimpe doucement, mais le pouvoir d'achat réel s'érode dans le temps.</VizCaption>
          </VizFrame>
          <Note color={T.coral}>Sur 20 ans d'inflation à 2 %, 1 000 € perdent environ un tiers de leur pouvoir d'achat. La « sécurité » d'un livret faiblement rémunéré est en partie une illusion.</Note>
        </Chapter>
        <Chapter n="2" title="Automatiser pour réussir sans effort" color={T.brand}>
          <P>La meilleure stratégie d'épargne est celle que tu n'as pas à décider chaque mois. Un <B>virement automatique</B> le jour de la paie transforme une question de volonté en simple réglage technique.</P>
          <List items={[
            "Mets en place un virement automatique le lendemain de la réception du salaire.",
            "Commence petit (même 20 €) : l'habitude compte plus que le montant.",
            "Augmente le montant à chaque hausse de revenu, avant de t'habituer au nouveau niveau de vie.",
            "Sépare physiquement les comptes : le compte courant n'est pas un compte d'épargne.",
          ]} color={T.brand} />
        </Chapter>
        <Quiz color={T.brand} questions={[
          { q: "Si ton épargne rapporte 1 % et l'inflation est à 3 %, que se passe-t-il ?", options: ["Tu gagnes 1 % de pouvoir d'achat", "Tu gagnes 4 %", "Tu perds environ 2 % de pouvoir d'achat", "Rien, c'est neutre"], answer: 2, explain: "Le rendement réel = rendement nominal − inflation. À 1 % − 3 %, tu perds environ 2 %/an de pouvoir d'achat malgré l'augmentation nominale du solde." },
          { q: "Pourquoi automatiser son épargne ?", options: ["Pour les frais bancaires réduits", "Pour transformer la volonté en habitude technique", "Parce que la loi l'oblige", "Pour les avantages fiscaux"], answer: 1, explain: "L'automatisation enlève la décision mensuelle. C'est le levier psychologique le plus efficace de toutes les méthodes d'épargne, validé par toutes les études comportementales." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "objectifs", Icon: Target, title: "Épargner pour un objectif précis",
  summary: "Voyage, achat immo, mariage : nommer son épargne change tout — et oriente le support à choisir.",
  intro: "Une épargne sans nom finit toujours par être dépensée. Donner un objectif chiffré et daté multiplie les chances d'aboutir.",
  words: 820,
  content: (
    <div>
      <Chapter n="1" title="Pourquoi nommer son épargne" color={T.brand}>
        <P>« Économiser » est trop vague. <B>« Épargner 8 000 € en 24 mois pour l'apport d'un studio »</B> est concret, mesurable, et engage psychologiquement.</P>
        <P>Les études comportementales montrent qu'un objectif chiffré + une échéance + un compte dédié augmente le taux d'aboutissement de plus de 60 % par rapport à une épargne « générique ».</P>
        <Note color={T.brand}>Astuce : renomme tes comptes/sous-comptes selon l'objectif (« Voyage Japon 2027 », « Apport immobilier ») dans ton appli bancaire. La friction psychologique pour y piocher devient bien plus forte.</Note>
      </Chapter>
      <Chapter n="2" title="Mensualité nécessaire selon l'objectif" color={T.brand}>
        <P>La règle de base est purement arithmétique :</P>
        <Card style={{ padding: 20, background: T.bgSoft }}>
          <div style={{ fontFamily: T.serif, fontSize: 18, color: T.text, marginBottom: 8 }}>Mensualité ≈ (Objectif − Capital initial) / (Durée en mois)</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
            Exemple : objectif 8 000 € en 24 mois, capital actuel 1 000 € → (8 000 − 1 000) / 24 = <B style={{ color: T.brand }}>≈ 292 €/mois</B>.
            Les intérêts sur 2 ans à 3 % réduisent légèrement la mensualité (≈ 280 €), mais l'ordre de grandeur reste valable.
          </div>
        </Card>
      </Chapter>
      <Chapter n="3" title="Quel support pour quelle échéance" color={T.brand}>
        <List items={[
          { t: "0-12 mois (voyage, électroménager…)", d: "Livret réglementé. Disponibilité totale, capital garanti. Le rendement importe peu sur 12 mois." },
          { t: "1-3 ans (mariage, voiture, déménagement)", d: "Mix livrets + fonds en euros d'assurance-vie. Sécurité prioritaire, mais on accepte un horizon court pour optimiser." },
          { t: "3-5 ans (apport immobilier)", d: "Fonds en euros majoritairement, avec une petite poche en unités de compte si la tolérance au risque le permet. Au-delà de 5 ans : envisager la part actions." },
          { t: "5-10 ans (études enfant, retraite anticipée)", d: "Assurance-vie multi-supports, PEA, voire PER selon le profil fiscal. La part actions devient pertinente." },
        ]} color={T.brand} />
        <Note color={T.brand}>Plus l'objectif est lointain, plus tu peux te permettre de la volatilité. Plus il est proche, plus la sécurité prime sur le rendement.</Note>
      </Chapter>
      <Chapter n="4" title="Le piège du « j'aviserai »" color={T.coral}>
        <P>Sans objectif daté, l'épargne devient un coussin disponible — et l'humain est conçu pour piocher dans tout coussin disponible. C'est la principale raison pour laquelle <B>les comptes joints ou les comptes uniques fondent</B> alors que les sous-comptes nommés tiennent.</P>
      </Chapter>
      <Quiz color={T.brand} questions={[
        { q: "Tu veux acheter une voiture à 12 000 € dans 30 mois et tu as déjà 1 500 € de côté. Quelle mensualité viser ?", options: ["≈ 200 €/mois", "≈ 350 €/mois", "≈ 500 €/mois", "≈ 800 €/mois"], answer: 1, explain: "(12 000 − 1 500) / 30 = 350 €/mois. Avec des intérêts modestes sur un livret, la mensualité réelle est légèrement inférieure (≈ 340 €). Le calcul reste précis à ~5 %." },
        { q: "Pour un objectif à 8 mois, quel support privilégier ?", options: ["ETF actions", "Livret réglementé", "PER", "Crypto majeure"], answer: 1, explain: "Sur un horizon court, la sécurité prime. Un livret garantit le capital et la disponibilité. Les supports risqués pourraient être en moins-value pile au moment où tu en as besoin." },
      ]} />
    </div>
  ),
});

export default function Epargne(p) {
  return <TopicHub pageId="epargne" topics={TOPICS} {...p} />;
}
