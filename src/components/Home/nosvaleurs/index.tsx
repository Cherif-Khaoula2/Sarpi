'use client';

import React, { useState } from 'react';
import { Heart, Briefcase, Shield, Award, Users, Target, Lightbulb, Leaf, TrendingUp, Handshake, GraduationCap, BookOpen } from 'lucide-react';

interface Value {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  colorDark: string;
  iconBg: string;
  iconColor: string;
}

export default function NosValeurs() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const fundamentalValues: Value[] = [
    {
      id: 'engagement',
      title: 'Engagement envers le pays',
      icon: Heart,
      color: 'from-orange-500 to-orange-600',
      colorDark: 'dark:from-orange-400 dark:to-orange-500',
      iconBg: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      id: 'esprit',
      title: 'Esprit d\'entreprise',
      icon: Briefcase,
      color: 'from-blue-600 to-blue-700',
      colorDark: 'dark:from-blue-500 dark:to-blue-600',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'ethique',
      title: 'Éthique',
      icon: Shield,
      color: 'from-blue-800 to-blue-900',
      colorDark: 'dark:from-blue-600 dark:to-blue-700',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-800 dark:text-blue-400'
    },
    {
      id: 'professionnalisme',
      title: 'Professionnalisme',
      icon: Award,
      color: 'from-orange-600 to-orange-700',
      colorDark: 'dark:from-orange-500 dark:to-orange-600',
      iconBg: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-700 dark:text-orange-400'
    },
    {
      id: 'confiance',
      title: 'Confiance',
      icon: Handshake,
      color: 'from-blue-700 to-blue-800',
      colorDark: 'dark:from-blue-500 dark:to-blue-600',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-700 dark:text-blue-400'
    },
    {
      id: 'excellence',
      title: 'Gouvernance exemplaire & Excellence',
      icon: Target,
      color: 'from-orange-700 to-blue-900',
      colorDark: 'dark:from-orange-500 dark:to-blue-700',
      iconBg: 'bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/50 dark:to-blue-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const enterpriseValues: Value[] = [
    {
      id: 'formation',
      title: 'Formation des employés',
      icon: GraduationCap,
      color: 'from-blue-600 to-blue-700',
      colorDark: 'dark:from-blue-500 dark:to-blue-600',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'technologie',
      title: 'Maîtrise technologique',
      icon: Lightbulb,
      color: 'from-orange-500 to-orange-600',
      colorDark: 'dark:from-orange-400 dark:to-orange-500',
      iconBg: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      id: 'social',
      title: 'Amélioration de l\'environnement social',
      icon: Users,
      color: 'from-blue-700 to-blue-800',
      colorDark: 'dark:from-blue-500 dark:to-blue-600',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-700 dark:text-blue-400'
    },
    {
      id: 'satisfaction',
      title: 'Satisfaction client',
      icon: Award,
      color: 'from-orange-600 to-orange-700',
      colorDark: 'dark:from-orange-500 dark:to-orange-600',
      iconBg: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      id: 'partenaires',
      title: 'Respect des partenaires',
      icon: Handshake,
      color: 'from-blue-800 to-blue-900',
      colorDark: 'dark:from-blue-600 dark:to-blue-700',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-800 dark:text-blue-400'
    },
    {
      id: 'savoir-faire',
      title: 'Acquisition de savoir-faire',
      icon: BookOpen,
      color: 'from-orange-500 to-blue-700',
      colorDark: 'dark:from-orange-400 dark:to-blue-600',
      iconBg: 'bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/50 dark:to-blue-900/50',
      iconColor: 'text-blue-700 dark:text-blue-400'
    },
    {
      id: 'durable',
      title: 'Développement durable',
      icon: Leaf,
      color: 'from-blue-600 to-orange-600',
      colorDark: 'dark:from-blue-500 dark:to-orange-500',
      iconBg: 'bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900/50 dark:to-orange-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-32 pb-20 overflow-hidden">
      {/* Décorations améliorées */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-blue-900/10 dark:from-orange-400/15 dark:to-blue-700/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/10 to-orange-500/10 dark:from-blue-700/15 dark:to-orange-400/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-blue-900/5 dark:from-orange-400/10 dark:to-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-orange-400 mb-2">
            Nos <span className="text-orange-500 dark:text-orange-300">Valeurs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 rounded mb-6" />
          <p className="text-lg  text-gray-700 dark:text-gray-300 leading-relaxed">
            SARPI s&apos;appuie sur deux axes complémentaires pour son développement et l&apos;accomplissement de ses missions
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-white to-orange-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-2xl p-10 mb-16 border-2 border-orange-200/50 dark:border-orange-800/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-blue-900/10 rounded-full -mr-32 -mt-32 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-900/10 to-orange-500/10 rounded-full -ml-32 -mb-32 blur-2xl" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
       
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              SARPI s&apos;engage à respecter ces valeurs dans toutes ses actions, en adoptant une <span className="font-semibold text-blue-900 dark:text-orange-400">bonne gouvernance</span>, une <span className="font-semibold text-blue-900 dark:text-orange-400">intégrité</span> dans ses relations, et en favorisant l&apos;<span className="font-semibold text-blue-900 dark:text-orange-400">excellence</span> et la reconnaissance des compétences.
            </p>
          </div>
        </div>

        {/* Valeurs Fondamentales */}
        <div className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-orange-300">
                Valeurs Fondamentales
              </h3>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundamentalValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-2 border-orange-200/50 dark:border-orange-800/30 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-500 group relative overflow-hidden ${
                    hoveredCard === value.id ? 'transform -translate-y-3 shadow-2xl scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-blue-900/5 dark:from-orange-400/10 dark:to-blue-700/10 rounded-full -mr-16 -mt-16 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className={`${value.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg transform transition-all duration-300 ${
                      hoveredCard === value.id ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{value.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Valeurs d'Entreprise */}
        <div className="mb-16">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-orange-300">
                Valeurs d&apos;Entreprise
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {enterpriseValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-2 border-blue-200/50 dark:border-blue-800/30 hover:border-blue-700 dark:hover:border-blue-500 transition-all duration-500 group relative overflow-hidden ${
                    hoveredCard === value.id ? 'transform -translate-y-3 shadow-2xl scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-blue-900/5 dark:from-orange-400/10 dark:to-blue-700/10 rounded-full -mr-16 -mt-16 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className={`${value.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg transform transition-all duration-300 ${
                      hoveredCard === value.id ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{value.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagements */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Users className="w-9 h-9 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Dignité & Égalité</h4>
              <p className="text-white/95 leading-relaxed">
                SARPI veille à traiter ses employés avec dignité et à garantir l&apos;égalité des chances pour tous.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Handshake className="w-9 h-9 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Respect des Engagements</h4>
              <p className="text-white/95 leading-relaxed">
                SARPI respecte ses engagements envers tous ses partenaires et parties prenantes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-blue-900 dark:from-orange-500 dark:to-blue-700 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Leaf className="w-9 h-9 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Responsabilité Citoyenne</h4>
              <p className="text-white/95 leading-relaxed">
                Protection de la santé des communautés et préservation de l&apos;environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}