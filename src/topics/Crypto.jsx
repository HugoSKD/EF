import React from "react";
import { Link, Mountain, AlertTriangle, Compass, ShieldCheck } from "lucide-react";
import { T } from "../theme.js";
import { Chapter, P, B, Note, DeepDive, List, Card } from "../ui/primitives.jsx";
import { VBars, VizFrame, VizCaption, ScamScatter } from "../ui/charts.jsx";
import Quiz from "../ui/Quiz.jsx";
import TopicHub from "./TopicHub.jsx";

const TOPICS = [
  {
    id: "bases", Icon: Link, title: "Les bases sans jargon",
    summary: "Blockchain, cryptomonnaie, Web3 : enfin des définitions claires pour comprendre de quoi on parle.",
    intro: "Avant de juger, comprendre. Voici les briques de base expliquées simplement.",
    words: 1700,
    content: (
      <div>
        <Chapter n="1" title="Trois mots à connaître" color={T.violet}>
          <List items={[
            { t: "Blockchain", d: "Un grand registre numérique partagé et décentralisé. Au lieu d'une banque qui tient les comptes, ce sont des milliers d'ordinateurs qui valident et conservent chaque transaction — ce qui rend la falsification très difficile." },
            { t: "Cryptomonnaie", d: "Un actif numérique qui circule sur une blockchain (Bitcoin, Ethereum…). Sa valeur dépend uniquement de l'offre et de la demande : pas d'usine ou de bénéfices derrière." },
            { t: "Web3", d: "Un ensemble d'applications bâties sur la blockchain : finance décentralisée (DeFi), NFT, portefeuilles numériques, organisations autonomes (DAO)." },
          ]} color={T.violet} />
        </Chapter>

        <Chapter n="2" title="Comment fonctionne concrètement une transaction" color={T.violet}>
          <P>Quand tu envoies du Bitcoin à quelqu'un, voici ce qui se passe en simplifié :</P>
          <List items={[
            { t: "1. Tu signes la transaction", d: "Ton wallet utilise ta clé privée pour signer cryptographiquement une transaction. C'est l'équivalent d'un chèque." },
            { t: "2. La transaction est diffusée", d: "Elle apparaît dans un « pool » de transactions en attente, visible par tous les nœuds du réseau." },
            { t: "3. Validation par des « mineurs »", d: "Sur Bitcoin, des ordinateurs spécialisés résolvent un casse-tête mathématique pour avoir le droit d'ajouter un « bloc » de transactions à la blockchain. C'est le « Proof of Work » — gourmand en énergie." },
            { t: "4. Confirmation", d: "Une fois le bloc ajouté, ta transaction est confirmée. Sur Bitcoin, il faut attendre ~6 confirmations (1h) pour être considéré comme sûr." },
            { t: "5. Le destinataire voit le solde mis à jour", d: "Son wallet montre la nouvelle balance. Tout est public et vérifiable par n'importe qui sur la blockchain." },
          ]} color={T.violet} />
          <Note color={T.violet}>Le « Proof of Stake » (Ethereum depuis 2022) est une alternative : les validateurs « bloquent » du capital pour avoir le droit de valider. Bien moins énergivore que le Proof of Work.</Note>
        </Chapter>

        <Chapter n="3" title="Décentralisé, concrètement ?" color={T.violet}>
          <DeepDive title="Ce que « décentralisé » implique vraiment">
            Dans le système classique, ta banque est un tiers de confiance qui garde la trace de qui possède quoi. Sur une blockchain, ce rôle est réparti entre de nombreux participants. Avantage théorique : pas d'autorité unique qui peut censurer. Revers : <B>pas de service client, pas de recours en cas d'erreur ou de vol</B>, et c'est à toi seul de sécuriser tes accès. Une transaction validée est irréversible, même si tu t'es trompé d'adresse.
          </DeepDive>
        </Chapter>

        <Chapter n="4" title="Wallet, clé privée, seed phrase" color={T.violet}>
          <P>Un <B>wallet</B> (portefeuille) stocke les clés cryptographiques qui prouvent que tu possèdes tes actifs. La <B>clé privée</B> est le mot de passe absolu : qui la possède, possède les fonds. La <B>seed phrase</B> (12 ou 24 mots) en est une version humainement lisible. <em>Ne jamais la partager, jamais la stocker en ligne, et toujours la sauvegarder physiquement.</em></P>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple de seed phrase</div>
            <div style={{ fontSize: 13, color: T.textDim, lineHeight: 1.7, fontFamily: "ui-monospace, monospace", background: T.surface, padding: 12, borderRadius: 8 }}>
              flower aware mango sphere narrow lava obvious ribbon mansion fence anger smile
            </div>
            <div style={{ fontSize: 12.5, color: T.textFaint, marginTop: 10, lineHeight: 1.6 }}>
              12 mots issus d'une liste standardisée (BIP-39, 2 048 mots possibles). Statistiquement impossible à deviner. Mais aussi <B style={{ color: T.coral }}>statistiquement impossible à récupérer</B> si tu la perds.
            </div>
          </Card>
          <Note color={T.coral}>Perdre sa seed phrase = perdre l'accès définitivement. Aucun « mot de passe oublié » n'existe sur une blockchain. Estimation : 20 % des bitcoins existants seraient déjà inaccessibles à cause de seed phrases perdues.</Note>
        </Chapter>

        <Chapter n="5" title="Les types de crypto-actifs" color={T.violet}>
          <List items={[
            { t: "Cryptomonnaies « pures »", d: "Bitcoin, Litecoin. Conçues pour servir de monnaie ou de réserve de valeur. Pas de fonctionnalités complexes." },
            { t: "Plateformes programmables", d: "Ethereum, Solana, Avalanche. Permettent d'exécuter des « smart contracts » — code automatique sur la blockchain. Base de la DeFi et des NFT." },
            { t: "Stablecoins", d: "USDT, USDC, DAI. Indexés sur le dollar US. Censés être stables — mais certains ont déjà décroché (UST en 2022 : perte ~50 Md$ en quelques jours)." },
            { t: "Tokens d'application", d: "Représentent un droit dans un projet spécifique (gouvernance, accès au service). Très spéculatifs en général." },
            { t: "NFT (Non-Fungible Tokens)", d: "Tokens uniques. Utilisés pour l'art numérique, les objets in-game, parfois la propriété. Marché qui s'est effondré à -90 % depuis 2022." },
          ]} color={T.violet} />
        </Chapter>

        <Chapter n="6" title="Bitcoin vs Ethereum : les deux titans" color={T.violet}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: `1px solid ${T.line}` }}>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5 }}>Critère</div>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.accent, textTransform: "uppercase" }}>Bitcoin</div>
              <div style={{ padding: "12px 14px", fontSize: 12, fontWeight: 700, color: T.brand2, textTransform: "uppercase" }}>Ethereum</div>
            </div>
            {[
              ["Lancé en", "2009", "2015"],
              ["Conçu pour", "Réserve de valeur", "Plateforme programmable"],
              ["Validation", "Proof of Work (mineurs)", "Proof of Stake (validateurs)"],
              ["Émission totale", "21 millions max", "Sans limite officielle"],
              ["Vitesse transaction", "~10 min/bloc", "~12 secondes/bloc"],
              ["Cas d'usage principal", "« Or numérique »", "DeFi, NFT, applications"],
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < 5 ? `1px solid ${T.line}` : "none" }}>
                <div style={{ padding: "10px 14px", fontSize: 13, color: T.text, fontWeight: 600 }}>{row[0]}</div>
                <div style={{ padding: "10px 14px", fontSize: 13, color: T.textDim }}>{row[1]}</div>
                <div style={{ padding: "10px 14px", fontSize: 13, color: T.textDim }}>{row[2]}</div>
              </div>
            ))}
          </Card>
        </Chapter>

        <Quiz color={T.violet} questions={[
          { q: "Si tu perds ta seed phrase, que se passe-t-il ?", options: ["Tu peux la régénérer avec ton e-mail", "Tu perds l'accès à tes fonds définitivement", "Le service client te la renvoie sous 48h", "Elle est automatiquement sauvegardée"], answer: 1, explain: "Il n'y a aucun mécanisme de récupération sur la blockchain. La seed phrase doit être sauvegardée hors-ligne, idéalement sur un support physique stocké en lieu sûr." },
          { q: "Quelle est la principale différence entre Bitcoin et Ethereum ?", options: ["Aucune", "Bitcoin est une réserve de valeur, Ethereum une plateforme programmable", "Bitcoin est gratuit, Ethereum payant", "Ethereum est une copie de Bitcoin"], answer: 1, explain: "Bitcoin se positionne comme « or numérique » — réserve de valeur. Ethereum est une plateforme sur laquelle on peut déployer des smart contracts (DeFi, NFT, applications décentralisées)." },
          { q: "Que se passe-t-il si tu envoies du Bitcoin à la mauvaise adresse ?", options: ["Tu peux annuler", "Tu peux contacter le service client de Bitcoin", "Les fonds sont perdus, la transaction est irréversible", "Une assurance couvre"], answer: 2, explain: "Toute transaction validée sur la blockchain est irréversible. Pas de service client, pas d'annulation possible. C'est l'envers de la décentralisation." },
        ]} />
      </div>
    ),
  },

  {
    id: "risques", Icon: Mountain, title: "Pourquoi c'est si risqué",
    summary: "Volatilité extrême, faible régulation, erreurs irréversibles : trois risques qui se cumulent.",
    intro: "L'un des domaines les plus dangereux pour un débutant. Voici pourquoi, en détail.",
    words: 1700,
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

        <Chapter n="2" title="Les krachs historiques" color={T.coral}>
          <P>L'histoire courte mais déjà chargée de la crypto :</P>
          <List items={[
            { t: "2014 : Mt. Gox", d: "Plateforme japonaise qui gérait 70 % du volume Bitcoin mondial. Faillite après piratage de 850 000 BTC (~450 M$ à l'époque). Procédure encore en cours en 2026, remboursements partiels seulement." },
            { t: "2018 : éclatement bulle ICO", d: "Bitcoin passe de 20 000 $ à 3 200 $ (-84 %). La plupart des « altcoins » de l'époque sont aujourd'hui à zéro." },
            { t: "Mai 2022 : effondrement UST/LUNA", d: "Stablecoin « algorithmique » qui devait rester à 1 $. Perte de l'ancrage en 3 jours, ~50 Md$ de capitalisation volatilisés. Des particuliers ont perdu toute leur épargne." },
            { t: "Novembre 2022 : faillite FTX", d: "2ᵉ plus grande plateforme mondiale. Sam Bankman-Fried condamné à 25 ans de prison pour fraude. ~8 Md$ de fonds clients perdus ou retardés." },
            { t: "2024-2025 : régulation MiCA en Europe", d: "Premier cadre légal européen. Améliore la protection des consommateurs mais ne supprime pas les risques fondamentaux." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="3" title="Les risques techniques spécifiques" color={T.coral}>
          <List items={[
            { t: "Risque de piratage de plateforme", d: "Même les plus grandes plateformes ont été piratées (Mt. Gox, Coinbase, Binance). Si tu laisses tes crypto sur la plateforme, tu acceptes ce risque." },
            { t: "Risque de smart contract", d: "Le code des smart contracts peut avoir des failles. Des centaines de millions de dollars ont été perdus dans des hacks DeFi (Wormhole, Ronin, Poly Network)." },
            { t: "Risque de phishing", d: "De faux sites/apps qui imitent des plateformes connues pour voler tes accès. Très répandus, particulièrement sur les réseaux sociaux." },
            { t: "Risque de SIM-swapping", d: "Un attaquant convainc ton opérateur de transférer ton numéro vers une autre SIM. Il intercepte les SMS 2FA et vide tes comptes. D'où l'intérêt de la 2FA par appli (jamais SMS)." },
            { t: "Risque de rug pull", d: "Les créateurs d'un projet crypto disparaissent avec les fonds des investisseurs. Quotidien sur les petits tokens." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="4" title="Le risque réglementaire" color={T.coral}>
          <P>Les régulations évoluent rapidement et de façon imprévisible :</P>
          <List items={[
            { t: "Interdictions sectorielles", d: "La Chine a interdit le minage et l'usage des crypto en 2021. D'autres pays peuvent suivre." },
            { t: "Reclassification fiscale", d: "La France a évolué plusieurs fois (BIC puis non-commercial, PFU puis option barème). Ce qui est vrai aujourd'hui peut changer demain." },
            { t: "MiCA (UE, 2024-2025)", d: "Encadre les plateformes (PSAN devient CASP), les stablecoins. Bonne nouvelle pour la protection consommateur, mais durcit les conditions et peut écarter certains projets." },
            { t: "Sanctions internationales", d: "Possibilité de geler des wallets jugés liés à des activités illicites (Tornado Cash sanctionné par l'OFAC US en 2022). Précédent inquiétant pour le mythe de « cryptos incensurables »." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="5" title="Le risque environnemental" color={T.coral}>
          <P>Bitcoin consomme aujourd'hui environ <B>140 TWh/an</B> (plus que l'électricité de l'Argentine entière). Plusieurs implications :</P>
          <List items={[
            { t: "Empreinte carbone élevée", d: "Difficile à justifier moralement pour beaucoup d'investisseurs sensibles à l'environnement." },
            { t: "Risque réglementaire associé", d: "Plusieurs États envisagent des restrictions sur le minage. New York a un moratoire partiel depuis 2022." },
            { t: "Pression pour la transition", d: "Ethereum a réussi son passage au Proof of Stake (réduction de la consommation de ~99,95 %). Pression sur Bitcoin pour faire de même, mais résistance idéologique forte." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="6" title="La règle d'or" color={T.violet}>
          <Note color={T.violet} title="Règle de prudence">
            N'engage jamais une somme que tu ne peux pas te permettre de perdre <B>entièrement</B>. Cette règle, partagée par tous les observateurs sérieux, est encore plus vraie ici qu'ailleurs.
          </Note>
          <P>Une formule défensive très utilisée : si on s'y intéresse, plafonner à <B>5 % maximum</B> du patrimoine investi, et seulement après avoir un fonds d'urgence solide et une épargne diversifiée par ailleurs.</P>
          <DeepDive title="Pourquoi 5 % et pas 10 ou 1 % ?">
            5 % est le seuil au-delà duquel une perte totale impacte significativement ton patrimoine. À 1 %, c'est inutile (l'effet est négligeable, autant ne pas s'embêter). À 10 %+, l'impact d'une perte devient douloureux. 5 % est un compromis : suffisant pour participer à l'éventuel gain, pas assez pour t'asphyxier si tout disparaît.
          </DeepDive>
        </Chapter>

        <Chapter n="7" title="Tester sa tolérance" color={T.violet}>
          <P>Avant tout achat, fais ce calcul mental : <em>« Si j'achète 1 000 € de crypto aujourd'hui, et que demain je vois -50 % (donc 500 €), comment je réagis ? »</em></P>
          <List items={[
            { t: "« Je m'en fous, j'attends »", d: "OK. Ton montant est cohérent avec ta tolérance." },
            { t: "« Je vais surveiller régulièrement »", d: "Borderline. Tu pourrais paniquer à -70 %. Réduis le montant." },
            { t: "« Je ne dormirais pas »", d: "Trop élevé pour toi. Divise par 5." },
          ]} color={T.violet} />
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "Une plateforme crypto fait faillite (comme FTX en 2022). Que deviennent tes fonds ?", options: ["Garantis par l'État jusqu'à 100 000 €", "Remboursés par une assurance obligatoire", "Souvent perdus ou bloqués des années dans une procédure collective", "Transférés automatiquement chez un concurrent"], answer: 2, explain: "Les plateformes crypto n'ont en général pas la même protection que les banques. Les fonds peuvent être perdus, ou bloqués des années (FTX a duré plus de 2 ans en procédure)." },
          { q: "Quel pourcentage maximum du patrimoine investi pour la crypto, selon la règle de prudence ?", options: ["50 %", "20 %", "5 %", "100 %"], answer: 2, explain: "5 % est le seuil au-delà duquel une perte totale impacte significativement. Suffisant pour participer à un éventuel gain, pas assez pour t'asphyxier si tout disparaît." },
          { q: "Quel est le risque le plus dangereux pour un débutant en crypto ?", options: ["Le risque de change", "Le piratage de la plateforme + erreur de manipulation", "Le risque de baisse temporaire", "Le risque inflationniste"], answer: 1, explain: "La perte de fonds par piratage, phishing ou erreur de manipulation (mauvaise adresse, perte de seed) est irréversible. C'est ce qui distingue le risque crypto du risque action classique." },
        ]} />
      </div>
    ),
  },

  {
    id: "arnaques", Icon: AlertTriangle, title: "Repérer les arnaques",
    summary: "Le sujet le plus important : les signaux d'alerte qui doivent te faire fuir immédiatement.",
    intro: "Les escroqueries sont massives dans ce domaine. Savoir les reconnaître est la meilleure protection.",
    words: 1800,
    content: (
      <div>
        <Chapter n="1" title="Les signaux d'alerte universels" color={T.coral}>
          <List items={[
            { t: "Rendements « garantis »", d: "Toute promesse de gains fixes et élevés sans risque est presque toujours une arnaque (type pyramide de Ponzi)." },
            { t: "Urgence et pression", d: "« Dépêche-toi », « tu vas rater l'occasion » : la précipitation est conçue pour t'empêcher de réfléchir." },
            { t: "Opacité totale", d: "Équipe anonyme, documentation floue, projet invérifiable : autant de drapeaux rouges." },
            { t: "Sollicitation directe", d: "Un inconnu qui te contacte pour t'« aider à investir », un lien à cliquer pour transférer des fonds : fuis." },
            { t: "Tu dois recruter pour gagner", d: "Schéma pyramidal classique. Si la rémunération principale vient de tes filleuls, pas du produit, c'est une arnaque." },
            { t: "Pas d'enregistrement officiel", d: "En France, vérifier sur la liste des PSAN (AMF). En Europe, CASP (MiCA). Toute plateforme sérieuse y figure." },
          ]} color={T.coral} />
        </Chapter>

        <Chapter n="2" title="Visualiser la zone d'arnaque" color={T.coral}>
          <VizFrame title="Risque réel vs rendement promis">
            <ScamScatter />
            <VizCaption>Les vrais placements suivent la diagonale (plus de rendement = plus de risque). Tout ce qui promet beaucoup sans risque appartient à la zone d'arnaque.</VizCaption>
          </VizFrame>
        </Chapter>

        <Chapter n="3" title="Les six grandes familles d'arnaque crypto" color={T.coral}>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>1. Pig butchering (« porc à abattre »)</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Un inconnu noue une relation de confiance sur plusieurs semaines (souvent via Tinder, LinkedIn, Instagram) puis propose une opportunité « exceptionnelle ». La victime voit d'abord de faux gains sur une plateforme bidon. Encouragée à investir toujours plus. Finit par tout perdre. <B style={{ color: T.coral }}>Pertes typiques : 50 k€ à 500 k€</B>.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>2. Rug pull</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Les créateurs d'un projet/token disparaissent avec les fonds. Particulièrement courant sur les petits tokens DeFi/meme. Le projet semble légitime jusqu'à ce que l'équipe vide le pool de liquidité et disparaisse.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>3. Pump & dump</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Un groupe coordonné gonfle artificiellement le prix d'un petit token via achats massifs et hype sur les réseaux. Quand le prix décolle, les organisateurs vendent et le prix s'effondre. Les retardataires perdent tout.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>4. Faux airdrops / faux supports</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Un site/email/DM te propose un airdrop « exclusif ». Tu dois connecter ton wallet pour « réclamer ». Le smart contract vide ton wallet. Ou un faux service client te demande ta seed phrase « pour t'aider ». Aucun vrai support ne demande jamais ta seed.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>5. Faux brokers et plateformes</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Plateforme professionnelle d'apparence, parfois avec des avis Trustpilot achetés. Tu déposes, le compte montre des gains, mais tu ne peux jamais retirer. L'argent est volé dès le dépôt. Reconnaissance : pas de PSAN, sollicitation par DM/pub.
            </div>
          </Card>
          <Card style={{ padding: 18, background: T.bgSoft }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.coral, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>6. Ponzi déguisé en plateforme « DeFi »</div>
            <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.6 }}>
              Promesse de rendements impossibles (5-15 %/mois). Les premiers entrants sont payés avec l'argent des nouveaux. Quand le recrutement ralentit, tout s'effondre. Exemples célèbres : BitConnect (2018), OneCoin (2014-2019, 4 Md$ envolés).
            </div>
          </Card>
        </Chapter>

        <Chapter n="4" title="Comment vérifier une plateforme/projet" color={T.brand}>
          <List items={[
            { t: "PSAN/CASP", d: "Vérifier sur le site officiel de l'AMF (regafi.fr) que la plateforme est enregistrée. Liste mise à jour régulièrement." },
            { t: "Équipe identifiable", d: "Noms réels, profils LinkedIn vérifiables, expériences passées documentées. Anonymat total = drapeau rouge." },
            { t: "Code audité (pour DeFi)", d: "Un projet DeFi sérieux a fait auditer son smart contract par CertiK, OpenZeppelin ou équivalent. L'audit est public." },
            { t: "Avis externes croisés", d: "Pas seulement Trustpilot (manipulable). Reddit, forums spécialisés, articles de presse indépendante." },
            { t: "Histoire du projet", d: "Existe depuis combien d'années ? A traversé un cycle baissier ? Les projets pré-2020 ont déjà fait leurs preuves." },
          ]} color={T.brand} />
        </Chapter>

        <Chapter n="5" title="Le « pig butchering » en détail" color={T.coral}>
          <DeepDive title="Anatomie d'une arnaque relationnelle">
            <B style={{ color: T.text }}>Phase 1 — Approche (jours 1-7)</B> : un profil charmant te contacte sur réseaux ou app de rencontre. Conversation chaleureuse, en français impeccable. Profil de quelqu'un de prospère (voyages, restaurants). Pas encore de mention finance.<br /><br />
            <B style={{ color: T.text }}>Phase 2 — Construction de confiance (semaines 2-6)</B> : discussions quotidiennes, échanges personnels, parfois appels vidéo (deepfake possible). Tu te sens en relation. Personne « investit » à côté, mentionne des gains, sans pousser.<br /><br />
            <B style={{ color: T.text }}>Phase 3 — Introduction de l'opportunité</B> : « Mon oncle est trader », « ma plateforme privée a des rendements exceptionnels ». Te propose de tester avec un petit montant.<br /><br />
            <B style={{ color: T.text }}>Phase 4 — Faux gains</B> : ton premier dépôt de 200 € montre 280 € en 3 jours. Tu peux même retirer une petite somme. La confiance est totale.<br /><br />
            <B style={{ color: T.text }}>Phase 5 — Escalade</B> : tu investis plus, parfois tu empruntes, parfois tu vides ton AV. Les chiffres montrent des gains massifs. Mais quand tu veux retirer en grand : « problème de KYC », « frais de retrait à payer d'abord », etc. Tout est perdu.<br /><br />
            <B style={{ color: T.coral }}>Le levier : ils ne demandent jamais d'argent directement. Ils te font « rencontrer » la plateforme qui te vole. Légalement, ils peuvent prétendre « ne pas être responsables ».</B>
          </DeepDive>
        </Chapter>

        <Chapter n="6" title="Que faire si tu es victime ?" color={T.brand}>
          <List items={[
            { t: "Arrêter immédiatement de verser", d: "Toute promesse « il suffit de payer X € pour débloquer » est une suite de l'arnaque. Plus tu paies, plus tu perds." },
            { t: "Signaler aux autorités", d: "Plainte au commissariat ou en ligne via Pharos (gendarmerie). AMF si plateforme financière. Les chances de récupération sont faibles mais le signalement aide à protéger d'autres victimes." },
            { t: "Conserver toutes les preuves", d: "Captures d'écran des conversations, hashes de transaction blockchain (visibles publiquement et traçables). Indispensable pour toute procédure." },
            { t: "Ne pas avoir honte", d: "Les victimes sont nombreuses et le profil n'est PAS « idiot ». Les arnaques sont conçues par des professionnels qui exploitent la psychologie humaine." },
            { t: "Se faire accompagner", d: "Associations d'aide aux victimes (France Victimes, Info Escroqueries 0805 805 817). Soutien psychologique parfois nécessaire — l'aspect émotionnel (relation faussement nouée) est dévastateur." },
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.coral} questions={[
          { q: "Tu reçois un DM d'un inconnu charmant qui te propose une opportunité crypto à 20 %/mois. Que fais-tu ?", options: ["J'investis un peu pour tester", "Je demande à voir les preuves", "Je bloque et signale : tous les signaux d'arnaque sont là", "Je transmets l'offre à mes proches"], answer: 2, explain: "Sollicitation non demandée + rendement irréaliste + pression émotionnelle (relation construite artificiellement) = pig butchering ou Ponzi. Aucun investissement légitime ne se vend par DM." },
          { q: "Quelle promesse est le signal d'arnaque le plus universel ?", options: ["Un projet open-source", "« Rendement garanti élevé sans risque »", "Une équipe identifiée publiquement", "Une régulation officielle (AMF, etc.)"], answer: 1, explain: "Aucun produit financier sérieux ne combine ces trois mots. La promesse est le marqueur n°1 des Ponzi, depuis Madoff jusqu'aux escroqueries crypto actuelles." },
          { q: "Tu réalises avoir été victime d'une arnaque crypto. Que faire en premier ?", options: ["Verser le montant demandé pour débloquer", "Arrêter tout versement et signaler aux autorités", "Continuer à voir si ça remonte", "Ne rien dire pour ne pas paraître naïf"], answer: 1, explain: "Toute demande supplémentaire est la continuation de l'arnaque. Stopper, conserver les preuves (captures, hashes), signaler à Pharos/AMF. Et surtout : ce n'est pas de ta faute, c'est de la fraude organisée." },
        ]} />
      </div>
    ),
  },

  {
    id: "esprit", Icon: Compass, title: "Garder l'esprit critique",
    summary: "Si on s'y intéresse malgré tout : les précautions de base et les réflexes valables partout.",
    intro: "L'esprit critique est, au fond, le meilleur outil financier qui soit — bien au-delà de la crypto.",
    words: 1400,
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

        <Chapter n="2" title="Les sources d'information à privilégier" color={T.violet}>
          <List items={[
            { t: "Whitepapers officiels", d: "Document technique original du projet. Lecture aride mais essentielle pour comprendre ce que tu détiens." },
            { t: "Réseau Reddit (r/CryptoCurrency, r/Bitcoin)", d: "Communauté plutôt critique et informée. Bonne base de discussions mais attention au biais haussier." },
            { t: "Médias spécialisés", d: "CoinDesk, The Block, en France The Big Whale. Journalistes pros. Distinguer articles d'analyse et articles sponsorisés (toujours mentionnés)." },
            { t: "AMF et autorités", d: "Liste publique des plateformes enregistrées. Alertes sur les arnaques en cours. Source officielle." },
          ]} color={T.violet} />
          <Note color={T.coral}>À éviter : Twitter/X (énormément de manipulation et spam), Telegram (lieu n°1 des arnaques), TikTok crypto (90 % de contenus promotionnels masqués).</Note>
        </Chapter>

        <Chapter n="3" title="Les biais à surveiller dans ce domaine" color={T.violet}>
          <List items={[
            { t: "FOMO (Fear Of Missing Out)", d: "« Si j'avais acheté Bitcoin en 2012… ». Le passé est passé. Le risque d'entrer au sommet d'une bulle est très réel — c'est exactement ce qui est arrivé en 2021 à des millions de personnes." },
            { t: "Biais de survivance", d: "Tu entends parler des gens qui ont fait fortune. Pas de ceux (bien plus nombreux) qui ont tout perdu. Les success stories crypto sont fortement surreprésentées." },
            { t: "Effet « génie autoproclamé »", d: "« J'ai compris quelque chose que les autres n'ont pas compris ». Statistiquement très probablement faux. Les marchés financiers sont remplis de gens plus intelligents et mieux informés que toi." },
            { t: "Identité communautaire", d: "Les crypto-fans construisent une identité (« HODL », « WAGMI », « to the moon »). Cette identité rend très difficile de vendre quand il faudrait — c'est admettre s'être trompé." },
          ]} color={T.violet} />
        </Chapter>

        <Chapter n="4" title="L'analyse technique vs fondamentale" color={T.violet}>
          <List items={[
            { t: "Analyse fondamentale", d: "Étudier la valeur intrinsèque d'un actif. Pour Bitcoin : adoption, sécurité, demande institutionnelle. Pour Ethereum : usage réel des smart contracts. Pour la plupart des tokens : pas grand-chose à analyser." },
            { t: "Analyse technique", d: "Étudier les graphiques de prix pour prédire l'avenir. Très populaire, statistiquement non significative sur des marchés efficients. Beaucoup de profilage trompeur." },
          ]} color={T.violet} />
          <DeepDive title="Pourquoi l'analyse technique est généralement inutile">
            Si l'analyse technique fonctionnait vraiment, tous ses utilisateurs feraient fortune mécaniquement. Or les études sur des décennies montrent que les traders particuliers utilisant uniquement l'analyse technique sous-performent statistiquement le marché. Les figures (« épaule-tête-épaule », « breakout », etc.) sont auto-validantes : tu les vois après coup. Sur le moment, elles sont ambiguës.
          </DeepDive>
        </Chapter>

        <Chapter n="5" title="Des réflexes valables partout" color={T.brand}>
          <P>Au-delà de la crypto, ces réflexes valent pour tout produit financier « miracle » : se méfier de ce qui paraît trop beau, vérifier les sources, ne jamais décider sous pression émotionnelle, et se rappeler la loi fondamentale — aucun rendement élevé n'existe sans risque correspondant.</P>
          <Note color={T.brand}>L'esprit critique se cultive : prends 24h avant toute décision financière importante, demande l'avis d'au moins une personne extérieure non investie dans le sujet, et vérifie l'identité réelle de qui te conseille.</Note>
        </Chapter>

        <Chapter n="6" title="Le bon usage de la crypto pour un débutant" color={T.brand}>
          <P>Si après tout ça tu veux quand même t'y mettre, voici une approche raisonnable :</P>
          <List items={[
            "Maximum 5 % du patrimoine investi.",
            "Seulement Bitcoin et Ethereum (qui représentent 60-70 % de la capitalisation crypto totale).",
            "Achat en DCA (50-100 €/mois) sur une plateforme PSAN.",
            "Pas de trading actif. Hold sur 5-10 ans minimum.",
            "Wallet personnel (Ledger ou similaire) au-delà de 1 000-2 000 € détenus.",
            "Déclaration fiscale impeccable chaque année.",
          ]} color={T.brand} />
        </Chapter>

        <Quiz color={T.violet} questions={[
          { q: "Selon l'approche prudente, quelle part maximale du patrimoine consacrer à la crypto ?", options: ["50 %", "20 %", "Maximum 5 %", "100 %, c'est l'avenir"], answer: 2, explain: "Le consensus défensif : maximum 5 % du patrimoine investi, et uniquement après un fonds d'urgence solide. La volatilité extrême et le risque de perte totale rendent toute exposition plus importante très risquée." },
          { q: "Quelles sont les meilleures sources d'information crypto ?", options: ["TikTok et Twitter", "Telegram et Discord", "Whitepapers officiels et médias spécialisés indépendants", "Les amis qui ont fait des gains"], answer: 2, explain: "Twitter/X, TikTok et Telegram sont saturés de promotion et d'arnaques. Les sources fiables sont les whitepapers officiels, les médias spécialisés indépendants (CoinDesk, The Block, The Big Whale) et l'AMF." },
          { q: "L'analyse technique appliquée seule à la crypto :", options: ["Garantit des gains réguliers", "Est mathématiquement prouvée comme efficace", "N'est statistiquement pas significative sur des marchés efficients", "Est interdite en France"], answer: 2, explain: "Les études sur des décennies montrent que les traders particuliers utilisant uniquement l'analyse technique sous-performent. Les figures sont auto-validantes (visibles après coup) et leur interprétation est ambiguë." },
        ]} />
      </div>
    ),
  },
];

TOPICS.push({
  id: "premierachat", Icon: ShieldCheck, title: "Premier achat : la check-list sécurité",
  summary: "Si tu décides de t'y intéresser malgré tout : 10 étapes pour ne pas perdre tes fonds dès le départ.",
  intro: "Cette thématique ne te dit pas d'investir en crypto. Mais si tu le fais, voici comment ne pas te faire avoir bêtement sur la technique.",
  words: 1800,
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
        <P>En France, exiger une plateforme enregistrée <B>PSAN auprès de l'AMF</B> (et bientôt CASP avec MiCA). La liste officielle est disponible sur le site de l'AMF. Cela ne garantit pas qu'elle ne fera pas faillite (cf. FTX qui était régulé partiellement), mais cela élimine les pires arnaques.</P>
        <List items={[
          { t: "Critères positifs", d: "Enregistrement PSAN/MiCA, équipe identifiée, support client réactif, ancienneté > 5 ans, transparence sur les frais, audits de réserves publics." },
          { t: "Signaux d'alerte", d: "Plateforme nouvelle, frais cachés, retraits soudain « en maintenance », promesse de rendement fixe, présence uniquement sur Telegram/Discord, ‎ sollicitation par DM." },
        ]} color={T.violet} />
        <DeepDive title="Plateformes PSAN populaires en France (en 2026)">
          Bitpanda, Binance France, Coinbase, Kraken, Coinhouse, Bitstack, StackinSat, Just Mining — toutes enregistrées PSAN. Cette liste évolue, vérifier toujours sur le registre AMF officiel avant de s'inscrire. Le fait qu'une plateforme soit enregistrée NE garantit PAS sa solidité financière — juste qu'elle a passé un contrôle minimum AML/KYC.
        </DeepDive>
      </Chapter>

      <Chapter n="3" title="Sécuriser son compte" color={T.brand}>
        <List items={[
          { t: "Mot de passe unique et long (20+ caractères)", d: "Générer via un gestionnaire de mots de passe (Bitwarden, 1Password, KeePass). JAMAIS le réutiliser sur un autre site." },
          { t: "2FA obligatoire", d: "Pas par SMS (vulnérable au SIM-swapping) mais via une appli (Google Authenticator, Authy) ou idéalement une clé physique (YubiKey)." },
          { t: "Adresse e-mail dédiée", d: "Crée une e-mail spécifique à tes comptes financiers, jamais utilisée pour les newsletters ou les inscriptions diverses. Réduit l'exposition aux fuites de données." },
          { t: "Activer les alertes", d: "Notification à chaque connexion et chaque retrait. Tu détectes une intrusion en quelques minutes." },
          { t: "Liste blanche de retrait", d: "Configure une « whitelist » d'adresses de retrait autorisées avec délai de 24-72h pour les modifier. Bloque les retraits frauduleux par un attaquant ayant pris le contrôle." },
        ]} color={T.brand} />
      </Chapter>

      <Chapter n="4" title="Passer son premier ordre" color={T.violet}>
        <List items={[
          { t: "Commencer petit", d: "Ton premier achat sert à comprendre la procédure, pas à faire de la performance. 20-50 € suffisent largement pour tester." },
          { t: "Acheter en DCA", d: "Mieux qu'un gros versement en une fois : étaler en versements réguliers (50 € le 1er de chaque mois) lisse le prix d'achat et l'émotion. La plupart des plateformes permettent les achats récurrents automatiques." },
          { t: "Préférer les actifs majeurs", d: "Bitcoin et Ethereum représentent l'essentiel de la capitalisation. Les « petits tokens » sont la principale source d'arnaques (rug pull, manipulation)." },
          { t: "Vérifier les frais", d: "Frais de spread + frais de transaction. Sur certaines plateformes grand public, ils dépassent 1,5 % par achat — équivalent à plusieurs années de frais d'ETF en une seule opération." },
          { t: "Toujours vérifier le prix de marché", d: "Comparer le prix sur la plateforme avec CoinMarketCap ou CoinGecko avant l'ordre. Si l'écart dépasse 2-3 %, la plateforme te prend une marge cachée importante." },
        ]} color={T.violet} />
      </Chapter>

      <Chapter n="5" title="Hot wallet vs cold wallet" color={T.brand}>
        <P>Tant que tes crypto sont sur la plateforme, tu n'en es pas vraiment propriétaire — la plateforme l'est. La règle vieille de la communauté : <em>« Not your keys, not your coins »</em>.</P>
        <List items={[
          { t: "Petits montants (< 500 €)", d: "OK de les laisser sur la plateforme PSAN, le risque est limité." },
          { t: "Montants moyens (500 - 5 000 €)", d: "Envisager un wallet logiciel (MetaMask, Phantom, Trust Wallet). Tu détiens la clé privée mais l'appareil reste connecté à internet — vulnérable aux malwares." },
          { t: "Gros montants (> 5 000 €)", d: "Cold wallet (Ledger, Trezor, BitBox) : la clé privée ne quitte jamais l'appareil. Le coût (~80-150 €) est négligeable par rapport au risque évité." },
        ]} color={T.brand} />
        <DeepDive title="La seed phrase, encore et toujours">
          Quel que soit ton wallet, la seed phrase (12 ou 24 mots) est la clé absolue. Règles non négociables : <B>jamais en ligne, jamais en photo, jamais dans un coffre cloud, jamais à un « support technique »</B>. La sauvegarde physique (papier, métal gravé) dans deux endroits distincts est la pratique standard. Pour les patrimoines significatifs, certains utilisent des solutions de partage type Shamir : la seed est divisée en plusieurs parts dont seule une combinaison permet de reconstituer la clé.
        </DeepDive>
      </Chapter>

      <Chapter n="6" title="Stratégie défensive long terme" color={T.brand}>
        <P>Pour la plupart des particuliers, la stratégie la plus prudente est <B>hold passif sur Bitcoin et Ethereum</B>, achetés en DCA, sur 5-10 ans minimum. Ni trading, ni « yield farming », ni token de la semaine.</P>
        <Card style={{ padding: 18, background: T.bgSoft }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Exemple de stratégie sobre</div>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.7 }}>
            • 50-100 €/mois en DCA sur Bitcoin (60 %) + Ethereum (40 %).<br />
            • Au bout de 6-12 mois ou 1 000 €, transfert vers un wallet hardware.<br />
            • Aucun trading, aucun token exotique, aucune DeFi expérimentale.<br />
            • Suivi annuel : prix, contexte, déclaration fiscale.<br />
            • Hold minimum 5 ans, idéalement 10. Tu profites de la durée et tu évites les décisions impulsives.<br /><br />
            <B style={{ color: T.text }}>Cette approche est ennuyeuse — c'est exactement pour ça qu'elle marche.</B>
          </div>
        </Card>
      </Chapter>

      <Chapter n="7" title="Déclarer ses gains" color={T.accent}>
        <P>Les plus-values de cession de crypto par un particulier français sont imposées au <B>PFU de 30 %</B> (sauf option au barème). À déclarer via le formulaire 2086, en complément de la déclaration principale. Voir la thématique « Déclarer ses impôts » de la section Fiscalité.</P>
        <List items={[
          { t: "Cession imposable", d: "Conversion de crypto en euros, conversion en stablecoin, ou paiement en crypto. Chaque sortie est un événement imposable." },
          { t: "PAS imposable", d: "Transferts entre tes propres wallets, simple détention. Tant que tu n'as pas vendu, pas d'imposition." },
          { t: "Conservation des justificatifs", d: "Tous les achats, transferts, ventes : à archiver pendant au moins 3 ans (durée de prescription fiscale en cas de contrôle). Les plateformes fournissent des historiques téléchargeables." },
        ]} color={T.accent} />
        <Note color={T.accent}>Les transferts entre tes propres wallets ne sont PAS des cessions. Seule une conversion en euros, en stablecoin (USDT, USDC) ou un paiement en crypto déclenche l'imposition.</Note>
      </Chapter>

      <Chapter n="8" title="Avant de cliquer sur « acheter »" color={T.violet}>
        <Card style={{ padding: 22, background: T.bgSoft }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.brand, marginBottom: 12 }}>La dernière check-list avant ton premier achat :</div>
          <List items={[
            "Plateforme vérifiée PSAN/CASP sur le site AMF ?",
            "Mot de passe unique 20+ caractères + 2FA non-SMS ?",
            "Montant inférieur à 5 % de mon patrimoine ?",
            "Pas de dette conso/revolving en cours ?",
            "Je peux perdre 100 % de cette somme sans impact ?",
            "Je suis dans un état émotionnel calme (pas après une pub TikTok) ?",
            "J'ai compris que c'est un placement 5+ ans minimum ?",
          ]} color={T.brand} />
          <div style={{ marginTop: 12, fontSize: 13, color: T.textFaint, fontStyle: "italic" }}>Si une case n'est pas cochée : reporte. Ce sera toujours là demain.</div>
        </Card>
      </Chapter>

      <Quiz color={T.violet} questions={[
        { q: "Quelle authentification 2FA est la moins sécurisée ?", options: ["Une appli authenticator (Google Authenticator, Authy)", "Une clé physique YubiKey", "Le SMS", "Pas de 2FA du tout (toujours pire)"], answer: 2, explain: "Le SMS est vulnérable au SIM-swapping : un attaquant fait transférer ton numéro vers une autre carte SIM puis intercepte tes codes. Préfère une appli authenticator ou une clé physique." },
        { q: "Tu détiens 2 000 € en crypto. Où les laisser ?", options: ["Sur une plateforme PSAN (limite raisonnable)", "Sur 3 plateformes différentes", "En cash sous le matelas", "Sur la plateforme inconnue qui m'a contacté en DM"], answer: 0, explain: "Pour ce montant, une plateforme PSAN reconnue reste raisonnable. Au-delà (5 000 €+), un wallet personnel (logiciel ou matériel) devient plus pertinent. JAMAIS sur une plateforme inconnue sollicitée par DM — c'est le marqueur d'arnaque le plus universel." },
        { q: "Quelle est la stratégie crypto la plus prudente pour un débutant ?", options: ["Trading actif sur petits tokens", "Hold passif BTC+ETH en DCA sur 5-10 ans", "Investir dans le dernier hype du moment", "Yield farming DeFi"], answer: 1, explain: "Pour un particulier débutant, le hold passif sur les deux principales crypto en DCA est statistiquement la stratégie la plus solide. Ennuyeuse — donc qui résiste aux décisions émotionnelles." },
      ]} />
    </div>
  ),
});

export default function Crypto(p) {
  return <TopicHub pageId="crypto" topics={TOPICS} {...p} />;
}
