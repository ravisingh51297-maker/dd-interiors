import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Mail, Clock, Send, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { contactInfo, services } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple robust validation
    if (!name.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!service) {
      setErrorMsg("Please select a service you are interested in");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable CRM submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset fields
      setName("");
      setPhone("");
      setService("");
      setMessage("");
    }, 1200);
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dilip ji (DD Interiors), I filled the contact form on your website. My name is ${name || "Visitor"}. Contact: ${phone || "not-specified"}. Interested in: ${service || "Interior Consultation"}. Message: ${message || "I want to arrange a catalog meeting."}`
    );
    window.open(`https://wa.me/919999079009?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-sans text-xs font-bold uppercase tracking-[0.25em]">
            Schedule Showroom Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Connect With DD Interiors
          </h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill out the form below or ring Dilip Diwaker immediately. Our showroom in
            Lado Sarai is loaded with hundreds of physical product samples for you to touch.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info & Map Column (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-950 mb-6">
                Showroom Location & Contact
              </h3>

              <div className="space-y-6">
                {/* Owner details */}
                <div className="flex gap-4">
                  <div className="bg-brand-blue-50 text-brand-blue-500 p-3.5 rounded-xl shrink-0 h-fit border border-brand-blue-100">
                    <ShieldCheck className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Owner & Lead Designer</h4>
                    <p className="font-sans text-slate-600 text-base mt-0.5 font-medium">{contactInfo.owner}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4">
                  <div className="bg-brand-blue-50 text-brand-blue-500 p-3.5 rounded-xl shrink-0 h-fit border border-brand-blue-100">
                    <Phone className="w-6 h-6 text-brand-gold animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Call/WhatsApp Instantly</h4>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="font-sans text-slate-600 text-lg mt-0.5 font-bold hover:text-brand-blue-500 block transition-colors"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-brand-blue-50 text-brand-blue-500 p-3.5 rounded-xl shrink-0 h-fit border border-brand-blue-100">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Lado Sarai Showroom</h4>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed mt-0.5">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Showroom Hours */}
                <div className="flex gap-4">
                  <div className="bg-brand-blue-50 text-brand-blue-500 p-3.5 rounded-xl shrink-0 h-fit border border-brand-blue-100">
                    <Clock className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Showroom Timings</h4>
                    <p className="font-sans text-slate-600 text-sm mt-0.5">
                      10:00 AM – 8:30 PM (Open all 7 days)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 relative grow">
              <iframe
                title="Google Maps Location of DD Interiors Lado Sarai"
                src={contactInfo.googleMapsIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form Column (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-center text-left relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl font-bold text-slate-950 mb-1">
                    Send An Inquiry
                  </h3>
                  <p className="font-sans text-xs text-slate-500 mb-6">
                    Leave your contact details and Dilip ji will reach you with catalog PDFs within 2 hours.
                  </p>

                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg font-sans text-xs font-semibold border border-red-100">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-fullname" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="form-fullname"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Rajesh Malhotra"
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-phone" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide">
                      WhatsApp/Mobile Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g., 9999079009"
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all"
                      required
                    />
                  </div>

                  {/* Service dropdown selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-service" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Interested Material *
                    </label>
                    <select
                      id="form-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">-- Choose Material Type --</option>
                      {services.map((serv) => (
                        <option key={serv.id} value={serv.name}>
                          {serv.name}
                        </option>
                      ))}
                      <option value="Complete Home Interior">Complete Interior Consultation</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-message" className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Your Message / Site Details (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please tell us about your room size, dampness level or design goals..."
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-blue-500 hover:bg-brand-blue-600 disabled:bg-brand-blue-300 text-white font-sans font-semibold text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Request
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleQuickWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-102 cursor-pointer"
                    >
                      <MessageSquare className="w-4.5 h-4.5" />
                      Inquire on WhatsApp
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-12 px-4 space-y-6 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center border border-green-100 shadow-md">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-slate-900 mb-2">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="font-sans text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting DD Interiors. Your details have been delivered straight to
                      our owner, <strong>Dilip Diwaker</strong>. He is preparing the catalogs for you.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm text-left max-w-sm w-full">
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-brand-gold mb-1">
                      What's Next?
                    </h4>
                    <p className="font-sans text-xs text-slate-500 leading-normal">
                      • Dilip ji will call or message on your WhatsApp number within <strong>2 hours</strong>.<br />
                      • We will share catalogs and site appointment times.<br />
                      • Feel free to ring us directly if you are in a rush.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-sans font-bold text-xs px-6 py-3 rounded-xl shadow-md flex items-center gap-1.5 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      Call Showroom
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
