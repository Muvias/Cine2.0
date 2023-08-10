'use client'

import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { MutableRefObject, useContext, useRef } from "react";
import { ToApiContext } from "@/contexts/ToApiContext";
import { MoviesCard } from "./MoviesCard";
import { ArrowsToCasousel } from "./ArrowsToCarousel";
import { Pagination } from "./Pagination";

interface Movie {
    id: number
    original_title: string
}

export function GetMovies() {
    const { searchParam, queryParam, page, setTotalPages, filtering, setFiltering } = useContext(ToApiContext)

    const carousel = useRef() as MutableRefObject<HTMLDivElement>

    const { data, isLoading } = useQuery<Movie[]>({
        queryKey: ['movies', { searchParam, queryParam, page }],
        queryFn: () => axios.get(`https://api.themoviedb.org/3/${searchParam}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&query=${queryParam}&page=${page}]`)
            .then(res => {
                setTotalPages(res.data.total_pages);

                return res.data.results;
            }),
        refetchOnWindowFocus: false,
    })

    if (isLoading || !data) return <div>Loading...</div>

    return (
        <div className="relative px-10 pt-4 bg-gray-50">
            {searchParam !== 'movie/now_playing' && (
                <Pagination />
            )}

            <input
                placeholder="Digite o filme..."
                className="flex mx-auto px-2 py-1 text-sm border border-gray-800 rounded-sm"
                onChange={(e) => setFiltering(e.target.value)}
            />

            <div className="flex gap-12 overflow-x-scroll scroll-smooth xl:px-10 py-4 snap-x" ref={carousel}>
                {data.filter(movie => movie.original_title.toLowerCase().includes(filtering.toLocaleLowerCase())
                ).map(movie => (
                    <MoviesCard
                        key={movie.id}
                        movieId={movie.id}
                    />
                ))}
            </div>

            <ArrowsToCasousel carouselRef={carousel} />
        </div>
    )
}