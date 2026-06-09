import React from "react";
import { Landmark, TrendingDown, Gift, FileCheck } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List } from "../ui/primitives.jsx";
import { BracketBars, VizFrame, VizCaption, DonutChart } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "ir", Icon: Landmark, title: "L'impôt sur le revenu",
    summary: "Comment l'impôt est calculé : tranches, taux marginal, taux moyen. Souvent mal compris.",
    intro: "Le mécanisme par tranches est essentiel à comprendre : tu n'es jamais imposé à 30 % sur tout ton revenu.",
    words: 850,
    content: (
      <div>
        <Chapter n="1" title="L'impôt « par tranches » : la mécanique" color={T.accent}>
          <P>L'impôt sur le revenu en France est <B>progressif par tranches</B>. Chaque tranche de ton revenu est taxée à un taux différent. Quand on dit « je suis dans la tranche à 30 % », on ne paie pas 30 % sur tout — seulement sur la part qui dépasse le seuil de cette tranche.</P>
          <VizFrame title="Exemple : 30 000 € de revenu imposable (célibataire, 1 part)">
            <BracketBars income={30000} />
            <VizCaption>Chaque tranche est taxée à son propre taux. Le taux moyen réel est bien inférieur au taux marginal.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="TMI vs taux moyen" color={T.accent}>
          <List items={[
            { t: "Taux marginal (TMI)", d: "Taux appliqué à ton dernier euro gagné (0, 11, 30, 41 ou 45 %). C'est celui qui détermine si une déduction fiscale est intéressante pour toi." },
            { t: "Taux moyen", d: "Impôt total ÷ revenu total. Toujours plus bas que la TMI à cause du système progressif." },
          ]} color={T.accent} />
          <Note color={T.accent}>Un cadre dans la tranche à 30 % paie souvent en réalité 13-17 % de taux moyen. La TMI ne dit jamais combien on paie, elle dit ce qu'on paierait sur un revenu supplémentaire.</Note>
        </Chapter>
        <Chapter n="3" title="Le quotient familial" color={T.accent}>
          <P>Le foyer est divisé en <B>parts</B> (1 part par adulte, ½ part par enfant, 1 part complète au 3ᵉ enfant). On divise le revenu par le nombre de parts, on calcule l'impôt sur ce résultat, puis on multiplie. C'est un mécanisme qui adoucit la progressivité pour les familles.</P>
          <DeepDive>Le gain du quotient familial est plafonné (1 791 € par demi-part en 2025). Ce plafond évite que le mécanisme n'avantage disproportionnément les hauts revenus. Pour les couples non mariés ni pacsés, chacun déclare séparément — souvent moins avantageux que la déclaration commune.</DeepDive>
        </Chapter>
        <Quiz color={T.accent} questions={[
          { q: "Tu gagnes 35 000 € (1 part). Es-tu imposé à 30 % sur toute cette somme ?", options: ["Oui, c'est le taux de ta tranche", "Non, seule la part au-dessus de 29 315 € est à 30 %", "Non, c'est 30 % sur les 35 000 € moins 10 %", "Cela dépend du département"], answer: 1, explain: "L'impôt est par tranches. Les 11 497 premiers euros sont à 0 %, de 11 497 à 29 315 € à 11 %, et seulement la part au-dessus à 30 %. Le taux moyen est bien plus bas que la TMI." },
          { q: "Que représente la TMI ?", options: ["Le taux moyen de ton imposition", "Le taux appliqué à ton dernier euro gagné", "Une taxe locale", "Une exonération automatique"], answer: 1, explain: "La Tranche Marginale d'Imposition est le taux qui s'applique au dernier euro gagné. C'est elle qui détermine si une déduction (PER, dons…) est intéressante pour toi." },
        ]} />
      </div>
    ),
  },
  {
    id: "flat", Icon: TrendingDown, title: "PFU & revenus du capital",
    summary: "La « flat tax » à 30 % : comment sont taxés les gains des placements et quand choisir le barème.",
    intro: "Comprendre comment l'État prélève sur tes intérêts, dividendes et plus-values.",
    words: 800,
    content: (
      <div>
        <Chapter n="1" title="La flat tax en deux mots" color={T.accent}>
          <P>Depuis 2018, les revenus du capital (intérêts, dividendes, plus-values mobilières) sont soumis au <B>Prélèvement Forfaitaire Unique (PFU)</B>, surnommé « flat tax » : <B>30 % au total</B>.</P>
          <VizFrame title="Composition du PFU de 30 %">
            <DonutChart data={[
              { label: "Impôt sur le revenu", value: 12.8, color: T.accent },
              { label: "Prélèvements sociaux", value: 17.2, color: T.brand2 },
            ]} centerLabel="Total" centerValue="30 %" />
            <VizCaption>Le PFU réunit 12,8 % d'impôt et 17,2 % de prélèvements sociaux (CSG, CRDS…).</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="Quand choisir le barème progressif ?" color={T.accent}>
          <P>Tu peux opter, chaque année, pour l'imposition au <B>barème progressif</B> (TMI) au lieu du PFU. Cette option est globale (concerne tous les revenus du capital) et n'est généralement intéressante que si ta TMI est faible (0 % ou 11 %).</P>
          <List items={[
            { t: "TMI à 0 % ou 11 %", d: "Le barème progressif peut être plus avantageux (mais reste les 17,2 % de prélèvements sociaux)." },
            { t: "TMI à 30 % ou plus", d: "Le PFU à 30 % est presque toujours plus intéressant." },
          ]} color={T.accent} />
        </Chapter>
        <Chapter n="3" title="Les enveloppes qui changent la donne" color={T.accent}>
          <P>Certaines enveloppes échappent partiellement au PFU :</P>
          <List items={[
            { t: "PEA après 5 ans", d: "Gains exonérés d'impôt (seuls les 17,2 % de prélèvements sociaux restent)." },
            { t: "Assurance-vie après 8 ans", d: "Abattement annuel sur les gains (4 600 € seul, 9 200 € couple) puis taux réduit à 7,5 %." },
            { t: "Livrets réglementés (A, LDDS, LEP)", d: "Intérêts totalement exonérés d'impôt ET de prélèvements sociaux." },
          ]} color={T.accent} />
          <Note color={T.accent}>Le choix de l'enveloppe peut peser autant que le choix du support sous-jacent. Sur 30 ans, l'écart fiscal cumulé est massif.</Note>
        </Chapter>
        <Quiz color={T.accent} questions={[
          { q: "Le PFU de 30 % se décompose en :", options: ["30 % d'impôt sur le revenu", "12,8 % d'impôt + 17,2 % de prélèvements sociaux", "20 % d'impôt + 10 % de CSG", "30 % de TVA"], answer: 1, explain: "12,8 % d'impôt + 17,2 % de prélèvements sociaux (CSG, CRDS, etc.) = 30 %. Cette répartition explique pourquoi même les enveloppes « exonérées d'impôt » restent souvent soumises aux prélèvements sociaux." },
          { q: "Tu as une TMI à 11 %. Que faire pour les revenus du capital ?", options: ["Toujours rester au PFU à 30 %", "Comparer avec le barème (option) — souvent plus avantageux à 11 % de TMI", "Refuser tout placement", "Choisir uniquement des crypto"], answer: 1, explain: "À 11 % de TMI, opter pour le barème peut faire baisser ton imposition globale (11 % au lieu de 12,8 %). Les 17,2 % de prélèvements sociaux restent dus dans les deux cas." },
        ]} />
      </div>
    ),
  },
  {
    id: "reductions", Icon: Gift, title: "Réductions & niches",
    summary: "PER, dons, investissement locatif : comment alléger légitimement son impôt.",
    intro: "L'État utilise la fiscalité pour orienter les comportements. Voici les leviers les plus courants.",
    words: 780,
    content: (
      <div>
        <Chapter n="1" title="Trois leviers majeurs" color={T.accent}>
          <List items={[
            { t: "Le PER (Plan d'Épargne Retraite)", d: "Versements déductibles du revenu imposable. Économie d'impôt = versement × TMI. Particulièrement intéressant à partir de 30 % de TMI." },
            { t: "Les dons aux associations", d: "66 % du don déductible de l'impôt dans la limite de 20 % du revenu (75 % pour les associations d'aide aux plus démunis, plafond 1 000 €)." },
            { t: "L'investissement locatif (Pinel, Denormandie…)", d: "Réduction d'impôt en contrepartie d'un engagement de location à un loyer plafonné. À évaluer prudemment : la fiscalité ne doit pas être le seul critère." },
          ]} color={T.accent} />
        </Chapter>
        <Chapter n="2" title="Le plafonnement des niches" color={T.accent}>
          <Note color={T.accent}>La plupart des réductions d'impôt sont plafonnées à un total de <B>10 000 €/an</B> (« plafond global des niches fiscales »). Au-delà, les avantages supplémentaires ne s'appliquent pas. Ce plafond ne s'applique pas aux dons ni au PER (déduction, pas réduction).</Note>
        </Chapter>
        <Chapter n="3" title="Réduction vs déduction" color={T.accent}>
          <DeepDive title="Comprendre la différence subtile mais cruciale"><B>Déduction</B> = somme retirée du revenu imposable AVANT calcul de l'impôt. L'économie réelle dépend de ta TMI. 1 000 € déduits = 300 € économisés si TMI 30 %. <B>Réduction</B> = somme retirée directement de l'impôt à payer. 1 000 € de réduction = 1 000 € de moins à payer, peu importe la TMI. Le PER fonctionne par déduction (donc plus avantageux pour les hauts revenus), les dons par réduction (avantage identique à toutes TMI).</DeepDive>
        </Chapter>
        <Quiz color={T.accent} questions={[
          { q: "Tu verses 1 000 € sur ton PER, ta TMI est à 30 %. Quelle est ton économie d'impôt ?", options: ["1 000 €", "300 €", "700 €", "Aucune"], answer: 1, explain: "1 000 € déduits × 30 % de TMI = 300 € d'économie d'impôt. C'est pourquoi le PER est surtout intéressant à partir d'une TMI à 30 %. À 11 %, l'économie ne serait que de 110 €." },
          { q: "Quelle est la différence entre déduction et réduction d'impôt ?", options: ["Aucune, c'est synonyme", "La déduction baisse le revenu imposable, la réduction baisse directement l'impôt à payer", "La réduction est obligatoire", "La déduction n'existe pas en France"], answer: 1, explain: "Distinction cruciale. Une déduction de 1 000 € vaut 110 € à 11 % de TMI mais 450 € à 45 %. Une réduction de 1 000 € vaut toujours 1 000 €." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "declarer", Icon: FileCheck, title: "Déclarer ses impôts pas à pas",
  summary: "Avril-juin : la déclaration. Ce qui est pré-rempli, ce qu'il faut vérifier, ce qu'on ajoute soi-même.",
  intro: "La déclaration n'est plus optionnelle même pour les non-imposables. Voici la check-list propre pour un jeune actif.",
  words: 850,
  content: (
    <div>
      <Chapter n="1" title="Le calendrier officiel" color={T.accent}>
        <P>La campagne de déclaration s'ouvre <B>début avril</B> chaque année sur <a href="https://impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{ color: T.brand }}>impots.gouv.fr</a>. Les dates limites varient selon ton département (zones 1, 2, 3) — fin mai à mi-juin en général.</P>
        <Note color={T.coral}>Même si tu es non-imposable, la déclaration reste obligatoire dès tes 18 ans (sauf rattachement au foyer parental). C'est elle qui ouvre les droits à certaines aides (APL, prime d'activité…) et qui produit l'avis d'imposition utile pour le logement.</Note>
      </Chapter>
      <Chapter n="2" title="Ce qui est pré-rempli" color={T.accent}>
        <P>Le fisc reçoit automatiquement la plupart de tes revenus :</P>
        <List items={[
          { t: "Salaires", d: "Transmis par l'employeur via la DSN (déclaration sociale nominative)." },
          { t: "Indemnités Pôle emploi / IJSS", d: "Transmises directement par l'organisme payeur." },
          { t: "Revenus de placements", d: "Banques et courtiers envoient l'IFU (Imprimé Fiscal Unique). Intérêts, dividendes, plus-values sur PEA/CTO." },
          { t: "Pensions et retraites", d: "Caisses de retraite, France Travail (anciennement Pôle emploi)…" },
        ]} color={T.accent} />
        <Note color={T.accent}>Toujours <B>vérifier</B> les chiffres pré-remplis. Une erreur (cumul incorrect d'un employeur multiple, oubli d'un IFU) reste de ta responsabilité. C'est rare mais ça arrive.</Note>
      </Chapter>
      <Chapter n="3" title="Ce qu'il faut ajouter soi-même" color={T.accent}>
        <List items={[
          { t: "Revenus fonciers (location)", d: "Régime micro-foncier si loyers < 15 000 €/an, sinon régime réel avec déduction des charges." },
          { t: "Revenus à l'étranger", d: "Stage rémunéré, dividendes d'un compte étranger : à déclarer même si déjà imposés sur place (conventions fiscales)." },
          { t: "Versements PER déductibles", d: "Case spécifique à cocher pour bénéficier de la déduction." },
          { t: "Dons à des associations", d: "Reçus fiscaux à conserver — 66 % ou 75 % de réduction selon l'association." },
          { t: "Crypto-actifs", d: "Plus-values de cession à déclarer (formulaire 2086), même si la plateforme est étrangère. Les transferts entre tes propres wallets ne sont pas des cessions." },
          { t: "Frais réels", d: "Option si tes frais professionnels dépassent l'abattement automatique de 10 %. Surtout pertinent en cas de grands trajets domicile-travail." },
        ]} color={T.accent} />
      </Chapter>
      <Chapter n="4" title="Erreurs fréquentes à éviter" color={T.coral}>
        <List items={[
          { t: "Oublier de signaler un changement", d: "Mariage, pacs, déménagement, naissance — chaque événement modifie le quotient familial et l'impôt." },
          { t: "Confondre déclaration et paiement", d: "Le prélèvement à la source ne dispense pas de déclarer. La régularisation finale se fait en septembre." },
          { t: "Cocher la mauvaise case pour les frais", d: "Soit l'abattement 10 % automatique (rien à faire), soit les frais réels (justificatifs à conserver). Pas les deux." },
          { t: "Croire qu'on est dispensé", d: "Tu peux être dispensé d'IMPÔT mais pas de DÉCLARATION."},
        ]} color={T.coral} />
        <DeepDive title="Et si je me suis trompé après envoi ?">Pas de panique. Une déclaration peut être corrigée en ligne <B>jusqu'à mi-décembre</B> après la campagne. Au-delà, une réclamation est possible jusqu'au 31 décembre de la 2ᵉ année suivante. Les pénalités ne s'appliquent qu'en cas de mauvaise foi caractérisée — une rectification spontanée est bien vue.</DeepDive>
      </Chapter>
      <Quiz color={T.accent} questions={[
        { q: "Tu es étudiant non imposable. Dois-tu quand même déclarer ?", options: ["Non, c'est inutile", "Oui, c'est obligatoire dès 18 ans (sauf rattachement au foyer parental)", "Seulement si tu travailles", "Une année sur deux suffit"], answer: 1, explain: "La déclaration est obligatoire dès 18 ans, indépendamment de l'imposition. Elle conditionne plusieurs aides (APL, prime d'activité) et fournit l'avis d'imposition souvent demandé pour le logement." },
        { q: "Une plus-value sur crypto réalisée via une plateforme étrangère :", options: ["N'est pas imposable en France", "Est imposable et à déclarer (formulaire 2086)", "Est automatiquement transmise au fisc", "Ne concerne que les professionnels"], answer: 1, explain: "Toute plus-value de cession de crypto par un résident fiscal français est imposable (PFU à 30 % par défaut), même si la plateforme est à l'étranger. Le formulaire 2086 doit être joint à la déclaration." },
      ]} />
    </div>
  ),
});

export default function Fiscalite(p) {
  return <TopicHub pageId="fiscalite" topics={TOPICS} {...p} />;
}
