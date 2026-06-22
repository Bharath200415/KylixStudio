import React from 'react';
import Link from 'next/link';
import { DottedGlowBackground } from './ui/dotted-glow-background';

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-[#0D0D0D] py-12 md:py-[80px] text-center relative overflow-hidden scroll-reveal">
      <div className="max-w-full w-full mx-auto px-6">
        <p className="font-mono font-medium text-[12px] text-[#666] tracking-[0.1em] uppercase">[ Let's work together ]</p>
        <h2 className="font-display italic text-[48px] md:text-[68px] leading-[1.05] text-white my-4 md:my-5"><span className="not-italic font-semibold font-sans">Ready to build</span><br /><em className='text-gradient-to-br from-white to-sky-100'>something great?</em></h2>
        <p className="font-sans font-normal text-[17px] text-[#888] mb-10">Let's talk about your project. No commitment required.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center bg-[var(--accent)] text-white font-sans font-semibold text-[15px] px-8 py-3.5 rounded-full no-underline transition-all duration-200 border border-[var(--accent)] hover:opacity-90 hover:-translate-y-[1px]">Book a Free Call</a>
          <Link href="/contact" className="inline-flex items-center justify-center border-[1.5px] border-[#444] text-white font-sans font-medium text-[15px] px-7 py-[13px] rounded-full no-underline transition-colors duration-200 hover:border-[#888]">Send us a Message →</Link>
        </div>
      </div>
    </section>
  );
}
