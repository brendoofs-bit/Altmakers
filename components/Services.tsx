import React from 'react';
import { Layout, Monitor, Rocket, Code2, Database, Zap } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  isPrimary?: boolean;
}> = ({ title, description, icon, features, isPrimary }) => (
  <div className={`glass-card p-8 rounded-3xl flex flex-col h-full transition-all duration-300 group hover:-translate-y-2 ${isPrimary ? 'border-emerald-500/40 bg-slate-900/80 shadow-2xl shadow-emerald-900/20' : ''}`}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-2xl ${isPrimary ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 text-white' : 'bg-slate-800 text-emerald-400'}`}>
      {icon}
    </div>
    <h3 className="text-3xl font-bold mb-4 text-white font-display">{title}</h3>
    <p className="text-slate-400 mb-8 leading-relaxed flex-grow text-lg">
      {description}
    </p>
    <div className="space-y-4 mb-8">
      {features.map((feat, i) => (
        <div key={i} className="flex items-center gap-3 text-slate-300">
          <div className={`w-1.5 h-1.5 rounded-full ${isPrimary ? 'bg-emerald-400' : 'bg-slate-600'}`}></div>
          <span className="font-medium">{feat}</span>
        </div>
      ))}
    </div>
    <WhatsAppButton 
      variant={isPrimary ? 'primary' : 'outline'} 
      text="Quero escalar com isso" 
      message={`Olá Altmakers, tenho interesse em ${title}`} 
      className="w-full mt-auto" 
    />
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O Que Construímos</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não somos uma agência "faz-tudo". Somos especialistas em duas coisas: Páginas que vendem e Softwares que resolvem problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ServiceCard 
            title="Landing Pages de Alta Conversão"
            description="Páginas desenhadas com base em psicologia comportamental e dados. Velocidade extrema, copy persuasiva e design que transmite autoridade imediata."
            icon={<Layout />}
            features={[
              "Copywriting Persuasivo Incluso",
              "Design UX/UI Premium",
              "Carregamento < 2s",
              "Tracking (Pixel/Analytics) Configurado",
              "Integração CRM/E-mail"
            ]}
            isPrimary={true}
          />
          <ServiceCard 
            title="Micro SaaS & Web Apps"
            description="Transforme sua operação manual em um sistema automatizado. Criamos aplicativos web sob medida para resolver dores específicas do seu nicho ou para você vender como assinatura."
            icon={<Code2 />}
            features={[
              "Painéis Administrativos (Dashboards)",
              "Sistemas de Agendamento/Gestão",
              "Áreas de Membros Exclusivas",
              "Integração com IA (Gemini/GPT)",
              "Gateways de Pagamento (Stripe/Pix)"
            ]}
            isPrimary={false}
          />
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {['React', 'Next.js', 'Node.js', 'Tailwind', 'Gemini AI', 'PostgreSQL'].map(tech => (
             <span key={tech} className="text-xl font-bold text-slate-400">{tech}</span>
           ))}
        </div>
      </div>
    </section>
  );
};