"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

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

  const [services, setServices] = useState({
    positioning: false,
    identity: false,
    webDesign: false,
    webDev: false,
    other: false,
    notSure: false
  });

  return (
    <div className="bg-[var(--bg)] min-h-screen font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-40 pb-24 px-6 md:px-10 lg:px-[60px] xl:px-[80px] max-w-full mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-[1400px] mx-auto auto-rows-min items-start">
          
          {/* Left Column */}
          <div className="relative text-left mb-8 lg:mb-0 lg:sticky lg:top-40">
            <h1 className="font-display font-extrabold text-[48px] md:text-[64px] lg:text-[76px] leading-[1.05] tracking-tight text-[var(--dark)] mb-6">
              Want to work with us?
            </h1>
            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.6] text-[var(--muted)] max-w-[420px]">
              You can fill out the form or you can shoot us an email at{' '}
              <a href="mailto:hello@kylix.studio" className="text-[var(--dark)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] font-bold transition-all">
                hello@kylix.studio
              </a>{' '}
              to set up an introductory call.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full max-w-[640px] flex flex-col gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] border border-gray-100">
            
            {/* Contact Details Section */}
            <section className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-[32px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-2">
                Contact details
              </h2>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[12px] uppercase tracking-widest text-[var(--muted)] font-bold">Full Name*</label>
                <input 
                  type="text" 
                  placeholder="Jane Smith" 
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--accent)] outline-none rounded-xl px-5 py-4 font-sans font-medium text-[15px] text-[var(--dark)] placeholder:text-gray-400 transition-colors focus:shadow-[0_0_0_4px_rgba(0,85,255,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[12px] uppercase tracking-widest text-[var(--muted)] font-bold">Company Name*</label>
                <input 
                  type="text" 
                  placeholder="Acme Corporation" 
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--accent)] outline-none rounded-xl px-5 py-4 font-sans font-medium text-[15px] text-[var(--dark)] placeholder:text-gray-400 transition-colors focus:shadow-[0_0_0_4px_rgba(0,85,255,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[12px] uppercase tracking-widest text-[var(--muted)] font-bold">Email*</label>
                <input 
                  type="email" 
                  placeholder="jane@acme.com" 
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--accent)] outline-none rounded-xl px-5 py-4 font-sans font-medium text-[15px] text-[var(--dark)] placeholder:text-gray-400 transition-colors focus:shadow-[0_0_0_4px_rgba(0,85,255,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[12px] uppercase tracking-widest text-[var(--muted)] font-bold">Website (If you got one)</label>
                <input 
                  type="url" 
                  placeholder="www.acme.com" 
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--accent)] outline-none rounded-xl px-5 py-4 font-sans font-medium text-[15px] text-[var(--dark)] placeholder:text-gray-400 transition-colors focus:shadow-[0_0_0_4px_rgba(0,85,255,0.1)]"
                />
              </div>
            </section>

            {/* Project Information */}
            <section className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-[32px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-2">
                Project information*
              </h2>
              <textarea 
                placeholder="What does your company do? How long have you been in business? What are your goals for this collaboration?"
                rows={5}
                className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--accent)] outline-none rounded-xl px-5 py-4 font-sans font-medium text-[15px] text-[var(--dark)] placeholder:text-gray-400 transition-colors resize-y focus:shadow-[0_0_0_4px_rgba(0,85,255,0.1)]"
              ></textarea>
            </section>

            {/* Services */}
            <section className="flex flex-col gap-6">
              <div>
                <h2 className="font-display font-bold text-[32px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-2">
                  What services are you looking for?*
                </h2>
                <p className="font-sans font-medium text-[15px] text-[var(--muted)]">Select all services you want to work on.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { id: 'positioning', label: 'Brand Positioning' },
                  { id: 'identity', label: 'Brand Identity' },
                  { id: 'webDesign', label: 'Web Design' },
                  { id: 'webDev', label: 'Web Development' },
                  { id: 'other', label: 'Other' },
                  { id: 'notSure', label: 'Not sure yet' }
                ].map(service => (
                  <label key={service.id} className="relative cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={services[service.id as keyof typeof services]}
                      onChange={(e) => setServices({...services, [service.id]: e.target.checked})}
                    />
                    <div className="px-5 py-3 rounded-full border-2 border-gray-100 bg-[var(--bg)] font-sans font-bold text-[14px] text-[var(--muted)] peer-checked:bg-[var(--accent)] peer-checked:border-[var(--accent)] peer-checked:text-white transition-all duration-200 select-none hover:border-gray-200">
                      {service.label}
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* Budget */}
            <section className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-[32px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-2">
                Estimated budget*
              </h2>
              <div className="relative">
                <button 
                  type="button"
                  onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                  className={`w-full bg-[var(--bg)] border-2 outline-none rounded-xl px-5 py-4 font-sans font-bold text-[15px] transition-all cursor-pointer flex justify-between items-center ${isBudgetOpen ? 'border-[var(--accent)] shadow-[0_0_0_4px_rgba(0,85,255,0.1)]' : 'border-transparent hover:border-gray-200'}`}
                >
                  <span className={budget ? "text-[var(--dark)]" : "text-gray-400"}>
                    {budget ? (
                       budget === '10k-25k' ? '$10k - $25k' : 
                       budget === '25k-50k' ? '$25k - $50k' : '$50k+'
                    ) : "Select an option"}
                  </span>
                  <div className={`pointer-events-none transition-transform duration-300 ${isBudgetOpen ? 'rotate-180' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isBudgetOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute z-20 top-[calc(100%+8px)] left-0 w-full bg-white border border-gray-100 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] py-2 overflow-hidden"
                    >
                      <div className="flex flex-col">
                        {[
                          { value: '', label: 'Select an option' },
                          { value: '10k-25k', label: '$10k - $25k' },
                          { value: '25k-50k', label: '$25k - $50k' },
                          { value: '50k+', label: '$50k+' }
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => { setBudget(opt.value); setIsBudgetOpen(false); }}
                            className={`w-full text-left px-5 py-3 font-sans font-medium text-[15px] transition-colors ${(budget === opt.value) || (!budget && !opt.value) ? 'bg-[#F9F9F9] text-[var(--accent)] font-bold' : 'text-[var(--dark)] hover:bg-[#F9F9F9]'}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* Launch timeline */}
            <section className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-[32px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-2">
                When do you wish to launch?*
              </h2>
              <input 
                type="text" 
                placeholder="Share the launch date or timeline" 
                className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--accent)] outline-none rounded-xl px-5 py-4 font-sans font-medium text-[15px] text-[var(--dark)] placeholder:text-gray-400 transition-colors focus:shadow-[0_0_0_4px_rgba(0,85,255,0.1)]"
              />
            </section>

            <button className="mt-4 self-start bg-[var(--dark)] text-white font-sans font-bold text-[16px] px-10 py-[18px] rounded-full hover:bg-[var(--accent)] transition-all duration-300 w-full md:w-auto">
              Send Enquiry
            </button>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
