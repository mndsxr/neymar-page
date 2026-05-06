"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Trophy, Zap, Flame } from "lucide-react"

const BASE = import.meta.env.BASE_URL
const videoHighlights = [
  {
    title: "Melhores Dribles",
    description: "Collection of Neymar's most incredible dribbles that left defenders stunned.",
    thumbnail: `${BASE}images/ney-04.jpg`,
    duration: "8:24",
    category: "dribles",
    views: "12M visualizações",
  },
  {
    title: "Gols Marcantes",
    description: "Os golos mais espetaculares da carreira do camisa 10.",
    thumbnail: `${BASE}images/ney-celebracao.jpg`,
    duration: "12:45",
    category: "gols",
    views: "18M visualizações",
  },
  {
    title: "Assistências Magicais",
    description: "Passes que definiram jogos e conquistaram títulos.",
    thumbnail: `${BASE}images/ney-09.jpg`,
    duration: "6:30",
    category: "assistencias",
    views: "8M visualizações",
  },
  {
    title: "Virada Histórica",
    description: "Barcelona 6x1 PSG - A noite mais mágica de Neymar na Champions.",
    thumbnail: `${BASE}images/ney-barcelona.jpg`,
    duration: "15:20",
    category: "historico",
    views: "25M visualizações",
  },
]

const bestGoals = [
  {
    title: "Gol de Placa vs Flamengo",
    year: "2011",
    competition: "Copa do Brasil",
    description: "Drible em cinco adversários e finalização de classe.",
    image: `${BASE}images/ney-04.jpg`,
  },
  {
    title: "Hat-trick vs PSG",
    year: "2017",
    competition: "Champions League",
    description: "Virada histórica que entrou para a história.",
    image: `${BASE}images/ney-psg.jpg`,
  },
  {
    title: "Gol do Ouro Olímpico",
    year: "2016",
    competition: "Jogos Rio 2016",
    description: "Pênalti decisivo para a primeira medalha de ouro.",
    image: `${BASE}images/ney-celebracao.jpg`,
  },
  {
    title: "Gol na Final da Champions",
    year: "2015",
    competition: "UEFA Champions League",
    description: "Gol que selou a tríplice coroa do Barcelona.",
    image: `${BASE}images/ney-barcelona.jpg`,
  },
]

const skills = [
  { name: "Drible", value: 95, color: "bg-yellow-400" },
  { name: "Finalização", value: 92, color: "bg-green-400" },
  { name: "Passe", value: 88, color: "bg-blue-400" },
  { name: "Velocidade", value: 94, color: "bg-red-400" },
  { name: "Criatividade", value: 96, color: "bg-purple-400" },
  { name: "Fôlego", value: 85, color: "bg-orange-400" },
]

export function Videos() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
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
    <section
      ref={sectionRef}
      id="videos"
      className="py-24 md:py-32 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Magia em Movimento
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            COMPILAÇÕES <span className="text-green-400">NEYMAR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Reviva os momentos mais espetaculares da carreira do camisa 10.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videoHighlights.map((video, index) => (
            <div
              key={video.title}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setActiveVideo(index)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-400/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black fill-current ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-mono">{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    video.category === 'historico' ? 'bg-yellow-400 text-black' :
                    video.category === 'gols' ? 'bg-green-400 text-black' :
                    video.category === 'dribles' ? 'bg-blue-400 text-black' :
                    'bg-purple-400 text-white'
                  }`}>
                    {video.category === 'historico' ? '🏆 Histórico' :
                     video.category === 'gols' ? '⚽ Gols' :
                     video.category === 'dribles' ? '💨 Dribles' :
                     '🎯 Assistências'}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-background">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{video.description}</p>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <Play className="w-4 h-4" />
                  {video.views}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best Goals Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h3 className="text-3xl font-bold text-white">Gols Históricos</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestGoals.map((goal, index) => (
              <div
                key={goal.title}
                className="group relative overflow-hidden rounded-2xl"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 rounded-full font-bold">
                    {goal.year}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-yellow-400 text-xs font-mono mb-1">{goal.competition}</p>
                  <h4 className="text-lg font-bold text-white mb-1">{goal.title}</h4>
                  <p className="text-gray-300 text-sm">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Stats */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white">Habilidades</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-secondary/50 rounded-xl p-4 text-center"
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-secondary"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${skill.value * 1.76} 176`}
                      className={skill.color}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {skill.value}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}