import Link from "next/link";
import { Combobox } from "./Combobox";

export function Menu() {
    return (
        <div className="w-full h-full relative">
            <ul className="flex flex-col justify-center items-center w-full h-full gap-8 uppercase">
                <li className="text-3xl"><Link href="home">Inicio</Link></li>
                <li className="text-3xl"><Link href="about">Sobre Nós</Link></li>
                <li className="text-3xl"><Link href="location">Localização</Link></li>
                <li className="text-3xl"><Combobox /></li>
            </ul>
        </div>
    )
}