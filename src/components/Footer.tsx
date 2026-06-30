import { motion } from "motion/react";
import { Phone, MapPin, Mail, ArrowUp, MessageSquare } from "lucide-react";
import { contactInfo, services } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans pt-20 pb-10 relative">
      
      {/* Footer Top Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left">
          
          {/* Logo & Vision (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2.5 group">
              <Logo lightText={true} />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Established by <strong>Dilip Diwaker</strong>, DD Interiors delivers Delhi's most luxurious, weather-hardy, damp-proof WPC Louvers, PVC wall panelings, and highly resilient SPC and wooden flooring.
            </p>
            
            {/* Quick stats tags inside footer */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-slate-800 text-slate-300 font-sans text-[11px] px-3 py-1 rounded-md border border-slate-700/50">
                ⭐ 12+ Years Exp
              </span>
              <span className="bg-slate-800 text-slate-300 font-sans text-[11px] px-3 py-1 rounded-md border border-slate-700/50">
                💎 Premium Materials
              </span>
              <span className="bg-slate-800 text-slate-300 font-sans text-[11px] px-3 py-1 rounded-md border border-slate-700/50">
                📍 Lado Sarai Showroom
              </span>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-white font-bold text-base uppercase tracking-wider border-l-2 border-brand-gold pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-brand-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors">
                  Image Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-gold transition-colors">
                  FAQ Help
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Sourced Materials (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-bold text-base uppercase tracking-wider border-l-2 border-brand-gold pl-3">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((serv) => (
                <li key={serv.id}>
                  <a href="#services" className="hover:text-brand-gold transition-colors block">
                    {serv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Location & Contact Details (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-bold text-base uppercase tracking-wider border-l-2 border-brand-gold pl-3">
              Office & Studio
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white font-bold transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom Rights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div>
          © {currentYear} <strong>DD INTERIORS</strong>. All rights reserved. Managed by <strong>Dilip Diwaker</strong>.
        </div>
        <div className="flex gap-6">
          <span>Lado Sarai, New Delhi, India - 110030</span>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="text-brand-gold hover:text-white transition-colors flex items-center gap-1 font-bold bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-750 focus:outline-none"
            aria-label="Scroll back to top of the page"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={contactInfo.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer select-none group"
        title="Chat with Dilip Diwaker on WhatsApp"
        aria-label="Chat with Dilip Diwaker on WhatsApp"
      >
        {/* Pulsating Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none pointer-events-none" />
        
        {/* Message Indicator */}
        <span className="absolute -top-1 -left-1 bg-red-500 text-white font-sans text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center animate-pulse shadow-sm">
          1
        </span>

        <MessageSquare className="w-7 h-7 text-white fill-white relative z-10" />
      </motion.a>

    </footer>
  );
}
