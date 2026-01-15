import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { GeminiAudit } from './components/GeminiAudit';
import { ProblemSection } from './components/ProblemSection';
import { Process } from './components/Process';
import { Comparison } from './components/Comparison';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { MessageCircle, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Comparison />
        
        {/* Interactive Feature */}
        <GeminiAudit />
        
        <div id="processo">
          <Process />
        </div>

        {/* Guarantee / Trust Section */}
        <section className="py-16 px-6 bg-slate-900/50 border-y border-slate-800">
           <div className="max-w-4xl mx-auto text-center">
              <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Garantia Altmakers</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Seu projeto entregue no prazo ou devolvemos parte do valor. 
                Além disso, oferecemos <strong>30 dias de suporte gratuito</strong> para qualquer ajuste técnico pós-lançamento.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 font-mono">
                <span>[ CONTRATO DE SERVIÇO ]</span>
                <span>[ NOTA FISCAL ]</span>
                <span>[ CÓDIGO FONTE SEU ]</span>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-600/5 z-0"></div>
          <div className="max-w-4xl mx-auto relative z-10">
             <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
               Você tem duas opções agora:
             </h2>
             <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
                <div className="p-6 rounded-xl border border-red-900/30 bg-red-900/10 opacity-75">
                  <h3 className="font-bold text-red-400 mb-2">Opção 1: Continuar Igual</h3>
                  <p className="text-slate-400 text-sm">Continuar perdendo leads, brigando por preço e vendo concorrentes com sites melhores dominarem o mercado.</p>
                </div>
                <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-900/10">
                  <h3 className="font-bold text-emerald-400 mb-2">Opção 2: Altmakers</h3>
                  <p className="text-slate-300 text-sm">Investir em um ativo digital profissional que trabalha 24/7 para colocar dinheiro no seu caixa.</p>
                </div>
             </div>
             
             <a 
               href="https://wa.me/5511999999999?text=Olá, quero um orçamento para o meu projeto." 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
             >
               <MessageCircle className="text-emerald-600" />
               Solicitar Orçamento Agora
             </a>
             <p className="mt-6 text-slate-500 text-sm">Resposta em até 24 horas úteis.</p>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Action Button */}
      <a 
        href="https://wa.me/5511999999999?text=Olá, vim pelo site."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
}

export default App;