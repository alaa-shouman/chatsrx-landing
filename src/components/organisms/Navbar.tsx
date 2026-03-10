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
        <header className="sticky top-4 z-50 w-full px-6">
            <div className="mx-auto max-w-5xl bg-white/90 backdrop-blur-md border border-border shadow-sm rounded-2xl px-6 h-16 grid grid-cols-3 items-center">
                <Logo />
                <div className="flex justify-center">
                    <NavLinks activeSection={activeSection} />
                </div>
                <div className="flex justify-end">
                    <Button size="lg" className="rounded-full font-semibold px-6">
                        Download App
                    </Button>
                </div>
            </div>
        </header>
    )
}
