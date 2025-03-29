import { Skeleton } from "@/components/ui/skeleton"

export default function ScanLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Skeleton className="h-10 w-48 mx-auto mb-6 bg-zinc-200 dark:bg-zinc-800" />

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex space-x-2 mb-4">
                <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <Skeleton className="h-6 w-48 mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-full bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="p-4">
              <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-md mb-4"></div>
              <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

