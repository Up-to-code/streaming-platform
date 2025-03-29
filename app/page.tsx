import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Search, TrendingUp } from "lucide-react"
import FeaturedContent from "@/components/featured-content"
import ContentRow from "@/components/content-row"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import HomeLoading from "@/components/home-loading"

export default async function Home({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  return (
    <Suspense fallback={<HomeLoading />}>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Hero.png')" }}
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{dict.home.featuredTitle}</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-zinc-300">{dict.home.featuredDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-sm">
                <Play className="mr-2 h-5 w-5" /> {dict.common.playNow}
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white">
                {dict.common.moreInfo}
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-5 w-5" />
            <Input
              placeholder={dict.common.searchPlaceholder}
              className="pl-10 bg-zinc-900 border-zinc-700 text-white h-12 w-full"
            />
          </div>
        </div>

        {/* Featured Content */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-white">{dict.home.featured}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedContent
              title="Attack on Titan"
              image="/images/moves/one.png"
              category={dict.categories.anime}
              rating={4.8}
            />
            <FeaturedContent
              title="Inception"
              image="/images/moves/two.png"
              category={dict.categories.movie}
              rating={4.7}
            />
            <FeaturedContent
              title="Stranger Things"
              image="/images/moves/three.png"
              category={dict.categories.tvShow}
              rating={4.6}
            />
          </div>
        </section>

        {/* Content Rows */}
        <section className="container mx-auto px-4 py-8">
          <ContentRow title={dict.home.trendingNow} type="all" dict={dict} />
          <ContentRow title={dict.home.newReleases} type="all" dict={dict} />
          <ContentRow title={dict.home.popularAnime} type="anime" dict={dict} />
          <ContentRow title={dict.home.popularTVShows} type="tv" dict={dict} />
        </section>
      </div>
    </Suspense>
  )
}

