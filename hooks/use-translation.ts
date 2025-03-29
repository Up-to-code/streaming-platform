"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./use-language"

export function useTranslation(key: string, defaultValue = "") {
  const { language, dictionary } = useLanguage()
  const [translation, setTranslation] = useState(defaultValue)

  useEffect(() => {
    if (dictionary) {
      // Parse the key path (e.g., "home.featured")
      const keyPath = key.split(".")
      let value: any = dictionary

      for (const part of keyPath) {
        if (value && typeof value === "object" && part in value) {
          value = value[part]
        } else {
          value = defaultValue
          break
        }
      }

      setTranslation(value || defaultValue)
    }
  }, [key, defaultValue, dictionary, language])

  return translation
}

