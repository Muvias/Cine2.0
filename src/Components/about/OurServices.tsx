import { SimpleCard } from '../SimpleCard';

import entranceCine from '@/../public/entranceCine.jpg';
import tickets from '@/../public/tickets.jpg';
import privateScreenings from '@/../public/privateScreenings.jpg';

export function OurServices() {
    return (
        <div className='w-full flex flex-col items-center my-8 px-10 text-gray-800'>
            <h2 className='text-3xl max-w-3xl w-full font-semibold mb-4'>Nossos Serviços</h2>

            <SimpleCard
                image={entranceCine}
                title='Bilheteria Online'
                content='Convenientemente reserve o seu ingresso online ou pelo nosso app. Pule as filas e aproveite o seu filme sem complicações.'
            />
            <SimpleCard
                image={tickets}
                title='Cartão Privilégio'
                content='Desbloqueie vantagens exclusivas com o nosso Cartão Cine. Aproveite descontos nos ingressos, pipoca de graça, e promoções especiais.'
            />
            <SimpleCard
                image={privateScreenings}
                title='Salas Privadas'
                content='Organize um evento único ou surpreenda o seu amor com uma das nossas salas privadas de cinema de última geração.'
            />
        </div>
    )
}