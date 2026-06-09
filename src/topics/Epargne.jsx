import React from "react";
import { Scale, Snowflake, Building2, Flame, Target, Briefcase } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { GrowthLine, InflationViz, VizFrame, VizCaption, TwoInvestors } from "../ui/charts.jsx";
import { CompoundSim, InflationSim } from "../ui/MiniSim.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "vs", Icon: Scale, title: "Épargne ou investissement ?",
    summary: "Deux outils, deux besoins. Savoir quand l'argent doit rester sûr et quand il peut prendre des risques.",
    intro: "Avant de placer le moindre euro, il faut comprendre à quel besoin chaque solution répond.",
    words: 1500,
    content: (
      <div>
        <Chapter n="1" title="Sécurité vs croissance" color={T.brand}>
          <P>L'<B>épargne</B> vise la sécurité et le court terme : on veut un argent disponible et stable, quitte à ce qu'il rapporte peu. L'<B>investissement</B> vise le long terme et accepte un risque pour viser un rendement supérieur.</P>
          <P>On bâtit donc d'abord son socle d'épargne (le fonds d'urgence), puis on investit le surplus dont on n'a pas besoin avant plusieurs années. Les deux ne sont pas opposés, ils sont <em>complémentaires</em> et répondent à des besoins différents.</P>
        </Chapter>

        <Chapter n="2" title="Tableau comparatif" color={T.brand}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", borderBottom: `1px solid ${T.line}` }}>
              <div style={{ padding: "14px 18px", fontSize: 13, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5 }}>Critère</div>
              <div style={{ padding: "14px 18px", fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, background: `${T.brand2}10` }}>Épargne</div>
              <div style={{ padding: "14px 18px", fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, background: `${T.coral}10` }}>Investissement</div>
            </div>
            {[
              ["Horizon", "Court terme (< 5 ans)", "Long terme (> 5 ans)"],
              ["Risque de perte", "Aucun (capital garanti)", "Réel, peut être important"],
              ["Rendement attendu", "Faible (1-4 %/an)", "Plus élevé (5-8 %/an net)"],
              ["Disponibilité", "Immédiate", "Variable, parfois bloquée"],
              ["Effet de l'inflation", "Subi pleinement", "Combattue à long terme"],
              ["Objectif type", "Fonds d'urgence, projet 2-3 ans", "Retraite, indépendance financière"],
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", borderBottom: i < 5 ? `1px solid ${T.line}` : "none" }}>
                <div style={{ padding: "12px 18px", fontSize: 14, color: T.textDim, fontWeight: 600 }}>{row[0]}</div>
                <div style={{ padding: "12px 18px", fontSize: 14, color: T.text }}>{row[1]}</div>
                <div style={{ padding: "12px 18px", fontSize: 14, color: T.text }}>{row[2]}</div>
              </div>
            ))}
          </Card>
        </Chapter>

        <Chapter n="3" title="La règle des horizons" color={T.brand}>
          <Note color={T.brand}>L'argent dont tu pourrais avoir besoin dans moins de 3-5 ans n'a en général pas sa place sur des supports risqués : tu pourrais être forcé de vendre au pire moment, en pleine baisse.</Note>
          <List items={[
            { t: "Court terme (< 1 an)", d: "Livret réglementé ou compte courant. Disponibilité totale. C'est la zone du fonds d'urgence et des projets imminents (déménagement, achat planifié)." },
            { t: "Moyen terme (1-5 ans)", d: "Fonds en euros d'assurance-vie, comptes à terme. Stabilité, rendement modéré. C'est la zone de l'apport immobilier futur, du mariage, des études d'enfant qui démarrent dans 4 ans." },
            { t: "Long terme (> 5 ans)", d: "ETF, PEA, unités de compte d'assurance-vie. Volatilité acceptée pour un rendement potentiel supérieur. C'est la zone de la retraite, de la liberté financière, de l'éducation d'un enfant qui naîtra dans 10 ans." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="4" title="L'ordre des priorités" color={T.brand}>
          <P>La hiérarchie financière saine, dans l'ordre :</P>
          <List items={[
            { t: "1. Rembourser les dettes à taux élevé", d: "Tout crédit > 5-6 % de TAEG (revolving, conso). Aucun placement ne rapportera autant net que ces taux d'emprunt." },
            { t: "2. Fonds d'urgence de 1 000 € minimum", d: "Avant tout, le palier 1 pour ne pas s'endetter au premier imprévu." },
            { t: "3. Compléter le fonds d'urgence à 3 mois", d: "Sécurité avant croissance." },
            { t: "4. Profiter de l'abondement employeur si dispo", d: "PEE/PER d'entreprise avec abondement = +100 % de rendement instantané. Voir le cours « Épargne salariale »." },
            { t: "5. Investir le reste long terme", d: "PEA, AV en unités de compte, ETF — selon les objectifs et l'horizon." },
          ]} color={T.brand} />
          <Note color={T.brand}>Cette hiérarchie est mécanique : sauter une étape, c'est ajouter du risque sans gagner en rendement. La bonne nouvelle, c'est qu'elle est valable pour 95 % des situations courantes.</Note>
        </Chapter>

        <Chapter n="5" title="Cas concrets" color={T.brand}>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Cas 1 : Tom, étudiant, 18 mois avant le départ Erasmus</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Tom veut épargner 3 000 € en 18 mois pour son Erasmus. Horizon court (&lt; 2 ans) → <B style={{ color: T.brand }}>Livret A ou LEP s'il y est éligible</B>. Surtout pas en ETF : un krach 6 mois avant le départ ruinerait le projet.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Cas 2 : Sarah, 28 ans, apport immobilier dans 4-5 ans</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Sarah veut un apport de 30 000 € dans 4-5 ans. Horizon moyen → <B style={{ color: T.brand }}>fonds en euros d'assurance-vie</B> majoritairement, avec une petite poche (10-20 %) en unités de compte si elle accepte le risque. Pas 100 % ETF car le timing exact compte.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Cas 3 : Mehdi, 26 ans, retraite dans 40 ans</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Mehdi prépare sa retraite à 65 ans. Horizon &gt; 30 ans → <B style={{ color: T.brand }}>PEA + ETF monde majoritaires</B>. La volatilité court terme est neutralisée par la durée, le rendement actions long terme est statistiquement supérieur à toute épargne sécurisée.
            </div>
          </Card>
        </Chapter>

        <Quiz color={T.brand} questions={[
          { q: "Où placer un argent dont on aura besoin dans 18 mois pour un projet précis ?", options: ["ETF actions", "Livret réglementé ou support sécurisé", "Crypto", "Assurance-vie en unités de compte"], answer: 1, explain: "Sur un horizon court, un placement risqué peut être en moins-value au moment où on en a besoin. La sécurité prime sur le rendement." },
          { q: "Quelle est la première priorité avant tout investissement ?", options: ["Ouvrir un PEA", "Constituer un fonds d'urgence d'au moins 1 000 €", "Acheter du Bitcoin", "Souscrire à un PER"], answer: 1, explain: "Le fonds d'urgence est la fondation. Investir sans ce filet expose à devoir vendre en urgence, potentiellement au pire moment." },
          { q: "Tu as un crédit conso à 8 % de TAEG et 5 000 € à placer. Que faire en priorité ?", options: ["Investir en ETF (potentiel 7 %)", "Rembourser le crédit conso", "Mettre en livret A à 3 %", "Acheter de la crypto"], answer: 1, explain: "Rembourser une dette à 8 % offre un rendement net garanti de 8 %. Aucun placement classique ne bat ce taux garanti. La règle : tout crédit > 5-6 % doit être remboursé avant d'investir." },
        ]} />
      </div>
    ),
  },

  {
    id: "composes", Icon: Snowflake, title: "Les intérêts composés",
    summary: "Le concept le plus important de toute l'épargne : l'effet boule de neige qui s'envole avec le temps.",
    intro: "Comprendre cet unique mécanisme change radicalement le rapport à l'argent et au temps.",
    words: 1900,
    content: (
      <div>
        <Chapter n="1" title="L'effet boule de neige" color={T.brand}>
          <P>Les <B>intérêts composés</B>, ce sont les intérêts qui produisent à leur tour des intérêts. Chaque année, tu gagnes du rendement non seulement sur ton capital, mais aussi sur les gains déjà accumulés. L'effet est modeste au début… puis devient spectaculaire avec le temps.</P>
          <VizFrame title="150 €/mois à 6 % pendant 30 ans">
            <GrowthLine />
            <VizCaption>La courbe verte (valeur totale) s'envole au-dessus de la ligne pointillée (versements) : tout l'écart vient des intérêts composés.</VizCaption>
          </VizFrame>
        </Chapter>

        <Chapter n="2" title="Joue avec les paramètres" color={T.brand}>
          <P>Mieux qu'une explication théorique : essaie. Modifie les paramètres ci-dessous pour ressentir comment chaque variable influence le résultat final.</P>
          <CompoundSim />
        </Chapter>

        <Chapter n="3" title="Intérêts simples vs intérêts composés" color={T.brand}>
          <P>La confusion est fréquente. Comparons un placement de 10 000 € à 5 % sur 20 ans :</P>
          <Card style={{ padding: 20, background: T.bgSoft }}>
            <List items={[
              { t: "Intérêts simples", d: "5 % de 10 000 € = 500 €/an, toujours sur le capital initial. Au bout de 20 ans : 10 000 + (500 × 20) = 20 000 €. Le capital double. Ce mode existe pour certains produits comme les obligations à coupon fixe." },
              { t: "Intérêts composés", d: "5 % de 10 000 € la 1ère année = 500 €. La 2ᵉ année : 5 % de 10 500 € = 525 €. La 3ᵉ : 5 % de 11 025 € = 551 €. Etc. Au bout de 20 ans : 26 533 €. Le capital est multiplié par 2,65. C'est le mode standard de l'épargne et de l'investissement à long terme." },
            ]} color={T.brand} />
          </Card>
          <Note color={T.brand}>Plus la durée est longue, plus l'écart entre les deux modes s'amplifie. Sur 40 ans à 5 %, l'écart est encore plus marqué : intérêts simples = 30 000 €, intérêts composés = 70 400 €.</Note>
        </Chapter>

        <Chapter n="4" title="Le temps &gt; le montant" color={T.brand}>
          <P>Voici l'illustration la plus frappante : commencer tôt avec de petites sommes bat <em>presque toujours</em> commencer tard avec de plus gros versements.</P>
          <VizFrame title="Alice (commence à 25 ans) vs Bob (commence à 35 ans)">
            <TwoInvestors />
            <VizCaption>Même versement mensuel, même rendement. Alice n'a cotisé que 10 ans (24 000 € versés), Bob 30 ans (72 000 € versés) — pourtant Alice finit devant.</VizCaption>
          </VizFrame>
          <Note color={T.brand}>Le temps a un effet asymétrique : 10 ans gagnés au début valent plus que 20 ans ajoutés à la fin. C'est contre-intuitif mais mathématiquement implacable. La conclusion pratique : commencer maintenant avec ce que tu peux est presque toujours mieux qu'attendre d'avoir « assez ».</Note>
        </Chapter>

        <Chapter n="5" title="La formule et la règle de 72" color={T.brand}>
          <Card style={{ padding: 20, background: T.bgSoft }}>
            <div style={{ fontFamily: T.serif, fontSize: 22, color: T.text, textAlign: "center", marginBottom: 14 }}>
              VF = VP × (1 + r)ⁿ
            </div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              <B style={{ color: T.text }}>VF</B> = Valeur Future (ce que tu auras à la fin)<br />
              <B style={{ color: T.text }}>VP</B> = Valeur Présente (ton capital de départ)<br />
              <B style={{ color: T.text }}>r</B> = Taux par période (en décimal : 5 % = 0,05)<br />
              <B style={{ color: T.text }}>n</B> = Nombre de périodes<br />
            </div>
          </Card>
          <P>Pour un calcul mental rapide, la <B>règle de 72</B> : divise 72 par le taux annuel (%) pour estimer en combien d'années ton capital double. À 3 %, c'est ≈ 24 ans ; à 6 %, ≈ 12 ans ; à 9 %, ≈ 8 ans. Étonnamment précise pour un calcul de tête.</P>
          <DeepDive title="D'où vient le « 72 » ?">
            La formule exacte vient du logarithme naturel : ln(2) / ln(1+r) ≈ 0,693 / r pour les petits r. En pourcentage, 0,693 × 100 ≈ 69,3. On arrondit à 72 car c'est divisible par 2, 3, 4, 6, 8, 9, 12… ce qui facilite le calcul mental. Pour les taux > 10 %, utiliser 70 ou 69 donne des résultats plus précis.
          </DeepDive>
        </Chapter>

        <Chapter n="6" title="L'effet inverse : la dette composée" color={T.coral}>
          <P>Les intérêts composés fonctionnent dans les deux sens. Un crédit revolving à 18 % de TAEG dont on ne paie que le minimum applique le même mécanisme — mais à ton détriment.</P>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple : crédit revolving de 2 000 €, remboursement minimum</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              À 18 % de TAEG, en payant uniquement le minimum mensuel (souvent ~3 % du solde), il faut <B style={{ color: T.coral }}>environ 13 ans</B> pour solder, et le coût total dépasse <B style={{ color: T.coral }}>4 800 €</B> — soit plus du double du capital initial.
            </div>
          </Card>
          <Note color={T.coral}>La même magie qui te rend riche en investissant peut te ruiner en empruntant à taux élevé. Toujours rembourser les dettes &gt; 5-6 % avant d'investir.</Note>
        </Chapter>

        <Chapter n="7" title="Les trois variables que tu contrôles" color={T.brand}>
          <List items={[
            { t: "Le montant versé", d: "Le levier le plus immédiat mais limité par ton revenu. Doubler de 100 à 200 €/mois = doubler le capital final. Simple mais demande une marge budgétaire." },
            { t: "La durée", d: "Le levier le plus puissant et le moins coûteux. Chaque année supplémentaire ajoute non seulement un an de versements mais surtout un an d'intérêts composés sur tout le capital accumulé." },
            { t: "Le rendement", d: "Le moins contrôlable. Tu choisis les supports mais pas leur performance. La meilleure approche : choisir des ETF indiciels à frais bas et accepter le rendement de marché." },
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.brand} questions={[
          { q: "Selon la règle de 72, en combien d'années un capital double à 6 % par an ?", options: ["6 ans", "12 ans", "20 ans", "36 ans"], answer: 1, explain: "72 ÷ 6 = 12 ans. C'est une excellente approximation des intérêts composés sans calculatrice." },
          { q: "Pour les intérêts composés, qu'est-ce qui compte le plus à long terme ?", options: ["Le rendement annuel", "Le montant des versements", "La durée", "Le timing parfait du marché"], answer: 2, explain: "Sur les longues périodes, la durée a un effet exponentiel. Commencer 10 ans plus tôt avec des petits montants bat souvent commencer plus tard avec de gros versements." },
          { q: "Quelle est la différence entre intérêts simples et composés sur 20 ans à 5 % avec 10 000 € de départ ?", options: ["Aucune", "Environ 2 000 €", "Environ 6 500 €", "Plus de 50 000 €"], answer: 2, explain: "Intérêts simples : 20 000 €. Intérêts composés : 26 533 €. Soit environ 6 500 € d'écart, qui ne fait que grandir avec le temps." },
        ]} />
      </div>
    ),
  },

  {
    id: "supports", Icon: Building2, title: "Les supports d'épargne",
    summary: "Livrets, assurance-vie, plans dédiés : comprendre le trio disponibilité / rendement / risque.",
    intro: "Un tour d'horizon des grandes familles de supports français, sans recommander de produit précis.",
    words: 1900,
    content: (
      <div>
        <Chapter n="1" title="Les livrets réglementés" color={T.brand}>
          <P>Les livrets réglementés sont des comptes d'épargne dont le <B>taux et les plafonds sont fixés par l'État</B>. Capital garanti, retrait à tout moment, intérêts non imposés. Idéaux pour le fonds d'urgence et l'épargne court terme.</P>
          <List items={[
            { t: "Livret A", d: "Plafond 22 950 €, taux autour de 2,5-3 %, ouvert à tous (un seul par personne). Aucune fiscalité." },
            { t: "LDDS (Livret Développement Durable et Solidaire)", d: "Plafond 12 000 €, même taux que le Livret A. À ouvrir en complément." },
            { t: "LEP (Livret Épargne Populaire)", d: "Pour revenus modestes (plafond fiscal). Taux ~5 %, plafond 10 000 €. Très avantageux mais ignoré : à demander activement." },
            { t: "Livret Jeune (18-25 ans)", d: "Plafond 1 600 €, taux libre fixé par banque (mais ≥ Livret A). Souvent meilleur taux sur les premiers euros." },
            { t: "PEL (Plan Épargne Logement)", d: "Bloqué 4 ans, taux contractuel à l'ouverture. Lié à un futur prêt immobilier mais utilité réduite avec les taux actuels du marché." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="2" title="L'assurance-vie" color={T.brand}>
          <P>L'assurance-vie n'est <em>pas</em> un produit d'assurance au sens strict — c'est une <B>enveloppe d'investissement</B> très flexible, plébiscitée en France (40 % des ménages en détiennent).</P>
          <List items={[
            { t: "Fonds en euros", d: "Capital garanti à tout moment. Rendement 2,5-3,5 %/an typiquement. La poche sécuritaire." },
            { t: "Unités de compte (UC)", d: "Investissements en actions, obligations, immobilier (SCPI). Capital non garanti, mais potentiel de rendement supérieur. Permet de diversifier le risque." },
          ]} color={T.brand} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>L'avantage fiscal après 8 ans</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Avant 8 ans : les gains sont taxés au PFU (30 %).<br />
              <B style={{ color: T.text }}>Après 8 ans :</B> abattement annuel sur les gains de <B style={{ color: T.brand }}>4 600 €</B> (célibataire) ou <B style={{ color: T.brand }}>9 200 €</B> (couple). Au-delà : taux réduit à 7,5 % + prélèvements sociaux. Concrètement, si tu ne dépasses pas l'abattement, tu ne paies <em>aucun impôt</em> sur tes gains.
            </div>
          </Card>
          <Note color={T.brand}>Astuce méconnue : la date qui compte est celle de l'<B>ouverture</B>, pas des versements. Ouvrir une assurance-vie aujourd'hui avec 100 € fait courir le compteur des 8 ans. Tu n'es pas obligé de l'alimenter immédiatement.</Note>
        </Chapter>

        <Chapter n="3" title="Le PEA (Plan d'Épargne en Actions)" color={T.brand}>
          <P>Le PEA est une enveloppe dédiée aux <B>actions européennes</B>. C'est l'outil de prédilection pour l'investissement long terme en actions par un particulier français.</P>
          <List items={[
            { t: "Plafond de versements", d: "150 000 € (PEA classique) ou 225 000 € (couple). Plafond élevé qui suffit pour la quasi-totalité des profils." },
            { t: "Fiscalité après 5 ans", d: "Gains <B>exonérés d'impôt sur le revenu</B>. Seuls les prélèvements sociaux (17,2 %) restent dus. Très avantageux." },
            { t: "Fiscalité avant 5 ans", d: "Retrait = clôture du PEA + taxation au PFU 30 %. Mieux vaut donc le considérer comme un placement à 5 ans+ minimum." },
            { t: "Supports éligibles", d: "Actions européennes (UE + EEE), ETF investissant ≥ 75 % en actions européennes. La plupart des ETF monde « PEA-compatibles » répliquent un indice mondial via des produits dérivés tout en restant éligibles." },
          ]} color={T.brand} />
          <DeepDive title="PEA-PME et PEA Jeunes">
            Variantes spécifiques. Le PEA-PME (plafond 225 000 €, en complément du PEA classique) cible les ETI et PME européennes — plus risqué. Le PEA Jeunes (18-25 ans rattachés au foyer fiscal parental, plafond 20 000 €) permet de démarrer tôt avec un cadre fiscal favorable.
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="Le PER (Plan d'Épargne Retraite)" color={T.brand}>
          <P>Le PER est <B>bloqué jusqu'à la retraite</B> (sauf cas exceptionnels). Sa particularité : les versements sont déductibles du revenu imposable, ce qui crée une économie d'impôt immédiate.</P>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Économie d'impôt = Versement × TMI</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Si tu es à 30 % de TMI et que tu verses 1 000 € sur ton PER → 300 € d'économie d'impôt immédiate.<br />
              À 11 % de TMI : seulement 110 €. <B style={{ color: T.text }}>Le PER est surtout intéressant à partir de 30 % de TMI.</B>
            </div>
          </Card>
          <List items={[
            { t: "Cas de déblocage anticipé", d: "Achat de la résidence principale, invalidité, décès du conjoint, fin de droits chômage, surendettement, cessation d'activité non salariée. Hors ces cas : bloqué jusqu'à la retraite." },
            { t: "Sortie en capital ou en rente", d: "Au choix. Sortie en capital recommandée souvent — la rente est imposable et son calcul actuariel défavorise l'épargnant en cas de décès précoce." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="5" title="Comptes à terme et autres options" color={T.brand}>
          <List items={[
            { t: "Compte à terme (CAT)", d: "Argent bloqué une durée définie (3 mois à 5 ans) contre un taux connu d'avance. Revient en force quand les taux montent. Pratique pour de l'argent dont on n'aura pas besoin avant l'échéance." },
            { t: "CTO (Compte-Titres Ordinaire)", d: "Pas d'avantage fiscal mais aucune contrainte : on peut acheter ce qu'on veut (actions du monde entier, ETF non éligibles PEA, obligations…). Soumis au PFU 30 %." },
            { t: "SCPI (Sociétés Civiles de Placement Immobilier)", d: "Investir dans l'immobilier locatif sans gérer. Rendement ~4-5 %/an, mais frais d'entrée souvent élevés (8-12 %) et liquidité limitée." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="6" title="Le triangle des compromis" color={T.brand}>
          <P>Chaque support se juge sur trois critères : <B>disponibilité</B>, <B>rendement</B> et <B>risque</B>. Améliorer l'un se fait presque toujours au détriment d'un autre. L'objectif n'est pas de te dire lequel choisir, mais que tu saches ce que tu compares.</P>
          <DeepDive title="L'erreur classique : tout en livrets">
            L'erreur la plus fréquente chez les épargnants français est de tout placer en livrets « par sécurité ». Sur le long terme, c'est l'<em>inflation</em> qui devient le vrai risque : un Livret A à 3 % avec une inflation à 3 % donne un rendement réel de zéro. À l'autre extrême, mettre son fonds d'urgence en ETF actions est tout aussi imprudent : tu pourrais devoir vendre en pleine baisse. <B>Le bon usage de chaque support, c'est tout l'art</B>.
          </DeepDive>
        </Chapter>

        <Chapter n="7" title="L'allocation par défaut pour un débutant" color={T.brand}>
          <P>Pas de recommandation personnalisée, mais une structure pédagogique courante :</P>
          <List items={[
            { t: "Niveau 1 : Livret A + LDDS", d: "Pour le fonds d'urgence (3-6 mois de dépenses). Une fois plein, on passe au niveau 2." },
            { t: "Niveau 2 : Assurance-vie multi-supports", d: "Ouvrir AV et alimenter pour faire courir les 8 ans. Mix fonds euros / unités de compte selon le profil." },
            { t: "Niveau 3 : PEA + ETF monde", d: "Pour la part long terme. Versements automatiques mensuels, hold passif." },
            { t: "Niveau 4 : PER", d: "Une fois TMI à 30 %+, le PER devient intéressant pour la déduction fiscale." },
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.brand} questions={[
          { q: "Quelle enveloppe a une fiscalité avantageuse après 8 ans en France ?", options: ["Le PEA", "L'assurance-vie", "Le Livret A", "Le compte à terme"], answer: 1, explain: "L'assurance-vie offre un abattement annuel sur les gains après 8 ans de détention (4 600 € seul, 9 200 € couple). Le PEA, lui, devient fiscalement avantageux après 5 ans." },
          { q: "Que signifie que le PER « bloque » l'argent ?", options: ["Tu ne peux pas y verser plus", "Le capital est inaccessible jusqu'à la retraite (sauf cas exceptionnels)", "Il est plafonné à 1 000 €/an", "Il rapporte 0 %"], answer: 1, explain: "Le PER échange une déduction fiscale immédiate contre un blocage du capital. Les sorties anticipées sont limitées à des cas précis (achat résidence principale, invalidité, décès du conjoint…)." },
          { q: "Quel est le plafond de versement du Livret A en 2026 ?", options: ["10 000 €", "22 950 €", "150 000 €", "Illimité"], answer: 1, explain: "Plafond 22 950 €. C'est le livret le plus connu, mais en complément le LDDS (12 000 €) permet d'aller plus loin sur la même logique." },
          { q: "Pour 1 000 € versés sur un PER, tu es à 11 % de TMI. Économie d'impôt ?", options: ["1 000 €", "300 €", "110 €", "Aucune"], answer: 2, explain: "11 % × 1 000 € = 110 €. Le PER devient vraiment intéressant à partir de 30 % de TMI (300 € pour 1 000 €). À 11 %, l'économie est modeste et il faut bien peser l'illiquidité." },
        ]} />
      </div>
    ),
  },

  {
    id: "inflation", Icon: Flame, title: "Inflation & automatisation",
    summary: "L'ennemi silencieux du pouvoir d'achat, et la stratégie pour épargner sans effort de volonté.",
    intro: "Pourquoi l'argent qui dort s'appauvrit, et comment transformer l'épargne en simple réglage.",
    words: 1500,
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

        <Chapter n="2" title="Joue avec l'inflation" color={T.coral}>
          <P>Modifie l'horizon, le taux d'inflation et le montant pour voir l'érosion en direct :</P>
          <InflationSim />
        </Chapter>

        <Chapter n="3" title="Rendement nominal vs rendement réel" color={T.coral}>
          <Card style={{ padding: 20, background: T.bgSoft }}>
            <div style={{ fontFamily: T.serif, fontSize: 18, color: T.text, textAlign: "center", marginBottom: 12 }}>
              Rendement réel ≈ Rendement nominal − Inflation
            </div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              <B style={{ color: T.text }}>Rendement nominal :</B> le chiffre affiché par ton placement.<br />
              <B style={{ color: T.text }}>Inflation :</B> la hausse moyenne des prix (mesurée par l'INSEE, ~2 % en moyenne longue durée).<br />
              <B style={{ color: T.text }}>Rendement réel :</B> ce que tu gagnes <em>vraiment</em> en pouvoir d'achat.
            </div>
          </Card>
          <P>Exemples :</P>
          <List items={[
            { t: "Livret A à 3 %, inflation 3 %", d: "Rendement réel : 0 %. Tu maintiens ton pouvoir d'achat, sans gagner ni perdre." },
            { t: "Compte courant à 0 %, inflation 4 %", d: "Rendement réel : −4 %. Tu perds 4 % de pouvoir d'achat chaque année." },
            { t: "ETF à 7 % moyen, inflation 2 %", d: "Rendement réel : 5 %. Tu construis vraiment du patrimoine." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="4" title="Pourquoi épargner par défaut ne suffit pas" color={T.coral}>
          <P>L'erreur classique en France : tout mettre sur le Livret A, content du capital garanti. Sur 30 ans :</P>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              <B style={{ color: T.text }}>Scénario A : 100 % Livret A</B><br />
              200 €/mois sur 30 ans à 3 % → capital final ≈ <B style={{ color: T.brand }}>116 000 €</B>. Avec inflation 2 %, pouvoir d'achat réel ≈ <B style={{ color: T.coral }}>64 000 € d'aujourd'hui</B>.
            </div>
            <div style={{ height: 1, background: T.line, margin: "16px 0" }} />
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              <B style={{ color: T.text }}>Scénario B : 100 % ETF monde</B><br />
              200 €/mois sur 30 ans à 7 % → capital final ≈ <B style={{ color: T.brand }}>240 000 €</B>. Avec inflation 2 %, pouvoir d'achat réel ≈ <B style={{ color: T.brand }}>133 000 € d'aujourd'hui</B>.
            </div>
          </Card>
          <Note color={T.coral}>Sur 30 ans, l'écart en pouvoir d'achat réel est plus du double, pour exactement le même effort d'épargne. La « sécurité » du livret a un coût réel énorme sur le long terme.</Note>
        </Chapter>

        <Chapter n="5" title="Automatiser pour réussir sans effort" color={T.brand}>
          <P>La meilleure stratégie d'épargne est celle que tu n'as pas à décider chaque mois. Un <B>virement automatique</B> le jour de la paie transforme une question de volonté en simple réglage technique.</P>
          <List items={[
            "Mets en place un virement automatique le lendemain de la réception du salaire (le 26 ou le 2 selon ton entreprise).",
            "Commence petit (même 20 €) : l'habitude compte plus que le montant.",
            "Augmente le montant à chaque hausse de revenu, AVANT de t'habituer au nouveau niveau de vie.",
            "Sépare physiquement les comptes : le compte courant n'est pas un compte d'épargne.",
            "Si tu touches une prime exceptionnelle, planifie immédiatement où elle va — sinon elle disparaît dans les dépenses courantes.",
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="6" title="La psychologie de l'épargne automatique" color={T.brand}>
          <P>Le cerveau humain a une aversion forte à la perte mais s'habitue très vite aux changements de niveau. Conséquence pratique : <B>ce que tu ne vois jamais sur ton compte courant, tu ne le manques pas</B>.</P>
          <DeepDive title="Le truc de la « première fois »">
            La première fois que ton virement automatique tourne, c'est désagréable : tu vois 200 € de moins sur ton compte courant. Au bout de 2-3 mois, ton cerveau s'est ajusté au nouveau niveau et tu ne le remarques plus. C'est ce qu'on appelle l'<em>adaptation hédonique</em>. La psychologie joue à fond dans le bon sens — il suffit de tenir 3 mois.
          </DeepDive>
        </Chapter>

        <Chapter n="7" title="L'arrosage d'augmentation" color={T.brand}>
          <P>Stratégie puissante et simple : à chaque augmentation, dirige immédiatement une part vers l'épargne automatique. Si ton salaire passe de 2 000 à 2 200 € (+200 €), augmente ton virement automatique de 100 € (50 % de l'augmentation). Tu profites quand même de +100 € de pouvoir d'achat ressenti, tu doubles probablement ta capacité d'épargne, et tu évites l'inflation du train de vie.</P>
          <Note color={T.brand}>Sur une carrière, cette discipline fait des écarts énormes. Un cadre qui démarre à 2 000 € et finit à 5 000 € a la moitié des hausses « capturée » en épargne automatique = des dizaines de milliers d'euros placés sans effort conscient.</Note>
        </Chapter>

        <Quiz color={T.brand} questions={[
          { q: "Si ton épargne rapporte 1 % et l'inflation est à 3 %, que se passe-t-il ?", options: ["Tu gagnes 1 % de pouvoir d'achat", "Tu gagnes 4 %", "Tu perds environ 2 % de pouvoir d'achat", "Rien, c'est neutre"], answer: 2, explain: "Le rendement réel = rendement nominal − inflation. À 1 % − 3 %, tu perds environ 2 %/an de pouvoir d'achat malgré l'augmentation nominale du solde." },
          { q: "Pourquoi automatiser son épargne ?", options: ["Pour les frais bancaires réduits", "Pour transformer la volonté en habitude technique", "Parce que la loi l'oblige", "Pour les avantages fiscaux"], answer: 1, explain: "L'automatisation enlève la décision mensuelle. C'est le levier psychologique le plus efficace de toutes les méthodes d'épargne, validé par toutes les études comportementales." },
          { q: "Quelle est la meilleure stratégie quand tu reçois une augmentation de 200 €/mois ?", options: ["Tout dépenser pour profiter", "Tout épargner", "Augmenter le virement automatique de 50-100 €, garder le reste pour ton confort", "Demander une autre augmentation"], answer: 2, explain: "Cette technique de « capture partielle » permet de profiter d'une partie de l'augmentation tout en évitant l'inflation totale du train de vie. Sur une carrière, c'est ce qui fait la différence entre épargner peu et beaucoup, sans ressentir de privation." },
        ]} />
      </div>
    ),
  },

  {
    id: "objectifs", Icon: Target, title: "Épargner pour un objectif précis",
    summary: "Voyage, achat immo, mariage : nommer son épargne change tout — et oriente le support à choisir.",
    intro: "Une épargne sans nom finit toujours par être dépensée. Donner un objectif chiffré et daté multiplie les chances d'aboutir.",
    words: 1500,
    content: (
      <div>
        <Chapter n="1" title="Pourquoi nommer son épargne" color={T.brand}>
          <P>« Économiser » est trop vague. <B>« Épargner 8 000 € en 24 mois pour l'apport d'un studio »</B> est concret, mesurable, et engage psychologiquement.</P>
          <P>Les études comportementales (Thaler, Sunstein) montrent qu'un objectif chiffré + une échéance + un compte dédié augmente le taux d'aboutissement de plus de 60 % par rapport à une épargne « générique ».</P>
          <Note color={T.brand}>Astuce : renomme tes comptes/sous-comptes selon l'objectif (« Voyage Japon 2027 », « Apport immobilier ») dans ton appli bancaire. La friction psychologique pour y piocher devient bien plus forte. Boursobank, Revolut et la plupart des banques modernes le permettent gratuitement.</Note>
        </Chapter>

        <Chapter n="2" title="La méthode SMART appliquée à l'épargne" color={T.brand}>
          <List items={[
            { t: "S — Spécifique", d: "« Apport pour studio à Lyon » est meilleur que « immobilier »." },
            { t: "M — Mesurable", d: "Un montant cible précis : 8 000 € et pas « assez »." },
            { t: "A — Atteignable", d: "Une mensualité réaliste compte tenu de ton budget. Pas la peine de viser 1 000 €/mois si ton budget peut juste en dégager 250 €." },
            { t: "R — Réaliste / pertinent", d: "L'objectif te tient à cœur et a du sens dans ta vie." },
            { t: "T — Temporellement défini", d: "Avec une échéance claire : « le 1er septembre 2027 ». Pas « un jour »." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="3" title="Mensualité nécessaire" color={T.brand}>
          <P>La règle de base est purement arithmétique :</P>
          <Card style={{ padding: 20, background: T.bgSoft }}>
            <div style={{ fontFamily: T.serif, fontSize: 18, color: T.text, marginBottom: 8 }}>Mensualité ≈ (Objectif − Capital initial) / (Durée en mois)</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Exemple : objectif 8 000 € en 24 mois, capital actuel 1 000 € → (8 000 − 1 000) / 24 = <B style={{ color: T.brand }}>≈ 292 €/mois</B>.
              Les intérêts sur 2 ans à 3 % réduisent légèrement la mensualité (≈ 280 €), mais l'ordre de grandeur reste valable.
            </div>
          </Card>
        </Chapter>

        <Chapter n="4" title="Quel support pour quelle échéance" color={T.brand}>
          <List items={[
            { t: "0-12 mois (voyage, électroménager…)", d: "Livret réglementé. Disponibilité totale, capital garanti. Le rendement importe peu sur 12 mois." },
            { t: "1-3 ans (mariage, voiture, déménagement)", d: "Mix livrets + fonds en euros d'assurance-vie. Sécurité prioritaire, mais on accepte un horizon court pour optimiser. Si l'AV a moins de 8 ans, il n'y a pas grand intérêt fiscal — autant rester sur les livrets." },
            { t: "3-5 ans (apport immobilier)", d: "Fonds en euros majoritairement, avec une petite poche en unités de compte si la tolérance au risque le permet. Au-delà de 5 ans : envisager la part actions plus significativement." },
            { t: "5-10 ans (études enfant, retraite anticipée)", d: "Assurance-vie multi-supports, PEA, voire PER selon le profil fiscal. La part actions devient pertinente — sur 8-10 ans, la volatilité est largement amortie statistiquement." },
            { t: "10+ ans (retraite, indépendance financière)", d: "PEA + ETF monde + AV unités de compte. La part actions peut monter à 70-100 % selon la tolérance au risque. Le long terme est l'allié des supports volatils." },
          ]} color={T.brand} />
          <Note color={T.brand}>Plus l'objectif est lointain, plus tu peux te permettre de la volatilité. Plus il est proche, plus la sécurité prime sur le rendement.</Note>
        </Chapter>

        <Chapter n="5" title="Cas concrets" color={T.brand}>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Voyage au Japon dans 14 mois : 4 500 €</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Capital actuel : 500 €. (4 500 − 500) / 14 = <B style={{ color: T.brand }}>≈ 286 €/mois</B>.
              Support : <B style={{ color: T.text }}>Livret A</B>. Aucun intérêt à risquer ce capital sur un horizon de 14 mois.
              Virement automatique le 2 du mois, jusqu'au départ.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Apport immo dans 4 ans : 25 000 €</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Capital actuel : 3 000 €. Mensualité brute : (25 000 − 3 000) / 48 = <B style={{ color: T.brand }}>≈ 458 €/mois</B>.
              Support : <B style={{ color: T.text }}>80 % fonds en euros AV + 20 % UC diversifiées</B>. La part UC peut compenser légèrement l'inflation, le fonds euros sécurise l'essentiel.
              Si AV existante depuis moins de 4 ans, l'avantage fiscal n'est pas encore acquis — peu importe ici puisque l'horizon est court.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Indépendance financière dans 25 ans : 500 000 €</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Objectif long terme. Capital actuel : 8 000 €. Avec un rendement moyen de 7 % brut, il faut environ <B style={{ color: T.brand }}>≈ 480 €/mois</B>.
              Support : <B style={{ color: T.text }}>PEA + ETF monde majoritaire (80 %+) + AV pour la diversification fiscale</B>. La volatilité court terme est sans impact sur l'objectif.
            </div>
          </Card>
        </Chapter>

        <Chapter n="6" title="Le piège du « j'aviserai »" color={T.coral}>
          <P>Sans objectif daté, l'épargne devient un coussin disponible — et l'humain est conçu pour piocher dans tout coussin disponible. C'est la principale raison pour laquelle <B>les comptes joints ou les comptes uniques fondent</B> alors que les sous-comptes nommés tiennent.</P>
          <P>Plus subtil : sans échéance précise, on procrastine. « Un jour j'épargnerai sérieusement » se transforme en « j'ai 35 ans et toujours pas commencé ». Un objectif daté, même modeste, casse cette inertie.</P>
        </Chapter>

        <Chapter n="7" title="Gérer plusieurs objectifs en parallèle" color={T.brand}>
          <P>La vie n'a pas qu'un objectif. Comment jongler entre fonds d'urgence à compléter, voyage prévu, apport immo et retraite ?</P>
          <List items={[
            "Liste tous les objectifs avec leur montant et leur échéance.",
            "Hiérarchise par urgence ET importance (fonds d'urgence > tout le reste).",
            "Calcule la mensualité totale nécessaire. Si elle dépasse ta capacité d'épargne, repousse ou réduis certains objectifs — ne sacrifie pas le fonds d'urgence.",
            "Crée un sous-compte ou une ligne d'AV par objectif majeur (la séparation visuelle est puissante).",
            "Revois le plan tous les 6 mois : objectifs réajustés, montants actualisés selon les rentrées.",
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.brand} questions={[
          { q: "Tu veux acheter une voiture à 12 000 € dans 30 mois et tu as déjà 1 500 € de côté. Quelle mensualité viser ?", options: ["≈ 200 €/mois", "≈ 350 €/mois", "≈ 500 €/mois", "≈ 800 €/mois"], answer: 1, explain: "(12 000 − 1 500) / 30 = 350 €/mois. Avec des intérêts modestes sur un livret, la mensualité réelle est légèrement inférieure (≈ 340 €). Le calcul reste précis à ~5 %." },
          { q: "Pour un objectif à 8 mois, quel support privilégier ?", options: ["ETF actions", "Livret réglementé", "PER", "Crypto majeure"], answer: 1, explain: "Sur un horizon court, la sécurité prime. Un livret garantit le capital et la disponibilité. Les supports risqués pourraient être en moins-value pile au moment où tu en as besoin." },
          { q: "Pour un objectif long terme à 25 ans, quel support privilégier ?", options: ["Livret A", "PEA avec ETF monde majoritaires", "Compte courant", "Cash dans un coffre"], answer: 1, explain: "Sur 25 ans, la volatilité actions est largement amortie statistiquement. Le PEA offre une exonération d'IR après 5 ans, et l'ETF monde est diversifié sur des milliers d'entreprises. C'est la combinaison standard pour le très long terme." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "salariale", Icon: Briefcase, title: "L'épargne salariale",
  summary: "PEE, PER d'entreprise, abondement employeur : un coup de pouce gratuit que la moitié des salariés laisse passer.",
  intro: "Si tu es en CDI dans une entreprise de 50+ personnes (et souvent dès 11), tu as probablement accès à des dispositifs très avantageux. Voici comment en profiter.",
  words: 1800,
  content: (
    <div>
      <Chapter n="1" title="Trois dispositifs à connaître" color={T.brand}>
        <List items={[
          { t: "PEE — Plan d'Épargne Entreprise", d: "Tu y verses ce que tu veux (avec un plafond de 25 % du salaire brut annuel). Les fonds sont bloqués 5 ans, sauf cas de déblocage anticipé (mariage, achat résidence principale, naissance du 3ᵉ enfant, licenciement…)." },
          { t: "PER d'entreprise collectif (ex-PERCO)", d: "Même logique mais bloqué jusqu'à la retraite. Sortie possible en capital ou en rente. Sortie anticipée pour acheter sa résidence principale ou en cas d'accident de la vie." },
          { t: "Intéressement et participation", d: "Primes liées aux résultats de l'entreprise. Versées chaque année. Tu peux les recevoir directement (alors imposables) OU les placer sur ton PEE/PER (alors exonérées d'IR). Le second choix est souvent bien plus avantageux." },
        ]} color={T.brand} />
      </Chapter>

      <Chapter n="2" title="L'abondement : le rendement instantané" color={T.brand}>
        <P>L'abondement, c'est le complément que <B>l'employeur ajoute</B> à tes versements sur le PEE/PER. La règle est négociée par accord d'entreprise mais souvent :</P>
        <Card style={{ padding: 20, background: T.bgSoft }}>
          <div style={{ fontFamily: T.serif, fontSize: 17, color: T.text, marginBottom: 10 }}>« 100 % d'abondement sur les 300 premiers euros versés/an »</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
            Tu verses 300 € → l'employeur ajoute 300 € → tu te retrouves avec 600 € sur ton PEE.
            <B style={{ color: T.brand }}> C'est +100 % de rendement instantané</B>, indépendamment de la performance du fonds derrière.
            Aucun autre placement légal n'offre cela.
          </div>
        </Card>
        <Note color={T.brand}>Si ton employeur abonde et que tu ne verses rien, tu refuses littéralement de l'argent gratuit. La première démarche : demander à ton RH la note d'information PEE/PER.</Note>
      </Chapter>

      <Chapter n="3" title="Les variations d'abondement" color={T.brand}>
        <List items={[
          { t: "Abondement à 100 % plafonné", d: "Le plus courant. L'employeur double tes versements jusqu'à un plafond annuel (souvent 300-800 €)." },
          { t: "Abondement dégressif", d: "100 % sur les 300 premiers euros, puis 50 % sur les 300 suivants, etc. À optimiser pour atteindre le plafond global." },
          { t: "Abondement sur intéressement uniquement", d: "Certaines entreprises n'abondent que sur l'intéressement, pas sur les versements volontaires. À vérifier dans le règlement." },
          { t: "Abondement « unilatéral »", d: "Certaines entreprises versent un abondement même sans versement salarié — automatique. Rare mais avantageux." },
        ]} color={T.brand} />
        <DeepDive title="Plafond légal d'abondement">
          L'abondement employeur est plafonné légalement à <B>8 % du PASS</B> (Plafond Annuel de la Sécurité Sociale, ~46 000 € en 2026), soit environ <B>3 768 €/an</B>. Au-delà, l'employeur ne peut pas abonder même s'il le voulait. Pour le PER d'entreprise, le plafond est de 16 % du PASS soit ~7 535 €/an.
        </DeepDive>
      </Chapter>

      <Chapter n="4" title="Une fiscalité ultra-avantageuse" color={T.brand}>
        <P>L'épargne salariale combine plusieurs avantages fiscaux rarement réunis :</P>
        <List items={[
          { t: "Versements exonérés d'IR", d: "L'intéressement et la participation placés sur le PEE/PER ne sont pas soumis à l'impôt sur le revenu (juste aux prélèvements sociaux à la source via le forfait social pour l'employeur, ou à la CSG/CRDS côté salarié)." },
          { t: "Abondement non imposable", d: "Tant qu'il reste dans les limites légales (3 768 € par an environ en 2025-2026 pour le PEE)." },
          { t: "Gains exonérés d'IR à la sortie", d: "Les plus-values réalisées dans le PEE/PER sont exonérées d'impôt à la sortie (seuls 17,2 % de prélèvements sociaux restent dus)." },
        ]} color={T.brand} />
      </Chapter>

      <Chapter n="5" title="Choisir ses supports" color={T.brand}>
        <P>Dans ton PEE/PER, tu peux choisir entre plusieurs fonds. Les options classiques :</P>
        <List items={[
          { t: "Fonds monétaire / sécuritaire", d: "Rendement faible mais capital garanti. Adapté si la sortie est prévue dans 1-2 ans (achat immo)." },
          { t: "Fonds diversifié équilibré", d: "Mix actions + obligations. Bon compromis pour horizon 3-7 ans." },
          { t: "Fonds actions / dynamique", d: "Plus volatil mais plus rémunérateur sur 8 ans+. Adapté au PER (horizon retraite)." },
          { t: "Actionnariat salarié", d: "Actions de ta propre entreprise, souvent avec une décote de 20-30 % à l'achat. ATTENTION : concentre tes œufs dans le même panier (ton salaire ET tes actions dépendent de l'entreprise). À utiliser modérément." },
        ]} color={T.brand} />
        <DeepDive title="Le piège de l'actionnariat salarié massif">
          L'exemple historique : les salariés Enron qui détenaient massivement des actions de leur propre entreprise sur leur 401(k) américain. Quand l'entreprise a fait faillite en 2001, ils ont perdu simultanément leur emploi ET leur épargne retraite. La règle prudentielle : ne pas dépasser <B>10 % de son patrimoine investi</B> en actions de son propre employeur, même avec décote.
        </DeepDive>
      </Chapter>

      <Chapter n="6" title="Stratégie d'utilisation optimale" color={T.brand}>
        <P>Voici une grille de décision pour maximiser l'avantage :</P>
        <List items={[
          { t: "Étape 1 — Verser au moins le seuil d'abondement maximum", d: "Si l'abondement plafonne à 300 €/an, verse 300 € minimum chaque année. C'est de l'argent gratuit." },
          { t: "Étape 2 — Placer intéressement/participation sur PEE", d: "Plutôt que de les recevoir directement (imposables), les placer sur le PEE/PER les rend exonérés d'IR." },
          { t: "Étape 3 — Choisir un fonds diversifié de qualité", d: "Éviter le fonds monétaire si l'horizon est >5 ans (perte de pouvoir d'achat). Privilégier les fonds indexés monde quand disponibles, frais plus bas." },
          { t: "Étape 4 — Diversifier", d: "Pas plus de 10 % en actionnariat de l'entreprise. Le reste en fonds diversifiés." },
          { t: "Étape 5 — Sortir à bon escient", d: "Le mariage, l'achat de résidence principale et la naissance du 3ᵉ enfant débloquent. Profite-en si l'opportunité se présente." },
        ]} color={T.brand} />
      </Chapter>

      <Chapter n="7" title="Que faire en cas de départ ?" color={T.brand}>
        <P>Quand tu quittes l'entreprise (démission, licenciement, fin de contrat) :</P>
        <List items={[
          "Ton PEE reste accessible : tu peux le garder en l'état (les frais te sont facturés en cas de départ, environ 30-60 €/an) ou demander le déblocage anticipé.",
          "Tu peux transférer ton PER d'entreprise vers un PER individuel — souvent une bonne idée pour reprendre le contrôle des supports et fuir les frais.",
          "Le départ de l'entreprise est lui-même un motif de déblocage anticipé du PEE (en cas de rupture du contrat de travail).",
          "L'abondement déjà acquis t'appartient définitivement, même si tu quittes peu après.",
        ]} color={T.brand} />
        <Note color={T.brand}>Un salarié qui change d'entreprise tous les 3-4 ans peut accumuler plusieurs PEE éparpillés. Tenir une liste de tes anciens dispositifs (avec montants et coordonnées du gestionnaire) évite d'en oublier sur la durée.</Note>
      </Chapter>

      <Quiz color={T.brand} questions={[
        { q: "Ton employeur propose 100 % d'abondement sur tes 200 premiers euros versés sur le PEE. Tu verses 200 €. Combien retrouves-tu sur ton PEE ?", options: ["200 €", "300 €", "400 €", "100 €"], answer: 2, explain: "200 € versés + 200 € d'abondement = 400 €. C'est l'équivalent d'un rendement instantané de +100 %, immédiatement. Aucun placement classique ne peut s'aligner sur ce coup de pouce gratuit." },
        { q: "Quelle est la principale différence entre PEE et PER d'entreprise ?", options: ["Le PEE est réservé aux cadres", "Le PEE se débloque après 5 ans, le PER à la retraite (sauf cas exceptionnels)", "Le PER ne propose pas d'abondement", "Aucune différence"], answer: 1, explain: "Le PEE est plus liquide (5 ans) que le PER (bloqué jusqu'à la retraite, sauf achat de résidence principale ou accidents de la vie). Les deux peuvent recevoir abondement, intéressement et participation." },
        { q: "Tu reçois 1 000 € d'intéressement. Tu peux soit le recevoir directement, soit le placer sur le PEE. Que se passe-t-il ?", options: ["Aucune différence", "En direct : imposé à ta TMI + prélèvements sociaux. Sur PEE : exonéré d'IR, seuls les prélèvements sociaux sont dus", "Sur le PEE, tu perds 30 %", "En direct est toujours mieux"], answer: 1, explain: "Placer l'intéressement sur le PEE permet d'économiser l'impôt sur le revenu sur cette somme. À 30 % de TMI, c'est 300 € d'économie d'impôt sur 1 000 €. Seul inconvénient : 5 ans d'illiquidité." },
      ]} />
    </div>
  ),
});

export default function Epargne(p) {
  return <TopicHub pageId="epargne" topics={TOPICS} {...p} />;
}
