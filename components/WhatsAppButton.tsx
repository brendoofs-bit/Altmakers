import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Falar com Especialista", 
  message = "Olá, gostaria de saber mais sobre as soluções da Altmakers.",
  variant = 'primary',
  className = ''
}) => {
  // Replace with actual number
  const phoneNumber = "5511999999999"; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20",
    secondary: "bg-white text-slate-900 hover:bg-slate-100",
    outline: "border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      {text}
    </a>
  );
};