"use client"

import { useState } from "react"
import { Check, Copy, Code2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Script } from "@/lib/scripts-data"

interface ScriptCardProps {
  script: Script
}

export function ScriptCard({ script }: ScriptCardProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

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
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base">{script.name}</CardTitle>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="shrink-0 gap-1.5 border-border/50 hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </Button>
        </div>
        <CardDescription className="mt-2 text-muted-foreground">
          {script.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
        >
          <div
            className={`overflow-hidden rounded-lg bg-background/50 p-3 font-mono text-xs text-muted-foreground transition-all ${
              expanded ? "" : "max-h-16"
            }`}
          >
            <code className="break-all">{script.script}</code>
          </div>
          {!expanded && script.script.length > 60 && (
            <p className="mt-1 text-xs text-muted-foreground/70">
              Click to expand
            </p>
          )}
        </button>
      </CardContent>
    </Card>
  )
}
