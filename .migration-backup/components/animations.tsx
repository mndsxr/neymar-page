"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export function ExitAnimation() {
  const [isExiting, setIsExiting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar após 8 segundos
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 8000)

    // Iniciar saída após 12 segundos
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 12000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-1000 ${
        isExiting
          ? "opacity-0 translate-y-10 scale-50"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 shadow-lg shadow-primary/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Continue explorando</p>
            <p className="text-xs text-muted-foreground">Neymar Jr • O Menino da Vila</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simular carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + 10
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <span className="text-6xl font-bold text-primary">NJR</span>
          <span className="text-6xl font-bold text-foreground">10</span>
        </div>
        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-mono">
          Carregando magia... {progress}%
        </p>
      </div>
    </div>
  )
}