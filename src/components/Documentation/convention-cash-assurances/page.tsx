"use client"
import Image from "next/image"
import Link from "next/link"
import image2 from "/public/images/documentation/2.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function ConventionCashPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode pt-[72px] md:pt-[96px]">

            <div className="relative h-96 w-full">
                <Image
                    src={image2}
                    alt="Convention CASH Assurances"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg">
                            Partenariat
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                            Signature d'une Convention Globale d'Assurance SARPI-CASH Assurances
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" />
                                <span>Novembre 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" />
                                <span> Alger ,Algerie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                
                <article className="bg-white dark:bg-darkmode rounded-lg shadow-lg p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-MidnightNavyText dark:text-white mb-4">
                            Un partenariat stratégique pour la protection sociale
                        </h2>
                        
                        <p className="text-SlateBlueText dark:text-gray-300 mb-6">
                            Le Président Directeur Général M. Tarik NOUIZI et la Présidente Directrice Générale de la
                             CASH Assurances Mme Wided BELHOUCHET, ont procédé, le dimanche 19 novembre 2023, à la signature
                              d’une convention globale d’assurance. La CASH Assurances apportera une assistance à SARPI dans
                               la gestion et expertise des risques et dommages, les risques industriels divers et la formation 
                               des cadres chargés de la gestion de contrat d’assurance. Ladite convention a pour objet de définir
                                les conditions techniques et administratives ainsi que les modalités de souscription des polices
                                 d’assurance lors de la réalisation des projets et couvre plusieurs activités importantes liés 
                                 </p>

                       

                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-8">
                            <h4 className="font-bold text-lg mb-2 text-MidnightNavyText dark:text-white">
                                à nos projets, notamment :
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-SlateBlueText dark:text-gray-300">
                                <li>Assurance des risques de chantier et/ou tout risque montage.</li>
                                <li>Assurance responsabilité civile du réalisateur d’ouvrage</li>
                                <li>La signature de cette convention rentre dans le renforcement du partenariat intra-groupe.SONATRACH.</li>
                                
                            </ul>
                        </div>
                         <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <a 
                                    href="/pdfs/09-SARPI-NEWS-Cash-Assurance.pdf"
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