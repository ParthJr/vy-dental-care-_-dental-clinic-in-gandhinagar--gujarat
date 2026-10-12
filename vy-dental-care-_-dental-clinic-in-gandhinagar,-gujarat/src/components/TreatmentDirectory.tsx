import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLINIC_CONFIG } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentDirectoryProps {
  onSelectService: (serviceName: string) => void;
}

export const TreatmentDirectory: React.FC<TreatmentDirectoryProps> = ({ onSelectService }) => {
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
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
    <section id="treatments" ref={sectionRef} className="w-full bg-[#FCFAF7] py-16 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DF6D65] block mb-2">
              TREATMENTS &amp; PROCEDURES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B0E27]">
              WHAT CAN WE HELP YOU WITH?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A454C] max-w-md leading-relaxed">
            Explore common dental care categories and learn what you may wish to discuss during your personalized consultation.
          </p>
        </div>

        {/* Bento Grid Layout matching Google Stitch design */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Preventive & General Dentistry (Featured 7 cols) */}
          <div className="lg:col-span-7 bg-[#E5DBF9]/40 p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#CCC4CD]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#E5DBF9] text-[#665F78]">
                  Foundational Care
                </span>
                <span className="text-xs text-[#4A454C]">Routine Check &amp; Prevention</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B0E27]">
                Preventive &amp; General Dentistry
              </h3>
              <p className="text-sm sm:text-base text-[#4A454C] leading-relaxed">
                Regular dental assessments can help identify concerns early and support an oral health plan tailored to your needs. When consultation may be useful: Annual examinations, teeth scale and polish, or routine preservation.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium shadow-xs">
                  Dental Check-ups
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium shadow-xs">
                  Preventive Oral Care
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium shadow-xs">
                  Professional Cleaning
                </span>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onSelectService('Preventive & General Dentistry')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B0E27] hover:text-[#DF6D65] transition-colors cursor-pointer group"
              >
                <span>Book General Exam</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Card 2: Cosmetic Dentistry (5 cols) */}
          <div className="lg:col-span-5 bg-[#F5F3F0] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#CCC4CD]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#E4E2DF] text-[#4A454C]">
                  Aesthetic Harmony
                </span>
                <span className="material-symbols-outlined text-[#1B0E27] text-[24px]">auto_awesome</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B0E27]">
                Cosmetic Dentistry
              </h3>
              <p className="text-sm text-[#4A454C] leading-relaxed">
                Discuss your smile goals, available options, suitability, maintenance, and potential limitations before deciding on elective cosmetic enhancement.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium">
                  Porcelain Veneers
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium">
                  Cosmetic Consultations
                </span>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onSelectService('Cosmetic Dentistry')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B0E27] hover:text-[#DF6D65] transition-colors cursor-pointer group"
              >
                <span>Smile Evaluation Enquiry</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Card 3: Diagnostic Care (5 cols) */}
          <div className="lg:col-span-5 bg-[#F5F3F0] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#CCC4CD]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#E4E2DF] text-[#4A454C]">
                  Precision Imaging
                </span>
                <span className="material-symbols-outlined text-[#1B0E27] text-[24px]">radiology</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B0E27]">
                Diagnostic Care
              </h3>
              <p className="text-sm text-[#4A454C] leading-relaxed">
                Your dental professional can determine whether diagnostic digital imaging or specialized evaluations are required to examine underlying bone and root structures accurately.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium">
                  Digital Dental X-Rays
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-[#1B0E27] text-xs font-medium">
                  Clinical Investigations
                </span>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onSelectService('Diagnostic Care')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B0E27] hover:text-[#DF6D65] transition-colors cursor-pointer group"
              >
                <span>Inquire on Imaging</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Card 4: Urgent Dental Concerns (Full Plum Strip 7 cols) */}
          <div className="lg:col-span-7 bg-[#30233D] text-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#A89ABD]/20 flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-col gap-4 z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#570609] text-[#FFDAD6]">
                  Prompt Assistance
                </span>
                <span className="material-symbols-outlined text-[#DF6D65] text-[24px]">notification_important</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Urgent Dental Concerns
              </h3>
              <p className="text-sm text-[#CCC2DF] leading-relaxed">
                If you experience sudden severe dental discomfort or an accidental injury, reach out to the clinic promptly to discuss triage, immediate comfort steps, and same-day assessment slots.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-[#1B0E27] text-[#E8DEFC] text-xs font-medium">
                  Assessment of Dental Pain
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1B0E27] text-[#E8DEFC] text-xs font-medium">
                  Urgent Consultations
                </span>
              </div>
            </div>
            <div className="pt-6 z-10 flex items-center justify-between flex-wrap gap-3">
              <a
                href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
                className="inline-flex items-center gap-2 bg-[#DF6D65] text-white hover:bg-[#b04a43] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Clinic: {CLINIC_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TreatmentDirectory;
