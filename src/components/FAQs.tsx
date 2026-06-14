"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { q: "What's your typical turnaround time?", a: "Most landing pages ship in 2 weeks. Web apps range from 4–12 weeks depending on scope. We always give a fixed delivery date before starting." },
  { q: "Do you handle full-stack development?", a: "Yes — design through deployment. We work in React, Next.js, Node.js, and Supabase. You get a live URL, not just a Figma file." },
  { q: "Who will I be communicating with?", a: "Directly with the designer and developer on your project. No account managers or support layers. Real-time updates via a shared Notion workspace." },
  { q: "Can I request revisions?", a: "Absolutely. Starter plans include 2 rounds; Complete and Retainer plans include unlimited revisions until you're fully satisfied." },
  { q: "Do you work with early-stage startups?", a: "Yes — and we're honest about scope. If your project would benefit from a phased approach, we'll tell you, not upsell you." },
  { q: "What tools do you use?", a: "Figma for design, Next.js + Tailwind for development, Framer for no-code/hybrid sites, Linear for project management, Loom for async video updates." },
  { q: "How do payments work?", a: "50% upfront, 50% on delivery. We accept bank transfer and Stripe. Retainer plans are billed monthly." }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-[100px] bg-[var(--bg)]">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] grid grid-cols-1 md:grid-cols-[340px_1fr] md:gap-20 gap-10 items-start relative scroll-reveal">
        <div>
          <h2 className="font-display font-extrabold text-[44px] md:text-[56px] leading-[1.05] tracking-tight text-[var(--dark)]">
            Questions<br/>
            <span className="text-[var(--accent)] font-bold italic">answered</span>
          </h2>
        </div>
        <div className="border-t border-[#EAEAEA]">
          {faqs.map((faq, i) => (
            <div className="border-b border-[#EAEAEA]" key={i}>
              <button 
                className="w-full py-6 flex justify-between items-center bg-transparent border-none text-left cursor-pointer gap-4 font-sans font-medium text-[16px] text-[var(--dark)] transition-colors hover:text-[var(--accent)]" 
                aria-expanded={openIndex === i} 
                onClick={() => toggle(i)}
              >
                {faq.q}
                <motion.svg 
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="shrink-0" 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6"/>
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="font-sans font-medium text-[15px] leading-[1.65] text-[var(--muted)]">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
