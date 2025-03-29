import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MoviesPage() {
  // This would typically come from an API
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
  ]

  const movies = [
    {
      id: 1,
      title: "Jujutsu Kaisen",
      image: "/images/moves/1.png",
      type: "anime",
      year: "2020",
      genre: "Action",
    },
    {
      id: 2,
      title: "Demon Slayer",
      image: "/images/moves/2.png",
      type: "anime",
      year: "2019",
      genre: "Fantasy",
    },
    {
      id: 3,
      title: "Attack on Titan",
      image: "/images/moves/3.png",
      type: "anime",
      year: "2013",
      genre: "Action",
    },
    {
      id: 4,
      title: "Stranger Things",
      image: "/images/moves/4.png",
      type: "tv",
      year: "2016",
      genre: "Sci-Fi",
    },
    {
      id: 5,
      title: "Breaking Bad",
      image: "/images/moves/5.png",
      type: "tv",
      year: "2008",
      genre: "Drama",
    },
    {
      id: 6,
      title: "The Witcher",
      image: "/images/moves/6.png",
      type: "tv",
      year: "2019",
      genre: "Fantasy",
    },
    {
      id: 7,
      title: "Inception",
      image: "/images/moves/7.png",
      type: "movies",
      year: "2010",
      genre: "Sci-Fi",
    },
    {
      id: 8,
      title: "The Dark Knight",
      image: "/images/moves/8.png",
      type: "movies",
      year: "2008",
      genre: "Action",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Movies</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for movies..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-white h-12 w-full"
            />
          </div>

          <Button variant="outline" className="border-zinc-700 h-12">
            <Filter className="mr-2 h-5 w-5" /> Filter
          </Button>
        </div>

        {/* Genres */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Genres</h2>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button key={genre} variant="outline" className="border-zinc-700 hover:bg-primary hover:text-white">
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/watch/${movie.title.toLowerCase().replace(/\s+/g, "-")}`} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-md mb-2">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-medium line-clamp-1">{movie.title}</h3>
              <div className="flex items-center text-sm text-zinc-400">
                <span>{movie.year}</span>
                <span className="mx-1">•</span>
                <span>{movie.genre}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

