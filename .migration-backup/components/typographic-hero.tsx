"use client"

import { useEffect, useState } from "react"

const phrases = [
  "OUSADIA",
  "ALEGRIA",
  "MAGIA",
  "GENIALIDADE",
  "CARISMA",
]

export function TypographicHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePhrase, setActivePhrase] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Loop de frases
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Label */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-3 border border-primary/30 text-primary font-mono text-sm tracking-[0.3em] rounded-lg">
            FRASES MARCANTES
          </span>
        </div>

        {/* Main Typographic Display */}
        <div className="relative h-32 md:h-40 overflow-hidden mb-8">
          {phrases.map((phrase, index) => (
            <div
              key={phrase}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                index === activePhrase
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-150 translate-y-10"
              }`}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-primary via-yellow-400 to-accent bg-clip-text text-transparent">
                  {phrase}
                </span>
              </h1>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          "Ousadia e Alegria" — A filosofia de jogo que definiu uma geração
        </p>

        {/* Decorative Line */}
        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-transparent to-primary" />
          <div className="w-3 h-3 bg-primary rotate-45" />
          <div className="w-20 h-1 bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            <span className="text-4xl md:text-6xl opacity-10">
              {["★", "♦", "♠", "♣", "♥"][i % 5]}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}