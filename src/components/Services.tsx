import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ShieldAlert, ArrowRight, MessageSquare, ChevronRight, X } from "lucide-react";
import { services, contactInfo } from "../data";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleWhatsAppInquiry = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello Dilip ji (DD Interiors), I am interested in your ${serviceName} service. Please share catalogs, designs, and price ranges.`
    );
    window.open(`https://wa.me/919999079009?text=${text}`, "_blank");
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold font-sans text-xs font-bold uppercase tracking-[0.25em]"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4"
          >
            Exquisite Materials & Flawless Execution
          </motion.h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            We handpick raw compounds and premium fabrics to guarantee your interior
            renovations withstand weather, age, and dampness while radiating unparalleled luxury.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Service Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">
                  {service.name}
                </span>
              </div>

              {/* Service Details */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Key Benefits Snippet */}
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-sans text-xs font-semibold text-slate-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200/60">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 text-center font-sans text-xs font-bold tracking-wide text-brand-blue-500 hover:text-brand-blue-700 bg-brand-blue-50 hover:bg-brand-blue-100/70 py-3 rounded-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleWhatsAppInquiry(service.name)}
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-all hover:scale-105"
                    title="Inquire on WhatsApp"
                    aria-label={`Inquire about ${service.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Consultation Callout Box */}
        <div className="mt-16 bg-brand-blue-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue-500/25 rounded-full blur-xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.25em]">
                Delhi-NCR Special Offer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4">
                Get a Free Measuring & Sample Viewing Visit
              </h3>
              <p className="font-sans text-brand-blue-100 text-sm sm:text-base leading-relaxed">
                Dilip Diwaker and our technicians will visit your home with physical catalogs,
                take high-precision laser measurements, and offer a transparent estimate with
                zero hidden charges.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-brand-gold hover:bg-[#b4954f] text-white font-sans font-semibold text-sm px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all hover:scale-105 shrink-0 self-start lg:self-center"
            >
              Book Free Site Visit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Detail Modal Component with AnimatePresence */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative max-h-[90vh] flex flex-col text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-72 shrink-0">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
                  aria-label="Close details dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-brand-gold text-white font-sans text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    Premium Material Spec
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white mt-2">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-slate-900 mb-2">Description</h4>
                  <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm">
                          <Check className="w-4.5 h-4.5 text-green-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specs */}
                  <div>
                    <h4 className="font-serif text-lg font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      Technical Specifications
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <span className="font-semibold text-brand-blue-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 shrink-0 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left">
                  <p className="font-sans text-xs text-slate-500 uppercase font-semibold">Contact Owner Directly</p>
                  <p className="font-sans text-sm font-bold text-slate-800">{contactInfo.owner}: {contactInfo.phoneDisplay}</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-initial bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-sans font-bold text-xs px-6 py-3 rounded-lg transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleWhatsAppInquiry(selectedService.name);
                      setSelectedService(null);
                    }}
                    className="flex-1 sm:flex-initial bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-xs px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105"
                  >
                    <MessageSquare className="w-4.5 h-4.5" />
                    Inquire via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
