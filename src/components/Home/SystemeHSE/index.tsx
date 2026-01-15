'use client';

import React, { useState } from 'react';
import { FileText, Award, Shield, Leaf, ChevronRight } from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  colorDark: string;
  bgColor: string;
  borderColor: string;
  hoverColor: string;
  iconBg: string;
  iconColor: string;
  description: string;
  points: string[];
  pdfUrl?: string;
}

export default function QHSEPolicy() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const policies: Policy[] = [
    {
      id: 'qualite',
      title: 'Qualité',
      icon: Award,
      color: 'from-orange-500 to-orange-600',
      colorDark: 'dark:from-orange-400 dark:to-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      hoverColor: 'hover:border-orange-400 dark:hover:border-orange-400',
      iconBg: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400',
      description: 'Système de Management Intégré',
      points: [
        'Fournir et maintenir l\'environnement nécessaire en tissant des relations avec les Parties Intéressées Pertinentes',
        'Développer notre portefeuille client par de nouveaux marchés en EPC',
        'Accroître la satisfaction de nos clients et des autres parties intéressées',
        'Attribuer les responsabilités et autorités pour des rôles pertinents',
        'Enrichir et renouveler l\'actif de la société en moyens matériels',
        'Encourager une culture de prévention à tous les niveaux'
      ],
      pdfUrl: '/pdfs/politique-qualite.pdf'
    },
    {
      id: 'sante-securite',
      title: 'Santé et Sécurité au Travail',
      icon: Shield,
      color: 'from-blue-900 to-blue-950',
      colorDark: 'dark:from-blue-700 dark:to-blue-800',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverColor: 'hover:border-blue-400 dark:hover:border-blue-400',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-900 dark:text-blue-400',
      description: 'Protection de toutes les parties prenantes',
      points: [
        'Prévention de tout préjudice ou atteinte à la santé et à la sécurité',
        'Satisfaire les exigences légales et réglementaires applicables',
        'Éliminer les dangers et réduire les risques HSE',
        'Consulter et faire participer les travailleurs',
        'Améliorer continuellement notre Système de Management Intégré'
      ],
      pdfUrl: '/pdfs/politique-sante-securite.pdf'
    },
    {
      id: 'environnement',
      title: 'Environnement',
      icon: Leaf,
      color: 'from-green-600 to-green-700',
      colorDark: 'dark:from-green-500 dark:to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      hoverColor: 'hover:border-green-400 dark:hover:border-green-400',
      iconBg: 'bg-green-100 dark:bg-green-900/50',
      iconColor: 'text-green-600 dark:text-green-400',
      description: 'Développement durable et protection environnementale',
      points: [
        'Protéger l\'Environnement y compris la prévention de la pollution',
        'Maîtriser et réduire notre empreinte environnementale',
        'Mettre en place de nouvelles dispositions pour une meilleure gestion de nos déchets',
        'Perspective de développement durable'
      ],
      pdfUrl: '/pdfs/politique-environnement.pdf'
    }
  ];

  const handleDownloadPDF = (pdfUrl?: string) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20 overflow-hidden dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Décorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-900 dark:text-orange-400 mb-4">
            Politique QHSE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mx-auto rounded mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Qualité, Santé, Sécurité et Environnement - Notre engagement pour l&apos;excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div
                key={policy.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 transition-all duration-300 ${policy.borderColor} ${policy.hoverColor} ${
                  hoveredCard === policy.id ? 'transform -translate-y-2 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(policy.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${policy.color} ${policy.colorDark} p-6 rounded-t-2xl`}>
                  <div className={`${policy.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${policy.iconColor}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{policy.title}</h2>
                  <p className="text-white/90 text-sm">{policy.description}</p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
                    Nos Engagements
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {policy.points.map((point, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownloadPDF(policy.pdfUrl)}
                    className={`w-full bg-gradient-to-r ${policy.color} ${policy.colorDark} text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <FileText className="w-5 h-5" />
                    <span>Ouvrir le PDF</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-300 mb-4">
              SARPI - Excellence et Engagement
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dans le cadre de la mise en place du Système de Management Intégré, SARPI s&apos;engage à améliorer continuellement la Qualité de ses produits et services, tout en maintenant un niveau élevé de sécurité au travail, de santé et de protection de l&apos;environnement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}