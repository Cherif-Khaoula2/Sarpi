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
      hoverColor: 'hover:border-orange-500 dark:hover:border-orange-400',
      iconBg: 'bg-white/90',
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
      hoverColor: 'hover:border-blue-700 dark:hover:border-blue-500',
      iconBg: 'bg-white/90',
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
      color: 'from-orange-600 to-blue-900',
      colorDark: 'dark:from-orange-500 dark:to-blue-700',
      bgColor: 'bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/10 dark:to-blue-900/10',
      borderColor: 'border-orange-200 dark:border-orange-800',
      hoverColor: 'hover:border-orange-500 dark:hover:border-orange-400',
      iconBg: 'bg-white/90',
      iconColor: 'text-orange-600 dark:text-orange-400',
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
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-32 pb-20 overflow-hidden">
      {/* Décorations améliorées */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-blue-900/10 dark:from-orange-400/15 dark:to-blue-700/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/10 to-orange-500/10 dark:from-blue-700/15 dark:to-orange-400/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-blue-900/5 dark:from-orange-400/10 dark:to-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header amélioré */}
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
            Politique <span className="text-orange-500 dark:text-orange-300">QHSE</span>
          </h2>
         <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded mb-6" />

          <p className="text-lg max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Qualité, Santé, Sécurité et Environnement - Notre engagement pour l&apos;excellence et la durabilité dans tous nos projets industriels.
          </p>
        </div>
        
        {/* Cards Grid améliorée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div
                key={policy.id}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 transition-all duration-500 ${policy.borderColor} ${policy.hoverColor} ${
                  hoveredCard === policy.id ? 'transform -translate-y-3 shadow-2xl scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setHoveredCard(policy.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header avec dégradé amélioré */}
                <div className={`bg-gradient-to-br ${policy.color} ${policy.colorDark} p-8 rounded-t-3xl relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
                  
                  <div className="relative">
                    <div className={`${policy.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 ${
                      hoveredCard === policy.id ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className={`w-10 h-10 ${policy.iconColor}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">{policy.title}</h2>
                    <p className="text-white/95 text-base font-medium">{policy.description}</p>
                  </div>
                </div>

                {/* Card Content amélioré */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded-full" />
                    <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Nos Engagements
                    </h3>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {policy.points.map((point, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 flex items-center justify-center mt-0.5 mr-3 transform transition-transform group-hover:scale-110">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Download Button amélioré */}
                  <button
                    onClick={() => handleDownloadPDF(policy.pdfUrl)}
                    className={`w-full bg-gradient-to-r ${policy.color} ${policy.colorDark} text-white py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <FileText className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Télécharger le PDF</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer amélioré */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-white to-orange-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-2xl p-10 border-2 border-orange-200/50 dark:border-orange-800/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-blue-900/10 rounded-full -mr-32 -mt-32 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-900/10 to-orange-500/10 rounded-full -ml-32 -mb-32 blur-2xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-orange-300 mb-4">
                SARPI - Excellence et Engagement
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
                Dans le cadre de la mise en place du Système de Management Intégré, SARPI s&apos;engage à améliorer continuellement la Qualité de ses produits et services, tout en maintenant un niveau élevé de sécurité au travail, de santé et de protection de l&apos;environnement.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 text-white rounded-full font-semibold shadow-lg">
                  ISO 9001
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-950 dark:from-blue-700 dark:to-blue-800 text-white rounded-full font-semibold shadow-lg">
                  ISO 45001
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-orange-600 to-blue-900 dark:from-orange-500 dark:to-blue-700 text-white rounded-full font-semibold shadow-lg">
                  ISO 14001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}