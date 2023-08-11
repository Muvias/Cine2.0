'use client'

import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { MutableRefObject, useContext, useRef, useState } from "react";
import { ToApiContext } from "@/contexts/ToApiContext";
import { MoviesCard } from "./MoviesCard";
import { ArrowsToCasousel } from "./ArrowsToCarousel";
import { Pagination } from "./Pagination";
import { FilteringByGenreMovie } from "./FilteringByGenreMovie";

interface Movie {
    id: number
    original_title: string
    genre_ids: Number[]
}

export function GetMovies() {
    const { searchParam, queryParam, page, setTotalPages, filteringGenres } = useContext(ToApiContext)

    const [filtering, setFiltering] = useState('')

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
            <div className="flex flex-wrap justify-center gap-2">
                {searchParam !== 'movie/now_playing' && (
                    <Pagination />
                )}

                <input
                    placeholder="Digite o filme..."
                    className="flex px-2 py-1 text-sm border border-gray-800 rounded-sm"
                    onChange={(e) => setFiltering(e.target.value)}
                />

                <FilteringByGenreMovie />
            </div>

            <div className="flex gap-12 overflow-x-scroll scroll-smooth xl:px-10 py-4 snap-x" ref={carousel}>
                {data.filter(movie => movie.original_title.toLowerCase().includes(filtering.toLocaleLowerCase()) && filteringGenres.every(id => movie.genre_ids.includes(id))
                ).map(movie => (
                    <MoviesCard
                        key={movie.id}
                        movieId={movie.id}
                    />
                ))}

                {data.filter(movie => movie.original_title.toLowerCase().includes(filtering.toLowerCase())).length === 0 && (
                    <p>Não foi encontrado nenhum filme nesta página que corresponda a "<span className="font-bold">{filtering}</span>"</p>
                )}
            </div>

            <ArrowsToCasousel carouselRef={carousel} />
        </div>
    )
}