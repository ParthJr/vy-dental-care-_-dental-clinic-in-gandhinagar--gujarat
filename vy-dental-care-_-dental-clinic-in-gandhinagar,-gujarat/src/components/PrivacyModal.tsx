import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#CCC4CD]/40 overflow-y-auto flex flex-col gap-4">
        
        <div className="flex items-center justify-between border-b border-[#CCC4CD]/30 pb-4">
          <h3 className="text-xl font-bold text-[#1B0E27]">Privacy Policy</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#F5F3F0] text-[#1B0E27] cursor-pointer"
            aria-label="Close Privacy Policy"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#4A454C] leading-relaxed flex flex-col gap-3">
          <p>
            At <strong>{CLINIC_CONFIG.name}</strong> (Gandhinagar, Gujarat), we hold patient confidentiality and personal data protection in the highest regard. This Privacy Policy outlines how information collected through our consultation enquiry forms is handled.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">1. Information Collection</h4>
          <p>
            When you request a consultation through our website, we collect your full name, contact mobile number, service preferences, and optional notes to facilitate appointment scheduling.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">2. Use of Information</h4>
          <p>
            Your information is used strictly to communicate with you regarding your dental appointment requests, respond to inquiries, and provide clinical consultation scheduling details. We do not sell or lease patient records to third-party marketers.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">3. Confidentiality & Security</h4>
          <p>
            We implement reasonable physical, technical, and managerial safeguards to protect patient information from unauthorized access or disclosure.
          </p>

          <h4 className="font-semibold text-[#1B0E27] text-sm uppercase tracking-wider">4. Contact Us</h4>
          <p>
            If you have questions regarding your data privacy, you may contact our clinic directly at <strong>{CLINIC_CONFIG.contact.phoneDisplay}</strong> or visit our clinic in Gandhinagar, Gujarat 382419.
          </p>
        </div>

        <div className="pt-4 border-t border-[#CCC4CD]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#30233D] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#570609] transition-colors"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
};

export default PrivacyModal;
