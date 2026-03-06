export type Service = {
  slug: "diagnostic" | "programmation" | "reparation";
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
      title: "Diagnostic électronique",
      subtitle:
        "Identifier la cause réelle, pas seulement le symptôme. Contrôles ciblés, mesures et analyse réseau CAN.",
    },
    highlights: [
      { label: "Ciblé", value: "Mesures & data live" },
      { label: "Réseau", value: "Analyse CAN" },
      { label: "Méthode", value: "Sur véhicule & sur banc" },
    ],
    includes: [
      "Diagnostic complet des calculateurs (ECU, ABS, Airbag, BSI/BCM, TDB, Direction assistée, etc.)",
      "Lecture et effacement des défauts",
      'Analyse des données en temps réel ("live data")',
      "Recherche de pannes électroniques complexes",
      "Contrôle alimentation, masses et communication CAN",
      "Diagnostic sur banc et sur véhicule",
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
      title: "Programmation & reprogrammation",
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
      "Adaptation ECU, BSI, ABS, Airbag",
      "Clonage de modules électroniques",
      "Mise à jour logiciel constructeur",
      "Configuration modules après remplacement",
      "Suppression / adaptation antidémarrage (selon législation)",
      "Ajout d’options constructeur (activation fonctionnalités cachées)",
      "Programmation d’options après retrofit (caméra, radar, virtual cockpit, etc.)",
      "Activation Apple CarPlay / Android Auto (selon compatibilité)",
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
      "Réparation calculateurs moteur (ECU)",
      "Réparation modules ABS / ESP",
      "Réparation Airbag",
      "Réparation BSI / BCM",
      "Réparation tableaux de bord",
      "Réparation colonnes de direction électroniques",
      "Remplacement composants CMS (SMD)",
      "Réparation pistes, masses et circuits imprimés",
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
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getServiceSlugs = () => services.map((s) => s.slug);