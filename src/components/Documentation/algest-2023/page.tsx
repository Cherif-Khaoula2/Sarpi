"use client"
import Image from "next/image"
import Link from "next/link"
import image4 from "/public/images/documentation/4.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function ALGEST2023Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode">
            <div className="relative h-96 w-full">
                <Image
                    src={image4}
                    alt="ALGEST 2023"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            Salon
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Présence au Salon International de la Sous-Traitance Industrielle
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>Avril 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" />
                                <span>Alger, Algérie</span>
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
                            SARPI renforce sa position dans la sous-traitance industrielle
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le Salon International de la Sous-Traitance Industrielle (ALGEST) a constitué une plateforme 
                            exceptionnelle pour SARPI de mettre en avant son expertise en matière de sous-traitance 
                            et de services industriels. Notre participation a été marquée par un intérêt soutenu 
                            des visiteurs et des professionnels du secteur.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Notre offre de sous-traitance
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI propose une gamme complète de services de sous-traitance industrielle, adaptés 
                            aux besoins spécifiques de chaque client. Notre expertise couvre plusieurs domaines 
                            stratégiques de l'industrie algérienne.
                        </p>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-6 my-8">
                            <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                Nos services de sous-traitance
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-SlateBlueText dark:text-gray-300">
                                <li>Usinage et fabrication mécanique</li>
                                <li>Montage et assemblage industriel</li>
                                <li>Maintenance préventive et curative</li>
                                <li>Contrôle qualité et certification</li>
                                <li>Logistique et gestion de stock</li>
                                <li>Ingénierie et études techniques</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Un secteur en pleine croissance
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            La sous-traitance industrielle connaît un développement important en Algérie, portée 
                            par la volonté de renforcer le tissu industriel national et de favoriser l'intégration locale. 
                            SARPI s'inscrit pleinement dans cette dynamique en offrant des solutions compétitives et de qualité.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Partenariats et collaborations
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le salon a été l'occasion de renforcer nos partenariats existants et d'en établir de nouveaux 
                            avec des entreprises nationales et internationales. Ces collaborations nous permettent 
                            d'élargir notre offre et d'améliorer continuellement la qualité de nos prestations.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
                            <h4 className="font-bold text-lg mb-3 text-MidnightNavyText dark:text-white">
                                Nos atouts compétitifs
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-2xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Équipements modernes</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Parc machine de dernière génération
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-2xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Personnel qualifié</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Équipes formées et expérimentées
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-2xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Certifications</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Standards internationaux de qualité
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" className="text-2xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Réactivité</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Délais courts et flexibilité
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Perspectives d'avenir
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Fort de cette participation réussie, SARPI poursuit son développement dans le secteur 
                            de la sous-traitance industrielle. Nous continuons à investir dans nos capacités de production 
                            et dans la formation de nos équipes pour répondre aux exigences croissantes du marché.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}