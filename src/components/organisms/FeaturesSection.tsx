import { useInView } from "@/hooks/useInView"
import { CheckCircle } from "lucide-react"

const features = [
    "Send prescriptions digitally",
    "Manage",
    "Keep all communication organized in one place",
]

export function FeaturesSection() {
    const { ref: sectionRef, inView } = useInView({ threshold: 0.1 })
    const { ref: requestsRef, inView: requestsInView } = useInView({ threshold: 0.1 })
    const { ref: pdfRef, inView: pdfInView } = useInView({ threshold: 0.1 })

    const fadeUp = (inViewState: boolean, delay: number): React.CSSProperties => ({
        transition: inViewState
            ? `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`
            : "none",
        opacity: inViewState ? 1 : 0,
        transform: inViewState ? "translateY(0)" : "translateY(44px)",
    })

    return (
        <section
            id="features"
            className="w-full py-16 lg:py-20 xl:py-28 2xl:py-36 px-4 lg:px-8 xl:px-12"
        >
            <div className="mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col gap-20 lg:gap-28 xl:gap-36">

                {/* ── Block 1: Smart Prescription Management ── */}
                <div
                    ref={sectionRef as React.RefObject<HTMLDivElement>}
                    className="flex flex-col gap-10 lg:gap-14 xl:gap-16"
                >
                    {/* Top heading */}
                    <div className="text-center" style={fadeUp(inView, 0)}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-slate-900 leading-tight">
                            Simplifying Prescriptions and<br className="hidden lg:block" /> Patient Care
                        </h2>
                    </div>

                    {/* Two-column: copy left, image right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
                        <div className="flex flex-col gap-5 lg:gap-6 xl:gap-7">
                            <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900" style={fadeUp(inView, 80)}>
                                Smart Prescription Management
                            </h3>
                            <p className="text-sm lg:text-base xl:text-lg text-slate-600 leading-relaxed" style={fadeUp(inView, 160)}>
                                No more unclear handwriting or endless follow-up calls.
                                ChatsRx lets you:
                            </p>
                            <ul className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
                                {features.map((feature, i) => (
                                    <li key={feature} className="flex items-center gap-3" style={fadeUp(inView, 240 + i * 100)}>
                                        <CheckCircle className="shrink-0 text-primary" fill="currentColor" stroke="white" size={22} />
                                        <span className="text-sm lg:text-base xl:text-lg text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative flex justify-center items-center" style={fadeUp(inView, 200)}>
                            <img
                                src={`${import.meta.env.BASE_URL}static/simplifying_prescription.png`}
                                alt="Prescription Management App"
                                className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-200/60" />

                {/* ── Block 2: Prescription Requests ── */}
                <div
                    ref={requestsRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center"
                >
                    {/* Image left on desktop, top on mobile */}
                    <div className="relative flex justify-center items-center order-2 lg:order-1" style={fadeUp(requestsInView, 80)}>
                        <img
                            src={`${import.meta.env.BASE_URL}static/prescription_request.png`}
                            alt="Prescription Requests"
                            className="w-full max-w-xs lg:max-w-sm lg:max-h-full xl:max-w-md 2xl:max-w-lg object-contain drop-shadow-xl"
                        />
                    </div>

                    {/* Copy right on desktop, below image on mobile */}
                    <div className="flex flex-col gap-5 lg:gap-6 xl:gap-7 order-1 lg:order-2">
                        <h3
                            className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900"
                            style={fadeUp(requestsInView, 0)}
                        >
                            Prescription Requests
                        </h3>
                        <p
                            className="text-sm lg:text-base xl:text-lg text-slate-600 leading-relaxed"
                            style={fadeUp(requestsInView, 120)}
                        >
                            Pharmacies can easily review every incoming prescription,
                            verify availability, and either accept or reject requests
                            instantly, keeping communication clear and organized
                            between both sides.
                        </p>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-200/60" />

                {/* ── Block 3: Prescription PDF & Signature Upload ── */}
                <div
                    ref={pdfRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center"
                >
                    {/* Copy left on desktop, top on mobile */}
                    <div className="flex flex-col gap-5 lg:gap-6 xl:gap-7">
                        <h3
                            className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900"
                            style={fadeUp(pdfInView, 0)}
                        >
                            Prescription PDF &amp; Signature Upload
                        </h3>
                        <p
                            className="text-sm lg:text-base xl:text-lg text-slate-600 leading-relaxed"
                            style={fadeUp(pdfInView, 120)}
                        >
                            Upload signatures and generate official prescription PDFs
                            ready to download, print, or share securely.
                        </p>
                    </div>

                    {/* Image right on desktop, below copy on mobile */}
                    <div
                        className="relative flex justify-center items-center"
                        style={fadeUp(pdfInView, 200)}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}static/prescription_pdf.png`}
                            alt="Prescription PDF and Signature Upload"
                            className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg object-contain drop-shadow-xl"
                        />
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-200/60" />

                {/* ── Block 4: Patient Management ── */}
                <PatientManagementBlock />

            </div>
        </section>
    )
}

function PatientManagementBlock() {
    const { ref, inView } = useInView({ threshold: 0.1 })

    const fadeUp = (inViewState: boolean, delay: number): React.CSSProperties => ({
        transition: inViewState
            ? `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`
            : "none",
        opacity: inViewState ? 1 : 0,
        transform: inViewState ? "translateY(0)" : "translateY(44px)",
    })

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center"
        >
            {/* Image left on desktop, top on mobile */}
            <div
                className="relative flex justify-center items-center order-2 lg:order-1"
                style={fadeUp(inView, 80)}
            >
                <img
                    src={`${import.meta.env.BASE_URL}static/patient_management.png`}
                    alt="Patient Management"
                    className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg object-contain drop-shadow-xl"
                />
            </div>

            {/* Copy right on desktop, above image on mobile */}
            <div className="flex flex-col gap-5 lg:gap-6 xl:gap-7 order-1 lg:order-2">
                <h3
                    className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900"
                    style={fadeUp(inView, 0)}
                >
                    Patient Management
                </h3>
                <p
                    className="text-sm lg:text-base xl:text-lg text-slate-600 leading-relaxed"
                    style={fadeUp(inView, 120)}
                >
                    Access patient history and frequent patient lists to speed up
                    prescription creation and ensure continuity of care.
                </p>
            </div>
        </div>
    )
}
