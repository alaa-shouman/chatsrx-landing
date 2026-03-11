import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative z-10 w-full min-h-[calc(100vh-80px)] flex items-center"
        >
            {/* ── Desktop: two-column ── */}
            <div className="hidden lg:grid mx-auto max-w-6xl px-6 w-full grid-cols-2 gap-12 items-center py-16">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        Smarter Connections,<br />Healthier Outcomes!
                    </h1>
                    <p className="text-base text-gray-500 max-w-md leading-relaxed">
                        ChatsRx connect doctors and pharmacists in one secure platform,
                        simplifying prescription coordination, and saving precious time for
                        better patient care.
                    </p>
                    <div>
                        <Button size="lg" className="rounded-full px-8 font-semibold text-base" asChild>
                            <a href="#contact">Download App</a>
                        </Button>
                    </div>
                </div>
                <div className="relative flex justify-center items-end" style={{ height: 560 }}>
                    <img
                        src={`${import.meta.env.BASE_URL}static/HomePage.png`}
                        alt="App Preview"
                        className="absolute w-[110%] top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                    />
                </div>
            </div>

            {/* ── Mobile: single column, stacked ── */}
            <div className="lg:hidden w-full px-5 pt-8 pb-0 flex flex-col">
                {/* Copy block */}
                <div className="flex flex-col gap-5 mb-8">
                    <h1 className="text-[2rem] font-bold leading-tight text-gray-900">
                        Smarter Connections,<br />Healthier Outcomes!
                    </h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        ChatsRx connect doctors and pharmacists in one secure platform,
                        simplifying prescription coordination, and saving precious time for
                        better patient care.
                    </p>
                    <Button size="lg" className="rounded-full px-8 font-semibold text-base w-fit" asChild>
                        <a href="#contact">Download App</a>
                    </Button>
                </div>

                {/* Phone image — shows below copy, bleeds to bottom */}
                <div className="relative w-full" style={{ minHeight: 340 }}>
                    <img
                        src={`${import.meta.env.BASE_URL}static/HomePage.png`}
                        alt="App Preview"
                        className="absolute w-[115%] left-1/2 -translate-x-1/2 top-0 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    )
}
