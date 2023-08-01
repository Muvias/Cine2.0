import Image from 'next/image'

import newbg from '@/../public/newbg.jpg'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="flex flex-col justify-center items-center h-screen w-full gap-8 text-center text-gray-900 relative">
            <Image src={newbg} alt='' className='absolute -z-10 w-full h-full object-cover' />

            <div className='w-2/3 rounded-lg flex flex-col gap-8 items-center bg-zinc-100 bg-opacity-50 px-4 py-4 shadow-md'>
                <h1 className="text-5xl font-bold">Experiencie a melhor aventura cinematográfica</h1>
                <p className="text-lg leading-relaxed font-medium">Escape da realidade e mergulhe na magia do cinema com a gente. Confira nossas categorias!</p>

                <Link href='/' className='px-4 py-2 rounded bg-red-900 hover:bg-opacity-90 text-white transition-colors'>Catálogo</Link>
            </div>
        </section>
    )
}