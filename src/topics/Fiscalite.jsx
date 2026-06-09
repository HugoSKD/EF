import React from "react";
import { Landmark, TrendingDown, Gift, FileCheck } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { BracketBars, VizFrame, VizCaption, DonutChart } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "ir", Icon: Landmark, title: "L'impôt sur le revenu",
    summary: "Comment l'impôt est calculé : tranches, taux marginal, taux moyen. Souvent mal compris.",
    intro: "Le mécanisme par tranches est essentiel à comprendre : tu n'es jamais imposé à 30 % sur tout ton revenu.",
    words: 1900,
    content: (
      <div>
        <Chapter n="1" title="L'impôt « par tranches » : la mécanique" color={T.accent}>
          <P>L'impôt sur le revenu en France est <B>progressif par tranches</B>. Chaque tranche de ton revenu est taxée à un taux différent. Quand on dit « je suis dans la tranche à 30 % », on ne paie pas 30 % sur tout — seulement sur la part qui dépasse le seuil de cette tranche.</P>
          <VizFrame title="Exemple : 30 000 € de revenu imposable (célibataire, 1 part)">
            <BracketBars income={30000} />
            <VizCaption>Chaque tranche est taxée à son propre taux. Le taux moyen réel est bien inférieur au taux marginal.</VizCaption>
          </VizFrame>
        </Chapter>

        <Chapter n="2" title="Les tranches 2025-2026" color={T.accent}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", borderBottom: `1px solid ${T.line}` }}>
              <div style={{ padding: "12px 18px", fontSize: 12, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5 }}>Tranche de revenu (par part)</div>
              <div style={{ padding: "12px 18px", fontSize: 12, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5 }}>Taux</div>
            </div>
            {[
              ["Jusqu'à 11 497 €", "0 %"],
              ["De 11 497 € à 29 315 €", "11 %"],
              ["De 29 315 € à 83 823 €", "30 %"],
              ["De 83 823 € à 180 294 €", "41 %"],
              ["Au-delà de 180 294 €", "45 %"],
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr", borderBottom: i < 4 ? `1px solid ${T.line}` : "none" }}>
                <div style={{ padding: "11px 18px", fontSize: 14, color: T.text }}>{row[0]}</div>
                <div style={{ padding: "11px 18px", fontSize: 14, color: T.accent, fontWeight: 700 }}>{row[1]}</div>
              </div>
            ))}
          </Card>
          <Note color={T.accent}>Ces seuils sont par <B>part fiscale</B>. Pour un couple marié/pacsé à 2 parts, on divise le revenu par 2 pour appliquer les tranches, on calcule l'impôt sur ce résultat, puis on multiplie par 2.</Note>
        </Chapter>

        <Chapter n="3" title="Du salaire au revenu imposable" color={T.accent}>
          <P>Le revenu imposable n'est pas le salaire brut ni le salaire net en poche. Voici comment on l'obtient en France :</P>
          <List items={[
            { t: "1. Salaire brut", d: "Le montant inscrit sur ton contrat de travail." },
            { t: "2. Net imposable", d: "Brut − cotisations sociales déductibles ≈ 78-82 % du brut typiquement." },
            { t: "3. Abattement de 10 %", d: "Forfaitaire pour frais professionnels (plafonné à ~14 000 €/an). Appliqué automatiquement, sans justificatif." },
            { t: "4. Revenu net imposable", d: "Net imposable − 10 % d'abattement. C'est cette ligne qui entre dans le barème." },
          ]} color={T.accent} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple concret</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Salaire brut : 35 000 €/an<br />
              Net imposable : ~28 000 €<br />
              Après abattement 10 % : ~25 200 €<br />
              <B style={{ color: T.text }}>→ C'est sur 25 200 € qu'on applique le barème.</B>
            </div>
          </Card>
        </Chapter>

        <Chapter n="4" title="TMI vs taux moyen : la confusion classique" color={T.accent}>
          <List items={[
            { t: "Taux marginal (TMI)", d: "Taux appliqué à ton dernier euro gagné (0, 11, 30, 41 ou 45 %). C'est celui qui détermine si une déduction fiscale est intéressante pour toi." },
            { t: "Taux moyen", d: "Impôt total ÷ revenu total. Toujours plus bas que la TMI à cause du système progressif." },
          ]} color={T.accent} />
          <Note color={T.accent}>Un cadre dans la tranche à 30 % paie souvent en réalité 13-17 % de taux moyen. La TMI ne dit jamais combien on paie, elle dit ce qu'on paierait sur un revenu supplémentaire.</Note>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Illustration : 35 000 € de revenu imposable (1 part)</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              0 € à 11 497 € (0 %) → 0 €<br />
              11 497 € à 29 315 € (11 %) → 1 960 €<br />
              29 315 € à 35 000 € (30 %) → 1 706 €<br />
              <B style={{ color: T.text }}>Impôt total : 3 666 €</B><br />
              Taux moyen : 3 666 / 35 000 = <B style={{ color: T.brand }}>10,5 %</B><br />
              TMI : <B style={{ color: T.coral }}>30 %</B>
            </div>
          </Card>
        </Chapter>

        <Chapter n="5" title="Le quotient familial" color={T.accent}>
          <P>Le foyer fiscal est divisé en <B>parts</B>. Le nombre de parts dépend de la composition familiale :</P>
          <List items={[
            { t: "Célibataire / divorcé / veuf", d: "1 part." },
            { t: "Couple marié ou pacsé", d: "2 parts (déclaration commune)." },
            { t: "+ enfant à charge", d: "+ 0,5 part pour les 2 premiers, + 1 part complète à partir du 3ᵉ." },
            { t: "Parent isolé", d: "+ 0,5 part supplémentaire (case T)." },
            { t: "Personne avec carte d'invalidité", d: "+ 0,5 part." },
          ]} color={T.accent} />
          <P>On divise le revenu par le nombre de parts, on calcule l'impôt sur ce résultat, puis on multiplie. C'est un mécanisme qui adoucit la progressivité pour les familles.</P>
          <DeepDive title="Le plafonnement du quotient familial">
            Le gain du quotient familial est plafonné (~1 791 € par demi-part en 2025). Ce plafond évite que le mécanisme n'avantage disproportionnément les hauts revenus — au-delà d'un certain niveau, ajouter une demi-part rapporte moins de 1 791 €. Pour les couples non mariés ni pacsés, chacun déclare séparément — souvent moins avantageux que la déclaration commune.
          </DeepDive>
        </Chapter>

        <Chapter n="6" title="Cas concrets de calcul" color={T.accent}>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Cas 1 : célibataire à 28 000 € de salaire brut</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Net imposable ~22 500 €. Après abattement 10 % : 20 250 €.<br />
              Impôt : (11 497 à 20 250) × 11 % = <B style={{ color: T.text }}>963 €</B>.<br />
              Taux moyen : 4,3 %. TMI : 11 %.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Cas 2 : couple sans enfants à 80 000 € de revenu imposable</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              2 parts. Revenu par part : 40 000 €.<br />
              Impôt par part : 1 960 + (40 000 - 29 315) × 30 % = 1 960 + 3 206 = <B style={{ color: T.text }}>5 166 €</B>.<br />
              Total : 5 166 × 2 = <B style={{ color: T.text }}>10 332 €</B>. Taux moyen : 12,9 %. TMI : 30 %.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Cas 3 : couple avec 2 enfants à 60 000 €</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              3 parts (2 + 0,5 + 0,5). Revenu par part : 20 000 €.<br />
              Impôt par part : (20 000 − 11 497) × 11 % = <B style={{ color: T.text }}>935 €</B>.<br />
              Total : 935 × 3 = <B style={{ color: T.text }}>2 805 €</B>. Taux moyen : 4,7 %. TMI : 11 %.
            </div>
          </Card>
        </Chapter>

        <Chapter n="7" title="Le prélèvement à la source (PAS)" color={T.accent}>
          <P>Depuis 2019, l'impôt est prélevé directement sur le salaire ou la pension chaque mois, avant d'arriver sur ton compte. Trois implications pratiques :</P>
          <List items={[
            { t: "Le taux affiché sur ta fiche de paie", d: "Calculé par l'administration sur la base de tes revenus antérieurs, ajusté chaque année. Tu peux le modifier sur impots.gouv.fr." },
            { t: "Pas de « surprise » en septembre", d: "Avant 2019, on payait l'impôt l'année suivant les revenus — cause de difficultés en cas de baisse de salaire. Le PAS supprime ce décalage." },
            { t: "La régularisation finale", d: "En septembre, après ta déclaration de mai, l'écart entre ce qui a été prélevé et ce qui était dû est régularisé (remboursement ou solde à payer)." },
          ]} color={T.accent} />
        </Chapter>

        <Quiz color={T.accent} questions={[
          { q: "Tu gagnes 35 000 € (1 part). Es-tu imposé à 30 % sur toute cette somme ?", options: ["Oui, c'est le taux de ta tranche", "Non, seule la part au-dessus de 29 315 € est à 30 %", "Non, c'est 30 % sur les 35 000 € moins 10 %", "Cela dépend du département"], answer: 1, explain: "L'impôt est par tranches. Les 11 497 premiers euros sont à 0 %, de 11 497 à 29 315 € à 11 %, et seulement la part au-dessus à 30 %. Le taux moyen est bien plus bas que la TMI." },
          { q: "Que représente la TMI ?", options: ["Le taux moyen de ton imposition", "Le taux appliqué à ton dernier euro gagné", "Une taxe locale", "Une exonération automatique"], answer: 1, explain: "La Tranche Marginale d'Imposition est le taux qui s'applique au dernier euro gagné. C'est elle qui détermine si une déduction (PER, dons…) est intéressante pour toi." },
          { q: "Un couple marié sans enfants gagne 80 000 € imposables. Combien de parts ?", options: ["1", "2", "2,5", "3"], answer: 1, explain: "Couple marié ou pacsé = 2 parts. Les enfants ajoutent des demi-parts supplémentaires (+0,5 par enfant pour les 2 premiers)." },
        ]} />
      </div>
    ),
  },

  {
    id: "flat", Icon: TrendingDown, title: "PFU & revenus du capital",
    summary: "La « flat tax » à 30 % : comment sont taxés les gains des placements et quand choisir le barème.",
    intro: "Comprendre comment l'État prélève sur tes intérêts, dividendes et plus-values.",
    words: 1700,
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

        <Chapter n="2" title="Ce qui est concerné par le PFU" color={T.accent}>
          <List items={[
            { t: "Intérêts de placements", d: "Comptes à terme, obligations, livrets non réglementés. (Les livrets réglementés type Livret A en sont exonérés.)" },
            { t: "Dividendes d'actions", d: "Que tu détiennes en direct ou via un fonds (hors PEA / AV)." },
            { t: "Plus-values mobilières", d: "Lors de la vente d'actions, d'ETF, d'obligations (hors enveloppes fiscales)." },
            { t: "Plus-values de cession de crypto", d: "Pour les particuliers, depuis 2019. Formulaire 2086." },
            { t: "Rachats partiels d'assurance-vie avant 8 ans", d: "Soumis au PFU par défaut." },
            { t: "Coupons d'obligations", d: "Idem, sous PFU." },
          ]} color={T.accent} />
        </Chapter>

        <Chapter n="3" title="Quand choisir le barème progressif ?" color={T.accent}>
          <P>Tu peux opter, chaque année, pour l'imposition au <B>barème progressif</B> (TMI) au lieu du PFU. Cette option est globale (concerne tous les revenus du capital) et n'est généralement intéressante que si ta TMI est faible (0 % ou 11 %).</P>
          <List items={[
            { t: "TMI à 0 %", d: "Aucun impôt sur le revenu sur tes intérêts/dividendes (mais les 17,2 % de prélèvements sociaux restent dus). Économie certaine vs PFU." },
            { t: "TMI à 11 %", d: "Le barème progressif peut être plus avantageux (11 % au lieu de 12,8 % d'impôt). Économie modeste mais réelle." },
            { t: "TMI à 30 % ou plus", d: "Le PFU à 30 % est presque toujours plus intéressant. L'option barème serait à 30+17,2 = 47,2 % d'impôt." },
          ]} color={T.accent} />
          <DeepDive title="Le calcul à faire chaque année">
            Sur ta déclaration en mai, tu cochés (ou pas) la case option barème (2OP). Le simulateur d'impôts.gouv.fr te montre les deux résultats — choisis la plus avantageuse. L'option est révocable d'une année sur l'autre.<br /><br />
            Subtilité : l'option au barème ouvre droit à un abattement de 40 % sur les dividendes (sauf si actions étrangères hors UE). Ça peut basculer le calcul pour les TMI modérées.
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="Les enveloppes qui changent la donne" color={T.accent}>
          <P>Certaines enveloppes échappent partiellement au PFU :</P>
          <List items={[
            { t: "Livrets réglementés (A, LDDS, LEP, Livret Jeune)", d: "Totalement exonérés d'impôt ET de prélèvements sociaux. Le rendement affiché = le rendement net." },
            { t: "PEA après 5 ans", d: "Gains exonérés d'impôt sur le revenu. Seuls les 17,2 % de prélèvements sociaux restent dus. Soit 17,2 % au lieu de 30 %." },
            { t: "Assurance-vie après 8 ans", d: "Abattement annuel sur les gains : 4 600 € (célibataire), 9 200 € (couple). Au-delà, taux réduit à 7,5 % + PS. Net : ~24,7 % au-dessus de l'abattement, vs 30 % en PFU." },
            { t: "PEE / PER d'entreprise", d: "Gains exonérés d'IR à la sortie. Seuls les 17,2 % de PS sont dus. Comparable au PEA." },
          ]} color={T.accent} />
          <Note color={T.accent}>Le choix de l'enveloppe peut peser autant que le choix du support sous-jacent. Sur 30 ans, l'écart fiscal cumulé est massif — voir le simulateur PEA vs CTO dans la page Outils.</Note>
        </Chapter>

        <Chapter n="5" title="Cas concret comparé" color={T.accent}>
          <Card style={{ padding: 20, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>Tu fais 10 000 € de plus-value après 15 ans d'investissement</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.8 }}>
              <B style={{ color: T.text }}>Sur CTO :</B> 10 000 × 30 % = <B style={{ color: T.coral }}>3 000 € d'impôt</B>. Net : 7 000 €.<br />
              <B style={{ color: T.text }}>Sur PEA (après 5 ans) :</B> 10 000 × 17,2 % = <B style={{ color: T.brand }}>1 720 € d'impôt</B>. Net : 8 280 €.<br />
              <B style={{ color: T.text }}>Sur AV (après 8 ans, sous abattement) :</B> 10 000 € exonérés d'IR (sous 4 600 €/an) + reste taxé à 7,5 % + PS = <B style={{ color: T.brand }}>~1 100 € d'impôt</B>. Net : ~8 900 €.<br /><br />
              <B style={{ color: T.text }}>Écart entre PEA et CTO : 1 280 € sur cette seule opération.</B>
            </div>
          </Card>
        </Chapter>

        <Chapter n="6" title="Cas particuliers à connaître" color={T.accent}>
          <List items={[
            { t: "Plus-value < 305 €/an", d: "Exonérée d'impôt sur les cessions de titres si le total des cessions de l'année est < 305 €. Petit oubli fréquent." },
            { t: "Pertes (moins-values)", d: "Les moins-values sur titres sont reportables 10 ans et imputables sur les plus-values futures. À déclarer même si on n'a pas de gain à compenser." },
            { t: "Dividendes étrangers", d: "Retenue à la source dans le pays d'origine (15 % typique avec convention fiscale). Crédit d'impôt en France pour éviter la double imposition." },
            { t: "Crypto-actifs", d: "PFU 30 % par défaut. Possibilité de barème progressif (utile si TMI faible)." },
          ]} color={T.accent} />
        </Chapter>

        <Chapter n="7" title="L'IFU : le document à ne pas perdre" color={T.accent}>
          <P>Chaque année (généralement en mars), ta banque ou ton courtier t'envoie un <B>Imprimé Fiscal Unique (IFU)</B> récapitulant tous les revenus du capital générés sur tes comptes. Il sert à pré-remplir ta déclaration.</P>
          <Note color={T.accent}>Toujours vérifier que l'IFU correspond à tes registres. Une erreur sur la déclaration reste de ta responsabilité même si elle provient d'un IFU erroné. Garder l'IFU au moins 3 ans après l'année de référence (durée de prescription fiscale en cas de contrôle).</Note>
        </Chapter>

        <Quiz color={T.accent} questions={[
          { q: "Le PFU de 30 % se décompose en :", options: ["30 % d'impôt sur le revenu", "12,8 % d'impôt + 17,2 % de prélèvements sociaux", "20 % d'impôt + 10 % de CSG", "30 % de TVA"], answer: 1, explain: "12,8 % d'impôt + 17,2 % de prélèvements sociaux (CSG, CRDS, etc.) = 30 %. Cette répartition explique pourquoi même les enveloppes « exonérées d'impôt » restent souvent soumises aux prélèvements sociaux." },
          { q: "Tu as une TMI à 11 %. Que faire pour les revenus du capital ?", options: ["Toujours rester au PFU à 30 %", "Comparer avec le barème (option) — souvent plus avantageux à 11 % de TMI", "Refuser tout placement", "Choisir uniquement des crypto"], answer: 1, explain: "À 11 % de TMI, opter pour le barème peut faire baisser ton imposition globale (11 % au lieu de 12,8 %). Les 17,2 % de prélèvements sociaux restent dus dans les deux cas." },
          { q: "Les gains d'un PEA après 5 ans sont :", options: ["Totalement exonérés (impôt + prélèvements sociaux)", "Exonérés d'impôt sur le revenu, mais soumis aux prélèvements sociaux (17,2 %)", "Soumis au PFU classique", "Imposés à 7,5 %"], answer: 1, explain: "Le PEA après 5 ans exonère uniquement l'impôt sur le revenu. Les 17,2 % de prélèvements sociaux restent dus. Soit 17,2 % au lieu de 30 % en CTO." },
        ]} />
      </div>
    ),
  },

  {
    id: "reductions", Icon: Gift, title: "Réductions & niches",
    summary: "PER, dons, investissement locatif : comment alléger légitimement son impôt.",
    intro: "L'État utilise la fiscalité pour orienter les comportements. Voici les leviers les plus courants.",
    words: 1800,
    content: (
      <div>
        <Chapter n="1" title="Trois leviers majeurs" color={T.accent}>
          <List items={[
            { t: "Le PER (Plan d'Épargne Retraite)", d: "Versements déductibles du revenu imposable. Économie d'impôt = versement × TMI. Particulièrement intéressant à partir de 30 % de TMI." },
            { t: "Les dons aux associations", d: "66 % du don déductible de l'impôt dans la limite de 20 % du revenu (75 % pour les associations d'aide aux plus démunis, plafond 1 000 €)." },
            { t: "L'investissement locatif (Pinel, Denormandie, Loc'Avantages…)", d: "Réduction d'impôt en contrepartie d'un engagement de location à un loyer plafonné. À évaluer prudemment : la fiscalité ne doit pas être le seul critère." },
          ]} color={T.accent} />
        </Chapter>

        <Chapter n="2" title="Le PER en profondeur" color={T.accent}>
          <P>Le PER est l'un des dispositifs les plus puissants pour réduire l'impôt. Son fonctionnement :</P>
          <List items={[
            "Tu verses sur un PER → la somme est déduite de ton revenu imposable.",
            "Économie d'impôt immédiate = Versement × TMI.",
            "Le capital fructifie ensuite (intérêts composés non imposés).",
            "À la sortie (retraite), tu paies l'impôt sur le capital ET les gains, mais à la TMI de l'époque (souvent plus basse).",
          ]} color={T.accent} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Le calcul du gain net</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Tu verses 5 000 € sur ton PER. TMI actuelle : 30 %.<br />
              → Économie d'impôt immédiate : <B style={{ color: T.brand }}>1 500 €</B> (à toucher en septembre N+1).<br /><br />
              25 ans plus tard, le capital + gains = ~17 000 € (à 5 %/an).<br />
              À la sortie, si TMI à 11 % (retraite) : impôt = ~1 870 €.<br /><br />
              <B style={{ color: T.text }}>Gain net : 1 500 − 1 870 + intérêts composés sur les 25 ans d'économie d'impôt placée = positif net significatif.</B>
            </div>
          </Card>
          <Note color={T.accent}>Le PER est mathématiquement intéressant si ta TMI à la retraite est INFÉRIEURE à ta TMI actuelle. C'est le cas standard mais à vérifier selon ton profil.</Note>
        </Chapter>

        <Chapter n="3" title="Les dons : 66 % ou 75 %" color={T.accent}>
          <List items={[
            { t: "Dons « classiques » (associations d'intérêt général)", d: "66 % de réduction d'impôt dans la limite de 20 % du revenu imposable. Exemple : 100 € donné = 66 € de réduction d'impôt, soit 34 € de coût net." },
            { t: "Dons « Coluche » (aide aux plus démunis)", d: "75 % de réduction d'impôt, plafonné à 1 000 € de dons/an (jusqu'au plafond). Au-delà, c'est 66 %. Exemple : 1 000 € donné = 750 € de réduction d'impôt, coût net 250 €." },
            { t: "Dons aux fondations universitaires / culturelles", d: "66 % classique, parfois plus selon le dispositif." },
          ]} color={T.accent} />
          <P>À retenir : <B>le coût réel d'un don aux Restos du Cœur (75 %) est de 25 % du montant donné</B>. C'est ce qui te coûte vraiment dans la poche, l'État finance le reste via la réduction d'impôt.</P>
          <DeepDive title="Garder ses reçus fiscaux">
            L'association émet un reçu fiscal en début d'année (janvier-février). Le déclarer en case 7UF (dons classiques) ou 7UD (dons Coluche). En cas de contrôle, conserver les reçus 4 ans (3 ans + l'année en cours).
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="L'investissement locatif : à ne pas confondre" color={T.accent}>
          <P>Plusieurs dispositifs permettent de réduire l'impôt en contrepartie d'un engagement de location :</P>
          <List items={[
            { t: "Pinel", d: "Neuf, location 6/9/12 ans à loyer plafonné, locataire sous conditions de ressources. Réduction de 9 à 21 % du prix d'acquisition étalée sur la durée. Mais s'arrête fin 2024 — il faut signer avant." },
            { t: "Denormandie", d: "Ancien à rénover dans certaines villes moyennes. Réduction similaire à Pinel. Plus pertinent en zones tendues hors grandes métropoles." },
            { t: "Loc'Avantages", d: "Conventionnement avec l'État, loyer modéré (intermédiaire ou social), réduction d'impôt 15-65 %. Plus social que Pinel." },
            { t: "LMNP (Location Meublée Non Professionnelle)", d: "Pas une réduction directe, mais un statut fiscal avantageux (amortissement du bien, du mobilier). Souvent plus pertinent que Pinel pour un investissement de patrimoine." },
          ]} color={T.accent} />
          <Note color={T.coral}>Attention : un investissement locatif doit d'abord être pertinent économiquement (rendement, emplacement, état du marché). La fiscalité est un bonus, pas la raison principale. Pinel a régulièrement attiré des investisseurs vers des projets surcotés où l'avantage fiscal masquait une mauvaise affaire de fond.</Note>
        </Chapter>

        <Chapter n="5" title="Crédits d'impôt vs réductions vs déductions" color={T.accent}>
          <Card style={{ padding: 22, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>Trois mécanismes différents, gain différent</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              <B style={{ color: T.text }}>Déduction du revenu :</B> retire la somme du revenu AVANT calcul de l'impôt. Gain = Somme × TMI. PER, frais réels.<br /><br />
              <B style={{ color: T.text }}>Réduction d'impôt :</B> retire la somme directement de l'impôt à payer. Gain = somme entière SI tu as assez d'impôt à payer. Dons, Pinel.<br /><br />
              <B style={{ color: T.text }}>Crédit d'impôt :</B> retire la somme de l'impôt à payer ET remboursable si l'impôt est inférieur. Gain = somme entière toujours. Garde d'enfants, emploi à domicile.
            </div>
          </Card>
          <DeepDive title="Pourquoi le crédit d'impôt est meilleur que la réduction">
            Imagine que tu paies seulement 200 € d'impôt et que tu fais 500 € de dons donnant 66 % de réduction = 330 € de réduction théorique. Avec une RÉDUCTION : tu ne paies plus rien (200 €) mais tu perds les 130 € restants — la réduction « tronque » à zéro. Avec un CRÉDIT D'IMPÔT, tu serais remboursé des 130 € en trop. Le crédit est donc préférable, surtout pour les revenus modestes.
          </DeepDive>
        </Chapter>

        <Chapter n="6" title="Le plafonnement des niches" color={T.accent}>
          <Note color={T.accent}>La plupart des réductions d'impôt sont plafonnées à un total de <B>10 000 €/an</B> (« plafond global des niches fiscales »). Au-delà, les avantages supplémentaires ne s'appliquent pas. Ce plafond ne s'applique pas aux dons ni au PER (déduction, pas réduction).</Note>
          <P>Quelques exceptions notables :</P>
          <List items={[
            "Dons : hors plafond 10 000 €",
            "PER : déduction, hors plafond 10 000 € (mais propre plafond annuel ~10 % du revenu)",
            "Outre-mer (Girardin) : plafond porté à 18 000 €",
            "Investissements dans le cinéma (SOFICA) : dans le plafond 10 000 €",
          ]} color={T.accent} />
        </Chapter>

        <Chapter n="7" title="Stratégie d'optimisation pour un jeune actif" color={T.accent}>
          <P>Pour la plupart des jeunes actifs (TMI 11-30 %), une stratégie efficace :</P>
          <List items={[
            "1. Maximiser les frais déductibles (frais réels si > 10 %), abattement standard sinon.",
            "2. Profiter de l'épargne salariale (PEE/PER d'entreprise) si l'employeur abonde.",
            "3. Faire quelques dons cohérents avec ses valeurs — économie d'impôt réelle, impact positif réel.",
            "4. Considérer le PER individuel UNIQUEMENT à partir de 30 % de TMI.",
            "5. Éviter les niches « marketing » (Girardin agressif, montages obscurs) — souvent perte économique masquée par l'avantage fiscal.",
          ]} color={T.accent} />
        </Chapter>

        <Quiz color={T.accent} questions={[
          { q: "Tu verses 1 000 € sur ton PER, ta TMI est à 30 %. Quelle est ton économie d'impôt ?", options: ["1 000 €", "300 €", "700 €", "Aucune"], answer: 1, explain: "1 000 € déduits × 30 % de TMI = 300 € d'économie d'impôt. C'est pourquoi le PER est surtout intéressant à partir d'une TMI à 30 %. À 11 %, l'économie ne serait que de 110 €." },
          { q: "Quelle est la différence entre déduction et réduction d'impôt ?", options: ["Aucune, c'est synonyme", "La déduction baisse le revenu imposable, la réduction baisse directement l'impôt à payer", "La réduction est obligatoire", "La déduction n'existe pas en France"], answer: 1, explain: "Distinction cruciale. Une déduction de 1 000 € vaut 110 € à 11 % de TMI mais 450 € à 45 %. Une réduction de 1 000 € vaut toujours 1 000 €." },
          { q: "Un don de 1 000 € aux Restos du Cœur (taux 75 %) te coûte vraiment combien ?", options: ["1 000 €", "750 €", "250 €", "0 €"], answer: 2, explain: "750 € de réduction d'impôt, donc coût net 250 €. C'est l'un des leviers fiscaux les plus puissants ET utiles socialement." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "declarer", Icon: FileCheck, title: "Déclarer ses impôts pas à pas",
  summary: "Avril-juin : la déclaration. Ce qui est pré-rempli, ce qu'il faut vérifier, ce qu'on ajoute soi-même.",
  intro: "La déclaration n'est plus optionnelle même pour les non-imposables. Voici la check-list propre pour un jeune actif.",
  words: 1800,
  content: (
    <div>
      <Chapter n="1" title="Le calendrier officiel" color={T.accent}>
        <P>La campagne de déclaration s'ouvre <B>début avril</B> chaque année sur <a href="https://impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{ color: T.brand }}>impots.gouv.fr</a>. Les dates limites varient selon ton département (zones 1, 2, 3) — fin mai à mi-juin en général.</P>
        <List items={[
          { t: "Avril : ouverture de la déclaration", d: "Le formulaire est pré-rempli avec tes revenus connus. Tu peux commencer à le vérifier dès le 1ᵉʳ jour." },
          { t: "Mai-juin : dates limites", d: "Zone 1 : ~25 mai. Zone 2 : ~31 mai. Zone 3 : ~7 juin. Papier : ~20 mai pour ceux qui sont autorisés." },
          { t: "Été : édition de l'avis d'imposition", d: "Disponible courant juillet-août sur ton espace personnel. Document à conserver précieusement (logement, prêts, aides)." },
          { t: "Septembre : régularisation finale", d: "Si tu dois payer un complément (revenus non prélevés), c'est en septembre. Si tu es remboursé, virement automatique." },
          { t: "Décembre : ajustement du taux PAS", d: "Tu peux modifier ton taux pour l'année suivante via ton espace personnel." },
        ]} color={T.accent} />
        <Note color={T.coral}>Même si tu es non-imposable, la déclaration reste obligatoire dès tes 18 ans (sauf rattachement au foyer parental). C'est elle qui ouvre les droits à certaines aides (APL, prime d'activité…) et qui produit l'avis d'imposition utile pour le logement.</Note>
      </Chapter>

      <Chapter n="2" title="Faut-il rester rattaché au foyer parental ?" color={T.accent}>
        <P>Question clé pour les jeunes 18-25 ans :</P>
        <List items={[
          { t: "Rattaché (jusqu'à 25 ans si étudiant)", d: "Les parents bénéficient d'une demi-part fiscale supplémentaire. Toi, tu n'as pas d'imposition propre. Avantage si tes revenus sont faibles et tes parents à TMI élevée." },
          { t: "Détaché", d: "Tu déclares seul. Tu profites de ton propre quotient familial (1 part), de tes propres tranches. Avantage si tu gagnes déjà bien." },
        ]} color={T.accent} />
        <DeepDive title="Le calcul comparatif">
          Cas type : étudiant gagnant 8 000 €/an en alternance, parents à TMI 30 %.<br />
          • Rattaché : parents économisent ~1 791 € (gain demi-part plafonné). Étudiant ne déclare rien individuellement.<br />
          • Détaché : étudiant non imposable, mais les parents perdent ~1 791 €.<br /><br />
          Conclusion : généralement, rester rattaché est avantageux jusqu'à environ 12-15 k€ de revenu annuel personnel. Au-delà, simulation à faire au cas par cas.
        </DeepDive>
      </Chapter>

      <Chapter n="3" title="Ce qui est pré-rempli" color={T.accent}>
        <P>Le fisc reçoit automatiquement la plupart de tes revenus :</P>
        <List items={[
          { t: "Salaires", d: "Transmis par l'employeur via la DSN (déclaration sociale nominative)." },
          { t: "Indemnités Pôle emploi / France Travail / IJSS", d: "Transmises directement par l'organisme payeur." },
          { t: "Revenus de placements", d: "Banques et courtiers envoient l'IFU (Imprimé Fiscal Unique). Intérêts, dividendes, plus-values sur PEA/CTO." },
          { t: "Pensions et retraites", d: "Caisses de retraite, France Travail." },
          { t: "Allocations familiales et CAF", d: "La plupart des aides CAF sont pré-renseignées." },
        ]} color={T.accent} />
        <Note color={T.accent}>Toujours <B>vérifier</B> les chiffres pré-remplis. Une erreur (cumul incorrect d'un employeur multiple, oubli d'un IFU) reste de ta responsabilité. C'est rare mais ça arrive — surtout en cas de changement d'employeur en milieu d'année.</Note>
      </Chapter>

      <Chapter n="4" title="Ce qu'il faut ajouter soi-même" color={T.accent}>
        <List items={[
          { t: "Revenus fonciers (location)", d: "Régime micro-foncier si loyers < 15 000 €/an (abattement 30 % auto), sinon régime réel avec déduction des charges. Formulaire 2044." },
          { t: "Revenus à l'étranger", d: "Stage rémunéré, dividendes d'un compte étranger : à déclarer même si déjà imposés sur place (conventions fiscales). Formulaire 2047." },
          { t: "Versements PER déductibles", d: "Case spécifique à cocher (6NS, 6NT) pour bénéficier de la déduction." },
          { t: "Dons à des associations", d: "Reçus fiscaux à conserver — 66 % ou 75 % de réduction selon l'association (cases 7UF/7UD)." },
          { t: "Crypto-actifs", d: "Plus-values de cession à déclarer (formulaire 2086), même si la plateforme est étrangère. Les transferts entre tes propres wallets ne sont pas des cessions." },
          { t: "Frais réels", d: "Option si tes frais professionnels dépassent l'abattement automatique de 10 %. Surtout pertinent en cas de grands trajets domicile-travail. Garder tous les justificatifs." },
          { t: "Charges déductibles", d: "Pensions alimentaires versées, frais de comptabilité d'un indépendant, etc." },
        ]} color={T.accent} />
      </Chapter>

      <Chapter n="5" title="Frais réels : quand est-ce intéressant ?" color={T.accent}>
        <P>L'abattement automatique de 10 % couvre les frais professionnels. Tu peux opter pour les <B>frais réels</B> si tes frais dépassent cet abattement. Calcul à faire :</P>
        <List items={[
          { t: "Trajets domicile-travail", d: "Indemnité kilométrique selon le barème fiscal officiel. Plus pertinent au-delà de 30 km par trajet." },
          { t: "Repas pris à l'extérieur", d: "Différence entre coût réel et la valeur du repas pris chez soi (~5 €). Souvent ~5-7 €/jour ouvré déductibles." },
          { t: "Documentation, formations, syndicat", d: "Tous les frais payés de ta poche pour ton job." },
          { t: "Vêtements professionnels spécifiques", d: "Uniforme, équipement de sécurité non fourni." },
        ]} color={T.accent} />
        <Card style={{ padding: 18, background: T.bgSoft }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple : 50 km de trajet, 200 jours travaillés</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
            100 km aller-retour × 200 jours = 20 000 km/an.<br />
            Avec un véhicule 5 CV essence (~0,575 €/km en 2025) : 20 000 × 0,575 = <B style={{ color: T.brand }}>~11 500 €</B>.<br />
            + Repas extérieurs : 5 € × 200 = 1 000 €.<br />
            Total frais réels : 12 500 €.<br /><br />
            Si tu gagnes 30 000 €, l'abattement 10 % = 3 000 €. Les frais réels te font gagner <B style={{ color: T.brand }}>9 500 € de déduction supplémentaire</B>. À 30 % de TMI = 2 850 € d'impôt en moins.
          </div>
        </Card>
      </Chapter>

      <Chapter n="6" title="Erreurs fréquentes à éviter" color={T.coral}>
        <List items={[
          { t: "Oublier de signaler un changement", d: "Mariage, pacs, déménagement, naissance — chaque événement modifie le quotient familial et l'impôt." },
          { t: "Confondre déclaration et paiement", d: "Le prélèvement à la source ne dispense pas de déclarer. La régularisation finale se fait en septembre." },
          { t: "Cocher la mauvaise case pour les frais", d: "Soit l'abattement 10 % automatique (rien à faire), soit les frais réels (justificatifs à conserver). Pas les deux." },
          { t: "Croire qu'on est dispensé", d: "Tu peux être dispensé d'IMPÔT mais pas de DÉCLARATION." },
          { t: "Oublier les revenus annexes", d: "Cours particuliers payés en cash, vente Vinted/Leboncoin régulière, contenus YouTube/Twitch : tout revenu est en principe déclarable. Tolérance pour le très occasionnel mais à régulariser dès que ça devient récurrent." },
          { t: "Ne pas déclarer les comptes à l'étranger", d: "Tout compte (Revolut, courtier étranger…) avec opérations doit être déclaré (formulaire 3916). Amende de 1 500 € par compte non déclaré." },
        ]} color={T.coral} />
        <DeepDive title="Et si je me suis trompé après envoi ?">
          Pas de panique. Une déclaration peut être corrigée en ligne <B>jusqu'à mi-décembre</B> après la campagne. Au-delà, une réclamation est possible jusqu'au 31 décembre de la 2ᵉ année suivante. Les pénalités ne s'appliquent qu'en cas de mauvaise foi caractérisée — une rectification spontanée est bien vue.
        </DeepDive>
      </Chapter>

      <Chapter n="7" title="Outils et ressources officiels" color={T.accent}>
        <List items={[
          { t: "impots.gouv.fr", d: "Simulateur d'impôt, déclaration en ligne, espace personnel sécurisé, paiement et historique. Le seul site officiel." },
          { t: "Service-public.fr", d: "Fiches pratiques sur les démarches fiscales courantes." },
          { t: "Conciliateur fiscal départemental", d: "Recours gratuit en cas de désaccord avec l'administration. À demander en cas de blocage." },
          { t: "Centre des impôts", d: "Rendez-vous physique ou téléphone pour conseil personnalisé. Gratuit, souvent sous-utilisé." },
        ]} color={T.accent} />
      </Chapter>

      <Quiz color={T.accent} questions={[
        { q: "Tu es étudiant non imposable. Dois-tu quand même déclarer ?", options: ["Non, c'est inutile", "Oui, c'est obligatoire dès 18 ans (sauf rattachement au foyer parental)", "Seulement si tu travailles", "Une année sur deux suffit"], answer: 1, explain: "La déclaration est obligatoire dès 18 ans, indépendamment de l'imposition. Elle conditionne plusieurs aides (APL, prime d'activité) et fournit l'avis d'imposition souvent demandé pour le logement." },
        { q: "Une plus-value sur crypto réalisée via une plateforme étrangère :", options: ["N'est pas imposable en France", "Est imposable et à déclarer (formulaire 2086)", "Est automatiquement transmise au fisc", "Ne concerne que les professionnels"], answer: 1, explain: "Toute plus-value de cession de crypto par un résident fiscal français est imposable (PFU à 30 % par défaut), même si la plateforme est à l'étranger. Le formulaire 2086 doit être joint à la déclaration." },
        { q: "Quand opter pour les frais réels plutôt que l'abattement 10 % ?", options: ["Jamais", "Toujours, c'est plus avantageux", "Quand tes vrais frais professionnels dépassent l'abattement de 10 %", "Sur demande de l'administration"], answer: 2, explain: "Si tes frais réels (kilomètres, repas, formations payées de ta poche) dépassent 10 % de ton revenu, l'option frais réels devient avantageuse. À calculer chaque année." },
      ]} />
    </div>
  ),
});

export default function Fiscalite(p) {
  return <TopicHub pageId="fiscalite" topics={TOPICS} {...p} />;
}
