import { Navbar } from "@/components/organisms/Navbar"
import { HeroSection } from "@/components/organisms/HeroSection"
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection"
import { BackgroundWave } from "@/components/atoms/BackgroundWave"

function App() {
  return (
    <div
      className="min-h-svh"
      style={{ background: "linear-gradient(160deg, #eef0fa 0%, #e8eef8 50%, #f0f4fb 100%)" }}
    >
      {/* ── Hero area: background + navbar + home section ── */}
      <div className="relative">
        <BackgroundWave />

        <div className="relative z-10 pt-6">
          <Navbar />
        </div>

        <HeroSection />
      </div>

      {/* ── Remaining sections ── */}
      <main >
        <HowItWorksSection />
        <section id="features" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Features section coming soon</p>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Contact section coming soon</p>
        </section>
      </main>
    </div>
  )
}

export default App
