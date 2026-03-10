// Renders a styled phone frame with a screenshot-style UI inside
// imageUrl: optional src for a screenshot; if omitted shows placeholder UI
interface PhoneMockupProps {
    screenContent: React.ReactNode
    className?: string
}

export function PhoneMockup({ screenContent, className = "" }: PhoneMockupProps) {
    return (
        <div
            className={`relative rounded-[2.8rem] border-[3px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden ${className}`}
            style={{ width: 240, minHeight: 500 }}
        >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl z-10" />
            {/* Screen */}
            <div className="w-full h-full bg-white overflow-hidden rounded-[2.5rem]">
                {screenContent}
            </div>
        </div>
    )
}
