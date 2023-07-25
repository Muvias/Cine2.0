import { MutableRefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowsToCasousel {
    carouselRef: MutableRefObject<HTMLDivElement>
}

export function ArrowsToCasousel({ carouselRef }: ArrowsToCasousel) {
    function handleClickLeftArrow() {
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
    }

    function handleClickRightArrow() {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
    }

    return (
        <div>
            <button className="absolute top-1/2 cursor-pointer left-0" onClick={handleClickLeftArrow}>
                <ChevronLeft width={40} height={40} />
            </button>
            <button className="absolute top-1/2 cursor-pointer right-0" onClick={handleClickRightArrow}>
                <ChevronRight width={40} height={40} />
            </button>
        </div>
    )
}