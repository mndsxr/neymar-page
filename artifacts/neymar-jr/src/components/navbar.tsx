"use client"

import { useState, useEffect } from "react"

import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Quem e Neymar?" },
  { href: "#carreira", label: "Carreira" },
  { href: "#galeria", label: "Galeria" },
  { href: "#produtos", label: "Produtos" },
  { href: "#legado", label: "Legado" },
  { href: "#estilo-de-vida", label: "Estilo" },
  { href: "#videos", label: "Videos" },
  { href: "#frases", label: "Frases" },
  { href: "#idolos", label: "Idolos" },
  { href: "#momentos", label: "Momentos" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className="text-xl md:text-2xl font-bold tracking-tight text-primary animate-in fade-in slide-in-from-left duration-700"
          >
            NJR<span className="text-foreground">10</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 animate-in fade-in slide-in-from-top duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
