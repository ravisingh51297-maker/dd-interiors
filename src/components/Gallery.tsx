import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { galleryItems, contactInfo } from "../data";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "WPC Louvers", "PVC Panels", "Wallpapers", "SPC Flooring", "Wooden Flooring", "Soffit Panels", "Blinds & Curtains", "Carpets"];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev === galleryItems.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev === 0 ? galleryItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleInquireOnImage = (title: string) => {
    const text = encodeURIComponent(
      `Hello Dilip ji (DD Interiors), I saw the image of "${title}" in your website gallery and would like to ask about similar designs.`
    );
    window.open(`https://wa.me/919999079009?text=${text}`, "_blank");
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-sans text-xs font-bold uppercase tracking-[0.25em]">
            Material Catalog Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Gallery of Completed Masterpieces
          </h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Take inspiration from our design installations across Delhi-NCR. We bring
            unmatched premium looks to residential living spaces, ceilings, staircases, and offices.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-blue-500 border-brand-blue-500 text-white shadow-md shadow-brand-blue-500/20"
                  : "bg-white border-slate-200 text-slate-600 hover:border-brand-blue-300 hover:text-brand-blue-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 aspect-square cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlap Gradient & Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(item.id);
                      }}
                      className="bg-white hover:bg-slate-100 text-slate-900 font-sans font-bold text-[10px] uppercase px-4 py-2.5 rounded-lg flex items-center gap-1 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Large
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInquireOnImage(item.title);
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-lg transition-all"
                      title="Ask about this design"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Always visible category pill */}
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-white/20 text-slate-800 font-sans text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Top Close / Info Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-20">
              <div>
                <span className="text-brand-gold font-sans text-xs font-bold uppercase tracking-widest">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold">
                  {galleryItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage & Carousel Controls */}
            <div className="relative w-full max-w-5xl aspect-video sm:aspect-square md:aspect-video flex items-center justify-center px-12" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prevSlide}
                className="absolute left-0 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10 focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={galleryItems[lightboxIndex].imageUrl}
                alt={galleryItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <button
                onClick={nextSlide}
                className="absolute right-0 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10 focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption and Actions */}
            <div className="absolute bottom-6 max-w-2xl text-center px-4" onClick={(e) => e.stopPropagation()}>
              <p className="font-sans text-slate-300 text-sm mb-4 leading-relaxed">
                {galleryItems[lightboxIndex].description}
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-xs text-slate-400">
                  {lightboxIndex + 1} of {galleryItems.length}
                </span>
                <button
                  onClick={() => handleInquireOnImage(galleryItems[lightboxIndex!].title)}
                  className="bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-xs px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
