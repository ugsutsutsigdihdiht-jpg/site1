"use client"

import { useState, useEffect } from "react"
import { Gamepad2, Heart, Sword, Sparkles } from "lucide-react"
import { scripts } from "@/lib/scripts-data"
import { ScriptCard } from "@/components/script-card"
import { LoadingScreen } from "@/components/loading-screen"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"

type GameTab = "adopt-me" | "murder-mystery-2"

const tabs = [
  {
    id: "adopt-me" as GameTab,
    name: "Adopt Me",
    icon: Heart,
    description: "Pet collection scripts",
  },
  {
    id: "murder-mystery-2" as GameTab,
    name: "Murder Mystery 2",
    icon: Sword,
    description: "Combat advantage",
  },
  {
    id: "murder-mystery-1" as GameTab,
    name: "Murder Mystery 2",
    icon: Sword,
    description: "Combat advantage",
  },
]

export default function ScriptsPage() {
  const [activeTab, setActiveTab] = useState<GameTab>("adopt-me")
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredScripts = scripts.filter((script) => script.game === activeTab)
  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  if (!mounted) return null

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <AnimatedBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-12">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Updated regularly</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Script Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
              Browse our premium scripts organized by game. Click to copy and execute.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-4 rounded-2xl border px-6 py-4 text-left transition-all duration-500 animate-fade-in-up overflow-hidden ${
                    isActive
                      ? "border-white/20 bg-white text-background shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)]"
                      : "border-white/10 bg-white/5 text-foreground hover:border-white/20 hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 ${
                    isActive ? "bg-background/10" : "bg-white/10"
                  }`}>
                    <Icon className={`h-6 w-6 transition-transform duration-500 group-hover:scale-110 ${
                      isActive ? "text-background" : "text-foreground"
                    }`} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isActive ? "text-background" : "text-foreground"}`}>
                      {tab.name}
                    </div>
                    <div className={`text-sm ${isActive ? "text-background/70" : "text-muted-foreground"}`}>
                      {tab.description}
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-transparent via-background to-transparent" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <main className="relative z-10 mx-auto max-w-5xl px-6 pb-16">
          {/* Section Header */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {activeTabData && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 animate-float">
                    <activeTabData.icon className="h-6 w-6 text-foreground" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    {activeTabData?.name} Scripts
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {filteredScripts.length} available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scripts Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredScripts.map((script, index) => (
              <div
                key={script.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <ScriptCard script={script} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredScripts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center animate-scale-in">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 mb-6">
                <Gamepad2 className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Scripts for this game are being developed
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 glass">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://www.youtube.com/@PhrontonScript"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-foreground transition-all duration-700 hover:border-white/30 hover:bg-white hover:text-background hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] animated-border animate-fade-in-up"
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
