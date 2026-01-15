import React from 'react';
import { Play, Code, Smartphone } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  return (
    <section className="py-16 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-2">Bastidores</p>
          <h2 className="text-3xl font-bold">Como criamos o extraordinário</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Video 1: SaaS/Coding */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            
            <video 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 transform group-hover:scale-105"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              {/* Reliable Pexels coding video */}
              <source src="https://videos.pexels.com/video-files/5483244/5483244-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2 backdrop-blur-md">
                <Code size={12} />
                MICRO SAAS
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Arquitetura de Software</h3>
              <p className="text-slate-300 text-sm">Código limpo e escalável para aplicações complexas.</p>
            </div>
          </div>

          {/* Video 2: LP/Design */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            
            <video 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 transform group-hover:scale-105"
              autoPlay 
              loop 
              muted 
              playsInline
            >
               {/* Reliable Pexels UI Design/Mobile video */}
              <source src="https://videos.pexels.com/video-files/5081436/5081436-hd_1920_1080_24fps.mp4" type="video/mp4" />
            </video>

            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-2 backdrop-blur-md">
                <Smartphone size={12} />
                LANDING PAGES
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Experiência Mobile-First</h3>
              <p className="text-slate-300 text-sm">Interfaces fluidas que convertem em qualquer dispositivo.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};