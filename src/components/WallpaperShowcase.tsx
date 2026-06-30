import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageSquare, ArrowRight, Check, Grid, Palette, ChevronRight, Layers } from "lucide-react";
import goldenTreeMuralImage from "../assets/images/golden_tree_mural_1782731408108.jpg";

interface WallpaperStyle {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  materials: string[];
  options: {
    hueName: string;
    hueHex: string;
    imageUrl: string;
  }[];
}

const WALLPAPER_COLLECTIONS: WallpaperStyle[] = [
  {
    id: "custom-3d-murals",
    name: "Custom 3D Golden Murals",
    subtitle: "Sought-after Designer Masterpieces",
    description: "Our signature and highly acclaimed custom 3D gold-leaf tree murals. Crafted over high-end embossed textured canvas, this masterpiece depicts a spectacular golden-leaf tree with raised 3D texture details, adding infinite warmth and royal luxury to main lobby or living room accent walls.",
    materials: ["Heavy-Duty Non-Woven Canvas", "Golden Texture Detailing", "Seamless One-Piece Fabric"],
    options: [
      {
        hueName: "Imperial Gold Tree (Showcase)",
        hueHex: "#D4AF37",
        imageUrl: goldenTreeMuralImage
      },
      {
        hueName: "Amazonia Forest Emerald",
        hueHex: "#064E3B",
        imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  {
    id: "royal-classic",
    name: "Royal Classic Damask",
    subtitle: "Embossed Foil Luxury",
    description: "Our signature collection featuring deep-textured, embossed classical damask patterns with magnificent gold and silver foil highlights. These heavy-grade wallpapers bring the grandeur of imperial palaces straight to your master bedrooms and luxury dining spaces.",
    materials: ["Non-Woven Base", "Metallic Foil Inlay", "Washable Vinyl Laminate"],
    options: [
      {
        hueName: "Imperial Gold & Cream",
        hueHex: "#C5A85C",
        imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1000"
      },
      {
        hueName: "Regency Silver & Slate",
        hueHex: "#94A3B8",
        imageUrl: "https://images.unsplash.com/photo-161552900-349f7e8494b9?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  {
    id: "art-deco",
    name: "Art Deco Geometric",
    subtitle: "Modern Metallic Interplay",
    description: "Sleek, minimalist and repeating geometric vector designs. Infused with metallic ink grooves, these wallpapers shimmer dynamically with changing room light, making them perfect for ultra-modern TV backdrops and luxury living rooms.",
    materials: ["Matte Fibers", "Reflective Metallic Ink", "High Tear-Resistance"],
    options: [
      {
        hueName: "Charcoal & Satin Gold",
        hueHex: "#334155",
        imageUrl: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80&w=1000"
      },
      {
        hueName: "Platinum Ocean Teal",
        hueHex: "#0EA5E9",
        imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  {
    id: "luxury-linen",
    name: "Luxury Textured Linen",
    subtitle: "Understated Tactile Sophistication",
    description: "For spaces that speak of quiet luxury. These wallpapers replicate the warm, organic texture of heavy Belgian linen. They soften hard echoes in rooms, provide subtle thermal insulation, and feature stain-guard coating for effortless wipe-down cleaning.",
    materials: ["Natural Fiber Blend", "Sound Softening Backing", "Stain-Guard Protect"],
    options: [
      {
        hueName: "Warm Tuscan Oat",
        hueHex: "#E2D7C5",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        hueName: "Prestige Silver Birch",
        hueHex: "#CBD5E1",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  }
];

export default function WallpaperShowcase() {
  const [selectedStyle, setSelectedStyle] = useState<WallpaperStyle>(WALLPAPER_COLLECTIONS[0]);
  const [selectedHueIdx, setSelectedHueIdx] = useState<number>(0);

  const activeOption = selectedStyle.options[selectedHueIdx] || selectedStyle.options[0];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Dilip ji (DD Interiors), I am exploring your Premium Wallpaper Catalog on your website.\n` +
      `I really loved the following selection:\n` +
      `- Collection: ${selectedStyle.name} (${selectedStyle.subtitle})\n` +
      `- Colorway: ${activeOption.hueName}\n` +
      `Please let me know the price range per sq.ft. and share similar designs/PDF catalogs on WhatsApp!`
    );
    window.open(`https://wa.me/919999079009?text=${text}`, "_blank");
  };

  return (
    <section id="wallpaper" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-blue-50 border border-brand-blue-100 rounded-full px-4 py-1 mb-3"
          >
            <Layers className="w-3.5 h-3.5 text-brand-blue-500" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-brand-blue-700">
              New Collection
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Premium Imported Wallpapers
          </motion.h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Dealing in an exquisite array of non-woven wallpapers, metal-embossed collections, and customized 3D scenic canvas murals. Jointless, dust-proof, and flawless finishes.
          </p>
        </div>

        {/* Dynamic Studio Viewport split into preview and panel controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Live Wallpaper Elevation Preview Area (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-150 bg-slate-100 group">
              {/* Wallpaper background image with smooth key transitions */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeOption.imageUrl}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  src={activeOption.imageUrl}
                  alt={selectedStyle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Elegant floating badge */}
              <div className="absolute top-6 left-6 bg-slate-950/85 text-white backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg text-left">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-bold">Showcase Elevation</span>
                <h4 className="font-serif text-lg font-bold text-white mt-1 leading-none">{selectedStyle.name}</h4>
                <p className="text-xs text-slate-300 mt-1.5 font-sans flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block border border-white/20" style={{ backgroundColor: activeOption.hueHex }} />
                  {activeOption.hueName}
                </p>
              </div>

              {/* Gloss highlight reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

              {/* Bottom tag */}
              <div className="absolute bottom-6 right-6 bg-brand-blue-900/90 text-brand-gold font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-md backdrop-blur-sm shadow-sm border border-brand-blue-500/20">
                100% Anti-Static & Seamless
              </div>
            </div>

            {/* Quick materials / benefits badges under the photo */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-sans text-slate-500 font-medium">Core Material specs:</span>
              {selectedStyle.materials.map((mat, i) => (
                <span key={i} className="bg-slate-50 border border-slate-200 text-slate-700 font-sans text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-gold stroke-[3]" />
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Selection Controllers & Description (Col 5) */}
          <div className="lg:col-span-5 text-left space-y-8">
            
            {/* Tab selector for the 4 styles */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 block">
                Select Wallpaper Collection
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {WALLPAPER_COLLECTIONS.map((style) => {
                  const isSelected = selectedStyle.id === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => {
                        setSelectedStyle(style);
                        setSelectedHueIdx(0); // Reset hue selection to first
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden group ${
                        isSelected
                          ? "border-brand-blue-500 bg-brand-blue-50/50 shadow-sm"
                          : "border-slate-200 hover:border-brand-blue-300 hover:bg-slate-50/30"
                      }`}
                    >
                      <span className={`block font-serif text-sm font-bold leading-none ${isSelected ? "text-brand-blue-700" : "text-slate-800 group-hover:text-slate-950"}`}>
                        {style.name}
                      </span>
                      <span className="block text-[10px] font-sans text-slate-500 mt-1.5 font-medium leading-none">
                        {style.subtitle}
                      </span>
                      {isSelected && (
                        <div className="absolute bottom-1 right-1 w-1 h-1 bg-brand-blue-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Details of the Selected Style */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-brand-gold block">Collection Details</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  {selectedStyle.name}
                </h3>
                <p className="font-sans text-xs text-brand-blue-700 font-bold tracking-wide mt-0.5 uppercase">
                  {selectedStyle.subtitle}
                </p>
              </div>
              <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                {selectedStyle.description}
              </p>
            </div>

            {/* Hue/Colorway selector */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-brand-gold" />
                Select Premium Colorway
              </span>
              <div className="flex flex-wrap gap-2.5">
                {selectedStyle.options.map((opt, i) => {
                  const isSelected = selectedHueIdx === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedHueIdx(i)}
                      className={`px-3 py-2 rounded-xl border text-xs font-sans font-semibold flex items-center gap-2 transition-all ${
                        isSelected
                          ? "border-brand-blue-500 bg-brand-blue-500 text-white shadow-md"
                          : "border-slate-200 hover:border-brand-blue-200 bg-white text-slate-700"
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: opt.hueHex }}
                      />
                      {opt.hueName}
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3] text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic CTA */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                Request Catalogue & Price Quote
                <ArrowRight className="w-4.5 h-4.5 ml-1" />
              </button>
              <p className="font-sans text-[10px] text-slate-400 text-center mt-2.5">
                We provide physical catalogues on site & same-day estimates in South Delhi, Lado Sarai, GK, Vasant Kunj, etc.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
