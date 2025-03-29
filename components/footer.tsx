"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Footer() {
  const { language, dictionary } = useLanguage()
  const isRtl = language === "ar"

  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-12" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4 glow-text">StreamFlix</h3>
            <p className="text-sm mb-4">
              {dictionary?.footer?.description ||
                "The best platform to watch movies, TV shows, and anime in high quality with server-side rendering for optimal performance."}
            </p>
            <div className={`flex ${isRtl ? "space-x-reverse" : ""} space-x-4`}>
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors hover:glow-text-sm">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors hover:glow-text-sm">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors hover:glow-text-sm">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors hover:glow-text-sm">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">{dictionary?.footer?.navigation || "Navigation"}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.nav?.home || "Home"}
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.nav?.movies || "Movies"}
                </Link>
              </li>
              <li>
                <Link
                  href="/tv-shows"
                  className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm"
                >
                  {dictionary?.nav?.tvShows || "TV Shows"}
                </Link>
              </li>
              <li>
                <Link href="/anime" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.nav?.anime || "Anime"}
                </Link>
              </li>
              <li>
                <Link href="/my-list" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.nav?.myList || "My List"}
                </Link>
              </li>
              <li>
                <Link href="/scan" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.nav?.scan || "Scan"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">{dictionary?.footer?.legal || "Legal"}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.footer?.terms || "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.footer?.privacy || "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.footer?.cookies || "Cookie Policy"}
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-zinc-400 hover:text-primary transition-colors hover:glow-text-sm">
                  {dictionary?.footer?.dmca || "DMCA"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">{dictionary?.footer?.contact || "Contact"}</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>{dictionary?.footer?.email || "Email"}: support@streamflix.com</li>
              <li>{dictionary?.footer?.phone || "Phone"}: +1 (555) 123-4567</li>
              <li>{dictionary?.footer?.address || "Address"}: 123 Streaming St, Digital City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-sm text-center text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} StreamFlix. {dictionary?.footer?.allRights || "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}

