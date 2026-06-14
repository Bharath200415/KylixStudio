"use client";

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Work from '../components/Work';
import Why from '../components/Why';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQs from '../components/FAQs';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

export default function Landing(){
  useEffect(()=>{
    const revealEls = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach((el, i) => {
      (el as HTMLElement).style.transition = `opacity 0.7s ease ${i * 0.05}s, transform 0.7s ease ${i * 0.05}s`;
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--dark)] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Work />
        <Why />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQs />
      </main>
      <CtaBanner />
      <Footer />
    </div>
  );
}
