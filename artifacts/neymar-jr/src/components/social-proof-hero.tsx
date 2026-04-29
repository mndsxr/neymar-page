"use client"

import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"

const BASE = import.meta.env.BASE_URL
const testimonials = [
  {
    id: 1,
    quote: "Neymar é o jogador mais habilidoso que já vi. Ele faz coisas que outros apenas sonham.",
    author: "Lionel Messi",
    role: "Artilheiro Histórico",
    avatar: `${BASE}images/ney-bealsj.jpg`,
  },
  {
    id: 2,
    quote: "Um gênio do futebol moderno. Sua visão de jogo é incomparável.",
    author: "Xavi Hernández",
    role: "Meia Legendary",
    avatar: `${BASE}images/ney-03.jpg`,
  },
  {
    id: 3,
    quote: "Quando Neymar joga, o futebol se transforma em arte.",
    author: "Ronaldinho",
    idolo: "Ídolo",
    avatar: `${BASE}images/ney-07.jpg`,
  },
]

const stats = [
  { value: "400+", label: "Gols na Carreira", icon: Star },
  { value: "30+", label: "Títulos Coletivos", icon: Star },
  { value: "100M+", label: "Seguidores no Instagram", icon: Star },
  { value: "10M+", label: "Visualizações no YouTube", icon: Star },
  
  
]

export function SocialProofHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Loop de testemunhos
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Section Label */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-mono text-sm tracking-[0.2em] rounded-full">
            PROVA SOCIAL
          </span>
        </div>

        {/* Main Title */}
        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-foreground">O que dizem os </span>
          <span className="text-primary">maiores</span>
        </h2>

        {/* Testimonials Carousel */}
        <div
          className={`relative mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            
            <div className="relative h-48 md:h-32">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === activeTestimonial
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <p className="text-xl md:text-2xl text-foreground italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role || testimonial.idolo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl transition-all duration-700 hover:border-primary/50 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
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