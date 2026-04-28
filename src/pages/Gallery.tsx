
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "../components/layout/FadeIn";
import SEO from "../components/SEO";

interface GalleryImage {
  src: string;
  category: string;
  caption: string;
}

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&q=80&w=1200", category: "Campus", caption: "Mtshabezi High School main campus grounds" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200", category: "Academics", caption: "Students engaged in classroom learning" },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1200", category: "Campus", caption: "School assembly and daily routines" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200", category: "Academics", caption: "Library and study resources" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1200", category: "Sports", caption: "Multi-purpose pavilion and sports activities" },
  { src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=1200", category: "Events", caption: "Annual Prize Giving ceremony" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200", category: "Academics", caption: "Practical science sessions" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1200", category: "Sports", caption: "Students during athletics practice" },
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200", category: "Campus", caption: "Agricultural project grounds" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200", category: "Events", caption: "School cultural activities" },
  { src: "https://images.unsplash.com/photo-1491845339675-bc02adfc1e2b?auto=format&fit=crop&q=80&w=1200", category: "Campus", caption: "Boarding facilities and dormitories" },
  { src: "https://images.unsplash.com/photo-1511317558624-21445e393c07?auto=format&fit=crop&q=80&w=1200", category: "Events", caption: "Visiting Day celebrations" },
];

const categories = ["All", "Campus", "Academics", "Sports", "Events"];

export default function Gallery() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };
  const prevImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  return (
    <div className="bg-brand-bg overflow-hidden">
      <SEO title="Campus Gallery — Mtshabezi High School" description="Photos of campus life, sports, cultural events, and facilities at Mtshabezi High School, Gwanda, Zimbabwe." />
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center bg-brand-primary text-white overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto text-center px-4 z-10 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black tracking-tighter mb-6 text-white">
                Our <span className="italic font-light text-brand-accent">Gallery</span>
              </h1>
              <div className="h-1.5 bg-brand-accent mx-auto mb-8 w-24" />
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed">
                Moments that define life at Mtshabezi High School.
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-white border-b border-gray-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-brand-primary text-white"
                  : "bg-brand-bg text-brand-primary hover:bg-brand-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, idx) => (
              <FadeIn key={img.src + activeCategory} delay={Math.min(idx * 0.05, 0.3)}>
                <div
                  className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/50 transition-colors flex items-end">
                    <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">{img.category}</span>
                      <p className="text-white text-sm mt-1">{img.caption}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10">
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].caption}
                className="max-h-[75vh] w-auto object-contain"
              />
              <p className="text-white/70 text-sm mt-4 text-center">{filtered[lightboxIndex].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
