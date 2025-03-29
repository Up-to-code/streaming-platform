import { Skeleton } from "@/components/ui/skeleton"

export default function MyListLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              <Skeleton className="w-full sm:w-[120px] aspect-video sm:aspect-[16/9] rounded-md bg-zinc-200 dark:bg-zinc-800" />

              <div className="flex-grow">
                <Skeleton className="h-6 w-3/4 mb-2 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <Skeleton className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-10 w-10 bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

