'use client';
import React from 'react';
import Image from 'next/image';

const QHSE = () => {
  const policies = [
    {
      title: 'Qualité',
      icon: '/images/qhse/ISO_9001.png', // icône ou logo
      description: `Améliorer continuellement la Qualité de nos produits et services tout en maintenant sécurité, santé et protection de l'environnement.`,
      points: [
        "Fournir un environnement propice et collaborer avec les parties prenantes.",
        "Développer notre portefeuille client par de nouveaux marchés en EPC.",
        "Accroître la satisfaction des clients et parties intéressées.",
        "Attribuer les responsabilités et autorités pour atteindre les résultats planifiés.",
        "Renouveler les moyens matériels et équipements.",
        "Encourager une culture de prévention à tous les niveaux."
      ],
      docLink: '/documents/qualite.pdf'
    },
    {
      title: 'Santé & Sécurité',
      icon: '/images/qhse/ISO_45001.png',
      description: `Garantir un haut niveau de sécurité et de protection pour nos employés, clients et toutes personnes sous notre contrôle.`,
      points: [
        "Prévenir tout préjudice ou atteinte à la santé et sécurité.",
        "Respecter les exigences légales et réglementaires.",
        "Éliminer les dangers et réduire les risques.",
        "Consulter et faire participer les travailleurs.",
        "Améliorer continuellement notre Système de Management Intégré."
      ],
      docLink: '/documents/hse.pdf'
    },
    {
      title: 'Environnement',
      icon: '/images/qhse/ISO_14001.png',
      description: `Engagement à protéger l'environnement, réduire notre empreinte et promouvoir le développement durable.`,
      points: [
        "Prévenir la pollution et protéger l'environnement.",
        "Réduire notre empreinte environnementale.",
        "Mettre en place une meilleure gestion des déchets."
      ],
      docLink: '/documents/environnement.pdf'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20 overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">Politique QHSE</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl p-8 border-l-8 border-orange-500 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icône */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={policy.icon}
                  alt={policy.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{policy.title}</h3>

              {/* Description */}
              <p className="text-gray-700 mb-4 text-center">{policy.description}</p>

              {/* Points */}
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                {policy.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Bouton */}
              <div className="text-center">
                <a
                  href={policy.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-900 text-white font-semibold rounded-xl shadow-lg hover:from-orange-600 hover:to-blue-800 transition-all duration-300"
                >
                  Consulter le document
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QHSE;
