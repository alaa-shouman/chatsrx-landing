import { useEffect, useState } from "react"
import { Logo } from "@/components/atoms/Logo"
import { NavLinks } from "@/components/molecules/NavLinks"
import { NavLink } from "@/components/atoms/NavLink"
import { Button } from "@/components/ui/button"

const sections = ["home", "features", "contact"]
const links = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
]

export function Navbar() {
    const [activeSection, setActiveSection] = useState("home")
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
                { threshold: 0.5 }
            )
            observer.observe(el)
            observers.push(observer)
        })
        return () => observers.forEach((obs) => obs.disconnect())
    }, [])

    return (
        <header className="sticky top-4 lg:top-8 z-50 w-full px-4">
            {/* ── Desktop navbar ── */}
            <div className="hidden lg:grid mx-auto max-w-6xl bg-slate-100/90 backdrop-blur-md border rounded-md px-2 h-16 grid-cols-3 items-center">
                <Logo />
                <div className="flex justify-center">
                    <NavLinks activeSection={activeSection} />
                </div>
                <div className="flex justify-end">
                    <Button size="lg" className="rounded-md text-lg font-semibold px-6">
                        Download App
                    </Button>
                </div>
            </div>

            {/* ── Mobile navbar ── */}
            <div className="lg:hidden mx-auto max-w-xl">
                <div className="bg-white/90 backdrop-blur-md border border-border rounded-xl px-4 h-14 flex items-center justify-between shadow-sm">
                    <Logo />
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((o) => !o)}
                        className="flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-primary text-white gap-[5px] shrink-0"
                    >
                        {/* Hamburger → X transition */}
                        <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>

                {/* Slide-down mobile menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="mt-1 bg-white/95 backdrop-blur-md border border-border rounded-xl shadow-md px-6 py-4 flex flex-col gap-4">
                        {links.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                active={activeSection === link.href.replace("#", "")}
                                onClick={() => setMenuOpen(false)}
                            />
                        ))}
                        <Button className="rounded-full font-semibold w-full mt-1" onClick={() => setMenuOpen(false)}>
                            Download App
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
