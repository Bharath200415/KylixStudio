import React, { useRef } from 'react';
import { Target, PenTool, Code2, Rocket, ArrowRight, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PointerHighlight } from './ui/pointer-highlight';


function EndToEndCard() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "center 0.5"]
  });

  const steps = [
    { label: 'Strategy', desc: 'Research & Planning', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path></svg> },
    { label: 'Design', desc: 'Visual Identity', icon: <PenTool className="w-5 h-5" /> },
    { label: 'Dev', desc: 'Robust Engineering', icon: <Code2 className="w-5 h-5" /> },
    { label: 'Launch', desc: 'Go-to-market', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path></svg> }
  ];

  return (

    <div ref={containerRef} className="lg:col-span-2 bg-[#FBFCFB] rounded-[16px] p-8 md:p-10 flex flex-col justify-between min-h-[360px] lg:min-h-[420px] relative transition-all duration-500 ease-out  hover:shadow-md hover:shadow-color-neutral-400 hover:bg-white border border-[#EAEAEA] overflow-hidden group">
      <div className="relative z-10 max-w-full lg:max-w-[500px]">
        <h3 className="font-display font-extrabold text-[28px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-4 tracking-tight">
          End-to-End<br />Execution
        </h3>
        <p className="font-sans font-medium text-[15px] leading-[1.6] text-[var(--muted)]">
          Branding. Websites. UI/UX Design. Development.
          <br /><br />
          One studio for everything your digital presence needs.
        </p>
      </div>

      {/* Visuals - High-end sleek component */}
      <div className="mt-14 w-full bg-white rounded-3xl border border-[#EAEAEA] p-6 md:p-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-center">
        {/* Grid background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFMUUxRTEiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-40 pointer-events-none" />

        <div className="flex justify-between items-start relative z-10 w-full">
          {/* Connecting line */}
          <div className="absolute top-6 md:top-7 left-[12%] right-[12%] h-[3px] bg-gray-100 rounded-full overflow-hidden z-0">
            <motion.div
              className="h-full bg-[var(--dark)]"
              style={{ width: useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']) }}
            />
          </div>

          {steps.map((step, idx) => {
            const start = 0.1 + (idx * 0.2);
            const end = start + 0.15;
            const active = useTransform(scrollYProgress, [start, end], [0, 1]);
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col items-center w-1/4">
                <div className="relative">
                  {/* Base/Inactive */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-[16px] flex items-center justify-center bg-white border border-[#EAEAEA] text-gray-400 shadow-sm relative z-10">
                    {step.icon}
                  </div>

                  {/* Active/Highlighted */}
                  <motion.div
                    className={`absolute inset-0 rounded-[16px] flex items-center justify-center z-20 ${isLast ? 'bg-neutral-50 text-white border border-transparent shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-[var(--dark)] text-white border border-[var(--dark)] shadow-md'}`}
                    style={{ opacity: active }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Pulse Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-[16px] z-0 ${isLast ? 'bg-[var(--accent)]' : 'bg-[var(--dark)]'}`}
                    style={{
                      opacity: useTransform(scrollYProgress, [end, end + 0.1, end + 0.2], [0, 0.4, 0]),
                      scale: useTransform(scrollYProgress, [end, end + 0.2], [1, 1.5])
                    }}
                  />
                </div>

                <div className="mt-4 text-center flex flex-col items-center">
                  <div className="relative">
                    <div className="font-sans font-bold text-[13px] md:text-[15px] text-gray-400">{step.label}</div>
                    <motion.div
                      className={`font-sans font-bold text-[13px] md:text-[15px] absolute top-0 left-0 right-0 whitespace-nowrap text-center ${isLast ? 'text-[var(--accent)]' : 'text-[var(--dark)]'}`}
                      style={{ opacity: active }}
                    >
                      {step.label}
                    </motion.div>
                  </div>
                  <p className="font-sans font-medium text-[11px] md:text-[12px] text-gray-400 mt-1 hidden md:block max-w-[90%] text-center leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Why() {
  return (
    <section id="why" className="py-20 md:py-[100px] bg-[var(--bg)] ">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111] text-white rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold">BENEFITS</span>
              <span className="text-[var(--accent)] font-mono text-[10px]">//</span>
            </div>
            <h2 className="font-display font-extrabold text-[48px] md:text-[64px] leading-none tracking-tight text-[var(--dark)]">
              Why Work With Kylix Studio?
            </h2>
          </div>
          <div className="md:max-w-[360px]">
            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.5] text-[var(--muted)]">
              Get unlimited design work for a simple monthly price. No hidden costs. Pause or cancel whenever you want.
            </p>
          </div>
        </div>

        <div className="p-2 bg-[#EBEBEB] border border-[#E0E0E0] rounded-[24px] scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">

            {/* Card 1: Build For Growth */}
            <div className="lg:col-span-2 bg-[#FBFCFB] rounded-[16px] p-8 md:p-10 flex flex-col justify-start min-h-[360px] lg:min-h-[420px] relative transition-all duration-500 ease-out hover:shadow-md hover:shadow-color-neutral-400 hover:bg-white border border-[#EAEAEA] overflow-hidden group">
              <div className="relative z-10 max-w-[320px] md:max-w-[400px]">
                <h3 className="font-display font-extrabold text-[28px] md:text-[36px] leading-[1.1] text-[var(--dark)] mb-4 tracking-tight">
                  Build For Growth,<br />Not Just Looks
                </h3>
                <p className="font-sans font-medium text-[15px] leading-[1.6] text-[var(--muted)]">
                  Every website, brand identity, and digital product is designed with one goal: turning visitors into customers.
                </p>
              </div>

              {/* Visuals: Sleek Line Chart */}
              <div className="absolute right-2.5 bottom-0 w-[100%] md:w-[70%] lg:w-[60%] h-[240px] pointer-events-none translate-x-[5%] translate-y-[15%] group-hover:translate-y-[10%] transition-transform duration-700">
                <div className="w-full h-full bg-white border border-[#EAEAEA] rounded-tl-2xl shadow-[0_0_40px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden flex flex-col">
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="flex flex-col gap-2">
                      <div className="w-10 h-2 rounded-full bg-gray-200"></div>
                      <div className="w-20 h-2 rounded-full bg-gray-100"></div>
                    </div>
                    <div className="bg-[#111] text-white text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <span className="text-[var(--accent)] text-[16px] font-medium leading-none">↗</span>
                      <span>342%</span>
                    </div>
                  </div>

                  <div className="relative flex-1 w-[120%] -ml-[10%]">
                    <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#111" />
                          <stop offset="50%" stopColor="#111" />
                          <stop offset="100%" stopColor="var(--accent)" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0,80 C50,80 80,40 120,50 C160,60 180,20 220,30 C260,40 280,10 320,15 C360,20 380,5 400,0 L400,100 L0,100 Z"
                        fill="url(#chartGlow)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                      <motion.path
                        d="M0,80 C50,80 80,40 120,50 C160,60 180,20 220,30 C260,40 280,10 320,15 C360,20 380,5 400,0"
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <motion.div
                      className="absolute w-4 h-4 bg-white border-4 border-[var(--accent)] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                      initial={{ opacity: 0, scale: 0, left: '0%', top: '80%' }}
                      whileInView={{ opacity: 1, scale: 1, left: '100%', top: '0%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      style={{ transform: 'translate(-50%, -50%)' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 48-Hour Turnarounds */}
            <div className="lg:col-span-1 bg-[#FBFCFB] rounded-[16px] p-8 md:p-10 flex flex-col justify-start min-h-[360px] lg:min-h-[420px] relative transition-all duration-500 ease-out hover:shadow-md hover:shadow-color-neutral-400 hover:bg-white border border-[#EAEAEA] overflow-hidden group">
              <div className="relative z-10 mb-32 lg:mb-0">
                <h3 className="font-display font-bold text-[24px] md:text-[28px] leading-[1.1] text-[var(--dark)] mb-3 tracking-tight">
                  48-Hour<br />Turnarounds
                </h3>
                <p className="font-sans font-medium text-[14px] leading-[1.6] text-[var(--muted)]">
                  Most requests delivered within 48 hours, so your business keeps moving without delays.
                </p>
              </div>

              {/* Visuals: Sleek Circular Loader */}
              <div className="absolute -right-5 -bottom-5 w-[340px] h-[340px] pointer-events-none overflow-hidden rounded-br-[16px] translate-x-[10%] translate-y-[10%] group-hover:translate-x-[5%] group-hover:translate-y-[5%] transition-transform duration-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-gray-300"
                      style={{ width: i * 80, height: i * 80 }}
                      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                    />
                  ))}
                  <div className="relative w-28 h-28 bg-white rounded-full shadow-xl flex flex-col items-center justify-center border border-gray-100 z-10 overflow-hidden group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-shadow duration-500">
                    <div className="absolute inset-0 p-[3px]">
                      <motion.svg className="w-full h-full -rotate-90 text-[var(--dark)]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity="0.05" />
                        <motion.circle
                          cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "301.5 301.5", strokeDashoffset: 301.5 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </motion.svg>
                    </div>
                    <span className="font-display font-extrabold text-[32px] text-[var(--dark)] tracking-tighter leading-none mt-1">48<span className="text-[14px]">h</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Founder-Focused */}
            <div className="lg:col-span-1 bg-[#FBFCFB] rounded-[16px] p-8 md:p-10 flex flex-col justify-start min-h-[360px] lg:min-h-[420px] relative transition-all duration-500 ease-out  hover:shadow-md hover:shadow-color-neutral-400 hover:bg-white border border-[#EAEAEA] overflow-hidden group">
              <div className="relative z-10 mb-32 lg:mb-0">
                <h3 className="font-display font-bold text-[24px] md:text-[28px] leading-[1.1] text-[var(--dark)] mb-3 tracking-tight">
                  Founder<br />Focused
                </h3>
                <p className="font-sans font-medium text-[14px] leading-[1.6] text-[var(--muted)]">
                  Built for startups, creators, and businesses that need results—not endless meetings.
                </p>
              </div>

              {/* Visuals */}
              <div className="absolute -right-4 -bottom-4 lg:-right-1 lg:-bottom-1 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 origin-bottom-right">
                <div className="w-[280px] bg-white border border-[#EAEAEA] rounded-tl-2xl shadow-xl overflow-hidden aspect-[4/3] flex flex-col">
                  <div className="p-4 border-b border-[#EAEAEA] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[12px] bg-[var(--dark)] flex items-center justify-center text-[var(--accent)] text-[12px] font-bold border-2 border-white shadow-sm ring-1 ring-[#111]">
                      CEO
                    </div>
                    <div>
                      <div className="w-24 h-2.5 bg-gray-200 rounded-full mb-1.5"></div>
                      <div className="w-14 h-2 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1 bg-gray-50/50">
                    <div className="flex gap-2">
                      <motion.div animate={{ width: ['40%', '70%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="h-8 bg-[#111] rounded-lg" />
                      <div className="h-8 w-full bg-gray-200 rounded-lg"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-full bg-gray-200 rounded-lg"></div>
                      <motion.div animate={{ width: ['60%', '30%', '60%'] }} transition={{ duration: 4, repeat: Infinity, delay: 1, ease: 'easeInOut' }} className="h-8 bg-[var(--accent)] rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: End-to-End Execution */}
            <EndToEndCard />

          </div>
        </div>
      </div>
    </section>
  );
}
