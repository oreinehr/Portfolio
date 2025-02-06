'use client'; // Marca este componente como Client Component



import { Footer } from "./components/ui/footer"
import { Header } from "./components/ui/header"
import { ProjectGrid } from "./components/ui/project-grid"
import { AIImageGrid } from "./components/ui/ai-image-grid"
import { Button } from "./components/ui/button"
import { ArrowDown } from "lucide-react"
import { FadeIn } from "./components/animations/fade-in"
import { SlideIn } from "./components/animations/slide-in"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-start justify-center px-4 pt-20 md:px-2 lg:px-8">
        <SlideIn>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
            Creative Developer
            <span className="block">for digital</span>
            <span className="block">
              experiences<span className="text-red-700">®</span>
            </span>
          </h1>
        </SlideIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Crafting immersive digital experiences through code and design. Based in Brazil, working worldwide.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <Button
            size="lg"
            variant=""
            className="mt-12 text-muted-foreground transition-transform hover:scale-105"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </FadeIn>

      </section>

      {/* Projects Section */}
      <section id="work" className="px-4 py-20 md:px-8 lg:px-8">
        <ProjectGrid 
        />
      </section>

      {/* AI Image Grid Section */}
      <section id="ai-art" className="px-4 py-20 md:px-8 lg:px-8">
        <AIImageGrid />
      </section>

      <Footer />
    </main>
  )
}

