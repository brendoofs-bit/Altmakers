import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Altmakers vs O Resto</h2>
          <p className="text-slate-400">Por que somos diferentes de agências tradicionais e freelancers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Freelancer */}
          <div className="glass-card p-8 rounded-2xl opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-wider text-center">Freelancer</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Só executa, não pensa</li>
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Copy você que faz</li>
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Prazo incerto</li>
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Sem suporte pós-entrega</li>
            </ul>
          </div>

          {/* Agência Comum */}
          <div className="glass-card p-8 rounded-2xl opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-wider text-center">Agência Comum</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Preço inflado (R$ 10k+)</li>
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Burocracia lenta</li>
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Usa templates prontos</li>
              <li className="flex items-center gap-2 text-slate-400"><X size={16} className="text-red-500" /> Atendimento terceirizado</li>
            </ul>
          </div>

          {/* Altmakers */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-emerald-500/50 p-8 rounded-2xl transform md:-translate-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider text-center">Altmakers</h3>
            <div className="text-center text-emerald-400 text-xs font-bold mb-6 tracking-widest">MÁQUINA DE VENDAS</div>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={14} className="text-emerald-500" /></div> Estratégia de Negócio</li>
              <li className="flex items-center gap-3 text-white font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={14} className="text-emerald-500" /></div> Copywriting Incluso</li>
              <li className="flex items-center gap-3 text-white font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={14} className="text-emerald-500" /></div> Design Baseado em Dados</li>
              <li className="flex items-center gap-3 text-white font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={14} className="text-emerald-500" /></div> Micro SaaS Sob Medida</li>
              <li className="flex items-center gap-3 text-white font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={14} className="text-emerald-500" /></div> Suporte de 30 dias</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};