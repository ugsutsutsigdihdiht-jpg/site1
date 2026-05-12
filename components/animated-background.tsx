"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let mouse = { x: 0, y: 0 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      baseOpacity: number

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.size = Math.random() * 3 + 1
        this.baseOpacity = Math.random() * 0.6 + 0.3
        this.opacity = this.baseOpacity
      }

      update(width: number, height: number, mouseX: number, mouseY: number) {
        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const force = (200 - dist) / 200
          this.vx -= (dx / dist) * force * 0.05
          this.vy -= (dy / dist) * force * 0.05
          this.opacity = Math.min(1, this.baseOpacity + force * 0.5)
        } else {
          this.opacity += (this.baseOpacity - this.opacity) * 0.05
        }

        this.x += this.vx
        this.y += this.vy

        // Boundaries with smooth wrapping
        if (this.x < -50) this.x = width + 50
        if (this.x > width + 50) this.x = -50
        if (this.y < -50) this.y = height + 50
        if (this.y > height + 50) this.y = -50

        // Very slight damping for smooth movement
        this.vx *= 0.9995
        this.vy *= 0.9995
        
        // Add small random movement
        this.vx += (Math.random() - 0.5) * 0.02
        this.vy += (Math.random() - 0.5) * 0.02
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      particles = []
      const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000))
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 180) {
            const opacity = 0.4 * (1 - dist / 180)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height, mouse.x, mouse.y)
        particle.draw(ctx)
      })

      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("resize", () => {
      resize()
      init()
    })
    window.addEventListener("mousemove", handleMouseMove)

    init()
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      {/* Corner gradients */}
      <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
      <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
    </div>
  )
}
