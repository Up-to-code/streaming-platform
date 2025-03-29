import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[70vh] w-full bg-zinc-900">
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <Skeleton className="h-12 w-3/4 mb-4 bg-zinc-800" />
          <Skeleton className="h-6 w-full max-w-2xl mb-2 bg-zinc-800" />
          <Skeleton className="h-6 w-2/3 max-w-2xl mb-8 bg-zinc-800" />
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-12 w-32 bg-zinc-800" />
            <Skeleton className="h-12 w-32 bg-zinc-800" />
          </div>
        </div>
      </div>

      {/* Search Bar Skeleton */}
      <div className="container mx-auto px-4 py-6">
        <Skeleton className="h-12 w-full bg-zinc-800" />
      </div>

      {/* Featured Content Skeleton */}
      <section className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-40 mb-6 bg-zinc-800" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <Skeleton className="aspect-video w-full bg-zinc-800" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2 bg-zinc-800" />
                <Skeleton className="h-4 w-24 bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Rows Skeleton */}
      <section className="container mx-auto px-4 py-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="py-6">
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-6 w-40 bg-zinc-800" />
              <Skeleton className="h-4 w-20 bg-zinc-800" />
            </div>
            <div className="flex space-x-4 overflow-hidden">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={j} className="w-[160px] md:w-[200px] shrink-0">
                  <Skeleton className="aspect-[2/3] w-full rounded-md bg-zinc-800" />
                  <Skeleton className="h-4 w-3/4 mt-2 bg-zinc-800" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

