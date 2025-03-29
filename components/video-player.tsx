"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "next-themes"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [hideControlsTimeout, setHideControlsTimeout] = useState<NodeJS.Timeout | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isRtl = language === "ar"

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume || 1
        setIsMuted(false)
      } else {
        videoRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  // Handle seeking
  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      const newTime = (value[0] / 100) * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement && playerRef.current) {
      playerRef.current
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true)
        })
        .catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false)
        })
        .catch((err) => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`)
        })
    }
  }

  // Format time (seconds to MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Handle mouse movement to show/hide controls
  const handleMouseMove = () => {
    setShowControls(true)

    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout)
    }

    const timeout = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)

    setHideControlsTimeout(timeout)
  }

  // Update current time
  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime)
      }
    }

    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration)
      }
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate)
      video.addEventListener("loadedmetadata", handleLoadedMetadata)
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate)
        video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      }

      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout)
      }
    }
  }, [hideControlsTimeout])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout)
      }
    }
  }, [hideControlsTimeout])

  return (
    <div
      ref={playerRef}
      className="relative w-full h-full bg-black dark:bg-black"
      onMouseMove={handleMouseMove}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        poster="/placeholder.svg?height=1080&width=1920"
        onClick={togglePlay}
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center glow-sm"
          >
            <Play className="h-10 w-10 text-white" />
          </button>
        </div>
      )}

      {/* Controls */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2 transition-opacity duration-300",
          showControls ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Progress Bar */}
        <div className="mb-2">
          <Slider
            value={[duration ? (currentTime / duration) * 100 : 0]}
            onValueChange={handleSeek}
            className="w-full [&>span:first-child]:h-1.5 [&>span:first-child]:bg-zinc-600 [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]]:glow-sm"
          />
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isRtl ? "space-x-reverse" : ""} space-x-4`}>
            <button onClick={togglePlay} className="text-white hover:text-primary hover:glow-text-sm">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>

            <button className="text-white hover:text-primary hover:glow-text-sm">
              <SkipBack className="h-5 w-5" />
            </button>

            <button className="text-white hover:text-primary hover:glow-text-sm">
              <SkipForward className="h-5 w-5" />
            </button>

            <div className={`flex items-center ${isRtl ? "space-x-reverse" : ""} space-x-2`}>
              <button onClick={toggleMute} className="text-white hover:text-primary hover:glow-text-sm">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              <div className="w-24 hidden sm:block">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="[&>span:first-child]:h-1 [&>span:first-child]:bg-zinc-600 [&_[role=slider]]:bg-white [&_[role=slider]]:w-2.5 [&_[role=slider]]:h-2.5 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]]:glow-sm"
                />
              </div>
            </div>

            <div className="text-sm text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div>
            <button onClick={toggleFullscreen} className="text-white hover:text-primary hover:glow-text-sm">
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

