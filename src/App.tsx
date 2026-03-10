import { Navbar } from "@/components/organisms/Navbar"

function App() {
  return (
    <div className="min-h-svh" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f0f7ff 50%, #f8fafc 100%)' }}>
      <Navbar />

      {/* Placeholder sections for scroll-active detection */}
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Home section coming soon</p>
        </section>
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
