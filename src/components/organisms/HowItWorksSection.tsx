import { useInView } from "@/hooks/useInView"
import { StepCard } from "@/components/atoms/StepCard"

const steps = [
    {
        number: "01",
        title: "Contact Us to Get Started",
        description:
            "Reach out to our team to request access for your clinic or pharmacy. We'll guide you through the onboarding process and answer any questions before setup.",
    },
    {
        number: "02",
        title: "Submit Your Information",
        description:
            "Create your account by filling in your basic details. Doctors sign up using their NPI, and all users upload the required documents for verification.",
    },
    {
        number: "03",
        title: "Verification & Approval",
        description:
            "Our team manually reviews and validates all submitted information and documents to ensure compliance, security, and trusted access across the platform.",
    },
    {
        number: "04",
        title: "Set Up Your Workspace",
        description:
            "Once approved, customize your account, assign roles, and add multiple users from your clinic or pharmacy to start collaborating instantly.",
    },
]

export function HowItWorksSection() {
    const { ref, inView } = useInView()

    return (
        <section
            id="how-it-works"
            ref={ref as React.RefObject<HTMLElement>}
            className="w-full pt-36 pb-24 lg:py-24 px-6 flex flex-col items-center"
        >
            {/* Heading — fades + rises first */}
            <div
                className="text-center mb-16"
                style={{
                    transition: inView ? "opacity 0.6s ease-out 0ms, transform 0.6s ease-out 0ms" : "none",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                }}
            >
                <h2 className="text-4xl font-bold text-slate-900 mb-5">How It Works?</h2>
                <p className="text-sm text-slate-400">Set up in minutes, protected from day one.</p>
            </div>

            {/* Steps grid: 4 cols on desktop, 2 cols on mobile */}
            <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-4">
                {steps.map((step, i) => (
                    <StepCard
                        key={step.number}
                        {...step}
                        delay={i * 120}
                        inView={inView}
                    />
                ))}
            </div>
        </section>
    )
}
