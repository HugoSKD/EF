export const GLOSSARY = [
  // BUDGET
  { term: "Budget", cat: "Budget", def: "Plan qui anticipe les entrées (revenus) et les sorties (dépenses) d'argent sur une période donnée, généralement le mois." },
  { term: "Dépense fixe", cat: "Budget", def: "Dépense récurrente et prévisible (loyer, assurance, abonnement). À l'opposé des dépenses variables." },
  { term: "Dépense variable", cat: "Budget", def: "Dépense fluctuante d'un mois à l'autre (courses, loisirs, vêtements). Levier principal d'ajustement budgétaire." },
  { term: "Fonds d'urgence", cat: "Budget", def: "Épargne de précaution couvrant 3 à 6 mois de dépenses essentielles, placée sur un support immédiatement disponible." },
  { term: "Méthode 50/30/20", cat: "Budget", def: "Répartition indicative d'un revenu net : 50 % besoins, 30 % envies, 20 % épargne et dettes." },
  { term: "Pay yourself first", cat: "Budget", def: "Mettre de côté à la réception du revenu, avant toute dépense. Inverse l'ordre habituel et fiabilise l'épargne." },
  { term: "Inflation du train de vie", cat: "Budget", def: "Phénomène par lequel les dépenses augmentent automatiquement quand les revenus augmentent, annulant tout gain d'épargne." },

  // ÉPARGNE & INVEST
  { term: "Intérêts composés", cat: "Épargne", def: "Intérêts qui s'ajoutent au capital et produisent à leur tour des intérêts. L'effet est exponentiel sur le long terme." },
  { term: "Règle de 72", cat: "Épargne", def: "Astuce mentale : 72 divisé par le taux annuel (%) donne le nombre d'années pour doubler son capital. À 6 %, ≈ 12 ans." },
  { term: "Livret réglementé", cat: "Épargne", def: "Compte d'épargne dont le taux et les plafonds sont fixés par l'État (Livret A, LDDS, LEP). Capital garanti, disponible à tout moment." },
  { term: "Assurance-vie", cat: "Épargne", def: "Enveloppe d'épargne souple, fiscalité avantageuse après 8 ans, qui peut contenir fonds en euros (sécurisés) et unités de compte (risquées)." },
  { term: "PEA", cat: "Épargne", def: "Plan d'Épargne en Actions : enveloppe française pour investir en actions européennes, exonérée d'impôt sur les gains après 5 ans (hors prélèvements sociaux)." },
  { term: "PER", cat: "Épargne", def: "Plan d'Épargne Retraite : versements déductibles du revenu imposable, capital bloqué jusqu'à la retraite (sauf cas exceptionnels)." },
  { term: "Action", cat: "Invest", def: "Part de propriété dans une entreprise. Le détenteur peut recevoir des dividendes et bénéficier de la hausse du cours." },
  { term: "Obligation", cat: "Invest", def: "Prêt accordé à un État ou une entreprise, remboursé avec intérêts. Généralement moins volatil que les actions." },
  { term: "ETF", cat: "Invest", def: "Exchange-Traded Fund : fonds coté en bourse qui réplique un indice (CAC 40, S&P 500…). Diversification immédiate, frais bas." },
  { term: "Dividende", cat: "Invest", def: "Partie des bénéfices d'une entreprise versée aux actionnaires. Non garanti — l'entreprise peut le réduire ou le supprimer." },
  { term: "Volatilité", cat: "Invest", def: "Amplitude des variations de prix d'un actif. Une volatilité élevée signifie de fortes hausses et baisses possibles." },
  { term: "Diversification", cat: "Invest", def: "Répartir ses placements entre plusieurs actifs/secteurs/zones pour réduire l'impact d'un accident isolé." },
  { term: "DCA", cat: "Invest", def: "Dollar-Cost Averaging : investir la même somme à intervalles réguliers, quel que soit le cours. Lisse le prix d'achat moyen." },
  { term: "Frais de gestion", cat: "Invest", def: "Pourcentage prélevé annuellement sur l'encours par le gestionnaire. 2 %/an réduit drastiquement le capital final sur 30 ans." },
  { term: "FOMO", cat: "Invest", def: "Fear Of Missing Out : peur de rater une opportunité, qui pousse à acheter au sommet d'une euphorie, juste avant la chute." },

  // FISCALITÉ
  { term: "Prélèvement Forfaitaire Unique (PFU)", cat: "Fiscalité", def: "Aussi appelé « flat tax ». Taxe de 30 % sur les revenus de capitaux mobiliers : 12,8 % d'impôt + 17,2 % de prélèvements sociaux." },
  { term: "Tranche marginale d'imposition (TMI)", cat: "Fiscalité", def: "Taux d'imposition appliqué à la dernière tranche de revenus. En France : 0 %, 11 %, 30 %, 41 % et 45 %." },
  { term: "Quotient familial", cat: "Fiscalité", def: "Mécanisme qui divise le revenu imposable par le nombre de parts (couple, enfants) pour adoucir la progressivité de l'impôt." },
  { term: "Abattement", cat: "Fiscalité", def: "Réduction forfaitaire ou en pourcentage appliquée à un revenu avant calcul de l'impôt (ex : 10 % sur les salaires)." },
  { term: "Prélèvements sociaux", cat: "Fiscalité", def: "Cotisations (CSG, CRDS…) totalisant 17,2 % en France sur les revenus du capital, en plus de l'impôt." },
  { term: "Niche fiscale", cat: "Fiscalité", def: "Dispositif légal permettant de réduire son impôt (dons, investissement locatif, PER…). Plafonné à 10 000 €/an en général." },
  { term: "IFU", cat: "Fiscalité", def: "Imprimé Fiscal Unique : récapitulatif annuel envoyé par ta banque/courtier avec tous les revenus de placement à déclarer." },

  // CRÉDIT
  { term: "TAEG", cat: "Crédit", def: "Taux Annuel Effectif Global : coût total du crédit (intérêts + frais + assurance) exprimé en % annuel. Le seul taux qui permet de comparer deux offres." },
  { term: "Taux nominal", cat: "Crédit", def: "Taux d'intérêt brut affiché par la banque, hors frais. Toujours inférieur au TAEG." },
  { term: "Amortissement", cat: "Crédit", def: "Remboursement progressif du capital emprunté. Au début, on rembourse surtout des intérêts ; en fin de prêt, surtout du capital." },
  { term: "Capacité d'emprunt", cat: "Crédit", def: "Montant maximum qu'une banque accepte de prêter, calculé à partir du revenu et du taux d'endettement (souvent plafonné à 35 %)." },
  { term: "Taux d'endettement", cat: "Crédit", def: "Part des revenus consacrée aux remboursements de crédit. Recommandation : ne pas dépasser 33-35 % en France." },
  { term: "Apport personnel", cat: "Crédit", def: "Somme initiale apportée par l'emprunteur (épargne) sur un projet immobilier. Souvent demandé : 10 % minimum du prix du bien." },
  { term: "Assurance emprunteur", cat: "Crédit", def: "Couverture obligatoire de fait pour un crédit immobilier (décès, invalidité). Peut représenter jusqu'à un tiers du coût total." },
  { term: "Surendettement", cat: "Crédit", def: "Situation où les charges dépassent durablement les ressources. Dossier déposable à la Banque de France pour rééchelonner ou effacer les dettes." },
  { term: "Crédit revolving", cat: "Crédit", def: "Crédit renouvelable à taux élevé (souvent > 15 %). À éviter sauf urgence absolue. Très utilisé par les arnaques au surendettement." },

  // CRYPTO
  { term: "Blockchain", cat: "Crypto", def: "Registre numérique partagé entre des milliers d'ordinateurs, qui valide et conserve chaque transaction de façon difficilement falsifiable." },
  { term: "Wallet", cat: "Crypto", def: "Portefeuille numérique stockant les clés cryptographiques permettant d'accéder à ses crypto-actifs. Peut être chaud (en ligne) ou froid (matériel)." },
  { term: "Clé privée", cat: "Crypto", def: "Mot de passe cryptographique qui prouve la propriété d'un actif sur la blockchain. Perdue = fonds perdus à jamais." },
  { term: "Stablecoin", cat: "Crypto", def: "Cryptomonnaie indexée sur une monnaie classique (souvent le dollar). Censée être stable, mais certaines ont déjà fait faillite (UST en 2022)." },
  { term: "DeFi", cat: "Crypto", def: "Finance décentralisée : applications financières (prêts, échanges) fonctionnant sans intermédiaire bancaire, via des smart contracts." },
  { term: "Rug pull", cat: "Crypto", def: "Arnaque où les créateurs d'un projet crypto disparaissent avec les fonds des investisseurs. Très fréquent sur les petits tokens." },
  { term: "Pig butchering", cat: "Crypto", def: "Arnaque longue durée : un inconnu noue une relation de confiance puis pousse à investir sur une plateforme bidon. Les pertes peuvent atteindre des centaines de milliers d'euros." },
  { term: "Phishing", cat: "Crypto", def: "Hameçonnage : faux site / faux e-mail qui imite un service connu pour voler tes accès ou ta clé privée." },

  // GÉNÉRAL
  { term: "Inflation", cat: "Général", def: "Hausse générale des prix qui réduit le pouvoir d'achat d'un même montant d'argent. À 2 %/an, 100 € en 2026 équivalent à ~82 € de pouvoir d'achat en 2036." },
  { term: "Pouvoir d'achat", cat: "Général", def: "Quantité de biens et services qu'un montant d'argent permet d'acquérir. Diminue avec l'inflation, augmente avec la déflation." },
  { term: "Taux d'intérêt", cat: "Général", def: "Pourcentage qui rémunère l'argent prêté (épargne) ou paye le coût d'un emprunt (crédit)." },
  { term: "Ponzi", cat: "Général", def: "Arnaque pyramidale : les gains des anciens investisseurs sont payés par les versements des nouveaux. S'écroule quand le recrutement ralentit." },
  { term: "Cygne noir", cat: "Général", def: "Événement très rare, imprévisible et à conséquences majeures (crise 2008, Covid). Concept popularisé par Nassim Taleb." },
];

export const GLOSSARY_CATS = ["Tous", "Budget", "Épargne", "Invest", "Fiscalité", "Crédit", "Crypto", "Général"];
