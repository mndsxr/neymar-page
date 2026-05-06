"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Star, MessageCircle } from "lucide-react"

export function WorldCupMoment() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="mundial"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Momentos que Marcaram a História
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Alguns momentos definem carreiras e redefinem o significado de resiliência
          </p>
        </div>

        {/* Brasil vs Croácia - Copa do Mundo 2014 */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-yellow-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Brasil 1 x 1 Croácia - Copa do Mundo 2022
        
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Brasil e Croácia protagonizaram uma partida tensa e emocionante, marcada por expectativas altas e momentos de frustração. Neymar, pressionado durante boa parte do jogo, foi alvo de críticas por sua atuação discreta e pelas oportunidades desperdiçadas, carregando o peso de quem precisava decidir.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  No entanto, quando o jogo parecia escapar das mãos brasileiras, ele apareceu.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Na prorrogação, com talento e frieza, Neymar chamou a responsabilidade, driblou a defesa croata e marcou um golaço, recolocando o Brasil na disputa e transformando o clima dentro de campo.
                </p>
                <p className="text-yellow-400 text-xl font-semibold leading-relaxed">
                  Em poucos instantes, saiu da posição de contestado para protagonista absoluto, reacendendo a esperança de milhões de torcedores.
                </p>
                <p className="text-slate-400 text-lg italic">
                  De vilão a herói, ele mostrou por que é um dos maiores nomes do futebol brasileiro. E, naquele momento, enquanto a torcida vibrava com seu gol, uma coisa era certa: nesta hora, ninguém odiava Neymar Junior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messi e Neymar - O momento simbólico */}
        <div
          className={`transition-all duration-1000 delay-400 transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                O Legado de Messi para Neymar
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Em um momento tenso à beira do campo, Lionel Messi, sentado no banco, observa atentamente enquanto Neymar Jr. se aproxima. O gesto entre os dois parece simples — um cumprimento, quase um toque de mãos — mas carrega um peso simbólico muito maior.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  A cena transmite respeito, hierarquia e também um tipo de desafio silencioso. Messi, com o olhar firme e experiente de quem já conquistou tudo, parece medir o momento. Neymar, em pé, inclinado levemente, demonstra atenção e talvez até expectativa.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/30">
                <p className="text-slate-300 text-lg mb-4">
                  É como se, naquele instante, Messi dissesse com autoridade e confiança:
                </p>
                <blockquote className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                    "Você quer ser Bola de Ouro? Eu te faço Bola de Ouro."
                  </p>
                </blockquote>
                <p className="text-slate-400 text-lg mt-4 text-center">
                  Uma frase que não soa como promessa fácil, mas como um chamado à responsabilidade — quase um aviso de que o caminho até o topo exige mais do que talento: exige disciplina, entrega e mentalidade vencedora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}