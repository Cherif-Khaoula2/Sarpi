"use client"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"
import image1 from "/public/images/documentation/1.jpg"

// Configuration des actualités similaires
const relatedArticles = [
  {
    id: 1,
    slug: "/documentation/napec-2023",
    category: "Conférence",
    title: "Participation au NAPEC 2023",
    excerpt: "SARPI participe à la Conférence Nationale sur la Productivité et l'Excellence Commerciale.",
    date: "2023-11",
    icon: "mdi:presentation"
  },
  {
    id: 2,
    slug: "/documentation/algest-2023",
    category: "Salon",
    title: "Salon de la Sous-Traitance ALGEST 2023",
    excerpt: "Rencontre avec les acteurs majeurs de la sous-traitance industrielle en Algérie.",
    date: "2023-10",
    icon: "mdi:factory"
  }
]

export default function FPA2023Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkmode pt-[72px] md:pt-[96px]">
            {/* Hero Section with Image */}
            <header className="relative h-[28rem] md:h-96 w-full overflow-hidden">
                <Image
                    src={image1}
                    alt="Stand SARPI à la Foire de la Production Algérienne 2023"
                    className="w-full h-full object-cover"
                    priority
                    quality={90}
                    placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="max-w-5xl mx-auto">
                        <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg">
                            Événement
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                            Participation de SARPI à la 31ème édition de la Foire de la Production Algérienne
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:calendar-outline" className="text-xl" aria-hidden="true" />
                                <time dateTime="2023-12">Décembre 2023</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:map-marker" className="text-xl" aria-hidden="true" />
                                <span>SAFEX, Alger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Article Content */}
                <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-10">
                        <div className="prose dark:prose-invert max-w-none prose-headings:text-MidnightNavyText dark:prose-headings:text-white prose-p:text-SlateBlueText dark:prose-p:text-gray-300">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                SARPI présente ses innovations à la FPA 2023
                            </h2>
                            
                            <p className="text-lg leading-relaxed mb-6">
                                SARPI a participé à la 31ème édition de la Foire de la Production Algérienne (FPA 2023), 
                                du 14 au 23 décembre au Palais des Expositions, SAFEX - Pavillon Central. 
                                Organisée sous le haut patronage du Président de la République M. Abdelmadjid Tebboune, 
                                cette importante manifestation économique avait pour thème : « L'entreprise productrice, 
                                base de la croissance et du développement économique ».
                            </p>

                            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                                Une plateforme d'excellence pour l'industrie nationale
                            </h3>
                            
                            <p className="leading-relaxed mb-6">
                                Cette édition a regroupé plusieurs secteurs d'activité notamment l'industrie 
                                chimique et pétrochimique, les industries mécaniques, la sidérurgie, la métallurgie, 
                                le bâtiment et les matériaux de construction, offrant ainsi une plateforme efficace 
                                pour le réseautage professionnel et la mise en relation d'affaires entre les opérateurs 
                                économiques nationaux.
                            </p>

                            {/* PDF Button */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <a 
                                    href="/pdfs/10-SARPI-NEWS-Participation-de-SARPI-a-la-Foire-de-la-Production-Algerienne-FPA-2023.pdf"
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
                    </div>
                </article>

                {/* Related Articles Section - Version Professionnelle */}
                <section className="mt-12 md:mt-16" aria-labelledby="related-title">
                    <div className="flex items-center justify-between mb-8">
                        <h3 id="related-title" className="text-2xl md:text-3xl font-bold text-MidnightNavyText dark:text-white">
                            Actualités similaires
                        </h3>
                        <Link 
                            href="/documentation"
                            className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                        >
                            <span>Voir toutes les actualités</span>
                            <Icon icon="mdi:arrow-right" className="text-xl" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedArticles.map((article) => (
                            <Link 
                                key={article.id}
                                href={article.slug}
                                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400"
                            >
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon 
                                            icon={article.icon} 
                                            className="text-2xl text-blue-600 dark:text-blue-400" 
                                        />
                                        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-lg md:text-xl font-bold text-MidnightNavyText dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                                        {article.title}
                                    </h4>

                                    {/* Excerpt */}
                                    <p className="text-sm text-SlateBlueText dark:text-gray-400 mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <time className="text-xs text-gray-500 dark:text-gray-400" dateTime={article.date}>
                                            {new Date(article.date).toLocaleDateString('fr-FR', { 
                                                month: 'long', 
                                                year: 'numeric' 
                                            })}
                                        </time>
                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                                            <span className="text-sm">Lire plus</span>
                                            <Icon 
                                                icon="mdi:arrow-right" 
                                                className="text-lg transition-transform group-hover:translate-x-1" 
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile "View All" Link */}
                    <div className="md:hidden mt-6 text-center">
                        <Link 
                            href="/documentation"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                        >
                            <span>Voir toutes les actualités</span>
                            <Icon icon="mdi:arrow-right" className="text-xl" />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}