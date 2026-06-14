import React from 'react';

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-[100px] bg-[var(--bg)]">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] scroll-reveal">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111] text-white rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold">WORK</span>
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
            </div>
            <h2 className="font-display font-extrabold text-[48px] md:text-[64px] leading-none tracking-tight text-[var(--dark)]">
              Selected Work.
            </h2>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-4 auto-rows-[1fr]">
           {/* Grid Layout mimicking the reference */}
           <div className="md:row-span-2 col-span-1 min-h-[300px] md:min-h-[460px] bg-gradient-to-br from-[#1a123a] to-[#04263f] rounded-[32px] overflow-hidden relative group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-700"></div>
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white font-sans font-bold text-4xl tracking-tight relative z-10">Radiant™</span>
             </div>
           </div>

           <div className="col-span-1 bg-[#1A4BCF] rounded-[32px] overflow-hidden relative group min-h-[200px] md:min-h-[220px]">
             <div className="absolute top-6 right-6 bg-[#163a9b] text-white/90 text-[10px] px-3 py-1.5 rounded-full flex items-center uppercase tracking-widest font-mono font-bold">
               MENU <span className="ml-1 text-[12px]">+</span>
             </div>
           </div>

           <div className="col-span-1 bg-[#0f2868] rounded-[32px] overflow-hidden relative group min-h-[200px] md:min-h-[220px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 mix-blend-color-dodge"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-screen opacity-40"></div>
           </div>

           <div className="col-span-1 md:col-span-2 bg-[#091011] rounded-[32px] overflow-hidden relative group min-h-[240px] md:min-h-[300px] flex items-end p-8 md:p-12">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-50 sepia-[.3] hue-rotate-180 saturate-200"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-white font-sans font-bold tracking-tight text-[28px] md:text-[36px] leading-[1.2] mb-1">World Security Operations.</h3>
                <p className="text-gray-400 font-sans font-medium text-[15px]">Simulated.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
