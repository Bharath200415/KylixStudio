"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const plans = {
  landing: [
    { name: 'Starter', price: '$1,299', features: ['Single page design', '3 design concepts', 'Mobile responsive', '2-week delivery', '2 revision rounds'] },
    { name: 'Complete', price: '$2,499', features: ['Multi-section page', 'Full copywriting', 'Custom animations', 'Framer/Next.js development', 'SEO setup', 'Unlimited revisions'], featured: true }
  ],
  branding: [
    { name: 'Starter', price: '$999', features: ['Logo design', 'Color palette', 'Typography system', '1-week delivery', '2 revision rounds'] },
    { name: 'Complete', price: '$1,999', features: ['Full brand identity', 'Brand guidelines', 'Social media kit', 'Stationery design', 'Unlimited revisions'], featured: true }
  ],
  webapp: [
    { name: 'Starter', price: '$4,999', features: ['UI/UX for 10 screens', 'Component library', 'Basic prototyping', '4-week delivery', '2 revision rounds'] },
    { name: 'Complete', price: '$9,999', features: ['Unlimited screens', 'Full design system', 'Complex prototyping', 'Frontend development', 'Unlimited revisions'], featured: true }
  ],
  retainer: [
    { name: 'Starter', price: '$2,999/mo', features: ['40 hours/month', 'Dedicated designer', 'Weekly updates', 'Pause or cancel anytime'] },
    { name: 'Complete', price: '$5,999/mo', features: ['80 hours/month', 'Designer + Developer', 'Daily async updates', 'Priority support'], featured: true }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<keyof typeof plans>('landing');

  const tabs: { id: keyof typeof plans; label: string }[] = [
    { id: 'landing', label: 'Landing Page' },
    { id: 'branding', label: 'Branding' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'retainer', label: 'Retainer' }
  ];

  return (
    <section id="pricing" className="py-20 md:py-[100px] bg-white">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] relative scroll-reveal flex flex-col items-center">
        <h2 className="font-display font-extrabold text-[44px] md:text-[56px] leading-[1.05] text-center tracking-tight text-[var(--dark)]">
          Simple <span className="text-[var(--accent)]">Pricing</span>
        </h2>
        <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.6] text-[var(--muted)] max-w-[480px] mt-4 text-center mx-auto">
          No surprises. One price, full ownership.
        </p>

        <div className="flex overflow-x-auto gap-2 bg-[var(--bg)] border border-gray-200 rounded-full p-1.5 w-full md:w-fit my-10 mx-auto no-scrollbar shadow-inner" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative font-sans font-bold text-[14px] px-6 py-3 rounded-full border-none cursor-pointer transition-colors duration-200 outline-none whitespace-nowrap ${activeTab === tab.id ? 'text-white' : 'bg-transparent text-[var(--muted)] hover:text-[var(--dark)]'}`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="pricing-active-tab"
                  className="absolute inset-0 bg-[var(--dark)] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-[800px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
            >
              {plans[activeTab].map((plan, i) => (
                <div className={`bg-white rounded-3xl p-8 relative flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,85,255,0.15)] ${plan.featured ? 'border-2 border-[var(--accent)] shadow-[0_10px_30px_-10px_rgba(0,85,255,0.2)]' : 'border-2 border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]'}`} key={i}>
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white font-sans font-bold text-[11px] px-4 py-1.5 rounded-full tracking-wider uppercase shadow-md border-2 border-white">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-2 w-full">
                    <span className="font-display font-bold text-[24px] text-[var(--dark)]">{plan.name}</span>
                  </div>
                  
                  <div className="font-display font-extrabold text-[40px] md:text-[48px] tracking-tight leading-none text-[var(--dark)] mb-6 w-full text-left">{plan.price}</div>

                  <div className="bg-[var(--bg)] rounded-xl px-4 py-3 w-full mb-6 border border-gray-100">
                    <span className="font-sans font-medium text-[13px] text-[var(--dark)]">Bring your vision to life in just days, not months.</span>
                  </div>

                  <ul className="list-none p-0 m-0 mb-8 flex flex-col w-full flex-1">
                    {plan.features.map((f, j) => (
                      <li className="font-sans font-medium text-[14px] text-[var(--muted)] py-2.5 flex items-center gap-3 border-b border-gray-100 last:border-0" key={j}>
                        <div className="w-5 h-5 rounded-full bg-[var(--bg)] flex items-center justify-center shrink-0 border border-gray-200">
                           <svg className="w-[12px] h-[12px] text-[var(--dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                           </svg>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className={`w-full inline-flex items-center justify-center text-white rounded-full px-6 py-4 font-sans font-bold text-[15px] transition-all duration-300 ${plan.featured ? 'bg-[var(--accent)] hover:opacity-90' : 'bg-[var(--dark)] hover:opacity-90'}`}>
                    Choose {plan.name} <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
