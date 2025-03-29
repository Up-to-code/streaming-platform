import { Skeleton } from "@/components/ui/skeleton"

export default function AuthorsLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-4 w-3/4 max-w-2xl mx-auto mt-2 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <Skeleton className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="flex flex-col items-end">
                  <Skeleton className="h-4 w-16 mb-1 bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-6 w-8 bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
              <Skeleton className="h-6 w-3/4 mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-1/2 mb-4 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-full mb-1 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-full mb-1 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-2/3 mb-4 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-1/3 mb-6 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-4 w-3/4 max-w-2xl mx-auto mt-2 mb-6 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-10 w-32 mx-auto bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  )
}

