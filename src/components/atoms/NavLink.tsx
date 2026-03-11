import { cn } from "@/lib/utils"

interface NavLinkProps {
    href: string
    label: string
    active?: boolean
    onClick?: () => void
}

export function NavLink({ href, label, active = false, onClick }: NavLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                active ? "text-primary" : "text-foreground"
            )}
        >
            {label}
        </a>
    )
}
