import { useEffect, useState } from "react"
import { Logo } from "@/components/atoms/Logo"
import { NavLinks } from "@/components/molecules/NavLinks"
import { Button } from "@/components/ui/button"

const sections = ["home", "features", "contact"]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.5 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <NavLinks activeSection={activeSection} />
        <Button size="lg" className="rounded-full font-semibold px-6">
          Download App
        </Button>
      </div>
    </header>
  )
}
