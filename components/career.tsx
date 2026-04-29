"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Star, Goal, Loader2 } from "lucide-react"

const careerHighlights = [
  {
    year: "2009-2013",
    team: "Santos FC",
    icon: Trophy,
    achievements: [
      "Campeonato Brasileiro (2010)",
      "Copa Libertadores (2011)",
      "Copa do Brasil (2010)",
      "Melhor jogador da Libertadores 2011",
    ],
    goals: "136 gols em 225 jogos",
  },
  {
    year: "2013-2017",
    team: "FC Barcelona",
    icon: Star,
    achievements: [
      "UEFA Champions League (2015)",
      "2x La Liga (2015, 2016)",
      "3x Copa del Rey",
      "Parte do lendario trio MSN",
    ],
    goals: "105 gols em 186 jogos",
  },
  {
    year: "2017-2023",
    team: "Paris Saint-Germain",
    icon: Goal,
    achievements: [
      "5x Ligue 1",
      "3x Copa da Franca",
      "Vice da Champions League (2020)",
      "Maior artilheiro da historia do clube",
    ],
    goals: "118 gols em 173 jogos",
  },
  {
    year: "2023-Atual",
    team: "Al-Hilal",
    icon: Trophy,
    achievements: [
      "Saudi Pro League (2024)",
      "Novo capitulo na carreira",
      "Embaixador do futebol no Oriente Medio",
    ],
    goals: "Escrevendo historia...",
  },
]

const importantGoals = [
  {
    title: "Gol de Placa vs Flamengo",
    year: "2011",
    description: "Drible em cinco adversarios e finalizacao de classe. Eleito o gol mais bonito do ano.",
  },
  {
    title: "Hat-trick na Champions",
    year: "2017",
    description: "Virada historica do Barcelona sobre o PSG por 6x1, com tres gols de Neymar.",
  },
  {
    title: "Gol do Ouro Olimpico",
    year: "2016",
    description: "Penalti decisivo que deu ao Brasil a primeira medalha de ouro olimpica no futebol.",
  },
  {
    title: "Gol vs Juventus",
    year: "2015",
    description: "Gol decisivo na final da Champions League, selando a triplice coroa do Barcelona.",
  },
]

export function Career() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="carreira" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Trajetoria
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            CARREIRA <span className="text-primary">BRILHANTE</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {careerHighlights.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={item.year}
                  className={`relative grid md:grid-cols-2 gap-8 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                    <Icon size={16} className="text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                      <p className="text-primary font-mono text-sm mb-2">
                        {item.year}
                      </p>
                      <h3 className="text-2xl font-bold mb-4">{item.team}</h3>
                      <ul
                        className={`space-y-2 text-muted-foreground ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className={`flex items-center gap-2 ${
                              isLeft ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <Trophy size={14} className="text-primary shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm font-semibold text-primary">
                        {item.goals}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Important Goals Section */}
        <div className="mt-24">
          <h3
            className={`text-3xl font-bold text-center mb-12 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Gols <span className="text-primary">Memoraveis</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantGoals.map((goal, index) => (
              <div
                key={goal.title}
                className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <p className="text-primary font-mono text-sm mb-2">{goal.year}</p>
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {goal.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* World Cup 2026 Teaser */}
        <div
          className={`mt-24 text-center transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-full border border-primary/30">
            <Loader2 className="animate-spin text-primary" size={24} />
            <p className="text-lg md:text-xl font-bold">
              <span className="text-primary">Campeao da Copa do Mundo 2026</span>
              <span className="text-muted-foreground ml-2">carregando...</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
