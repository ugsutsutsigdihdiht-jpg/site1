"use client"

import { useState, useEffect } from "react"
import { Heart, Sword, Copy, Check, Gamepad2 } from "lucide-react"
import { scripts } from "@/lib/scripts-data"
import { LoadingScreen } from "@/components/loading-screen"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"

type GameTab = "adopt-me" | "murder-mystery-2"

const tabs = [
  {
    id: "adopt-me" as GameTab,
    name: "Adopt Me",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "murder-mystery-2" as GameTab,
    name: "Murder Mystery 2",
    icon: Sword,
    gradient: "from-violet-500 to-purple-500",
  },
]

export default function ScriptsPage() {
  const [activeTab, setActiveTab] = useState<GameTab>("adopt-me")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredScripts = scripts.filter((script) => script.game === activeTab)
  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  const handleCopy = async (id: string, script: string) => {
    try {
      await navigator.clipboard.writeText(script)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  if (!mounted) return null

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <AnimatedBackground />
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-16">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-down">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2.5 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg shadow-pink-500/20`
                      : "border border-white/10 bg-white/5 text-foreground hover:border-white/20 hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </div>

          {/* Game Header */}
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r ${activeTabData?.gradient} bg-clip-text text-transparent`}>
              {activeTabData?.name}
            </h1>
            <p className="text-muted-foreground text-lg">
              {filteredScripts.length} {filteredScripts.length === 1 ? "script" : "scripts"} available
            </p>
          </div>

          {/* Scripts Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScripts.map((script, index) => (
              <div
                key={script.id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Script Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {script.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {script.description}
                  </p>
                </div>

                {/* Script Code Preview */}
                <div className="mb-6 rounded-xl bg-black/50 border border-white/5 p-4 font-mono text-xs text-muted-foreground overflow-hidden">
                  <code className="block whitespace-pre-wrap break-all line-clamp-3">
                    {script.script}
                  </code>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(script.id, script.script)}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                    copiedId === script.id
                      ? "bg-emerald-500 text-white"
                      : `bg-gradient-to-r ${activeTabData?.gradient} text-white hover:opacity-90 hover:shadow-lg active:scale-[0.98]`
                  }`}
                >
                  {copiedId === script.id ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Script</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredScripts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center animate-scale-in">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 mb-6">
                <Gamepad2 className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                No Scripts Yet
              </h3>
              <p className="text-muted-foreground">
                Scripts for this game are coming soon
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 py-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.youtube.com/@PhrontonScript"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/10"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@phrontonscript"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/10"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
            <p className="text-xs text-muted-foreground/50 mt-6">
              2024 PhrontonScript
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
