"use client"
import Image from "next/image"
import Link from "next/link"
import image5 from "/public/images/documentation/5.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function SecuriteSantePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode">
            <div className="relative h-96 w-full">
                <Image
                    src={image5}
                    alt="Journée Sécurité et Santé"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            Engagement RSE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Célébration de la Journée Mondiale de la Sécurité et de la Santé au Travail
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>28 Avril 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link 
                    href="/actualites"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
                >
                    <Icon icon="mdi:arrow-left" className="text-xl" />
                    <span>Retour aux actualités</span>
                </Link>

                <article className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-MidnightNavyText dark:text-white mb-4">
                            SARPI réaffirme son engagement pour la sécurité de ses collaborateurs
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            À l'occasion de la Journée Mondiale de la Sécurité et de la Santé au Travail, célébrée chaque 
                            année le 28 avril, SARPI a organisé une série d'activités de sensibilisation et de formation 
                            pour renforcer la culture de la sécurité au sein de l'entreprise.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Une journée dédiée à la prévention
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Cette journée spéciale a été l'occasion de rappeler l'importance de la prévention des risques 
                            professionnels et de promouvoir un environnement de travail sûr et sain pour tous nos collaborateurs. 
                            Plusieurs activités ont été organisées sur l'ensemble de nos sites.
                        </p>

                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 my-8">
                            <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                Programme de la journée
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-SlateBlueText dark:text-gray-300">
                                <li>Sessions de sensibilisation aux risques professionnels</li>
                                <li>Formations pratiques sur les gestes de premiers secours</li>
                                <li>Exercices d'évacuation et de gestion des urgences</li>
                                <li>Ateliers sur l'utilisation des équipements de protection</li>
                                <li>Distribution de guides de sécurité</li>
                                <li>Évaluation des postes de travail</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Notre politique de sécurité
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            La sécurité et la santé au travail constituent une priorité absolue pour SARPI. 
                            Notre politique de sécurité repose sur plusieurs piliers fondamentaux qui guident 
                            toutes nos actions et décisions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-600 rounded-full p-3">
                                        <Icon icon="mdi:shield-check" className="text-2xl text-white" />
                                    </div>
                                    <h4 className="font-bold text-lg text-MidnightNavyText dark:text-white">Prévention</h4>
                                </div>
                                <p className="text-sm text-SlateBlueText dark:text-gray-300">
                                    Identification et évaluation des risques, mise en place de mesures préventives adaptées
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-600 rounded-full p-3">
                                        <Icon icon="mdi:school" className="text-2xl text-white" />
                                    </div>
                                    <h4 className="font-bold text-lg text-MidnightNavyText dark:text-white">Formation</h4>
                                </div>
                                <p className="text-sm text-SlateBlueText dark:text-gray-300">
                                    Formation continue de nos équipes aux bonnes pratiques de sécurité
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-orange-600 rounded-full p-3">
                                        <Icon icon="mdi:clipboard-check" className="text-2xl text-white" />
                                    </div>
                                    <h4 className="font-bold text-lg text-MidnightNavyText dark:text-white">Contrôle</h4>
                                </div>
                                <p className="text-sm text-SlateBlueText dark:text-gray-300">
                                    Audits réguliers et inspections pour garantir le respect des normes
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-purple-600 rounded-full p-3">
                                        <Icon icon="mdi:chart-line" className="text-2xl text-white" />
                                    </div>
                                    <h4 className="font-bold text-lg text-MidnightNavyText dark:text-white">Amélioration</h4>
                                </div>
                                <p className="text-sm text-SlateBlueText dark:text-gray-300">
                                    Amélioration continue de nos pratiques et de nos équipements
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Résultats et engagement
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Grâce à notre politique proactive en matière de sécurité, SARPI maintient un excellent 
                            bilan en termes de prévention des accidents du travail. Cette performance est le fruit 
                            de l'engagement de tous nos collaborateurs et de notre investissement continu dans 
                            la sécurité et la santé au travail.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-8">
                            <div className="flex items-start gap-4">
                                <Icon icon="mdi:information" className="text-3xl text-blue-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                        Zéro accident, notre objectif
                                    </h4>
                                    <p className="text-sm text-SlateBlueText dark:text-gray-300">
                                        SARPI s'engage à maintenir un environnement de travail où chaque collaborateur 
                                        peut exercer son activité en toute sécurité. Notre objectif "zéro accident" 
                                        guide toutes nos actions et investissements en matière de santé et sécurité au travail.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3 mt-8">
                            Témoignages
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-600">
                                <p className="text-SlateBlueText dark:text-gray-300 italic mb-3">
                                    "Cette journée nous a permis de revoir et d'améliorer nos pratiques quotidiennes. 
                                    Les formations dispensées étaient très instructives et pratiques."
                                </p>
                                <p className="text-sm font-semibold text-MidnightNavyText dark:text-white">
                                    - Un technicien SARPI
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}