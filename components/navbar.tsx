"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Bell, User, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import NotificationCenter from "@/components/notification-center"
import { LanguageSwitcher } from "@/components/ui/language-switcher"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, signOut } = useAuth()
  const { language, setLanguage, dictionary } = useLanguage()
  const { theme, setTheme } = useTheme()

  const isRtl = language === "ar"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: dictionary?.nav.home || "Home", href: "/" },
    { name: dictionary?.nav.movies || "Movies", href: "/movies" },
    { name: dictionary?.nav.tvShows || "TV Shows", href: "/tv-shows" },
    { name: dictionary?.nav.anime || "Anime", href: "/anime" },
    { name: dictionary?.nav.myList || "My List", href: "/my-list" },
    { name: dictionary?.nav.plans || "Plans", href: "/plans" },
    { name: dictionary?.nav.scan || "Scan", href: "/scan" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearch(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-gradient-to-b from-black/80 to-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Search Bar - Always visible on top */}
        <div className="py-2 border-b border-zinc-200 dark:border-zinc-800">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400 h-4 w-4" />
            <Input
              placeholder={dictionary?.common.searchPlaceholder || "Search for movies, TV shows, and more..."}
              className="pl-10 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white h-9 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl glow-text">StreamFlix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={cn("hidden md:flex items-center space-x-8", isRtl && "md:space-x-reverse")}
            dir={isRtl ? "rtl" : "ltr"}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary hover:glow-text-sm",
                  pathname === link.href ? "text-primary glow-text-sm" : "text-zinc-700 dark:text-zinc-400",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className={cn("hidden md:flex items-center", isRtl ? "space-x-reverse space-x-4" : "space-x-4")}>
            {/* Theme toggle */}

            {/* Language selector */}
            <LanguageSwitcher />

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowNotifications(!showNotifications)}
              className="hover:glow-sm"
            >
              <Bell className="h-5 w-5 theme-icon" />
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:glow-sm">
                    <User className="h-5 w-5 theme-icon" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isRtl ? "start" : "end"}>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">{dictionary?.nav.profile || "Profile"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">{dictionary?.nav.settings || "Settings"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    {dictionary?.auth.signOut || "Sign Out"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild className="glow-sm">
                <Link href="/auth/signin">{dictionary?.auth.signIn || "Sign In"}</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className={cn("flex items-center", isRtl ? "space-x-reverse space-x-2" : "space-x-2", "md:hidden")}>
            {/* Theme toggle */}

            {/* Language switcher */}
            <LanguageSwitcher variant="minimal" />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:glow-sm"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 theme-icon" /> : <Menu className="h-6 w-6 theme-icon" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav
              className={cn("flex flex-col", isRtl ? "items-end" : "items-start", "space-y-4")}
              dir={isRtl ? "rtl" : "ltr"}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors hover:text-primary hover:glow-text-sm",
                    pathname === link.href ? "text-primary glow-text-sm" : "text-zinc-700 dark:text-zinc-400",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className={cn("flex items-center justify-between py-2 w-full", isRtl && "flex-row-reverse")}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setShowNotifications(!showNotifications)
                    setIsMobileMenuOpen(false)
                  }}
                  className="hover:glow-sm"
                >
                  <Bell className="h-5 w-5 theme-icon" />
                </Button>

                {user ? (
                  <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" size="icon" className="hover:glow-sm">
                      <User className="h-5 w-5 theme-icon" />
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full glow-sm" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/auth/signin">{dictionary?.auth.signIn || "Sign In"}</Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Notification Center */}
      {showNotifications && <NotificationCenter onClose={() => setShowNotifications(false)} />}
    </header>
  )
}

