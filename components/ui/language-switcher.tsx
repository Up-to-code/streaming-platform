"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "minimal" }) {
  const { language, setLanguage, dictionary } = useLanguage()
  const isRtl = language === "ar"

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  if (variant === "minimal") {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleLanguageChange(language === "en" ? "ar" : "en")}
        className="hover:glow-sm"
        aria-label="Toggle language"
      >
        <Globe className="h-5 w-5 theme-icon" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:glow-sm">
          <Globe className="h-5 w-5 theme-icon" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isRtl ? "start" : "end"}>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={language === "en" ? "bg-primary/20" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("ar")}
          className={language === "ar" ? "bg-primary/20" : ""}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

