'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import WhyAlmeria from './components/WhyAlmeria';
import Requirements from './components/Requirements';
import Jobs from './components/Jobs';
import GoogleFormSection from './components/GoogleFormSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTopButton from './components/BackToTopButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <Header />
      <Hero />
      <WhyAlmeria />
      <Requirements />
      <Jobs />
      <GoogleFormSection />
      <Contact />
      <Footer />
      
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
