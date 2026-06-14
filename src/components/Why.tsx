import React from 'react';
import { DollarSign, Activity, RefreshCw, MousePointer2, Sparkles, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Easy Pricing',
    desc: 'Simple pricing structure that gives you unlimited design.'
  },
  {
    icon: <Activity className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Fast Turnarounds',
    desc: 'Quick and reliable results to keep your business moving forward.'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Unlimited Requests',
    desc: 'I fulfill and satisfy all your design needs while focusing on maximum conversion.'
  },
  {
    icon: <MousePointer2 className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Design Portal',
    desc: 'Manage tasks, revisions, and updates inside a clean, organized dashboard.'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Top-Tier Quality',
    desc: 'Built with care — I treat your brand with the same attention I give my own.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Problem Solving',
    desc: 'I solve your brand challenges with innovative solutions.'
  }
];

export default function Why() {
  return (
    <section id="why" className="py-20 md:py-[100px] bg-[var(--bg)]">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111] text-white rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold">BENEFITS</span>
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
            </div>
            <h2 className="font-display font-extrabold text-[48px] md:text-[64px] leading-none tracking-tight text-[var(--dark)]">
              Why Work With Kylix Studio?
            </h2>
          </div>
          <div className="md:max-w-[360px]">
            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.5] text-[var(--muted)]">
              Get unlimited design work for a simple monthly price. No hidden costs. Pause or cancel whenever you want.
            </p>
          </div>
        </div>

        <div className="p-2 bg-[#EBEBEB] border border-[#E0E0E0] rounded-[20px] scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {benefits.map((b, i) => (
              <div className="bg-[#F6F6F6] rounded-[16px] p-6 lg:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-[240px] relative transition-colors duration-300 hover:bg-white border border-[#EAEAEA]" key={i}>
                <div className="flex justify-between items-start w-full mb-12">
                  <div>
                    {b.icon}
                  </div>
                  <div className="flex gap-1.5 mt-2">
                    {[...Array(6)].map((_, idx) => (
                      <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx <= i ? 'bg-[var(--accent)]' : 'bg-[#E0E0E0]'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] leading-[1.3] text-[var(--dark)] mb-2">{b.title}</h3>
                  <p className="font-sans font-medium text-[14px] leading-[1.6] text-[var(--muted)]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
