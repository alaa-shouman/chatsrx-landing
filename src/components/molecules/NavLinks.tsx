import { NavLink } from "@/components/atoms/NavLink"

const links = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
]

interface NavLinksProps {
    activeSection?: string
}

export function NavLinks({ activeSection = "home" }: NavLinksProps) {
    return (
        <nav className="flex items-center gap-8">
            {links.map((link) => (
                <NavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    active={activeSection === link.href.replace("#", "")}
                />
            ))}
        </nav>
    )
}
