import React, { useState } from 'react';
import { CLINIC_CONFIG, PATIENT_GUIDE_FAQS } from '../config/clinicData';

export const PatientGuide: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="patient-guide" className="w-full bg-[#FCFAF7] py-16 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Context Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#DF6D65]">
              TRANSPARENT CLINICAL ADVICE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B0E27]">
              A FEW THINGS WORTH KNOWING.
            </h2>
            <p className="text-sm sm:text-base text-[#4A454C] leading-relaxed">
              We believe an informed patient is an empowered patient. Browse common questions to understand the nuances of standard visits and aesthetic procedures.
            </p>

            {/* Direct Help Callout */}
            <div className="p-6 rounded-2xl bg-[#F5F3F0] mt-2 border border-[#CCC4CD]/30">
              <div className="flex items-center gap-2 text-[#1B0E27] mb-2">
                <span className="material-symbols-outlined text-[#DF6D65]">help_outline</span>
                <span className="text-sm font-semibold">Have a specific question?</span>
              </div>
              <p className="text-xs text-[#4A454C] mb-4 leading-relaxed">
                Feel free to call our reception directly or ask our dental clinicians in Gandhinagar during your appointment.
              </p>
              <a
                href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
                className="inline-flex items-center gap-2 text-[#1B0E27] font-semibold text-xs uppercase tracking-wider hover:text-[#DF6D65] transition-colors"
              >
                <span>Call {CLINIC_CONFIG.contact.phoneDisplay}</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>
          </div>

          {/* Right Fluid Accordion Panels (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {PATIENT_GUIDE_FAQS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-[#CCC4CD]/30 overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`answer-${item.id}`}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#30233D]/20"
                  >
                    <span className="text-base sm:text-lg font-medium text-[#1B0E27]">
                      {item.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#1B0E27] text-[24px] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-45 text-[#DF6D65]' : ''
                      }`}
                    >
                      add
                    </span>
                  </button>

                  <div
                    id={`answer-${item.id}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-sm text-[#4A454C] leading-relaxed border-t border-[#CCC4CD]/15 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PatientGuide;
