import { GetMovies } from "@/components/GetMovies";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col overflow-y-scroll">
      <GetMovies />
    </main>
  )
}
