import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PATIENT_JOURNEY_STEPS } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

export const PatientJourney: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.18,
            scrollTrigger: {
              trigger: stepsRef.current,
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
      ref={sectionRef}
      className="w-full bg-[#1B0E27] text-white py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#CCC2DF] block mb-2">
            THE PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            FROM FIRST CONTACT TO YOUR CARE PLAN.
          </h2>
        </div>

        {/* Timeline Grid (Horizontal Desktop / Vertical Mobile) */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative"
        >
          {PATIENT_JOURNEY_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-3 bg-[#30233D] p-6 lg:p-8 rounded-2xl border border-[#A89ABD]/15 relative transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: step.accentColor || '#DF6D65' }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-medium text-white">{step.title}</h3>
              <p className="text-sm text-[#CCC2DF] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PatientJourney;
