import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="relative h-[50vh] w-full bg-zinc-900 dark:bg-zinc-900 rounded-lg mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-8">
          <div>
            <Skeleton className="h-8 w-48 mb-4 bg-zinc-800 dark:bg-zinc-800" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="aspect-[2/3] w-full rounded-md mb-2 bg-zinc-800 dark:bg-zinc-800" />
                  <Skeleton className="h-4 w-3/4 mb-1 bg-zinc-800 dark:bg-zinc-800" />
                  <Skeleton className="h-3 w-1/2 bg-zinc-800 dark:bg-zinc-800" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-8 w-48 mb-4 bg-zinc-800 dark:bg-zinc-800" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="aspect-[2/3] w-full rounded-md mb-2 bg-zinc-800 dark:bg-zinc-800" />
                  <Skeleton className="h-4 w-3/4 mb-1 bg-zinc-800 dark:bg-zinc-800" />
                  <Skeleton className="h-3 w-1/2 bg-zinc-800 dark:bg-zinc-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

