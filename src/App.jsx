import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DualAudience from './components/DualAudience';
import SchoolsGrid from './components/SchoolsGrid';
import WhyNZ from './components/WhyNZ';
import EventDetails from './components/EventDetails';
import WhyNetwork from './components/WhyNetwork';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleSelectSchool = (schoolName) => {
    setSelectedSchool(schoolName);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSelectSchool={handleSelectSchool} />

        {/* Dual Value Proposition: Parents & Students */}
        <DualAudience />

        {/* 6 New Zealand Schools Grid */}
        <SchoolsGrid onSelectSchool={handleSelectSchool} />

        {/* Why New Zealand */}
        <WhyNZ />

        {/* What will happen on September 17 (Event Timeline & Format) */}
        <EventDetails />

        {/* Why Network (Agency trust & 360 support) */}
        <WhyNetwork />

        {/* Main Lead Capture Form */}
        <LeadForm selectedSchool={selectedSchool} />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
