import Image from 'next/image'
import Page from '@/components/page'
import Section from '@/components/section'
// 1. Import your local image if it's in your src/assets folder
import honeymoonPic from '@/public/images/fjord.jpg'

const HoneyMoon = () => (
    <Page>
        <Section>
            <h2 className='text-xl font-semibold'>Lune de Miel en Norvège</h2>

            <div className='mt-4 overflow-hidden rounded-xl shadow-sm'>
                {/* 2. Place the image above the paragraph */}
                <Image
                    src={honeymoonPic} 
                    alt="Beautiful Norwegian fjord"
                    width={600}
                    height={700}
                    className='aspect-video w-full object-cover'
                />
            </div>

            <div className='mt-6'>
                <p className='text-zinc-600 dark:text-zinc-400'>
                    Notre aventure commence à Oslo, où l'effervescence urbaine laisse 
                    rapidement place à la sérénité des fjords majestueux. Sous le soleil 
                    d'été, nous traversons des villages côtiers traditionnels aux maisons 
                    colorées, avant de tester notre complicité lors de descentes en rafting 
                    et en kayak sur les rivières cristallines du cœur de la Norvège.
                </p>

                <br />

                <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                    <span className='italic'>
                        Un périple entre terre et mer, de la capitale aux sommets sauvages.
                    </span>
                </p>
            </div>
        </Section>
    </Page>
)

export default HoneyMoon