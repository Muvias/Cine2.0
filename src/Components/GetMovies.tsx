'use client'

import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { MutableRefObject, useContext, useRef } from "react";
import { ToApiContext } from "@/contexts/ToApiContext";
import { Card } from "./Card";
import { ArrowsToCasousel } from "./ArrowsToCarousel";

interface Movie {
    id: number
    title: string
    overview: string
    vote_average: number
    poster_path: string
    backdrop_path: string
}

export function GetMovies() {
    const { searchParam, queryParam, page } = useContext(ToApiContext)

    const carousel = useRef() as MutableRefObject<HTMLDivElement>
    
    const { data, isLoading } = useQuery<Movie[]>({
        queryKey: ['movies', { searchParam, queryParam, page }],
        queryFn: () => axios.get(`https://api.themoviedb.org/3/${searchParam}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&query=${queryParam}&page=${page}]`).then(res => res.data.results),
        refetchOnWindowFocus: false,
    })

    if (isLoading || !data) return <div>Loading...</div>

    return (
        <div className="relative px-10 bg-gray-100">
            <div className="flex gap-12 overflow-x-scroll scroll-smooth p-10 snap-x" ref={carousel}>
                {data.map(movie => (
                    <Card
                        key={movie.id}
                        cardImg={movie.poster_path}
                        bgImg={movie.backdrop_path}
                        title={movie.title}
                        description={movie.overview}
                    />
                ))}
            </div>

            <ArrowsToCasousel carouselRef={carousel} />
        </div>
    )
}