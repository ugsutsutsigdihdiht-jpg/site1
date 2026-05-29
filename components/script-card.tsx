"use client"

import { useState } from "react"
import { Check, Copy, Gamepad2 } from "lucide-react"
import type { Script } from "@/lib/scripts-data"

interface ScriptCardProps {
  script: Script
  activeTabData?: {
    id: string
    name: string
    color: string
    textColor: string
  }
}

const scriptIcons: Record<string, string> = {
  "AutoFarm": "🤖",
  "PetSpawnerV2": "🐾",
  "Pet Spawner": "🎁",
  "Item Spawner": "🎯",
  "Trade Freeze": "🔒",
  "Overdrive Hub": "⚡",
}

export function ScriptCard({ script, activeTabData }: ScriptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script.script)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const icon = scriptIcons[script.name] || "📜"
  const gameName = script.game === "adopt-me" ? "Adopt Me" : "Murder Mystery 2"

  return (
    <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.15)]">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-2xl transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {script.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Gamepad2 className="h-3 w-3" />
            <span>{gameName}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {script.description}
      </p>

      {/* Script Preview */}
      <div className="flex-1 mb-4">
        <div className="rounded-xl bg-black/40 border border-white/5 p-3 font-mono text-xs text-muted-foreground/80 overflow-hidden">
          <code className="block truncate">
            {script.script.length > 80 ? script.script.slice(0, 80) + "..." : script.script}
          </code>
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
          copied
            ? "bg-emerald-500 text-white"
            : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:shadow-lg hover:shadow-pink-500/25 active:scale-[0.98]"
        }`}
      >
        {copied ? (
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
  )
}
