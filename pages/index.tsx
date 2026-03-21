import { useState } from 'react'
import Image from 'next/image'
import Page from '@/components/page'
import Section from '@/components/section'

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
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <Page>
            {/* --- Hero Section --- */}
            <Section>
                <h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-50'>
                    Le jour J arrive à grands pas !
                </h1>
                
                <div className='mt-6 overflow-hidden rounded-2xl shadow-lg'>
                    <Image 
                        src="/images/main.jpg" 
                        alt="Dasha & Tristan" 
                        width={1200} 
                        height={600} 
                        className="w-full object-cover"
                        priority
                    />
                </div>
            </Section>

            {/* --- Our Story --- */}
            <Section>
                <h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
                    Notre Histoire
                </h2>
                <div className='mt-4 space-y-4 text-zinc-600 dark:text-zinc-400'>
                    <p>
                        À l’ère du numérique, c’est sur les réseaux sociaux que nos chemins se sont croisés. 
                        Ce qui a commencé par un simple message s’est transformé en une magnifique aventure moderne.
                    </p>
                    <p>
                        Aujourd’hui, nous savourons chaque instant de notre vie de couple. Que ce soit lors de nos 
                        week-ends à Strasbourg, nos escapades en Suisse ou nos explorations des paysages 
                        environnants, chaque moment est une nouvelle page de notre récit.
                    </p>
                    <p className='font-medium text-zinc-800 dark:text-zinc-200'>
                        Nous avons hâte de célébrer notre union entourés des personnes qui nous sont chères. 
                        Merci d'être à nos côtés pour ce chapitre si spécial.
                    </p>
                </div>
            </Section>

            {/* --- RSVP / Wedding List Button --- */}
            <Section>
                <div className='flex justify-center py-8'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='rounded-full bg-indigo-600 px-8 py-3 font-medium text-white transition-transform hover:scale-105 active:scale-95'
                    >
                        M'ajouter à la liste de mariage
                    </button>
                </div>
            </Section>

            {/* --- Pop-up Modal --- */}
            {isModalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6'>
                    <div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900'>
                        <h3 className='text-xl font-bold mb-4'>Rejoindre la liste</h3>
                        
                        {status === 'success' ? (
                            <p className='text-green-600 font-medium'>C'est noté ! On a hâte de vous voir.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium mb-1'>Prénom</label>
                                    <input
                                        required
                                        type='text'
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                        className='w-full rounded-lg border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium mb-1'>Nom</label>
                                    <input
                                        required
                                        type='text'
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                        className='w-full rounded-lg border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700'
                                    />
                                </div>
                                
                                {status === 'error' && (
                                    <p className='text-red-500 text-sm'>Erreur lors de l'envoi. Réessayez ?</p>
                                )}

                                <div className='flex space-x-3 pt-2'>
                                    <button 
                                        type='button'
                                        onClick={() => setIsModalOpen(false)}
                                        className='flex-1 rounded-lg bg-zinc-100 py-2 dark:bg-zinc-800'
                                    >
                                        Annuler
                                    </button>
                                    <button 
                                        type='submit'
                                        disabled={status === 'loading'}
                                        className='flex-1 rounded-lg bg-indigo-600 py-2 text-white disabled:opacity-50'
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