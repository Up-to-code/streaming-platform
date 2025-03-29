"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/hooks/use-language"
import { Scan, Upload, Camera, X } from "lucide-react"

export default function ScanPage() {
  const [activeTab, setActiveTab] = useState("camera")
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { dictionary: dict, language } = useLanguage()
  const isRtl = language === "ar"

  // Simulate QR code scanning
  const startScanning = async () => {
    setScanning(true)
    setResult(null)

    try {
      // In a real app, this would use a QR code scanning library
      // For demo purposes, we'll simulate finding a QR code after 3 seconds
      setTimeout(() => {
        setResult("https://streamflix.com/watch/movie-123")
        setScanning(false)
      }, 3000)

      // Request camera access
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          setCameraPermission(true)
        }
      } else {
        setCameraPermission(false)
      }
    } catch (error) {
      console.error("Camera access error:", error)
      setCameraPermission(false)
      setScanning(false)
    }
  }

  const stopScanning = () => {
    setScanning(false)

    // Stop camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()

      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      // In a real app, this would process the image to find QR codes
      // For demo purposes, we'll simulate finding a QR code
      setScanning(true)
      setResult(null)

      setTimeout(() => {
        setResult("https://streamflix.com/watch/movie-456")
        setScanning(false)
      }, 2000)
    }
  }

  const handleResultAction = () => {
    if (result) {
      // In a real app, this would navigate to the URL or perform an action
      alert(`Navigating to: ${result}`)
    }
  }

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        const tracks = stream.getTracks()

        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black dark:bg-black text-white pt-20" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center glow-text">{dict?.scan?.title || "Scan QR Code"}</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full bg-zinc-900 dark:bg-zinc-900">
              <TabsTrigger value="camera" disabled={scanning}>
                <Camera className="mr-2 h-4 w-4" />
                {dict?.scan?.camera || "Camera"}
              </TabsTrigger>
              <TabsTrigger value="upload" disabled={scanning}>
                <Upload className="mr-2 h-4 w-4" />
                {dict?.scan?.upload || "Upload"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="camera">
              <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800 overflow-hidden">
                <CardHeader>
                  <CardTitle>{dict?.scan?.scanQrCode || "Scan QR Code"}</CardTitle>
                  <CardDescription>
                    {dict?.scan?.scanDescription || "Point your camera at a QR code to scan it"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square bg-zinc-800 dark:bg-zinc-800 rounded-md overflow-hidden mb-4">
                    {scanning ? (
                      <>
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 border-2 border-primary rounded-lg glow-border"></div>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={stopScanning}
                            className="bg-black/50 hover:bg-black/70"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {cameraPermission === false ? (
                          <div className="text-center p-4">
                            <p className="text-red-500 mb-2">{dict?.scan?.cameraError || "Camera access denied"}</p>
                            <p className="text-sm text-zinc-400">
                              {dict?.scan?.cameraErrorDescription || "Please allow camera access to scan QR codes"}
                            </p>
                          </div>
                        ) : (
                          <>
                            <Scan className="h-12 w-12 text-zinc-600 mb-4" />
                            <p className="text-zinc-400 text-center">{dict?.scan?.readyToScan || "Ready to scan"}</p>
                          </>
                        )}
                      </div>
                    )}
                    <canvas ref={canvasRef} className="hidden" />
                  </div>

                  {result && (
                    <div className="p-3 bg-zinc-800 dark:bg-zinc-800 rounded-md mb-4">
                      <p className="text-sm font-medium mb-1">{dict?.scan?.result || "Result"}:</p>
                      <p className="text-primary break-all">{result}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {result ? (
                    <Button onClick={handleResultAction} className="w-full glow-sm">
                      {dict?.scan?.openLink || "Open Link"}
                    </Button>
                  ) : (
                    <Button onClick={startScanning} disabled={scanning} className="w-full glow-sm">
                      {scanning ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {dict?.scan?.scanning || "Scanning..."}
                        </>
                      ) : (
                        <>
                          <Camera className="mr-2 h-5 w-5" />
                          {dict?.scan?.startScanning || "Start Scanning"}
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="upload">
              <Card className="bg-zinc-900 dark:bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>{dict?.scan?.uploadQrCode || "Upload QR Code"}</CardTitle>
                  <CardDescription>
                    {dict?.scan?.uploadDescription || "Upload an image containing a QR code"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square bg-zinc-800 dark:bg-zinc-800 rounded-md overflow-hidden mb-4">
                    {scanning ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="animate-spin h-12 w-12 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                        <Upload className="h-12 w-12 text-zinc-600 mb-4" />
                        <p className="text-zinc-400 text-center">
                          {dict?.scan?.dragAndDrop || "Drag and drop or click to upload"}
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                          disabled={scanning}
                        />
                      </label>
                    )}
                  </div>

                  {result && (
                    <div className="p-3 bg-zinc-800 dark:bg-zinc-800 rounded-md mb-4">
                      <p className="text-sm font-medium mb-1">{dict?.scan?.result || "Result"}:</p>
                      <p className="text-primary break-all">{result}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {result && (
                    <Button onClick={handleResultAction} className="w-full glow-sm">
                      {dict?.scan?.openLink || "Open Link"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

