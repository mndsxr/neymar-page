"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, MessageCircle, Heart, Star } from "lucide-react"

const famousQuotes = [
  {
    quote: "Ousadia e Alegria",
    context: "Lema pessoal que define seu estilo de jogo",
    year: "2013-Presente",
    icon: "⚡",
    color: "yellow",
  },
  {
    quote: "Eu não sou melhor que ninguém, mas trabalho mais que todos",
    context: "Declaração sobre sua ética de trabalho",
    year: "2015",
    icon: "💪",
    color: "green",
  },
  {
    quote: "O mais importante é a felicidade de jogar futebol",
    context: "Sobre seu amor pelo esporte",
    year: "2018",
    icon: "😊",
    color: "blue",
  },
  {
    quote: "Quero ser lembrado como alguém que fez história no futebol",
    context: "Sobre seu legado",
    year: "2020",
    icon: "🏆",
    color: "purple",
  },
  {
    quote: "Sem o Santos não existiria o Neymar",
    context: "Homenagem ao clube que o revelou",
    year: "2022",
    icon: "❤️",
    color: "red",
  },
  {
    quote: "O Brasil tem muitos talentos, eu só tento dar o melhor",
    context: "Sobre representar a seleção",
    year: "2016",
    icon: "🇧🇷",
    color: "green",
  },
]

const socialQuotes = [
  {
    platform: "Instagram",
    posts: "2.500+",
    followers: "215M",
    icon: "📸",
  },
  {
    platform: "Twitter/X",
    posts: "8.000+",
    followers: "45M",
    icon: "🐦",
  },
  {
    platform: "TikTok",
    videos: "500+",
    followers: "30M",
    icon: "🎵",
  },
]

export function Quotes() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeQuote, setActiveQuote] = useState<number | null>(null)
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
      case "yellow": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/30"
      case "green": return "text-green-400 bg-green-400/10 border-green-400/30"
      case "blue": return "text-blue-400 bg-blue-400/10 border-blue-400/30"
      case "purple": return "text-purple-400 bg-purple-400/10 border-purple-400/30"
      case "red": return "text-red-400 bg-red-400/10 border-red-400/30"
      default: return "text-white bg-white/10 border-white/30"
    }
  }

  return (
    <section
      ref={sectionRef}
      id="frases"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Palavras Marcantes
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            FRASES <span className="text-blue-400">ICÔNICAS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            As palavras que definem a filosofia de vida e carreira do camisa 10.
          </p>
        </div>

        {/* Main Quote - Ousadia e Alegria */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400/20 via-background to-blue-400/20 p-12 md:p-16 text-center border border-yellow-400/30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400" />
            
            <Quote className="w-16 h-16 text-yellow-400 mx-auto mb-6 opacity-50" />
            
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              "Ousadia e Alegria"
            </h3>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O lema que acompanha Neymar em cada drible, cada gol, cada celebração. 
              A filosofia que transforma o futebol em arte.
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-mono">
                2013 - Presente
              </span>
              <span className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full text-sm font-mono">
                ✨ Lema Pessoal
              </span>
            </div>
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {famousQuotes.map((item, index) => (
            <div
              key={item.quote}
              className={`group relative overflow-hidden rounded-2xl p-6 border transition-all duration-700 cursor-pointer hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${getColorClass(item.color)}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => setActiveQuote(activeQuote === index ? null : index)}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <Quote className="w-6 h-6 mb-3 opacity-50" />
                  <p className="text-lg font-bold mb-3">"{item.quote}"</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.context}</p>
                  <span className="text-xs font-mono opacity-70">{item.year}</span>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Social Media Stats */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Heart className="w-8 h-8 text-red-400" />
            <h3 className="text-2xl font-bold text-white">Presença Digital</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {socialQuotes.map((social, index) => (
              <div
                key={social.platform}
                className="bg-secondary/50 rounded-2xl p-6 text-center transition-all duration-700 hover:bg-secondary/80"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <span className="text-4xl mb-4 block">{social.icon}</span>
                <h4 className="text-xl font-bold text-white mb-2">{social.platform}</h4>
                <div className="space-y-1">
                  <p className="text-green-400 font-mono">
                    {social.followers} seguidores
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {social.posts} posts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}