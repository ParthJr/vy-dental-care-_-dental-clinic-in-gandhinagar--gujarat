import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLINIC_CONFIG } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onBookClick }) => {
  const compRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const lavenderBgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // 1. Headline reveal
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 }
        );
      }

      // 2. Controlled image clip-path reveal & subtle move of lavender shape
      if (imageBoxRef.current && lavenderBgRef.current) {
        tl.fromTo(
          lavenderBgRef.current,
          { scale: 0.95, opacity: 0, rotate: -4 },
          { scale: 1, opacity: 1, rotate: -2, duration: 0.8 },
          '-=0.6'
        ).fromTo(
          imageBoxRef.current,
          { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 },
          { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 1.0 },
          '-=0.7'
        );
      }

      // 3. Supporting copy fade-in
      if (copyRef.current) {
        tl.fromTo(
          copyRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        );
      }

      // 4. Staggered CTA entrances
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          '-=0.4'
        );
      }
    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={compRef} className="relative w-full overflow-hidden bg-[#FCFAF7] pt-8 pb-16 lg:py-24">
      {/* Ambient Organic Background Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#E5DBF9]/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#FFDAD6]/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 z-10">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5DBF9]/70 text-[#1B0E27]">
              <span className="w-2 h-2 rounded-full bg-[#DF6D65] animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#22162F]">
                {CLINIC_CONFIG.name.toUpperCase()} · {CLINIC_CONFIG.location.city.toUpperCase()}
              </span>
            </div>

            {/* Main Headline */}
            <h1 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1B0E27] leading-[1.12]">
              FEEL GOOD ABOUT <br />
              <span className="font-editorial italic font-normal text-[#DF6D65]">Your Smile.</span>
            </h1>

            {/* Supporting Copy */}
            <p ref={copyRef} className="text-base sm:text-lg text-[#4A454C] max-w-xl leading-relaxed">
              Explore your dental care options, understand your choices, and take the next step toward better oral health with warm, considered guidance from your dental professional.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#treatments"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="inline-flex items-center justify-center bg-[#DF6D65] text-white hover:bg-[#b04a43] transition-all duration-300 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm cursor-pointer"
              >
                EXPLORE TREATMENTS
              </a>
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center bg-[#EAE8E5] text-[#1B0E27] hover:bg-[#E5DBF9] transition-all duration-300 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                BOOK A CONSULTATION
              </button>
            </div>

            {/* Google Reviews Reputation Indicator */}
            <div className="flex items-center gap-2.5 pt-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#30233D] text-white">
                <span className="material-symbols-outlined text-[16px] text-[#FFB3AC]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#1B0E27]">{CLINIC_CONFIG.rating.score}</span>
                <div className="flex text-[#DF6D65]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={CLINIC_CONFIG.rating.googleProfileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-[#4A454C] hover:text-[#1B0E27] hover:underline"
              >
                · {CLINIC_CONFIG.rating.reviewCount} Google reviews
              </a>
            </div>

          </div>

          {/* Right Visual Frame (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[460px]">
              
              {/* Soft Lavender Background Card Shape */}
              <div
                ref={lavenderBgRef}
                className="absolute -bottom-6 -left-6 w-full h-full bg-[#E5DBF9] rounded-[48px] -rotate-2 transform transition-transform duration-700 hover:rotate-0"
              />

              {/* Main Image Frame */}
              <div
                ref={imageBoxRef}
                className="relative overflow-hidden bg-white rounded-[40px_140px_40px_40px] shadow-xl border border-[#CCC4CD]/30"
              >
                <img
                  src={CLINIC_CONFIG.heroImageUrl}
                  alt="Modern gentle dental practice in Gandhinagar Gujarat"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Resilient Fallback
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>

              {/* Floating Editorial Pill */}
              <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-[#1B0E27] z-20 border border-[#CCC4CD]/30">
                <span className="material-symbols-outlined text-[18px] text-[#DF6D65]">spa</span>
                <span className="text-xs font-medium">Gandhinagar Practice · Calming, Modern Care</span>
              </div>

              {/* Curved SVG Smile Line Motif */}
              <svg
                className="absolute -top-8 -right-6 w-24 h-24 text-[#DF6D65]/40 pointer-events-none"
                fill="none"
                viewBox="0 0 100 100"
              >
                <path d="M10,40 Q50,90 90,40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
