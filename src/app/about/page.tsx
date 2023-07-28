import { AboutUs } from "@/components/about/AboutUs";
import { OurServices } from "@/components/about/OurServices";

export default function About() {
    return (
        <section className="max-h-screen overflow-y-scroll bg-slate-50">
            <AboutUs />

            <OurServices />
        </section>
    )
}