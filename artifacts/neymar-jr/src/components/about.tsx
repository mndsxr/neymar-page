"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
      id="sobre"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/ney-bealsj-2.jpg`}
                alt="Neymar Jr em campo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-yellow-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">
              Quem e
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              NEYMAR <span className="text-yellow-400">JR?</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Neymar da Silva Santos Junior</strong>, 
                nascido em 5 de fevereiro de 1992 em Mogi das Cruzes, Sao Paulo, e um dos 
                maiores talentos que o futebol brasileiro ja produziu. Conhecido por seus 
                dribles desconcertantes, visao de jogo privilegiada e habilidade incomparavel 
                com a bola nos pes.
              </p>

              <p>
                Revelado pelo <span className="text-green-400 font-bold">Santos FC</span>, onde conquistou 
                a Libertadores em 2011 com apenas 19 anos, Neymar rapidamente se tornou o 
                principal jogador do Brasil. Sua transferencia para o Barcelona em 2013 o 
                colocou ao lado de Messi e Suarez, formando o lendario trio MSN.
              </p>

              <p>
                Em 2017, fez historia ao se tornar a transferencia mais cara do futebol mundial, 
                indo para o <span className="text-blue-400 font-bold">Paris Saint-Germain</span> por 222 
                milhoes de euros. Atualmente defende o Al-Hilal da Arabia Saudita, onde continua 
                sua trajetoria brilhante.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-card rounded-lg border border-yellow-400/30">
                <p className="text-2xl font-bold text-yellow-400">79</p>
                <p className="text-sm text-muted-foreground">Gols pela Selecao</p>
              </div>
              <div className="px-6 py-3 bg-card rounded-lg border border-green-400/30">
                <p className="text-2xl font-bold text-green-400">128</p>
                <p className="text-sm text-muted-foreground">Jogos pelo Brasil</p>
              </div>
              <div className="px-6 py-3 bg-card rounded-lg border border-blue-400/30">
                <p className="text-2xl font-bold text-blue-400">2x</p>
                <p className="text-sm text-muted-foreground">Melhor do Mundo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
