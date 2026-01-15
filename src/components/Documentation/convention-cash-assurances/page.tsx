"use client"
import Image from "next/image"
import Link from "next/link"
import image2 from "/public/images/documentation/2.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function ConventionCashPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode">
            <div className="relative h-96 w-full">
                <Image
                    src={image2}
                    alt="Convention CASH Assurances"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                            Partenariat
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Signature d'une Convention Globale d'Assurance SARPI-CASH Assurances
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>Juin 2023</span>
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
                            Un partenariat stratégique pour la protection sociale
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            SARPI a signé une convention globale d'assurance avec CASH Assurances, marquant un tournant 
                            important dans notre engagement envers la protection et le bien-être de nos collaborateurs.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Les objectifs de cette convention
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Cette convention vise à offrir une couverture d'assurance complète et adaptée aux besoins 
                            de nos employés et de leurs familles. Elle s'inscrit dans notre politique de responsabilité 
                            sociale d'entreprise et notre volonté de garantir un environnement de travail sécurisé.
                        </p>

                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 my-8">
                            <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                Couvertures incluses
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-SlateBlueText dark:text-gray-300">
                                <li>Assurance maladie complémentaire</li>
                                <li>Assurance accidents du travail</li>
                                <li>Assurance vie et invalidité</li>
                                <li>Protection juridique</li>
                                <li>Assistance médicale 24h/24</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Un partenaire de confiance
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            CASH Assurances, acteur majeur du secteur des assurances en Algérie, apporte son expertise 
                            et son professionnalisme pour accompagner SARPI dans la mise en œuvre de cette couverture globale.
                        </p>

                        <h3 className="text-xl font-bold text-MidnightNavyText dark:text-white mb-3">
                            Avantages pour nos collaborateurs
                        </h3>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Cette convention permet à nos collaborateurs de bénéficier d'une protection étendue, 
                            de procédures simplifiées et d'un service de qualité. Elle témoigne de notre engagement 
                            continu envers le bien-être de nos équipes et renforce la confiance mutuelle au sein de l'entreprise.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-8">
                            <p className="text-sm text-SlateBlueText dark:text-gray-300 italic">
                                "Cette convention représente une étape importante dans notre stratégie de développement 
                                des ressources humaines et confirme notre volonté d'offrir à nos collaborateurs 
                                les meilleures conditions de travail et de protection sociale."
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}