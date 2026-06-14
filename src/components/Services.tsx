import React from 'react';
import { Layout, Code, PenTool, LayoutGrid, Palette, Layers, MoveRight } from 'lucide-react';

const servicesOptions = [
  {
    icon: <Layout className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'UI/UX Design',
    desc: 'Intuitive flows, beautiful screens.'
  },
  {
    icon: <Code className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Web App Development',
    desc: 'React, Next.js, full-stack delivery.'
  },
  {
    icon: <PenTool className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Logo & Identity',
    desc: 'Marks that last decades.'
  },
  {
    icon: <Palette className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Graphic Design',
    desc: 'Print, digital, everything in between.'
  },
  {
    icon: <Layers className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Design Systems',
    desc: 'Scalable, consistent, maintainable.'
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-[var(--dark)]" strokeWidth={1.5} />,
    title: 'Motion & Animation',
    desc: 'Interactions that delight users.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-[100px] bg-[var(--bg)]">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] relative">
        <div className="mb-16 scroll-reveal flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="font-display font-extrabold text-[44px] md:text-[56px] leading-[1.05] tracking-tight text-[var(--dark)]">
              What we <span className="text-[var(--accent)]">do best</span>
            </h2>
            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.6] text-[var(--muted)] max-w-[480px] mt-4">
               End-to-end design and development — from first sketch to shipped product.
            </p>
          </div>
          <a href="#work" className="inline-flex items-center text-[var(--dark)] font-sans font-bold text-[15px] hover:text-[var(--accent)] transition-colors group">
             See our work <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        <div className="p-2 bg-[#EBEBEB] border border-[#E0E0E0] rounded-[20px] scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {servicesOptions.map((s, i) => (
              <div className="bg-[#F6F6F6] rounded-[16px] p-6 lg:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-[240px] relative transition-colors duration-300 hover:bg-white border border-[#EAEAEA]" key={i}>
                <div className="flex justify-between items-start w-full mb-12">
                  <div>
                    {s.icon}
                  </div>
                  <div className="flex gap-1.5 mt-2">
                    {[...Array(i === 5 ? 6 : 5)].map((_, idx) => (
                      <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx <= i ? 'bg-[var(--accent)]' : 'bg-[#E0E0E0]'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[18px] leading-[1.3] text-[var(--dark)] mb-2">{s.title}</h3>
                  <p className="font-sans font-medium text-[14px] leading-[1.6] text-[var(--muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
