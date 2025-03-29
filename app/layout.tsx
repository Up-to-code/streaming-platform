import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { LanguageProvider } from "@/components/language-provider"

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "StreamFlix - Movies, TV Shows & Anime Streaming",
  description: "Stream your favorite movies, TV shows, and anime in high quality",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans light-mode-bg`}>
        <AuthProvider>
          <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
              <Navbar />
              <main>{children}</main>
              <Footer />
              <Toaster />
            </ThemeProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'