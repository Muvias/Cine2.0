"use client"

import * as React from "react"

import Link from "next/link"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ToApiContext } from "@/contexts/ToApiContext"

const categories = [
    {
        value: "cinema",
        label: "cinema",
        searchParam: "movie/now_playing",
        query: ''
    },
    {
        value: "marvel",
        label: "marvel",
        searchParam: "search/movie",
        query: "marvel"
    },
    {
        value: "dc",
        label: "dc",
        searchParam: "search/movie",
        query: "dc"
    },
]

export function Combobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("cinema")
    const { setSearchParam, setQueryParam } = React.useContext(ToApiContext)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="link"
                    role="combobox"
                    aria-expanded={open}
                    className="max-w-[200px] justify-between lg:text-3xl text-2xl uppercase font-normal text-white"
                >
                    Catálogo
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Procurar categoria..." />
                    <CommandEmpty>Categoria não encontrada.</CommandEmpty>
                    <CommandGroup>
                        {categories.map((categorie) => (
                            <Link href="/" key={categorie.value}>
                                <CommandItem
                                    onSelect={(currentValue) => {
                                        setValue(currentValue)
                                        setSearchParam(categorie.searchParam)
                                        setQueryParam(categorie.query)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === categorie.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {categorie.label}
                                </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
