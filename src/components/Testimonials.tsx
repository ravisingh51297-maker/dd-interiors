import { motion } from "motion/react";
import { Star, Quote, User } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-sans text-xs font-bold uppercase tracking-[0.25em]">
            Client Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Loved By Architects & Homeowners
          </h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Read what our clients across New Delhi have to say about Dilip Diwaker’s
            meticulous designs, on-site execution, and high-quality materials.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-200">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-full bg-brand-blue-500 text-white flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm">
                    {test.name}
                  </h4>
                  <p className="font-sans text-xs text-brand-gold font-semibold uppercase tracking-wider">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Bar */}
        <div className="mt-16 bg-slate-50 rounded-2xl py-6 px-8 border border-slate-100 flex flex-wrap gap-6 items-center justify-around text-slate-400">
          <span className="font-serif text-lg font-bold tracking-wider text-slate-500">✓ Termite-Free Guarantee</span>
          <span className="font-serif text-lg font-bold tracking-wider text-slate-500">✓ Eco-Friendly PVC</span>
          <span className="font-serif text-lg font-bold tracking-wider text-slate-500">✓ On-Time Execution</span>
          <span className="font-serif text-lg font-bold tracking-wider text-slate-500">✓ Free Home Samples</span>
        </div>

      </div>
    </section>
  );
}
