"use client"
import Image from "next/image"
import Link from "next/link"
import image3 from "/public/images/documentation/3.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function NAPEC2023Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode pt-[72px] md:pt-[96px]">

            {/* HERO */}
            <header className="relative h-[28rem] md:h-96 w-full overflow-hidden">
                <Image
                    src={image3}
                    alt="NAPEC 2023"
                    className="w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg">
                            Conférence
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                            Participation au North Africa Energy & Hydrogen Exhibition and Conference
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
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
            </header>

            {/* CONTENT */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
                <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-10 prose dark:prose-invert max-w-none">

                        <h2 className="text-2xl md:text-3xl font-bold text-MidnightNavyText dark:text-white mb-6">
                            SARPI au cœur des enjeux énergétiques de demain
                        </h2>

                        <p className="text-lg leading-relaxed text-SlateBlueText dark:text-gray-300">
                            SARPI a participé à la 11ème édition du North Africa Energy & Hydrogen Exhibition and Conference
                            (NAPEC 2023) du 13 au 15 novembre 2023 au Centre de Conventions Mohamed Ben Ahmed à Oran,
                            avec une importante délégation conduite par le Président Directeur Général,
                            Monsieur Tarik NOUIZI.
                        </p>

                        {/* HIGHLIGHT */}
                        <aside className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-r-lg p-6 my-8">
                            <p className="leading-relaxed text-SlateBlueText dark:text-gray-300">
                                Le salon a été inauguré par le Secrétaire Général du Ministère de l’Énergie et des Mines,
                                en présence du PDG du Groupe SONATRACH, du Président de l’ELNAFT, du Président de l’ARH
                                ainsi que des ambassadeurs de plusieurs pays.
                            </p>

                            <p className="leading-relaxed mt-4 text-SlateBlueText dark:text-gray-300">
                                Cette édition a réuni plus de 500 exposants représentant 45 pays, ainsi que des experts
                                internationaux autour des enjeux des hydrocarbures, de l’énergie et de la transition énergétique.
                            </p>
                        </aside>

                        {/* PDF CTA */}
                        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <a
                                href="/pdfs/08-SARPI-NEWS-NAPEC.pdf"
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
            </main>
        </div>
    )
}
