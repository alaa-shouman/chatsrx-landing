import React from "react"
import { useInView } from "@/hooks/useInView"

const chatFeatures = [
    {
        number: "01",
        title: "Instant Communication",
        subtitle: "Chat directly with pharmacies or doctors in real time.",
        description:
            "No phone calls, no delays — clarify prescriptions, availability, or questions instantly inside the app.",
        image: "instantComunication.png",
        alt: "Instant Communication Chat Screen",
    },
    {
        number: "02",
        title: "Multiple Chats, One Place",
        subtitle: "Manage multiple conversations effortlessly.",
        description:
            "Chat with several pharmacies or doctors at the same time without losing context or history.",
        image: "multiplechats.png",
        alt: "Multiple Chats Screen",
    },
    {
        number: "03",
        title: "Role-Based Access",
        subtitle: "Built for teams, not just individuals.",
        description:
            "Large pharmacies and clinics can add multiple users, assign roles, and control access securely.",
        image: "rolebased-access.png",
        alt: "Role-Based Access Screen",
    },
    {
        number: "04",
        title: "Instant Notifications",
        subtitle: "Stay updated without chasing information.",
        description:
            "Get notified the moment a prescription is sent, updated, accepted, or rejected.",
        image: "instantNotification.png",
        alt: "Instant Notifications Lock Screen",
    },
]

const CARD_TOP = "10vh"

/* ── Mobile card: simple fade-up on scroll ── */
function MobileCard({ feature }: { feature: (typeof chatFeatures)[0] }) {
    const { ref, inView } = useInView({ threshold: 0.12 })
    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="bg-[#efefef] rounded-3xl p-6 flex flex-col gap-6"
            style={{
                transition: inView
                    ? "opacity 0.65s ease-out, transform 0.65s ease-out"
                    : "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(44px)",
            }}
        >
            <div className="flex flex-col gap-3">
                <span className="inline-flex items-center text-xs font-medium text-slate-500 border border-slate-300 rounded-full px-3 py-1 w-fit tracking-widest">
                    {feature.number}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
            <div className="flex justify-center pt-2">
                <img
                    src={`${import.meta.env.BASE_URL}static/${feature.image}`}
                    alt={feature.alt}
                    className="w-44 object-contain drop-shadow-xl"
                />
            </div>
        </div>
    )
}

/* ── Heading ── */
function SectionHeading() {
    const { ref, inView } = useInView({ threshold: 0.3 })
    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="mb-12 lg:mb-16 text-center px-4 lg:px-8 xl:px-12"
            style={{
                transition: inView
                    ? "opacity 0.65s ease-out, transform 0.65s ease-out"
                    : "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
            }}
        >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                Real-time communication<br className="hidden lg:block" /> and teamwork
            </h2>
            <p className="mt-4 text-slate-500 text-base lg:text-lg max-w-xl mx-auto">
                made easy for healthcare professionals.
            </p>
        </div>
    )
}

export function ChatFeaturesSection() {
    return (
        <section id="communication" className="w-full pt-16 lg:pt-20 xl:pt-28">
            <SectionHeading />

            {/* ── Mobile: plain list with fade-up ── */}
            <div className="lg:hidden px-4 mx-auto max-w-xl flex flex-col gap-5 pb-16">
                {chatFeatures.map((feature) => (
                    <MobileCard key={feature.number} feature={feature} />
                ))}
            </div>

            {/* ── Desktop: sticky stacking gallery ── */}
            <div className="hidden lg:block">
                {chatFeatures.map((feature, index) => (
                    <div
                        key={feature.number}
                        className="sticky mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-6 xl:px-8"
                        style={{
                            top: CARD_TOP,
                            zIndex: index + 1,
                            marginBottom: "100vh",
                        }}
                    >
                        <div className="grid grid-cols-2 items-center gap-12 bg-[#efefef] rounded-3xl px-12 xl:px-16 py-10 xl:py-14 overflow-hidden">
                            {/* Left: copy */}
                            <div className="flex flex-col gap-5">
                                <span className="inline-flex items-center text-xs font-medium text-slate-500 border border-slate-300 rounded-full px-3 py-1 w-fit tracking-widest">
                                    {feature.number}
                                </span>
                                <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-base xl:text-lg">{feature.subtitle}</p>
                                <p className="text-slate-600 text-base xl:text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Right: phone screenshot */}
                            <div className="flex justify-center items-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}static/${feature.image}`}
                                    alt={feature.alt}
                                    className="max-h-[60vh] w-auto object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {/* Spacer so the last card stays pinned while scrolling */}
                <div style={{ height: "90vh" }} />
            </div>
        </section>
    )
}
