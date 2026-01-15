"use client"
import Image from "next/image"
import Link from "next/link"
import image3 from "/public/images/documentation/3.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function NAPEC2023Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode">
            <div className="relative h-96 w-full">
                <Image
                    src={image3}
                    alt="NAPEC 2023"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            Conférence
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Participation au North Africa Energy & Hydrogen Exhibition and Conference
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>Mars 2023</span>
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
                            SARPI au cœur des enjeux énergétiques de demain
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI a participé au NAPEC (North Africa Energy & Hydrogen Exhibition and Conference), 
                            un événement majeur dédié à l'énergie et à l'hydrogène en Afrique du Nord. Cette participation 
                            s'inscrit dans notre stratégie de positionnement sur les marchés de l'énergie et des énergies renouvelables.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Un événement stratégique
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le NAPEC rassemble les acteurs majeurs du secteur énergétique, des experts internationaux 
                            et des décideurs pour échanger sur les défis et opportunités du secteur. Notre présence 
                            nous a permis de présenter notre expertise et nos solutions innovantes.
                        </p>

                        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 my-8">
                            <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                Nos domaines d'intervention présentés
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-SlateBlueText dark:text-gray-300">
                                <li>Solutions pour l'industrie pétrolière et gazière</li>
                                <li>Équipements et services pour les énergies renouvelables</li>
                                <li>Technologies de l'hydrogène</li>
                                <li>Maintenance et services industriels</li>
                                <li>Solutions de sécurité énergétique</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Networking et opportunités
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Cette conférence a été l'occasion de rencontrer des partenaires potentiels, d'échanger 
                            avec des experts du secteur et de découvrir les dernières innovations technologiques. 
                            Nous avons pu identifier de nouvelles opportunités de collaboration et de développement.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Transition énergétique et développement durable
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            La participation au NAPEC confirme l'engagement de SARPI dans la transition énergétique 
                            et le développement durable. Nous sommes déterminés à accompagner nos clients dans leurs 
                            projets énergétiques tout en contribuant à un avenir plus durable.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                                <div className="text-sm text-SlateBlueText dark:text-gray-300">Exposants internationaux</div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-sm text-SlateBlueText dark:text-gray-300">Conférences techniques</div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                                <div className="text-sm text-SlateBlueText dark:text-gray-300">Visiteurs professionnels</div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}