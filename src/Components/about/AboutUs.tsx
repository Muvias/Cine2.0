import Image from 'next/image';

import movieTheater from '@/../public/movieTheater.jpg';

export function AboutUs() {
    return (
        <div className='w-full flex flex-col items-center mt-8 px-10'>
            <Image src={movieTheater} alt='' className='rounded-md aspect-video object-cover max-w-3xl w-full' />

            <div className='max-w-3xl mt-8'>
                <h2 className='text-3xl font-semibold'>Sobre nós</h2>

                <p className='mt-4 text-lg leading-relaxed opacity-95'>Cine é um renomado cinema localizado em São Paulo, SP. Com paixão por entregar excepcionais experiências de filme, nos esforçamos para fornecer aos nossos clientes os mais recentes sucessos de bilheteria, filmes independentes, e clássicos atemporais. Nossas instalações de última geração, assentos confortáveis, e tecnologia de ponta asseguram que cada visita ao Cine seja uma viagem cinematográfica imersiva e inesquecível. Se você é um entusiasta do cinema, um espectador casual, ou uma família procurando por entretenimento, Cine é perfeitamente destinado à todas as suas necessidades cinemáticas.</p>
            </div>
        </div>
    )
}