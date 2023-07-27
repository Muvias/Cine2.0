import Image from 'next/image'

import HomeBackground from '@/../public/HomeBackground.jpg'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="flex flex-col justify-center items-center h-screen w-full gap-8  text-center text-white relative">
            <Image src={HomeBackground} alt='' className='absolute -z-10 w-full h-full object-cover' />
            <h1 className="w-2/3 text-5xl font-bold">Experiencie a melhor aventura cinematográfica</h1>
            <p className="w-2/3 text-lg leading-relaxed">Escape da realidade e mergulhe na magia do cinema com a gente. Confira nossas categorias!</p>

            <Link href='/' className='px-4 py-2 rounded bg-red-900 hover:bg-opacity-90 transition-colors'>Catálogo</Link>
        </section>
    )
}