import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProofHero } from "@/components/social-proof-hero"
import { TypographicHero } from "@/components/typographic-hero"
import { About } from "@/components/about"
import { Career } from "@/components/career"
import { WorldCupMoment } from "@/components/world-cup-moment"
import { Gallery } from "@/components/gallery"
import { Products } from "@/components/products"
import { Legacy } from "@/components/legacy"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/animations"
import { Lifestyle } from "@/components/lifestyle"
import { Videos } from "@/components/videos"
import { Quotes } from "@/components/quotes"
import { Idols } from "@/components/idols"
import { CareerMoments } from "@/components/career-moments"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageLoader />
      <Navbar />
      <Hero />
      <SocialProofHero />
      <TypographicHero />
      <About />
      <Career />
      <WorldCupMoment />
      <Gallery />
      <Products />
      <Legacy />
      <Lifestyle />
      <Videos />
      <Quotes />
      <Idols />
      <CareerMoments />
      <Footer />
    </main>
  )
}

export default App
