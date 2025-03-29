"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "user" | "admin" | "author"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  isAuthorized: (role: string) => boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  // Simulate checking for an existing session
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would be an API call to validate the session
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Check for protected routes
  useEffect(() => {
    if (!isLoading) {
      // Protected routes that require authentication
      const authRequiredPaths = ["/profile", "/my-list", "/settings"]
      // Routes that require author role
      const authorRequiredPaths = ["/authors/dashboard"]

      const isAuthRequired = authRequiredPaths.some((path) => pathname?.startsWith(path))
      const isAuthorRequired = authorRequiredPaths.some((path) => pathname?.startsWith(path))

      if (isAuthRequired && !user) {
        router.push("/auth/signin?redirect=" + encodeURIComponent(pathname || ""))
        toast({
          title: "Authentication required",
          description: "Please sign in to access this page",
          variant: "destructive",
        })
      } else if (isAuthorRequired && (!user || user.role !== "author")) {
        router.push("/")
        toast({
          title: "Access denied",
          description: "You don't have permission to access this page",
          variant: "destructive",
        })
      }
    }
  }, [isLoading, user, pathname, router, toast])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const mockUser: User = {
        id: "user-123",
        name: "John Doe",
        email,
        avatar: "/placeholder.svg?height=200&width=200",
        role: email.includes("author") ? "author" : "user",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))

      toast({
        title: "Welcome back!",
        description: "You have successfully signed in",
      })

      // Redirect to home or the original requested page
      const params = new URLSearchParams(window.location.search)
      const redirectUrl = params.get("redirect") || "/"
      router.push(redirectUrl)
    } catch (error) {
      console.error("Sign in error:", error)
      toast({
        title: "Sign in failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const mockUser: User = {
        id: "user-" + Date.now(),
        name,
        email,
        role: "user",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))

      toast({
        title: "Account created",
        description: "Your account has been successfully created",
      })

      router.push("/")
    } catch (error) {
      console.error("Sign up error:", error)
      toast({
        title: "Sign up failed",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
    toast({
      title: "Signed out",
      description: "You have been successfully signed out",
    })
  }

  const isAuthorized = (role: string) => {
    if (!user) return false

    if (role === "admin") {
      return user.role === "admin"
    }

    if (role === "author") {
      return user.role === "admin" || user.role === "author"
    }

    return true
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

