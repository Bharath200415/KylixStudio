"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-[var(--bg)]/60 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] flex justify-between items-center">
          <a href="/" className="font-display font-bold text-2xl tracking-tight text-[var(--dark)] no-underline flex items-center gap-2">
            <img src="/logo.svg" alt="Kylix Studio Logo" className="w-[34px] h-[34px] md:w-9 md:h-9 " />
            <span className="hidden sm:inline-block -mt-0.5">Kylix Studio<sup className="text-sm font-sans mt-2 ml-0.5">®</sup></span>
          </a>
          <ul className="hidden lg:flex gap-10 list-none">
            <li><a href="/#services" className="font-sans font-medium text-[15px] text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-200">Services</a></li>
            <li><a href="/#work" className="font-sans font-medium text-[15px] text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-200">Work</a></li>
            <li><a href="/#pricing" className="font-sans font-medium text-[15px] text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-200">Pricing</a></li>
            <li><a href="/#faqs" className="font-sans font-medium text-[15px] text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-200">FAQs</a></li>
          </ul>
          <Link href="#contact" className="hidden lg:inline-flex bg-[var(--dark)] text-white rounded-full px-6 py-2.5 font-sans font-medium text-[14px] hover:bg-[var(--accent)] transition-all duration-200">Book a Call</Link>
          <button className="block lg:hidden bg-white shadow-sm border border-gray-200 rounded-full py-2 px-4 cursor-pointer text-[var(--dark)] font-mono text-xs uppercase tracking-widest flex items-center" onClick={() => setMobileMenuOpen(true)}>
            Menu <span className="ml-1 text-lg leading-none">+</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="/" className="font-display font-extrabold text-2xl tracking-tight text-[var(--dark)] no-underline flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <img src="/logo.svg" alt="Kylix Studio Logo" className="w-8 h-8" />
              </a>
              <button className="bg-transparent border-none cursor-pointer text-[var(--dark)]" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" strokeWidth={1} />
              </button>
            </div>
            <ul className="list-none p-0 flex flex-col gap-6 items-center mt-10">
              <li><a href="/#services" className="font-display font-medium text-4xl text-[var(--dark)] no-underline hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="/#work" className="font-display font-medium text-4xl text-[var(--dark)] no-underline hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>Work</a></li>
              <li><a href="/#pricing" className="font-display font-medium text-4xl text-[var(--dark)] no-underline hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
              <li><a href="/#faqs" className="font-display font-medium text-4xl text-[var(--dark)] no-underline hover:text-[var(--accent)]" onClick={() => setMobileMenuOpen(false)}>FAQs</a></li>
            </ul>
            <Link href="#contact" className="inline-flex items-center justify-center bg-[var(--accent)] text-white rounded-full px-10 py-[16px] font-sans font-bold text-[16px] mx-auto mt-auto mb-10 w-full max-w-sm" onClick={() => setMobileMenuOpen(false)}>Book a Call</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
