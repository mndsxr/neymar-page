"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, ArrowRight } from "lucide-react"

export function Legacy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="legado"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-purple-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            O Futuro
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            O <span className="text-purple-400">LEGADO</span> CONTINUA
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lamine Yamal Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800&auto=format&fit=crop"
                  alt="Lamine Yamal - O Novo Regente"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-card border border-primary/50 rounded-xl p-6 shadow-2xl shadow-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="text-primary" size={20} />
                  <p className="text-sm font-mono text-primary">NOVO REGENTE</p>
                </div>
                <p className="text-2xl font-bold">Lamine Yamal</p>
                <p className="text-sm text-muted-foreground mt-1">
                  A nova geracao
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              O Novo <span className="text-primary">Regente</span> do Futebol
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Assim como Neymar foi o herdeiro de Ronaldinho e Kaka, uma nova 
                estrela surge no horizonte do futebol mundial. <strong className="text-foreground">Lamine Yamal</strong>, 
                o jovem prodigio espanhol do Barcelona, vem sendo apontado como o 
                futuro do esporte.
              </p>

              <p>
                Com apenas 17 anos, Yamal ja demonstra habilidades que lembram os 
                melhores momentos de Neymar: dribles desconcertantes, visao de jogo 
                privilegiada e uma maturidade tatica impressionante para sua idade.
              </p>

              <p>
                O proprio Neymar ja elogiou publicamente o talento do jovem espanhol, 
                reconhecendo nele as caracteristicas de um futuro <span className="text-primary">Ballon {"d'Or"}</span>. 
                A tocha esta sendo passada para uma nova geracao de craques que 
                continua a tradicao do futebol arte.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground">
                {"\"Lamine Yamal e especial. Ele tem tudo para ser o melhor do mundo.\""}
                <footer className="mt-2 text-sm text-muted-foreground not-italic">
                  — Neymar Jr., 2024
                </footer>
              </blockquote>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-medium"
              >
                Conhecer mais sobre a nova geracao
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Legacy Stats */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { label: "Anos de Carreira", value: "15+" },
            { label: "Clubes Defendidos", value: "4" },
            { label: "Titulos Conquistados", value: "30+" },
            { label: "Geracao Inspirada", value: "1" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
