"use client"

import { useTranslation } from "@/hooks/use-translation"

interface TranslatedTextProps {
  textKey: string
  defaultText: string
  className?: string
}

export function TranslatedText({ textKey, defaultText, className }: TranslatedTextProps) {
  const translation = useTranslation(textKey, defaultText)

  return <span className={className}>{translation}</span>
}

