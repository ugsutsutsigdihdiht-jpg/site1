"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Zap, Shield, Sparkles, ChevronRight, Code2, Users, Star, ArrowRight } from "lucide-react"
import { LoadingScreen } from "@/components/loading-screen"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Shield,
    title: "Anti-Cheat Bypass",
    description: "All scripts feature advanced bypass technology",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Optimized for performance and stability",
  },
  {
    icon: Code2,
    title: "Regular Updates",
    description: "Scripts updated to work with latest patches",
  },
]

const stats = [
  { value: "7+", label: "Scripts" },
  { value: "100%", label: "Bypassed" },
  { value: "24/7", label: "Support" },
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

        {/* Header */}
        <header className="sticky top-0 z-50 glass-strong">
          <div className="mx-auto max-w-5xl px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 animate-fade-in-down">
                {/* Logo */}
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-2xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 animate-glow">
                    <span className="text-2xl font-black tracking-tighter text-foreground">P</span>
                    <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                      <Zap className="h-3 w-3 text-background" />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight gradient-text">
                    PhrontonScript
                  </h1>
                  <p className="text-sm text-muted-foreground/80 flex items-center gap-2">
                    <Shield className="h-3 w-3" />
                    Premium collection
                  </p>
                </div>
              </div>

              {/* Nav */}
              <nav className="hidden sm:flex items-center gap-6 animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
                <Link 
                  href="/" 
                  className="text-sm text-foreground font-medium transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/scripts" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Scripts
                </Link>
                <a
                  href="https://www.youtube.com/@PhrontonScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  YouTube
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground mb-8 animate-fade-in-up">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Trusted by thousands of players</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Premium Roblox
              <br />
              <span className="gradient-text">Scripts Hub</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Unlock the full potential of your favorite games with our carefully crafted scripts. Safe, fast, and always updated.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/scripts">
                <Button size="lg" className="group relative overflow-hidden bg-white text-background hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-2xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Browse Scripts
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Why Choose Us?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              We provide the best quality scripts with constant updates and support
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10 animate-fade-in-up"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 mb-6 transition-all duration-500 group-hover:bg-white group-hover:text-background">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-12 sm:p-16 text-center overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10">
              <Sparkles className="h-12 w-12 mx-auto mb-6 text-foreground" />
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Explore our collection of premium scripts and take your gaming experience to the next level.
              </p>
              <Link href="/scripts">
                <Button size="lg" className="bg-white text-background hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-2xl">
                  View All Scripts
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 glass">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="flex flex-col items-center gap-6">
              {/* YouTube Link */}
              <a
                href="https://www.youtube.com/@PhrontonScript"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-foreground transition-all duration-700 hover:border-white/30 hover:bg-white hover:text-background hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] animated-border"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-700 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Subscribe @PhrontonScript</span>
              </a>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <Link href="/scripts" className="hover:text-foreground transition-colors">
                  Scripts
                </Link>
                <span className="text-white/20">|</span>
                <a
                  href="https://www.youtube.com/@PhrontonScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  YouTube
                </a>
              </div>

              {/* Copyright */}
              <p className="text-xs text-muted-foreground/40">
                2024 PhrontonScript. All scripts feature anti-cheat bypass technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
