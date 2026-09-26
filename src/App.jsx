import { DisciplineStrip } from "./components/DisciplineStrip"
import { Hero } from "./components/Hero"
import { SiteHeader } from "./components/Siteheader"

function App() {

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <DisciplineStrip />
    </main>
  )
}

export default App
