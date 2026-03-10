import { cn } from "@/lib/utils"

interface NavLinkProps {
    href: string
    label: string
    active?: boolean
}

export function NavLink({ href, label, active = false }: NavLinkProps) {
    return (
        <a
            href={href}
            className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                active ? "text-primary" : "text-foreground"
            )}
        >
            {label}
        </a>
    )
}
