import Link from "next/link";
import { Combobox } from "./Combobox";

export function Menu() {
    return (
        <div className="lg:w-full w-[30vw] h-full relative hidden invisible sm:block sm:visible">
            <ul className="flex flex-col justify-center lg:items-center px-4 lg:px-0 w-full h-full gap-8 uppercase lg:text-3xl text-2xl">
                <li><Link href="home">Inicio</Link></li>
                <li><Link href="about">Sobre Nós</Link></li>
                <li><Link href="location">Localização</Link></li>
                <li><Combobox /></li>
            </ul>
        </div>
    )
}