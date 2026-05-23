"use client"

import { useState, useEffect } from "react"
import { Sparkles, Zap, Shield, Code, Rocket, Star } from "lucide-react"
import { LoadingScreen } from "@/components/loading-screen"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Anti-Cheat Bypass",
    description: "All scripts are regularly updated with the latest bypass methods",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Optimized for performance with minimal impact on your game",
  },
  {
    icon: Code,
    title: "Easy to Use",
    description: "Simple one-line scripts that work instantly",
  },
]

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <AnimatedBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground mb-8 animate-fade-in-down">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by thousands of players</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance animate-fade-in-up">
              Premium{" "}
              <span className="gradient-text">Roblox Scripts</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Carefully crafted scripts with anti-cheat bypass technology. 
              Safe, fast, and always up to date.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/scripts"
                className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white px-8 py-4 text-base font-semibold text-background transition-all duration-500 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                <Rocket className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
                <span>Browse Scripts</span>
              </Link>
              
              <a
                href="https://www.youtube.com/@PhrontonScript"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-foreground transition-all duration-500 hover:border-white/20 hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/10 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 mb-4 transition-all duration-500 group-hover:bg-white group-hover:border-white/20">
                    <Icon className="h-6 w-6 text-foreground transition-colors duration-500 group-hover:text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">7+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Scripts Available</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Bypassed</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  <Star className="h-8 w-8 fill-foreground" />
                  <span>5.0</span>
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-pretty">
              Explore our collection of premium scripts and enhance your gaming experience today.
            </p>
            <Link
              href="/scripts"
              className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white px-8 py-4 text-base font-semibold text-background transition-all duration-500 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:scale-105"
            >
              <Code className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              <span>View All Scripts</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 glass">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="flex flex-col items-center gap-6">
              <p className="text-center text-xs text-muted-foreground/60 tracking-wider uppercase">
                All scripts feature anti-cheat bypass technology
              </p>
              <p className="text-xs text-muted-foreground/40">
                2024 PhrontonScript
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
