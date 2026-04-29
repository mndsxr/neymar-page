"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Heart, User, Award } from "lucide-react"

const BASE = import.meta.env.BASE_URL
const childhoodIdols = [
  {
    name: "Pelé",
    role: "Rei do Futebol",
    influence: "O maior de todos os tempos",
    quote: "Ele é o melhor jogador do mundo depois de Pelé",
    image: `${BASE}images/ney-08.jpg`,
    color: "yellow",
  },
  {
    name: "Robinho",
    role: "Ídolo do Santos",
    influence: "Inspiração na Vila",
    quote: "Eu cresci querendo jogar como Robinho",
    image: `${BASE}images/ney-09.jpg`,
    color: "blue",
  },
  {
    name: "Ronaldinho Gaúcho",
    role: "Mágico do Futebol",
    influence: "O estilo que inspirou",
    quote: "Ele me ensinou que o futebol é alegria",
    image: `${BASE}images/ney-07.jpg`,
    color: "green",
  },
  {
    name: "Cristiano Ronaldo",
    role: "CR7",
    influence: "Referência de profissionalismo",
    quote: "Um exemplo de dedicação e trabalho",
    image: `${BASE}images/ney-bealsj.jpg`,
    color: "red",
  },
]

const inspirations = [
  {
    title: "A Alegria de Jogar",
    description: "Aprendi com Ronaldinho que o futebol deve ser divertido",
    icon: "😊",
  },
  {
    title: "A Técnica",
    description: "Robinho me mostrou que a habilidade é a melhor arma",
    icon: "⚽",
  },
  {
    title: "A Mentalidade Vencedora",
    description: "CR7 me ensinou a importância da dedicação diária",
    icon: "💪",
  },
  {
    title: "O Legado",
    description: "Pelé me inspirou a querer deixar minha marca no esporte",
    icon: "👑",
  },
]

const familyInfluence = [
  {
    name: "Neymar Pai",
    role: "Mentor e Técnico",
    contribution: "Responsável por moldar sua técnica desde os 4 anos",
    image: `${BASE}images/ney-01.jpg`,
  },
  {
    name: "Neymar Mãe",
    role: "Apoio Incondicional",
    contribution: "Sempre presente nos momentos mais importantes",
    image: `${BASE}images/ney-02.jpg`,
  },
]

export function Idols() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIdol, setActiveIdol] = useState<number | null>(null)
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

  const getColorClass = (color: string) => {
    switch (color) {
      case "yellow": return "border-yellow-400 hover:shadow-yellow-400/30"
      case "green": return "border-green-400 hover:shadow-green-400/30"
      case "blue": return "border-blue-400 hover:shadow-blue-400/30"
      case "red": return "border-red-400 hover:shadow-red-400/30"
      default: return "border-white hover:shadow-white/30"
    }
  }

  return (
    <section
      ref={sectionRef}
      id="idolos"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-purple-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Quem me Inspirou
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            ÍDOLOS DE <span className="text-purple-400">INFÂNCIA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            As pessoas que moldaram a carreira e inspiraram o estilo de jogo do camisa 10.
          </p>
        </div>

        {/* Idols Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {childhoodIdols.map((idol, index) => (
            <div
              key={idol.name}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-700 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${getColorClass(idol.color)}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setActiveIdol(activeIdol === index ? null : index)}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={idol.image}
                  alt={idol.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-purple-400 text-sm font-mono mb-1">{idol.role}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{idol.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{idol.influence}</p>
                
                {/* Quote on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm italic text-gray-400">"{idol.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirations */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-red-400" />
            <h3 className="text-3xl font-bold text-white">O que Aprendi</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirations.map((insp, index) => (
              <div
                key={insp.title}
                className="bg-background/50 rounded-2xl p-6 border border-secondary hover:border-purple-400/50 transition-all duration-300"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <span className="text-4xl mb-4 block">{insp.icon}</span>
                <h4 className="text-lg font-bold text-white mb-2">{insp.title}</h4>
                <p className="text-muted-foreground text-sm">{insp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Family Influence */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <User className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">Influência Familiar</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {familyInfluence.map((member, index) => (
              <div
                key={member.name}
                className="flex items-center gap-6 bg-secondary/30 rounded-2xl p-6"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-green-400 text-sm font-mono mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}