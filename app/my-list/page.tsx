import { Button } from "@/components/ui/button"
import { Trash2, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default async function MyListPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  // This would typically come from an API with proper caching
  const myList = [
    {
      id: 1,
      title: "Jujutsu Kaisen",
      type: dict.categories.anime,
      addedDate: "2023-05-10",
      image: "/images/moves/1.png",
      year: "2020",
      genre: "Action"
    },
    {
      id: 2,
      title: "Demon Slayer",
      type: dict.categories.anime,
      addedDate: "2023-05-08",
      image: "/images/moves/2.png",
      year: "2019",
      genre: "Fantasy"
    },
    {
      id: 3,
      title: "Attack on Titan",
      type: dict.categories.anime,
      addedDate: "2023-05-05",
      image: "/images/moves/3.png",
      year: "2013",
      genre: "Action"
    },
    {
      id: 4,
      title: "Stranger Things",
      type: dict.categories.tvShow,
      addedDate: "2023-05-01",
      image: "/images/moves/4.png",
      year: "2016",
      genre: "Sci-Fi"
    },
    {
      id: 5,
      title: "Breaking Bad",
      type: dict.categories.tvShow,
      addedDate: "2023-04-28",
      image: "/images/moves/5.png",
      year: "2008",
      genre: "Drama"
    },
    {
      id: 6,
      title: "The Witcher",
      type: dict.categories.tvShow,
      addedDate: "2023-04-25",
      image: "/images/moves/6.png",
      year: "2019",
      genre: "Fantasy"
    },
    {
      id: 7,
      title: "Inception",
      type: dict.categories.movie,
      addedDate: "2023-04-20",
      image: "/images/moves/7.png",
      year: "2010",
      genre: "Sci-Fi"
    },
    {
      id: 8,
      title: "The Dark Knight",
      type: dict.categories.movie,
      addedDate: "2023-04-15",
      image: "/images/moves/8.png",
      year: "2008",
      genre: "Action"
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <Suspense fallback={<MyListLoading />}>
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">{dict.nav.myList}</h1>

          {myList.length > 0 ? (
            <div className="space-y-4">
              {myList.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="relative w-full sm:w-[120px] aspect-video sm:aspect-[16/9] rounded-md overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <span>{item.type}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {dict.myList?.addedOn || "Added on"} {formatDate(item.addedDate)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                    <Button asChild className="flex-1 sm:flex-initial">
                      <Link href={`/watch/${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Play className="h-4 w-4 mr-2" /> {dict.common.playNow}
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" className="border-zinc-700">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">{dict.myList?.empty || "Your list is empty"}</h2>
              <p className="text-zinc-400 max-w-md mb-6">
                {dict.myList?.emptyMessage || "Add movies, TV shows, and anime to your list to watch them later"}
              </p>
              <Button asChild>
                <Link href="/">{dict.myList?.browseContent || "Browse Content"}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  )
}

function MyListLoading() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-800" />

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800"
            >
              <Skeleton className="w-full sm:w-[120px] aspect-video sm:aspect-[16/9] rounded-md bg-zinc-800" />

              <div className="flex-grow">
                <Skeleton className="h-6 w-3/4 mb-2 bg-zinc-800" />
                <Skeleton className="h-4 w-1/2 bg-zinc-800" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <Skeleton className="h-10 w-24 bg-zinc-800" />
                <Skeleton className="h-10 w-10 bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

