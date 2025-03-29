import { Skeleton } from "@/components/ui/skeleton"

export default function SettingsLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="plans-card sticky top-24">
              <div className="p-4">
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Settings Content Skeleton */}
          <div className="lg:col-span-3 space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="plans-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Skeleton className="h-5 w-5 mr-2 bg-zinc-200 dark:bg-zinc-800" />
                    <Skeleton className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                  <Skeleton className="h-4 w-full mb-6 bg-zinc-200 dark:bg-zinc-800" />

                  <div className="space-y-6">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="space-y-2">
                        <Skeleton className="h-5 w-32 bg-zinc-200 dark:bg-zinc-800" />
                        <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
                      </div>
                    ))}
                  </div>

                  <Skeleton className="h-10 w-32 mt-6 bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

