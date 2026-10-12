import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#EAE8E5] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xs border border-[#CCC4CD]/30 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Description Column */}
          <div className="flex flex-col items-start gap-3 max-w-xl">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#E5DBF9] text-[#1B0E27]">
              PATIENT TRUST &amp; FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B0E27]">
              REPUTATION BUILT ON GENTLE CARE.
            </h2>
            <p className="text-sm sm:text-base text-[#4A454C] leading-relaxed">
              Verified patient feedback from families and individuals across Gandhinagar, Gujarat who trust VY Dental Care for tranquil, clinical precision.
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_CONFIG.rating.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#DF6D65] text-xs uppercase font-semibold tracking-wider hover:underline"
              >
                <span>Read All Google Reviews</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Right Rating Highlight Card */}
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#F5F3F0] p-8 rounded-2xl w-full lg:w-auto border border-[#CCC4CD]/30">
            <div className="flex flex-col items-center shrink-0">
              <span className="text-5xl sm:text-6xl font-bold text-[#1B0E27] tracking-tight">
                {CLINIC_CONFIG.rating.score}
              </span>
              <div className="flex text-[#DF6D65] my-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <span className="text-xs text-[#4A454C] font-medium">
                {CLINIC_CONFIG.rating.reviewCount} Google reviews
              </span>
            </div>

            <div className="flex flex-col gap-2 border-t sm:border-t-0 sm:border-l border-[#CCC4CD]/40 pt-4 sm:pt-0 sm:pl-6 text-left">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#DF6D65] text-[20px]">verified</span>
                <span className="text-sm font-semibold text-[#1B0E27]">100% Authentic Ratings</span>
              </div>
              <p className="text-xs text-[#4A454C] max-w-[220px] leading-relaxed">
                Recognized for patient comfort, pristine clinic hygiene, and clear communication.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
