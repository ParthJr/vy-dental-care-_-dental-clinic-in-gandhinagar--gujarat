import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TreatmentDirectory from './components/TreatmentDirectory';
import SmileJourneySection from './components/SmileJourneySection';
import PatientGuide from './components/PatientGuide';
import PatientJourney from './components/PatientJourney';
import ReviewsSection from './components/ReviewsSection';
import AppointmentForm from './components/AppointmentForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState('Preventive & General Dentistry');

  // Handle active section tracking for smooth scroll navigation
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'treatments', 'patient-guide', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const treatmentsElement = document.getElementById('treatments');
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1B1C1A] selection:bg-[#E5DBF9] selection:text-[#1B0E27]">
      
      {/* 1. Header Navigation */}
      <Header
        activeSection={activeSection}
        onBookClick={() => scrollToBooking()}
      />

      {/* Main Page Layout */}
      <main className="w-full pt-20">
        
        {/* 2. Hero Section */}
        <HeroSection
          onExploreClick={scrollToTreatments}
          onBookClick={() => scrollToBooking()}
        />

        {/* 3. About Section ("THE VY APPROACH") */}
        <AboutSection />

        {/* 4. Treatment Directory ("WHAT CAN WE HELP YOU WITH?") */}
        <TreatmentDirectory
          onSelectService={(serviceName) => scrollToBooking(serviceName)}
        />

        {/* 5. Smile Journey Section ("UNDERSTAND YOUR OPTIONS") */}
        <SmileJourneySection
          onRequestConsultation={() => scrollToBooking()}
        />

        {/* 6. Patient Guide ("A FEW THINGS WORTH KNOWING") */}
        <PatientGuide />

        {/* 7. Patient Journey ("FROM FIRST CONTACT TO YOUR CARE PLAN") */}
        <PatientJourney />

        {/* 8. Reviews Section ("REPUTATION BUILT ON GENTLE CARE") */}
        <ReviewsSection />

        {/* 9. Appointment Enquiry Form */}
        <AppointmentForm initialService={selectedService} />

        {/* 10. Practice Location & Contact ("COME SAY HELLO") */}
        <LocationSection />

      </main>

      {/* 11. Footer */}
      <Footer />

    </div>
  );
}
