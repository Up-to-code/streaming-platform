import { Skeleton } from "@/components/ui/skeleton"

export default function PlansLoading() {
  return (
    <div className="min-h-screen plans-container plans-text pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-zinc-200 dark:bg-zinc-800" />
          <Skeleton className="h-5 w-full max-w-md mx-auto bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`plans-card overflow-hidden ${i === 2 ? "md:-translate-y-4" : ""}`}>
              {i === 2 && <div className="bg-primary h-8 w-full"></div>}
              <div className="p-6">
                <Skeleton className="h-7 w-24 mb-4 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-9 w-32 mb-2 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-full mb-6 bg-zinc-200 dark:bg-zinc-800" />

                <div className="space-y-3 mt-6">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={j} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 mr-2 shrink-0" />
                      <Skeleton className="h-4 w-full bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                  ))}
                </div>

                <Skeleton className="h-10 w-full mt-6 bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-6 bg-zinc-200 dark:bg-zinc-800" />
          <div className="max-w-3xl mx-auto space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="h-6 w-48 mb-2 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-full mb-1 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-full mb-1 bg-zinc-200 dark:bg-zinc-800" />
                <Skeleton className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

