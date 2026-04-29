"use client"


import { Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Minimal Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground/70 text-center md:text-left">
            © {currentYear} NJR<span className="text-primary">10</span>. Todos os direitos reservados.
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground/50 hover:text-primary transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground/50 hover:text-primary transition-colors"
            >
              Termos
            </a>
            <a 
              href="https://instagram.com/mndsxr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/50 hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Instagram size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
