import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your business, goals, and audience. A brief call + questionnaire sets the foundation.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We explore visual directions, wireframe the structure, and design pixel-perfect screens.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Development starts. Clean code, modern frameworks, and regular progress updates.'
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'QA, performance checks, and finally shipping your new product to the world.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-[80px]">
      
      <div className="max-w-full w-full mx-auto px-6 md:px-16 relative scroll-reveal">
        <span className="hidden md:block absolute left-8 bottom-0 font-mono text-[11px] text-[#EAEAEA] [writing-mode:vertical-rl] rotate-180 tracking-[0.1em]">05</span>
        <h2 className="font-display italic text-[40px] md:text-[52px] leading-[1.1]"><span className="not-italic font-semibold font-sans">How we </span><em>work</em></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] mt-12 bg-[#EAEAEA] border border-[#EAEAEA] overflow-hidden">
          {steps.map((step, i) => (
            <div className="bg-[#FAFAFA] p-8 md:p-10 relative text-left transition-colors duration-300 hover:bg-white scroll-reveal" key={i}>
              <span className="inline-flex items-center justify-center font-mono font-medium text-[12px] text-[#0D0D0D] bg-white border border-[#EAEAEA] py-1 px-2.5 rounded-full mb-6">{step.num}</span>
              <div className="step-connector"></div>
              <h3 className="font-sans font-semibold text-[17px] leading-[1.3] text-[#0D0D0D] mb-3">{step.title}</h3>
              <p className="font-sans font-normal text-[14px] leading-[1.6] text-[#6B6B6B]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
