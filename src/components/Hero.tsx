import React from 'react';
import { FlipWords } from './ui/flip-words';


export default function Hero() {
  const words = ["Convert", "Scale", "Grow"];
  return (
    <section className="bg-[var(--bg)] pt-[102px] lg:pt-[30px] md:pt-[123px] pb-[80px] lg:pb-[60px] relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-full w-full mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[80px] flex flex-col lg:grid lg:grid-cols-[45%_55%] items-center relative z-10 gap-12 lg:gap-16">
        <div className="w-full text-left">
          <div className="inline-block px-4 py-2 rounded-full bg-neutral-900 text-white font-display text-[10px] tracking-widest font-bold uppercase mb-5 animate-[fadeUp_0.7s_ease-out_0.1s_both]">
            ✽ OPEN FOR PROJECTS ✽
          </div>
          <h1 className="font-display font-extrabold text-[50px] md:text-[64px] lg:text-[77px] leading-[0.96] tracking-[-0.05em] md:tracking-[-0.03em] text-[#121212] animate-[fadeUp_0.8s_ease-out_0.25s_both]">
            We Build<br />Things That<br className="sm:hidden" /><FlipWords words={words} className='text-neutral-400 dark:text-neutral-400' /><span className='text-[var(--accent)] dark:text-[var(--accent)] -ml-3'>.</span><br />
          </h1>
          <p className="font-sans font-medium text-[15px] md:text-[20px] leading-[1.6] text-[var(--muted)] max-w-[440px] mt-6 mb-8 animate-[fadeUp_0.7s_ease-out_0.4s_both]">
            Branding, websites, and <br className="sm:hidden" />digital products <br className="hidden sm:inline" /> designed to drive growth.
          </p>
          <div className="flex flex-row gap-2.5 sm:gap-3 mb-8 w-full max-w-[340px] sm:max-w-none sm:w-fit animate-[fadeUp_0.7s_ease-out_0.5s_both]">
            <a href="#contact" className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-linear-to-b from-[var(--accent)] via-blue-600 to-blue-200 text-white rounded-full pl-4 pr-2 py-4 sm:pl-5 sm:pr-2 sm:py-[7px] font-display font-bold text-[14px] sm:text-[17px] transition-all duration-300 
            transition-all duration-200 active:scale-98 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-white/20 ring-inset ring-offset-2 ring-offset-primary hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 whitespace-nowrap">
              Book a Call <span className="ml-2 sm:ml-3 bg-neutral-50 text-blue-500 rounded-full w-7 h-7 sm:w-11 sm:h-11 flex items-center justify-center shrink-0  ">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#0055FF"></path>
                </svg>
              </span>
            </a>
            <a href="#contact" className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-black text-neutral-50 rounded-full pl-4 pr-2 py-4 sm:pl-5 sm:pr-2 sm:py-[7px] font-display font-bold text-[14px] sm:text-[17px] transition-all duration-300 
            transition-all duration-200 active:scale-98 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)_inset] ring ring-black/10 ring-inset ring-offset-2 ring-offset-neutral-100 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.6)_inset] hover:ring-black/20 whitespace-nowrap">
              Get in touch <span className="ml-2 sm:ml-3 bg-linear-to-b from-[var(--accent)] via-blue-600 to-blue-200 text-white rounded-full w-7 h-7 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffffff"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4 animate-[fadeUp_0.6s_ease-out_0.6s_both]">
            <div className="flex bg-[#EAEAEA] rounded-full p-0.8 pr-3 md:p-1 md:pr-5 items-center">
              <div className="flex">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-300 -ml-1.5 md:-ml-2 first:ml-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-400 -ml-2.5 md:-ml-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-500 -ml-2.5 md:-ml-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" alt="user" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="ml-2.5 md:ml-3 flex flex-col justify-center">
                <div className="flex text-[#0055FF] text-[10px] md:text-[12px] leading-none mb-0.5 md:mb-1">
                  ★★★★★
                </div>
                <span className="font-sans font-bold text-[9px] md:text-[11px] text-[var(--dark)] leading-tight uppercase tracking-wide">Trusted by 99+ founders</span>
                <span className="font-sans font-medium text-[8px] md:text-[9px] text-[var(--muted)] leading-tight uppercase tracking-wider">Results speak, you're next.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[440px] sm:max-w-[500px] lg:max-w-none lg:w-full h-[520px] lg:h-[600px] xl:h-[700px] relative overflow-hidden flex gap-2 animate-[fadeUp_0.9s_ease-out_0.35s_both]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>

          {/* Left Column (Scrolls Up) */}
          <div className="w-1/2 flex flex-col gap-2 animate-[scrollYReverse_20s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div key={`left-${i}`} className="flex flex-col gap-2">
                {/* Kinect */}
                <div className="w-auto md:w-full h-[190px] md:h-[280px] bg-gradient-to-b from-gray-800 via-orange-800 to-orange-500 rounded-[25px] overflow-hidden relative group">
                  <div className="absolute inset-0 mix-blend-overlay opacity-60 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-sans font-medium tracking-tight text-3xl flex items-center gap-2">
                      <span className="font-bold border-[3.5px] border-white w-6 h-6 inline-block skew-x-[-15deg]"></span>
                      Kinect
                    </span>
                  </div>
                </div>
                {/* Fugitive */}
                <div className="w-auto md:w-full h-[190px] md:h-[300px] bg-[#1a4bcf] rounded-[25px] overflow-hidden relative group">
                  <div className="absolute inset-0 mix-blend-overlay opacity-50 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center saturate-200 contrast-150 grayscale"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-white font-sans font-medium text-[26px] flex items-center gap-2">
                      <span className="font-bold border-[3px] border-white w-5 h-5 rounded-[4px] inline-block -skew-x-[15deg]"></span>
                      Fugitive
                    </span>
                  </div>
                </div>
                {/* Off+Grid */}
                <div className="w-auto md:w-full h-[240px] md:h-[360px] bg-[#0A0A0A] rounded-[25px] overflow-hidden relative group p-4 md:p-8 flex flex-col justify-end items-center">
                  <div className="w-[120px] h-[180px] md:w-[140px] md:h-[220px] bg-[#161616] rounded-xl border border-[#222] shadow-2xl relative flex flex-col items-center justify-center mt-auto mb-2 md:mb-4">
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 font-sans text-white text-[8px] md:text-[9px] max-w-[70px] md:max-w-[80px] leading-tight text-left text-gray-400">Fund your card with any crypto in seconds no waiting.</div>
                    <div className="w-8 h-8 md:w-10 md:h-10 border-[2.5px] md:border-[3px] border-white rounded-[8px] md:rounded-[10px] mt-6 md:mt-8"></div>
                    <div className="font-sans font-bold text-[8px] md:text-[10px] text-gray-400 absolute bottom-3 md:bottom-4">Off+Grid</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Scrolls Up Slower or scrolling down) */}
          <div className="w-1/2 flex flex-col gap-2 animate-[scrollY_20s_linear_infinite] mt-[-150px]">
            {[...Array(2)].map((_, i) => (
              <div key={`right-${i}`} className="flex flex-col gap-2">
                {/* Menu/SCROLL */}
                <div className="w-auto md:w-full h-[190px] md:h-[220px] bg-gradient-to-br from-[#2a1a10] to-black rounded-[25px] overflow-hidden relative group p-4 md:p-6">
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-[12px] px-3 py-1.5 md:px-4 md:py-2 rounded-[10px] md:rounded-[14px] flex items-center font-sans">
                    Menu <span className="ml-2 bg-white/20 px-1.5 rounded text-[10px] font-mono leading-none py-0.5">+</span>
                  </div>
                  <div className="absolute bottom-6 right-6 font-display italic text-white/50 text-xl font-bold tracking-widest">SCROLL</div>
                </div>
                {/* Forget the system */}
                <div className="w-auto md:w-full h-[210px] md:h-[320px] bg-gradient-to-b from-[#111] to-[#000] rounded-[25px] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                    <h3 className="text-white font-sans text-[18px] md:text-[22px] leading-[1.1] font-medium max-w-[145px] md:max-w-[180px] tracking-tight">Forget the system<br />Own your freedom</h3>
                  </div>
                  <div className="absolute right-4 top-4 md:right-6 md:top-6 text-white/60 text-[8px] md:text-[10px] font-sans">Off+Grid</div>
                </div>
                {/* Lumibuild Studio */}
                <div className="w-auto md:w-full h-[210px] md:h-[320px] bg-[#1a4bcf] rounded-[25px] overflow-hidden relative group flex items-center justify-center">
                  <span className="text-white font-sans font-medium text-xl md:text-2xl flex items-center gap-2.5 md:gap-3">
                    <span className="grid gap-[2.5px] md:gap-[3px] grid-cols-2 grid-rows-2">
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-[1.5px] md:border-[2px] border-white block"></span>
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-[1.5px] md:border-[2px] border-white block"></span>
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-[1.5px] md:border-[2px] border-white block"></span>
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 border-[1.5px] md:border-[2px] border-white block"></span>
                    </span>
                    Lumibuild<br />Studio®
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\\'0 0 256 256\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\'%3E%3Cfilter id=\\\'noise\\\'%3E%3CfeTurbulence type=\\\'fractalNoise\\\' baseFrequency=\\\'0.9\\\' numOctaves=\\\'4\\\' stitchTiles=\\\'stitch\\\'/%3E%3C/filter%3E%3Crect width=\\\'100%25\\\' height=\\\'100%25\\\' filter=\\\'url(%23noise)\\\' opacity=\\\'1\\\'/%3E%3C/svg%3E")' }} aria-hidden="true"></div>
    </section>
  );
}
