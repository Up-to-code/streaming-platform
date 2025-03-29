import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default async function AuthorsPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  // This would typically come from an API with proper caching
  const authors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Content Creator",
      bio: "Sarah specializes in anime reviews and cultural analysis. With over 10 years of experience in the industry, she brings deep insights into Japanese animation.",
      avatar: "/placeholder.svg?height=200&width=200",
      articles: 45,
      followers: 12800,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Film Critic",
      bio: "Michael is an award-winning film critic with a focus on international cinema. His reviews have been featured in major publications worldwide.",
      avatar: "/placeholder.svg?height=200&width=200",
      articles: 78,
      followers: 25600,
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "TV Series Expert",
      bio: "Aisha covers everything from classic television to the latest streaming hits. Her weekly recommendations have a dedicated following.",
      avatar: "/placeholder.svg?height=200&width=200",
      articles: 62,
      followers: 18400,
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      role: "Documentary Specialist",
      bio: "Carlos focuses on documentaries and non-fiction content. His in-depth analysis helps viewers discover meaningful stories from around the world.",
      avatar: "/placeholder.svg?height=200&width=200",
      articles: 37,
      followers: 9200,
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Indie Film Advocate",
      bio: "Emma champions independent filmmakers and lesser-known gems. Her passion is connecting audiences with unique voices in cinema.",
      avatar: "/placeholder.svg?height=200&width=200",
      articles: 53,
      followers: 15700,
    },
    {
      id: 6,
      name: "Jamal Washington",
      role: "Classic Cinema Historian",
      bio: "Jamal specializes in film history and preservation. His knowledge of classic cinema brings context to contemporary viewing.",
      avatar: "/placeholder.svg?height=200&width=200",
      articles: 91,
      followers: 31200,
    },
  ]

  return (
    <Suspense fallback={<AuthorsLoading />}>
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{dict.authors?.title || "Our Content Creators"}</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {dict.authors?.description ||
                "Meet the talented writers, critics, and experts who bring you the best reviews, recommendations, and insights about movies, TV shows, and anime."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((author) => (
              <Card
                key={author.id}
                className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-start">
                    <Avatar className="w-16 h-16 border-2 border-primary">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>
                        {author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-zinc-400">{dict.authors?.articles || "Articles"}</span>
                      <span className="font-bold">{author.articles}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-4">{author.name}</CardTitle>
                  <CardDescription className="text-primary">{author.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-zinc-300 line-clamp-3">{author.bio}</p>
                  <div className="mt-4 flex items-center text-sm text-zinc-400">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {author.followers.toLocaleString()} {dict.authors?.followers || "followers"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-zinc-700">
                    <Link href={`/authors/${author.id}`}>{dict.authors?.viewProfile || "View Profile"}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">{dict.authors?.joinTeam || "Join Our Team"}</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
              {dict.authors?.joinDescription ||
                "Are you passionate about movies, TV shows, or anime? We're always looking for talented writers to join our team."}
            </p>
            <Button asChild>
              <Link href="/authors/apply">{dict.authors?.applyNow || "Apply Now"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

function AuthorsLoading() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-zinc-800" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-zinc-800" />
          <Skeleton className="h-4 w-3/4 max-w-2xl mx-auto mt-2 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <Skeleton className="w-16 h-16 rounded-full bg-zinc-800" />
                <div className="flex flex-col items-end">
                  <Skeleton className="h-4 w-16 mb-1 bg-zinc-800" />
                  <Skeleton className="h-6 w-8 bg-zinc-800" />
                </div>
              </div>
              <Skeleton className="h-6 w-3/4 mb-2 bg-zinc-800" />
              <Skeleton className="h-4 w-1/2 mb-4 bg-zinc-800" />
              <Skeleton className="h-4 w-full mb-1 bg-zinc-800" />
              <Skeleton className="h-4 w-full mb-1 bg-zinc-800" />
              <Skeleton className="h-4 w-2/3 mb-4 bg-zinc-800" />
              <Skeleton className="h-4 w-1/3 mb-6 bg-zinc-800" />
              <Skeleton className="h-10 w-full bg-zinc-800" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4 bg-zinc-800" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-zinc-800" />
          <Skeleton className="h-4 w-3/4 max-w-2xl mx-auto mt-2 mb-6 bg-zinc-800" />
          <Skeleton className="h-10 w-32 mx-auto bg-zinc-800" />
        </div>
      </div>
    </div>
  )
}

