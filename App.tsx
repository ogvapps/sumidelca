import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Brands from './components/Brands';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import { LanguageProvider } from './context/LanguageContext';
import { TRANSLATIONS } from './constants';

export default function App() {
  return (
    <LanguageProvider translations={TRANSLATIONS}>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Catalog />
        <About />
        <Brands />
        <FAQ />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}