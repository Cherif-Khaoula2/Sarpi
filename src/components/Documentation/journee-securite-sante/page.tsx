"use client"
import Image from "next/image"
import Link from "next/link"
import image5 from "/public/images/documentation/5.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function SecuriteSantePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode pt-[72px] md:pt-[96px]">

            <div className="relative h-96 w-full">
                <Image
                    src={image5}
                    alt="Journée Sécurité et Santé"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                       <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg">
                            Engagement RSE
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                            Célébration de la Journée Mondiale de la Sécurité et de la Santé au Travail
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span> Avril 2023</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" />
                                <span>Oran, Algerie </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              

                <article className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-MidnightNavyText dark:text-white mb-4">
                            SARPI réaffirme son engagement pour la sécurité de ses collaborateurs
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI a célébré la Journée Mondiale de la Sécurité et de la Santé au Travail, qui s’est déroulée du 
                            23 au 28 avril 2024 au niveau de la Direction Générale, ainsi qu’au niveau de l’ensemble de ses sites. 
                        </p>


                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-8">
                           Placée sous le thème « Impacts du Changement Climatique sur la Sécurité et la Santé au Travail »,
                            cet événement a été rehaussé par un programme riche proposant une multitude d'activités visant à sensibiliser 
                           ses travailleurs mais aussi à les impliquer davantage aux sujets relatifs à la Sécurité et la Santé au Travail.
                        </div>

                  <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <a
                                href="/pdfs/03-2024-SARPI-NEWS-Oran-Invest-Expo.pdf"
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