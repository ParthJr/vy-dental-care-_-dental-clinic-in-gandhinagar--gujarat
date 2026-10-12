import React, { useState } from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  onBookClick: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, activeSection }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero', sectionId: 'hero' },
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Treatments', href: '#treatments', sectionId: 'treatments' },
    { label: 'Patient Guide', href: '#patient-guide', sectionId: 'patient-guide' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FCFAF7]/90 backdrop-blur-xl border-b border-[#CCC4CD]/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          
          {/* Brand Zone */}
          <a href="#hero" className="flex items-center gap-2 group text-left">
            <img 
              src={CLINIC_CONFIG.logoUrl} 
              alt={`${CLINIC_CONFIG.name} Logo`} 
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-lg lg:text-xl tracking-tight text-[#1B0E27] group-hover:text-[#30233D] transition-colors">
                {CLINIC_CONFIG.name.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#4A454C] font-medium hidden sm:inline-block">
                {CLINIC_CONFIG.location.city} · {CLINIC_CONFIG.location.state}
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-all py-1 border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'text-[#1B0E27] font-semibold border-[#DF6D65]'
                      : 'text-[#4A454C] border-transparent hover:text-[#1B0E27] hover:border-[#CCC4CD]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-4">
            {/* Phone Click-to-Call */}
            <a
              href={`tel:${CLINIC_CONFIG.contact.phoneTel}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-[#4A454C] hover:text-[#1B0E27] transition-colors text-sm font-medium"
              title="Call VY Dental Care"
            >
              <span className="material-symbols-outlined text-[18px] text-[#DF6D65]">call</span>
              <span>{CLINIC_CONFIG.contact.phoneDisplay}</span>
            </a>

            {/* Book a Visit Primary CTA */}
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center bg-[#30233D] text-white hover:bg-[#570609] hover:text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
            >
              Book a Visit
            </button>

            {/* User Account / Profile icon placeholder match */}
            <div className="w-8 h-8 rounded-full bg-[#1B0E27] flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 text-[#1B1C1A] hover:text-[#1B0E27] focus:outline-none focus:ring-2 focus:ring-[#30233D]/20 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileNavOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onBookClick={() => {
          setMobileNavOpen(false);
          onBookClick();
        }}
      />
    </>
  );
};

export default Header;
