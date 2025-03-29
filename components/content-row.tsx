"use client"

import type React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

interface ContentRowProps {
  title: React.ReactNode
  type?: "all" | "movies" | "tv" | "anime"
  dict?: any
}

export default function ContentRow({ title, type = "all", dict }: ContentRowProps) {
  const { language } = useLanguage()
  const isRtl = language === "ar"

  // This would typically come from an API with proper caching
  const items = [
    { id: 1, title: "Jujutsu Kaisen", image: "/images/moves/1.png", type: "anime" },
    { id: 2, title: "Demon Slayer", image: "/images/moves/2.png", type: "anime" },
    { id: 3, title: "Attack on Titan", image: "/images/moves/3.png", type: "anime" }, 
    { id: 4, title: "Stranger Things", image: "/images/moves/4.png", type: "tv" },
    { id: 5, title: "Breaking Bad", image: "/images/moves/5.png", type: "tv" },
    { id: 6, title: "The Witcher", image: "/images/moves/6.png", type: "tv" },
    { id: 7, title: "Inception", image: "/images/moves/7.png", type: "movies" },
    { id: 8, title: "The Dark Knight", image: "/images/moves/8.png", type: "movies" },
  ]

  // Filter items based on type
  const filteredItems = type === "all" ? items : items.filter((item) => item.type === type)

  return (
    <div className="py-6" dir={isRtl ? "rtl" : "ltr"}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white glow-text-sm">{title}</h2>
        <Link
          href={`/category/${typeof title === "string" ? title.toLowerCase().replace(/\s+/g, "-") : "content"}`}
          className="flex items-center text-sm text-primary hover:underline hover:glow-text-sm"
        >
          {isRtl ? (
            <>
              <ChevronRight className="h-4 w-4 ml-1 rotate-180" />
              {dict?.common?.viewAll || "View All"}
            </>
          ) : (
            <>
              {dict?.common?.viewAll || "View All"} <ChevronRight className="h-4 w-4 ml-1" />
            </>
          )}
        </Link>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className={`flex ${isRtl ? "space-x-reverse" : ""} space-x-4 pb-4`}>
          {filteredItems.map((item) => (
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
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform glow-sm">
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
                      className={isRtl ? "mr-1" : "ml-1"}
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="mt-2 text-sm font-medium line-clamp-1 text-white group-hover:glow-text-sm">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

