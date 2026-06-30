import { motion } from "motion/react";
import { ArrowRight, Star, MapPin, Award, Shield } from "lucide-react";
import { contactInfo, stats } from "../data";
import heroImage from "../assets/images/regenerated_image_1782572775312.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-slate-50"
    >
      {/* Abstract Architectural Background Details */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue-500/5 hidden md:block rounded-l-[100px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-blue-50 border border-brand-blue-100 rounded-full px-4 py-1.5 mb-6 w-fit"
            >
              <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
              <span className="font-sans text-xs font-semibold tracking-wider text-brand-blue-700 uppercase">
                Delhi's Premium Architectural Finishes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Exquisite Wall Panels & <br />
              <span className="text-brand-blue-500 relative inline-block">
                Luxury Flooring Solutions
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-gold/30 -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              Welcome to <strong>DD INTERIORS</strong> by <strong>Dilip Diwaker</strong>. We supply and professionally install high-end <strong>WPC Louvers, PVC Wall Panels, SPC Flooring, Wooden Floors, Carpets, and Blinds</strong> in Lado Sarai, New Delhi. Turn your living rooms, ceilings, and balconies into beautiful masterpieces.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#services"
                className="gold-glow bg-brand-gold hover:bg-[#b4954f] text-white font-sans font-semibold text-sm tracking-wide px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Materials
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="bg-white border-2 border-brand-blue-500 hover:bg-brand-blue-50 text-brand-blue-500 font-sans font-semibold text-sm tracking-wide px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                Free Consultation
              </a>
            </motion.div>

            {/* Quick trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-brand-blue-50 p-2 rounded-lg text-brand-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-xs sm:text-sm">Lado Sarai</h4>
                  <p className="font-sans text-[11px] text-slate-500">Showroom New Delhi</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-brand-blue-50 p-2 rounded-lg text-brand-blue-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-xs sm:text-sm">100% Premium</h4>
                  <p className="font-sans text-[11px] text-slate-500">Sourced Materials</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-brand-blue-50 p-2 rounded-lg text-brand-blue-600 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-xs sm:text-sm">Expert Team</h4>
                  <p className="font-sans text-[11px] text-slate-500">Flawless Install</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Grid / Collage Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              {/* Premium Interior Background Image (Unsplash luxury living room with wood panels & lighting) */}
              <img
                src={heroImage}
                alt="DD Interiors Premium Showroom Visual"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Float Card Inside Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-white shrink-0 font-serif font-bold text-xl">
                    DD
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-tight">
                      Dilip Diwaker
                    </h3>
                    <p className="font-sans text-xs text-slate-500">
                      Founder & Chief Stylist
                    </p>
                  </div>
                  <div className="ml-auto bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full flex items-center gap-1 font-sans text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Active Site Tours
                  </div>
                </div>
                <p className="font-sans text-xs text-slate-600 mt-3 leading-relaxed">
                  "We bring your dream spaces to life using beautiful, waterproof, durable architectural claddings. Come visit our Lado Sarai studio!"
                </p>
              </div>
            </motion.div>

            {/* Background floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-brand-blue-500 text-white p-5 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center border-2 border-white text-center w-28 h-28"
            >
              <span className="font-serif text-3xl font-bold leading-none">12+</span>
              <span className="font-sans text-[10px] uppercase font-bold tracking-wider mt-1 text-brand-blue-100">
                Years in <br />Delhi
              </span>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Stats Row at the bottom */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-md border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative overflow-hidden">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col justify-center items-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-blue-500 mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
