import React from "react";
import { Link, Mountain, AlertTriangle, Compass, ShieldCheck } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List } from "../ui/primitives.jsx";
import { VBars, VizFrame, VizCaption, ScamScatter } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "bases", Icon: Link, title: "Les bases sans jargon",
    summary: "Blockchain, cryptomonnaie, Web3 : enfin des définitions claires pour comprendre de quoi on parle.",
    intro: "Avant de juger, comprendre. Voici les briques de base expliquées simplement.",
    words: 750,
    content: (
      <div>
        <Chapter n="1" title="Trois mots à connaître" color={T.violet}>
          <List items={[
            { t: "Blockchain", d: "Un grand registre numérique partagé et décentralisé. Au lieu d'une banque qui tient les comptes, ce sont des milliers d'ordinateurs qui valident et conservent chaque transaction — ce qui rend la falsification très difficile." },
            { t: "Cryptomonnaie", d: "Un actif numérique qui circule sur une blockchain (Bitcoin, Ethereum…). Sa valeur dépend uniquement de l'offre et de la demande : pas d'usine ou de bénéfices derrière." },
            { t: "Web3", d: "Un ensemble d'applications bâties sur la blockchain : finance décentralisée (DeFi), NFT, portefeuilles numériques, organisations autonomes (DAO)." },
          ]} color={T.violet} />
        </Chapter>
        <Chapter n="2" title="Décentralisé, concrètement ?" color={T.violet}>
          <DeepDive title="Ce que « décentralisé » implique vraiment">Dans le système classique, ta banque est un tiers de confiance qui garde la trace de qui possède quoi. Sur une blockchain, ce rôle est réparti entre de nombreux participants. Avantage théorique : pas d'autorité unique qui peut censurer. Revers : <B>pas de service client, pas de recours en cas d'erreur ou de vol</B>, et c'est à toi seul de sécuriser tes accès. Une transaction validée est irréversible, même si tu t'es trompé d'adresse.</DeepDive>
        </Chapter>
        <Chapter n="3" title="Wallet, clé privée, seed phrase" color={T.violet}>
          <P>Un <B>wallet</B> (portefeuille) stocke les clés cryptographiques qui prouvent que tu possèdes tes actifs. La <B>clé privée</B> est le mot de passe absolu : qui la possède, possède les fonds. La <B>seed phrase</B> (12 ou 24 mots) en est une version humainement lisible. <em>Ne jamais la partager, jamais la stocker en ligne, et toujours la sauvegarder physiquement.</em></P>
          <Note color={T.coral}>Perdre sa seed phrase = perdre l'accès définitivement. Aucun « mot de passe oublié » n'existe sur une blockchain.</Note>
        </Chapter>
        <Quiz color={T.violet} questions={[
          { q: "Si tu perds ta seed phrase, que se passe-t-il ?", options: ["Tu peux la régénérer avec ton e-mail", "Tu perds l'accès à tes fonds définitivement", "Le service client te la renvoie sous 48h", "Elle est automatiquement sauvegardée"], answer: 1, explain: "Il n'y a aucun mécanisme de récupération sur la blockchain. La seed phrase doit être sauvegardée hors-ligne, idéalement sur un support physique stocké en lieu sûr." },
        ]} />
      </div>
    ),
  },
  {
    id: "risques", Icon: Mountain, title: "Pourquoi c'est si risqué",
    summary: "Volatilité extrême, faible régulation, erreurs irréversibles : trois risques qui se cumulent.",
    intro: "L'un des domaines les plus dangereux pour un débutant. Voici pourquoi, en détail.",
    words: 820,
    content: (
      <div>
        <Chapter n="1" title="Trois risques cumulés" color={T.coral}>
          <List items={[
            { t: "Volatilité extrême", d: "Il n'est pas rare qu'un crypto-actif perde 50 % ou plus en quelques semaines. Les variations de ±10 % en une journée sont banales." },
            { t: "Faible régulation", d: "Peu de protections en cas de fraude, de piratage ou de faillite d'une plateforme. Si elle disparaît, tes fonds aussi (FTX, Celsius, Mt. Gox…)." },
            { t: "Risque technique irréversible", d: "Une mauvaise adresse ou une clé privée perdue entraîne une perte définitive. Aucune annulation possible." },
          ]} color={T.coral} />
          <VizFrame title="Ampleur des variations typiques sur un an (illustration)">
            <VBars data={[
              { label: "Livret", v: 2, color: T.brand },
              { label: "ETF actions", v: 25, color: T.accent },
              { label: "Action seule", v: 50, color: T.coral },
              { label: "Crypto majeure", v: 80, color: T.violet },
              { label: "Petit token", v: 95, color: T.coral },
            ]} unit=" %" max={100} />
            <VizCaption>Amplitude de variation indicative (haut-bas sur l'année). Plus la barre est haute, plus ça bouge — dans les deux sens.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="2" title="La règle d'or" color={T.violet}>
          <Note color={T.violet} title="Règle de prudence">N'engage jamais une somme que tu ne peux pas te permettre de perdre <B>entièrement</B>. Cette règle, partagée par tous les observateurs sérieux, est encore plus vraie ici qu'ailleurs.</Note>
          <P>Une formule défensive très utilisée : si on s'y intéresse, plafonner à <B>5 % maximum</B> du patrimoine investi, et seulement après avoir un fonds d'urgence solide et une épargne diversifiée par ailleurs.</P>
        </Chapter>
        <Quiz color={T.coral} questions={[
          { q: "Une plateforme crypto fait faillite (comme FTX en 2022). Que deviennent tes fonds ?", options: ["Garantis par l'État jusqu'à 100 000 €", "Remboursés par une assurance obligatoire", "Souvent perdus ou bloqués des années dans une procédure collective", "Transférés automatiquement chez un concurrent"], answer: 2, explain: "Les plateformes crypto n'ont en général pas la même protection que les banques. Les fonds peuvent être perdus, ou bloqués des années (FTX a duré plus de 2 ans en procédure)." },
        ]} />
      </div>
    ),
  },
  {
    id: "arnaques", Icon: AlertTriangle, title: "Repérer les arnaques",
    summary: "Le sujet le plus important : les signaux d'alerte qui doivent te faire fuir immédiatement.",
    intro: "Les escroqueries sont massives dans ce domaine. Savoir les reconnaître est la meilleure protection.",
    words: 900,
    content: (
      <div>
        <Chapter n="1" title="Les signaux d'alerte" color={T.coral}>
          <List items={[
            { t: "Rendements « garantis »", d: "Toute promesse de gains fixes et élevés sans risque est presque toujours une arnaque (type pyramide de Ponzi)." },
            { t: "Urgence et pression", d: "« Dépêche-toi », « tu vas rater l'occasion » : la précipitation est conçue pour t'empêcher de réfléchir." },
            { t: "Opacité totale", d: "Équipe anonyme, documentation floue, projet invérifiable : autant de drapeaux rouges." },
            { t: "Sollicitation directe", d: "Un inconnu qui te contacte pour t'« aider à investir », un lien à cliquer pour transférer des fonds : fuis." },
            { t: "Tu dois recruter pour gagner", d: "Schéma pyramidal classique. Si la rémunération principale vient de tes filleuls, pas du produit, c'est une arnaque." },
          ]} color={T.coral} />
        </Chapter>
        <Chapter n="2" title="Visualiser la zone d'arnaque" color={T.coral}>
          <VizFrame title="Risque réel vs rendement promis">
            <ScamScatter />
            <VizCaption>Les vrais placements suivent la diagonale (plus de rendement = plus de risque). Tout ce qui promet beaucoup sans risque appartient à la zone d'arnaque.</VizCaption>
          </VizFrame>
        </Chapter>
        <Chapter n="3" title="Une arnaque en plein essor" color={T.coral}>
          <DeepDive title="L'arnaque du « pig butchering »">Un inconnu noue une relation de confiance (amitié ou romance) sur plusieurs semaines, voire plusieurs mois, puis propose une « opportunité crypto » exceptionnelle. La victime voit d'abord de faux gains sur une plateforme bidon, est encouragée à investir toujours plus, parfois à emprunter… jusqu'à ce que tout disparaisse. Les pertes individuelles atteignent souvent <B>plusieurs centaines de milliers d'euros</B>. La leçon : <B>ne jamais mélanger relation personnelle et conseil financier non sollicité</B>, surtout en ligne.</DeepDive>
        </Chapter>
        <Quiz color={T.coral} questions={[
          { q: "Tu reçois un DM d'un inconnu charmant qui te propose une opportunité crypto à 20 %/mois. Que fais-tu ?", options: ["J'investis un peu pour tester", "Je demande à voir les preuves", "Je bloque et signale : tous les signaux d'arnaque sont là", "Je transmets l'offre à mes proches"], answer: 2, explain: "Sollicitation non demandée + rendement irréaliste + pression émotionnelle (relation construite artificiellement) = pig butchering ou Ponzi. Aucun investissement légitime ne se vend par DM." },
          { q: "Quelle promesse est le signal d'arnaque le plus universel ?", options: ["Un projet open-source", "« Rendement garanti élevé sans risque »", "Une équipe identifiée publiquement", "Une régulation officielle (AMF, etc.)"], answer: 1, explain: "Aucun produit financier sérieux ne combine ces trois mots. La promesse est le marqueur n°1 des Ponzi, depuis Madoff jusqu'aux escroqueries crypto actuelles." },
        ]} />
      </div>
    ),
  },
  {
    id: "esprit", Icon: Compass, title: "Garder l'esprit critique",
    summary: "Si on s'y intéresse malgré tout : les précautions de base et les réflexes valables partout.",
    intro: "L'esprit critique est, au fond, le meilleur outil financier qui soit — bien au-delà de la crypto.",
    words: 720,
    content: (
      <div>
        <Chapter n="1" title="Si on s'y intéresse quand même" color={T.violet}>
          <List items={[
            "Se former d'abord, investir ensuite — jamais l'inverse.",
            "N'y consacrer qu'une part minime de son patrimoine (≤ 5 %), et seulement après le fonds d'urgence.",
            "Privilégier les plateformes régulées et reconnues (enregistrées AMF en France) plutôt que des sites obscurs.",
            "Se méfier de tout ce qui est « trop beau pour être vrai » : ça l'est presque toujours.",
            "Sauvegarder physiquement sa seed phrase, hors-ligne, idéalement dans deux endroits différents.",
          ]} color={T.violet} />
        </Chapter>
        <Chapter n="2" title="Des réflexes valables partout" color={T.brand}>
          <P>Au-delà de la crypto, ces réflexes valent pour tout produit financier « miracle » : se méfier de ce qui paraît trop beau, vérifier les sources, ne jamais décider sous pression émotionnelle, et se rappeler la loi fondamentale — aucun rendement élevé n'existe sans risque correspondant.</P>
          <Note color={T.brand}>L'esprit critique se cultive : prends 24h avant toute décision financière importante, demande l'avis d'au moins une personne extérieure, et vérifie l'identité réelle de qui te conseille.</Note>
        </Chapter>
        <Quiz color={T.violet} questions={[
          { q: "Selon l'approche prudente, quelle part maximale du patrimoine consacrer à la crypto ?", options: ["50 %", "20 %", "Maximum 5 %", "100 %, c'est l'avenir"], answer: 2, explain: "Le consensus défensif : maximum 5 % du patrimoine investi, et uniquement après un fonds d'urgence solide. La volatilité extrême et le risque de perte totale rendent toute exposition plus importante très risquée." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "premierachat", Icon: ShieldCheck, title: "Premier achat : la check-list sécurité",
  summary: "Si tu décides de t'y intéresser malgré tout : 10 étapes pour ne pas perdre tes fonds dès le départ.",
  intro: "Cette thématique ne te dit pas d'investir en crypto. Mais si tu le fais, voici comment ne pas te faire avoir bêtement sur la technique.",
  words: 900,
  content: (
    <div>
      <Chapter n="1" title="Préalables (à valider AVANT d'acheter)" color={T.brand}>
        <List items={[
          "Mon fonds d'urgence (3-6 mois de dépenses) est constitué.",
          "Je n'investis qu'une somme que je peux perdre totalement sans impact sur mon quotidien.",
          "La part crypto ne dépasse pas 5 % de mon patrimoine investi.",
          "J'ai un revenu stable et pas de dette à taux élevé (revolving, conso) en cours.",
          "Je comprends que les variations de ±30 % sur quelques semaines sont normales et acceptables psychologiquement.",
        ]} color={T.brand} />
        <Note color={T.coral}>Si l'une de ces lignes n'est pas validée : reporte. C'est rarement le bon moment qui manque, c'est la situation personnelle qui n'est pas prête.</Note>
      </Chapter>
      <Chapter n="2" title="Choisir une plateforme sérieuse" color={T.violet}>
        <P>En France, exiger une plateforme enregistrée <B>PSAN auprès de l'AMF</B>. La liste officielle est disponible sur le site de l'AMF. Cela ne garantit pas qu'elle ne fera pas faillite (cf. FTX qui était régulé partiellement), mais cela élimine les pires arnaques.</P>
        <List items={[
          { t: "Critères positifs", d: "Enregistrement PSAN/MiCA, équipe identifiée, support client réactif, ancienneté > 5 ans, transparence sur les frais." },
          { t: "Signaux d'alerte", d: "Plateforme nouvelle, frais cachés, retraits soudain « en maintenance », promesse de rendement fixe, présence uniquement sur Telegram/Discord." },
        ]} color={T.violet} />
      </Chapter>
      <Chapter n="3" title="Sécuriser son compte" color={T.brand}>
        <List items={[
          { t: "Mot de passe unique et long (20+ caractères)", d: "Générer via un gestionnaire de mots de passe (Bitwarden, 1Password). JAMAIS le réutiliser sur un autre site." },
          { t: "2FA obligatoire", d: "Pas par SMS (vulnérable au SIM-swapping) mais via une appli (Google Authenticator, Authy) ou idéalement une clé physique (YubiKey)." },
          { t: "Adresse e-mail dédiée", d: "Crée une e-mail spécifique à tes comptes financiers, jamais utilisée pour les newsletters ou les inscriptions diverses." },
          { t: "Activer les alertes", d: "Notification à chaque connexion et chaque retrait. Tu détectes une intrusion en quelques minutes." },
        ]} color={T.brand} />
      </Chapter>
      <Chapter n="4" title="Passer son premier ordre" color={T.violet}>
        <List items={[
          { t: "Commencer petit", d: "Ton premier achat sert à comprendre la procédure, pas à faire de la performance. 20-50 € suffisent largement." },
          { t: "Acheter en DCA", d: "Mieux qu'un gros versement en une fois : étaler en versements réguliers (50 € le 1er de chaque mois) lisse le prix d'achat et l'émotion." },
          { t: "Préférer les actifs majeurs", d: "Bitcoin et Ethereum représentent l'essentiel de la capitalisation. Les « petits tokens » sont la principale source d'arnaques (rug pull, manipulation)." },
          { t: "Vérifier les frais", d: "Frais de spread + frais de transaction. Sur certaines plateformes grand public, ils dépassent 1,5 % par achat — équivalent à plusieurs années de frais d'ETF en une seule opération." },
        ]} color={T.violet} />
      </Chapter>
      <Chapter n="5" title="Hot wallet vs cold wallet" color={T.brand}>
        <P>Tant que tes crypto sont sur la plateforme, tu n'en es pas vraiment propriétaire — la plateforme l'est. La règle vieille de la communauté : <em>« Not your keys, not your coins »</em>.</P>
        <List items={[
          { t: "Petits montants (< 500 €)", d: "OK de les laisser sur la plateforme PSAN, le risque est limité." },
          { t: "Montants moyens (500 - 5 000 €)", d: "Envisager un wallet logiciel (MetaMask, Phantom). Tu détiens la clé privée mais l'appareil reste connecté à internet." },
          { t: "Gros montants", d: "Cold wallet (Ledger, Trezor) : la clé privée ne quitte jamais l'appareil. Le coût (~80 €) est négligeable par rapport au risque évité." },
        ]} color={T.brand} />
        <DeepDive title="La seed phrase, encore et toujours">Quel que soit ton wallet, la seed phrase (12 ou 24 mots) est la clé absolue. Règles non négociables : <B>jamais en ligne, jamais en photo, jamais dans un coffre cloud, jamais à un « support technique »</B>. La sauvegarde physique (papier, métal gravé) dans deux endroits distincts est la pratique standard.</DeepDive>
      </Chapter>
      <Chapter n="6" title="Déclarer ses gains" color={T.accent}>
        <P>Les plus-values de cession de crypto par un particulier français sont imposées au <B>PFU de 30 %</B> (sauf option au barème). À déclarer via le formulaire 2086, en complément de la déclaration principale. Voir la thématique « Déclarer ses impôts » de la section Fiscalité.</P>
        <Note color={T.accent}>Les transferts entre tes propres wallets ne sont PAS des cessions. Seule une conversion en euros, en stablecoin (USDT, USDC) ou un paiement en crypto déclenche l'imposition.</Note>
      </Chapter>
      <Quiz color={T.violet} questions={[
        { q: "Quelle authentification 2FA est la moins sécurisée ?", options: ["Une appli authenticator (Google Authenticator, Authy)", "Une clé physique YubiKey", "Le SMS", "Pas de 2FA du tout (toujours pire)"], answer: 2, explain: "Le SMS est vulnérable au SIM-swapping : un attaquant fait transférer ton numéro vers une autre carte SIM puis intercepte tes codes. Préfère une appli authenticator ou une clé physique." },
        { q: "Tu détiens 2 000 € en crypto. Où les laisser ?", options: ["Sur une plateforme PSAN (limite raisonnable)", "Sur 3 plateformes différentes", "En cash sous le matelas", "Sur la plateforme inconnue qui m'a contacté en DM"], answer: 0, explain: "Pour ce montant, une plateforme PSAN reconnue reste raisonnable. Au-delà, un wallet personnel (logiciel ou matériel) devient plus pertinent. JAMAIS sur une plateforme inconnue sollicitée par DM — c'est le marqueur d'arnaque le plus universel." },
      ]} />
    </div>
  ),
});

export default function Crypto(p) {
  return <TopicHub pageId="crypto" topics={TOPICS} {...p} />;
}
