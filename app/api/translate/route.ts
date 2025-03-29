import { NextResponse } from "next/server"
import { getDictionary } from "@/lib/dictionary"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get("lang") || "en"
  const key = searchParams.get("key")

  if (!key) {
    return NextResponse.json({ error: "Missing key parameter" }, { status: 400 })
  }

  try {
    const dictionary = await getDictionary(lang)

    // Parse the key path (e.g., "home.featured")
    const keyPath = key.split(".")
    let value = dictionary

    for (const part of keyPath) {
      if (value && typeof value === "object" && part in value) {
        value = value[part]
      } else {
        return NextResponse.json({ error: "Key not found" }, { status: 404 })
      }
    }

    return NextResponse.json({ translation: value })
  } catch (error) {
    return NextResponse.json({ error: "Translation failed" }, { status: 500 })
  }
}

