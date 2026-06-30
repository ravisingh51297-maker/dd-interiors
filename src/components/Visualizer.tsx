import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, ArrowRight, RefreshCw, Layers, Sliders, Smartphone, Check, MessageSquare } from "lucide-react";

// Interactive Options
const WALL_STYLES = [
  {
    id: "classic-teak",
    name: "Classic Teak WPC",
    description: "Rich natural wood flutes offering warmth and timeless appeal.",
    bgColor: "bg-[#8B5A2B]",
    fluteColor: "#5C3A21",
    baseColor: "#A0522D",
    isMarble: false,
  },
  {
    id: "charcoal-grey",
    name: "Charcoal Fluted WPC",
    description: "Ultra-modern, architectural deep slate grey with extreme depth.",
    bgColor: "bg-slate-800",
    fluteColor: "#1E293B",
    baseColor: "#334155",
    isMarble: false,
  },
  {
    id: "royal-marble",
    name: "Royal Golden Marble PVC",
    description: "High-gloss pristine white marble printed with prestige golden veins.",
    bgColor: "bg-white",
    fluteColor: "#e2e8f0",
    baseColor: "#F8FAFC",
    isMarble: true,
  },
  {
    id: "champagne-gold",
    name: "Champagne Gold Louver",
    description: "Prestige satin metallic gold lines for luxurious backdrops.",
    bgColor: "bg-[#DFBA6B]",
    fluteColor: "#B5944D",
    baseColor: "#EAD49E",
    isMarble: false,
  }
];

const FLOOR_STYLES = [
  {
    id: "natural-oak",
    name: "Natural Oak Hardwood",
    description: "Light, organic wood-grain finish radiating Scandinavian cozy luxury.",
    color: "#C2A378",
    grainColor: "#A38558",
    texture: "horizontal-plank"
  },
  {
    id: "imperial-walnut",
    name: "Imperial Walnut SPC",
    description: "Deep, luxurious chocolate walnut with highly pronounced premium lines.",
    color: "#4A3321",
    grainColor: "#2F1E13",
    texture: "chevron"
  },
  {
    id: "scandi-ash",
    name: "Scandinavian Ash Grey",
    description: "Crisp, minimalist light grey SPC flooring for a futuristic clean state.",
    color: "#D1D5DB",
    grainColor: "#9CA3AF",
    texture: "horizontal-plank"
  }
];

const LIGHTING_OPTIONS = [
  {
    id: "warm-yellow",
    name: "Warm Spotlight Glow",
    glowColor: "rgba(253, 224, 71, 0.45)",
    glowBlend: "mix-blend-color-dodge",
    intensity: "blur-3xl opacity-80"
  },
  {
    id: "cool-led",
    name: "Modern Ice LED",
    glowColor: "rgba(186, 230, 253, 0.35)",
    glowBlend: "mix-blend-color-dodge",
    intensity: "blur-2xl opacity-70"
  },
  {
    id: "golden-halo",
    name: "Prestige Golden Halo",
    glowColor: "rgba(197, 168, 92, 0.55)",
    glowBlend: "mix-blend-overlay",
    intensity: "blur-3xl opacity-90"
  }
];

export default function Visualizer() {
  // Customizer States
  const [selectedWall, setSelectedWall] = useState(WALL_STYLES[0]);
  const [selectedFloor, setSelectedFloor] = useState(FLOOR_STYLES[0]);
  const [selectedLighting, setSelectedLighting] = useState(LIGHTING_OPTIONS[0]);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Dilip ji (DD Interiors), I was testing your website's Interactive Visualizer and loved the combination of:\n` +
      `- Wall: ${selectedWall.name}\n` +
      `- Flooring: ${selectedFloor.name}\n` +
      `- Lighting: ${selectedLighting.name}\n` +
      `Please let me know the pricing and share real catalogs for these materials!`
    );
    window.open(`https://wa.me/919999079009?text=${text}`, "_blank");
  };

  return (
    <section id="visualizer" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-blue-50 border border-brand-blue-100 rounded-full px-4 py-1 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-brand-blue-700">
              Interactive Design Suite
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Visualize Your Dream Transformation
          </motion.h2>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Mix-and-match premium materials in our real-time 3D styling sandbox to visualize your dream luxury transformation!
          </p>
        </div>

        {/* Studio Grid for interactive Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT AREA (Col 6): The Visualizer Display */}
          <div className="lg:col-span-6">
            
            {/* Box 2: Visual Real-time Canvas Rendering representing custom choices */}
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-850 shadow-2xl relative text-left">
              <div className="flex items-center justify-between mb-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-gold/15 text-brand-gold p-1.5 rounded-lg">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-base font-bold">
                    Sandbox Room Elevation Model
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-blue-900/40 border border-brand-blue-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                  <span className="text-[10px] uppercase font-mono text-brand-gold font-bold">LIVE SVG MOCK</span>
                </div>
              </div>

              {/* Dynamic Styled Canvas Box */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800 flex flex-col justify-between">
                
                {/* 1. WALL PANEL SVG STYLING */}
                <div className="relative w-full h-[73%] overflow-hidden flex transition-all duration-500">
                  {selectedWall.isMarble ? (
                    // Elegant High Gloss Marble texture styled in real-time
                    <div className="absolute inset-0 w-full h-full bg-[#FAFAFA] transition-all duration-500 flex items-center justify-center p-4">
                      {/* Premium abstract marble veins */}
                      <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M-10,30 C30,40 50,20 110,60" stroke="#DFBA6B" strokeWidth="2" fill="none" strokeDasharray="1 1" />
                        <path d="M-5,15 C20,35 70,5 115,25" stroke="#DFBA6B" strokeWidth="1.5" fill="none" />
                        <path d="M20,90 C45,70 65,95 105,75" stroke="#C5A85C" strokeWidth="1" fill="none" />
                        <path d="M0,50 Q40,65 100,45" stroke="#e2e8f0" strokeWidth="4" fill="none" />
                      </svg>
                      {/* Seamless shiny reflection gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                      
                      {/* Architectural accent trim lines */}
                      <div className="absolute inset-y-0 left-[30%] w-[1.5px] bg-[#DFBA6B]/40" />
                      <div className="absolute inset-y-0 right-[30%] w-[1.5px] bg-[#DFBA6B]/40" />
                    </div>
                  ) : (
                    // WPC Louvers - Elegant Vertical fluted panels generated dynamically
                    <div 
                      className="absolute inset-0 w-full h-full transition-all duration-500 flex"
                      style={{ backgroundColor: selectedWall.baseColor }}
                    >
                      {/* Generating nice fluted grid using styled divisions */}
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-full border-r border-black/25 flex"
                          style={{
                            background: `linear-gradient(90deg, ${selectedWall.fluteColor} 0%, ${selectedWall.baseColor} 50%, rgba(255,255,255,0.08) 100%)`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* 2. DYNAMIC SPOTLIGHT OVERLAY */}
                  <div
                    className={`absolute -top-12 left-1/2 -translate-x-1/2 w-4/5 h-[150%] rounded-full blur-3xl pointer-events-none transition-all duration-700 ${selectedLighting.intensity}`}
                    style={{
                      backgroundColor: selectedLighting.glowColor,
                      mixBlendMode: selectedLighting.glowBlend as any
                    }}
                  />

                  {/* 3. COZY LED BACKLIGHT AT BOTTOM */}
                  <div className="absolute bottom-0 inset-x-0 h-4 bg-yellow-400/20 blur-md pointer-events-none" />

                  {/* Visualizer Furniture - Stylized elegant accent chair + plant sill to create perspective */}
                  <div className="absolute bottom-2 left-8 z-10 w-24 h-20 opacity-85 select-none pointer-events-none flex flex-col justify-end">
                    {/* Minimalist plant pot */}
                    <div className="w-8 h-8 mx-auto bg-slate-100 rounded-b-lg border-t border-slate-300 relative flex items-center justify-center">
                      <div className="absolute -top-5 w-10 h-6 flex gap-1 items-end justify-center">
                        <div className="w-2 h-4 bg-emerald-600 rounded-t-full rotate-[-15deg]" />
                        <div className="w-2.5 h-6 bg-emerald-500 rounded-t-full" />
                        <div className="w-2 h-4 bg-emerald-600 rounded-t-full rotate-[15deg]" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1 right-8 z-10 select-none pointer-events-none text-right bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 backdrop-blur-md">
                    <p className="text-[10px] font-mono text-slate-400 leading-none">Wall Cladding</p>
                    <p className="text-xs font-serif font-bold text-white mt-1">{selectedWall.name}</p>
                  </div>
                </div>

                {/* 4. FLOOR STYLE STYLING */}
                <div
                  className="w-full h-[27%] relative border-t-2 border-slate-950 transition-all duration-500 flex flex-col overflow-hidden"
                  style={{ backgroundColor: selectedFloor.color }}
                >
                  {/* Styled Flooring Planks lines */}
                  {selectedFloor.texture === "chevron" ? (
                    // Chevron pattern flooring lines
                    <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,0 L10,10 L20,0 L30,10 L40,0 L50,10 L60,0 L70,10 L80,0 L90,10 L100,0" stroke={selectedFloor.grainColor} strokeWidth="1" fill="none" />
                      <path d="M0,10 L10,20 L20,10 L30,20 L40,10 L50,20 L60,10 L70,20 L80,10 L90,20 L100,10" stroke={selectedFloor.grainColor} strokeWidth="1" fill="none" />
                      <path d="M0,20 L10,30 L20,20 L30,30 L40,20 L50,30 L60,20 L70,30 L80,20 L90,30 L100,20" stroke={selectedFloor.grainColor} strokeWidth="1" fill="none" />
                      <path d="M0,30 L10,40 L20,30 L30,40 L40,30 L50,40 L60,30 L70,40 L80,30 L90,40 L100,30" stroke={selectedFloor.grainColor} strokeWidth="1" fill="none" />
                    </svg>
                  ) : (
                    // Horizontal hardwood lines
                    <div className="absolute inset-0 w-full h-full opacity-20 flex flex-col justify-between">
                      <div className="h-[1px] w-full border-b" style={{ borderColor: selectedFloor.grainColor }} />
                      <div className="h-[1px] w-full border-b" style={{ borderColor: selectedFloor.grainColor }} />
                      <div className="h-[1px] w-full border-b" style={{ borderColor: selectedFloor.grainColor }} />
                      <div className="h-[1px] w-full border-b" style={{ borderColor: selectedFloor.grainColor }} />
                    </div>
                  )}

                  <div className="absolute bottom-2 left-4 z-10 select-none pointer-events-none bg-slate-950/60 px-2 py-1 rounded">
                    <p className="text-[9px] font-mono text-slate-300 leading-none">Premium Floor</p>
                    <p className="text-[11px] font-sans font-bold text-white mt-0.5">{selectedFloor.name}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT AREA (Col 6): The Design Controllers */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-150 shadow-md text-left space-y-8">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  Visualizer Options
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Choose a style below to update the real-time simulation model
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedWall(WALL_STYLES[0]);
                  setSelectedFloor(FLOOR_STYLES[0]);
                  setSelectedLighting(LIGHTING_OPTIONS[0]);
                }}
                className="text-slate-500 hover:text-brand-blue-500 p-2 rounded-lg bg-slate-50 border border-slate-100 transition-colors flex items-center gap-1 text-xs font-bold"
                title="Reset Styles"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Controller 1: Wall Claddings */}
            <div className="space-y-4">
              <label className="font-sans text-xs font-bold uppercase tracking-widest text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                1. Select Wall Cladding Material
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WALL_STYLES.map((wall) => {
                  const isSelected = selectedWall.id === wall.id;
                  return (
                    <button
                      key={wall.id}
                      onClick={() => setSelectedWall(wall)}
                      className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-28 relative ${
                        isSelected
                          ? "border-brand-blue-500 bg-brand-blue-50/50 ring-2 ring-brand-blue-500/10"
                          : "border-slate-200 hover:border-brand-blue-300 hover:bg-slate-50/50"
                      }`}
                    >
                      {/* Colored preview pill at the top right */}
                      <div className="flex items-center justify-between w-full">
                        <span className="font-serif text-sm font-bold text-slate-900">{wall.name}</span>
                        <div className={`w-5 h-5 rounded-full ${wall.bgColor} border border-slate-300 shrink-0`} />
                      </div>
                      <p className="font-sans text-[11px] text-slate-500 line-clamp-2 leading-snug pr-2">
                        {wall.description}
                      </p>
                      {isSelected && (
                        <div className="absolute bottom-2 right-2 bg-brand-blue-500 text-white rounded-full p-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controller 2: Flooring Material */}
            <div className="space-y-4">
              <label className="font-sans text-xs font-bold uppercase tracking-widest text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue-400" />
                2. Select Premium Flooring
              </label>
              <div className="grid grid-cols-1 gap-3">
                {FLOOR_STYLES.map((floor) => {
                  const isSelected = selectedFloor.id === floor.id;
                  return (
                    <button
                      key={floor.id}
                      onClick={() => setSelectedFloor(floor)}
                      className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                        isSelected
                          ? "border-brand-blue-500 bg-brand-blue-50/50 ring-2 ring-brand-blue-500/10"
                          : "border-slate-200 hover:border-brand-blue-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Little floor wood representation */}
                        <div
                          className="w-10 h-10 rounded-lg shrink-0 border border-black/10 flex flex-col justify-center"
                          style={{ backgroundColor: floor.color }}
                        >
                          <div className="h-[1px] w-full opacity-25" style={{ borderBottom: `1px solid ${floor.grainColor}` }} />
                          <div className="h-[1px] w-full opacity-25" style={{ borderBottom: `1px solid ${floor.grainColor}` }} />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-bold text-slate-900 leading-none">{floor.name}</h4>
                          <p className="font-sans text-[11px] text-slate-500 mt-1">{floor.description}</p>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="bg-brand-blue-500 text-white rounded-full p-1 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controller 3: Lighting Effects */}
            <div className="space-y-4">
              <label className="font-sans text-xs font-bold uppercase tracking-widest text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                3. Choose Spotlighting Atmosphere
              </label>
              <div className="flex flex-wrap gap-2">
                {LIGHTING_OPTIONS.map((light) => {
                  const isSelected = selectedLighting.id === light.id;
                  return (
                    <button
                      key={light.id}
                      onClick={() => setSelectedLighting(light)}
                      className={`font-sans text-xs font-semibold px-4 py-2.5 rounded-full border transition-all flex items-center gap-2 ${
                        isSelected
                          ? "bg-brand-gold text-white border-brand-gold shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:border-brand-gold/50"
                      }`}
                    >
                      <div
                        className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                        style={{ backgroundColor: light.glowColor }}
                      />
                      {light.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Design Action Pitch */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="text-left">
                <h4 className="font-serif text-base font-bold text-slate-950">Love this Combination?</h4>
                <p className="font-sans text-xs text-slate-500 mt-0.5">Let Dilip Diwaker show you the exact physical samples!</p>
              </div>
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-xs px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                Consult Owner Dilip
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
