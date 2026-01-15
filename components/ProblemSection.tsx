import React from 'react';
import { AlertTriangle, TrendingDown, Clock, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sua Empresa Está <span className="text-red-500">Perdendo Dinheiro</span> <br />
            Agora Mesmo.
          </h2>
          <p className="text-slate-400 text-lg">
            96% das pessoas que visitam seu site vão embora sem comprar. Elas escapam pelos seus dedos porque você não tem uma estrutura que CONVERTE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" /> Reconhece isso?
            </h3>
            <ul className="space-y-4">
              {[
                "Investe em tráfego pago mas as vendas não acompanham",
                "Taxa de conversão abaixo de 5% (ou nem sabe qual é)",
                "Site genérico tentando vender tudo para todo mundo",
                "Cada produto leva para a mesma página home",
                "Dependência total de atendimento manual no WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                  <XCircle className="text-red-500 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
               <TrendingDown className="text-red-500 mb-4" size={32} />
               <div className="text-3xl font-bold text-white mb-1">R$ 0</div>
               <div className="text-sm text-slate-400">É o retorno de um clique que cai em uma página lenta.</div>
             </div>
             <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
               <Clock className="text-slate-400 mb-4" size={32} />
               <div className="text-3xl font-bold text-white mb-1">3 seg</div>
               <div className="text-sm text-slate-400">Tempo para capturar atenção ou perder o cliente.</div>
             </div>
             <div className="col-span-2 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl text-center">
               <p className="text-lg text-slate-300">
                 Empresas com LPs específicas faturam em média <strong className="text-emerald-400">55% A MAIS</strong>. Você está doando mercado.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};