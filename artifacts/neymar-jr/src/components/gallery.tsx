"use client"

import { useEffect, useRef, useState } from "react"

const BASE = import.meta.env.BASE_URL
const galleryImages = [
  {
    src: `${BASE}images/ney-01.jpg`,
    alt: "Neymar comemorando gol",
    size: "large",
  },
  {
    src: `${BASE}images/ney-04.jpg`,
    alt: "Neymar em acao",
    size: "small",
  },
  {
    src: `${BASE}images/ney-barcelona.jpg`,
    alt: "Neymar driblando",
    size: "small",
  },
  {
    src: `${BASE}images/ney-02.jpg`,
    alt: "Neymar campeao mundial",
    size: "medium",
  },
  {
    src: `${BASE}images/ney-05.jpg`,
    alt: "Neymar no estadio",
    size: "small",
  },
  {
    src: `${BASE}images/ney-psg.jpg`,
    alt: "Neymar em campo",
    size: "large",
  },
  {
    src: `${BASE}images/libertadores.jpg`,
    alt: "Neymar erguendo a Libertadores",
    size: "medium",
  },
  {
    src: `${BASE}images/ney-06.jpg`,
    alt: "Neymar no vestiario",
    size: "small",
  },
]

export function Gallery() {
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
    <section
      ref={sectionRef}
      id="galeria"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Momentos
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            GALERIA <span className="text-blue-400">DE FOTOS</span>
          </h2>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => {
            const gridClass =
              image.size === "large"
                ? "col-span-2 row-span-2"
                : image.size === "medium"
                ? "col-span-2 row-span-1"
                : "col-span-1 row-span-1"

            return (
              <div
                key={index}
                className={`${gridClass} relative group overflow-hidden rounded-xl transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-foreground">
                    {image.alt}
                  </p>
                </div>
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
