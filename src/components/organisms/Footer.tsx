export function Footer() {
    return (
        <footer className="w-full bg-white border-t border-slate-200">
            <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 xl:px-12 py-14 lg:py-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                    {/* Left: logo + description + button */}
                    <div className="flex flex-col gap-6 max-w-md">
                        <img
                            src={`${import.meta.env.BASE_URL}static/logo_chatsrx.png`}
                            alt="ChatsRx"
                            className="h-12 w-auto object-contain object-left"
                        />
                        <p className="text-slate-600 text-base leading-relaxed">
                            ChatsRx is a secure communication platform that connects
                            doctors and pharmacists to simplify prescription
                            management and improve patient care.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center w-fit rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] active:bg-[#0369a1] text-white text-sm font-semibold px-6 py-2.5 transition-colors duration-200"
                        >
                            Download App
                        </a>
                    </div>

                    {/* Right: contact */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-slate-900 font-semibold text-base">Contact</h4>
                        <a
                            href="mailto:tech@3e-tech.com"
                            className="text-slate-600 text-sm hover:text-[#0ea5e9] transition-colors duration-200"
                        >
                            tech@3e-tech.com
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200 py-5 px-6">
                <p className="text-center text-slate-400 text-sm">
                    © All rights reserved. ChatsRx
                </p>
            </div>
        </footer>
    )
}
