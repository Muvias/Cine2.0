import { useContext } from "react";
import { ToApiContext } from "@/contexts/ToApiContext";

export function FilterByMovieName() {
    const { setFilteringByNames } = useContext(ToApiContext)

    return (
        <input
            placeholder="Digite o filme..."
            className="flex px-2 py-1 text-sm border border-gray-800 rounded-sm"
            onChange={(e) => setFilteringByNames(e.target.value)}
        />
    )
}