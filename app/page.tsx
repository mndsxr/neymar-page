import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Career } from "@/components/career"
import { WorldCupMoment } from "@/components/world-cup-moment"
import { Gallery } from "@/components/gallery"
import { Products } from "@/components/products"
import { Legacy } from "@/components/legacy"
import { Footer } from "@/components/footer"

export default function NeymarJrPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Career />
      <WorldCupMoment />
      <Gallery />
      <Products />
      <Legacy />
      <Footer />
    </main>
  )
}
