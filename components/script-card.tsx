"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import type { Script } from "@/lib/scripts-data"

interface ScriptCardProps {
  script: Script
}

export function ScriptCard({ script }: ScriptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script.script)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
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
        onClick={handleCopy}
        className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
          copied
            ? "bg-emerald-500 text-white"
            : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
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
