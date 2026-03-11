interface StepCardProps {
    number: string
    title: string
    description: string
    /** delay in ms for staggered animation */
    delay?: number
    inView: boolean
}

export function StepCard({ number, title, description, delay = 0, inView }: StepCardProps) {
    return (
        <div
            className="flex flex-col items-center text-center px-4"
            style={{
                transition: inView ? `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms` : "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
            }}
        >
            <span className="text-3xl font-light text-slate-900 mb-6 tracking-widest">{number}</span>
            <h3 className="text-md font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-base text-slate-500 leading-relaxed max-w-55">{description}</p>
        </div>
    )
}
