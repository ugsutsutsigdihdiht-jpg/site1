"use client"

import { useState, useEffect } from "react"
import { Heart, Sword, ShieldCheck, Gamepad2 } from "lucide-react"
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
    color: "from-pink-500 to-rose-500",
    textColor: "text-pink-400",
  },
  {
    id: "murder-mystery-2" as GameTab,
    name: "Murder Mystery 2",
    icon: Sword,
    color: "from-violet-500 to-purple-500",
    textColor: "text-violet-400",
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

        {/* Tabs - Fixed at top */}
        <div className="relative z-20 pt-24 pb-8">
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-500 animate-fade-in-down ${
                    isActive
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : "border border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/10 hover:text-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "text-white" : ""
                  }`} />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          {/* Game Title Section */}
          <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r ${activeTabData?.color} bg-clip-text text-transparent`}>
              {activeTabData?.name}
            </h1>
            <p className="text-muted-foreground mb-6">
              {filteredScripts.length} scripts available
            </p>
            
            {/* Safety Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>All scripts are safe & anti-cheat bypassed</span>
            </div>
          </div>

          {/* Scripts Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredScripts.map((script, index) => (
              <div
                key={script.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.08}s` }}
              >
                <ScriptCard script={script} activeTabData={activeTabData} />
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
        <footer className="relative z-10 border-t border-white/5 py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center gap-6">
              <p className="text-sm text-muted-foreground">Follow me on social media</p>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@PhrontonScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-sm font-medium text-pink-400 transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/20 hover:scale-105"
                >
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>
                
                <a
                  href="https://www.tiktok.com/@phrontonscript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105"
                >
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>

              <p className="text-xs text-muted-foreground/50 mt-4">
                2024 PhrontonScript
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
