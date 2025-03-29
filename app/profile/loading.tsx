import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Skeleton className="w-24 h-24 rounded-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-6 w-32 mb-2 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-48 mb-6 bg-zinc-200 dark:bg-zinc-800" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>

              <div className="mt-6">
                <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </div>
          </div>

          {/* Profile Content Skeleton */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex mb-6">
              <Skeleton className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800 mr-2" />
              <Skeleton className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800 mr-2" />
              <Skeleton className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <Skeleton className="h-8 w-48 mb-2 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-64 mb-6 bg-zinc-200 dark:bg-zinc-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800" />
                  <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Skeleton className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-10 w-full bg-zinc-200 dark:bg-zinc-800" />
              </div>

              <Skeleton className="h-10 w-32 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

