import { Skeleton } from "@/components/ui/skeleton"

export default function WatchLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-16">
      {/* Video Player Skeleton */}
      <Skeleton className="w-full aspect-video bg-zinc-200 dark:bg-zinc-800" />

      {/* Content Details Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-6 w-32 mb-6 bg-zinc-200 dark:bg-zinc-800" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-10 w-3/4 mb-4 bg-zinc-200 dark:bg-zinc-800" />

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Skeleton className="h-6 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-6 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-6 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-6 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Skeleton className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="mb-8">
              <Skeleton className="h-8 w-32 mb-3 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-full mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-full mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="mb-8">
              <Skeleton className="h-8 w-32 mb-3 bg-zinc-200 dark:bg-zinc-800" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center">
                    <Skeleton className="w-20 h-20 mx-auto rounded-full mb-2 bg-zinc-200 dark:bg-zinc-800" />
                    <Skeleton className="h-5 w-24 mx-auto mb-1 bg-zinc-200 dark:bg-zinc-800" />
                    <Skeleton className="h-4 w-16 mx-auto bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Skeleton className="h-8 w-24 mb-4 bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-16 mb-1 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <div>
                <Skeleton className="h-5 w-16 mb-1 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <div>
                <Skeleton className="h-5 w-16 mb-1 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Related Content Skeleton */}
        <div className="mt-12">
          <Skeleton className="h-8 w-48 mb-6 bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex space-x-4 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-[160px] md:w-[200px] shrink-0">
                <Skeleton className="aspect-[2/3] w-full rounded-md mb-2 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

