import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLINIC_PRINCIPLES } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Reveal Title & Intro
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stagger Principles & Animated Card Boundaries
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-[#30233D] text-white py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Block */}
        <div ref={titleRef} className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#CCC2DF] block mb-2">
            THE VY APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            GOOD DENTAL CARE STARTS WITH <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-[#E8DEFC]">Understanding.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#CCC2DF] leading-relaxed">
            Every visit begins with understanding your concerns, discussing your priorities, and helping you explore the care options relevant to your personal wellbeing.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2"
        >
          {CLINIC_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="flex flex-col gap-4 bg-[#1B0E27]/40 p-6 lg:p-8 rounded-2xl border border-[#A89ABD]/15 transition-all duration-300 hover:bg-[#1B0E27]/70 hover:border-[#A89ABD]/30 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-editorial italic text-2xl text-[#E8DEFC]">
                  {principle.number}
                </span>
                <span className="material-symbols-outlined text-[#CCC2DF] text-[26px]">
                  {principle.iconName}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {principle.title}
              </h3>
              <p className="text-sm text-[#CCC2DF] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
