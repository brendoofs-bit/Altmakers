import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg transform rotate-3 hover:rotate-6 transition-transform">
        <span className="font-bold text-slate-950 text-2xl font-display">A</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl tracking-tight text-white leading-none font-display">
          ALTMAKERS
        </span>
      </div>
    </div>
  );
};