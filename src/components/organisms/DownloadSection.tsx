import React from "react"
import { useInView } from "@/hooks/useInView"

const platforms = [
    {
        label: "iOS App",
        buttonText: "Download for iOS",
        href: "https://testflight.apple.com/join/savnrAFz",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#0ea5e9]" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
        ),
    },
    {
        label: "Android App",
        buttonText: "Download for Android",
        href: "https://play.google.com/store/apps/details?id=com.tech3e.chatsrx",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#0ea5e9]" fill="currentColor" aria-hidden="true">
                <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l16 8.5-16 8.5c-.5.33-1.5.33-1.5-.5zm2-1.86L17.03 12 5 5.36v13.28z" />
            </svg>
        ),
    },
    {
        label: "Desktop App",
        buttonText: "Download Desktop App",
        href: "https://github.com/tech-3e/ChatsRx-release/releases/download/Desktop/ChatsRx.Setup.1.0.0.exe",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#0ea5e9]" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                <rect x="2" y="3" width="20" height="13" rx="2" />
                <path d="M8 20h8M12 16v4" />
            </svg>
        ),
    },
]

export function DownloadSection() {
    const { ref, inView } = useInView({ threshold: 0.15 })

    const fadeUp = (delay: number): React.CSSProperties => ({
        transition: inView
            ? `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`
            : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
    })

    return (
        <section
            id="contact"
            className="w-full py-16 lg:py-24 xl:py-32 px-4 lg:px-8 xl:px-12"
        >
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className="mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl rounded-3xl overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 40%, #0284c7 100%)",
                }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 px-8 py-12 lg:px-14 lg:py-16 xl:px-20 xl:py-20 items-center">

                    {/* Left: heading + subtext */}
                    <div className="flex flex-col gap-4" style={fadeUp(0)}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                            Join Doctors and<br />Pharmacists!
                        </h2>
                        <p className="text-slate-700 text-base lg:text-lg max-w-sm leading-relaxed">
                            Download ChatsRx and start connecting with trusted professionals today.
                        </p>
                    </div>

                    {/* Right: download cards */}
                    <div className="flex flex-col gap-4">
                        {platforms.map((p, i) => (
                            <div
                                key={p.label}
                                className="flex items-center gap-5 bg-white rounded-2xl px-6 py-5 shadow-sm"
                                style={fadeUp(120 + i * 100)}
                            >
                                <div className="shrink-0">{p.icon}</div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-500">
                                        {p.label}
                                    </span>
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] active:bg-[#0369a1] text-white text-sm font-semibold px-5 py-2 transition-colors duration-200 whitespace-nowrap"
                                    >
                                        {p.buttonText}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
