import { Skeleton } from "@/components/ui/skeleton"

export default function TVShowsLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        {/* Search and Filter Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Skeleton className="h-12 flex-grow bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Genres Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-8 w-32 mb-4 bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800" />
            ))}
          </div>
        </div>

        {/* TV Shows Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="aspect-[2/3] w-full rounded-md mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-5 w-3/4 mb-1 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

