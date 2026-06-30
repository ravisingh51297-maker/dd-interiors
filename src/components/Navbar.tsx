import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { contactInfo } from "../data";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Wallpapers", href: "#wallpaper" },
    { name: "Design Studio", href: "#visualizer" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-sans text-[14px] font-medium tracking-wide text-slate-600 hover:text-brand-blue-500 transition-colors duration-200 relative group py-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Direct CTA */}
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-1.5 text-slate-700 hover:text-brand-blue-500 font-sans text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-gold animate-bounce" />
                  <span className="hidden lg:inline">{contactInfo.phoneDisplay}</span>
                </a>
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-sans text-sm font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  Consult Now
                </a>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-brand-blue-500 p-1 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-b border-slate-100 shadow-inner"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-sans text-base font-semibold text-slate-700 hover:text-brand-blue-500 hover:bg-slate-50 px-3 py-2 rounded-lg transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 px-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-slate-700 font-semibold text-sm hover:text-brand-blue-500"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    {contactInfo.phoneDisplay}
                  </a>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-blue-500 text-white text-center font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Get Quote on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
