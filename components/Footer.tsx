import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-slate-900 pt-16 pb-8 px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div className="max-w-xs">
            <Logo className="mb-4" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Altmakers. Desenvolvemos ativos digitais que trabalham 24/7 para o seu negócio. Foco total em conversão e tecnologia.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Soluções</h4>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Micro SaaS</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Landing Pages</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Web Apps</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Contato</h4>
            <a href="mailto:contato@altmakers.com.br" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-2">
              <Mail size={16} /> contato@altmakers.com.br
            </a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Altmakers. Todos os direitos reservados.</p>
          <p>Design estratégico & Engenharia de Software.</p>
        </div>
      </div>
    </footer>
  );
};