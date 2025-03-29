import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"
import Image from "next/image"

export default function RelatedContent() {
  // This would typically come from an API
  const items = [
    { id: 1, title: "One Punch Man", image: "/placeholder.svg?height=300&width=200" },
    { id: 2, title: "Chainsaw Man", image: "/placeholder.svg?height=300&width=200" },
    { id: 3, title: "Spy x Family", image: "/placeholder.svg?height=300&width=200" },
    { id: 4, title: "Tokyo Ghoul", image: "/placeholder.svg?height=300&width=200" },
    { id: 5, title: "Fullmetal Alchemist", image: "/placeholder.svg?height=300&width=200" },
    { id: 6, title: "Hunter x Hunter", image: "/placeholder.svg?height=300&width=200" },
    { id: 7, title: "Bleach", image: "/placeholder.svg?height=300&width=200" },
    { id: 8, title: "Dragon Ball Super", image: "/placeholder.svg?height=300&width=200" },
  ]

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-4 pb-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/watch/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="w-[160px] md:w-[200px] shrink-0 group"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-md">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-sm font-medium line-clamp-1">{item.title}</h3>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

