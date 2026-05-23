"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code, Zap, Shield } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/scripts", label: "Scripts", icon: Code },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 animate-fade-in-down group">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 animate-glow">
                <span className="text-xl font-black tracking-tighter text-foreground">P</span>
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground">
                  <Zap className="h-2.5 w-2.5 text-background" />
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight gradient-text">
                PhrontonScript
              </h1>
              <p className="text-xs text-muted-foreground/80 flex items-center gap-1.5">
                <Shield className="h-3 w-3" />
                Premium collection
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3 animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-2 border-white/30 bg-white text-background shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                      : "border-2 border-white/10 bg-white/5 text-foreground hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_-15px_rgba(255,255,255,0.3)]"
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "text-background" : "text-foreground"
                  }`} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
