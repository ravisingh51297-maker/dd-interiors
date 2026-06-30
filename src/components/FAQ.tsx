import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqs } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold font-sans text-xs font-bold uppercase tracking-[0.25em]">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Answers From Our Experts
          </h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about purchasing, measurements, and installing
            high-end architectural materials for your walls and floors.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-sans font-bold text-slate-850 hover:text-brand-blue-500 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold shrink-0" />
                    <span className="text-sm sm:text-base">{faq.question}</span>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-8 bg-white border border-slate-200/60 rounded-3xl shadow-sm max-w-2xl mx-auto">
          <h4 className="font-serif text-lg font-bold text-slate-900 mb-2">
            Still have queries or need a custom quotation?
          </h4>
          <p className="font-sans text-slate-600 text-sm mb-4">
            Connect with Owner <strong>Dilip Diwaker</strong> directly on phone or WhatsApp. We respond instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9999079009"
              className="bg-white border border-slate-300 hover:border-brand-blue-500 hover:text-brand-blue-500 font-sans text-xs font-bold px-6 py-3 rounded-lg transition-all"
            >
              Call +91 99990 79009
            </a>
            <a
              href="https://wa.me/919999079009?text=Hello%20Dilip%20ji%2C%20I%20have%20some%20questions%20regarding%20WPC%2FLouvers%2FFlooring."
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-sans text-xs font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-all hover:scale-105"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
