import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SMILE_STAGES } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

interface SmileJourneySectionProps {
  onRequestConsultation: () => void;
}

export const SmileJourneySection: React.FC<SmileJourneySectionProps> = ({
  onRequestConsultation,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
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
      ref={sectionRef}
      className="w-full bg-[#DCD2F0] py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B0E27] block mb-2">
            YOUR NEXT STEP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B0E27] mb-4">
            UNDERSTAND YOUR OPTIONS. <br />
            <span className="font-editorial italic font-normal text-[#30233D]">
              Move Forward with Confidence.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A454C] leading-relaxed">
            An informed dental decision starts with understanding your specific clinical needs, examination findings, and the range of solutions tailored to your schedule.
          </p>
        </div>

        {/* 3 Interactive Stage Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SMILE_STAGES.map((item) => (
            <div
              key={item.stage}
              className="bg-white p-8 rounded-2xl shadow-xs border border-[#CCC4CD]/30 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#DCD2F0] text-[#1B0E27] flex items-center justify-center text-xl font-bold font-sans">
                {item.stage}
              </div>
              <h3 className="text-xl font-semibold text-[#1B0E27]">{item.title}</h3>
              <p className="text-sm text-[#4A454C] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="flex justify-center">
          <button
            onClick={onRequestConsultation}
            className="inline-flex items-center justify-center bg-[#30233D] text-white hover:bg-[#570609] hover:text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
          >
            Request a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default SmileJourneySection;
