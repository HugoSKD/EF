import React from "react";
import { Zap, Blocks, Target, Brain, LayoutGrid, Leaf } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { RiskBars, VizFrame, VizCaption, FeesImpact, DonutChart } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "risque", Icon: Zap, title: "La loi risque / rendement",
    summary: "La règle fondamentale à intégrer avant tout : pas de rendement élevé sans risque élevé.",
    intro: "Si tu ne retiens qu'une seule chose de tout ce parcours, que ce soit celle-ci.",
    words: 1600,
    content: (
      <div>
        <Chapter n="1" title="Aucun gain élevé sans risque" color={T.coral}>
          <P><B>Il n'existe pas de rendement élevé sans risque élevé.</B> Toute promesse de gains importants « sans risque » est, au mieux trompeuse, au pire une arnaque pure.</P>
          <P>C'est une loi économique fondamentale : si une opportunité offrait vraiment du 15 % garanti sans risque, des milliards de capitaux institutionnels s'y précipiteraient en quelques jours, faisant tomber le rendement à des niveaux normaux. Le fait qu'une telle opportunité « existe encore » et te soit proposée signe son irréalité.</P>
        </Chapter>

        <Chapter n="2" title="Comprendre sa propre tolérance" color={T.coral}>
          <P>Comprendre sa propre <B>tolérance au risque</B> est aussi important que le choix des placements eux-mêmes. C'est la combinaison de trois facteurs :</P>
          <List items={[
            { t: "Capacité financière à encaisser une perte", d: "Si tu as un fonds d'urgence solide et un revenu stable, tu peux te permettre plus de risque que si tu vis au mois le mois." },
            { t: "Horizon de placement", d: "Plus c'est long, plus tu peux te permettre de la volatilité. Sur 20 ans, un krach -40 % est récupéré statistiquement. Sur 2 ans, peut-être pas." },
            { t: "Tolérance psychologique", d: "Question concrète : si demain tu vois ton capital baisser de 30 %, est-ce que tu paniques ou tu restes calme ? Sois honnête — beaucoup se surestiment et vendent au pire moment." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="3" title="Visualiser l'échelle" color={T.coral}>
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

        <Chapter n="4" title="Les types de risque souvent ignorés" color={T.coral}>
          <P>Le « risque » n'est pas un seul concept. Il y a plusieurs types qui se cumulent :</P>
          <List items={[
            { t: "Risque de marché (volatilité)", d: "Le prix peut baisser temporairement. Le plus visible mais souvent surestimé sur le long terme." },
            { t: "Risque de perte totale", d: "L'actif peut s'effondrer définitivement (faillite d'entreprise, projet crypto abandonné). Surtout pour les positions concentrées." },
            { t: "Risque de liquidité", d: "Tu ne peux pas vendre quand tu veux (SCPI parfois, certaines actions peu échangées, art, immobilier physique)." },
            { t: "Risque de change", d: "Si tu détiens des actions US, leur valeur en euros fluctue selon le taux EUR/USD." },
            { t: "Risque d'inflation", d: "Le risque le plus sous-estimé : un livret « sûr » à 2 % avec une inflation à 4 % te fait perdre 2 %/an de pouvoir d'achat. C'est une perte certaine, juste lente." },
            { t: "Risque de contrepartie", d: "Faillite de ton courtier, de ta banque, de l'émetteur d'un ETF synthétique. Les garanties existent en Europe (jusqu'à 100 k€) mais ne couvrent pas tout." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="5" title="Risque et horizon : la magie du temps" color={T.coral}>
          <P>Sur un an, les actions peuvent monter de +40 % ou chuter de -40 %. Sur 20 ans, les statistiques historiques (S&P 500, MSCI World) montrent que <B>aucune période glissante de 20 ans</B> n'a été négative — même celles qui contenaient 2008 ou 2000.</P>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Statistiques S&P 500 (1970-2024)</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Probabilité de perte sur 1 an : <B style={{ color: T.coral }}>~25 %</B><br />
              Probabilité de perte sur 5 ans : <B style={{ color: T.accent }}>~12 %</B><br />
              Probabilité de perte sur 10 ans : <B style={{ color: T.brand2 }}>~5 %</B><br />
              Probabilité de perte sur 20 ans : <B style={{ color: T.brand }}>~0 %</B><br />
            </div>
          </Card>
          <Note color={T.brand}>Cette stat ne garantit pas l'avenir, mais elle montre une régularité historique forte : le temps long est l'allié de l'investisseur en actions diversifiées.</Note>
        </Chapter>

        <Chapter n="6" title="Le test de la nuit blanche" color={T.coral}>
          <P>Avant de prendre une position, pose-toi la question : <em>« Si demain je vois mon capital à -40 %, je dors comment ? »</em></P>
          <P>Si la réponse est « pas du tout », tu prends trop de risque pour ton profil. Réduis la voilure jusqu'à un niveau où une baisse de cette ampleur ne t'empêche pas de fonctionner normalement. Mieux vaut être prudent et tenir 30 ans qu'agressif et vendre au pire moment.</P>
        </Chapter>

        <Chapter n="7" title="Le mythe du « risque = aventure »" color={T.coral}>
          <P>Prendre du risque dans le bon sens, c'est <B>diversifier sur des dizaines voire des centaines d'actifs</B> (ETF monde) en acceptant la volatilité court terme pour le rendement long terme. C'est mathématiquement maîtrisé et statistiquement validé.</P>
          <P>Prendre du risque dans le mauvais sens, c'est <B>concentrer son argent sur 2-3 actions individuelles ou un token crypto</B> en espérant un coup. C'est de la spéculation, pas de l'investissement. Les deux peuvent donner des résultats — mais l'un est reproductible et l'autre relève du tirage de loterie.</P>
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "Une publicité promet « 12 %/an garantis sans risque ». Que faire ?", options: ["Investir tout de suite avant que ce soit trop tard", "Diversifier en y mettant la moitié", "Fuir : c'est presque certainement une arnaque", "Demander une commission supplémentaire"], answer: 2, explain: "Aucun produit financier sérieux ne combine rendement élevé et absence de risque. La promesse de gains fixes élevés est le marqueur principal des arnaques pyramidales (Ponzi)." },
          { q: "Selon les statistiques historiques du S&P 500, sur 20 ans glissants :", options: ["50 % des périodes sont en perte", "Aucune période n'a été négative", "Toutes ont au moins triplé", "Le marché est imprévisible"], answer: 1, explain: "Sur 1970-2024, aucune période glissante de 20 ans du S&P 500 n'a été négative, même celles incluant 2008 et 2000. Le temps long lisse la volatilité." },
          { q: "Quel risque est le plus sous-estimé par les épargnants français ?", options: ["Le risque de marché", "Le risque d'inflation", "Le risque de change", "Le risque de liquidité"], answer: 1, explain: "Beaucoup de Français mettent tout en livret « par sécurité ». Mais à 2 % de rendement et 3 % d'inflation, ils perdent 1 %/an de pouvoir d'achat — une perte certaine, juste lente." },
        ]} />
      </div>
    ),
  },

  {
    id: "actifs", Icon: Blocks, title: "Les classes d'actifs",
    summary: "Actions, obligations, ETF : ce que tu détiens réellement et pourquoi les ETF reviennent souvent.",
    intro: "Comprendre les briques de base de tout portefeuille d'investissement.",
    words: 1900,
    content: (
      <div>
        <Chapter n="1" title="Les grandes briques" color={T.coral}>
          <List items={[
            { t: "Actions", d: "Une part de propriété dans une entreprise. Tu touches une fraction des bénéfices (dividendes) et tu profites de la hausse du cours. Potentiel élevé sur le long terme, forte volatilité à court terme." },
            { t: "Obligations", d: "Un prêt accordé à un État ou une entreprise, remboursé avec intérêts. Généralement plus stable que les actions. Les obligations d'État de pays solides (France, Allemagne) sont parmi les actifs les plus sûrs." },
            { t: "ETF indiciels", d: "Un panier qui réplique un indice entier (CAC 40, S&P 500, MSCI World). Diversification immédiate, frais souvent très bas (0,1-0,3 %/an)." },
            { t: "Immobilier (SCPI, REIT)", d: "Investir dans l'immobilier locatif sans gérer. Accessible avec quelques centaines d'euros, mais frais d'entrée souvent élevés (8-12 %) et liquidité limitée." },
            { t: "Matières premières (or, etc.)", d: "Diversification face aux marchés actions. Pas de rendement intrinsèque — la performance dépend du prix de revente. L'or est traditionnellement vu comme refuge en période d'incertitude." },
            { t: "Cash / monétaire", d: "Liquidités, comptes à terme. Pas vraiment un investissement mais une composante de toute allocation. Sécurise et permet d'acheter à la baisse." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="2" title="Actions : zoom sur ce que tu détiens vraiment" color={T.coral}>
          <P>Détenir une action, c'est posséder une <em>fraction</em> d'une entreprise. Une action Apple = 1 / 15 000 000 000 de l'entreprise. Concrètement, tu as deux droits :</P>
          <List items={[
            { t: "Droit aux dividendes", d: "Si l'entreprise distribue des bénéfices, tu reçois ta part. Apple, par exemple, verse environ 0,5 % de son cours en dividendes annuels. Une entreprise comme Total : ~5 %." },
            { t: "Droit de vote en AG", d: "Théorique pour un petit actionnaire — un porteur de 100 actions sur 15 milliards a peu de poids. Plus pertinent pour les actionnaires majoritaires." },
          ]} color={T.coral} />
          <P>Le gain principal du petit actionnaire vient de la <B>plus-value</B> : tu achètes à un prix, le marché valorise plus tard l'entreprise plus haut, tu vends avec gain. C'est ce qui fait la performance long terme des actions (~7-10 %/an historiquement, dividendes inclus).</P>
        </Chapter>

        <Chapter n="3" title="Obligations : comprendre le mécanisme" color={T.coral}>
          <P>Une obligation est un <em>contrat de prêt</em>. L'émetteur (État, entreprise) emprunte de l'argent et s'engage à :</P>
          <List items={[
            "Verser des intérêts (coupon) à intervalles réguliers (souvent annuels).",
            "Rembourser le capital à l'échéance (5, 10, 30 ans selon l'obligation).",
          ]} color={T.coral} />
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple concret</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
              Tu achètes une obligation d'État français à 1 000 €, coupon 3 %, échéance 10 ans. Tu reçois 30 €/an pendant 10 ans, et tu récupères 1 000 € à la fin. Total : 1 300 €.
              <br /><br />
              <B style={{ color: T.text }}>Le risque :</B> si la France fait faillite, tu peux perdre tout. Probabilité quasi-nulle. Mais si tu veux vendre AVANT l'échéance et que les taux d'intérêt ont monté entre-temps, ton obligation vaut moins (car les nouvelles obligations offrent un meilleur taux).
            </div>
          </Card>
          <DeepDive title="Le lien inverse taux/prix">
            Quand les taux d'intérêt montent, le prix des obligations existantes baisse — c'est mécanique. Une obligation à 2 % devient moins attrayante si on peut acheter du 5 % neuf. Sa valeur de revente baisse pour compenser. Et inversement quand les taux baissent. C'est pourquoi l'année 2022 (forte hausse des taux) a été catastrophique pour les fonds obligataires, alors qu'on les considère comme « sûrs ».
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="Pourquoi les ETF reviennent toujours" color={T.coral}>
          <P>Un ETF achète automatiquement des centaines d'entreprises d'un coup. Plutôt que de parier sur une seule société, tu détiens une mini-part de tout un indice. Avantages :</P>
          <List items={[
            { t: "Diversification instantanée", d: "Un ETF MSCI World contient 1 500+ entreprises de 23 pays développés. Si l'une fait faillite, l'impact est marginal (souvent < 0,1 % du portefeuille)." },
            { t: "Frais très bas", d: "Souvent 0,1-0,3 %/an, contre 1,5-2,5 % pour un fonds géré activement. Sur 30 ans, l'écart se chiffre en dizaines de milliers d'euros." },
            { t: "Pas besoin de choisir les gagnants", d: "Tu prends « tout le marché ». Si Apple chute, Microsoft monte. Les études Morningstar montrent que sur 20 ans, ~90 % des fonds actifs sous-performent leur indice de référence net de frais." },
            { t: "Liquidité", d: "Coté en bourse, achetable/vendable en quelques secondes pendant les heures d'ouverture." },
          ]} color={T.coral} />
          <DeepDive title="Physical vs Synthetic vs Sampling">
            Trois façons pour un ETF de répliquer un indice :<br />
            • <B>Physique full replication</B> : l'ETF achète vraiment toutes les actions de l'indice, dans les bonnes proportions. Le plus transparent.<br />
            • <B>Physique sampling</B> : l'ETF n'achète qu'un échantillon représentatif (pour les indices très larges). Économise les frais de transaction.<br />
            • <B>Synthétique</B> : l'ETF utilise des produits dérivés (swaps) pour répliquer l'indice. Performance identique mais risque de contrepartie ajouté. Les ETF synthétiques permettent souvent d'être éligibles PEA même pour des indices US (Lyxor MSCI World PEA-éligible par exemple).
          </DeepDive>
        </Chapter>

        <Chapter n="5" title="L'impact des frais sur 30 ans" color={T.coral}>
          <VizFrame title="200 €/mois pendant 30 ans, rendement brut 7 %/an">
            <FeesImpact />
            <VizCaption>Total versé : 72 000 €. Selon les frais, le capital final varie de plus de 80 000 €. Les frais sont la variable la plus prévisible et la plus actionnable.</VizCaption>
          </VizFrame>
          <Note color={T.coral}>Les performances passées sont incertaines. Les frais, eux, sont garantis. C'est le seul levier que tu maîtrises complètement.</Note>
        </Chapter>

        <Chapter n="6" title="Capitalisant vs Distribuant" color={T.coral}>
          <P>Les ETF et fonds existent en deux versions, à comprendre absolument :</P>
          <List items={[
            { t: "Capitalisant (Acc / C)", d: "Les dividendes sont réinvestis automatiquement dans le fonds. Pas de cash à toucher. Idéal pour la phase d'accumulation : tu profites des intérêts composés au max, sans friction fiscale (pas d'IR sur dividendes non touchés)." },
            { t: "Distribuant (Dist / D)", d: "Les dividendes sont versés sur ton compte. Génère un revenu régulier mais imposable chaque année. Plus adapté à la phase de rente (retraite, indépendance financière)." },
          ]} color={T.coral} />
          <Note color={T.coral}>Pour un jeune en phase d'accumulation : choisir la version <B>capitalisante</B>. C'est statistiquement supérieur sur la durée — les dividendes réinvestis automatiquement profitent immédiatement de l'effet boule de neige.</Note>
        </Chapter>

        <Chapter n="7" title="Les classes d'actifs alternatives" color={T.coral}>
          <List items={[
            { t: "SCPI (immobilier locatif)", d: "Dividendes versés trimestriellement (~4-5 %/an net). Frais d'entrée 8-12 %. Adapté pour diversifier après avoir construit un portefeuille classique." },
            { t: "Crowdfunding immobilier", d: "Prêt à des promoteurs sur 1-3 ans, rendement 8-10 % cible. Risque de perte en capital. À ne pas confondre avec les SCPI." },
            { t: "Or physique ou ETF or", d: "Refuge traditionnel. Pas de rendement intrinsèque, mais protection contre les crises. Recommandé en 5-10 % d'un portefeuille." },
            { t: "Private equity", d: "Investir dans des entreprises non cotées via des fonds spécialisés. Tickets élevés (souvent 100 k€+), illiquidité forte. Pour patrimoines déjà importants." },
          ]} color={T.coral} />
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "Qu'est-ce qu'un ETF ?", options: ["Une cryptomonnaie", "Un fonds coté en bourse qui réplique un indice", "Une assurance-vie", "Un type d'obligation"], answer: 1, explain: "Un ETF (Exchange-Traded Fund) suit automatiquement un indice (S&P 500, CAC 40, MSCI World…). Tu détiens une mini-part de toutes les entreprises de l'indice, ce qui te diversifie instantanément." },
          { q: "Quel est le principal avantage d'un ETF par rapport à un fonds géré activement ?", options: ["Il rapporte toujours plus", "Les frais sont généralement bien plus bas", "Il est exonéré d'impôt", "Il garantit le capital"], answer: 1, explain: "Les ETF indiciels ont des frais souvent inférieurs à 0,3 %/an, contre 1,5 à 2,5 % pour beaucoup de fonds actifs. Sur 30 ans, cet écart fait une différence énorme." },
          { q: "Pour un jeune en phase d'accumulation, quel type d'ETF privilégier ?", options: ["Distribuant (Dist)", "Capitalisant (Acc)", "Synthétique", "Aucun, mieux vaut acheter des actions individuelles"], answer: 1, explain: "Le capitalisant réinvestit automatiquement les dividendes sans friction fiscale, ce qui maximise l'effet des intérêts composés sur le long terme. Le distribuant est plus adapté à la phase de rente (retraite)." },
          { q: "Que se passe-t-il quand les taux d'intérêt montent ?", options: ["Le prix des obligations existantes monte aussi", "Le prix des obligations existantes baisse", "Les obligations sont annulées", "Rien"], answer: 1, explain: "Les nouvelles obligations offrent un meilleur taux, donc les anciennes deviennent moins attrayantes. Leur prix de revente baisse mécaniquement pour compenser. C'est pourquoi 2022 (forte hausse de taux) a été catastrophique pour les fonds obligataires." },
        ]} />
      </div>
    ),
  },

  {
    id: "principes", Icon: Target, title: "Les principes qui marchent",
    summary: "Diversifier, voir long terme, surveiller les frais, investir régulièrement : le consensus des pros.",
    intro: "Quelques principes simples font l'objet d'un large consensus, même chez ceux qui ne sont d'accord sur rien d'autre.",
    words: 1900,
    content: (
      <div>
        <Chapter n="1" title="Les quatre principes de consensus" color={T.coral}>
          <List items={[
            { t: "Diversifier", d: "Répartir entre plusieurs entreprises, secteurs et zones réduit l'impact d'un accident isolé." },
            { t: "Voir long terme", d: "Sur des années, le temps lisse une grande partie de la volatilité. Les décisions impulsives lors des baisses sont une cause majeure de pertes." },
            { t: "Surveiller les frais", d: "Des frais de 2 %/an amputent une part énorme du capital final sur des décennies. À rendement égal, le moins cher gagne." },
            { t: "Investir régulièrement (DCA)", d: "Verser une somme fixe à intervalles réguliers, indépendamment du niveau du marché. Élimine le timing émotionnel." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="2" title="Diversifier : ne pas mettre tous ses œufs" color={T.coral}>
          <P>La diversification est le seul « free lunch » de la finance : tu réduis le risque sans baisser le rendement attendu. Trois niveaux à comprendre :</P>
          <List items={[
            { t: "Diversification par titre", d: "Détenir 1 action, c'est risquer toute son épargne sur une seule entreprise. Détenir 500 actions via un ETF, c'est rendre la faillite d'une entreprise quasi-indolore." },
            { t: "Diversification sectorielle", d: "Tech, santé, énergie, consommation : si un secteur s'effondre, les autres compensent partiellement. Les ETF larges (S&P 500, MSCI World) intègrent cette diversification automatiquement." },
            { t: "Diversification géographique", d: "Économies développées (US, Europe, Japon) + émergentes (Chine, Inde, Brésil). Permet de ne pas dépendre d'un seul pays. Le MSCI All Country World Index (ACWI) couvre les deux." },
          ]} color={T.coral} />
          <Note color={T.coral}>Erreur classique : penser être « diversifié » en achetant 5 actions tech américaines. Toutes sont corrélées (elles montent et baissent ensemble) — c'est de la fausse diversification.</Note>
        </Chapter>

        <Chapter n="3" title="L'impact massif des frais" color={T.coral}>
          <VizFrame title="200 €/mois pendant 30 ans, rendement brut 7 %/an">
            <FeesImpact />
            <VizCaption>Total versé : 72 000 €. Selon les frais, le capital final varie de plus de 80 000 €. Les frais sont la variable la plus prévisible et la plus actionnable.</VizCaption>
          </VizFrame>
          <Note color={T.coral}>Les performances passées sont incertaines. Les frais, eux, sont garantis. C'est le seul levier que tu maîtrises complètement.</Note>
          <DeepDive title="Les frais cachés à surveiller">
            Au-delà des frais de gestion affichés (TER), plusieurs frais peuvent peser :<br />
            • <B>Frais d'entrée</B> : 0-5 % à l'achat selon les fonds. Très négatifs pour le DCA.<br />
            • <B>Frais d'arbitrage</B> : pour bouger entre supports d'une AV. Souvent gratuit chez les bons contrats, 0,5-1 % sinon.<br />
            • <B>Spread bid-ask</B> : différence entre prix d'achat et de vente d'un ETF. Quelques centièmes de pourcent typiquement.<br />
            • <B>Tracking error</B> : écart entre la performance de l'ETF et celle de son indice de référence. Indicateur de qualité de l'ETF.
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="L'investissement régulier (DCA)" color={T.brand}>
          <Note color={T.brand}>Verser la même somme chaque mois, quoi qu'il arrive, permet d'acheter « plus quand c'est bas, moins quand c'est haut » sans avoir à deviner le marché. On appelle ça l'investissement programmé (DCA, <em>dollar-cost averaging</em>).</Note>
          <P>Avantages psychologiques majeurs :</P>
          <List items={[
            "Aucune décision à prendre chaque mois — automatisé.",
            "Aucune émotion à gérer — le marché baisse, on continue. Le marché monte, on continue.",
            "Aucun « bon moment » à attendre — on est constamment dans le marché.",
            "Réduction de la variance des résultats — moins dépendant du timing d'entrée.",
          ]} color={T.brand} />
          <P>Les études montrent que les particuliers qui font du DCA performent en moyenne mieux que ceux qui essaient de timer le marché — non pas parce que le DCA est mathématiquement supérieur (un lump-sum est statistiquement légèrement supérieur en moyenne), mais parce qu'il <em>évite les erreurs comportementales</em> qui plombent la performance réelle.</P>
        </Chapter>

        <Chapter n="5" title="Lump sum vs DCA : la nuance" color={T.coral}>
          <P>Si tu reçois une grosse somme d'un coup (héritage, prime, vente immo), faut-il tout investir d'un coup (lump sum) ou étaler sur plusieurs mois (DCA) ?</P>
          <List items={[
            { t: "Mathématiquement", d: "Le lump sum gagne dans ~2/3 des cas historiques. Logique : le marché monte en moyenne, donc plus tôt tu es dedans, mieux c'est." },
            { t: "Psychologiquement", d: "Le DCA est plus confortable. Si le marché plonge juste après ton lump sum, tu te culpabilises pendant des mois. Le DCA réduit le regret potentiel." },
          ]} color={T.coral} />
          <Note color={T.coral}>Compromis raisonnable : étaler sur 6-12 mois pour les grosses sommes. Tu acceptes une légère sous-performance moyenne en échange d'une vraie sérénité psychologique.</Note>
        </Chapter>

        <Chapter n="6" title="« Time in market » bat « timing the market »" color={T.coral}>
          <P>Une étude célèbre de J.P. Morgan : en restant investi sur le S&P 500 entre 2003 et 2022, tu obtiens 9,8 % de rendement annualisé. Mais si tu rates juste les <B>10 meilleurs jours de bourse</B> sur ces 20 ans (sur ~5 000 jours), ton rendement tombe à 5,6 %. Si tu rates les 30 meilleurs : 0,8 %.</P>
          <Note color={T.coral}>Les meilleurs jours surviennent souvent <em>juste après les pires</em>. Vendre en panique te garantit de rater le rebond. La conclusion : la pire stratégie est d'entrer et sortir du marché.</Note>
        </Chapter>

        <Chapter n="7" title="Rééquilibrage périodique" color={T.coral}>
          <P>Avec le temps, ton portefeuille dérive de sa cible. Si tu visais 70 % actions / 30 % obligations, après 5 ans de marché haussier, tu peux te retrouver à 80/20. Tu prends alors plus de risque que prévu.</P>
          <P>Le rééquilibrage annuel ou semestriel consiste à <B>vendre une partie de ce qui a monté pour racheter ce qui a baissé</B>, et revenir à l'allocation cible. Avantages :</P>
          <List items={[
            "Garde le niveau de risque souhaité.",
            "Vend haut et achète bas mécaniquement (l'inverse de l'instinct).",
            "Discipline qui contre les biais émotionnels.",
          ]} color={T.coral} />
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "Sur 30 ans, des frais de 2 % au lieu de 0,2 %, c'est :", options: ["Une différence négligeable", "Une perte de quelques milliers d'euros", "Une perte massive (souvent plusieurs dizaines de milliers d'euros)", "Un gain, parce que cela paye un meilleur gérant"], answer: 2, explain: "Les frais s'appliquent au capital total chaque année. Sur 30 ans, l'écart cumulé est énorme : c'est la variable la plus puissante et la plus actionnable du long terme." },
          { q: "Le DCA (investissement régulier) sert principalement à :", options: ["Battre le marché", "Lisser le prix d'achat et éviter le timing émotionnel", "Réduire les impôts", "Garantir le capital"], answer: 1, explain: "Verser une somme fixe régulière permet d'acheter plus quand les prix baissent et moins quand ils montent, sans décision émotionnelle. C'est puissant car notre cerveau est mal câblé pour timer correctement." },
          { q: "Tu rates les 10 meilleurs jours du S&P 500 sur 20 ans. Ton rendement annualisé passe de 9,8 % à environ :", options: ["9 %", "5,6 %", "Toujours 9,8 %", "Tu doubles ton rendement"], answer: 1, explain: "L'étude J.P. Morgan montre une chute drastique : rater seulement 10 jours sur 5 000 réduit le rendement de presque moitié. Les meilleurs jours surviennent souvent juste après les pires — vendre en panique te coûte très cher." },
        ]} />
      </div>
    ),
  },

  {
    id: "psycho", Icon: Brain, title: "Psychologie & check-list",
    summary: "Ton cerveau est ton pire ennemi en bourse. Les biais à connaître et la check-list avant de se lancer.",
    intro: "Investir est autant une affaire de comportement que de chiffres. Voici comment ne pas se saboter.",
    words: 1700,
    content: (
      <div>
        <Chapter n="1" title="Pourquoi notre cerveau est mal câblé" color={T.violet}>
          <P>Le cerveau humain a évolué pour des dangers immédiats (prédateur, faim) — pas pour les marchés financiers. Conséquence : nos instincts nous poussent à acheter quand tout va bien (cher) et à vendre quand tout va mal (bas). L'exact inverse de ce qui marche.</P>
          <P>Les recherches en finance comportementale (Kahneman, Tversky, Thaler) ont identifié des dizaines de biais. Voici les plus toxiques pour l'investisseur.</P>
        </Chapter>

        <Chapter n="2" title="Les biais qui coûtent cher" color={T.violet}>
          <List items={[
            { t: "Aversion à la perte", d: "Une perte de 100 € fait 2 fois plus mal qu'un gain de 100 € fait plaisir (Kahneman). Conséquence : on coupe les gagnants trop tôt et on garde les perdants en espérant qu'ils remontent." },
            { t: "FOMO (Fear Of Missing Out)", d: "La peur de rater pousse à acheter au sommet d'une euphorie, juste avant la chute. Bitcoin à 70 k$ en 2024, l'IA en 2024-25 — combien achètent au pic puis voient -30 % ?" },
            { t: "Vente panique", d: "Lors d'une baisse, la peur fait vendre à perte ce qu'il aurait souvent fallu conserver. Mars 2020 : combien ont vendu à -30 %, puis vu le marché remonter à +50 % dans les 18 mois ?" },
            { t: "Excès de confiance", d: "Croire qu'on peut « battre le marché ». 95 % des gérants professionnels n'y arrivent pas sur 20 ans. Si eux n'y arrivent pas, c'est qu'il y a une raison structurelle." },
            { t: "Biais de récence", d: "Surpondérer les événements récents : « ça monte depuis 6 mois donc ça va continuer ». L'histoire montre que les marchés alternent expansions et corrections de manière imprévisible." },
            { t: "Biais de confirmation", d: "Chercher les info qui confirment ce qu'on pense déjà, ignorer ce qui contredit. Suivre uniquement des influenceurs qui partagent ton biais haussier/baissier." },
            { t: "Ancrage", d: "Se focaliser sur le prix d'achat comme référence absolue. « J'ai acheté à 50 €, je vends quand ça remonte à 50 € » même si la thèse a changé." },
          ]} color={T.violet} />
        </Chapter>

        <Chapter n="3" title="Les influenceurs : un risque à part" color={T.violet}>
          <P>Les réseaux sociaux ont créé une nouvelle catégorie de risque comportemental : les <B>finfluencers</B>. Beaucoup partagent des conseils financiers sans les compétences ni la déontologie d'un conseiller professionnel.</P>
          <List items={[
            { t: "Rémunération masquée", d: "Beaucoup sont payés par les courtiers (codes promo, partenariats). Leur recommandation n'est pas neutre. Vérifie toujours les mentions partenariat (#ad, #partenariat)." },
            { t: "Biais de survivance", d: "Les influenceurs qu'on voit sont ceux dont les paris ont marché. Les milliers qui se sont plantés ont disparu sans bruit. Tu vois le sommet de la pyramide, pas la base." },
            { t: "Effet de mode", d: "Aujourd'hui crypto, hier NFT, avant-hier daytrading. La structure du marketing pousse à promouvoir ce qui « buzz », pas ce qui est sain financièrement." },
            { t: "Conseil non personnalisé", d: "Même un bon conseil pour quelqu'un peut être mauvais pour toi. Le contexte personnel (âge, revenu, situation familiale, tolérance au risque) est unique." },
          ]} color={T.violet} />
        </Chapter>

        <Chapter n="4" title="Les remèdes pratiques" color={T.brand}>
          <List items={[
            { t: "Écrire sa stratégie", d: "Note sur papier ton allocation cible, tes versements automatiques, et les conditions auxquelles tu vendrais. Relis ce document quand tu doutes. La discipline écrite vaut 10 fois la discipline mentale." },
            { t: "Automatiser au max", d: "Virement automatique, rééquilibrage automatique sur certaines AV. Moins tu décides, moins tu peux te tromper." },
            { t: "Ne pas regarder son portefeuille trop souvent", d: "Une étude de Brad Barber : ceux qui regardent leur portefeuille quotidiennement ont des rendements inférieurs à ceux qui le regardent mensuellement. La volatilité court terme génère du stress et des décisions impulsives." },
            { t: "Avoir une « pause » avant toute action", d: "Règle des 24h : avant toute décision d'achat/vente impulsive, attendre 24 heures. Si tu en as toujours envie, agis. Sinon, c'était impulsif." },
            { t: "Tenir un journal de décisions", d: "Note pourquoi tu fais chaque mouvement. 6 mois plus tard, relis. Tu verras tes biais à l'œuvre — et tu progresseras." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="5" title="Le test de la nuit blanche revisité" color={T.violet}>
          <P>Imagine concrètement, dans 6 mois : ton portefeuille a baissé de 30 %. Ton ETF monde est passé de 20 000 € à 14 000 €. <em>Comment réagis-tu ?</em></P>
          <List items={[
            { t: "Si la réponse est : « je continue mes versements automatiques et je dors la nuit »", d: "Ton allocation est cohérente avec ton profil. Continue." },
            { t: "Si la réponse est : « je sais pas, j'aurais peur »", d: "Réduis ta part actions. Mieux vaut 50/50 actions/obligations qu'on tient 30 ans que 100 % actions qu'on lâche à -30 %." },
            { t: "Si la réponse est : « je vends pour limiter les pertes »", d: "Réduis encore plus, ou reste sur des supports sécuritaires. L'investissement n'est pas un domaine où la mauvaise psychologie peut être compensée par la rentabilité — tu vas perdre malgré une stratégie correcte." },
          ]} color={T.violet} />
        </Chapter>

        <Chapter n="6" title="La check-list avant de se lancer" color={T.coral}>
          <List items={[
            "Mon fonds d'urgence (3-6 mois) est-il déjà constitué ?",
            "Puis-je laisser cet argent investi au moins 5 ans sans en avoir besoin ?",
            "Ai-je accepté, mentalement, de pouvoir voir la valeur baisser temporairement de 30-40 % ?",
            "Les frais du support choisi sont-ils raisonnables (< 0,5 %/an pour un ETF, < 1 % pour une AV) ?",
            "Ma stratégie est-elle écrite quelque part, pour me forcer à m'y tenir en cas de panique ou de FOMO ?",
            "Ai-je diversifié géographiquement et sectoriellement ?",
            "Mon allocation actions/obligations correspond-elle à ma tolérance émotionnelle ?",
            "Ai-je un système automatique de versements pour ne pas dépendre de ma volonté ?",
          ]} color={T.coral} />
          <Note color={T.coral} title="Avertissement clé">Les performances passées ne préjugent jamais des performances futures. Aucun placement présenté ici n'est une recommandation : ce sont des catégories à comprendre, pas des incitations à acheter.</Note>
        </Chapter>

        <Chapter n="7" title="Si tu te plantes : la récupération" color={T.violet}>
          <P>Tout le monde fait des erreurs au début. Ce qui compte n'est pas de ne jamais en faire — c'est de ne pas répéter les mêmes :</P>
          <List items={[
            "Sois honnête sur ce qui s'est passé. Pas d'excuses (« c'est la faute du marché »).",
            "Identifie le biais à l'œuvre. Était-ce du FOMO ? De la vente panique ?",
            "Écris la règle pour la prochaine fois. Exemple : « Aucun achat impulsif basé sur un post réseau social ».",
            "Reprends progressivement, sans tenter de « se refaire » d'un coup. C'est exactement ce qui transforme une erreur ponctuelle en spirale.",
          ]} color={T.violet} />
        </Chapter>

        <Quiz color={T.violet} questions={[
          { q: "Qu'est-ce que le FOMO en investissement ?", options: ["Un type d'obligation", "La peur de rater une opportunité, qui pousse à acheter au sommet", "Une stratégie professionnelle", "Une taxe sur les plus-values"], answer: 1, explain: "Fear Of Missing Out : la peur de rater pousse à acheter quand tout le monde en parle (et que les prix sont déjà hauts). Statistiquement, c'est le pire moment pour entrer." },
          { q: "Quel point doit être validé AVANT d'investir ?", options: ["Avoir reçu un tuyau d'un ami", "Avoir constitué son fonds d'urgence", "Suivre un influenceur crypto", "Avoir 50 000 € disponibles"], answer: 1, explain: "Le fonds d'urgence est la fondation. Investir sans ce filet de sécurité expose à devoir vendre en urgence, potentiellement au pire moment." },
          { q: "Selon Kahneman, une perte de 100 € est ressentie comme :", options: ["Équivalente à un gain de 100 €", "Environ 2 fois plus douloureuse qu'un gain de 100 € est plaisant", "Moins douloureuse qu'on ne le pense", "Sans impact émotionnel"], answer: 1, explain: "L'aversion à la perte (loss aversion) fait que les pertes pèsent ~2x plus que les gains équivalents. C'est ce qui pousse à couper les gagnants trop tôt et à garder les perdants trop longtemps." },
        ]} />
      </div>
    ),
  },

  {
    id: "allocation", Icon: LayoutGrid, title: "Construire son allocation",
    summary: "Combien d'actions, combien d'obligations, combien de cash ? Le seul vrai choix d'investisseur.",
    intro: "Les études convergent : c'est l'allocation entre classes d'actifs — et non le choix précis des titres — qui explique l'essentiel des résultats long terme.",
    words: 1800,
    content: (
      <div>
        <Chapter n="1" title="L'allocation, plus importante que le stock-picking" color={T.coral}>
          <P>Une étude classique (Brinson, Hood, Beebower 1986, reproduite plusieurs fois depuis) attribue <B>plus de 90 % de la variance des rendements d'un portefeuille</B> à son allocation entre grandes classes d'actifs (actions / obligations / cash), et moins de 10 % au choix précis des titres ou au timing d'achat.</P>
          <P>En clair : passer du temps à choisir « la bonne action » est presque toujours un mauvais usage du temps. Définir une allocation cohérente avec son horizon et sa tolérance au risque est l'arbitrage qui compte vraiment.</P>
          <Note color={T.coral}>Cette conclusion explique pourquoi les fonds d'investissement à gestion passive (ETF indiciels) ont gagné autant de parts de marché : ils acceptent qu'on ne peut pas battre le marché en moyenne, et se concentrent sur l'allocation et les frais bas.</Note>
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
            { t: "Prudent (20-30 % actions)", d: "20-30 % actions, 50-60 % obligations, 20 % cash. Volatilité faible mais rendement réel parfois proche de zéro après inflation. Adapté à un horizon court (5 ans) ou à une personne très averse au risque." },
            { t: "Équilibré (60/40)", d: "60 % actions, 40 % obligations. L'un des portefeuilles les plus étudiés et plus stables, recommandé par nombre d'investisseurs institutionnels. Rendement long terme historique : ~7 %/an avec une volatilité raisonnable." },
            { t: "Offensif (80-100 % actions)", d: "Profil jeune, horizon > 10 ans, capable d'encaisser une baisse temporaire de 30-50 % sans paniquer. Rendement attendu plus élevé (~7-9 %/an historiquement) mais volatilité forte." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="4" title="Allocations type par profil" color={T.coral}>
          <Card style={{ padding: 0, overflow: "hidden", marginBottom: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", borderBottom: `1px solid ${T.line}` }}>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5 }}>Profil</div>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.coral, textTransform: "uppercase" }}>Actions</div>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.brand2, textTransform: "uppercase" }}>Obligations</div>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.brand, textTransform: "uppercase" }}>Sécurisé</div>
            </div>
            {[
              ["Étudiant qui démarre", "60-80%", "10-20%", "10-20%"],
              ["Jeune actif 25-30 ans", "75-85%", "10-15%", "5-10%"],
              ["Couple 35-45 ans", "60-70%", "20-30%", "10%"],
              ["Quinquagénaire", "40-50%", "30-40%", "15-25%"],
              ["Pré-retraite 60-65", "20-30%", "40-50%", "25-30%"],
              ["Retraité actif", "20-30%", "30-40%", "30-50%"],
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", borderBottom: i < 5 ? `1px solid ${T.line}` : "none" }}>
                <div style={{ padding: "11px 14px", fontSize: 13, color: T.text, fontWeight: 600 }}>{row[0]}</div>
                <div style={{ padding: "11px 14px", fontSize: 13, color: T.textDim }}>{row[1]}</div>
                <div style={{ padding: "11px 14px", fontSize: 13, color: T.textDim }}>{row[2]}</div>
                <div style={{ padding: "11px 14px", fontSize: 13, color: T.textDim }}>{row[3]}</div>
              </div>
            ))}
          </Card>
          <Note color={T.coral}>Ces fourchettes sont indicatives. La tolérance au risque psychologique compte autant que l'âge — un jeune averse au risque peut très bien rester à 50 % actions sans culpabiliser.</Note>
        </Chapter>

        <Chapter n="5" title="Diversification géographique à l'intérieur des actions" color={T.coral}>
          <P>Au sein de la part actions, la diversification géographique est elle-même un choix :</P>
          <List items={[
            { t: "100 % monde (MSCI World ou ACWI)", d: "Simplicité maximale. Couvre 23 pays développés (World) ou 47 incluant les émergents (ACWI). ~60 % US, 20 % autres développés, 10-15 % émergents si ACWI." },
            { t: "Splitter US / Europe / Émergents", d: "Plus de contrôle. Par exemple 50 % S&P 500, 25 % Europe, 15 % émergents, 10 % small caps. À rééquilibrer périodiquement." },
            { t: "Biais domestique", d: "Surpondérer l'Europe ou la France en pensant « mieux connaître ». Souvent contre-productif : la France représente ~3 % du PIB mondial, surpondérer la concentre le risque." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="6" title="Rééquilibrer périodiquement" color={T.coral}>
          <P>Avec le temps, les classes performantes prennent du poids et le portefeuille dérive de la cible. Un rééquilibrage <B>annuel ou semestriel</B> permet de :</P>
          <List items={[
            "Conserver le niveau de risque souhaité (sinon on devient « plus actions » que prévu après une bonne année).",
            "Vendre haut et acheter bas mécaniquement (on allège la classe qui a monté pour renforcer celle qui a baissé).",
            "S'imposer une discipline qui contre le biais émotionnel.",
          ]} color={T.coral} />
          <DeepDive title="Quand rééquilibrer concrètement ?">
            Deux approches :<br />
            • <B>Calendrier fixe</B> : tous les 6 ou 12 mois, le 1er janvier par exemple. Simple à mettre en place.<br />
            • <B>Seuil de déviation</B> : rééquilibrer quand une classe dévie de plus de 5 % de sa cible. Plus efficace mais demande de surveiller.<br />
            Pour la plupart des particuliers, le calendrier annuel est suffisant et évite les frais excessifs liés à des rééquilibrages trop fréquents.
          </DeepDive>
        </Chapter>

        <Chapter n="7" title="La glide path : ajuster avec l'âge" color={T.coral}>
          <P>Les fonds « cycle de vie » (target-date funds) appliquent automatiquement une « glide path » : la part actions diminue progressivement à mesure que l'on s'approche d'un objectif (retraite, achat). Le PER en mode « gestion pilotée par horizon » fonctionne ainsi par défaut.</P>
          <P>Avantage : zéro effort, ajustement automatique. Inconvénient : frais souvent plus élevés que de gérer soi-même, et glide path standardisée qui ne correspond pas à ta situation spécifique.</P>
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "D'après la règle « 100 − âge », quelle part en actions à 30 ans ?", options: ["100 %", "≈ 70 %", "30 %", "0 %"], answer: 1, explain: "100 − 30 = 70 %. À 30 ans avec horizon long, on peut se permettre une forte exposition actions. Le reste va en obligations et cash." },
          { q: "Selon les études classiques (Brinson et al.), qu'est-ce qui explique l'essentiel de la performance long terme ?", options: ["Le timing d'entrée", "Le choix précis des titres", "L'allocation entre classes d'actifs", "Le hasard"], answer: 2, explain: "Plus de 90 % de la variance des rendements est expliquée par l'allocation (% actions / obligations / cash) — pas par le stock-picking ni par le timing. C'est le levier le plus important." },
          { q: "Pourquoi rééquilibrer périodiquement ?", options: ["Pour réduire les impôts", "Pour vendre haut et acheter bas mécaniquement", "Pour augmenter le risque", "C'est obligatoire légalement"], answer: 1, explain: "Le rééquilibrage force à vendre une partie de ce qui a monté et racheter ce qui a baissé. Cela maintient le niveau de risque cible ET applique une discipline contraire à l'instinct (qui pousse à laisser courir les gagnants et fuir les perdants)." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "responsable", Icon: Leaf, title: "Investissement responsable (ESG/ISR)",
  summary: "Investir en accord avec ses valeurs : entre vraie démarche, marketing et greenwashing.",
  intro: "L'idée séduit beaucoup de jeunes investisseurs. Voici ce que ça veut dire concrètement, et comment trier le sérieux du superficiel.",
  words: 1700,
  content: (
    <div>
      <Chapter n="1" title="Les acronymes essentiels" color={T.coral}>
        <List items={[
          { t: "ESG (Environnement, Social, Gouvernance)", d: "Critères extra-financiers qu'un fonds prend en compte en plus du rendement. Une entreprise est notée sur son impact environnemental, ses pratiques sociales (conditions de travail, diversité) et la qualité de sa gouvernance (transparence, indépendance du conseil)." },
          { t: "ISR (Investissement Socialement Responsable)", d: "Label français officiel attribué aux fonds appliquant des critères ESG vérifiés. Audit externe annuel." },
          { t: "Greenfin", d: "Label français plus strict, focalisé sur la transition écologique. Exclut explicitement les énergies fossiles et le nucléaire." },
          { t: "Finansol", d: "Label finance solidaire — flèche une partie des encours vers des projets à fort impact social (logement, insertion, environnement)." },
          { t: "SFDR (règlement européen)", d: "Classe les fonds en Article 6 (basique), Article 8 (« promeut » des caractéristiques ESG), Article 9 (« objectif » de durabilité). Les articles 8 et 9 sont les plus exigeants." },
        ]} color={T.coral} />
      </Chapter>

      <Chapter n="2" title="Les trois grandes approches" color={T.coral}>
        <Card style={{ padding: 22, background: T.bgSoft }}>
          <List items={[
            { t: "Exclusion (best-out)", d: "Le fonds exclut certains secteurs jugés non responsables (armement, tabac, charbon, jeux d'argent…). Approche défensive, simple à comprendre. C'est l'approche historique." },
            { t: "Sélection (best-in-class)", d: "Le fonds garde les meilleures entreprises de chaque secteur selon des critères ESG, sans en exclure entièrement. Plus fin, mais conserve potentiellement des secteurs polluants. L'approche dominante des grands fonds." },
            { t: "Impact investing", d: "Le fonds cible explicitement des projets à impact positif mesurable (énergies renouvelables, accès à l'eau, éducation). C'est l'approche la plus exigeante, généralement réservée aux fonds spécialisés." },
          ]} color={T.coral} />
        </Card>
      </Chapter>

      <Chapter n="3" title="Le piège du greenwashing" color={T.coral}>
        <P>Tous les fonds estampillés « ESG » ou « durable » ne se valent pas. Quelques mauvaises pratiques courantes :</P>
        <List items={[
          { t: "Étiquettes auto-attribuées", d: "Un fonds qui se dit « durable » sans aucun label officiel ne respecte parfois aucune contrainte vérifiable." },
          { t: "Exclusions cosmétiques", d: "Un fonds qui n'exclut « que » les armes controversées (mines antipersonnel, bombes à sous-munitions) garde l'essentiel de l'industrie d'armement classique." },
          { t: "Mêmes entreprises, ratio inversé", d: "Un ETF « ESG monde » peut contenir 80 % des mêmes entreprises qu'un ETF monde classique, juste pondérées différemment. La différence d'impact réel est marginale." },
          { t: "Notation ESG hétérogène", d: "Une même entreprise peut être notée AAA par une agence et BB par une autre, selon les pondérations. Il n'existe pas de norme universelle." },
        ]} color={T.coral} />
        <DeepDive title="L'exemple éclairant des ETF « ESG monde »">
          Beaucoup d'ETF « ESG monde » détiennent Apple, Microsoft, Alphabet, Amazon comme principales positions — exactement comme les ETF monde non-ESG. La différence ? Les pondérations sont légèrement réajustées et certaines entreprises de tabac ou d'énergie fossile sont sorties. L'impact carbone du portefeuille est typiquement réduit de 10-30 %, mais le portefeuille n'est pas radicalement différent. C'est mieux que rien — mais loin d'un investissement « propre » au sens strict.
        </DeepDive>
      </Chapter>

      <Chapter n="4" title="Les controverses de la notation ESG" color={T.coral}>
        <P>Les notations ESG ont fait l'objet de critiques fondées. Le principal souci : <B>les agences (MSCI, Sustainalytics, ISS) notent surtout le risque ESG SUR l'entreprise, pas l'impact DE l'entreprise sur le monde</B>.</P>
        <Card style={{ padding: 18, background: T.bgSoft }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>L'exemple absurde du tabac</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
            Un cigarettier comme Philip Morris peut avoir une bonne note ESG : faible empreinte carbone (les usines polluent peu), bonne gouvernance, conditions de travail correctes. Le fait que son produit tue ~8 millions de personnes/an n'est pas vraiment pris en compte dans la notation standard — c'est un « risque » pour l'entreprise (procès, réglementation) plus qu'un impact négatif évalué.
          </div>
        </Card>
      </Chapter>

      <Chapter n="5" title="Performance : mythe et réalité" color={T.coral}>
        <P>Question récurrente : <em>investir « responsable » coûte-t-il en rendement ?</em></P>
        <P>Les méta-analyses récentes (Friede, Busch & Bassen 2015, puis MSCI sur 2010-2023) montrent que la performance des fonds ESG est <B>statistiquement équivalente</B> à celle des fonds classiques sur le long terme. Sur des périodes courtes, on observe des écarts dans les deux sens — en 2022, les fonds excluant le pétrole ont sous-performé temporairement à cause de la flambée des prix de l'énergie.</P>
        <Note color={T.coral}>Conclusion prudente : le surcoût de rendement n'est ni évident, ni rédhibitoire. Le choix se fait davantage sur les valeurs personnelles que sur l'espérance de gain.</Note>
      </Chapter>

      <Chapter n="6" title="Comment vérifier sérieusement" color={T.brand}>
        <List items={[
          { t: "Chercher les labels officiels", d: "ISR, Greenfin, Finansol — vérifier que le fonds est sur la liste publique sur lelabelisr.fr, label-greenfin.fr, finansol.org." },
          { t: "Lire le document d'information clé (DIC)", d: "Section « politique d'investissement durable » obligatoire depuis SFDR (règlement européen). Articles 8 et 9 sont les plus exigeants." },
          { t: "Regarder les principales positions", d: "Les rapports semestriels listent les 10 principales positions. Si tu reconnais des entreprises douteuses, l'étiquette est trompeuse." },
          { t: "Comparer l'empreinte carbone", d: "Beaucoup de fonds publient leur empreinte carbone (tonnes CO2/M€ investis). Comparer à un fonds classique te donne une idée concrète de l'écart." },
          { t: "Vérifier le taux de rotation", d: "Un fonds qui achète/vend constamment paye plus de frais et a un impact carbone augmenté par les transactions." },
        ]} color={T.brand} />
      </Chapter>

      <Chapter n="7" title="Au-delà du fonds : les alternatives" color={T.coral}>
        <P>Si tu veux un impact plus concret que la simple notation ESG :</P>
        <List items={[
          { t: "Investir dans des PME locales", d: "Plateformes de crowdfunding (WiSEED, Lita, Tudigo) flèchent les fonds vers des PME durables. Rendement variable (5-9 %), risque élevé." },
          { t: "Livrets d'épargne solidaires", d: "Crédit Coopératif, Nef : ton épargne finance des projets sélectionnés (logement, écologie, insertion)." },
          { t: "Investissement direct dans son entreprise", d: "Acheter des panneaux solaires, isoler son logement : ROI souvent supérieur aux placements et impact local direct." },
          { t: "Réduire avant tout", d: "Le levier le plus puissant pour réduire son empreinte n'est pas financier mais comportemental (mobilité, alimentation, équipement). Investir « propre » ne compense pas un mode de vie carboné." },
        ]} color={T.coral} />
      </Chapter>

      <Quiz color={T.coral} questions={[
        { q: "Qu'est-ce qu'un fonds ISR ?", options: ["Un fonds réservé aux retraités", "Un fonds appliquant des critères ESG vérifiés par un audit externe (label français)", "Un fonds garanti par l'État", "Un fonds 100 % énergie solaire"], answer: 1, explain: "ISR (Investissement Socialement Responsable) est un label français officiel attribué à des fonds qui appliquent des critères Environnement, Social, Gouvernance vérifiés. C'est une garantie minimale mais pas une garantie d'impact maximal." },
        { q: "Selon les méta-analyses récentes, la performance long terme des fonds ESG vs classiques est :", options: ["Toujours supérieure", "Toujours inférieure", "Statistiquement équivalente sur le long terme", "Garantie par l'État"], answer: 2, explain: "Les études (Friede et al. 2015 + MSCI 2010-2023) montrent une performance équivalente sur le long terme. Le choix se fait donc sur les valeurs personnelles, sans coût significatif attendu en rendement." },
        { q: "Que classe la réglementation européenne SFDR ?", options: ["Les actions par secteur", "Les fonds par niveau d'engagement ESG (Articles 6, 8, 9)", "Les pays par développement", "Les banques par taille"], answer: 1, explain: "SFDR classe les fonds en trois catégories : Article 6 (basique), Article 8 (promeut des caractéristiques ESG), Article 9 (objectif de durabilité). C'est la base à vérifier dans les documents." },
      ]} />
    </div>
  ),
});

export default function Invest(p) {
  return <TopicHub pageId="invest" topics={TOPICS} {...p} />;
}
