import { useState } from 'react'
import Image from 'next/image'
import Page from '@/components/page'
import Section from '@/components/section'

// Composants décoratifs réutilisables
const FlowerIcon = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z" fill="currentColor"/>
    <path d="M12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z" fill="currentColor"/>
    <path d="M18 12C19.1 12 20 11.1 20 10C20 8.9 19.1 8 18 8C16.9 8 16 8.9 16 10C16 11.1 16.9 12 18 12Z" fill="currentColor"/>
    <path d="M6 12C7.1 12 8 11.1 8 10C8 8.9 7.1 8 6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12Z" fill="currentColor"/>
    <path d="M18 16C19.1 16 20 15.1 20 14C20 12.9 19.1 12 18 12C16.9 12 16 12.9 16 14C16 15.1 16.9 16 18 16Z" fill="currentColor"/>
    <path d="M6 16C7.1 16 8 15.1 8 14C8 12.9 7.1 12 6 12C4.9 12 4 12.9 4 14C4 15.1 4.9 16 6 16Z" fill="currentColor"/>
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
  </svg>
);

const MapLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className='ml-2 inline-flex items-center text-xs text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 font-medium border-b border-zinc-200 dark:border-zinc-800'
  >
    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    {children || "Voir sur la carte"}
  </a>
);

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({ firstName: '', lastName: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const apiUrl = process.env.NEXT_PUBLIC_DOMAIN

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        try {
            const response = await fetch(`${apiUrl}/api/wedding-list/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                }),
            })
            if (response.ok) {
                setStatus('success')
                setTimeout(() => {
                    setIsModalOpen(false)
                    setStatus('idle')
                    setFormData({ firstName: '', lastName: '' })
                }, 2000)
            } else { setStatus('error') }
        } catch (err) { setStatus('error') }
    }

    return (
        <Page>
            {/* --- Hero Section --- */}
            <Section className="text-center">
            <h1 className='text-3xl md:text-4xl font-serif text-zinc-900 dark:text-zinc-50 text-center'>
                Le jour J arrive à grands pas !
            </h1>
                <div className='mt-2 flex items-center justify-center gap-2 text-zinc-300 dark:text-zinc-800'>
                    <div className='h-px w-12 bg-current'></div>
                    <FlowerIcon className='w-4 h-4' />
                    <div className='h-px w-12 bg-current'></div>
                </div>
                <div className='mt-8 overflow-hidden rounded-3xl shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800 max-w-xl mx-auto'>
                <Image 
                    src="/images/main.jpg" 
                    alt="Dasha & Tristan" 
                    width={500}
                    height={600}
                    className="w-full object-cover"
                    priority
                />
            </div>
            </Section>

            {/* --- Notre Histoire --- */}
            <Section>
                <div className='flex items-center gap-3 mb-4'>
                    <FlowerIcon className='w-6 h-6 text-zinc-300 dark:text-zinc-700' />
                    <h2 className='text-2xl font-serif text-zinc-800 dark:text-zinc-200'>
                        Notre Histoire
                    </h2>
                </div>
                <div className='mt-4 space-y-4 text-zinc-600 dark:text-zinc-400 max-w-2xl'>
                    <p>
                        À l’ère du numérique, c’est sur les réseaux sociaux que nos chemins se sont croisés. 
                        Ce qui a commencé par un simple message s’est transformé en une magnifique aventure moderne.
                    </p>
                    <p>
                        Aujourd’hui, nous savourons chaque instant de notre vie de couple. Que ce soit lors de nos 
                        week-ends à Strasbourg, nos escapades en Suisse ou nos explorations des paysages 
                        environnants, chaque moment est une nouvelle page de notre récit.
                    </p>
                    <p className='font-serif italic text-lg text-zinc-900 dark:text-zinc-200'>
                        Nous avons hâte de célébrer notre union entourés des personnes qui nous sont chères. 
                    </p>
                </div>
            </Section>

            {/* --- RSVP Button --- */}
            <Section>
                <div className='flex justify-center py-4'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='rounded-full bg-zinc-600 px-10 py-4 font-serif text-lg text-white shadow-lg shadow-zinc-200 dark:shadow-none transition-all hover:bg-zinc-700 hover:scale-105 active:scale-95'
                    >
                        M'ajouter à la liste de mariage
                    </button>
                </div>
            </Section>

            {/* --- Infos Pratiques & Programme --- */}
            <Section className='relative'>
                <div className='absolute -top-6 left-1/2 -translate-x-1/2 text-zinc-200 dark:text-zinc-900'>
                    <FlowerIcon className='w-12 h-12 rotate-45 opacity-60' />
                </div>
                
                <h2 className='text-center text-2xl md:text-3xl font-serif text-zinc-900 dark:text-zinc-100'>
                    Programme de la Journée
                </h2>
                <div className='mt-1 flex items-center justify-center gap-2 text-zinc-300 dark:text-zinc-800'>
                    <div className='h-px w-16 bg-current'></div>
                    <FlowerIcon className='w-4 h-4' />
                    <div className='h-px w-16 bg-current'></div>
                </div>
            </Section>

            {/* Point de Rendez-vous - Updated Layout */}
            <div className='my-10 p-6 text-center bg-gray-100 dark:bg-zinc-800/50 rounded-3xl border border-gray-200 dark:border-zinc-700 shadow-inner'>
                <h3 className='text-lg font-serif font-semibold text-zinc-900 dark:text-zinc-100'>
                    Rendez-vous à
                </h3>
                
                <div className='mt-4 mb-2'>
                    <span className='text-4xl md:text-4xl font-bold text-zinc-950 dark:text-zinc-50 font-mono'>
                        10h45
                    </span>
                </div>

                <p className='text-xl md:text-2xl font-bold text-zinc-950 dark:text-zinc-50'>
                    à la Mairie de Rosenwiller
                </p>

                <div className='mt-6'>
                    <MapLink href="https://maps.app.goo.gl/Hse2PhSHoWwCHokG8">
                        Localiser la Mairie
                    </MapLink>
                </div>
            </div>

            {/* Parking */}
            <Section>
                <div className='flex items-center gap-3 mb-4'>
                    <FlowerIcon className='w-6 h-6 text-zinc-300 dark:text-zinc-700' />
                    <h3 className='text-lg font-semibold font-serif text-zinc-800 dark:text-zinc-200'>
                        Parking & Accès
                    </h3>
                </div>
                <ul className='mt-5 space-y-3 pl-2'>
                    <li className='text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-2'>
                        <span className='w-1.5 h-1.5 rounded-full bg-zinc-300'></span>
                        Le long de la rue de la Mairie <MapLink href="https://maps.app.goo.gl/tCDMFJcrZjVGqD7A9" />
                    </li>
                    <li className='text-sm text-zinc-700 dark:text-zinc-300'>
                        <div className='flex items-center gap-2'>
                            <span className='w-1.5 h-1.5 rounded-full bg-zinc-300'></span>
                            Parking du Vignoble <MapLink href="https://maps.app.goo.gl/7BuVuhYSda46Agax5" />
                        </div>
                        <span className='ml-4 text-xs text-zinc-500 italic'>(4 min de marche)</span>
                    </li>
                    <li className='text-sm text-zinc-700 dark:text-zinc-300'>
                        <div className='flex items-center gap-2'>
                            <span className='w-1.5 h-1.5 rounded-full bg-zinc-300'></span>
                            Parking du terrain de jeux <MapLink href="https://maps.app.goo.gl/279JevDGSZ3mLqFL9" />
                        </div>
                        <span className='ml-4 text-xs text-zinc-500 italic'>(10 min de marche)</span>
                    </li>
                </ul>
            </Section>

            {/* Timeline */}
            <Section>
                <div className='mt-4 space-y-6'>
                    {/* Matinée - Cérémonie & Accueil 💍 */}
                    <div className='bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl'>💍</span>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-200'>Cérémonie & Accueil</h4>
                        </div>
                        <ul className='mt-3 space-y-3'>
                            <li className='text-sm flex flex-col gap-1'>
                                <span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>10h45 : Arrivée des invités</span>
                                <span className='text-xs text-zinc-500 italic'>Parkings : rue de la Mairie, cour de Grand-Mère, ou près du terrain de foot.</span>
                            </li>
                            <li className='text-sm flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>11h00 :</span> Début de la cérémonie</li>
                            <li className='text-sm flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>11h30 :</span> Lancé de pétales, champagne & photos (église et jardin)</li>
                        </ul>
                    </div>

                    {/* Réception & Festivités 🍽️ */}
                    <div className='bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl'>🍽️</span>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-200'>Réception</h4>
                        </div>
                        <ul className='mt-3 space-y-3 text-sm'>
                            <li className='flex flex-col gap-1'>
                                <span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>12h00 : Discours & Chocolats</span>
                                <span className='text-xs text-zinc-500 italic'>Ouverture des jeux et dégustation de chocolats suisses personnalisés.</span>
                            </li>
                            <li className='flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>12h30 :</span> Apéritif servi en salle basse (RDC)</li>
                            <li className='flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>13h20 :</span> Diaporama & début du déjeuner à l'étage</li>
                            <li className='flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>15h30 :</span> Fromages & fin de service</li>
                        </ul>
                    </div>

                    {/* Après-midi Culturel & Détente 🌲 */}
                    <div className='bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl'>🌲</span>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-200'>L'Après-midi</h4>
                        </div>
                        <ul className='mt-3 space-y-3 text-sm'>
                            <li className='flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>16h00 :</span> Petite randonnée digestive vers la maison</li>
                            <li className='flex flex-col gap-1'>
                                <span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>16h30 : Café, Dessert & Jeux</span>
                                <span className='text-xs text-zinc-500 italic'>Défis culturels France-Russie, Instant Shoot & Carnet de vœux.</span>
                            </li>
                            <li className='italic text-zinc-500 dark:text-zinc-400 opacity-80 pt-1'>
                                Échecs, Kapla, Smile Life, Exploding Kittens... 🧩
                            </li>
                        </ul>
                    </div>

                    {/* Soirée & Danse 💃 */}
                    <div className='bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xl'>💃</span>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-200'>Soirée</h4>
                        </div>
                        <ul className='mt-3 space-y-3 text-sm'>
                            <li className='flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>18h30 :</span> Ouverture du bal & Danse des mariés</li>
                            <li className='flex flex-col gap-1'>
                                <span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>20h00 : Cierges magiques & Foodtruck</span>
                                <span className='text-xs text-zinc-500 italic'>Burgers végétariens pour reprendre des forces !</span>
                            </li>
                            <li className='flex gap-3'><span className='font-mono font-semibold text-zinc-800 dark:text-zinc-400'>00h00 :</span> Fin des festivités</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Notes finales */}
            <Section className='mt-12 max-w-md mx-auto text-center'>
                <p className='text-sm text-zinc-500 italic'>
                    N'oubliez pas d'apporter vos jeux de société préférés et de laisser un mot dans le carnet de vœux ! ✨
                </p>
            </Section>

            {/* --- Modal Pop-up (RSVP) --- */}
            {isModalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6'>
                    <div className='w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800'>
                        <h3 className='text-2xl font-serif mb-6 text-zinc-900 dark:text-zinc-50'>Rejoindre la liste</h3>
                        
                        {status === 'success' ? (
                            <div className='text-center py-4 text-green-600 font-medium'>
                                ✨ C'est noté ! On a hâte de vous voir.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label className='block text-xs font-bold uppercase tracking-widest mb-1 opacity-60'>Prénom</label>
                                    <input
                                        required
                                        type='text'
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                        className='w-full rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-zinc-200 dark:bg-zinc-800'
                                    />
                                </div>
                                <div>
                                    <label className='block text-xs font-bold uppercase tracking-widest mb-1 opacity-60'>Nom</label>
                                    <input
                                        required
                                        type='text'
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                        className='w-full rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-zinc-200 dark:bg-zinc-800'
                                    />
                                </div>
                                
                                <div className='flex space-x-3 pt-4'>
                                    <button 
                                        type='button'
                                        onClick={() => setIsModalOpen(false)}
                                        className='flex-1 py-3 text-sm font-medium hover:bg-zinc-50 rounded-xl transition-colors'
                                    >
                                        Fermer
                                    </button>
                                    <button 
                                        type='submit'
                                        disabled={status === 'loading'}
                                        className='flex-1 rounded-xl bg-zinc-600 py-3 text-white font-bold shadow-md hover:bg-zinc-700 disabled:opacity-50 transition-all'
                                    >
                                        {status === 'loading' ? 'Envoi...' : 'Confirmer'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </Page>
    )
}

export default Index