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
      color: 'from-red-500 to-red-600',
      colorDark: 'dark:from-red-400 dark:to-red-500',
      iconBg: 'bg-red-100 dark:bg-red-900/50',
      iconColor: 'text-red-600 dark:text-red-400'
    },
    {
      id: 'esprit',
      title: 'Esprit d\'entreprise',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
      colorDark: 'dark:from-purple-400 dark:to-purple-500',
      iconBg: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      id: 'ethique',
      title: 'Éthique',
      icon: Shield,
      color: 'from-blue-600 to-blue-700',
      colorDark: 'dark:from-blue-500 dark:to-blue-600',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'professionnalisme',
      title: 'Professionnalisme',
      icon: Award,
      color: 'from-orange-500 to-orange-600',
      colorDark: 'dark:from-orange-400 dark:to-orange-500',
      iconBg: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      id: 'confiance',
      title: 'Confiance',
      icon: Handshake,
      color: 'from-teal-500 to-teal-600',
      colorDark: 'dark:from-teal-400 dark:to-teal-500',
      iconBg: 'bg-teal-100 dark:bg-teal-900/50',
      iconColor: 'text-teal-600 dark:text-teal-400'
    },
    {
      id: 'excellence',
      title: 'Gouvernance exemplaire & Excellence',
      icon: Target,
      color: 'from-indigo-500 to-indigo-600',
      colorDark: 'dark:from-indigo-400 dark:to-indigo-500',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    }
  ];

  const enterpriseValues: Value[] = [
    {
      id: 'formation',
      title: 'Formation des employés',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      colorDark: 'dark:from-blue-400 dark:to-blue-500',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'technologie',
      title: 'Maîtrise technologique',
      icon: Lightbulb,
      color: 'from-yellow-500 to-yellow-600',
      colorDark: 'dark:from-yellow-400 dark:to-yellow-500',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/50',
      iconColor: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      id: 'social',
      title: 'Amélioration de l\'environnement social',
      icon: Users,
      color: 'from-pink-500 to-pink-600',
      colorDark: 'dark:from-pink-400 dark:to-pink-500',
      iconBg: 'bg-pink-100 dark:bg-pink-900/50',
      iconColor: 'text-pink-600 dark:text-pink-400'
    },
    {
      id: 'satisfaction',
      title: 'Satisfaction client',
      icon: Award,
      color: 'from-green-500 to-green-600',
      colorDark: 'dark:from-green-400 dark:to-green-500',
      iconBg: 'bg-green-100 dark:bg-green-900/50',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      id: 'partenaires',
      title: 'Respect des partenaires',
      icon: Handshake,
      color: 'from-cyan-500 to-cyan-600',
      colorDark: 'dark:from-cyan-400 dark:to-cyan-500',
      iconBg: 'bg-cyan-100 dark:bg-cyan-900/50',
      iconColor: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      id: 'savoir-faire',
      title: 'Acquisition de savoir-faire',
      icon: BookOpen,
      color: 'from-violet-500 to-violet-600',
      colorDark: 'dark:from-violet-400 dark:to-violet-500',
      iconBg: 'bg-violet-100 dark:bg-violet-900/50',
      iconColor: 'text-violet-600 dark:text-violet-400'
    },
    {
      id: 'durable',
      title: 'Développement durable',
      icon: Leaf,
      color: 'from-emerald-500 to-emerald-600',
      colorDark: 'dark:from-emerald-400 dark:to-emerald-500',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20 overflow-hidden dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Décorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 dark:bg-blue-700/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-900 dark:text-orange-400 mb-4">
            Nos Valeurs
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 dark:from-orange-400 dark:to-blue-700 mx-auto rounded mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SARPI s&apos;appuie sur deux axes complémentaires pour son développement et l&apos;accomplissement de ses missions
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-100 dark:border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              SARPI s&apos;engage à respecter ces valeurs dans toutes ses actions, en adoptant une <span className="font-semibold text-blue-900 dark:text-orange-400">bonne gouvernance</span>, une <span className="font-semibold text-blue-900 dark:text-orange-400">intégrité</span> dans ses relations, et en favorisant l&apos;<span className="font-semibold text-blue-900 dark:text-orange-400">excellence</span> et la reconnaissance des compétences.
            </p>
          </div>
        </div>

        {/* Valeurs Fondamentales */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-900 dark:text-orange-300 mb-3 inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              Valeurs Fondamentales
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Les piliers de notre engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundamentalValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-opacity-50 transition-all duration-300 group ${
                    hoveredCard === value.id ? 'transform -translate-y-2 shadow-2xl border-orange-500/50 dark:border-orange-400/50' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`${value.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{value.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Valeurs d'Entreprise */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-900 dark:text-orange-300 mb-3 inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              Valeurs d&apos;Entreprise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Notre vision du développement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {enterpriseValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-opacity-50 transition-all duration-300 group ${
                    hoveredCard === value.id ? 'transform -translate-y-2 shadow-2xl border-blue-900/50 dark:border-blue-700/50' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`${value.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{value.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagements */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-2xl shadow-xl p-8 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Dignité & Égalité</h4>
            <p className="text-white/90">
              SARPI veille à traiter ses employés avec dignité et à garantir l&apos;égalité des chances pour tous.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Respect des Engagements</h4>
            <p className="text-white/90">
              SARPI respecte ses engagements envers tous ses partenaires et parties prenantes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Responsabilité Citoyenne</h4>
            <p className="text-white/90">
              Protection de la santé des communautés et préservation de l&apos;environnement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}