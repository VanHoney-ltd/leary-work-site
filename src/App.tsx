import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import useLenis from './hooks/useLenis';
import { siteConfig } from './config';
import Hero from './sections/Hero';
import OldStandard from './sections/OldStandard';
import ArtfulInquiry from './sections/ArtfulInquiry';
import NovaSignal from './sections/NovaSignal';
import GhostSec from './sections/GhostSec';
import About from './sections/About';
import Footer from './sections/Footer';
import Gallery from './Gallery';

function HomePage() {
  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-void-black overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Old Standard Construction */}
      <OldStandard />

      {/* Artful Inquiry - Video & Artwork */}
      <ArtfulInquiry />

      {/* NovaSignal - Business Development */}
      <NovaSignal />

      {/* GhostSec - Software Development */}
      <GhostSec />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
