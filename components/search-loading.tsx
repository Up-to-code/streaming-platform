import { Skeleton } from "@/components/ui/skeleton"

export default function SearchLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-64 mb-2 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-96 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        {/* Search and Filter Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Skeleton className="h-12 flex-grow bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Results Tabs Skeleton */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-6">
          <Skeleton className="h-10 w-20 mr-4 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-10 w-20 mr-4 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-10 w-20 mr-4 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-10 w-20 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Search Results Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="aspect-[2/3] w-full rounded-md mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-5 w-3/4 mb-1 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-9 w-20 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-9 w-9 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-9 w-9 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-9 w-9 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-9 w-9 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-9 w-20 bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

