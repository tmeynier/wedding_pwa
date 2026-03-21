import Image from 'next/image'
import Page from '@/components/page'
import Section from '@/components/section'
import honeymoonPic from '@/public/images/fjord.jpg'

const HoneyMoon = () => (
    <Page>
        <Section>
            <h2 className='text-xl font-semibold'>Lune de Miel en Norvège</h2>

            <div className='mt-4 overflow-hidden rounded-xl shadow-sm'>
                <Image
                    src={honeymoonPic} 
                    alt="Beautiful Norwegian fjord"
                    width={600}
                    height={700}
                    className='aspect-video w-full object-cover'
                    priority // Ajouté pour un chargement plus rapide de l'image principale
                />
            </div>

            <div className='mt-6 space-y-4'>
                <p className='text-zinc-600 dark:text-zinc-400'>
                    Notre aventure commence à Oslo, où l'effervescence urbaine laisse 
                    rapidement place à la sérénité des fjords majestueux. Sous le soleil 
                    d'été, nous traversons des villages côtiers traditionnels aux maisons 
                    colorées, avant de tester notre complicité lors de descentes en rafting 
                    et en kayak sur les rivières cristallines du cœur de la Norvège.
                </p>

                <p className='text-zinc-600 dark:text-zinc-400'>
                    Pour célébrer notre mariage comme il faut, nous rêvons de vivre d'amour et d'eau fraîche. 
                    L'amour, nous l'avons déjà ! Mais l'eau fraîche, c'est en Norvège que nous aimerions la trouver. 
                    Nous rêvons d'y voyager pour un programme pur et sauvage : sauna, kayak, randonnée et parapente 
                    au cœur des plus beaux paysages d'Europe.
                </p>

                {/* --- Section Cagnotte (Style Carte Simple) --- */}
                <div className='mt-10 flex flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50'>
                    <span className='mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500'>
                        Notre Cagnotte
                    </span>
                    <a 
                        href="https://www.ungrandjour.com/fr/dasha-tristan-wedding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-700 hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white'
                    >
                        Participer à l'aventure
                    </a>
                    <p className='mt-3 text-xs text-zinc-400'>
                        Via ungrandjour.com
                    </p>
                </div>
                {/* ------------------------------------------- */}

                <p className='text-center text-sm italic text-zinc-500 dark:text-zinc-400'>
                    Un périple entre terre et mer, de la capitale aux sommets sauvages.
                </p>
            </div>
        </Section>
    </Page>
)

export default HoneyMoon