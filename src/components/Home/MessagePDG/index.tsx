import React from 'react';
import Image from "next/image";
const MessagePDG = () => {
  const photo = "/images/pdg/img.jpg";
  const nom = "Tarik NOUIZI";
  const titre = "Président Directeur Général";
  const message = `Chers visiteurs,

En ma qualité de Président Directeur Général et au nom de l'ensemble des effectifs, je tiens tout d'abord à vous remercier de l'intérêt que vous portez à la Société Algérienne de Réalisation de Projets Industriels, SARPI Spa, en visitant son site www.sarpi.dz.

A travers ce site, nous visons nous rapprocher davantage de nos clients, de nos partenaires et de tous les visiteurs en partageant nos progrès, notre développement, notre savoir-faire et être à leur écoute pour comprendre les besoins de chacun d'eux et satisfaire leurs exigences.

Forte de ses 32 ans d'expérience dans le secteur des Hydrocarbures et de l'Energie, de la synergie entre la stratégie et les prises de décisions ainsi que les efforts déployés à tous les niveaux que SARPI a pu devenir ce qu'elle est aujourd'hui : une Société digne d'une Société de réalisation de projets en Engineering, Procurement et Construction « EPC » par excellence.

SARPI marque aujourd'hui sa présence dans le domaine de l'hydraulique et se joint aux programmes d'urgence mis en place par les pouvoirs publics.

Nous poursuivons notre engagement en matière de modernisation des méthodes managériales et organisationnelles et aspirons devenir un leader incontournable dans la Réalisation de Projets Industriels en EPC dans les secteurs des hydrocarbures, de l'hydraulique et de l'énergie.

Merci pour votre confiance et votre soutien continus.`;

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 py-20 overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl" />
      
      {/* Lignes décoratives */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* En-tête avec logo SARPI */}
          <div className="text-left mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              {/* tu peux mettre des icônes ou badges ici */}
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">
              Mot du <span className="text-orange-500">Président</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900" />
          </div>


          {/* Contenu principal */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photos - Gauche */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Photo PDG */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-blue-900 rounded-2xl opacity-20 blur-xl" />
                
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={photo}
                      alt={`Photo de ${nom}`}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800">
                    <h3 className="text-xl font-bold text-white mb-1">{nom}</h3>
                    <p className="text-orange-300 text-sm font-medium mb-3">{titre}</p>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Leadership & Vision</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deux petits cadres supplémentaires */}
             <div className="grid grid-cols-2 gap-4">
               {/* Logo SARPI */}
               <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-orange-500/20 hover:border-orange-500 transition-all duration-300 flex flex-col items-center p-4">
                 <div className="w-16 h-16 relative mb-2">
                   <Image
                     src="/images/logo/logo-sarpi.png"
                     alt="Logo SARPI"
                     fill
                     className="object-contain"
                   />
                 </div>
                 <p className="text-xs font-bold text-blue-900">SARPI</p>
               </div>
             
               {/* Logo SONATRACH */}
               <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-900/20 hover:border-blue-900 transition-all duration-300 flex flex-col items-center p-4">
                 <div className="w-16 h-16 relative mb-2">
                   <Image
                     src="/images/logo/logo-sonatrach.svg"
                     alt="Logo SONATRACH"
                     fill
                     className="object-contain"
                   />
                 </div>
                 <p className="text-xs font-bold text-blue-900">SONATRACH</p>
               </div>
             </div>


            </div>

            {/* Message - Droite */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {/* Citation ouvrante */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                      {message}
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t-2 border-gradient-to-r from-orange-500 to-blue-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-900 font-bold text-lg">Le Président Directeur Général</p>
                      <p className="text-gray-600 text-sm mt-1">SARPI Spa</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-900/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistiques rapides */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-500">30+</p>
                    <p className="text-xs text-gray-600">Ans d'expérience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-900">EPC</p>
                    <p className="text-xs text-gray-600">Excellence</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-500">Leader</p>
                    <p className="text-xs text-gray-600">Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePDG;