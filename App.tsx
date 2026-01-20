import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { AboutUs } from '@/app/pages/AboutUs';
import { WhatWeDo } from '@/app/pages/WhatWeDo';
import { OurExpertise } from '@/app/pages/OurExpertise';
import { SampleWork } from '@/app/pages/SampleWork';
import { WhyUs } from '@/app/pages/WhyUs';
import { ContactUs } from '@/app/pages/ContactUs';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/expertise" element={<OurExpertise />} />
            <Route path="/sample-work" element={<SampleWork />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
