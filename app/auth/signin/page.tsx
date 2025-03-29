"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { useLanguage } from "@/hooks/use-language"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { signIn, signUp } = useAuth()
  const { dictionary: dict, language } = useLanguage()
  const isRtl = language === "ar"

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await signIn(email, password)
    } catch (error) {
      console.error("Sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await signUp(name, email, password)
    } catch (error) {
      console.error("Sign up error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center py-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-primary font-bold text-3xl glow-text">StreamFlix</span>
          </Link>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid grid-cols-2 w-full bg-zinc-900">
            <TabsTrigger value="signin" className="text-white data-[state=active]:bg-zinc-800">
              {dict?.auth.signIn || "Sign In"}
            </TabsTrigger>
            <TabsTrigger value="signup" className="text-white data-[state=active]:bg-zinc-800">
              {dict?.auth.signUp || "Sign Up"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">{dict?.auth.signIn || "Sign In"}</CardTitle>
                <CardDescription className="text-zinc-400">
                  {dict?.auth.signInDescription || "Enter your credentials to access your account"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignIn}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      {dict?.auth.email || "Email"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className={`flex items-center justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
                      <Label htmlFor="password" className="text-zinc-300">
                        {dict?.auth.password || "Password"}
                      </Label>
                      <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                        {dict?.auth.forgotPassword || "Forgot Password?"}
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      defaultValue="********"
                      className="bg-zinc-800 border-zinc-700 text-white"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full glow-sm" disabled={isLoading}>
                    {isLoading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    {dict?.auth.signIn || "Sign In"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">{dict?.auth.signUp || "Sign Up"}</CardTitle>
                <CardDescription className="text-zinc-400">
                  {dict?.auth.signUpDescription || "Create a new account to get started"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignUp}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">
                      {dict?.auth.name || "Name"}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-signup" className="text-zinc-300">
                      {dict?.auth.email || "Email"}
                    </Label>
                    <Input
                      id="email-signup"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-signup" className="text-zinc-300">
                      {dict?.auth.password || "Password"}
                    </Label>
                    <Input
                      id="password-signup"
                      type="password"
                      required
                      className="bg-zinc-800 border-zinc-700 text-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full glow-sm" disabled={isLoading}>
                    {isLoading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    {dict?.auth.signUp || "Sign Up"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

