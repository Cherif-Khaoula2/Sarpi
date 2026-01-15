"use client"
import Image from "next/image"
import Link from "next/link"
import image1 from "/public/images/documentation/1.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function FPA2023Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode">
            {/* Header avec image */}
            <div className="relative h-96 w-full">
                <Image
                    src={image1}
                    alt="FPA 2023"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            Événement
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Participation de SARPI à la 31ème édition de la Foire de la Production Algérienne
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>Mai 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" />
                                <span>Alger, Algérie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu */}
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
                            SARPI présente ses innovations à la FPA 2023
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI a participé avec succès à la 31ème édition de la Foire de la Production Algérienne (FPA), 
                            un événement majeur qui met en valeur le savoir-faire et l'innovation des entreprises algériennes.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Un stand attractif et innovant
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Notre stand a attiré de nombreux visiteurs, professionnels et particuliers, venus découvrir 
                            notre gamme complète de produits et services. Nous avons présenté nos dernières innovations 
                            en matière de solutions industrielles et de prestations de services.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Des échanges enrichissants
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Cette participation nous a permis de rencontrer nos partenaires, d'échanger avec nos clients 
                            et de nouer de nouveaux contacts professionnels. Les retours positifs et l'intérêt manifesté 
                            pour nos produits confirment la qualité de notre offre.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-8">
                            <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                Points clés de notre participation
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-SlateBlueText dark:text-gray-300">
                                <li>Présentation de nos solutions innovantes</li>
                                <li>Rencontres avec plus de 500 visiteurs professionnels</li>
                                <li>Signature de plusieurs partenariats stratégiques</li>
                                <li>Visibilité accrue de la marque SARPI</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Perspectives d'avenir
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Cette expérience réussie renforce notre engagement à participer activement aux événements 
                            majeurs du secteur et à contribuer au développement de l'industrie algérienne. 
                            Nous remercions tous les visiteurs et partenaires pour leur confiance.
                        </p>
                    </div>
                </article>

                {/* Articles similaires */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-MidnightNavyText dark:text-white mb-6">
                        Actualités similaires
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link 
                            href="/actualites/napec-2023"
                            className="group bg-white dark:bg-darkmode rounded-lg p-6 shadow hover:shadow-xl transition-all"
                        >
                            <span className="text-sm text-blue-600 font-semibold">Conférence</span>
                            <h4 className="text-lg font-bold mt-2 group-hover:text-blue-600 transition-colors">
                                Participation au NAPEC 2023
                            </h4>
                        </Link>
                        <Link 
                            href="/actualites/algest-2023"
                            className="group bg-white dark:bg-darkmode rounded-lg p-6 shadow hover:shadow-xl transition-all"
                        >
                            <span className="text-sm text-blue-600 font-semibold">Salon</span>
                            <h4 className="text-lg font-bold mt-2 group-hover:text-blue-600 transition-colors">
                                Salon de la Sous-Traitance
                            </h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}