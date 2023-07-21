'use client'

import axios from "axios";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { MutableRefObject, useRef } from "react";

interface Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
}

export function GetMovies() {
    const { data, isLoading } = useQuery<Movie[]>({
        queryKey: ['movies'],
        queryFn: () => axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`).then(res => res.data.results),
    });

    const carousel = useRef() as MutableRefObject<HTMLDivElement>;

    if (isLoading || !data) return <div>Loading...</div>

    function handleClickLeftArrow() {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    function handleClickRightArrow() {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <div className="relative px-10 bg-gray-100">
            <div className="flex gap-12 overflow-x-scroll scroll-smooth p-10 snap-x" ref={carousel}>
                {data.map(movie => (
                    <div
                        key={movie.id}
                        className="flex flex-col min-w-[90%] h-[90vh] gap-4 rounded shadow-lg bg-transparent relative snap-center"
                    >
                        <div className="z-50">
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt=''
                                width={592}
                                height={280}
                                className='mx-auto aspect-video object-cover rounded-md mt-8'
                            />
                            <h2 className="text-3xl text-center my-4 font-bold text-gray-800">{movie.title}</h2>

                            <p className="text-lg font-semibold h-[10rem] overflow-y-scroll px-6 py-2 shadow-md rounded-sm text-gray-800 bg-white bg-opacity-50">{movie.overview}</p>
                        </div>

                        <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt=''
                            width={592}
                            height={280}
                            className='absolute left-0 top-0 w-full h-full object-cover opacity-30 rounded brightness-75'
                        />
                    </div>
                ))}
            </div>

            <div>
                <button className="absolute top-1/2 cursor-pointer left-0" onClick={handleClickLeftArrow}>
                    <ChevronLeft width={40} height={40} />
                </button>
                <button className="absolute top-1/2 cursor-pointer right-0" onClick={handleClickRightArrow}>
                    <ChevronRight width={40} height={40} />
                </button>
            </div>
        </div>
    )
}