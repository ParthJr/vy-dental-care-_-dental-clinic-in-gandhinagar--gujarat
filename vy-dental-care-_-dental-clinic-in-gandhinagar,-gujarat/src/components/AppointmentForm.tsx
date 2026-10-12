import React, { useState } from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';
import { AppointmentFormData, FormSubmissionStatus } from '../types';

interface AppointmentFormProps {
  initialService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    mobileNumber: '',
    service: initialService || 'Preventive & Check-up',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 1:00 PM)',
    message: '',
    privacyConsent: false,
  });

  const [status, setStatus] = useState<FormSubmissionStatus>({
    submitting: false,
    success: false,
    error: null,
  });

  // Calculate minimum date (today)
  const todayStr = new Date().toISOString().split('T')[0];

  // Sync initialService if changed
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
    // Clear error on input
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate full name
    if (!formData.fullName.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your full name.' });
      return;
    }

    // 2. Validate Indian mobile number format (10 digits starting with 6, 7, 8, or 9)
    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(cleanMobile)) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please enter a valid 10-digit Indian mobile number (e.g. 98765 43210).',
      });
      return;
    }

    // 3. Validate date (not past)
    if (!formData.preferredDate) {
      setStatus({ submitting: false, success: false, error: 'Please select a preferred date.' });
      return;
    }
    if (formData.preferredDate < todayStr) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Preferred appointment date cannot be in the past.',
      });
      return;
    }

    // 4. Validate privacy consent
    if (!formData.privacyConsent) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please check the consent box so our clinic team may reach you.',
      });
      return;
    }

    // Processing submission
    setStatus({ submitting: true, success: false, error: null });

    setTimeout(() => {
      // Record enquiry state
      setStatus({ submitting: false, success: true, error: null });
    }, 800);
  };

  return (
    <section id="booking-form" className="w-full bg-[#FCFAF7] py-16 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-[#E5DBF9]/30 rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#CCC4CD]/30 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Context & Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#DF6D65] block mb-2">
                  CONSULTATION ENQUIRY
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B0E27] mb-4">
                  LET'S TALK ABOUT YOUR SMILE.
                </h2>
                <p className="text-sm sm:text-base text-[#4A454C] mb-8 leading-relaxed">
                  Tell us how to reach you and what you would like to discuss. Our clinic team will connect with you to confirm specific appointment availability.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1B0E27] text-[20px] mt-0.5">timer</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">Swift Response</h4>
                      <p className="text-xs text-[#4A454C]">We respond promptly to scheduling requests.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1B0E27] text-[20px] mt-0.5">health_and_safety</span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">Confidential Care</h4>
                      <p className="text-xs text-[#4A454C]">Your dental details and contact records are held securely.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Call Reminder */}
              <div className="mt-8 p-4 bg-white rounded-xl border border-[#CCC4CD]/30">
                <span className="text-xs text-[#4A454C] block mb-1">Prefer immediate booking by phone?</span>
                <a
                  href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
                  className="inline-flex items-center gap-1.5 text-[#1B0E27] text-xs font-semibold uppercase tracking-wider hover:text-[#DF6D65]"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call {CLINIC_CONFIG.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Column 2: Interactive Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xs border border-[#CCC4CD]/30">
              {status.success ? (
                <div className="p-8 bg-[#E5DBF9]/50 rounded-2xl text-[#1B0E27] flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#30233D] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-semibold">Consultation Request Received</h3>
                  <p className="text-sm text-[#4A454C] max-w-md leading-relaxed">
                    Thank you, <strong className="text-[#1B0E27]">{formData.fullName}</strong>. Your enquiry for <strong>{formData.service}</strong> on <strong>{formData.preferredDate}</strong> has been logged. Our clinic team in Gandhinagar will call you at <strong>+91 {formData.mobileNumber}</strong> shortly to confirm final appointment details.
                  </p>
                  <button
                    onClick={() => {
                      setStatus({ submitting: false, success: false, error: null });
                      setFormData((prev) => ({
                        ...prev,
                        fullName: '',
                        mobileNumber: '',
                        message: '',
                        privacyConsent: false,
                      }));
                    }}
                    className="mt-2 px-6 py-2.5 bg-[#30233D] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#570609] transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  {/* Validation Error Banner */}
                  {status.error && (
                    <div className="p-4 bg-[#FFDAD6] text-[#93000A] rounded-xl text-xs font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">error</span>
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">
                        Full Name <span className="text-[#DF6D65]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Patel"
                        required
                        className="w-full bg-[#F5F3F0] px-4 py-3 rounded-lg text-sm text-[#1B1C1A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#30233D]/20 border border-transparent focus:border-[#30233D] transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="mobileNumber" className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">
                        Mobile Number <span className="text-[#DF6D65]">*</span>
                      </label>
                      <div className="flex items-center bg-[#F5F3F0] rounded-lg border border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-[#30233D]/20 focus-within:border-[#30233D] transition-all">
                        <span className="px-3 text-sm text-[#4A454C] font-semibold border-r border-[#CCC4CD]/40">+91</span>
                        <input
                          type="tel"
                          id="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="98765 43210"
                          required
                          className="w-full bg-transparent px-3 py-3 text-sm text-[#1B1C1A] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#F5F3F0] px-4 py-3 rounded-lg text-sm text-[#1B1C1A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#30233D]/20 border border-transparent focus:border-[#30233D] transition-all cursor-pointer"
                    >
                      <option value="Preventive & General Dentistry">Preventive &amp; General Dentistry</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Porcelain Veneers">Porcelain Veneers Inquiry</option>
                      <option value="Diagnostic Care">Diagnostic Care &amp; X-rays</option>
                      <option value="Urgent Dental Concerns">Urgent Dental Concerns</option>
                      <option value="Other Dental Care">Other Dental Consultation</option>
                    </select>
                  </div>

                  {/* Date and Preferred Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="preferredDate" className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">
                        Preferred Date <span className="text-[#DF6D65]">*</span>
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        min={todayStr}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#F5F3F0] px-4 py-3 rounded-lg text-sm text-[#1B1C1A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#30233D]/20 border border-transparent focus:border-[#30233D] transition-all cursor-pointer"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="preferredTime" className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">
                        Preferred Time of Day
                      </label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-[#F5F3F0] px-4 py-3 rounded-lg text-sm text-[#1B1C1A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#30233D]/20 border border-transparent focus:border-[#30233D] transition-all cursor-pointer"
                      >
                        <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-[#1B0E27] uppercase tracking-wider">
                      Optional Message or Specific Concerns
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about any specific tooth discomfort, questions, or visit preferences..."
                      className="w-full bg-[#F5F3F0] px-4 py-3 rounded-lg text-sm text-[#1B1C1A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#30233D]/20 border border-transparent focus:border-[#30233D] transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-[#A89ABD] accent-[#30233D] cursor-pointer"
                    />
                    <label htmlFor="privacyConsent" className="text-xs text-[#4A454C] leading-relaxed cursor-pointer">
                      I agree that VY Dental Care may contact me regarding appointment scheduling and consultation details in accordance with patient privacy standards.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full py-3.5 px-6 rounded-full bg-[#DF6D65] hover:bg-[#b04a43] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                    >
                      {status.submitting ? 'Recording Request...' : 'Request an Appointment'}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
