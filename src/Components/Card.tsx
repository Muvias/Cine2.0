import Image from "next/image";

import { ScrollArea } from "./ui/scroll-area";

interface Card {
    cardImg: string
    bgImg: string
    title: string
    description: string
}

export function Card({ cardImg, bgImg, title, description }: Card) {
    return (
        <div
            className="flex flex-col min-w-[90%] h-[90vh] gap-4 rounded shadow-lg bg-gray-300 relative snap-center"
        >
            <div className="z-50">
                <Image
                    src={`https://image.tmdb.org/t/p/original${cardImg}`}
                    alt=''
                    width={592}
                    height={280}
                    priority={true}
                    className='mx-auto aspect-video object-cover rounded-md mt-8'
                />

                <h2 className="text-3xl text-center my-4 font-bold text-gray-800">
                    {title}
                </h2>

                <ScrollArea className="h-[10rem] px-6 py-2 shadow-md rounded-sm text-gray-800 bg-white bg-opacity-50">
                    <p className="text-lg font-semibold ">
                        {description}
                    </p>
                </ScrollArea>
            </div>

            <Image
                src={`https://image.tmdb.org/t/p/original${bgImg}`}
                alt=''
                width={592}
                height={280}
                priority={true}
                className='absolute left-0 top-0 w-full h-full object-cover opacity-30 rounded brightness-75'
            />
        </div>
    )
}