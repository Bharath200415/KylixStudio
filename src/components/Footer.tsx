import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#1C1C1C] pt-20 pb-12">
      <div className="max-w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 scroll-reveal text-left">
        <div>
          <span className="font-display font-bold text-[32px] text-white flex items-center gap-2 mb-6">
            <img src="/logo.svg" alt="Kylix Studio Logo" className="w-9 h-9" style={{ filter: 'brightness(0) invert(1)' }} />
            <span>Kylix Studio<sup className="text-sm font-sans mt-2 ml-0.5">®</sup></span>
          </span>
          <p className="font-sans font-medium text-[15px] leading-[1.6] text-gray-400 max-w-[280px]">Craft-first brand &amp; development partner for ambitious startups.</p>
          <div className="mt-8 flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors">𝕏</a>
             <a href="#" className="w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors">in</a>
          </div>
        </div>
        <div>
          <h5 className="font-sans font-bold text-[13px] text-white tracking-widest uppercase mb-6 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] block"></span> Platform
          </h5>
          <div className="flex flex-col gap-3">
             <a href="/#services" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">Services</a>
             <a href="/#work" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">Our Work</a>
             <a href="/#process" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">Process</a>
             <a href="/#pricing" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
        <div>
          <h5 className="font-sans font-bold text-[13px] text-white tracking-widest uppercase mb-6 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] block"></span> Company
          </h5>
          <div className="flex flex-col gap-3">
             <a href="#" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">About Us</a>
             <a href="#" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">Careers</a>
             <a href="/#faqs" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">FAQs</a>
             <a href="#" className="font-sans font-medium text-[15px] text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[#1C1C1C] p-6 rounded-3xl">
          <h5 className="font-sans font-bold text-[16px] text-white mb-2">Ready to scale?</h5>
          <p className="font-sans text-[14px] leading-[1.6] text-gray-400 mb-6">Let's build a brand that actually makes you money.</p>
          <Link href="/contact" className="w-full inline-flex items-center justify-center bg-[var(--accent)] text-white rounded-full px-6 py-3.5 font-sans font-bold text-[15px] transition-all hover:bg-white hover:text-[var(--dark)]">
             Send us a message <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
      <div className="max-w-full mx-auto mt-16 pt-8 px-6 md:px-10 lg:px-[60px] xl:px-[80px] flex flex-col md:flex-row justify-between items-center border-t border-[#1C1C1C] font-sans font-medium text-[13px] text-gray-500 scroll-reveal">
        <p>© {new Date().getFullYear()} Kylix Studio. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
           <span>Terms of Service</span>
           <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
