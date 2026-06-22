import React from 'react';

const reviews = [
  {
    rating: '4.9',
    quote: '"Kylix Studio was fantastic to work with from start to finish. Turnaround was quick, and the designs were consistently on brand."',
    name: 'Derick',
    role: 'CO-FOUNDER',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64'
  },
  {
    rating: '5.0',
    quote: '"Working with Kylix Studio felt effortless, super easy and flexible. He was super easy to communicate with."',
    name: 'Zach Bingham',
    role: 'FOUNDER',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64'
  },
  {
    rating: '4.9',
    quote: '"I am impressed by Kylix Studio\'s design services. his prompt response, great eye for detail, and ability to address our needs."',
    name: 'Daryll Española',
    role: 'CEO & FOUNDER',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64'
  },
  {
    rating: '4.9',
    quote: '"I\'ve tried multiple designers in the past but none has delivered results like Kylix Studio, highly recommend to anyone."',
    name: 'Amaan Razack',
    role: 'FOUNDER',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-[100px] bg-[var(--bg)]">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px]">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111] text-white rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold">REVIEWS</span>
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
            </div>
            <h2 className="font-display font-extrabold text-[48px] md:text-[64px] leading-none tracking-tight text-[var(--dark)]">
              Success Stories.
            </h2>
          </div>
          <div className="md:max-w-[360px]">
            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.5] text-[var(--muted)]">
              See about how my design services has helped founders scale and build a presence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-4 lg:gap-6 scroll-reveal">
          {/* Left large black box */}
          <div className="bg-[#111] rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[440px] lg:min-h-full relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="font-display font-bold text-[56px] lg:text-[72px] text-white leading-none tracking-tight">4.9/5</div>
              <div className="max-w-[140px] font-sans font-bold text-white text-[13px] leading-[1.3] text-right mt-2">
                I've delivered 99+ projects that drive real results.
              </div>
            </div>
            
            <div className="mt-20 lg:mt-auto">
              <div className="flex items-center mb-6">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-[52px] h-[52px] rounded-full border-2 border-[#111] object-cover bg-gray-500" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-[52px] h-[52px] rounded-full border-2 border-[#111] object-cover bg-gray-500" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-[52px] h-[52px] rounded-full border-2 border-[#111] object-cover bg-gray-500" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-[52px] h-[52px] rounded-full border-2 border-[#111] object-cover bg-gray-500" />
                </div>
              </div>
              <div className="flex text-[var(--accent)] text-xl mb-3 tracking-widest gap-0.5">
                ★<span className="text-[var(--accent)]">★</span><span className="text-[var(--accent)]">★</span><span className="text-[var(--accent)]">★</span><span className="text-[var(--accent)]">★</span>
              </div>
              <div className="font-sans font-bold text-white text-[18px] mb-1 tracking-tight">
                Trusted by 99+ founders
              </div>
              <div className="font-sans font-bold text-gray-400 text-[10px] uppercase tracking-widest">
                RESULTS SPEAK, YOU'RE NEXT.
              </div>
            </div>
          </div>

          {/* Right side: 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bordergrad shadow-xs bg-gradient-to-b from-[#FAFAFA] to-[#F4F4F5] rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] transition-all hover:bg-white">
                <div className=''>
                  <div className="flex items-center gap-1.5 mb-8">
                    <span className="font-sans font-bold text-[13px] text-[var(--dark)]">{r.rating}</span>
                    <span className="text-[var(--accent)] text-[12px]">★</span>
                    <span className="font-sans font-bold text-[10px] text-gray-500 tracking-widest uppercase ml-0.5">RATING</span>
                  </div>
                  <p className="font-sans font-medium text-[17px] leading-[1.5] text-[var(--dark)]">
                    {r.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-90 border border-gray-300" />
                  <div>
                    <h4 className="font-sans font-bold text-[15px] text-[var(--dark)] leading-tight">{r.name}</h4>
                    <span className="font-sans font-bold text-[10px] text-gray-500 tracking-widest uppercase mt-1 block">{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
