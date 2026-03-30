import Image from 'next/image'
import Page from '@/components/page'
import Section from '@/components/section'
import honeymoonPic from '@/public/images/fjord.jpg'

// --- 1. Define or Import FlowerIcon ---
// (You might import this from your other file or common components)
const FlowerIcon = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z" fill="currentColor"/>
    <path d="M12 18C10.9 18 10 18.9 10 20C10 21.1 10 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z" fill="currentColor"/>
    <path d="M18 12C19.1 12 20 11.1 20 10C20 8.9 19.1 8 18 8C16.9 8 16 8.9 16 10C16 11.1 16.9 12 18 12Z" fill="currentColor"/>
    <path d="M6 12C7.1 12 8 11.1 8 10C8 8.9 7.1 8 6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12Z" fill="currentColor"/>
    <path d="M18 16C19.1 16 20 15.1 20 14C20 12.9 19.1 12 18 12C16.9 12 16 12.9 16 14C16 15.1 16.9 16 18 16Z" fill="currentColor"/>
    <path d="M6 16C7.1 16 8 15.1 8 14C8 12.9 7.1 12 6 12C4.9 12 4 12.9 4 14C4 15.1 4.9 16 6 16Z" fill="currentColor"/>
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
  </svg>
);
// ----------------------------------------

const HoneyMoon = () => (
    <Page>
        <Section>
            {/* --- 2. Update Layout: Title, Icon, spacing --- */}
            <Section className="text-center">
            <h1 className='text-3xl md:text-4xl font-serif text-zinc-900 dark:text-zinc-50 text-center'>
                Lune de Miel en Norvège
            </h1>
                <div className='mt-2 flex items-center justify-center gap-2 text-zinc-300 dark:text-zinc-800'>
                    <div className='h-px w-12 bg-current'></div>
                    <FlowerIcon className='w-4 h-4' />
                    <div className='h-px w-12 bg-current'></div>
                </div>
            </Section>

            {/* --------------------------------------------- */}

            <div className='mt-4 overflow-hidden rounded-xl shadow-sm'>
                <Image
                    src={honeymoonPic} 
                    alt="Beautiful Norwegian fjord"
                    width={600}
                    height={700}
                    className='aspect-video w-full object-cover'
                    priority 
                />
            </div>

            <div className='mt-6 space-y-4'>
                <p className='text-zinc-600 dark:text-zinc-400'>
                    Notre Lune de Miel 🇳🇴
                    <br /><br />
                    Pour nous, la Norvège avec ses fjords immenses et sa nature préservée est le pays idéal pour célébrer notre amour. 
                    Au programme : exploration des villages côtiers colorés, navigation en kayak sur des eaux cristallines, randonnées au sommet de falaises, et parapente au-dessus des plus beaux panoramas d’Europe.
                    <br /><br />
                    Si vous souhaitez nous offrir un petit bout de cette aventure, nous mettons à votre disposition une cagnotte 100 % sécurisée. Nous serons infiniment touchés si vous y laissez un petit message avec votre cadeau 💝
                </p>

                {/* --- Section Cagnotte --- */}
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

                <p className='text-center text-sm italic text-zinc-500 dark:text-zinc-400'>
                    Un périple entre terre et mer.
                </p>
            </div>
        </Section>

        <Section className='mt-24 mb-60 w-full text-center'></Section>
        
    </Page>
)

export default HoneyMoon