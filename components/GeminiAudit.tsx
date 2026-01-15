import React, { useState } from 'react';
import { generateSaaSIdeas } from '../services/geminiService';
import { InsightResult } from '../types';
import { Sparkles, Loader2, ArrowRight, Lightbulb } from 'lucide-react';

export const GeminiAudit: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [insights, setInsights] = useState<InsightResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) return;
    
    setLoading(true);
    setHasSearched(true);
    const results = await generateSaaSIdeas(niche);
    setInsights(results);
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-slate-900 border-y border-slate-800" aria-label="Gerador de Ideias SaaS">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            <Sparkles size={16} />
            <span className="text-sm">Inteligência Artificial de Negócios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4 text-white">
            Potencialize suas vendas com um <br/><span className="gradient-text">Micro SaaS Personalizado</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Digite seu nicho abaixo (ex: Barbearia, Dentista, Academia) e veja os aplicativos que podemos construir para escalar seu faturamento através de tecnologia.
          </p>
        </header>

        <div className="glass-card p-6 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-2xl shadow-black/50">
          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="Qual o seu nicho? (ex: Barbearia)"
                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-lg"
                aria-label="Digite seu nicho de mercado"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading || !niche}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 min-w-[160px] text-lg shadow-lg shadow-emerald-600/20"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Ver Oportunidades'}
            </button>
          </form>

          {hasSearched && !loading && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-slate-300 text-sm uppercase tracking-wider font-semibold border-b border-slate-700 pb-2">
                Sugestões de Aplicativos para {niche}:
              </h3>
              <div className="grid gap-4">
                {insights.map((insight, idx) => (
                  <article key={idx} className="bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{insight.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="pt-6 text-center border-t border-slate-800/50 mt-6">
                <p className="text-slate-400 mb-4">Gostou dessas ideias? Podemos construir qualquer uma delas para você.</p>
                <a 
                  href={`https://wa.me/5511999999999?text=Olá, vi a sugestão de SaaS "${insights[0]?.title}" para ${niche} e quero um orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all bg-emerald-500/10 px-6 py-3 rounded-full"
                >
                  Orçar Desenvolvimento Agora <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};