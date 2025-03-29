import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import SearchLoading from "@/components/search-loading"

export default async function SearchPage({
  params: { lang = "en" },
  searchParams,
}: {
  params: { lang?: string }
  searchParams: { q?: string }
}) {
  const dict = await getDictionary(lang || "en")
  const query = searchParams.q || ""

  return (
    <Suspense fallback={<SearchLoading />}>
      <div className="min-h-screen light-mode-bg light-mode-text pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">{dict.search?.results || "Search Results"}</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            {dict.search?.showing || "Showing results for"}: <span className="font-medium">"{query}"</span>
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={dict.common.searchPlaceholder}
                defaultValue={query}
                className="pl-10 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white h-12 w-full"
              />
            </div>

            <Button
              variant="outline"
              className="border-zinc-200 dark:border-zinc-700 h-12 text-zinc-900 dark:text-white"
            >
              <Filter className="mr-2 h-5 w-5" /> {dict.common.filter}
            </Button>
          </div>

          {/* Results Tabs */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-6">
            <button className="px-4 py-2 font-medium text-primary border-b-2 border-primary">
              {dict.search?.all || "All"} (24)
            </button>
            <button className="px-4 py-2 font-medium text-zinc-600 dark:text-zinc-400">
              {dict.categories.movie} (10)
            </button>
            <button className="px-4 py-2 font-medium text-zinc-600 dark:text-zinc-400">
              {dict.categories.tvShow} (8)
            </button>
            <button className="px-4 py-2 font-medium text-zinc-600 dark:text-zinc-400">
              {dict.categories.anime} (6)
            </button>
          </div>

          {/* Search Results */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {/* This would typically come from an API based on the search query */}
            {[...Array(24)].map((_, index) => (
              <Link key={index} href={`/watch/search-result-${index + 1}`} className="group">
                <div className="relative aspect-[2/3] overflow-hidden rounded-md mb-2">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Result ${index + 1}`}
                    alt={`Search Result ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform glow-sm">
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
                <h3 className="font-medium line-clamp-1 text-zinc-900 dark:text-white">Search Result {index + 1}</h3>
                <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <span>{2020 + (index % 5)}</span>
                  <span className="mx-1">•</span>
                  <span>
                    {index % 3 === 0
                      ? dict.categories.movie
                      : index % 3 === 1
                        ? dict.categories.tvShow
                        : dict.categories.anime}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <nav className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled
                className="border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-white border-primary">
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              >
                3
              </Button>
              <span className="text-zinc-600 dark:text-zinc-400">...</span>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              >
                8
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              >
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

