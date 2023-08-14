import { AboutUs } from "@/components/about/AboutUs";
import { OurServices } from "@/components/about/OurServices";

export default function About() {
    return (
        <div className="max-h-screen overflow-y-scroll bg-gray-100">
            <AboutUs />

            <OurServices />
        </div>
    )
}