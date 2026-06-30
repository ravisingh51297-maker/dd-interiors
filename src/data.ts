import { Service, GalleryItem, Testimonial, FAQItem } from "./types";
import wpcLouversImage from "./assets/images/regenerated_image_1782572775312.jpg";
import pvcPanelsImage from "./assets/images/regenerated_image_1782572778528.jpg";
import luxuryCurtainsImage from "./assets/images/luxury_pleated_curtains_symmetrical_1782730944279.jpg";
import goldenTreeMuralImage from "./assets/images/golden_tree_mural_1782731408108.jpg";

export const contactInfo = {
  companyName: "DD INTERIORS",
  owner: "Dilip Diwaker",
  phone: "9999079009",
  phoneDisplay: "+91 99990 79009",
  address: "F-343, Near Honda Service Centre, Lado Sarai, New Delhi – 110030",
  email: "Ddinteriors21@gmail.com",
  googleMapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5132338573216!2d77.19794017596041!3d28.524294089060596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6f788106d%3A0xc6cb7da03e913a8a!2sLado%20Sarai%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  whatsappUrl: "https://wa.me/919999079009?text=Hello%20Dilip%20ji%20(DD%20Interiors)%2C%20I%20am%20visiting%20your%20website%20and%20interested%20in%20your%20premium%20interior%20solutions.%20Please%20share%20catalogs%20for%20WPC%20Louvers%2C%20PVC%20Panels%2C%20and%20Flooring."
};

export const stats = [
  { label: "Years of Excellence", value: "12+" },
  { label: "Completed Projects", value: "2,500+" },
  { label: "Luxury Materials", value: "350+" },
  { label: "Satisfied Clients", value: "1,800+" }
];

export const services: Service[] = [
  {
    id: "wpc-louvers",
    name: "WPC Louvers",
    description: "Fluted wooden wall and ceiling panels providing an ultra-modern, high-end architectural appeal.",
    longDescription: "Our premium Wood Polymer Composite (WPC) Louvers offer the perfect blend of natural timber aesthetics and modern polymer durability. Designed for both striking interior feature walls and durable exterior elevations, these fluted panels are weather-resistant, termite-proof, and require virtually zero maintenance. Ideal for luxury residential living rooms, TV backdrops, office reception spaces, and balcony wall cladding.",
    imageUrl: wpcLouversImage,
    benefits: [
      "Waterproof & Termite-Proof",
      "Stunning fluted 3D texture and depth",
      "No polishing or painting required",
      "Eco-friendly sustainable compound",
      "Excellent thermal and acoustic insulation"
    ],
    features: ["Thickness: 12mm - 24mm", "UV resistant for exterior cladding", "Interlocking design for seamless installation", "Available in Charcoal, Teak, Walnut, and Oak shades"]
  },
  {
    id: "pvc-panels",
    name: "PVC Panels",
    description: "Sleek, lightweight, and completely damp-proof wall paneling with gorgeous marble, wood, and solid textures.",
    longDescription: "Protect and elevate your damp walls with our high-grade PVC wall and ceiling panels. Extremely cost-effective yet visually luxurious, our panels feature advanced protective coatings that resist stains, moisture, and impact. From high-gloss premium marble prints to textured metallic finishes and classical wooden grooves, we provide custom panel configurations that fit perfectly in bedrooms, bathrooms, and corridors.",
    imageUrl: pvcPanelsImage,
    benefits: [
      "100% moisture-proof and damp-resistant",
      "Extremely lightweight and fast installation",
      "Anti-fungal and easy to clean",
      "Hides uneven wall surfaces effortlessly",
      "Highly budget-friendly luxury"
    ],
    features: ["Width: 10 inches standard", "Fire-retardant grade PVC", "Anti-aging protective laminate", "Huge variety of marble, wood, and concrete textures"]
  },
  {
    id: "spc-flooring",
    name: "SPC Flooring",
    description: "Stone Plastic Composite luxury flooring offering ultimate scratch resistance and 100% waterproof performance.",
    longDescription: "SPC (Stone Plastic Composite) is the next generation of luxury vinyl tiles. Powered by a rigid limestone-composite core, SPC flooring is virtually indestructible, completely waterproof, and remains 100% dimensionally stable under intense heat or moisture. Perfect for premium residential apartments, kitchens, commercial offices, showrooms, and areas with high foot traffic.",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "100% waterproof core",
      "Superb indentation & scratch resistance",
      "Superior sound absorption with IXPE underlayment",
      "Unmatched plank stability across large rooms",
      "Realistic wood-grain embossing"
    ],
    features: ["Core thickness: 4mm to 6mm", "Wear layer: 0.3mm to 0.5mm", "Valinge Click-Lock system for glue-less installation", "In-built acoustic underlay cushion"]
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    description: "Warm, timeless, and prestigious engineered and laminated hardwood flooring for rich cozy interiors.",
    longDescription: "Bring the majestic beauty of genuine oak, walnut, and teak into your sanctuary. Our curated range of laminate and engineered wooden flooring evokes high-end cozy luxury. Treated with German anti-scratch technology and HDF core reinforcement, these floors deliver the authentic sound and warmth of real wood while standing up to heavy daily wear and tear.",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Timeless luxury status and premium texture",
      "Thermal comfort (warm in winters, cool in summers)",
      "High density fibreboard (HDF) core for high load bearing",
      "Scratch, stain, and burn resistant top layer",
      "Adds immense market value to your property"
    ],
    features: ["AC3 to AC5 commercial durability ratings", "Wax-coated joints for moisture-lock", "True-to-life wooden feel embossing", "Available in herringbone, chevron, and standard plank formats"]
  },
  {
    id: "soffit-panels",
    name: "Soffit Panels",
    description: "Premium ceiling claddings for balconies, canopies, and false ceilings, delivering a warm resort-like vibe.",
    longDescription: "Upgrade your plain concrete ceilings with our gorgeous, weather-hardy Soffit ceiling panels. Featured on modern balconies, exterior eaves, and interior luxury ceilings, these panels provide a pristine, warm wooden resort appearance. They come with integrated hidden ventilation lines and are designed to perfectly host warm recessed spotlights, converting any dark outdoor overhang into a majestic architecture piece.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Withstands external wind, damp, and direct sunlight",
      "Hides ugly conduits, wiring, and structural beams",
      "Doesn't rot, peel, or fade like natural wood ceiling",
      "Pre-engineered spotlight mounting friendliness",
      "Resort-style luxury atmosphere"
    ],
    features: ["Anti-corrosive multi-layer build", "Sleek tongue-and-groove joint profile", "UV stable finishes", "Lightweight structure ideal for overhead suspension"]
  },
  {
    id: "blinds-curtains",
    name: "Blinds & Curtains",
    description: "Tailor-made luxury window treatments from blackout rollers and zebra blinds to majestic double-height drapes.",
    longDescription: "Window treatments are the jewelry of a room. At DD Interiors, we supply and custom-tailor premium drapes, sheer curtains, roman blinds, zebra blinds, and automated roller shades. Sourced from high-end mills, our fabrics range from heavy, luxurious velvets and linen blends to sheer organzas. We specialize in custom tracks, recessed pelmet installations, and automated motorized curtain channels.",
    imageUrl: luxuryCurtainsImage,
    benefits: [
      "Precise light control and visual privacy",
      "Thermal insulation reducing air conditioning bills",
      "Acoustic softening of hard echoey rooms",
      "High-end custom tailoring for the perfect drape length",
      "Motorized Alexa/Google Home automation compatible"
    ],
    features: ["Premium linen, velvet, jacquard, and blackout fabrics", "Somfy and local silent curtain motors", "Zebra, honeycomb, vertical, and wooden Venetian blind options", "Anti-dust fabric treatments"]
  },
  {
    id: "premium-wallpapers",
    name: "Premium Wallpapers",
    description: "Exquisite 3D custom murals, imported non-woven wallpapers, and textured fabric designs for high-end accent walls.",
    longDescription: "Bring drama and elegance to your spaces with our handpicked wallpaper collection. From prestigious royal damask prints and contemporary geometric metallic accents to customized high-definition 3D canvas murals, our wallpaper collection is imported from premium international design houses. They are anti-static, dust-resistant, moisture-breathable, and installed seamlessly by our master craftsmen to ensure an absolutely invisible joint finish.",
    imageUrl: goldenTreeMuralImage,
    benefits: [
      "Thousands of premium designs & custom-sized murals",
      "Dust-proof, washable, and fade-resistant surfaces",
      "Seamless, joinless installation by professional craftsmen",
      "Eco-friendly, odorless, non-toxic, and breathable fabrics",
      "Quick 4-hour installation with zero mess"
    ],
    features: [
      "Materials: Heavy-duty non-woven, vinyl-coated, or textured canvas",
      "German high-adhesion water-based eco-glue",
      "Custom height and width matching for 3D murals",
      "Available in metallic foil, velvet flocking, and canvas textures"
    ]
  },
  {
    id: "carpets",
    name: "Premium Carpets & Rugs",
    description: "Ultra-soft wall-to-wall tufted carpeting and premium designer area rugs for sound absorption and comfort.",
    longDescription: "Add deep luxury and absolute silence to your office or bedroom. Our premium tufted carpets and rugs feature dense piles, beautiful modern geometric patterns, and rich earthy colors. Highly durable, easy to vacuum, and deeply comforting underfoot, they are designed to anchor your furniture layouts while elevating acoustic comfort.",
    imageUrl: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Deep plush underfoot cushion comfort",
      "Excellent noise reduction and echo dampening",
      "Stain-resistant easy-clean fiber treatment",
      "Non-slip backing for safe placement",
      "Anchors furniture layouts with visual warmth"
    ],
    features: ["Dense polypropylene, wool blend, and nylon fibers", "Loop pile, cut pile, and shaggy variations", "Custom sizing available", "Heavy commercial grade options for high-traffic office floors"]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Exterior WPC fluted louvers",
    category: "WPC Louvers",
    imageUrl: wpcLouversImage,
    description: "Premium brown fluted exterior WPC cladding on a modern villa entrance, completely weather-proof and UV resistant."
  },
  {
    id: "g2",
    title: "Resort-style balcony ceiling",
    category: "Soffit Panels",
    imageUrl: pvcPanelsImage,
    description: "Beautiful warm wood-grained soffit ceiling panels installed on a modern balcony, featuring recessed yellow lighting and plants."
  },
  {
    id: "g3",
    title: "Luxury living room paneling & wallpaper",
    category: "PVC Panels",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "Premium custom wall styling combining gold-trimmed moldings, fluted panels, and a gorgeous tropical wallpaper backing."
  },
  {
    id: "g10",
    title: "Royal Golden Damask Wallpaper",
    category: "Wallpapers",
    imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
    description: "Classic textured royal damask wallpaper with gold foil highlights, creating a rich presidential dining room accent wall."
  },
  {
    id: "g11",
    title: "Custom 3D Golden Tree Mural",
    category: "Wallpapers",
    imageUrl: goldenTreeMuralImage,
    description: "Magnificent high-definition custom gold-leaf textured tree mural split across elegant framed panels on a luxurious lounge accent wall."
  },
  {
    id: "g12",
    title: "Minimalist Geometric Textured Wallpaper",
    category: "Wallpapers",
    imageUrl: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80&w=800",
    description: "Contemporary metallic geometric line patterns on a matte charcoal background, elevating a high-end modern bedroom."
  },
  {
    id: "g4",
    title: "SPC herringbone wood flooring",
    category: "SPC Flooring",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
    description: "100% waterproof SPC luxury vinyl plank flooring laid out in a stunning Herringbone style in a master suite."
  },
  {
    id: "g5",
    title: "Elegant double-height drapes",
    category: "Blinds & Curtains",
    imageUrl: luxuryCurtainsImage,
    description: "Custom floor-to-ceiling sheer and heavy linen-velvet drapery with motorized recessed tracks, diffusing natural sunlight beautifully."
  },
  {
    id: "g6",
    title: "Modern TV wall fluted backdrops",
    category: "WPC Louvers",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    description: "Rich charcoal and oak colored WPC louvers paired with custom LED lighting, acting as a stunning feature backdrop."
  },
  {
    id: "g7",
    title: "Showroom flooring with premium tile print",
    category: "SPC Flooring",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "High-density SPC tiles displaying elegant marble veining, suitable for upscale showrooms and luxury offices."
  },
  {
    id: "g8",
    title: "Custom study wooden flooring",
    category: "Wooden Flooring",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    description: "Plush engineered warm walnut planks creating a comfortable, highly professional study space."
  },
  {
    id: "g9",
    title: "Plush corporate executive carpets",
    category: "Carpets",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty custom tufted acoustic modular carpeting laid out in a luxury board room for sound insulation."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Malhotra",
    role: "Villa Owner, GK-2",
    quote: "DD Interiors transformed my living room wall with WPC Louvers and beautiful gold-accented panels. Dilip ji personally supervised the project, ensuring a flawless finish. Highly recommended for luxury styling in Delhi!",
    rating: 5
  },
  {
    id: "t2",
    name: "Meenakshi Sharma",
    role: "Architect, MS Designs",
    quote: "We've sourced SPC Flooring and Soffit panels from DD Interiors for multiple high-end projects. Their material quality is consistently top-notch, delivery is always on time, and their prices are very competitive.",
    rating: 5
  },
  {
    id: "t3",
    name: "Vikram Chaudhary",
    role: "Owner, Level Up Gyms",
    quote: "We installed SPC flooring and customized blinds in three gym branches in South Delhi. It has been 2 years, and there is zero dampness, zero scratches, and they look brand new. Excellent post-sales support too.",
    rating: 5
  }
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "What is the primary benefit of WPC Louvers over natural wood?",
    answer: "WPC Louvers give the exact premium appearance of natural timber but are completely water-proof, termite-proof, fire-resistant, and do not rot, fade, or require periodic polishing. They last easily for 15+ years with simple water wiping."
  },
  {
    id: "f2",
    question: "Do you provide on-site measurements and custom catalogs in New Delhi?",
    answer: "Yes, absolutely! Dilip Diwaker and our expert installation technicians will visit your home, office, or site with physical samples and design catalogs, perform accurate laser measurements, and provide complete design consultation free of cost within Delhi NCR."
  },
  {
    id: "f3",
    question: "Can PVC Panels completely cover wall dampness (Seelan)?",
    answer: "Yes, this is one of our specialties. PVC panels are completely waterproof and form a durable physical barrier over damp surfaces. We treat the surface, install an anti-moisture backing grid, and secure the panels, preventing dampness from ever spoiling your room's aesthetics again."
  },
  {
    id: "f4",
    question: "How long does a typical installation take?",
    answer: "Our team is highly optimized. A standard TV backdrop or a bedroom wall paneling takes less than 1-2 days to complete. Complete home flooring (SPC/Wooden) or wall work can take between 3-5 days. We ensure minimal mess and clean up completely post-work."
  },
  {
    id: "f5",
    question: "Are your window curtains and blinds motorized?",
    answer: "Yes! We specialize in home automation. We offer smart motorized roller blinds and curtains that can be easily controlled via remote, smartphone app, or voice assistants like Alexa, Google Home, and Apple Siri."
  }
];
