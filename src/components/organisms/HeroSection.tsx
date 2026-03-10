import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/atoms/PhoneMockup"

// ── Inline phone screen UIs ────────────────────────────────────────────────

function BackPhone() {
    return (
        <div className="flex flex-col h-full bg-white text-[8px]">
            {/* Status bar */}
            <div className="flex justify-between items-center px-4 pt-6 pb-1 text-[7px] text-gray-500">
                <span>11:49</span>
                <span className="flex gap-1">▲ ◉ ▬</span>
            </div>
            {/* Tab bar */}
            <div className="flex gap-1 px-3 pb-1">
                {["All", "Pending", "Accepting"].map((t, i) => (
                    <span
                        key={t}
                        className={`px-2 py-0.5 rounded-full text-[7px] font-medium ${i === 0 ? "bg-blue-600 text-white" : "text-gray-500"}`}
                    >
                        {t}
                    </span>
                ))}
            </div>
            {/* Patient rows */}
            {[1, 2].map((n) => (
                <div key={n} className="mx-3 mb-1.5 p-2 rounded-lg border border-gray-100 shadow-sm bg-white">
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p className="text-gray-400">Created on 29 January</p>
                    <div className="flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                        <span className="text-gray-500">Walgreens</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-500">🧪 1 meds</span>
                    </div>
                    <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-[6px] font-medium">
                        Pending
                    </span>
                </div>
            ))}
        </div>
    )
}

function FrontPhone() {
    return (
        <div className="flex flex-col h-full bg-gray-50 text-[8px]">
            {/* Status bar */}
            <div className="flex justify-between items-center px-4 pt-6 pb-1 text-[7px] text-gray-500">
                <span>11:47</span>
                <span className="flex gap-1">▲ ◉ ▬</span>
            </div>
            {/* Greeting */}
            <div className="px-3 pb-1">
                <p className="font-bold text-gray-800 text-[10px]">Welcome, ALAA!</p>
            </div>
            {/* Manage Nurses card */}
            <div className="mx-3 mb-2 rounded-xl bg-blue-500 text-white p-2 flex gap-2 items-center">
                <div className="flex-1">
                    <p className="font-bold text-[9px]">Manage Nurses</p>
                    <p className="text-[7px] opacity-90 leading-tight">Add, edit, or remove nurse accounts assisting your clinic.</p>
                    <button className="mt-1 bg-white text-blue-600 rounded-full px-2 py-0.5 text-[7px] font-semibold">
                        + Create
                    </button>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-lg">👩‍⚕️</span>
                </div>
            </div>
            {/* Prescriptions */}
            <div className="px-3 mb-1 flex justify-between items-center">
                <p className="font-semibold text-gray-700 text-[9px]">Prescriptions</p>
                <span className="text-blue-500 text-[7px]">See All &rsaquo;</span>
            </div>
            <div className="flex gap-1 px-3 mb-2">
                {[1, 2].map((n) => (
                    <div key={n} className="flex-1 p-1.5 rounded-lg border border-gray-100 bg-white shadow-sm">
                        <p className="font-semibold text-gray-800">John Doe</p>
                        <p className="text-gray-400">Created on 29 January</p>
                        <div className="flex items-center gap-1 mt-0.5">
                            <span className="w-1 h-1 rounded-full bg-green-400 inline-block" />
                            <span className="text-gray-500">Walgreens</span>
                        </div>
                        <span className="text-gray-500">🧪 1 meds</span>
                        <div>
                            <span className={`inline-block mt-0.5 px-1 py-0.5 rounded-full text-[6px] font-medium ${n === 1 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-600"}`}>
                                {n === 1 ? "Pending" : "●"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Messages */}
            <div className="px-3 mb-1 flex justify-between items-center">
                <p className="font-semibold text-gray-700 text-[9px]">Messages <span className="bg-red-500 text-white rounded-full px-1">●</span></p>
                <span className="text-blue-500 text-[7px]">See All &rsaquo;</span>
            </div>
            <div className="mx-3 p-2 rounded-lg border border-gray-100 bg-white shadow-sm">
                <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">John's prescription</p>
                    <p className="text-gray-400">11:35 AM</p>
                </div>
                <p className="text-gray-500">Walgreens</p>
            </div>
            {/* Bottom nav */}
            <div className="mt-auto flex justify-around items-center px-4 py-2 bg-white border-t border-gray-100">
                {["🏠", "💬", "⚙️", "👤"].map((icon, i) => (
                    <div
                        key={i}
                        className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-blue-600" : "text-gray-400"}`}
                    >
                        <span className="text-sm">{icon}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ── Hero Section ───────────────────────────────────────────────────────────

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
                    {/* Back phone — slightly behind and left */}
                    <div className="absolute" style={{ right: 20, top: 60, zIndex: 1, transform: "rotate(-4deg)" }}>
                        <PhoneMockup screenContent={<BackPhone />} />
                    </div>
                    {/* Front phone — in front and right */}
                    <div className="absolute" style={{ right: 0, top: 20, zIndex: 2, transform: "rotate(2deg)" }}>
                        <PhoneMockup screenContent={<FrontPhone />} />
                    </div>
                </div>

            </div>
        </section>
    )
}
