"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "next-themes"
import { useToast } from "@/components/ui/use-toast"
import { Sun, Moon, Globe, Bell, Eye, Lock, Shield } from "lucide-react"

export default function SettingsPage() {
  const { language, setLanguage, dictionary: dict } = useLanguage()
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()
  const isRtl = language === "ar"

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    newContent: true,
    recommendations: true,
  })

  const [playback, setPlayback] = useState({
    autoplay: true,
    quality: "auto",
    volume: 80,
    subtitles: true,
  })

  const [privacy, setPrivacy] = useState({
    watchHistory: true,
    dataSaving: false,
    twoFactor: false,
  })

  const saveSettings = () => {
    toast({
      title: dict?.settings?.saved || "Settings saved",
      description: dict?.settings?.savedDescription || "Your settings have been saved successfully",
    })
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black text-white pt-20" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 glow-text">{dict?.settings?.title || "Settings"}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800 sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <a
                    href="#appearance"
                    className="flex items-center p-2 rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    <Sun className="h-5 w-5 mr-3" />
                    <span>{dict?.settings?.appearance || "Appearance"}</span>
                  </a>
                  <a
                    href="#notifications"
                    className="flex items-center p-2 rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    <Bell className="h-5 w-5 mr-3" />
                    <span>{dict?.settings?.notifications || "Notifications"}</span>
                  </a>
                  <a href="#playback" className="flex items-center p-2 rounded-md hover:bg-zinc-800 transition-colors">
                    <Eye className="h-5 w-5 mr-3" />
                    <span>{dict?.settings?.playback || "Playback"}</span>
                  </a>
                  <a href="#privacy" className="flex items-center p-2 rounded-md hover:bg-zinc-800 transition-colors">
                    <Lock className="h-5 w-5 mr-3" />
                    <span>{dict?.settings?.privacy || "Privacy & Security"}</span>
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Appearance */}
            <section id="appearance">
              <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center">
                    <Sun className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>{dict?.settings?.appearance || "Appearance"}</CardTitle>
                  </div>
                  <CardDescription>
                    {dict?.settings?.appearanceDescription || "Customize how StreamFlix looks"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Theme */}
                  <div className="space-y-3">
                    <Label>{dict?.settings?.theme || "Theme"}</Label>
                    <RadioGroup
                      defaultValue={theme}
                      onValueChange={(value) => setTheme(value)}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="theme-dark" />
                        <Label htmlFor="theme-dark" className="flex items-center">
                          <Moon className="h-4 w-4 mr-2" />
                          {dict?.settings?.dark || "Dark"}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="theme-light" />
                        <Label htmlFor="theme-light" className="flex items-center">
                          <Sun className="h-4 w-4 mr-2" />
                          {dict?.settings?.light || "Light"}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="theme-system" />
                        <Label htmlFor="theme-system">{dict?.settings?.system || "System"}</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Language */}
                  <div className="space-y-3">
                    <Label>{dict?.settings?.language || "Language"}</Label>
                    <RadioGroup
                      defaultValue={language}
                      onValueChange={(value) => setLanguage(value)}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="en" id="lang-en" />
                        <Label htmlFor="lang-en" className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          English
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ar" id="lang-ar" />
                        <Label htmlFor="lang-ar" className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          العربية
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={saveSettings} className="glow-sm">
                    {dict?.settings?.saveChanges || "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </section>

            {/* Notifications */}
            <section id="notifications">
              <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>{dict?.settings?.notifications || "Notifications"}</CardTitle>
                  </div>
                  <CardDescription>
                    {dict?.settings?.notificationsDescription || "Manage your notification preferences"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.emailNotifications || "Email Notifications"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.emailNotificationsDescription || "Receive notifications via email"}
                        </p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.pushNotifications || "Push Notifications"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.pushNotificationsDescription || "Receive notifications on your device"}
                        </p>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.newContentNotifications || "New Content"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.newContentNotificationsDescription ||
                            "Get notified when new content is available"}
                        </p>
                      </div>
                      <Switch
                        checked={notifications.newContent}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, newContent: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.recommendationNotifications || "Recommendations"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.recommendationNotificationsDescription ||
                            "Get personalized content recommendations"}
                        </p>
                      </div>
                      <Switch
                        checked={notifications.recommendations}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, recommendations: checked })}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={saveSettings} className="glow-sm">
                    {dict?.settings?.saveChanges || "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </section>

            {/* Playback */}
            <section id="playback">
              <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>{dict?.settings?.playback || "Playback"}</CardTitle>
                  </div>
                  <CardDescription>
                    {dict?.settings?.playbackDescription || "Customize your viewing experience"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.autoplay || "Autoplay"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.autoplayDescription || "Automatically play the next episode"}
                        </p>
                      </div>
                      <Switch
                        checked={playback.autoplay}
                        onCheckedChange={(checked) => setPlayback({ ...playback, autoplay: checked })}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>{dict?.settings?.quality || "Video Quality"}</Label>
                      <RadioGroup
                        defaultValue={playback.quality}
                        onValueChange={(value) => setPlayback({ ...playback, quality: value })}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="auto" id="quality-auto" />
                          <Label htmlFor="quality-auto">{dict?.settings?.auto || "Auto"}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="quality-high" />
                          <Label htmlFor="quality-high">{dict?.settings?.high || "High (1080p)"}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="quality-medium" />
                          <Label htmlFor="quality-medium">{dict?.settings?.medium || "Medium (720p)"}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="quality-low" />
                          <Label htmlFor="quality-low">{dict?.settings?.low || "Low (480p)"}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>{dict?.settings?.volume || "Default Volume"}</Label>
                        <span className="text-sm">{playback.volume}%</span>
                      </div>
                      <Slider
                        defaultValue={[playback.volume]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setPlayback({ ...playback, volume: value[0] })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.subtitles || "Subtitles"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.subtitlesDescription || "Show subtitles when available"}
                        </p>
                      </div>
                      <Switch
                        checked={playback.subtitles}
                        onCheckedChange={(checked) => setPlayback({ ...playback, subtitles: checked })}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={saveSettings} className="glow-sm">
                    {dict?.settings?.saveChanges || "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </section>

            {/* Privacy & Security */}
            <section id="privacy">
              <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle>{dict?.settings?.privacy || "Privacy & Security"}</CardTitle>
                  </div>
                  <CardDescription>
                    {dict?.settings?.privacyDescription || "Manage your privacy and security settings"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.watchHistory || "Watch History"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.watchHistoryDescription || "Save your watch history for recommendations"}
                        </p>
                      </div>
                      <Switch
                        checked={privacy.watchHistory}
                        onCheckedChange={(checked) => setPrivacy({ ...privacy, watchHistory: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.dataSaving || "Data Saving Mode"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.dataSavingDescription || "Reduce data usage when streaming"}
                        </p>
                      </div>
                      <Switch
                        checked={privacy.dataSaving}
                        onCheckedChange={(checked) => setPrivacy({ ...privacy, dataSaving: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{dict?.settings?.twoFactor || "Two-Factor Authentication"}</Label>
                        <p className="text-sm text-zinc-400">
                          {dict?.settings?.twoFactorDescription || "Add an extra layer of security to your account"}
                        </p>
                      </div>
                      <Switch
                        checked={privacy.twoFactor}
                        onCheckedChange={(checked) => setPrivacy({ ...privacy, twoFactor: checked })}
                      />
                    </div>

                    <div className="pt-4">
                      <Button variant="destructive">{dict?.settings?.deleteAccount || "Delete Account"}</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={saveSettings} className="glow-sm">
                    {dict?.settings?.saveChanges || "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

