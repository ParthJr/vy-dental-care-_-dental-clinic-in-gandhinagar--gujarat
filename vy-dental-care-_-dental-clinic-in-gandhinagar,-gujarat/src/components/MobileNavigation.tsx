import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
  onBookClick: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onBookClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Container */}
      <div className="fixed top-20 right-4 left-4 sm:left-auto sm:w-80 bg-white rounded-2xl shadow-[0_16px_36px_-12px_rgba(48,35,61,0.2)] border border-[#CCC4CD]/40 p-5 z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#E5DBF9] text-[#1B0E27] font-semibold'
                    : 'text-[#4A454C] hover:bg-[#F5F3F0] hover:text-[#1B1C1A]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DF6D65]"></span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="border-t border-[#CCC4CD]/30 pt-4 flex flex-col gap-2">
          {/* Call Link */}
          <a
            href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[#4A454C] hover:bg-[#F5F3F0] text-sm font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-[#DF6D65]">call</span>
            <span>{CLINIC_CONFIG.contact.phoneDisplay}</span>
          </a>

          {/* Book Button */}
          <button
            onClick={onBookClick}
            className="w-full py-3 bg-[#30233D] text-white hover:bg-[#570609] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm text-center"
          >
            Book a Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
