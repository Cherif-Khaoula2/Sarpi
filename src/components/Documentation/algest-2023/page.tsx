"use client"
import Image from "next/image"
import Link from "next/link"
import image4 from "/public/images/documentation/4.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function ALGEST2023Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode pt-[72px] md:pt-[96px]">

            <div className="relative h-96 w-full">
                <Image
                    src={image4}
                    alt="ALGEST 2023"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg">
                            Salon
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">

                            Présence au Salon International de la Sous-Traitance Industrielle
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>Avril 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" />
                                <span>SAFEX, Alger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                
                <article className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-MidnightNavyText dark:text-white mb-4">
                            SARPI renforce sa position dans la sous-traitance industrielle
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI a participé à la 8ème édition du Salon International de la Sous-Traitance Industrielle (ALGEST2023),
                             du 16 au 19 Octobre au Palais des Expositions , Safex - Pavillon U. Le coup d’envoi de cette 8ème édition 
                             a été donné par le Directeur Général de la Promotion de l’Investissement au Ministère de l’Industrie et de
                              la Production Pharmaceutique, M. Salah BOUSBIA ainsi que le Président du Conseil du Renouveau Economique 
                              Algérien (CREA), M. Kamel MOULA.

                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-8">
                                           Le programme de cette exposition a été rehaussé par des conférences économiques
                                            traitants diverses thématiques notamment : « Politique industrielle et Sous-traitance 
                                            en Algérie : Une vision stratégique », « Economie circulaire et développement durable 
                                            en Algérie » ainsi que des sessions de questions-réponses sur les thèmes présentés. 
                                            Cette manifestation fut une occasion de rencontre pour les opérateurs économiques et
                                             ceux intéressés par la sous-traitance, les producteurs et les donneurs d’ordres, pour
                                              établir un partenariat fructueux susceptible de développer le tissu de la 
                                              sous-traitance en Algérie .

                           
                           
                        </div>

                      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <a
                                href="/pdfs/07-SARPI-NEWS-ALGEST_compressed.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <Icon icon="mdi:file-pdf-box" className="text-2xl" />
                                <span>Voir les détails en PDF</span>
                                <Icon icon="mdi:open-in-new" className="text-lg" />
                            </a>
                        </div>

                       

                    </div>
                </article>
            </div>
        </div>
    )
}