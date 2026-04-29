"use client"

import { useEffect, useRef, useState } from "react"
import { Activity, AlertTriangle, Trophy, Calendar, Target, Zap, Flame } from "lucide-react"

const BASE = import.meta.env.BASE_URL
const injuries = [
  {
    date: "2014",
    type: "Fratura na vértebra",
    severity: "grave",
    description: "Lesão grave nas costas durante a Copa do Mundo do Brasil que o afastou da competição",
    recovery: "2 meses",
    image: `${BASE}images/ney-04.jpg`,
  },
  {
    date: "2018",
    type: "Fratura no pé direito",
    severity: "grave",
    description: "Lesão grave que o afastou por 3 meses, ameaçando sua participação na Copa do Mundo",
    recovery: "3 meses",
    image: `${BASE}images/ney-05.jpg`,
  },
  {
    date: "2019",
    type: "Lesão no pé esquerdo",
    severity: "grave",
    description: "Fratura no quinto metatarso do pé esquerdo durante jogo do PSG",
    recovery: "4 meses",
    image: `${BASE}images/ney-06.jpg`,
  },
  {
    date: "2021",
    type: "Lesão no tornozelo",
    severity: "moderada",
    description: "Nova lesão no tornozelo direito durante jogo do PSG, causando dor intensa",
    recovery: "6 semanas",
    image: `${BASE}images/ney-07.jpg`,
  },
  {
    date: "2023",
    type: "Lesão no joelho",
    severity: "grave",
    description: "Ruptura do ligamento cruzado anterior durante jogo pela seleção brasileira",
    recovery: "8-9 meses",
    image: `${BASE}images/ney-08.jpg`,
  },
  {
    date: "2024",
    type: "Lesão muscular",
    severity: "leve",
    description: "Lesão no músculo da coxa durante treinamento no Al-Hilal",
    recovery: "3 semanas",
    image: `${BASE}images/ney-09.jpg`,
  },
]

const goals = [
  {
    match: "Brasil 2-1 Croácia",
    date: "2022",
    competition: "Copa do Mundo",
    description: "Golaço na prorrogação que empatou o jogo nos quartos de final",
    type: "Golaço",
    image: `${BASE}images/ney-celebracao.jpg`,
  },
  {
    match: "Barcelona 6-1 PSG",
    date: "2017",
    competition: "Champions League",
    description: "Gol histórico da virada épica no Camp Nou",
    type: "Histórico",
    image: `${BASE}images/ney-barcelona.jpg`,
  },
  {
    match: "Santos 3-1 Fluminense",
    date: "2012",
    competition: "Brasileirão",
    description: "Gol de falta espetacular no Brasileirão",
    type: "Falta",
    image: `${BASE}images/libertadores.jpg`,
  },
  {
    match: "Brasil 6-0 Honduras",
    date: "2016",
    competition: "Jogo Olímpico",
    description: "Gol de falta nos Jogos do Rio",
    type: "Ouro Olímpico",
    image: `${BASE}images/ney-bealsj.jpg`,
  },
]

const performances = [
  {
    match: "Brasil 8-0 Honduras",
    date: "2016",
    competition: "Amistoso",
    highlights: ["2 gols", "1 assistência", "Melhor em campo"],
    rating: 9.5,
    image: `${BASE}images/ney-celebracao.jpg`,
  },
  {
    match: "Barcelona 6-1 PSG",
    date: "2017",
    competition: "Champions League",
    highlights: ["3 gols", "Virada histórica", "Decisivo"],
    rating: 10,
    image: `${BASE}images/ney-barcelona.jpg`,
  },
  {
    match: "Santos 4-0 Boca Juniors",
    date: "2011",
    competition: "Copa Libertadores",
    highlights: ["2 gols", "Final da Libertadores", "Campeão"],
    rating: 9,
    image: `${BASE}images/libertadores.jpg`,
  },
  {
    match: "Brasil 3-0 Áustria",
    date: "2018",
    competition: "Amistoso",
    highlights: ["2 gols", "Show de dribles", "Golaço"],
    rating: 9.5,
    image: `${BASE}images/ney-bealsj-2.jpg`,
  },
  {
    match: "Brasil 2-1 Croácia",
    date: "2022",
    competition: "Copa do Mundo",
    highlights: ["1 gol", "Prorrogação", "Herói nacional"],
    rating: 9,
    image: `${BASE}images/ney-01.jpg`,
  },
  {
    match: "PSG 4-0 Monaco",
    date: "2018",
    competition: "Ligue 1",
    highlights: ["2 gols", "Drible do século", "Golaço"],
    rating: 9.5,
    image: `${BASE}images/ney-psg.jpg`,
  },
  {
    match: "Santos 5-4 Chelsea",
    date: "2012",
    competition: "Copa Libertadores",
    highlights: ["1 gol", "Pênalti decisivo", "Classificação"],
    rating: 8.5,
    image: `${BASE}images/ney-02.jpg`,
  },
  {
    match: "Brasil 5-0 Peru",
    date: "2021",
    competition: "Copa América",
    highlights: ["2 gols", "Assistência", "Classificação"],
    rating: 9,
    image: `${BASE}images/ney-bealsj.jpg`,
  },
]

const milestones = [
  { year: "2009", event: "Debut profissional pelo Santos", icon: "🌟" },
  { year: "2011", event: "Campeão da Libertadores", icon: "🏆" },
  { year: "2013", event: "Transferência record para o Barcelona", icon: "💰" },
  { year: "2015", event: "Campeão da Champions League", icon: "⭐" },
  { year: "2016", event: "Ouro Olímpico no Rio", icon: "🥇" },
  { year: "2017", event: "Maior transferência da história", icon: "📈" },
  { year: "2022", event: "Maior artilheiro da seleção", icon: "⚽" },
  { year: "2023", event: "Transferência para o Al-Hilal", icon: "🌍" },
]

export function CareerMoments() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"lesoes" | "atuações" | "marcos" | "golos">("atuações")
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "grave": return "bg-red-500/20 text-red-400 border-red-400/30"
      case "moderada": return "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
      case "leve": return "bg-green-500/20 text-green-400 border-green-400/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-400/30"
    }
  }

  return (
    <section
      ref={sectionRef}
      id="momentos"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-red-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <Activity className="w-4 h-4" />
            Jornada Completa
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            MOMENTOS DA <span className="text-red-400">CARREIRA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Os momentos que definiram a trajetória do camisa 10 brasileiro.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => setActiveTab("atuações")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "atuações"
                ? "bg-green-400 text-black"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Trophy className="w-4 h-4" />
            Atuações
          </button>
          <button
            onClick={() => setActiveTab("lesoes")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "lesoes"
                ? "bg-red-400 text-white"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            Lesões
          </button>
          <button
            onClick={() => setActiveTab("marcos")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "marcos"
                ? "bg-yellow-400 text-black"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Target className="w-4 h-4" />
            Marcos
          </button>
          <button
            onClick={() => setActiveTab("golos")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "golos"
                ? "bg-blue-400 text-white"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Flame className="w-4 h-4" />
            Golos
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-8">
          {/* Atuações */}
          {activeTab === "atuações" && (
            <div className="grid md:grid-cols-2 gap-6">
              {performances.map((perf, index) => (
                <div
                  key={perf.match}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={perf.image}
                      alt={perf.match}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 rounded-full font-bold flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {perf.rating}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400 text-sm font-mono">{perf.date}</span>
                      <span className="text-blue-400 text-sm font-mono">• {perf.competition}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{perf.match}</h3>
                    <div className="flex flex-wrap gap-2">
                      {perf.highlights.map((h) => (
                        <span key={h} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Lesões */}
          {activeTab === "lesoes" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {injuries.map((injury, index) => (
                <div
                  key={injury.date}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={injury.image}
                      alt={injury.type}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                      {injury.date}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className={`px-2 py-1 rounded-full text-xs border ${getSeverityColor(injury.severity)}`}>
                      {injury.severity.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-1">{injury.type}</h3>
                    <p className="text-gray-300 text-sm mb-2">{injury.description}</p>
                    <p className="text-red-400 text-sm font-mono">⏱ {injury.recovery}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Marcos */}
          {activeTab === "marcos" && (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-green-400 to-blue-400 hidden lg:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center gap-6 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    } ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-secondary/50 rounded-2xl p-6 border border-yellow-400/30">
                        <span className="text-yellow-400 text-2xl font-bold block mb-2">{milestone.year}</span>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{milestone.icon}</span>
                          <h3 className="text-lg font-bold text-white">{milestone.event}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="hidden lg:flex w-8 h-8 rounded-full bg-yellow-400 items-center justify-center flex-shrink-0 z-10">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    
                    {/* Empty Space */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Golos */}
          {activeTab === "golos" && (
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <div
                  key={goal.match}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={goal.image}
                      alt={goal.match}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 bg-blue-400 text-white px-3 py-1 rounded-full font-bold flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      {goal.type}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400 text-sm font-mono">{goal.date}</span>
                      <span className="text-blue-400 text-sm font-mono">• {goal.competition}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{goal.match}</h3>
                    <p className="text-gray-300 text-sm">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}