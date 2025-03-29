import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FeaturedContentProps {
  title: string
  image: string
  category: string
  rating: number
}

export default function FeaturedContent({ title, image, category, rating }: FeaturedContentProps) {
  return (
    <Link href={`/watch/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="overflow-hidden bg-zinc-900 border-zinc-800 hover:border-primary transition-all duration-300 group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-2 right-2 bg-primary glow-sm">{category}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-1 text-white group-hover:glow-text-sm">{title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm text-zinc-300">{rating}/5</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

