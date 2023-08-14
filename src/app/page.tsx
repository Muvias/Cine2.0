import { MovieRenderer } from "@/components/MovieRenderer";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col overflow-y-scroll">
      <MovieRenderer />
    </main>
  )
}
