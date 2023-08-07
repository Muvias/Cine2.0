"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToApiContext } from "@/contexts/ToApiContext"

export function Pagination() {
    const { page, setPage, totalPages } = React.useContext(ToApiContext)

    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-4">Pág. {page}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />

                {pageNumbers.map(pag => (
                    <DropdownMenuCheckboxItem
                        key={pag}
                        onSelect={() => setPage(pag)}
                    >
                        {pag}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
