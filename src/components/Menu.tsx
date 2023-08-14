'use client'

import Link from "next/link";

import { MenuForMovieOptions } from "./MenuForMovieOptions";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

export function Menu() {
    const [toggle, setToggle] = useState(false)

    function onToggle() {
        setToggle(!toggle)
    }

    function closeMenu() {
        setToggle(false)
    }

    return (
        <>
            <div className={`lg:w-full w-[100vw] aboslute z-50 sm:w-[30vw] h-full ${!toggle && "hidden invisible"}  sm:block sm:visible text-white bg-black transition-all`}>
                <ul className="flex flex-col justify-center items-center px-4 lg:px-0 w-full h-full gap-8 uppercase lg:text-3xl text-2xl">
                    <li><Link href="home" onClick={closeMenu}>Inicio</Link></li>
                    <li><Link href="about" onClick={closeMenu}>Sobre Nós</Link></li>
                    <li><Link href="location" onClick={closeMenu}>Localização</Link></li>
                    <li onClick={closeMenu}><MenuForMovieOptions  /></li>
                </ul>
            </div>
            
            <div className="fixed top-2 right-2 p-1 z-50 bg-zinc-100 rounded sm:hidden" onClick={onToggle}>
                <AlignJustify />
            </div>
        </>
    )
}