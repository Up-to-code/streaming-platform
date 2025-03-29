import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default async function ProfilePage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  return (
    <Suspense fallback={<ProfileLoading />}>
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">{dict.profile.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src="/placeholder.svg?height=200&width=200" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription className="text-zinc-400">john.doe@example.com</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">{dict.profile.memberSince || "Member Since"}</span>
                      <span>Jan 2023</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">{dict.profile.plan || "Plan"}</span>
                      <span className="text-primary">Premium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">{dict.profile.nextBilling || "Next Billing"}</span>
                      <span>Jun 15, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-zinc-700">
                    {dict.profile.managePlan || "Manage Plan"}
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="account">
                <TabsList className="bg-zinc-900 border-b border-zinc-800 w-full justify-start rounded-none p-0">
                  <TabsTrigger
                    value="account"
                    className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 px-4"
                  >
                    {dict.profile.accountSettings || "Account Settings"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 px-4"
                  >
                    {dict.profile.watchHistory || "Watch History"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferences"
                    className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent py-3 px-4"
                  >
                    {dict.profile.preferences || "Preferences"}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="account" className="pt-6">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle>{dict.profile.personalInfo || "Personal Information"}</CardTitle>
                      <CardDescription>
                        {dict.profile.updatePersonalInfo || "Update your personal information"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{dict.auth.name}</Label>
                          <Input id="name" defaultValue="John Doe" className="bg-zinc-800 border-zinc-700" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{dict.auth.email}</Label>
                          <Input
                            id="email"
                            defaultValue="john.doe@example.com"
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">{dict.auth.password}</Label>
                        <Input id="password" type="password" value="********" className="bg-zinc-800 border-zinc-700" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>{dict.profile.saveChanges || "Save Changes"}</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="pt-6">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle>{dict.profile.watchHistory || "Watch History"}</CardTitle>
                      <CardDescription>
                        {dict.profile.recentlyWatched || "Your recently watched content"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-2 hover:bg-zinc-800 rounded-md transition-colors"
                          >
                            <div className="relative w-[80px] aspect-video rounded overflow-hidden">
                              <img
                                src={`/placeholder.svg?height=100&width=180`}
                                alt="Thumbnail"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">Title {i}</h4>
                              <p className="text-sm text-zinc-400">Watched on May {10 + i}, 2023</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="border-zinc-700">
                        {dict.profile.clearHistory || "Clear History"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences" className="pt-6">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <CardTitle>{dict.profile.preferences || "Preferences"}</CardTitle>
                      <CardDescription>{dict.profile.managePreferences || "Manage your preferences"}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>{dict.profile.language || "Language"}</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" className="border-zinc-700 justify-start">
                            English
                          </Button>
                          <Button variant="outline" className="border-zinc-700 justify-start">
                            العربية
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>{dict.profile.contentPreferences || "Content Preferences"}</Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          <Button variant="outline" className="border-zinc-700 justify-start">
                            {dict.categories.movie}
                          </Button>
                          <Button variant="outline" className="border-zinc-700 justify-start">
                            {dict.categories.tvShow}
                          </Button>
                          <Button variant="outline" className="border-zinc-700 justify-start">
                            {dict.categories.anime}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>{dict.profile.savePreferences || "Save Preferences"}</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

function ProfileLoading() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mb-8 bg-zinc-800" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Skeleton className="w-24 h-24 rounded-full mb-4 bg-zinc-800" />
                <Skeleton className="h-6 w-32 mb-2 bg-zinc-800" />
                <Skeleton className="h-4 w-48 mb-6 bg-zinc-800" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24 bg-zinc-800" />
                  <Skeleton className="h-4 w-20 bg-zinc-800" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16 bg-zinc-800" />
                  <Skeleton className="h-4 w-24 bg-zinc-800" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28 bg-zinc-800" />
                  <Skeleton className="h-4 w-20 bg-zinc-800" />
                </div>
              </div>

              <div className="mt-6">
                <Skeleton className="h-10 w-full bg-zinc-800" />
              </div>
            </div>
          </div>

          {/* Profile Content Skeleton */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900 border-b border-zinc-800 flex mb-6">
              <Skeleton className="h-12 w-32 bg-zinc-800 mr-2" />
              <Skeleton className="h-12 w-32 bg-zinc-800 mr-2" />
              <Skeleton className="h-12 w-32 bg-zinc-800" />
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <Skeleton className="h-8 w-48 mb-2 bg-zinc-800" />
              <Skeleton className="h-4 w-64 mb-6 bg-zinc-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16 bg-zinc-800" />
                  <Skeleton className="h-10 w-full bg-zinc-800" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16 bg-zinc-800" />
                  <Skeleton className="h-10 w-full bg-zinc-800" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Skeleton className="h-4 w-24 bg-zinc-800" />
                <Skeleton className="h-10 w-full bg-zinc-800" />
              </div>

              <Skeleton className="h-10 w-32 bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

