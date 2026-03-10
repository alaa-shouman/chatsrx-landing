// Concentric arc waves anchored to the top-right corner, matching the screenshot
export function BackgroundWave() {
    const arcs = [1, 2, 3, 4, 5]
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg
                className="absolute right-0 top-0 w-[48%] h-auto"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMaxYMin meet"
            >
                {arcs.map((i) => (
                    <path
                        key={i}
                        d={`M ${500} ${0} A ${i * 90} ${i * 90} 0 0 0 ${500 - i * 90} ${0}`}
                        stroke="rgba(180,190,255,0.45)"
                        strokeWidth="1.2"
                        fill="none"
                        style={{
                            animation: `arc-pulse 3.5s ease-in-out ${i * 0.25}s infinite`,
                        }}
                    />
                ))}
            </svg>

            <style>{`
        @keyframes arc-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 0.15; }
        }
      `}</style>
        </div>
    )
}

