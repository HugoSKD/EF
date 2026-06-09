// Index de recherche : tous les contenus accessibles via Cmd/Ctrl+K
// Maintenu manuellement car les leçons sont du JSX, pas du texte brut.

export const SEARCH_INDEX = [
  // ===== PAGES PRINCIPALES =====
  { type: "page", page: "accueil", title: "Accueil", desc: "Vue d'ensemble du parcours", keywords: "home accueil découvrir" },
  { type: "page", page: "outils", title: "Boîte à outils", desc: "7 simulateurs interactifs", keywords: "calculateur simulateur tools" },
  { type: "page", page: "glossaire", title: "Glossaire", desc: "50+ termes financiers définis", keywords: "définition lexique vocabulaire" },
  { type: "page", page: "conditions", title: "Conditions d'utilisation", desc: "Mentions légales & RGPD", keywords: "cgu légal rgpd" },

  // ===== BUDGET =====
  { type: "topic", page: "budget", topic: "flux", title: "Comprendre ses flux d'argent", desc: "Revenus, dépenses fixes et variables", keywords: "budget revenu salaire" },
  { type: "topic", page: "budget", topic: "503020", title: "La méthode 50/30/20", desc: "Répartition besoins / envies / épargne", keywords: "50 30 20 enveloppes Warren" },
  { type: "topic", page: "budget", topic: "suivi", title: "Suivre ses dépenses", desc: "Traquer les fuites invisibles en 30 jours", keywords: "tracking dépenses analyse" },
  { type: "topic", page: "budget", topic: "urgence", title: "Le fonds d'urgence", desc: "3 à 6 mois de dépenses de sécurité", keywords: "réserve sécurité matelas livret" },
  { type: "topic", page: "budget", topic: "renegocier", title: "Renégocier ses contrats", desc: "Hamon, Lemoine, audit annuel", keywords: "assurance mutuelle internet contrat renégociation" },

  // ===== ÉPARGNE =====
  { type: "topic", page: "epargne", topic: "vs", title: "Épargne ou investissement ?", desc: "Sécurité vs croissance, règle des horizons", keywords: "épargne investissement choix" },
  { type: "topic", page: "epargne", topic: "composes", title: "Les intérêts composés", desc: "L'effet boule de neige sur le long terme", keywords: "composés règle 72 capitalisation snowball" },
  { type: "topic", page: "epargne", topic: "supports", title: "Les supports d'épargne", desc: "Livrets, assurance-vie, PEA, PER", keywords: "livret assurance-vie PEA PER enveloppe" },
  { type: "topic", page: "epargne", topic: "inflation", title: "Inflation & automatisation", desc: "L'ennemi silencieux et la stratégie sans effort", keywords: "inflation virement automatique" },
  { type: "topic", page: "epargne", topic: "objectifs", title: "Épargner pour un objectif précis", desc: "Méthode + horizon → support adapté", keywords: "objectif voyage apport mariage" },
  { type: "topic", page: "epargne", topic: "salariale", title: "L'épargne salariale", desc: "PEE, PER d'entreprise, abondement employeur", keywords: "PEE PERCO abondement participation intéressement" },

  // ===== INVESTISSEMENT =====
  { type: "topic", page: "invest", topic: "risque", title: "La loi risque / rendement", desc: "Aucun gain élevé sans risque correspondant", keywords: "risque rendement volatilité" },
  { type: "topic", page: "invest", topic: "actifs", title: "Les classes d'actifs", desc: "Actions, obligations, ETF, immobilier", keywords: "actions obligations ETF action obligation" },
  { type: "topic", page: "invest", topic: "principes", title: "Les principes qui marchent", desc: "Diversifier, long terme, frais, DCA", keywords: "DCA diversification frais long terme" },
  { type: "topic", page: "invest", topic: "psycho", title: "Psychologie & check-list", desc: "Biais cognitifs et préalables à valider", keywords: "FOMO panique biais psychologie comportement" },
  { type: "topic", page: "invest", topic: "allocation", title: "Construire son allocation", desc: "Règle 100−âge, portefeuilles classiques", keywords: "allocation 60/40 portefeuille répartition" },
  { type: "topic", page: "invest", topic: "responsable", title: "Investissement responsable (ESG/ISR)", desc: "Critères ESG, labels, greenwashing", keywords: "ESG ISR durable greenfin finansol greenwashing" },

  // ===== FISCALITÉ =====
  { type: "topic", page: "fiscalite", topic: "ir", title: "L'impôt sur le revenu", desc: "Mécanique des tranches, TMI, quotient familial", keywords: "tranche TMI quotient familial impôt" },
  { type: "topic", page: "fiscalite", topic: "flat", title: "PFU & revenus du capital", desc: "Flat tax 30 %, option barème, enveloppes", keywords: "PFU flat tax dividendes intérêts plus-values" },
  { type: "topic", page: "fiscalite", topic: "reductions", title: "Réductions & niches", desc: "PER, dons, investissement locatif, plafond 10 000 €", keywords: "réduction niche déduction Pinel dons" },
  { type: "topic", page: "fiscalite", topic: "declarer", title: "Déclarer ses impôts pas à pas", desc: "Calendrier, pré-rempli, ajouts, erreurs fréquentes", keywords: "déclaration impots.gouv.fr formulaire avril mai" },

  // ===== CRÉDIT =====
  { type: "topic", page: "credit", topic: "taeg", title: "TAEG : le seul taux qui compte", desc: "Taux nominal vs TAEG, assurance, lire une offre", keywords: "TAEG taux nominal coût crédit" },
  { type: "topic", page: "credit", topic: "immo", title: "Le crédit immobilier", desc: "Capacité d'emprunt, durée, apport, renégociation", keywords: "immobilier emprunt apport durée capacité" },
  { type: "topic", page: "credit", topic: "conso", title: "Crédit conso : pièges à éviter", desc: "Revolving, BNPL, quand le conso a du sens", keywords: "revolving consommation BNPL 4 fois" },
  { type: "topic", page: "credit", topic: "surendet", title: "Surendettement : comprendre, prévenir, réagir", desc: "Signaux d'alerte, procédure Banque de France", keywords: "surendettement Banque de France dossier dette" },
  { type: "topic", page: "credit", topic: "decouvert", title: "Découvert & carte maîtrisés", desc: "TAEG du découvert, débit immédiat/différé, frais", keywords: "découvert carte débit différé revolving commission" },

  // ===== CRYPTO =====
  { type: "topic", page: "crypto", topic: "bases", title: "Les bases sans jargon", desc: "Blockchain, cryptomonnaie, Web3, wallets", keywords: "blockchain bitcoin ethereum Web3 wallet" },
  { type: "topic", page: "crypto", topic: "risques", title: "Pourquoi c'est si risqué", desc: "Volatilité, régulation, erreurs irréversibles", keywords: "volatilité crypto FTX risque perte" },
  { type: "topic", page: "crypto", topic: "arnaques", title: "Repérer les arnaques", desc: "Signaux d'alerte, pig butchering, Ponzi", keywords: "arnaque scam pig butchering Ponzi rug pull" },
  { type: "topic", page: "crypto", topic: "esprit", title: "Garder l'esprit critique", desc: "Précautions et réflexes valables partout", keywords: "esprit critique prudence PSAN AMF" },
  { type: "topic", page: "crypto", topic: "premierachat", title: "Premier achat sécurisé", desc: "Préalables, PSAN, 2FA, hot/cold wallet", keywords: "premier achat 2FA wallet seed phrase Ledger" },

  // ===== OUTILS =====
  { type: "tool", page: "outils", title: "Calculateur d'intérêts composés", desc: "Simuler la croissance d'une épargne", keywords: "intérêts composés calculateur épargne simulation" },
  { type: "tool", page: "outils", title: "Simulateur budget 50/30/20", desc: "Comparer ton budget à la cible", keywords: "budget 50 30 20 simulateur" },
  { type: "tool", page: "outils", title: "Mensualité crédit", desc: "Calcul de mensualité et coût total", keywords: "crédit mensualité immobilier prêt simulateur" },
  { type: "tool", page: "outils", title: "Commencer tôt vs tard", desc: "Le coût d'un retard de 10 ans", keywords: "âge début retard temps long" },
  { type: "tool", page: "outils", title: "Salaire brut → net", desc: "Décomposition cotisations / impôt / net", keywords: "salaire brut net cotisations fiche de paie" },
  { type: "tool", page: "outils", title: "Diagnostic financier", desc: "7 questions, score personnalisé", keywords: "diagnostic test évaluation score" },
  { type: "tool", page: "outils", title: "PEA vs CTO", desc: "Impact concret des enveloppes fiscales", keywords: "PEA CTO compare enveloppe fiscalité" },
];
