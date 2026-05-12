"use client"

import { useEffect, useState } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(onComplete, 600)
          }, 200)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-600 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative mb-12">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Rotating ring */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="20 10"
                className="opacity-40"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Inner glow */}
          <div className="absolute inset-4 rounded-full bg-white/5 blur-xl animate-pulse" />

          {/* Logo text */}
          <span className="relative text-4xl font-black tracking-tighter text-foreground">
            P
          </span>
        </div>
      </div>

      {/* Brand name */}
      <h1 className="mb-8 text-2xl font-bold tracking-[0.2em] text-foreground/90 uppercase animate-pulse-subtle">
        PhrontonScript
      </h1>

      {/* Progress bar */}
      <div className="relative w-48">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-white/50 via-white to-white/50 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-center font-mono text-xs tracking-widest text-muted-foreground">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}
