import { SimpleCard } from "@/components/SimpleCard";

import entranceCine from '@/../public/entranceCine.jpg';
import tickets from '@/../public/tickets.jpg';

export default function Location() {
    return (
        <section className="h-screen w-full sm:px-12 px-6 pt-6 overflow-y-scroll text-gray-800 bg-gray-100">
            <h2 className='text-4xl max-w-3xl w-full font-semibold mb-4'>Localização</h2>
            <p className="font-medium">Estamos localizados em uma das melhores áreas da cidade, com fácil acesso de carro e transporte público. Oferecemos um amplo estacionamento para sua comodidade.</p>

            <div className='max-w-sm w-full flex flex-col my-4 text-gray-900'>
                <SimpleCard
                    image={entranceCine}
                    title='Endereço'
                    content='Rua dos Cinemas, 123 - São Paulo'
                />
                <SimpleCard
                    image={tickets}
                    title='Estacionamento'
                    content='Contamos com um estacionamento próprio e amplo, com vagas disponíveis e seguras.'
                />
            </div>
        </section>
    )
}