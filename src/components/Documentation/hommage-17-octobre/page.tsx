"use client"
import Image from "next/image"
import Link from "next/link"
import image6 from "/public/images/documentation/6.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Hommage17OctobrePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode">
            <div className="relative h-96 w-full">
                <Image
                    src={image6}
                    alt="Hommage 17 Octobre 1961"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-gray-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            Commémoration
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Hommage aux Chouhadas victimes des Massacres du 17 Octobre 1961
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>17 Octobre 2023</span>
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
                            Minute de silence en mémoire des martyrs de la liberté
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le 17 octobre 2023, l'ensemble du personnel de SARPI s'est recueilli lors d'une minute 
                            de silence en hommage aux victimes des massacres du 17 octobre 1961 à Paris. Cette 
                            commémoration annuelle témoigne de notre devoir de mémoire envers ces martyrs de la 
                            lutte pour l'indépendance de l'Algérie.
                        </p>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 my-8">
                            <div className="flex items-start gap-4">
                                <Icon icon="mdi:candle" className="text-3xl text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                        Un moment de recueillement solennel
                                    </h4>
                                    <p className="text-sm text-SlateBlueText dark:text-gray-300">
                                        L'ensemble des collaborateurs de SARPI, réunis sur tous nos sites, a observé 
                                        une minute de silence à 11h00 précises, en signe de respect et de reconnaissance 
                                        envers ces héros de la nation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Le 17 octobre 1961 : un événement tragique
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le 17 octobre 1961, des milliers d'Algériens ont manifesté pacifiquement à Paris pour 
                            protester contre le couvre-feu discriminatoire qui leur était imposé. Cette manifestation 
                            fut violemment réprimée par les forces de l'ordre françaises, causant la mort de nombreux 
                            manifestants. Cet événement tragique demeure une page sombre de l'histoire de la guerre 
                            d'indépendance algérienne.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Le devoir de mémoire
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI considère que le devoir de mémoire est essentiel pour honorer le sacrifice de ceux 
                            qui ont lutté pour la liberté et l'indépendance de notre pays. Cette commémoration annuelle 
                            s'inscrit dans notre engagement citoyen et notre attachement aux valeurs de liberté, 
                            de justice et de dignité humaine.
                        </p>

                        <div className="border-l-4 border-green-600 bg-green-50 dark:bg-green-900/20 p-6 my-8">
                            <h4 className="font-bold text-lg mb-3 text-MidnightNavyText dark:text-white">
                                Nos valeurs citoyennes
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:heart" className="text-xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Respect</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Honorer la mémoire de ceux qui ont sacrifié leur vie pour notre liberté
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:book-open-variant" className="text-xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Transmission</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Transmettre l'histoire aux nouvelles générations pour ne jamais oublier
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Icon icon="mdi:handshake" className="text-xl text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-MidnightNavyText dark:text-white">Solidarité</div>
                                        <div className="text-sm text-SlateBlueText dark:text-gray-300">
                                            Maintenir vivante la mémoire collective de notre nation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Un engagement citoyen
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            En tant qu'entreprise algérienne, SARPI s'engage à perpétuer la mémoire des événements 
                            qui ont marqué l'histoire de notre pays. Cette commémoration fait partie de notre 
                            responsabilité sociétale et de notre contribution à l'éducation citoyenne de nos collaborateurs, 
                            notamment les plus jeunes générations qui n'ont pas vécu ces événements.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-8">
                            <div className="text-center">
                                <Icon icon="mdi:star" className="text-4xl text-gray-600 dark:text-gray-400 mx-auto mb-4" />
                                <p className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-2">
                                    "Gloire à nos martyrs"
                                </p>
                                <p className="text-sm text-SlateBlueText dark:text-gray-300 italic">
                                    À tous ceux qui ont donné leur vie pour que l'Algérie soit libre et indépendante
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3 mt-8">
                            Reconnaissance nationale
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le 17 octobre est désormais reconnu comme une date de commémoration nationale en Algérie. 
                            Cette reconnaissance officielle témoigne de l'importance de cet événement dans l'histoire 
                            de notre pays et de la nécessité de préserver cette mémoire pour les générations futures.
                        </p>

                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI renouvelle son engagement à participer activement à toutes les commémorations nationales 
                            et à contribuer au devoir de mémoire qui nous unit tous en tant que citoyens algériens.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}