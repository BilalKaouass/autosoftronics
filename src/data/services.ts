export type Service = {
  slug: "diagnostic" | "programmation" | "reparation" | "performance";
  name: string;
  short: string; // petit résumé (cards)
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  highlights: { label: string; value: string }[];
  includes: string[]; // liste des prestations (depuis ton docx)
  process: { step: string; title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "diagnostic",
    name: "Diagnostic électronique",
    short:
      "Diagnostic complet des calculateurs, lecture/effacement défauts, data live et recherche de pannes CAN.",
    seo: {
      title: "Diagnostic électronique | Auto Softronics",
      description:
        "Diagnostic complet ECU/ABS/Airbag/BSI-BCM, lecture défauts, analyse data live, recherche de pannes électroniques et réseau CAN.",
    },
    hero: {
      eyebrow: "Service 01 — Diagnostic",
      title: "Diagnostic avancés",
      subtitle:
        "Identifier la cause réelle, pas seulement le symptôme. Contrôles ciblés, mesures et analyse réseau CAN.",
    },
    highlights: [
      { label: "Ciblé", value: "Mesures & data live" },
      { label: "Réseau", value: "Analyse CAN" },
      { label: "Méthode", value: "Sur véhicule & sur banc" },
    ],
    includes: [
      "Diagnostic électronique automobile",
      "Diagnostic complet des modules et calculateurs (ECU, ABS, Airbag, BSI/BCM, TDB, Direction assistée, etc.)",
      "Lecture et effacement des codes défauts",
      'Analyse des données en temps réel ("live data")',
      "Recherche de pannes électroniques complexes",
      "Contrôle alimentation, masses et communication CAN",
      "Diagnostic sur banc et sur véhicule",
      "Diagnostic boite à vitesse DSG",
      "Diagnostic des problèmes anti-pollutions (FAP, ADBLUE et EGR)",
    ],
    process: [
      {
        step: "01",
        title: "Lecture & analyse",
        text: "Lecture des défauts, analyse des calculateurs concernés et des données en temps réel.",
      },
      {
        step: "02",
        title: "Contrôles ciblés",
        text: "Mesures (alims, masses), tests actionneurs/capteurs et vérification réseau CAN si nécessaire.",
      },
      {
        step: "03",
        title: "Conclusion & recommandations",
        text: "Résultat clair, cause identifiée, recommandations et plan d’intervention adapté.",
      },
    ],
  },

  {
    slug: "programmation",
    name: "Programmation & reprogrammation",
    short:
      "Codage, adaptation de modules, clonage, mises à jour constructeur et activation d’options (CarPlay/AA, retrofit…).",
    seo: {
      title: "Programmation & Codage ECU | Auto Softronics",
      description:
        "Codage et programmation de calculateurs, adaptation ECU/BSI/ABS/Airbag, clonage modules, mise à jour constructeur et activation d’options.",
    },
    hero: {
      eyebrow: "Service 02 — Programmation",
      title: "Programmation",
      subtitle:
        "Codage propre, procédures maîtrisées et validation post-intervention. Options & rétrofits selon compatibilité.",
    },
    highlights: [
      { label: "Sécurisé", value: "Procédure maîtrisée" },
      { label: "Modules", value: "ECU / BSI / ABS / Airbag" },
      { label: "Options", value: "CarPlay / Android Auto" },
    ],
    includes: [
      "Programmation et codage de calculateurs",
      "Reprogrammation moteur et boite de transmission",
      "Clonage de modules et calculateurs électroniques automobile",
      "Mise à jour logiciel constructeur",
      "Reproduction de clé automobile",
      "Réinitialisation de système crash Airbags",
      "Recherche de pannes électrique et électroniques complexes",
      "Configuration modules après remplacement",
      "Adaptation antidémarrage (IMMO)",
      "Ajout d’options constructeur (activation fonctionnalités cachées)",
      "Programmation d’options après retrofit (caméra, radar, virtual cockpit, etc.)",
      "Activation Apple CarPlay / Android Auto (selon compatibilité)",
      "Clonage de mécatronique de boîte à vitesse DSG",
    ],
    process: [
      {
        step: "01",
        title: "Sauvegarde & préparation",
        text: "Lecture/sauvegarde si nécessaire, identification des versions et pré-check compatibilité.",
      },
      {
        step: "02",
        title: "Codage / adaptation",
        text: "Programmation, adaptation ou clonage selon le module. Procédure contrôlée.",
      },
      {
        step: "03",
        title: "Validation",
        text: "Contrôle défauts, tests fonctionnels, validation et restitution avec explications.",
      },
    ],
  },

  {
    slug: "reparation",
    name: "Réparation électronique",
    short:
      "Réparation calculateurs et modules (ECU, ABS/ESP, Airbag, BSI/BCM, TDB…), composants SMD et circuits.",
    seo: {
      title: "Réparation électronique ECU & modules | Auto Softronics",
      description:
        "Réparation ECU, ABS/ESP, Airbag, BSI/BCM, tableaux de bord, colonnes de direction électroniques, composants SMD et circuits imprimés.",
    },
    hero: {
      eyebrow: "Service 03 — Réparation",
      title: "Réparation électronique",
      subtitle:
        "Intervention propre et durable : diagnostic, réparation ciblée, tests avant/après et fiabilité long terme.",
    },
    highlights: [
      { label: "Durable", value: "Réparation ciblée" },
      { label: "Composants", value: "CMS / SMD" },
      { label: "Contrôlé", value: "Tests avant/après" },
    ],
    includes: [
      "Réparation calculateurs moteur",
      "Réparation modules ABS / ESP",
      "Réparation électronique de la boite à transmission (DSG VW)",
      "Réparation modules FRM/CAS (BMW)",
      "Réparation centrale électrique (BSI, BCM, BDC, FEM,...)",
      "Réparation de compteurs, unité multimédia et système audio embarqué",
      "Réparation de modules de direction assistés",
      "Réparation clé automobile",
      "Remplacement de composants électroniques défectueux et réparation de pistes et masses sur circuits imprimés (PCB)",
      "Réparation de modules EZS et ESL (systèmes de démarrage et de verrouillage de direction Mercedes)",
      "Solution pour les systèmes anti-pollutions (FAP, ADBLUE et EGR)",
    ],
    process: [
      {
        step: "01",
        title: "Analyse & localisation",
        text: "Contrôles, identification de la panne et validation des symptômes (sur banc si nécessaire).",
      },
      {
        step: "02",
        title: "Réparation",
        text: "Intervention électronique : composants, pistes, masses, réparation circuit imprimé.",
      },
      {
        step: "03",
        title: "Tests & restitution",
        text: "Tests fonctionnels avant/après, contrôle défauts et restitution avec explications.",
      },
    ],
  },

  {
    slug: "performance",
    name: "Performance moteur",
    short:
      "Optimisation moteur, amélioration de l’agrément de conduite et interventions performance selon la configuration du véhicule.",
    seo: {
      title: "Performance moteur | Auto Softronics",
      description:
        "Optimisation performance moteur, amélioration du couple et de l’agrément de conduite, interventions électroniques et réglages selon compatibilité.",
    },
    hero: {
      eyebrow: "Service 04 — Performance",
      title: "Performance moteur",
      subtitle:
        "Booster vos performances, augmenter le plaisir de conduite et profitez d’une optimisation de consommation.",
    },
    highlights: [
      { label: "Optimisé", value: "Couple & agrément" },
      { label: "Maîtrisé", value: "Contrôles avant/après" },
      { label: "Compatible", value: "Selon véhicule" },
    ],
    includes: [
      "Lecture et sauvegarde des données d’origine du calculateur moteur (ECU)",
      "Optimisation de la boite à transmission automatique",
      "Analyse de l’état du véhicule et des paramètres moteur",
      "Optimisation de la cartographie moteur (Stage 1, 2, 3)",
      "Amélioration du couple, de la puissance et de la réactivité",
      "Respect des tolérances et des limites constructeur",
      "Écriture de la cartographie optimisée dans le calculateur",
      "Tests de fonctionnement après intervention",
      "Vérification de l’absence de défauts électroniques",
    ],
    process: [
      {
        step: "01",
        title: "Analyse & lecture ECU",
        text: "Lecture complète des données du calculateur moteur et analyse des paramètres afin d’assurer une base saine avant optimisation.",
      },
      {
        step: "02",
        title: "Optimisation sur mesure",
        text: "Ajustement de la cartographie moteur (Stage 1) pour améliorer les performances (couple, puissance, réactivité) dans le respect des limites mécaniques.",
      },
      {
        step: "03",
        title: "Validation & contrôle",
        text: "Tests et contrôles après intervention avec vérification des paramètres moteur et absence de défauts.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getServiceSlugs = () => services.map((s) => s.slug);