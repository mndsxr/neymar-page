"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingBag, Star } from "lucide-react"

const products = [
  {
    name: "Camisa Santos 2011",
    description: "Replica da camisa historica da Libertadores",
    price: "R$ 299,90",
    image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=400&auto=format&fit=crop",
    badge: "Classico",
  },
  {
    name: "Camisa Brasil",
    description: "Camisa oficial da Selecao Brasileira",
    price: "R$ 349,90",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400&auto=format&fit=crop",
    badge: "Mais Vendido",
  },
  {
    name: "Chuteira NJR",
    description: "Modelo exclusivo assinado por Neymar",
    price: "R$ 899,90",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
    badge: "Exclusivo",
  },
  {
    name: "Bone NJR10",
    description: "Bone oficial da colecao Neymar Jr",
    price: "R$ 149,90",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=400&auto=format&fit=crop",
    badge: null,
  },
  {
    name: "Camisa PSG Neymar",
    description: "Camisa oficial do Paris Saint-Germain",
    price: "R$ 449,90",
    image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=400&auto=format&fit=crop",
    badge: "Limitado",
  },
  {
    name: "Poster Autografado",
    description: "Poster oficial com autografo original",
    price: "R$ 799,90",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop",
    badge: "Raro",
  },
]

export function Products() {
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
    <section ref={sectionRef} id="produtos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-4">
              Loja Oficial
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              PRODUTOS <span className="text-primary">NJR</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Ver todos os produtos
            <ShoppingBag size={18} />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {product.badge}
                  </div>
                )}
                {/* Quick Add Button */}
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  <ShoppingBag size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < 4 ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-primary">{product.price}</p>
                  <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
