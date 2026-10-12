import React, { useState } from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#30233D] text-white border-t border-[#A89ABD]/15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-12">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Col 1: Brand & Identity (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={CLINIC_CONFIG.logoUrl}
                  alt={`${CLINIC_CONFIG.name} Logo`}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xl font-semibold tracking-tight text-white">
                  {CLINIC_CONFIG.name.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-[#CCC2DF] max-w-md leading-relaxed">
                Your Smile. Your Wellbeing. A thoughtful approach to oral wellness combining refined clinical artistry with tranquil care.
              </p>

              <div className="flex flex-col gap-2 pt-2 text-[#CCC2DF]">
                <div className="flex items-start gap-2 text-xs">
                  <span className="material-symbols-outlined text-[18px] text-[#FFB3AC] mt-0.5">location_on</span>
                  <span>{CLINIC_CONFIG.location.formattedAddress}</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="material-symbols-outlined text-[18px] text-[#FFB3AC] mt-0.5">schedule</span>
                  <span>{CLINIC_CONFIG.hours.displayHours}</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="material-symbols-outlined text-[18px] text-[#FFB3AC] mt-0.5">phone</span>
                  <a href={`tel:${CLINIC_CONFIG.contact.phoneTel}`} className="hover:text-white transition-colors">
                    {CLINIC_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-[#1B0E27]/60 border border-[#A89ABD]/20 px-4 py-2 rounded-full w-fit mt-2">
                <span className="material-symbols-outlined text-[#FFB3AC] text-[18px]">verified</span>
                <span className="text-xs font-semibold text-white">Google Reviews {CLINIC_CONFIG.rating.score}</span>
                <div className="flex text-[#FFB3AC]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[14px]">star</span>
                  ))}
                </div>
                <span className="text-xs text-[#CCC2DF]">({CLINIC_CONFIG.rating.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Col 2: Exploration Links (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <span className="text-xs font-semibold text-[#CCC2DF] uppercase tracking-widest">
                Exploration
              </span>
              <nav className="flex flex-col gap-2">
                <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About
                </a>
                <a href="#treatments" className="text-sm text-white/80 hover:text-white transition-colors">
                  Treatments
                </a>
                <a href="#patient-guide" className="text-sm text-white/80 hover:text-white transition-colors">
                  Patient Guide
                </a>
                <a href="#booking-form" className="text-sm text-white/80 hover:text-white transition-colors">
                  Book an Appointment
                </a>
                <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Col 3: Sanctuary & Legal (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-xs font-semibold text-[#CCC2DF] uppercase tracking-widest">
                Sanctuary &amp; Safety
              </span>
              <p className="text-xs text-[#CCC2DF] leading-relaxed">
                Experience tailored dental treatments designed with gentle precision, low-stress protocols, and bespoke consultation timelines.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-xs text-white/80 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-xs text-white/80 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Use
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#A89ABD]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-[#CCC2DF]">
              © {new Date().getFullYear()} VY Dental Care. All rights reserved. Gandhinagar, Gujarat.
            </p>
            <p className="font-editorial italic text-sm text-[#E8DEFC]">
              Your Smile. Your Wellbeing.
            </p>
          </div>

        </div>
      </footer>

      {/* Legal Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
};

export default Footer;
