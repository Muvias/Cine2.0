import { useQuery } from "@tanstack/react-query";

import axios from 'axios';

interface Genre {
  id: number
  name: string
}

interface Companies {
  id: number
  name: string
  origin_country: string
}

interface Movie {
  id: number
  title: string
  overview: string
  genres: Genre[]
  production_companies: Companies[]
  vote_average: number
  poster_path: string
  backdrop_path: string
  runtime: number
}

export function getMovieById(movieId: number) {
  return useQuery<Movie>(['movie', movieId], () =>
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
      .then((res) => res.data)
  );
}