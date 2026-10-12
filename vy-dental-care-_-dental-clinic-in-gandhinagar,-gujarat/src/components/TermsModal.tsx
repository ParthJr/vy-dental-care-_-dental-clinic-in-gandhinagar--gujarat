import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#CCC4CD]/40 overflow-y-auto flex flex-col gap-4">
        
        <div className="flex items-center justify-between border-b border-[#CCC4CD]/30 pb-4">
          <h3 className="text-xl font-bold text-[#1B0E27]">Terms of Use</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#F5F3F0] text-[#1B0E27] cursor-pointer"
            aria-label="Close Terms of Use"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#4A454C] leading-relaxed flex flex-col gap-3">
          <p>
            Welcome to the official website of <strong>{CLINIC_CONFIG.name}</strong>. By accessing this website, you agree to comply with these Terms of Use.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">1. Informational & Educational Purpose</h4>
          <p>
            The content provided on this website—including treatment descriptions, patient guide FAQs, and procedural summaries—is for general educational and informational purposes only. It does not constitute formal medical diagnosis or clinical treatment advice.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">2. Appointment Requests & Confirmations</h4>
          <p>
            Submitting a consultation enquiry through our online form does not constitute a guaranteed or confirmed appointment booking. Appointments are confirmed only after our reception team contacts you to verify time availability.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">3. Urgent Medical Emergencies</h4>
          <p>
            If you experience severe swelling that impairs breathing, swallowing, or acute trauma, seek immediate emergency hospital care.
          </p>
        </div>

        <div className="pt-4 border-t border-[#CCC4CD]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#30233D] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#570609] transition-colors"
          >
            Close Terms
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsModal;
