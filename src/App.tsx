/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WallpaperShowcase from "./components/WallpaperShowcase";
import Visualizer from "./components/Visualizer";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative overflow-x-hidden">
        {/* Luxury Hero Banner */}
        <Hero />

        {/* Services / Product Specification Tab-Grid */}
        <Services />

        {/* Dynamic Wallpaper Catalogue Showcase */}
        <WallpaperShowcase />

        {/* Interactive Luxury Customizer & Visualizer */}
        <Visualizer />

        {/* Interactive Filterable Image Gallery */}
        <Gallery />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Accordion FAQs */}
        <FAQ />

        {/* Contact Form with real state & Embedded Maps */}
        <Contact />
      </main>

      {/* Footer with Floating WhatsApp Pulsator */}
      <Footer />
    </div>
  );
}

