"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { getDictionary } from "@/lib/dictionary"

interface LanguageContextType {
  language: string
  dictionary: any
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<string>("en")
  const [dictionary, setDictionary] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored language preference
    const storedLanguage = localStorage.getItem("language") || "en"
    setLanguageState(storedLanguage)

    // Load dictionary
    const loadDictionary = async () => {
      setIsLoading(true)
      const dict = await getDictionary(storedLanguage)
      setDictionary(dict)
      setIsLoading(false)

      // Set document direction
      document.documentElement.dir = storedLanguage === "ar" ? "rtl" : "ltr"
    }

    loadDictionary()
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)

    // Update dictionary
    const loadDictionary = async () => {
      setIsLoading(true)
      const dict = await getDictionary(lang)
      setDictionary(dict)
      setIsLoading(false)

      // Set document direction
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    }

    loadDictionary()
  }

  return <LanguageContext.Provider value={{ language, dictionary, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { LanguageContext }

