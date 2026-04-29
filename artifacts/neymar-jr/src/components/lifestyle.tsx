"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Scissors, Heart } from "lucide-react"

const BASE = import.meta.env.BASE_URL
const hairstyles = [
  {
    name: "Corte Moicano",
    period: "2010-2012",
    description: "O visual que marcou sua chegada ao Santos e chamou atenção do mundo.",
    image: `${BASE}images/ney-04.jpg`,
  },
  {
    name: "Corte Social",
    period: "2013-2015",
    description: "O estilo mais comportado durante a passagem pelo Barcelona.",
    image: `${BASE}images/ney-barcelona.jpg`,
  },
  {
    name: "Corte Rastafári",
    period: "2016-2018",
    description: "Visual que simbolizava sua conexão com a cultura e espiritualidade.",
    image: `${BASE}images/ney-06.jpg`,
  },
  {
    name: "Corte Low Fade",
    period: "2019-Atual",
    description: "O corte moderno e elegante que usa atualmente, com desenhos.",
    image: `${BASE}images/ney-09.jpg`,
  },
]

const tattoos = [
  {
    name: "Logo NJR",
    location: "Costas",
    meaning: "Sua marca registrada e símbolo de identidade pessoal.",
    image: `${BASE}images/ney-celebracao.jpg`,
  },
  {
    name: "Pai e Mãe",
    location: "Braço direito",
    meaning: "Homenagem aos seus maiores incentivadores e apoio incondicional.",
    image: `${BASE}images/ney-01.jpg`,
  },
  {
    name: "Filho Neymar Jr",
    location: "Pescoço",
    meaning: "Amor eterno ao seu primogênito, sua maior inspiração.",
    image: `${BASE}images/ney-07.jpg`,
  },
  {
    name: "Data 05/02/1992",
    location: "Pulso",
    meaning: "Data do seu nascimento, marco inicial da sua jornada.",
    image: `${BASE}images/ney-03.jpg`,
  },
]

const fashionItems = [
  {
    brand: "Nike",
    item: "Linha Neymar Jr",
    description: "Coleção exclusiva de chuteiras e uniformes personalizados.",
  },
  {
    brand: "Puma",
    item: "NEYMAR JR 10",
    description: "Linha de tênis e roupas com seu nome e número.",
  },
  {
    brand: "Dolce & Gabbana",
    item: "Parceria Fashion",
    description: "Colaborações em campanhas internacionais de alto padrão.",
  },
]

export function Lifestyle() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"cortes" | "tatuagens" | "moda">("cortes")
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
      id="estilo-de-vida"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-yellow-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Estilo & Identidade
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            LIFESTYLE <span className="text-yellow-400">NEYMAR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Além de dentro de campo, Neymar também define tendências fora dele. 
            Descubra os estilos que marcaram sua jornada.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => setActiveTab("cortes")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "cortes"
                ? "bg-yellow-400 text-black"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Scissors className="w-4 h-4" />
            Cortes de Cabelo
          </button>
          <button
            onClick={() => setActiveTab("tatuagens")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "tatuagens"
                ? "bg-yellow-400 text-black"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Heart className="w-4 h-4" />
            Tatuagens
          </button>
          <button
            onClick={() => setActiveTab("moda")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "moda"
                ? "bg-yellow-400 text-black"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Moda & Estilo
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-8">
          {activeTab === "cortes" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hairstyles.map((style, index) => (
                <div
                  key={style.name}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-yellow-400 text-sm font-mono mb-1">{style.period}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{style.name}</h3>
                    <p className="text-gray-300 text-sm">{style.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tatuagens" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tattoos.map((tattoo, index) => (
                <div
                  key={tattoo.name}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={tattoo.image}
                      alt={tattoo.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-yellow-400 text-sm font-mono mb-1">{tattoo.location}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{tattoo.name}</h3>
                    <p className="text-gray-300 text-sm">{tattoo.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "moda" && (
            <div className="grid md:grid-cols-3 gap-6">
              {fashionItems.map((item, index) => (
                <div
                  key={item.item}
                  className={`bg-secondary/50 rounded-2xl p-8 text-center transition-all duration-700 hover:bg-secondary/80 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.item}</h3>
                  <p className="text-yellow-400 text-sm font-mono mb-3">{item.brand}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}