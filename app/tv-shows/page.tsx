import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default async function TVShowsPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  // This would typically come from an API with proper caching
  const genres = [
    "Action",
    "Adventure",
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

  const tvShows = [
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
    <Suspense fallback={<TVShowsLoading />}>
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">{dict.nav.tvShows}</h1>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={dict.common.searchPlaceholder}
                className="pl-10 bg-zinc-900 border-zinc-700 text-white h-12 w-full"
              />
            </div>

            <Button variant="outline" className="border-zinc-700 h-12">
              <Filter className="mr-2 h-5 w-5" /> {dict.common.filter || "Filter"}
            </Button>
          </div>

          {/* Genres */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{dict.common.genres || "Genres"}</h2>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Button key={genre} variant="outline" className="border-zinc-700 hover:bg-primary hover:text-white">
                  {genre}
                </Button>
              ))}
            </div>
          </div>

          {/* TV Shows Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {tvShows.map((show) => (
              <Link key={show.id} href={`/watch/${show.title.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                <div className="relative aspect-[2/3] overflow-hidden rounded-md mb-2">
                  <Image
                    src={show.image || "/placeholder.svg"}
                    alt={show.title}
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
                <h3 className="font-medium line-clamp-1">{show.title}</h3>
                <div className="flex items-center text-sm text-zinc-400">
                  <span>{show.year}</span>
                  <span className="mx-1">•</span>
                  <span>{show.genre}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  )
}

function TVShowsLoading() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-800" />

        {/* Search and Filter Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Skeleton className="h-12 flex-grow bg-zinc-800" />
          <Skeleton className="h-12 w-32 bg-zinc-800" />
        </div>

        {/* Genres Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-8 w-32 mb-4 bg-zinc-800" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-10 w-24 bg-zinc-800" />
            ))}
          </div>
        </div>

        {/* TV Shows Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="aspect-[2/3] w-full rounded-md mb-2 bg-zinc-800" />
              <Skeleton className="h-5 w-3/4 mb-1 bg-zinc-800" />
              <Skeleton className="h-4 w-1/2 bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

