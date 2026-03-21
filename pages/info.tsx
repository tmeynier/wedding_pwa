import Page from '@/components/page'
import Section from '@/components/section'

const Info = () => (
    <Page>
        <Section>
            <h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
                Pratico-Pratique
            </h2>

            <div className='mt-2'>
                <p className='text-zinc-600 dark:text-zinc-400'>
                    Voici toutes les informations logistiques pour vous accompagner le jour J.
                </p>
            </div>
        </Section>

        <Section>
            <h3 className='font-medium text-zinc-800 dark:text-zinc-200'>Le Lieu</h3>
            <p className='mt-1 text-sm text-zinc-600 dark:text-zinc-400'>
                La cérémonie et la réception se dérouleront au [Nom du Lieu], 
                situé au [Adresse complète].
            </p>
        </Section>

        <Section>
            <h3 className='font-medium text-zinc-800 dark:text-zinc-200'>Parking & Accès</h3>
            <ul className='list-disc space-y-2 px-6 py-2'>
                <li className='text-sm text-zinc-600 dark:text-zinc-400'>
                    <span className='font-semibold text-zinc-900 dark:text-zinc-100'>Parking :</span> Un espace de stationnement gratuit est disponible directement sur place.
                </li>
                <li className='text-sm text-zinc-600 dark:text-zinc-400'>
                    <span className='font-semibold text-zinc-900 dark:text-zinc-100'>Covoiturage :</span> Nous encourageons le partage de trajet pour les invités venant de la même ville.
                </li>
                <li className='text-sm text-zinc-600 dark:text-zinc-400'>
                    <span className='font-semibold text-zinc-900 dark:text-zinc-100'>Transports :</span> La gare la plus proche se situe à environ 15 minutes en taxi.
                </li>
            </ul>
        </Section>

        <Section>
            <h3 className='font-medium text-zinc-800 dark:text-zinc-200'>Hébergement</h3>
            <p className='mt-1 text-sm text-zinc-600 dark:text-zinc-400'>
                Plusieurs hôtels et chambres d'hôtes se trouvent à proximité. N'hésitez pas à nous 
                contacter si vous avez besoin d'une liste de recommandations.
            </p>
        </Section>
    </Page>
)

export default Info