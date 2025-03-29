"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { X, Bell, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/hooks/use-language"

interface Notification {
  id: string
  title: string
  message: string
  date: string
  read: boolean
}

export default function NotificationCenter({ onClose }: { onClose: () => void }) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const { toast } = useToast()
  const { dictionary, language } = useLanguage()
  const isRtl = language === "ar"

  // Simulate fetching notifications
  useEffect(() => {
    // In a real app, this would be an API call
    const mockNotifications: Notification[] = [
      {
        id: "1",
        title: dictionary?.notifications.newSeason || "New Season Available",
        message: dictionary?.notifications.newSeasonMessage || "Stranger Things Season 5 is now available to stream!",
        date: "2023-05-15T10:30:00Z",
        read: false,
      },
      {
        id: "2",
        title: dictionary?.notifications.newRecommendation || "New Recommendation",
        message:
          dictionary?.notifications.newRecommendationMessage ||
          "Based on your watch history, we think you'll love 'The Witcher'",
        date: "2023-05-14T08:15:00Z",
        read: false,
      },
      {
        id: "3",
        title: dictionary?.notifications.accountUpdate || "Account Update",
        message: dictionary?.notifications.accountUpdateMessage || "Your subscription will renew in 7 days",
        date: "2023-05-10T14:45:00Z",
        read: true,
      },
      {
        id: "4",
        title: dictionary?.notifications.newRelease || "New Release",
        message: dictionary?.notifications.newReleaseMessage || "Dune: Part Two is now available to stream",
        date: "2023-05-08T09:20:00Z",
        read: true,
      },
      {
        id: "5",
        title: dictionary?.notifications.watchlistUpdate || "Watchlist Update",
        message: dictionary?.notifications.watchlistUpdateMessage || "A title in your watchlist is about to expire",
        date: "2023-05-05T16:10:00Z",
        read: true,
      },
    ]

    setNotifications(mockNotifications)
  }, [dictionary])

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )

    toast({
      title: dictionary?.notifications.markedAsRead || "Marked as read",
      description: dictionary?.notifications.markedAsReadMessage || "Notification has been marked as read",
    })
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))

    toast({
      title: dictionary?.notifications.allMarkedAsRead || "All marked as read",
      description: dictionary?.notifications.allMarkedAsReadMessage || "All notifications have been marked as read",
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div
      className="fixed top-16 md:top-20 right-0 md:right-4 w-full md:w-96 bg-zinc-900 border border-zinc-800 rounded-md shadow-xl z-50"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center">
          <Bell className={`h-5 w-5 ${isRtl ? "ml-2" : "mr-2"} text-primary`} />
          <h2 className="font-bold text-white">{dictionary?.notifications.title || "Notifications"}</h2>
          {unreadCount > 0 && (
            <span
              className={`${isRtl ? "mr-2" : "ml-2"} px-2 py-0.5 text-xs bg-primary text-white rounded-full glow-sm`}
            >
              {unreadCount}
            </span>
          )}
        </div>
        <div className={`flex items-center ${isRtl ? "space-x-reverse" : ""} space-x-2`}>
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllAsRead}
            className="text-xs text-zinc-400 hover:text-white hover:glow-sm"
          >
            <Check className={`h-4 w-4 ${isRtl ? "ml-1" : "mr-1"}`} />
            {dictionary?.notifications.markAllRead || "Mark all as read"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-zinc-400 hover:text-white hover:glow-sm"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[400px]">
        {notifications.length > 0 ? (
          <div className="divide-y divide-zinc-800">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn("p-4 hover:bg-zinc-800/50 transition-colors", !notification.read && "bg-zinc-800/20")}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-white">{notification.title}</h3>
                  <span className="text-xs text-zinc-500">{formatDate(notification.date)}</span>
                </div>
                <p className="text-sm text-zinc-300 mb-2">{notification.message}</p>
                {!notification.read && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => markAsRead(notification.id)}
                    className="text-xs text-primary hover:text-primary/90 hover:bg-primary/10 p-0 hover:glow-text-sm"
                  >
                    {dictionary?.notifications.markRead || "Mark as read"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-4">
            <Bell className="h-10 w-10 text-zinc-600 mb-2" />
            <p className="text-zinc-400 text-center">
              {dictionary?.notifications.noNotifications || "No notifications yet"}
            </p>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}

