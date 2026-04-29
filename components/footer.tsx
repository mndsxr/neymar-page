"use client"

import Link from "next/link"
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/neymarjr",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/naborjr",
    icon: Twitter,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@naborjr",
    icon: Youtube,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/neymarjr",
    icon: Facebook,
  },
]

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#carreira", label: "Carreira" },
  { href: "#galeria", label: "Galeria" },
  { href: "#produtos", label: "Produtos" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="#inicio" className="inline-block">
              <span className="text-3xl font-bold tracking-tight">
                NJR<span className="text-primary">10</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Site tributo ao maior craque brasileiro de sua geracao. 
              Neymar Junior, o menino da Vila que encantou o mundo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-4">
              Navegacao
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-4">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 flex items-center gap-2">
            <span>2024 NJR10 · site feito por fa</span>
            <span className="text-muted-foreground/40">|</span>
            <a 
              href="https://instagram.com/mndsxr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              feito por Diogo Mendes <Instagram size={12} /> @mndsxr
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Termos
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
