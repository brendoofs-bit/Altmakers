import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { ArrowRight, Star, Zap } from 'lucide-react';
import { VideoShowcase } from './VideoShowcase';

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative pt-36 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 text-sm text-emerald-400 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold tracking-wide uppercase text-xs">Vagas abertas para novos projetos</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white tracking-tight">
            Landing Pages & SaaS <br />
            Que <span className="gradient-text">Imprimem Dinheiro.</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Pare de jogar dinheiro fora com sites genéricos. Criamos <strong>Ativos Digitais</strong> (LPs de alta conversão e Micro SaaS) desenhados com um único objetivo: colocar lucro no seu bolso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <WhatsAppButton 
              text="Solicitar Análise Gratuita" 
              className="w-full sm:w-auto text-lg px-10 py-4 shadow-emerald-500/25 shadow-xl" 
            />
            <a href="#servicos" className="text-white hover:text-emerald-400 flex items-center gap-2 px-8 py-4 transition-colors font-medium border border-slate-700 hover:border-emerald-500/50 rounded-lg bg-slate-900/50 backdrop-blur-sm">
              Ver Soluções <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex justify-center gap-8 text-slate-500 text-sm font-medium uppercase tracking-widest">
            <div className="flex items-center gap-2"><Star size={14} className="text-yellow-500" /> +500 Projetos</div>
            <div className="flex items-center gap-2"><Zap size={14} className="text-yellow-500" /> ROI Médio 420%</div>
          </div>
        </div>
      </section>
      
      <VideoShowcase />
    </>
  );
};