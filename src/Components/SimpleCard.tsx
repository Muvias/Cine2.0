import Image, { StaticImageData } from "next/image";

interface Card {
    image: StaticImageData
    title: string
    content: string
}

export function SimpleCard({ image, title, content }: Card) {
    return (
        <div className="shadow-lg p-8 rounded-md mt-4 bg-white">
            <Image src={image} alt='' className='max-w-xl w-full rounded-md aspect-video object-cover' />

            <div className='max-w-xl mt-4'>
                <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>

                <p className='mt-2 leading-relaxed font-medium opacity-95'>{content}</p>
            </div>
        </div>
    )
}