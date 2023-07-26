'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ToApiContextType {
    searchParam: string
    setSearchParam: Dispatch<SetStateAction<string>>

    queryParam: string
    setQueryParam: Dispatch<SetStateAction<string>>

    page: number
    setPage: Dispatch<SetStateAction<number>>

    totalPages: number
    setTotalPages: Dispatch<SetStateAction<number>>
}

export const ToApiContext = createContext({} as ToApiContextType);

export function ToApiProvider({ children }: { children: ReactNode }) {
    const [searchParam, setSearchParam] = useState('movie/now_playing');
    const [queryParam, setQueryParam] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    return (
        <ToApiContext.Provider value={{ searchParam, setSearchParam, queryParam, setQueryParam, page, setPage, totalPages, setTotalPages }}>
            {children}
        </ToApiContext.Provider>
    )
}