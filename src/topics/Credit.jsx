import React from "react";
import { Crosshair, Home, CreditCard, OctagonAlert, Banknote } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { LoanBars, VizFrame, VizCaption } from "../ui/charts.jsx";
import { LoanSim } from "../ui/MiniSim.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "taeg", Icon: Crosshair, title: "TAEG : le seul taux qui compte",
    summary: "Pourquoi comparer deux crédits avec leur taux nominal est trompeur, et ce que cache vraiment le TAEG.",
    intro: "Le taux affiché en grand n'est jamais le coût réel. Voici ce qu'il faut chercher.",
    words: 1500,
    content: (
      <div>
        <Chapter n="1" title="Taux nominal vs TAEG" color={T.brand2}>
          <P>Le <B>taux nominal</B> est le taux brut, hors frais. Le <B>TAEG (Taux Annuel Effectif Global)</B> intègre tous les coûts du crédit : intérêts, frais de dossier, assurance emprunteur, garanties. C'est le seul taux qui permet de <em>vraiment comparer</em> deux offres.</P>
          <Note color={T.brand2}>Légalement, toute publicité de crédit en France doit afficher le TAEG. Si seul le taux nominal est mis en avant, méfie-toi. La mention « hors frais et assurance » accolée à un taux est aussi un signal d'alerte.</Note>
        </Chapter>

        <Chapter n="2" title="Que contient le TAEG exactement ?" color={T.brand2}>
          <List items={[
            { t: "Intérêts du capital", d: "La rémunération de la banque pour le prêt. Calculée sur le capital restant dû." },
            { t: "Frais de dossier", d: "Forfaitaire (200-1 500 € selon banque et type de prêt). Négociable, surtout pour un prêt immo." },
            { t: "Assurance emprunteur", d: "Obligatoire de fait sur un crédit immo. 0,1-0,5 % du capital restant par an. Sur un prêt sur 20-25 ans, c'est massif." },
            { t: "Frais de garantie", d: "Caution (Crédit Logement, ~1-1,5 % du capital) ou hypothèque (~1-2 %). La caution est généralement préférable car partiellement remboursée à la fin." },
            { t: "Frais d'évaluation du bien", d: "Quelques centaines d'euros, parfois inclus dans le dossier." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="3" title="L'assurance, jamais un détail" color={T.brand2}>
          <P>Sur un crédit immobilier, l'assurance emprunteur peut représenter <B>jusqu'à un tiers du coût total</B>. Depuis la loi Lemoine (2022), on peut résilier à tout moment et choisir un autre assureur (« délégation d'assurance »). Cette comparaison seule peut faire économiser 5 000 à 15 000 € sur un prêt.</P>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple chiffré</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Prêt immo 200 000 € sur 25 ans à 3,5 % de taux nominal.<br /><br />
              <B style={{ color: T.text }}>Avec assurance banque à 0,36 % :</B> coût assurance = 18 000 € sur 25 ans.<br />
              <B style={{ color: T.text }}>Avec assurance déléguée à 0,12 % :</B> coût assurance = 6 000 € sur 25 ans.<br />
              <B style={{ color: T.brand }}>Économie : 12 000 € net.</B> Pour 1h de démarches.
            </div>
          </Card>
        </Chapter>

        <Chapter n="4" title="Mini-simulateur de prêt" color={T.brand2}>
          <P>Joue avec les paramètres pour ressentir comment chaque variable influence la mensualité et le coût total :</P>
          <LoanSim />
        </Chapter>

        <Chapter n="5" title="Lire une offre" color={T.brand2}>
          <List items={[
            { t: "Montant emprunté", d: "Capital initial — toujours connu." },
            { t: "Durée", d: "Plus elle est longue, plus le coût total grimpe — mais la mensualité baisse." },
            { t: "TAEG", d: "Coût total annualisé. Le seul comparable entre offres." },
            { t: "Mensualité totale (avec assurance)", d: "Ce que tu paies vraiment chaque mois." },
            { t: "Coût total du crédit", d: "Somme de tout ce que tu auras versé en intérêts + assurance + frais." },
            { t: "Tableau d'amortissement", d: "Détail mois par mois du remboursement. Permet de voir quelle part est capital, quelle part est intérêt à chaque échéance." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="6" title="Le « taux d'usure » : limite légale" color={T.brand2}>
          <P>La Banque de France fixe trimestriellement un <B>taux d'usure</B>, plafond au-dessus duquel aucun crédit ne peut être proposé légalement. Il varie selon le type et la durée du prêt.</P>
          <P>En 2024-2026, par exemple, pour un crédit immo de 20 ans et plus, le taux d'usure tournait autour de 5,5-6 %. Si une banque propose un TAEG supérieur, l'offre est illégale.</P>
          <DeepDive title="Le piège du taux d'usure trop bas">
            Quand les taux du marché montent vite, le taux d'usure peut être « en retard ». Conséquence : certains profils (jeunes, primo-accédants à crédit limite) se retrouvent <em>refusés</em> non parce qu'ils sont insolvables, mais parce que le TAEG nécessaire dépasserait l'usure. C'est arrivé massivement fin 2022 - début 2023. La Banque de France a depuis ajusté la périodicité (mensuelle puis trimestrielle) pour réduire ce décalage.
          </DeepDive>
        </Chapter>

        <Quiz color={T.brand2} questions={[
          { q: "Pourquoi ne pas se fier au seul taux nominal ?", options: ["Il est faux", "Il n'inclut pas les frais et l'assurance", "Il est interdit en France", "Il dépend de la banque"], answer: 1, explain: "Le taux nominal n'intègre ni les frais de dossier, ni l'assurance, ni les garanties. Deux offres peuvent avoir le même taux nominal mais des TAEG très différents. Seul le TAEG permet une vraie comparaison." },
          { q: "Quelle loi permet de changer son assurance emprunteur à tout moment ?", options: ["Loi Hamon", "Loi Lemoine", "Loi Bourquin", "Loi Macron"], answer: 1, explain: "La loi Lemoine (2022) a généralisé la résiliation infra-annuelle de l'assurance emprunteur. Sur un prêt immo de 200 000 €, la délégation peut faire économiser 5 000 à 15 000 €." },
          { q: "Le taux d'usure est :", options: ["Le taux maximal qu'une banque peut proposer", "Le taux fixé par l'Europe", "Une assurance contre les défauts de paiement", "Le taux moyen du marché"], answer: 0, explain: "Plafond légal trimestriel fixé par la Banque de France, au-dessus duquel un crédit est illégal. Différent selon le type et la durée du prêt." },
        ]} />
      </div>
    ),
  },

  {
    id: "immo", Icon: Home, title: "Le crédit immobilier",
    summary: "Capacité d'emprunt, apport, durée : ce qui détermine vraiment combien tu peux emprunter.",
    intro: "Le plus gros engagement financier d'une vie. Voici les leviers qui comptent.",
    words: 1900,
    content: (
      <div>
        <Chapter n="1" title="La capacité d'emprunt" color={T.brand2}>
          <P>Les banques françaises appliquent un <B>taux d'endettement maximum de 35 %</B> des revenus nets, fixé par le HCSF (Haut Conseil de Stabilité Financière). En clair : la somme de toutes tes mensualités de crédit (immo + conso) ne doit pas dépasser 35 % de tes revenus.</P>
          <Note color={T.brand2}>Pour 2 500 € de revenu net, la mensualité totale maximum est de 875 €. Sur 25 ans à 3,5 %, cela correspond à un emprunt d'environ 175 000 € (assurance incluse).</Note>
          <DeepDive title="Les exceptions au plafond 35 %">
            Le HCSF tolère que 20 % maximum des dossiers d'une banque dépassent ce plafond. Ces exceptions sont réservées en priorité aux primo-accédants et résidence principale. Concrètement : si ton dossier est solide, certaines banques acceptent 38-40 % de taux d'endettement, mais c'est de plus en plus rare et négocié au cas par cas.
          </DeepDive>
        </Chapter>

        <Chapter n="2" title="Le reste à vivre" color={T.brand2}>
          <P>Au-delà du taux d'endettement, les banques calculent ton <B>reste à vivre</B> = revenu net − mensualités de crédit. C'est ce qui te reste pour vivre une fois le crédit payé.</P>
          <List items={[
            { t: "Cible : > 700-800 €/mois et par personne", d: "Pour un couple sans enfant : ~1 500 € de reste à vivre minimum. Avec enfant : +200-300 € par enfant." },
            { t: "Sous-jacent : on ne peut pas vivre avec rien", d: "Même si ton taux d'endettement est à 35 %, si ton reste à vivre est trop bas, la banque refuse. Cas typique : revenus 1 800 €, mensualité 630 € (35 %), reste à vivre 1 170 € — borderline." },
            { t: "Conséquence : à bas revenu, on emprunte moins", d: "Pour un SMIC, le plafond effectif est souvent en dessous des 35 % théoriques." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="3" title="L'impact de la durée" color={T.brand2}>
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
          <Note color={T.brand2}>La bonne durée n'est pas la plus courte (mensualité asphyxiante) ni la plus longue (coût total massif). C'est celle qui permet une mensualité confortable + un coût total acceptable.</Note>
        </Chapter>

        <Chapter n="4" title="L'apport personnel" color={T.brand2}>
          <P>Les banques demandent généralement un apport d'au moins <B>10 %</B> du prix (frais de notaire). Un apport plus important (15-20 %) ouvre l'accès à de meilleurs taux et rassure la banque sur ta capacité d'épargne.</P>
          <List items={[
            { t: "10 % d'apport", d: "Couvre généralement les frais de notaire et de garantie. C'est le minimum pour la plupart des banques." },
            { t: "15-20 %", d: "Profil considéré comme solide. Accès à de meilleurs taux (souvent 0,2-0,4 % de moins)." },
            { t: "30 %+", d: "Profil très solide. Marge de négociation forte sur tous les frais et le taux. Mais l'optimum financier n'est pas nécessairement l'apport maximum." },
          ]} color={T.brand2} />
          <DeepDive title="L'apport optimal : ni trop ni pas assez">
            Si tes placements (PEA, AV) rapportent 6-7 %/an net en moyenne, et que ton crédit est à 3,5 %, il peut être rationnel de <em>ne pas vider</em> ces placements pour mettre plus d'apport — l'argent travaille mieux investi. À l'inverse, sans épargne de sécurité au-delà de l'apport, c'est imprudent. La règle de prudence : garder au moins 6 mois de dépenses (fonds d'urgence) + l'apport.
          </DeepDive>
        </Chapter>

        <Chapter n="5" title="Frais annexes à anticiper" color={T.brand2}>
          <P>Le prix affiché du bien n'est jamais ce que tu paies. Plusieurs frais s'ajoutent :</P>
          <List items={[
            { t: "Frais de notaire", d: "~7-8 % dans l'ancien, ~2-3 % dans le neuf. Inclut les droits d'enregistrement (l'essentiel), les émoluments du notaire et les débours." },
            { t: "Frais de dossier banque", d: "500-1 500 € selon la banque. Négociable, parfois offert." },
            { t: "Frais de garantie", d: "~1-2 % du capital (caution ou hypothèque)." },
            { t: "Travaux à prévoir", d: "Diagnostic obligatoire mais souvent insuffisant. Prévoir 10-20 % du prix pour les travaux dans l'ancien, même quand le vendeur dit « rien à faire »." },
            { t: "Déménagement et installation", d: "1 500-3 000 € typiques (déménageur, électroménager, ameublement de base)." },
            { t: "Taxe foncière", d: "À partir de l'année suivante. Variable selon commune mais souvent 1-3 mois de loyer équivalent par an." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="6" title="Quand renégocier ?" color={T.brand2}>
          <List items={[
            "Quand les taux du marché sont inférieurs d'au moins 0,7-1 point à ton taux actuel.",
            "Quand il te reste plus de la moitié du capital à rembourser (l'essentiel des intérêts est en début de prêt).",
            "Quand l'opération couvre largement les frais (indemnités de remboursement anticipé + frais du nouveau prêt).",
          ]} color={T.brand2} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple : renégocier à mi-parcours</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Crédit de 200 000 € sur 25 ans à 4,2 %, il te reste 12 ans et 95 000 € de capital à rembourser.
              Le marché est à 3,3 %. Renégocier économise ~7 000 € d'intérêts.
              Frais de remboursement anticipé (souvent plafonnés à 3 % du capital restant) + nouveau dossier : ~3 500 €.
              <B style={{ color: T.brand }}> Gain net : 3 500 €.</B> Opération qui vaut le coup.
            </div>
          </Card>
        </Chapter>

        <Chapter n="7" title="Le PTZ et autres aides" color={T.brand2}>
          <List items={[
            { t: "PTZ (Prêt à Taux Zéro)", d: "Pour primo-accédants, sous conditions de ressources et zone géographique. Complète ton crédit principal. Permet de financer une partie du logement à 0 % d'intérêt." },
            { t: "Prêt Action Logement (ex-1 % logement)", d: "Si tu travailles dans une entreprise de 10+ salariés du privé. Taux préférentiel (0,5-1 %), montant 7-25 k€." },
            { t: "Prêt accession sociale (PAS)", d: "Sous conditions de ressources. Garanti par l'État, frais de garantie réduits." },
            { t: "Aides régionales / locales", d: "Variables selon les territoires. À demander à la mairie ou au département." },
          ]} color={T.brand2} />
        </Chapter>

        <Quiz color={T.brand2} questions={[
          { q: "Pour 3 000 € de revenu net, quelle mensualité maximum les banques acceptent en général ?", options: ["500 €", "1 050 € (35 %)", "1 500 €", "Tout dépend de ton score de crédit"], answer: 1, explain: "Le HCSF français plafonne à 35 %. 3 000 € × 35 % = 1 050 € pour TOUTES tes mensualités de crédit cumulées (immo + conso + auto…). Quelques exceptions existent mais sont marginales." },
          { q: "Tu compares deux prêts immobiliers : 20 ans vs 30 ans, même montant. Vrai ou faux : « le 30 ans est meilleur car la mensualité est plus basse » ?", options: ["Vrai dans tous les cas", "Faux : tu paies bien plus d'intérêts au total", "Vrai si tu places la différence", "Aucune différence sur le long terme"], answer: 1, explain: "Sur 30 ans à 3,5 %, on paie environ 45 000 € d'intérêts en plus qu'en 20 ans. La mensualité est plus douce, mais le coût total est massif." },
          { q: "Que représentent les frais de notaire dans l'ancien ?", options: ["~2-3 % du prix", "~7-8 % du prix", "~15 % du prix", "Aucun frais"], answer: 1, explain: "Frais de notaire ~7-8 % dans l'ancien, dont la majeure partie sont en réalité des droits d'enregistrement reversés à l'État. Le neuf est moins taxé : ~2-3 %." },
        ]} />
      </div>
    ),
  },

  {
    id: "conso", Icon: CreditCard, title: "Crédit conso : pièges à éviter",
    summary: "Pourquoi les taux à 18 % et le « paye en 4 fois » sont des outils financiers dangereux.",
    intro: "Le crédit à la consommation est utile dans certains cas, désastreux dans beaucoup d'autres.",
    words: 1600,
    content: (
      <div>
        <Chapter n="1" title="Les vrais taux du crédit conso" color={T.coral}>
          <P>Les crédits à la consommation classiques tournent autour de <B>4-8 % TAEG</B> pour un prêt personnel, mais les crédits renouvelables (revolving) peuvent atteindre <B>15-20 %</B>. À ces taux, un achat « ponctuel » devient une dette qui dure des années.</P>
          <Note color={T.coral}>Un crédit revolving de 1 500 € remboursé au minimum à 18 % de TAEG peut prendre plus de 10 ans à solder, pour un coût total dépassant le double du capital initial.</Note>
        </Chapter>

        <Chapter n="2" title="Les types de crédit conso" color={T.coral}>
          <List items={[
            { t: "Prêt personnel", d: "Somme fixe, mensualités fixes, durée fixe. Taux 4-8 % TAEG selon profil. Le plus transparent." },
            { t: "Crédit affecté", d: "Lié à un achat spécifique (voiture, équipement). Le bien est en garantie. Souvent meilleur taux." },
            { t: "Crédit revolving (renouvelable)", d: "Réserve d'argent mobilisable à volonté. Taux 12-20 %. Le plus piégeux." },
            { t: "Découvert autorisé", d: "Forme courte de crédit. Taux 7-16 % + commissions d'intervention." },
            { t: "Crédit à 0 % (auto, écologie)", d: "Promotionnel, soumis à conditions. Le taux 0 % est parfois compensé par un prix d'achat plus élevé." },
            { t: "BNPL (paye en 3/4 fois)", d: "Juridiquement un crédit. « Sans frais » apparent mais comportement à risque (voir plus bas)." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="3" title="Le piège du crédit revolving" color={T.coral}>
          <P>Le crédit renouvelable est conçu pour durer. Combinaison toxique :</P>
          <List items={[
            "Taux très élevé (15-20 % TAEG).",
            "Remboursement minimum très bas (souvent 2-3 % du solde par mois).",
            "Réutilisable à tout moment, ce qui empêche le solde de diminuer.",
            "Vente couplée à des cartes de magasin (« remise immédiate » qui camoufle le crédit).",
          ]} color={T.coral} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Le scénario typique du piège</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Tu utilises 1 500 € de ton revolving à 18 % TAEG pour un appareil électroménager.
              Tu paies 80 €/mois (le minimum). Au bout d'1 an, tu en es à 800 € de solde restant, sans nouvel achat.
              Tu utilises encore 500 € pour autre chose. Solde : 1 300 €. Etc.
              <B style={{ color: T.coral }}> Au bout de 5 ans, tu as payé 4 800 € en remboursements et tu dois encore 600 €.</B>
              Total intérêts payés : plus du double du capital initial.
            </div>
          </Card>
        </Chapter>

        <Chapter n="4" title="Le piège du BNPL" color={T.coral}>
          <P>« Paye en 4 fois » et autres formules de paiement fractionné sont juridiquement des crédits, mais présentés comme indolores. Quatre problèmes :</P>
          <List items={[
            { t: "Tu perds la perception du coût total", d: "200 € fractionnés en 4 mensualités de 50 € paraissent moins qu'une dépense unique de 200 €." },
            { t: "Multiplier les BNPL devient ingérable", d: "5 paiements BNPL en cours à 50 €/mois chacun = 250 €/mois de mensualités cumulées. Plus difficile à suivre qu'une seule dette." },
            { t: "Frais cachés en cas d'incident", d: "Si une échéance passe en retard, frais souvent élevés (15-30 € par incident). Une chaîne de mensualités fractionnées multiplie le risque." },
            { t: "Encouragement aux achats impulsifs", d: "Le BNPL augmente le panier moyen e-commerce de 30-50 % selon les études. Conçu pour vendre, pas pour t'aider." },
          ]} color={T.coral} />
          <DeepDive title="La régulation européenne 2026">
            L'Union Européenne durcit la régulation du BNPL via la directive crédit consommation (CCD2, applicable progressivement à partir de 2026). Les fournisseurs devront évaluer la solvabilité du client, comme pour un crédit classique. Le BNPL très court (moins de 90 jours, moins de 200 €) reste cependant exclu — c'est là que se concentrera le risque.
          </DeepDive>
        </Chapter>

        <Chapter n="5" title="Le découvert : un crédit qui ne dit pas son nom" color={T.coral}>
          <P>Le découvert autorisé est juridiquement un <B>crédit court terme</B>. Son TAEG est généralement compris entre <B>7 et 16 %</B>, plus des « commissions d'intervention » (8 € par opération hors plafond) plafonnées à 80 €/mois pour les clients ordinaires et 20 €/mois pour les clientèles fragiles.</P>
          <Note color={T.coral}>Un découvert de 500 € maintenu un mois entier à 14 % de TAEG coûte ≈ 6 € en intérêts. Mais 3 paiements en dépassement à 8 € chacun = 24 € supplémentaires. Le coût réel grimpe vite.</Note>
        </Chapter>

        <Chapter n="6" title="Quand le crédit conso a du sens" color={T.brand}>
          <P>Pas toujours négatif, le crédit conso peut être utile pour :</P>
          <List items={[
            { t: "Un équipement essentiel à un usage productif", d: "Véhicule indispensable pour aller travailler, formation rentable, outil professionnel. Le crédit finance un actif générant du revenu." },
            { t: "Éviter de casser une épargne fiscalement avantageuse", d: "Plutôt que de sortir d'un PEA après 5 ans (pour ne pas tout clôturer) ou d'une AV après 8 ans, un crédit court à 3-4 % peut être préférable." },
            { t: "Profiter d'un prêt à 0 % réellement intéressant", d: "Auto, éco-PTZ pour rénovation énergétique : à condition que le prix d'achat ne soit pas gonflé en contrepartie." },
            { t: "Étaler une dépense importante imprévue", d: "Réparation majeure véhicule, frais médicaux non couverts. Mieux qu'un découvert ou un revolving." },
          ]} color={T.brand} />
          <DeepDive title="La règle de décision">
            Avant tout crédit conso, pose-toi ces questions : Est-ce que l'achat peut attendre 3-6 mois ? Si oui, épargne. Est-ce que je peux comparer plusieurs offres TAEG ? Sinon, prends le temps. Est-ce que l'achat génère un revenu ou élimine une dépense récurrente ? Si oui, c'est plus défendable. Un « non » à 18 % vaut mieux qu'un « oui » mal négocié.
          </DeepDive>
        </Chapter>

        <Chapter n="7" title="Si tu es déjà endetté en revolving" color={T.brand}>
          <P>Si tu te retrouves avec plusieurs revolving en cours, la priorité est de t'en sortir :</P>
          <List items={[
            "Liste tous les crédits avec leur solde, leur TAEG et leur mensualité minimum.",
            "Concentre les remboursements sur celui au TAEG le plus élevé (méthode « avalanche »). Paye le minimum sur les autres.",
            "Ne PRENDS PAS un nouveau crédit pour « regrouper » sans avoir comparé sérieusement — un rachat de crédits coûte cher et n'allège pas toujours.",
            "Considère un prêt personnel à taux normal pour solder le revolving le plus cher — c'est mieux que de continuer à payer 18 %.",
            "Si la situation est ingérable : Banque de France, dossier de surendettement (voir le cours dédié).",
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "Pourquoi le crédit renouvelable (revolving) est particulièrement dangereux ?", options: ["Il a un taux très bas", "Son TAEG est très élevé (souvent 15-20 %) et il se prolonge facilement", "Il est interdit en France", "Il est exonéré d'intérêts"], answer: 1, explain: "Les taux peuvent atteindre 20 % TAEG. Combiné à un remboursement minimum faible, la dette peut s'éterniser des années pour des montants modestes. C'est le principal pourvoyeur de surendettement." },
          { q: "Le « paye en 4 fois sans frais » est :", options: ["Un cadeau de la banque", "Juridiquement un crédit, présenté de façon à minimiser sa perception", "Une nouvelle forme d'épargne", "Réservé aux mineurs"], answer: 1, explain: "Le BNPL est un crédit. Le fractionnement « indolore » masque le coût psychologique réel et peut empiler des dettes invisibles. Très utilisé par le commerce en ligne pour faire grimper le panier moyen." },
          { q: "Tu as 3 revolving à 18 % et un peu d'épargne. Quelle stratégie ?", options: ["Garder l'épargne intacte et payer les minima", "Utiliser l'épargne pour rembourser le revolving au plus haut TAEG en priorité", "Prendre un 4ᵉ revolving", "Ignorer la situation"], answer: 1, explain: "Rembourser à 18 % équivaut à un placement à 18 % net. Aucune épargne classique ne rapportera autant. La méthode 'avalanche' (rembourser le plus cher d'abord) est mathématiquement optimale." },
        ]} />
      </div>
    ),
  },

  {
    id: "surendet", Icon: OctagonAlert, title: "Surendettement : comprendre, prévenir, réagir",
    summary: "Comment ça arrive, les signaux d'alerte, et la procédure officielle en France.",
    intro: "Un sujet tabou mais essentiel : 100 000 dossiers sont déposés chaque année en France.",
    words: 1700,
    content: (
      <div>
        <Chapter n="1" title="Comment on bascule" color={T.coral}>
          <P>Le surendettement résulte rarement d'un seul mauvais choix. C'est en général la combinaison d'un <B>événement déclencheur</B> (perte d'emploi, séparation, maladie) et d'une <B>fragilité préexistante</B> (absence de fonds d'urgence, multiples crédits à la consommation).</P>
          <List items={[
            { t: "Perte de revenus brutale", d: "Sans fonds d'urgence, chaque mensualité devient un combat." },
            { t: "Accumulation de petits crédits", d: "Plusieurs revolving + BNPL + crédit auto, chacun supportable seul, ingérables ensemble." },
            { t: "Faux dépannage par nouveau crédit", d: "Le piège classique : emprunter pour rembourser, ce qui retarde et aggrave le problème." },
            { t: "Séparation", d: "Une charge familiale devenue impossible pour un seul revenu. Particulièrement violent quand l'autre partenaire portait des dépenses incompressibles." },
            { t: "Maladie ou accident", d: "Frais imprévus + baisse d'activité = effet ciseaux. Sans mutuelle solide et prévoyance, peut faire basculer en quelques mois." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="2" title="Les signaux d'alerte" color={T.coral}>
          <List items={[
            "Tu as recours à un découvert chaque mois.",
            "Plus de 35 % de tes revenus partent en mensualités (le seuil HCSF).",
            "Tu utilises un crédit (même 0 %) pour payer une dépense courante.",
            "Tu reportes des paiements (loyer, électricité…) pour honorer une mensualité.",
            "Tu reçois des relances ou des mises en demeure.",
            "Tu refuses d'ouvrir certaines factures « pour ne pas voir ».",
            "Tu utilises plusieurs revolving en alternance.",
            "Le stress financier impacte ton sommeil, ta santé ou tes relations.",
          ]} color={T.coral} />
          <Note color={T.coral}>L'un de ces signaux pris isolément n'est pas dramatique. Plusieurs cumulés sur 3 mois consécutifs = signal d'alarme à traiter sérieusement.</Note>
        </Chapter>

        <Chapter n="3" title="La hiérarchie des dettes" color={T.brand}>
          <P>Si tu es en difficulté financière, toutes les dettes ne se valent pas. Hiérarchise dans cet ordre :</P>
          <List items={[
            { t: "1. Dettes alimentaires", d: "Pension alimentaire impayée. Conséquences pénales possibles (abandon de famille)." },
            { t: "2. Loyer + charges essentielles", d: "Risque d'expulsion ou de coupure (eau, électricité)." },
            { t: "3. Impôts et URSSAF", d: "L'administration fiscale a des pouvoirs étendus (saisie sur salaire, sur comptes)." },
            { t: "4. Crédit immobilier (résidence principale)", d: "Risque ultime : saisie immobilière." },
            { t: "5. Mensualités de crédits conso", d: "Renégociables, voire annulables dans une procédure de surendettement." },
            { t: "6. Découvert et autres", d: "Coûteux mais sans conséquence immédiate grave si on traite les autres dettes d'abord." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="4" title="Avant le dossier de surendettement : que faire ?" color={T.brand}>
          <P>Si tu vois la situation se dégrader, plusieurs actions <em>avant</em> d'arriver au dossier officiel :</P>
          <List items={[
            { t: "Parler à sa banque", d: "Demander un rendez-vous avec ton conseiller. Étalement, suspension temporaire des mensualités, voire restructuration. Les banques préfèrent négocier avant l'incident." },
            { t: "Contacter les associations", d: "CRESUS, Familles Rurales, UDAF, Secours Catholique. Accompagnement gratuit pour faire le point, négocier, préparer un dossier." },
            { t: "Activer les aides existantes", d: "Fonds de solidarité logement, aides CAF, RSA si applicable. Souvent sous-utilisées." },
            { t: "Suspendre les crédits conso", d: "Loi prévoit la possibilité de demander un délai (max 2 ans) au juge en cas de difficulté ponctuelle." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="5" title="La procédure de surendettement" color={T.brand}>
          <P>En France, le dossier de surendettement se dépose <B>à la Banque de France</B>, gratuitement. La commission peut :</P>
          <List items={[
            { t: "Étaler les dettes", d: "Sur plusieurs années (jusqu'à 7), avec gel ou réduction des intérêts." },
            { t: "Effacer partiellement", d: "Si la situation est jugée irrémédiablement compromise." },
            { t: "Procédure de rétablissement personnel", d: "Effacement total des dettes en cas d'impossibilité absolue de remboursement (rare, mais existe). Les biens essentiels (vêtements, mobilier de base) sont préservés." },
          ]} color={T.brand} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Les étapes concrètes</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              1. Tu déposes ton dossier à la Banque de France (formulaire + pièces justificatives).<br />
              2. La commission instruit (1-3 mois). Pendant ce temps, les poursuites des créanciers sont suspendues.<br />
              3. Si recevable, plan d'apurement proposé (étalement, gel, effacement partiel).<br />
              4. Les créanciers et le débiteur peuvent contester sous 15 jours.<br />
              5. Le plan validé est exécutoire. Inscription au Fichier National des Incidents de remboursement (FICP) pendant 5-7 ans.<br />
            </div>
          </Card>
          <Note color={T.brand}>Déposer un dossier est un droit. Ce n'est pas un échec personnel : c'est une procédure légale conçue pour donner une seconde chance et protéger d'un harcèlement de créanciers.</Note>
        </Chapter>

        <Chapter n="6" title="Les conséquences à connaître" color={T.coral}>
          <List items={[
            { t: "Inscription au FICP", d: "Fichier National des Incidents de remboursement des Crédits aux Particuliers. Durée 5-7 ans. Difficile d'obtenir un nouveau crédit pendant cette période." },
            { t: "Suivi des comptes", d: "Tu peux conserver tes comptes mais sous suivi de la commission. Les nouveaux crédits sont quasi impossibles." },
            { t: "Impact psychologique", d: "Pas un crime, pas honteux. Mais sentiment d'échec fréquent, à accompagner si besoin (psychologue, soutien social)." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="7" title="Reconstruire après" color={T.brand}>
          <P>Une fois le plan en place, il y a une vie après :</P>
          <List items={[
            "Reprends progressivement le contrôle. Établis un budget strict.",
            "Constitue un fonds d'urgence, même modeste (50-100 €/mois). C'est ce qui évitera la rechute.",
            "Évite tout nouveau crédit conso ou revolving, même quand l'inscription FICP s'efface.",
            "Documente ton parcours. Avoir traversé une procédure de surendettement et s'en être sorti est un acquis — comprendre ce qui a échoué empêche de répéter les mêmes erreurs.",
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.brand} questions={[
          { q: "Où dépose-t-on un dossier de surendettement en France ?", options: ["Au tribunal", "À la Banque de France, gratuitement", "Chez un huissier", "Auprès de l'employeur"], answer: 1, explain: "Le dépôt se fait gratuitement à la Banque de France. C'est une procédure légale, pas honteuse : elle est conçue pour permettre la sortie d'une spirale d'endettement et stopper les poursuites des créanciers." },
          { q: "Quel est le piège classique du surendettement débutant ?", options: ["Ne pas avoir de carte bleue", "Utiliser un nouveau crédit pour rembourser les anciens", "Trop épargner", "Acheter en cash"], answer: 1, explain: "Emprunter pour rembourser empile les frais et masque la situation. À ce stade, il faut parler à sa banque, contacter une association ou la Banque de France — pas signer un nouveau crédit." },
          { q: "Quelle dette devrait être priorisée si tu es en difficulté ?", options: ["Crédit revolving", "Pension alimentaire / loyer / impôts", "Crédit auto", "BNPL en cours"], answer: 1, explain: "Dettes alimentaires (conséquences pénales), loyer (expulsion), impôts (saisie) ont les conséquences les plus graves et immédiates. Les crédits conso/BNPL sont renégociables ou annulables en surendettement." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "decouvert", Icon: Banknote, title: "Découvert & carte : usage maîtrisé",
  summary: "Le découvert autorisé coûte plus cher qu'on ne croit. Et les cartes ont chacune leur logique de coût caché.",
  intro: "L'usage quotidien des moyens de paiement est rarement enseigné. Voici ce qui se passe vraiment quand tu paies, et combien ça coûte.",
  words: 1700,
  content: (
    <div>
      <Chapter n="1" title="Le découvert : un crédit qui ne dit pas son nom" color={T.coral}>
        <P>Le découvert autorisé est juridiquement un <B>crédit court terme</B>. Son TAEG est généralement compris entre <B>7 et 16 %</B>, plus des « commissions d'intervention » (8 € par opération hors plafond) plafonnées à 80 €/mois pour les clients ordinaires et 20 €/mois pour les clientèles fragiles.</P>
        <Note color={T.coral}>Un découvert de 500 € maintenu un mois entier à 14 % de TAEG coûte ≈ 6 € en intérêts. Mais 3 paiements en dépassement à 8 € chacun = 24 € supplémentaires. Le coût réel grimpe vite.</Note>
      </Chapter>

      <Chapter n="2" title="Le découvert non autorisé" color={T.coral}>
        <P>Différent du découvert autorisé : si tu passes en négatif sans autorisation préalable, la banque peut :</P>
        <List items={[
          "Refuser le prélèvement (frais de rejet ~20 €/incident).",
          "Accepter le découvert mais à un taux exceptionnel (souvent le taux d'usure légal, 12-20 %).",
          "Inscrire la mention « interdit bancaire » à la Banque de France si la situation persiste.",
        ]} color={T.coral} />
        <Note color={T.coral}>L'écart entre découvert autorisé et non autorisé est massif : autoriser un découvert préventivement avec ta banque coûte rien et te protège des frais imprévus.</Note>
      </Chapter>

      <Chapter n="3" title="Carte de débit vs carte de crédit (différé)" color={T.brand2}>
        <List items={[
          { t: "Carte de débit immédiat", d: "L'argent quitte ton compte instantanément. Tu vois ton solde réel à tout moment. Plus simple à gérer pour un débutant." },
          { t: "Carte de débit différé", d: "Tous les achats du mois sont prélevés en bloc en fin de mois (ou le 1er du mois suivant). Avantage : trésorerie courte sans intérêt si tu paies à temps. Piège : tu perds la perception du solde en temps réel." },
          { t: "Carte de crédit (revolving) à éviter", d: "Très différente du « différé ». Le solde non remboursé en fin de mois génère des intérêts à 15-20 %. C'est techniquement un crédit renouvelable déguisé. Quasi-jamais utile en France." },
        ]} color={T.brand2} />
        <DeepDive title="Le piège franco-français de la « carte gold/platinum »">
          Les cartes premium coûtent 100 à 200 €/an. Elles donnent accès à des garanties (assurance voyage, assistance) mais celles-ci font souvent doublon avec d'autres contrats que tu as déjà. Avant de payer 150 €/an pour une assurance voyage, vérifie ta carte standard, ton assurance habitation et ta mutuelle — la couverture existe peut-être déjà gratuitement.
        </DeepDive>
      </Chapter>

      <Chapter n="4" title="Frais à connaître absolument" color={T.coral}>
        <List items={[
          { t: "Cotisation annuelle de carte", d: "0 € chez les banques en ligne (Boursobank, Fortuneo, BforBank, Hello bank), 30-50 € chez les banques traditionnelles pour une carte standard, 100-300 € pour une carte premium." },
          { t: "Frais de tenue de compte", d: "Souvent autour de 2-3 €/mois en banque traditionnelle, 0 € en ligne (sous condition d'usage généralement)." },
          { t: "Frais de retrait hors zone euro", d: "Souvent 2-4 % du montant + frais fixes. Vérifier avant un voyage : certaines néobanques offrent retrait gratuit dans le monde entier (Revolut, N26, Wise…)." },
          { t: "Virement instantané", d: "Devient gratuit en Europe à partir de 2025 pour la plupart des banques (règlement européen). Vérifier que ta banque applique bien la règle." },
          { t: "Rejet de prélèvement", d: "Coût autour de 20 € — souvent évitable en demandant un report à ton créancier." },
          { t: "Opposition sur chèque ou carte", d: "Souvent 12-25 €. Inclus chez certaines banques en ligne." },
        ]} color={T.coral} />
      </Chapter>

      <Chapter n="5" title="Le relevé annuel d'informations tarifaires" color={T.brand2}>
        <P>Chaque année en janvier, ta banque t'envoie un récapitulatif officiel de tous les frais que tu as payés sur l'année écoulée. C'est un document à lire attentivement :</P>
        <List items={[
          "Repère les lignes de frais que tu n'as pas reconnues ou que tu juges injustifiées.",
          "Compare le total annuel avec d'autres banques : un client moyen paie 100-200 €/an de frais bancaires divers en banque traditionnelle, 0-30 € en banque en ligne.",
          "Si l'écart est significatif, c'est le moment de comparer / changer de banque.",
        ]} color={T.brand2} />
      </Chapter>

      <Chapter n="6" title="Bonnes pratiques quotidiennes" color={T.brand}>
        <List items={[
          "Activer les notifications de paiement : tu sais en temps réel ce qui sort de ton compte.",
          "Garder un coussin de ~200 € sur le compte courant pour absorber un prélèvement décalé sans plonger en négatif.",
          "Si ton compte est régulièrement à découvert : c'est un signe que la structure budgétaire est à revoir, pas que le découvert doit être augmenté.",
          "Auditer une fois par an les frais bancaires sur le récap annuel (relevé d'informations tarifaires, envoyé en janvier).",
          "Avoir deux banques : une principale pour les opérations courantes, une secondaire (souvent en ligne) pour l'épargne ou les voyages. Diversifie le risque et compare les services en pratique.",
        ]} color={T.brand} />
      </Chapter>

      <Chapter n="7" title="Néobanques vs banques traditionnelles" color={T.brand}>
        <Card style={{ padding: 0, overflow: "hidden", marginBottom: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: `1px solid ${T.line}` }}>
            <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5 }}>Critère</div>
            <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.brand2, textTransform: "uppercase" }}>Néobanque</div>
            <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.brand, textTransform: "uppercase" }}>Banque traditionnelle</div>
          </div>
          {[
            ["Frais", "Souvent gratuit", "100-200 €/an"],
            ["Service client", "Tchat / mail", "Agence physique"],
            ["Conseil personnalisé", "Limité", "Possible"],
            ["Crédit immobilier", "Très limité", "Standard"],
            ["Découvert facile", "Difficile", "Plus simple"],
            ["Outils modernes", "Excellents", "Variables"],
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < 5 ? `1px solid ${T.line}` : "none" }}>
              <div style={{ padding: "10px 14px", fontSize: 13, color: T.text, fontWeight: 600 }}>{row[0]}</div>
              <div style={{ padding: "10px 14px", fontSize: 13, color: T.textDim }}>{row[1]}</div>
              <div style={{ padding: "10px 14px", fontSize: 13, color: T.textDim }}>{row[2]}</div>
            </div>
          ))}
        </Card>
        <Note color={T.brand}>Choix courant pour un jeune actif : néobanque comme compte principal (frais bas, outils modernes) + AV/PEA chez un courtier en ligne. Banque traditionnelle utile surtout pour le crédit immobilier ou les services premium.</Note>
      </Chapter>

      <Quiz color={T.brand2} questions={[
        { q: "Le découvert autorisé est :", options: ["Un service gratuit de la banque", "Un crédit court terme avec un TAEG de 7-16 %", "Une réserve d'argent illimitée", "Une avance sur salaire"], answer: 1, explain: "Le découvert est un crédit. Le TAEG est typiquement entre 7 et 16 %, plus des commissions d'intervention. Ne pas le considérer comme « gratuit » — il a un vrai coût." },
        { q: "Quelle différence essentielle entre carte de débit différé et carte de crédit ?", options: ["Aucune", "Le différé prélève tout en bloc en fin de mois sans intérêt ; le crédit (revolving) facture des intérêts élevés sur le solde", "Le différé est plus cher", "Le crédit a moins de plafond"], answer: 1, explain: "Le différé est un simple décalage de prélèvement sans frais (si tu provisionnes à temps). La carte de crédit (revolving) est un vrai crédit à taux élevé sur le solde non remboursé." },
        { q: "Quel document récapitule tes frais bancaires annuels ?", options: ["Le RIB", "Le relevé d'informations tarifaires (envoyé en janvier)", "L'avis d'imposition", "Le contrat initial"], answer: 1, explain: "Document légal obligatoire, envoyé par toutes les banques chaque janvier. Permet de visualiser le coût total des frais sur l'année. À lire attentivement pour décider si rester ou changer." },
      ]} />
    </div>
  ),
});

export default function Credit(p) {
  return <TopicHub pageId="credit" topics={TOPICS} {...p} />;
}
