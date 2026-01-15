"use client"
import Image from "next/image"
import Link from "next/link"
import image6 from "/public/images/documentation/6.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Hommage17OctobrePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode pt-[72px] md:pt-[96px]">

            <div className="relative h-96 w-full">
                <Image
                    src={image6}
                    alt="Hommage 17 Octobre 1961"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg">
                            Commémoration
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                            Hommage aux Chouhadas victimes des Massacres du 17 Octobre 1961
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span> Octobre 2021</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" />
                                <span>Oran, Algérie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
              

                <article className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-MidnightNavyText dark:text-white mb-4">
                            Minute de silence en mémoire des martyrs de la liberté
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Conformément à la décision du Président de la République, M. Abdelmadjid TEBBOUNE 
                            (Décret présidentiel n° 21-392 du 16 octobre 2021), 
                            SARPI a observé une Minute de Silence, ce Mardi 17 Octobre à 11H00 au niveau de la Direction Générale,.
                        </p>

                       
                        
                
                
                        <div className="bg-blue-50 dark:bg-blue-800/50 rounded-lg p-6 mt-8">
                    ses annexes et l’ensemble de ses Directions régionales, qui a été suivie par la levée des
                     couleurs en recueillement à la mémoire de nos martyrs.
                      <p className="text-black-700 dark:text-blue-300 font-bold text-xl"> Honneur et Gloire à nos martyrs.</p>
                      <p className="text-blue-700 dark:text-blue-300 font-bold text-xl"> Vive l’Algérie, Libre et Indépendante !</p>
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