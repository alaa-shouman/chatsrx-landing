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
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#0ea5e9]" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                viewBox="0 0 466 511.98">
                <g id="Layer_x0020_1">
                    <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z" />
                    <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z" />
                    <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z" />
                    <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z" />
                </g>
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
