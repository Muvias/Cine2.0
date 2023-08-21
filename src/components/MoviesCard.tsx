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
            className="flex flex-col min-w-[100%] xl:min-w-[90%] h-[90vh] overflow-y-scroll gap-4 rounded shadow-lg bg-gray-300 relative snap-center"
            style={{
                backgroundImage: `linear-gradient(rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 0.9)), url('https://image.tmdb.org/t/p/w342${data.poster_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="z-50">
                <Image
                    src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
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
                    {data.overview ? (
                        <p className="text-lg font-semibold line-clamp-5 hover:line-clamp-none">
                            {data.overview}
                        </p>
                    ) : (
                        <p className="text-lg font-semibold">Este filme ainda não possui uma descrição...</p>
                    )}
                </ScrollArea>

                <p className='flex flex-wrap items-end mt-4 px-6 gap-2 text-xl font-medium text-gray-800'>
                    Produção: {data.production_companies.map(companie =>
                        <span className='px-2 text-base font-bold rounded text-gray-800 bg-zinc-100 bg-opacity-70' key={companie.id}>
                            {companie.name} - {companie.origin_country}
                        </span>
                    )}
                </p>

                <p className='flex flex-wrap items-end mt-4 px-6 gap-2 text-xl font-medium text-gray-800'>
                    Gêneros: {data.genres.map(genre =>
                        <span className='px-2 text-base font-bold rounded text-gray-800 bg-zinc-100 bg-opacity-70' key={genre.id}>
                            {genre.name}
                        </span>
                    )}
                </p>

                <p className="text-lg font-medium mt-4 px-6 text-gray-800">Duração: <span className="font-bold">{data.runtime}</span><span className="text-sm font-thin">min</span></p>

                <span className="absolute top-8 right-2 px-2 border border-gray-600 text-3xl font-extrabold text-gray-800 rounded bg-zinc-100 bg-opacity-80">{data.vote_average.toFixed(1)}</span>
            </div>
        </div>
    )
}