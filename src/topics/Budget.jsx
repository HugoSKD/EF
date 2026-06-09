import React from "react";
import { Wallet, PieChart, Search, LifeBuoy, FileSearch } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { DonutChart, VBars, VizFrame, VizCaption, CashflowDiagram } from "../ui/charts.jsx";
import { BudgetSplitSim } from "../ui/MiniSim.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "flux", Icon: Wallet, title: "Comprendre ses flux d'argent",
    summary: "Revenus, dépenses fixes et variables : la cartographie de base avant tout le reste.",
    intro: "Avant toute méthode, il faut voir clair : d'où vient l'argent, où il part, et sur quoi tu peux vraiment agir.",
    words: 1700,
    content: (
      <div>
        <Chapter n="1" title="Entrées et sorties : la base" color={T.brand2}>
          <P>Tout budget repose sur une idée simple : comparer ce qui <B>entre</B> chaque mois et ce qui <B>sort</B>. L'objectif n'est pas de tout calculer au centime près, mais d'avoir une vision d'ensemble pour cesser de subir ses finances.</P>
          <P>Trois questions suffisent pour démarrer :</P>
          <List items={[
            { t: "Combien je touche en net chaque mois ?", d: "Pas le brut sur le contrat, le net réellement viré sur ton compte." },
            { t: "À combien s'élèvent mes charges incompressibles ?", d: "Loyer, transport, factures, assurances, abonnements, remboursements de crédit." },
            { t: "Que me reste-t-il une fois tout ça payé ?", d: "C'est ton « reste à vivre » mensuel. C'est cette zone qui détermine ta capacité à épargner et à profiter." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="2" title="Net imposable vs net en poche" color={T.brand2}>
          <P>Sur ta fiche de paie en France, plusieurs lignes de « net » apparaissent — et la confusion est fréquente :</P>
          <List items={[
            { t: "Net à payer avant impôt sur le revenu", d: "Ce que ton employeur te doit après cotisations sociales." },
            { t: "Net imposable", d: "Légèrement supérieur au net à payer (la CSG/CRDS non déductible y est réintégrée). C'est cette ligne qui sert au calcul de ton impôt." },
            { t: "Net à payer (après PAS)", d: "Le montant réellement viré sur ton compte, après prélèvement à la source. C'est <em>ce chiffre-là</em> qu'il faut utiliser dans ton budget." },
          ]} color={T.brand2} />
          <Note color={T.brand2}>Pour un budget réaliste, base-toi toujours sur le <B>net après PAS</B> — ce qui arrive vraiment sur ton compte. Un budget calculé sur le net imposable sera systématiquement trop optimiste.</Note>
        </Chapter>

        <Chapter n="3" title="Fixe vs variable : la distinction qui change tout" color={T.brand2}>
          <P>On sépare les dépenses en deux familles aux comportements opposés :</P>
          <List items={[
            { t: "Dépenses fixes", d: "Reviennent chaque mois pour un montant prévisible : loyer, abonnements, assurances, mensualités de crédit, forfait mobile. Difficiles à changer à court terme — mais quand on les baisse, l'économie est durable." },
            { t: "Dépenses variables", d: "Fluctuent : courses, sorties, loisirs, vêtements, restaurants. Ajustables instantanément, mais l'effort doit être renouvelé tous les mois." },
          ]} color={T.brand2} />
          <P>Connaître la proportion fixe/variable de ton budget te dit immédiatement ta marge de manœuvre réelle. Un budget où les fixes représentent 90 % du revenu est tendu : la moindre dépense imprévue déclenche un découvert. Un budget où les fixes sont à 60 % laisse une vraie flexibilité.</P>
        </Chapter>

        <Chapter n="4" title="Les revenus qu'on oublie souvent" color={T.brand2}>
          <P>Au-delà du salaire, plusieurs flux peuvent rentrer chaque mois — et beaucoup ne sont pas comptés. Pourtant ils sont autant d'argent dont tu disposes :</P>
          <List items={[
            { t: "APL / aides au logement", d: "Versées par la CAF directement à toi ou à ton bailleur. Comptent dans tes ressources, même si tu ne les vois pas transiter." },
            { t: "Prime d'activité", d: "Aide mensuelle pour bas salaires (< 1,5 SMIC environ). Souvent oubliée — à demander sur caf.fr." },
            { t: "Bourses étudiantes (CROUS)", d: "Versées 10 mois sur 12 généralement. À budgéter sur l'année complète." },
            { t: "Pensions familiales", d: "Aide parentale, pension alimentaire — à intégrer dans le calcul." },
            { t: "Revenus annexes", d: "Stages, missions ponctuelles, vente d'occasion, jobs étudiants. Souvent variables mais réguliers." },
          ]} color={T.brand2} />
          <Note color={T.brand2}>Calcule ton revenu mensuel moyen sur les 12 derniers mois, pas juste sur le mois dernier. Tu lisses les variations et tu évites de bâtir un budget sur un mois exceptionnel.</Note>
        </Chapter>

        <Chapter n="5" title="Les sorties qui ne se voient pas" color={T.brand2}>
          <P>À côté des dépenses bien identifiées (loyer, courses), plusieurs « fuites » passent sous le radar. Les nommer est le premier pas pour les contrôler :</P>
          <List items={[
            { t: "Frais bancaires", d: "Cotisation carte, tenue de compte, agios, commissions d'intervention. 100-300 €/an typiquement, jamais regardés." },
            { t: "Abonnements oubliés", d: "Apps en essai gratuit prolongées, services de streaming superposés, salle de sport peu fréquentée." },
            { t: "Micro-paiements", d: "Achats in-app, courses Uber Eats, achats Amazon de moins de 20 €. Cumul mensuel souvent étonnant." },
            { t: "Petits arrondis", d: "Pourboires, dépannage pour un ami, café offert. Pas un drame, mais compte les pour ne pas te dire « je sais pas où mon argent passe »." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="6" title="Visualiser ses flux" color={T.brand2}>
          <VizFrame title="Schéma d'un budget mensuel sain (exemple : 2 000 € nets)">
            <CashflowDiagram income={2000} fixed={1000} variable={600} savings={400} />
            <VizCaption>Le revenu se sépare en trois flux. L'épargne est traitée comme une dépense incompressible, pas comme un reste éventuel.</VizCaption>
          </VizFrame>
          <P>Ce type de schéma donne une vue d'ensemble que les chiffres seuls ne donnent pas. Sur 12 mois, ces 400 € d'épargne mensuelle représentent 4 800 € — plus que la plupart des fonds d'urgence basiques.</P>
        </Chapter>

        <Chapter n="7" title="« Se payer en premier »" color={T.brand2}>
          <P>Une règle d'or change tout : plutôt qu'épargner « ce qu'il reste » en fin de mois (souvent zéro), on met de côté <B>dès la réception du revenu</B>, puis on vit avec le reste. C'est le principe <em>pay yourself first</em>, popularisé par George Clason dans <em>L'homme le plus riche de Babylone</em>.</P>
          <Note color={T.brand2}>Cette inversion mentale est puissante : ton épargne devient une dépense « obligatoire » comme le loyer, au lieu d'une variable d'ajustement sacrifiée au premier imprévu.</Note>
          <DeepDive title="Comment l'appliquer concrètement">
            Crée un virement automatique <B>le lendemain de la paie</B> (donc le 26 ou le 1ᵉʳ selon ton entreprise) vers un compte d'épargne séparé. Commence modestement (50-100 €/mois) — l'objectif est de créer l'habitude. Une fois en place, augmente le montant à chaque hausse de revenu, AVANT de t'habituer au nouveau niveau de vie. Si tu attends « la fin du mois » pour décider d'épargner, ton cerveau aura toujours trouvé une raison de tout dépenser.
          </DeepDive>
        </Chapter>

        <Chapter n="8" title="Cas pratique : Marie, 26 ans, ingénieure junior" color={T.brand2}>
          <Card style={{ padding: 22, background: T.bgSoft }}>
            <div style={{ fontSize: 14, color: T.text, lineHeight: 1.7 }}>
              Marie touche <B>2 100 €</B> nets mensuels. Voici comment elle décompose son budget :
              <ul style={{ margin: "10px 0", paddingLeft: 20, color: "#C4D0E6" }}>
                <li><B>Fixes (1 040 €) :</B> loyer studio 720 €, transports 75 €, mutuelle 35 €, mobile 12 €, électricité/gaz 65 €, assurance habitation 11 €, Netflix + Spotify 22 €, salle de sport 20 €, banque 80 €/an = 7 €/mois.</li>
                <li><B>Variables (700 €) :</B> courses 280 €, restos/sorties 220 €, vêtements 80 €, divers 120 €.</li>
                <li><B>Épargne (300 €) :</B> virement automatique le 2 du mois sur livret + assurance-vie.</li>
                <li><B>Marge restante :</B> 60 € pour absorber les imprévus.</li>
              </ul>
              <div style={{ marginTop: 6 }}>
                Sa proportion : <B style={{ color: T.brand2 }}>50 % fixes</B>, 33 % variables, 14 % épargne, 3 % marge. Pas mal — l'épargne est en place, et les fixes laissent de la marge.
              </div>
            </div>
          </Card>
        </Chapter>

        <Quiz color={T.brand2} questions={[
          { q: "Quelle est la principale différence entre une dépense fixe et variable ?", options: ["Le montant", "La prévisibilité d'un mois à l'autre", "Le moyen de paiement", "L'utilité"], answer: 1, explain: "Une dépense fixe (loyer, assurance) est prévisible et stable. Une variable (courses, loisirs) fluctue. C'est sur les variables que se jouent la plupart des ajustements, mais sur les fixes que se jouent les vraies économies durables." },
          { q: "Le principe « pay yourself first » consiste à :", options: ["Augmenter son salaire", "Payer ses dettes en priorité", "Épargner dès la réception du revenu, avant toute dépense", "Acheter ce qu'on désire avant de penser au reste"], answer: 2, explain: "L'idée est d'inverser l'ordre habituel : épargner d'abord (virement automatique), puis vivre avec ce qui reste. Sinon, l'épargne devient la variable d'ajustement et finit souvent à zéro." },
          { q: "Pour un budget réaliste, quelle ligne de la fiche de paie utiliser ?", options: ["Le brut", "Le net imposable", "Le net à payer après PAS", "Le salaire affiché sur le contrat"], answer: 2, explain: "C'est le montant réellement viré sur ton compte, après cotisations ET impôt à la source. Un budget basé sur d'autres lignes sera systématiquement trop optimiste." },
        ]} />
      </div>
    ),
  },

  {
    id: "503020", Icon: PieChart, title: "La méthode 50/30/20",
    summary: "Un cadre simple et visuel pour répartir un revenu net entre besoins, envies et avenir.",
    intro: "Popularisée par Elizabeth Warren, cette méthode propose trois grandes enveloppes pour visualiser un équilibre sain.",
    words: 1900,
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
            { t: "30 % — Envies", d: "Ce qui améliore la vie sans être indispensable : restaurants, loisirs, abonnements optionnels, shopping." },
            { t: "20 % — Avenir", d: "Épargne, fonds d'urgence et remboursement accéléré des dettes au-delà du minimum." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="2" title="Calcule ta répartition" color={T.brand2}>
          <P>Joue avec le slider ci-dessous pour voir combien chaque enveloppe représente sur ton propre revenu :</P>
          <BudgetSplitSim />
          <Note color={T.brand2}>Tu remarqueras qu'à 1 500 €/mois, l'enveloppe « besoins » à 750 € est rarement atteignable dans une grande ville. C'est pourquoi le 50/30/20 doit être adapté.</Note>
        </Chapter>

        <Chapter n="3" title="Qu'est-ce qui va dans chaque enveloppe ?" color={T.brand2}>
          <Card style={{ padding: 22, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>50 % — Besoins essentiels</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Loyer ou crédit immo, charges, énergie, eau, internet (minimum), forfait mobile basique, transports
              indispensables (carte de transport, essence pour travail), courses alimentaires de base, assurances
              obligatoires, frais médicaux, minimum vital des remboursements de crédit.
            </div>
          </Card>
          <Card style={{ padding: 22, background: T.bgSoft, marginTop: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>30 % — Envies & plaisirs</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Restaurants, livraison, sorties, cinéma, voyages, vêtements au-delà du nécessaire, abonnements streaming/jeu,
              salle de sport, hobbies, cadeaux, upgrade de matériel (téléphone récent vs téléphone fonctionnel).
            </div>
          </Card>
          <Card style={{ padding: 22, background: T.bgSoft, marginTop: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>20 % — Avenir</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Fonds d'urgence en construction, épargne pour projets (apport immo, voyage, mariage), investissement long
              terme (PEA, AV, ETF), remboursement accéléré des dettes au-delà du minimum, cotisations PER éventuelles.
            </div>
          </Card>
        </Chapter>

        <Chapter n="4" title="Adapter à sa réalité" color={T.brand2}>
          <P>Ces ratios ne sont pas gravés dans le marbre. Plusieurs profils typiques en France :</P>
          <List items={[
            { t: "Étudiant à 800-1 100 €/mois", d: "Souvent 70/20/10 voire 75/20/5. L'épargne est limitée mais doit exister, même 30 €/mois, pour créer l'habitude." },
            { t: "Jeune actif à Paris (2 500 € nets)", d: "Loyer absorbe souvent 35-45 % du revenu. Cible réaliste : 65/20/15." },
            { t: "Jeune actif en province (2 300 € nets)", d: "Loyer 20-25 %. Le 50/30/20 classique est atteignable, voire 45/30/25 si discipline." },
            { t: "Cadre confirmé (4 000+ €)", d: "Possible de viser 45/25/30 ou même 40/25/35. L'effort d'épargne doit suivre la hausse, sinon inflation du train de vie." },
            { t: "Indépendant à revenus variables", d: "Sur un revenu moyen lissé, viser 60/20/20 : la part « avenir » sert aussi de coussin pour les mois creux." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="5" title="Variantes et alternatives" color={T.brand2}>
          <List items={[
            { t: "Méthode 70/20/10", d: "Plus indulgente. 70 % vie courante (besoins + petites envies), 20 % épargne, 10 % autres (dons, formation, gros projets). Pratique en début de carrière." },
            { t: "Méthode des enveloppes physiques", d: "Retirer en début de mois le cash pour chaque catégorie. Quand l'enveloppe est vide, on n'achète plus dans cette catégorie ce mois-ci. Très efficace pour les dépenses impulsives." },
            { t: "Zero-based budgeting", d: "Chaque euro reçoit une mission jusqu'à ce que le solde planifié atteigne zéro. Plus rigoureux mais demande plus de discipline mensuelle." },
            { t: "Anti-budget", d: "Tu épargnes d'abord (par exemple 20 %), puis tu fais ce que tu veux avec le reste sans catégoriser. Simple, efficace pour ceux qui n'aiment pas suivre dans le détail." },
          ]} color={T.brand2} />
          <DeepDive title="Quelle méthode choisir ?">
            Aucune méthode n'est universellement meilleure. La bonne méthode est <B>celle que tu vas vraiment appliquer pendant 6 mois</B>. Si tu n'aimes pas catégoriser, l'anti-budget est plus durable qu'un 50/30/20 abandonné après 3 semaines. Le piège classique : commencer avec une méthode trop ambitieuse, échouer, et conclure que « le budget c'est pas pour moi ».
          </DeepDive>
        </Chapter>

        <Chapter n="6" title="Et si je suis loin du compte ?" color={T.coral}>
          <P>Si tes besoins dépassent 70-80 % de ton revenu, c'est un signal d'alerte. Le levier ne sera pas l'épargne (impossible) mais sur deux axes :</P>
          <List items={[
            { t: "Augmenter les revenus", d: "Formation, changement de poste, complément (mission, freelance ponctuel). C'est lent mais c'est le levier le plus puissant à long terme." },
            { t: "Réduire un poste fixe majeur", d: "Logement, transport, assurance. Les petites économies (café du matin) ne suffiront jamais à inverser la tendance — il faut un gros levier." },
          ]} color={T.coral} />
          <Note color={T.coral}>Réduire un poste fixe de 100 €/mois = 1 200 €/an d'économisé, sans effort renouvelé. Trouver un job qui paie 200 €/mois de plus = 2 400 €/an. Ces leviers structurels battent tout micro-ajustement.</Note>
        </Chapter>

        <Chapter n="7" title="Les pièges du 50/30/20" color={T.coral}>
          <List items={[
            { t: "Confondre besoin et envie", d: "Le 4ᵉ resto de la semaine n'est pas un besoin, même si on a faim. L'abonnement Netflix n'est pas non plus un besoin. La distinction doit être stricte sinon l'enveloppe « besoins » gonfle artificiellement." },
            { t: "Oublier les dépenses annuelles", d: "Assurance habitation 200 €/an, taxe ordures, vacances, cadeaux de Noël. À provisionner mensuellement (≈ 17 €/mois pour 200 € annuels) sinon ils dégradent le budget réel." },
            { t: "Compter brut au lieu de net", d: "Comme vu plus tôt : toujours partir du net après PAS." },
            { t: "Ne pas inclure les remboursements de crédit", d: "Le minimum imposé par le contrat est un besoin. Le remboursement anticipé est de l'épargne (20 % avenir)." },
          ]} color={T.coral} />
        </Chapter>

        <Quiz color={T.brand2} questions={[
          { q: "Quelle enveloppe contient le remboursement minimum des dettes ?", options: ["50 % besoins", "30 % envies", "20 % avenir", "Ce n'est pas une dépense"], answer: 0, explain: "Le minimum imposé par le contrat est dans les « besoins » (incompressible). Le remboursement accéléré au-delà du minimum, lui, va dans les « 20 % avenir »." },
          { q: "Le 50/30/20 est-il une règle absolue ?", options: ["Oui, c'est une loi mathématique", "Non, c'est un cadre indicatif à adapter", "C'est obsolète, on utilise 30/30/40 maintenant", "Cela ne fonctionne que pour les hauts revenus"], answer: 1, explain: "C'est un point de repère pédagogique. À Paris ou en début de carrière, on adapte (65/20/15 par exemple). L'essentiel est d'avoir une intention consciente pour chaque euro." },
          { q: "Tu gagnes 2 000 € nets. Selon le 50/30/20 strict, combien vas en épargne ?", options: ["100 €", "200 €", "400 €", "600 €"], answer: 2, explain: "20 % × 2 000 € = 400 €. C'est l'enveloppe « avenir » : fonds d'urgence + investissement + remboursement accéléré." },
          { q: "Quelle méthode est la plus simple si tu n'aimes pas catégoriser ?", options: ["Le zero-based budgeting", "L'anti-budget (épargner d'abord, faire ce qu'on veut du reste)", "Le 50/30/20 strict", "Les enveloppes physiques"], answer: 1, explain: "L'anti-budget supprime la charge mentale du suivi catégorisé. Tu automatises l'épargne, et le reste est libre — la discipline est concentrée sur l'épargne automatique, pas sur le tracking quotidien." },
        ]} />
      </div>
    ),
  },

  {
    id: "suivi", Icon: Search, title: "Suivre ses dépenses",
    summary: "L'exercice du mois : traquer les fuites invisibles et reprendre le contrôle sans se priver.",
    intro: "Le levier le plus puissant et le plus simple. La prise de conscience suffit souvent à changer les comportements.",
    words: 1500,
    content: (
      <div>
        <Chapter n="1" title="L'exercice des 30 jours" color={T.brand2}>
          <P>Note <B>chaque dépense pendant 30 jours</B>. Une appli de banque, un tableur, ou même un carnet papier suffisent. La plupart des gens découvrent alors des « fuites » invisibles : abonnements oubliés, micro-achats quotidiens, livraisons impulsives.</P>
          <P>L'objectif n'est pas de te culpabiliser. Le but est purement diagnostique : savoir où va l'argent <em>réellement</em>, pas où tu <em>penses</em> qu'il va. L'écart entre les deux est souvent énorme — c'est ce qu'on appelle le « biais de désirabilité » : on sous-estime mentalement ce qui nous dérange et on garde en mémoire ce qui nous valorise.</P>
        </Chapter>

        <Chapter n="2" title="Les outils qui aident vraiment" color={T.brand2}>
          <List items={[
            { t: "Catégorisation automatique de ta banque", d: "Boursobank, Fortuneo, Hello bank, BNP, Crédit Agricole : la plupart des banques classent automatiquement tes transactions par catégorie. Suffisant pour 80 % des cas." },
            { t: "Bankin', Linxo (apps tierces)", d: "Agrègent tous tes comptes (banque, livrets, crypto) en une vue. Catégorisation plus fine, alertes personnalisables. Version gratuite suffit souvent." },
            { t: "Google Sheets / Notion", d: "Pour les amateurs de manuel. Plus de contrôle mais plus de friction. Pratique pour les revenus variables et les remboursements croisés." },
            { t: "YNAB (You Need A Budget)", d: "Plus exigeant : tu assignes chaque euro à une mission AVANT de le dépenser. Très efficace pour ceux qui structurent volontiers." },
          ]} color={T.brand2} />
          <Note color={T.brand2}>Évite de te disperser entre 5 outils. Un seul outil utilisé tous les jours bat 5 outils utilisés une fois.</Note>
        </Chapter>

        <Chapter n="3" title="Les bonnes catégories" color={T.brand2}>
          <P>Trop de catégories = friction et abandon. Trop peu = on ne voit pas où ajuster. Voici une grille en 10-12 catégories qui marche bien :</P>
          <List items={[
            { t: "Logement", d: "Loyer/crédit immo, charges, énergie, eau, assurance habitation." },
            { t: "Alimentation", d: "Courses + livraison alimentaire (ou séparer en deux si tu veux les comparer)." },
            { t: "Restaurants & sorties", d: "Distinct de l'alimentation : ce sont des dépenses « envies »." },
            { t: "Transport", d: "Carte de transport, essence, péages, entretien véhicule, taxis/VTC." },
            { t: "Loisirs", d: "Cinéma, concerts, week-ends, hobbies, livres, jeux." },
            { t: "Abonnements", d: "Streaming, presse, cloud, salle de sport, applis premium." },
            { t: "Santé", d: "Reste à charge après mutuelle, pharmacie, médecine." },
            { t: "Shopping", d: "Vêtements, chaussures, accessoires." },
            { t: "Maison & équipement", d: "Mobilier, électroménager, déco, outils." },
            { t: "Cadeaux & divers", d: "Anniversaires, dons, urgences ponctuelles." },
            { t: "Frais bancaires", d: "Cotisation carte, agios, commissions, virements internationaux." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="4" title="Cibler les 3 plus gros postes" color={T.brand2}>
          <P>Le réflexe gagnant : classer les dépenses par catégorie et regarder les <B>trois plus gros postes</B>. C'est là que se trouvent les vrais leviers — bien plus que dans le café du matin, qui pèse souvent beaucoup moins qu'on ne le croit.</P>
          <VizFrame title="Où part vraiment l'argent (exemple type — 2 500 €/mois)">
            <VBars data={[
              { label: "Logement", v: 850, color: T.brand2 },
              { label: "Courses", v: 320, color: T.brand },
              { label: "Transport", v: 180, color: T.accent },
              { label: "Resto/sorties", v: 250, color: T.violet },
              { label: "Loisirs", v: 150, color: T.violet },
              { label: "Café/snacks", v: 60, color: T.coral },
            ]} unit=" €" />
            <VizCaption>Réduire de 10 % le logement libère 85 €/mois, soit 1 020 €/an. Supprimer tous les cafés libère 60 €/mois. Le levier n'est pas symétrique.</VizCaption>
          </VizFrame>
        </Chapter>

        <Chapter n="5" title="Que faire des dépenses pro / remboursées" color={T.brand2}>
          <P>Beaucoup de gens galèrent à classer les dépenses qu'ils avancent pour leur employeur, leur coloc, ou un ami :</P>
          <List items={[
            { t: "Crée une catégorie « avances »", d: "Tu y mets ce qui sera remboursé. Et tu mets en négatif les remboursements quand ils arrivent. Au mois suivant, le solde doit tendre vers zéro." },
            { t: "Pour les coloc avec dépenses communes", d: "Utilise Lydia, Tricount ou Splitwise pour suivre les soldes. Une fois par mois, on règle." },
            { t: "Les remboursements pro retardés", d: "À surveiller : un remboursement de 800 € qui arrive 2 mois après ta dépense peut fausser ton mois en cours. Pense à l'annoter." },
          ]} color={T.brand2} />
        </Chapter>

        <Chapter n="6" title="Le calcul qui change la perception : le coût horaire" color={T.brand2}>
          <Note color={T.accent} title="Astuce mentale">
            Calcule ton revenu net par heure (incluant le temps réel passé au travail + trajets). À 2 000 €/mois net pour 40h/semaine + 5h de trajets = ~10,4 €/h.
            Maintenant, un repas à 25 € = 2,4 heures de ton temps. Un téléphone à 1 200 € = 115 heures, soit 3 semaines de boulot.
            Ça ne signifie pas qu'il ne faut rien acheter — ça permet de remettre en perspective les achats impulsifs.
          </Note>
        </Chapter>

        <Chapter n="7" title="Dépenser selon ses valeurs" color={T.brand2}>
          <P>Le but n'est pas de se priver, mais de dépenser <em>en accord avec ses valeurs</em>. Si tu adores cuisiner, dépenser 400 €/mois en bonnes courses est cohérent. Si tu valorises les expériences, 300 € de sorties est cohérent. Mais 400 € de courses + 200 € de livraison Uber Eats + 150 € de resto = signal d'alerte sur une catégorie.</P>
          <P>Un exercice utile chaque fin de mois : surligne en vert les dépenses dont tu es content, et en rouge celles qui te laissent indifférent. Mois après mois, le rouge diminue mécaniquement.</P>
        </Chapter>

        <Quiz color={T.brand2} questions={[
          { q: "Quel est le poste le plus efficace à optimiser en général ?", options: ["Les cafés et snacks quotidiens", "L'un des trois plus gros postes du budget", "Les abonnements oubliés", "Tous au même niveau"], answer: 1, explain: "Mathématiquement, réduire de 10 % un gros poste libère bien plus que supprimer un petit. Le café du matin coûte rarement plus de 30 €/mois ; le logement, dix fois plus." },
          { q: "Combien de catégories de dépenses suivre idéalement ?", options: ["3-4", "10-12", "30+", "Aucune"], answer: 1, explain: "10-12 catégories est le sweet spot : assez fin pour voir où ajuster, assez peu pour ne pas créer de friction. Trop de catégories = abandon rapide." },
          { q: "Pour une dépense que ton employeur va rembourser, quelle approche est la meilleure ?", options: ["L'oublier dans le budget", "Créer une catégorie « avances » et y mettre le remboursement en négatif", "La compter deux fois", "La compter à part dans un autre logiciel"], answer: 1, explain: "Cela garde le suivi clair : la dépense ET son remboursement sont visibles, et le solde tend vers zéro. Sinon ton mois est artificiellement déficitaire." },
        ]} />
      </div>
    ),
  },

  {
    id: "urgence", Icon: LifeBuoy, title: "Le fonds d'urgence",
    summary: "La réserve de sécurité qui évite l'endettement au premier imprévu. La priorité n°1.",
    intro: "Avant même de penser à épargner pour le plaisir ou à investir, on bâtit son matelas de sécurité.",
    words: 1700,
    content: (
      <div>
        <Chapter n="1" title="Pourquoi c'est la priorité n°1" color={T.brand2}>
          <P>Une réserve couvrant <B>3 à 6 mois de dépenses essentielles</B>, placée sur un support immédiatement disponible, évite de s'endetter au premier imprévu — panne, perte d'emploi, frais de santé — qui, sinon, peut faire basculer tout un équilibre.</P>
          <P>Cette réserve a un coût d'opportunité (elle rapporte peu) mais c'est son rôle : être disponible <em>sans condition</em>. Ce n'est pas un placement, c'est une assurance gratuite contre les coups durs.</P>
          <Note color={T.brand2}>Avant tout investissement (ETF, PEA, crypto), valide ce socle. Investir avec un fonds d'urgence inexistant t'expose à devoir vendre tes positions au pire moment (souvent en pleine baisse) parce qu'un événement de la vie tombe.</Note>
        </Chapter>

        <Chapter n="2" title="Calculer son besoin réel" color={T.brand2}>
          <P>Le montant cible n'est pas un chiffre rond — c'est <B>tes dépenses essentielles mensuelles × le nombre de mois cible</B>.</P>
          <P>Dépenses essentielles = ce qui continue à tomber même si tu perds ton emploi du jour au lendemain :</P>
          <List items={[
            { t: "Loyer/crédit immo", d: "Incompressible à court terme. Si propriétaire, mensualité du prêt." },
            { t: "Charges et énergie", d: "Électricité, gaz, eau, internet basique." },
            { t: "Alimentation minimale", d: "Pas le standard de vie habituel — le minimum vital (~250 €/mois pour une personne seule)." },
            { t: "Transports essentiels", d: "Si tu travailles, il faut pouvoir y aller. Sinon, le minimum." },
            { t: "Assurances obligatoires", d: "Habitation, auto, santé complémentaire." },
            { t: "Mensualités de crédit", d: "Crédit conso, immo : pas négociables." },
          ]} color={T.brand2} />
          <Card style={{ padding: 18, background: T.bgSoft, marginTop: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple de calcul (jeune actif, ville moyenne)</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Loyer + charges : 750 €<br />
              Énergie : 70 €<br />
              Alimentation minimum : 280 €<br />
              Transports : 75 €<br />
              Assurances : 45 €<br />
              Mensualité auto : 180 €<br />
              <B style={{ color: T.text }}>Total dépenses essentielles : 1 400 €/mois</B><br />
              → Fonds d'urgence cible : 3 mois × 1 400 = <B style={{ color: T.brand }}>4 200 €</B> (palier 1) à 6 mois × 1 400 = <B style={{ color: T.brand }}>8 400 €</B> (palier 2)
            </div>
          </Card>
        </Chapter>

        <Chapter n="3" title="Combien viser : 3, 6 ou 12 mois ?" color={T.brand2}>
          <List items={[
            { t: "3 mois — minimum standard", d: "CDI stable dans une entreprise saine, pas de personne à charge, partenaire avec ses propres revenus, logement urbain où retrouver un emploi est facile." },
            { t: "6 mois — confortable", d: "CDD, freelance, démarrage de carrière, secteur en mutation. La marge supplémentaire donne le temps de chercher sans paniquer." },
            { t: "9-12 mois — sécurité maximale", d: "Indépendant à revenus très variables, secteur fragile, métier hyper-spécialisé où chercher un poste prend du temps, parent isolé." },
          ]} color={T.brand2} />
          <DeepDive title="Le bon montant n'est pas le plus gros possible">
            Au-delà de 6-12 mois (selon profil), accumuler du cash sur un livret faiblement rémunéré devient sous-optimal. L'inflation l'érode et le capital pourrait travailler ailleurs. <B>Le fonds d'urgence est une assurance, pas un objectif d'enrichissement.</B> Une fois plein, redirige l'épargne mensuelle vers l'investissement.
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="Le construire par paliers" color={T.brand2}>
          <List items={[
            { t: "Palier 1 — 1 000 € rapidement", d: "Viser 1 000 € le plus vite possible. Ce premier palier absorbe la majorité des imprévus courants (panne, frais médical ponctuel, dépannage). Si tu as moins de 1 000 € disponibles, c'est ta priorité absolue, même avant tout remboursement de dette à taux faible." },
            { t: "Palier 2 — 3 mois", d: "Compléter ensuite jusqu'à 3 mois de dépenses essentielles. Ce palier te protège d'une perte de revenus temporaire (mission qui ne paie pas, période entre deux jobs courte)." },
            { t: "Palier 3 — 6 mois", d: "Pour CDD, freelance, ou simplement par prudence. Marge psychologique très précieuse." },
          ]} color={T.brand2} />
          <Note color={T.brand2}>Même 500 € de réserve changent radicalement ta capacité à encaisser un coup dur sans recourir au crédit à la consommation. C'est l'effet seuil le plus rentable de toute la finance perso.</Note>
        </Chapter>

        <Chapter n="5" title="Où le placer concrètement ?" color={T.brand2}>
          <P>Le fonds d'urgence doit être <B>liquide</B> (accessible sous 48h max), <B>sûr</B> (capital garanti) et <B>séparé</B> du compte courant (pour éviter qu'il fonde « par accident »). Comparaison des options :</P>
          <List items={[
            { t: "Livret A", d: "Plafond 22 950 €, intérêts non imposés, retrait instantané. Le standard incontesté. Taux fixé par l'État, autour de 2,5-3 % en 2025-2026." },
            { t: "LDDS (Livret Développement Durable)", d: "Plafond 12 000 €, même taux que le Livret A, mêmes conditions. À ouvrir en complément si le Livret A est plein." },
            { t: "LEP (Livret Épargne Populaire)", d: "Pour les revenus modestes (sous certains plafonds fiscaux). Taux plus élevé (~5 %), plafond 10 000 €. À demander activement à la banque — souvent passé sous silence." },
            { t: "Fonds en euros d'assurance-vie", d: "Possible mais moins liquide (retrait sous 1-2 semaines). À utiliser pour la partie « au-delà des 6 mois » du fonds d'urgence." },
          ]} color={T.brand2} />
          <Card style={{ padding: 18, background: T.bgSoft, marginTop: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>À NE PAS faire</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              <B style={{ color: T.text }}>ETF, actions, crypto.</B> Le risque que ton fonds soit -30 % le jour où tu en as besoin est inacceptable.<br />
              <B style={{ color: T.text }}>Compte courant.</B> Trop tentant d'y piocher pour des « petits » plaisirs.<br />
              <B style={{ color: T.text }}>Comptes à terme bloqués.</B> Par définition non-disponibles.<br />
              <B style={{ color: T.text }}>Cash chez soi.</B> Inflation, risque de vol, pas d'intérêts.
            </div>
          </Card>
        </Chapter>

        <Chapter n="6" title="Quand peut-on (vraiment) y toucher ?" color={T.brand2}>
          <P>Le fonds d'urgence sert pour les vraies urgences — pas les plaisirs « urgents » :</P>
          <List items={[
            { t: "OUI", d: "Perte d'emploi inattendue, frais médical non remboursé, panne majeure véhicule indispensable, réparation logement urgente, événement familial grave." },
            { t: "NON", d: "Soldes Black Friday, voyage de dernière minute, téléphone cassé qui marche encore, mariage d'ami, restaurant cher." },
          ]} color={T.brand2} />
          <Note color={T.brand2}>Règle interne utile : « Cette dépense, si je l'avais vu venir 6 mois à l'avance, est-ce que je l'aurais provisionnée ? » Si oui, ce n'est pas une urgence — c'est une dépense prévisible non planifiée. Le fonds d'urgence ne doit pas servir d'excuse à un manque de planification.</Note>
        </Chapter>

        <Chapter n="7" title="Reconstituer après usage" color={T.brand2}>
          <P>Une fois utilisé, le fonds d'urgence devient <em>la</em> priorité du budget. Tu suspends temporairement l'investissement, les achats non essentiels, et tu remets le virement automatique au max raisonnable jusqu'à reconstitution. Une réserve fragile est moins utile qu'une réserve solide — donc on ne traîne pas pour la reconstituer.</P>
        </Chapter>

        <Chapter n="8" title="Les pièges qui ruinent un budget" color={T.coral}>
          <List items={[
            { t: "Le crédit conso pour du confort", d: "Ses taux élevés (5-20 % TAEG) transforment un achat ponctuel en dette qui dure des années." },
            { t: "Les abonnements zombies", d: "Streaming, applis, salle de sport inutilisées. Audit annuel obligatoire (voir le cours « Renégocier ses contrats »)." },
            { t: "L'inflation du train de vie", d: "Quand le revenu monte, les dépenses suivent et l'épargne reste à zéro. Le piège n°1 des jeunes actifs." },
            { t: "Le BNPL (« paye en 4 fois »)", d: "Présenté comme « gratuit », il fractionne les dépenses et fait perdre la sensation de coût. La somme totale peut vite déraper." },
          ]} color={T.coral} />
          <DeepDive title="Le piège de l'inflation du train de vie">
            Tu passes de 1 800 € à 2 400 € net : génial. Mais en six mois, un loyer plus grand et des sorties plus fréquentes absorbent toute la hausse. Malgré +33 % de revenu, ton épargne n'a pas bougé. La parade : <B>« verrouiller » une partie de chaque augmentation</B> vers l'épargne automatique avant de s'habituer au nouveau niveau de vie. Règle simple : 50 % de chaque augmentation va en épargne supplémentaire, automatiquement.
          </DeepDive>
        </Chapter>

        <Quiz color={T.brand2} questions={[
          { q: "Combien faut-il viser pour son fonds d'urgence ?", options: ["1 an de revenus", "3 à 6 mois de dépenses essentielles", "10 % de son patrimoine", "Le montant de son loyer"], answer: 1, explain: "3 mois si situation stable, 6 mois si CDD/freelance. Calculé sur les dépenses essentielles (pas les revenus), car c'est ce qu'il faut couvrir en cas de perte de revenus." },
          { q: "Quel placement pour un fonds d'urgence ?", options: ["ETF actions, pour le rendement", "Crypto, pour la liquidité 24/7", "Livret réglementé (Livret A, LDDS)", "Assurance-vie en unités de compte"], answer: 2, explain: "Le fonds d'urgence doit être disponible sans condition et sans risque de perte. Le rendement est secondaire — son rôle est l'assurance, pas la performance." },
          { q: "Tu disposes de 200 €/mois pour épargner et tu n'as encore aucune réserve. Que faire en priorité ?", options: ["50/50 entre fonds d'urgence et ETF", "100 % vers le fonds d'urgence jusqu'au palier 1", "100 % en crypto", "Rembourser un prêt étudiant à 1 %"], answer: 1, explain: "Sans aucune réserve, tout autre placement t'expose à devoir vendre en urgence au pire moment. Le palier 1 (1 000 €) doit être atteint en priorité absolue, avant tout autre projet financier." },
          { q: "Quand peut-on légitimement piocher dans son fonds d'urgence ?", options: ["Pour profiter des soldes", "Pour un événement imprévu et grave (panne, frais médical)", "Pour un voyage spontané", "Pour acheter un téléphone plus récent"], answer: 1, explain: "Le test simple : « Si je l'avais vu venir 6 mois à l'avance, est-ce que je l'aurais provisionnée ? » Si oui, ce n'est pas une urgence — c'est une dépense prévisible non planifiée." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "renegocier", Icon: FileSearch, title: "Renégocier ses contrats",
  summary: "Le rendement caché : 1 heure par an de comparaison peut libérer plusieurs centaines d'euros.",
  intro: "Chaque contrat récurrent (assurance, mutuelle, énergie, internet, banque) est renégociable. C'est l'un des meilleurs ROI temps/argent qui existe.",
  words: 1700,
  content: (
    <div>
      <Chapter n="1" title="Pourquoi ça marche systématiquement" color={T.brand2}>
        <P>Les contrats récurrents sont presque tous indexés sur des prix de marché qui bougent constamment. À l'inscription, tu paies le tarif du moment. <B>Trois ans plus tard, ce tarif est obsolète</B> — souvent à ton désavantage, car l'opérateur n'a aucun intérêt à te le signaler.</P>
        <P>Comparer ne signifie pas forcément changer. Un simple appel argumenté « j'ai vu une offre concurrente à X € » suffit souvent à déclencher une remise de la part de ton fournisseur actuel. Les opérateurs ont des budgets de fidélisation prévus pour ça.</P>
      </Chapter>

      <Chapter n="2" title="Les six postes les plus rentables" color={T.brand2}>
        <List items={[
          { t: "Assurance auto / habitation", d: "Loi Hamon (2014) : résiliation possible à tout moment après 1 an, le nouvel assureur s'occupe des démarches. Gain moyen : 100 à 300 €/an." },
          { t: "Mutuelle santé", d: "Comparer les garanties réellement utiles selon ton profil. Une mutuelle « tout option » à 80 €/mois peut souvent être remplacée par une formule équivalente à 45 €/mois pour un jeune actif." },
          { t: "Forfait mobile et internet", d: "Marché ultra-concurrentiel. Un forfait à 25 €/mois date probablement de 2018 ; les équivalents actuels sont à 10-15 €/mois." },
          { t: "Énergie (élec + gaz)", d: "Depuis l'ouverture du marché, des dizaines d'offres existent. Outil officiel : comparateur energie-info.fr (médiateur national)." },
          { t: "Banque", d: "Comparer frais de tenue de compte, carte, virements étranger. Les banques en ligne sont souvent à 0 € de frais courants pour les profils standards." },
          { t: "Assurance emprunteur (immobilier)", d: "Loi Lemoine (2022) : résiliation à tout moment. La déléguer peut faire économiser 5 000 à 15 000 € sur la durée totale du prêt." },
        ]} color={T.brand2} />
      </Chapter>

      <Chapter n="3" title="La méthode du « audit annuel »" color={T.brand2}>
        <P>Bloque <B>une demi-journée par an</B>, idéalement en janvier (relevés fiscaux disponibles, nouvelles offres déployées) :</P>
        <List items={[
          "Liste tous tes contrats récurrents avec leur montant annuel.",
          "Compare chacun via un comparateur indépendant (UFC-Que Choisir, lesfurets, energie-info pour l'énergie).",
          "Pour chaque écart > 100 €/an, appelle ton fournisseur actuel avec l'offre concurrente — propose-lui de s'aligner.",
          "Si refus : change. Les fournisseurs gèrent les transferts entre eux dans 80 % des cas.",
        ]} color={T.brand2} />
        <Note color={T.brand2}>Un audit annuel libère en moyenne 400 à 800 € de pouvoir d'achat pour un jeune actif. C'est l'équivalent d'une augmentation de salaire nette d'impôt, obtenue en 3 heures.</Note>
      </Chapter>

      <Chapter n="4" title="Le script pour l'appel téléphonique" color={T.brand2}>
        <P>L'appel de renégociation est intimidant — il ne devrait pas l'être. Voici un script qui marche dans 70 % des cas :</P>
        <Card style={{ padding: 20, background: T.bgSoft }}>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.8, fontStyle: "italic" }}>
            <B style={{ color: T.text, fontStyle: "normal" }}>Toi :</B> Bonjour, je suis client chez vous depuis [X] années. Je viens de comparer mon contrat avec d'autres offres et j'ai trouvé [nom du concurrent] à [montant] €/mois pour des garanties équivalentes, soit [écart] € de moins par an. Avant de changer, je voulais voir si vous aviez une offre de fidélité à me proposer ?
            <br /><br />
            <B style={{ color: T.text, fontStyle: "normal" }}>Conseiller :</B> [Va consulter les remises possibles]
            <br /><br />
            <B style={{ color: T.text, fontStyle: "normal" }}>Toi :</B> Si la proposition n'est pas suffisante : « Je vous remercie, mais je vais procéder au changement. Vous avez la possibilité de me transférer au service résiliation ? »
          </div>
        </Card>
        <Note color={T.brand2}>Conseil clé : <B>ne pas mentir</B>. Cite une vraie offre que tu as réellement vue. Si on te demande des preuves, tu peux décrire en détail. Mentir nuit à la crédibilité de l'argumentation et risque un retour de bâton.</Note>
      </Chapter>

      <Chapter n="5" title="Cas concrets par poste" color={T.brand2}>
        <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Mobile : 28 €/mois → 9,99 €/mois</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
            Forfait Orange historique 100 Go souscrit en 2019 à 28 €. En 2026, un Sosh, Free ou B&You équivalent (100 Go 5G) est à 10-12 €/mois.
            Gain : 18 €/mois × 12 = <B style={{ color: T.brand }}>216 €/an</B>.
          </div>
        </Card>
        <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Assurance habitation : 220 € → 140 €</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
            Studio 25 m² assuré 220 €/an chez la banque par facilité. Devis MAIF/Acheel/Lemonade : 140 €/an pour les mêmes garanties.
            Gain : <B style={{ color: T.brand }}>80 €/an</B>. Procédure via loi Hamon : 30 minutes en ligne, le nouvel assureur gère le transfert.
          </div>
        </Card>
        <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Banque : 9 €/mois → 0 €/mois</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
            Banque traditionnelle avec cotisation carte 5 €/mois + tenue de compte 2 €/mois + opérations diverses = ~9 €/mois.
            Boursobank, Fortuneo, Hello bank : carte gratuite + tenue de compte à 0 € (sous condition de revenu/usage).
            Gain : <B style={{ color: T.brand }}>~110 €/an</B>. La mobilité bancaire (loi 2017) automatise le transfert des prélèvements.
          </div>
        </Card>
        <Card style={{ padding: 18, background: T.bgSoft }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand2, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Assurance emprunteur : 320 € → 140 €/an</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
            Prêt immo 200 000 €, assurance bancaire au taux groupe (0,32 %). Délégation vers un assureur externe (April, Securimut) au taux individuel (0,14 %).
            Gain : <B style={{ color: T.brand }}>~180 €/an × 20 ans = 3 600 € sur la durée du prêt</B>. Loi Lemoine : résiliation à tout moment.
          </div>
        </Card>
      </Chapter>

      <Chapter n="6" title="Les pièges à éviter" color={T.coral}>
        <List items={[
          { t: "Le tarif d'appel", d: "Promotion sur 6 ou 12 mois, puis bascule sur un tarif beaucoup plus élevé. Toujours noter dans son agenda la date de fin de promo." },
          { t: "Les options inutiles", d: "Garantie casse vol mobile pour un téléphone de 4 ans, assistance juridique d'une assurance auto jamais utilisée, garantie panne pour électroménager à durée de vie connue." },
          { t: "La tacite reconduction longue", d: "Un contrat reconduit pour 1 an entier peut être contraignant. Préférer le mois en mois ou les contrats résiliables à tout moment." },
          { t: "L'illusion du « pas le temps »", d: "3 heures d'audit annuel à 600 € de gain = 200 €/heure. C'est un tarif horaire que la plupart des gens ne touchent jamais." },
        ]} color={T.coral} />
      </Chapter>

      <Chapter n="7" title="Aller plus loin : les comparateurs et outils" color={T.brand2}>
        <List items={[
          { t: "energie-info.fr", d: "Comparateur officiel du médiateur de l'énergie. Indépendant et sans pub." },
          { t: "lesfurets, lelynx, Assurland", d: "Comparateurs d'assurance. Attention : ils sont rémunérés par les assureurs, donc privilégier ceux qui affichent le plus large panel." },
          { t: "UFC-Que Choisir", d: "Tests indépendants et comparatifs détaillés. Accès payant pour les comparatifs complets mais souvent largement rentabilisé." },
          { t: "Money Vox / Cbanque", d: "Sites spécialisés banque/assurance, articles fouillés sur les frais cachés." },
        ]} color={T.brand2} />
      </Chapter>

      <Quiz color={T.brand2} questions={[
        { q: "Quelle loi permet de résilier une assurance auto à tout moment après 1 an ?", options: ["Loi Lemoine", "Loi Hamon", "Loi Pacte", "Loi Madelin"], answer: 1, explain: "La loi Hamon (2014) a introduit la résiliation infra-annuelle après 1 an de souscription pour l'assurance auto et habitation. Le nouvel assureur gère les démarches." },
        { q: "Quel est le meilleur ROI temps/argent d'un audit annuel des contrats ?", options: ["Quelques euros sur l'année", "Un café offert chez le banquier", "En moyenne 400 à 800 € libérés pour quelques heures de travail", "Une carte de fidélité"], answer: 2, explain: "Pour 3 à 4 heures de travail par an, l'audit libère en moyenne plusieurs centaines d'euros. Aucun placement classique n'offre un tel rendement temps/argent." },
        { q: "Quelle loi permet de résilier son assurance emprunteur à tout moment ?", options: ["Loi Hamon", "Loi Lemoine", "Loi Bourquin", "Loi Macron"], answer: 1, explain: "La loi Lemoine (2022) a généralisé la résiliation infra-annuelle de l'assurance emprunteur. Sur un crédit immobilier de 200 000 €, le gain peut atteindre 5 000 à 15 000 € sur la durée du prêt." },
      ]} />
    </div>
  ),
});

export default function Budget(p) {
  return <TopicHub pageId="budget" topics={TOPICS} {...p} />;
}
