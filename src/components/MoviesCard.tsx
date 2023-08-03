import Image from "next/image";

import { ScrollArea } from "./ui/scroll-area";

import { getMovieById } from "@/hooks/getMovieById";


interface Card {
    movieId: number
}

export function MoviesCard({ movieId }: Card) {
    const { data, isLoading } = getMovieById(movieId);

    if (isLoading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className="flex flex-col min-w-[90%] h-[90vh] overflow-y-scroll gap-4 rounded shadow-lg bg-gray-300 relative snap-center"
        >
            <div className="z-50">
                <Image
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt=''
                    width={592}
                    height={280}
                    priority={true}
                    className='mx-auto aspect-video object-cover rounded-md mt-8'
                />

                <h2 className="text-3xl text-center my-4 font-bold text-gray-800">
                    {data.title}
                </h2>

                <ScrollArea className="h-[10rem] px-6 py-2 shadow-md rounded-sm text-gray-800 bg-white bg-opacity-50">
                    <p className="text-lg font-semibold line-clamp-5 hover:line-clamp-none">
                        {data.overview}
                    </p>
                </ScrollArea>

                <p className='flex flex-wrap items-end mt-4 px-6 gap-2 text-xl font-medium text-gray-800'>
                    Gêneros: {data.genres.map(genre =>
                        <span className='text-base font-bold text-gray-800 comma' key={genre.id}>
                            {genre.name}
                        </span>
                    )}
                </p>

                <p className="absolute bottom-2 left-2 text-lg font-medium text-gray-800">Duração: <span className="font-bold">{data.runtime}</span><span className="text-base font-thin">min</span></p>

                <span className="absolute bottom-2 right-2 px-2 border border-gray-600 text-3xl font-extrabold text-gray-800 rounded bg-zinc-100 bg-opacity-50">{data.vote_average.toFixed(1)}</span>
            </div>

            <Image
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt=''
                width={592}
                height={280}
                priority={true}
                className='absolute left-0 top-0 w-full h-full object-cover opacity-30 rounded brightness-75'
            />
        </div>
    )
}