import axios from "axios";

import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';

import { ToApiContext } from "@/contexts/ToApiContext";

import { Check as CheckedIcon, X, Filter as FilterIcon } from "lucide-react"

interface Genre {
    id: number
    name: string
}

export function FilteringByMovieGenre() {
    const { filteringGenres, setFilteringGenres } = useContext(ToApiContext)

    const { data, isLoading } = useQuery<Genre[]>({
        queryKey: ['genres'],
        queryFn: () => axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
            .then(res => res.data.genres),
        refetchOnWindowFocus: false,
    })

    if (isLoading || !data) {
        return <div>Carregando...</div>
    }

    function handleToggleFilter(categorieId: number) {
        let ids = [];

        if (filteringGenres.includes(categorieId)) {
            ids = filteringGenres.filter(id => id !== categorieId)
        } else {
            ids = [...filteringGenres, categorieId];
        }

        setFilteringGenres(ids);
    }

    return (
        <Popover.Root>
            <Popover.Trigger>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 text-white shadow-sm hover:bg-gray-800 transition-colors" aria-label="Movies filter">
                    <FilterIcon />
                </div>
            </Popover.Trigger>
            <Popover.Anchor />
            <Popover.Portal className='w-full max-w-[620px]'>
                <Popover.Content className='flex flex-col w-screen max-w-[580px] p-6 rounded-md bg-slate-100 z-50' sideOffset={5} >
                    <div className='flex flex-wrap sm:justify-between gap-2 sm:gap-4'>
                        {data.map(categorie => {
                            return (
                                <Checkbox.Root
                                    key={categorie.name}
                                    checked={filteringGenres.includes(categorie.id)}
                                    onCheckedChange={() => handleToggleFilter(categorie.id)}
                                    className="flex items-center w-[48%] sm:w-[30%] gap-3 mt-2 group disabled:cursor-not-allowed"
                                >
                                    <div className='w-6 h-6 flex items-center justify-center rounded-lg bg-white group-hover:bg-gray-700 transition-colors'>
                                        <Checkbox.Indicator className="text-gray-900">
                                            <CheckedIcon />
                                        </Checkbox.Indicator>
                                    </div>

                                    <span
                                        className='text-left text-lg font-extrabold leading-tight text-zinc-400 group-data-[state=checked]:text-gray-900 group-hover:text-gray-800 transition-all'
                                    >
                                        {categorie.name}
                                    </span>
                                </Checkbox.Root>
                            )
                        })}
                    </div>
                    <Popover.Close className='h-6 w-6 inline-flex justify-center items-center absolute top-1 right-1 rounded-full text-gray-900 hover:bg-slate-400 transition-colors'>
                        <X />
                    </Popover.Close>
                    <Popover.Arrow height={8} width={18} className='fill-slate-100' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

    )
}