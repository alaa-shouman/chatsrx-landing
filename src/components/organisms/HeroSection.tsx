import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative z-10 w-full min-h-[calc(100vh-80px)] flex items-center"
        >
            <div className="mx-auto max-w-6xl px-6 w-full grid grid-cols-2 gap-12 items-center py-16">

                {/* Left: copy */}
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
                        <Button size="lg" className="rounded-full px-8 font-semibold text-base">
                            Download App
                        </Button>
                    </div>
                </div>

                {/* Right: phone mockups */}
                <div className="relative flex justify-center items-end" style={{ height: 560 }}>
                    <img src={"/public/HomePage.png"} alt="Glare" className="absolute w-[110%] top-0 left-1/2 -translate-x-1/2  pointer-events-none" />
                </div>

            </div>
        </section>
    )
}
