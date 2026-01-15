import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Serviços</a>
          <a href="#processo" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Como Funciona</a>
          <WhatsAppButton text="Orçamento Rápido" className="py-2 px-4 text-sm" />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Serviços</a>
          <a href="#processo" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Como Funciona</a>
          <WhatsAppButton text="Falar no WhatsApp" className="w-full" />
        </div>
      )}
    </nav>
  );
};