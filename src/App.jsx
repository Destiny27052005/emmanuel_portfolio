import { DisciplineStrip } from "./components/DisciplineStrip"
import { Hero } from "./components/Hero"
import { SelectedWork } from "./components/SelectedWork"
import { Services } from "./components/Services"
import { SiteHeader } from "./components/Siteheader"

function App() {

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <DisciplineStrip />
      <SelectedWork />
      <Services />
    </main>
  )
}

export default App
