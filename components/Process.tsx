import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Estratégia & Briefing", desc: "Mergulhamos no seu negócio. Análise de concorrentes, definição de personas e desenho da oferta irresistível." },
    { num: "02", title: "Arquitetura & Copy", desc: "Não começamos pelo design. Começamos pela venda. Criamos a copy (texto) e a estrutura persuasiva primeiro." },
    { num: "03", title: "Code & Design", desc: "Desenvolvimento high-end. Nada de construtores lentos. Código limpo, rápido e design que impressiona." },
    { num: "04", title: "Lançamento & Otimização", desc: "Colocamos no ar, configuramos os rastreadores e acompanhamos os dados para ajustes de conversão." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/30" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="process-title" className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Do Zero ao Lançamento
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Processo validado em mais de 500 projetos. Sem "achismos", apenas método.
          </p>
        </header>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <article key={i} className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-emerald-500 font-bold z-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 mt-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};