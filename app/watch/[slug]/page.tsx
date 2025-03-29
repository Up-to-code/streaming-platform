import { Button } from "@/components/ui/button"
import { ChevronLeft, Heart, Share2, Plus, Play } from "lucide-react"
import Link from "next/link"
import VideoPlayer from "@/components/video-player"
import RelatedContent from "@/components/related-content"

interface WatchPageProps {
  params: {
    slug: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  // In a real app, you would fetch this data from an API based on the slug
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Video Player */}
      <div className="w-full aspect-video bg-zinc-900">
        <VideoPlayer />
      </div>

      {/* Content Details */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">HD</span>
              <span className="text-sm">2023</span>
              <span className="text-sm">TV-14</span>
              <span className="text-sm">2h 15m</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Button className="bg-primary hover:bg-primary/90">
                <Play className="mr-2 h-4 w-4" /> Play
              </Button>
              <Button variant="outline" className="border-zinc-700">
                <Plus className="mr-2 h-4 w-4" /> My List
              </Button>
              <Button variant="outline" className="border-zinc-700">
                <Heart className="mr-2 h-4 w-4" /> Like
              </Button>
              <Button variant="outline" className="border-zinc-700">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Overview</h2>
              <p className="text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget
                ultricies tincidunt.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Cast & Crew</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-zinc-800 mb-2"></div>
                    <p className="font-medium">Actor Name</p>
                    <p className="text-sm text-zinc-400">Character</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-zinc-400 text-sm">Genres</h3>
                <p>Action, Adventure, Fantasy</p>
              </div>
              <div>
                <h3 className="text-zinc-400 text-sm">Audio</h3>
                <p>English, Japanese, Spanish</p>
              </div>
              <div>
                <h3 className="text-zinc-400 text-sm">Subtitles</h3>
                <p>English, Spanish, French</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">More Like This</h2>
          <RelatedContent />
        </div>
      </div>
    </div>
  )
}

