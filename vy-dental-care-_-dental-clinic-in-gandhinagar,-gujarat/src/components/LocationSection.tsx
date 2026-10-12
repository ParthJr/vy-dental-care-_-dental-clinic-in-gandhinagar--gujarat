import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-[#F5F3F0] py-16 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Details & Actions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#DF6D65] block mb-2">
                PRACTICE LOCATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B0E27]">
                COME SAY HELLO.
              </h2>
              <p className="text-sm sm:text-base text-[#4A454C] mt-2">
                Located in Gandhinagar, Gujarat. Modern, peaceful dental sanctuary crafted for your comfort.
              </p>
            </div>

            <div className="flex flex-col gap-5 pt-2">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5DBF9] text-[#1B0E27] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">Clinic Address</h4>
                  <p className="text-sm text-[#4A454C]">{CLINIC_CONFIG.location.formattedAddress}</p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5DBF9] text-[#1B0E27] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">Consultation Hours</h4>
                  <p className="text-sm text-[#4A454C]">{CLINIC_CONFIG.hours.displayHours}</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5DBF9] text-[#1B0E27] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">Telephone Inquiries</h4>
                  <a
                    href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
                    className="text-sm font-semibold text-[#1B0E27] hover:text-[#DF6D65] transition-colors"
                  >
                    {CLINIC_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
                className="inline-flex items-center gap-2 bg-[#1B0E27] text-white hover:bg-[#30233D] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Clinic</span>
              </a>
              <a
                href={CLINIC_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E4E2DF] text-[#1B0E27] hover:bg-[#E5DBF9] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Map View Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white p-3 border border-[#CCC4CD]/30">
              <div
                className="w-full h-96 bg-cover bg-center rounded-2xl relative overflow-hidden"
                style={{ backgroundImage: `url('${CLINIC_CONFIG.mapImageUrl}')` }}
              >
                {/* Floating Location Badge */}
                <div className="absolute inset-0 bg-[#1B0E27]/10 flex items-center justify-center p-4">
                  <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs border border-[#CCC4CD]/30">
                    <div className="w-10 h-10 rounded-full bg-[#DF6D65] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">dentistry</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#1B0E27]">{CLINIC_CONFIG.name}</h5>
                      <p className="text-xs text-[#4A454C]">
                        {CLINIC_CONFIG.location.city}, {CLINIC_CONFIG.location.state} {CLINIC_CONFIG.location.pincode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
