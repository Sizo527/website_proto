
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Beaker, BookOpen, Calculator, Palette, Eye, Library, Mic2, Star } from "lucide-react";
import FadeIn from "../components/layout/FadeIn";

export default function Academics() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [activeTab, setActiveTab] = useState("sciences");

  const departments = {
    sciences: {
      title: "Pure Sciences",
      icon: Beaker,
      desc: "Our state-of-the-art laboratories facilitate intensive learning in Physics, Chemistry, and Biology, preparing students for medicine and engineering.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    },
    commercials: {
      title: "Commercials & Arts",
      icon: Calculator,
      desc: "Focusing on Business Studies, Accounting, and Humanities to build the next generation of economists and creative thinkers.",
      subjects: ["Accounting", "Business Studies", "Economics", "Literature", "History"],
      image: "https://images.unsplash.com/photo-1434030216411-0bb7c3f3dfad?auto=format&fit=crop&q=80&w=800"
    },
    vocational: {
      title: "Technical & Vocational",
      icon: Palette,
      desc: "In line with Education 5.0, we prioritize practical skills alongside academic rigor.",
      subjects: ["Agriculture", "Building Technology", "Food & Nutrition", "Technical Graphics", "Music"],
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=800"
    }
  };

  return (
    <div className="bg-brand-bg overflow-hidden">
      {/* Hero Header with Parallax */}
      <section ref={heroRef} className="bg-brand-primary h-[70vh] text-white flex items-center relative overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10 px-4 w-full">
          <motion.div style={{ opacity: heroOpacity }} className="max-w-2xl">
            <FadeIn>
              <h2 className="text-brand-accent text-xs uppercase tracking-[0.4em] font-bold mb-6 italic serif">Academic Excellence</h2>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black leading-tight mb-8">PIONEERING <br /> <span className="text-brand-accent italic serif font-light lowercase">knowledge.</span></h1>
              <p className="text-xl md:text-2xl text-white/70 italic serif leading-relaxed">
                Mtshabezi is renowned for its consistent 100% A-Level pass rate. Our curriculum is designed to challenge, inspire, and equip the next generation of leaders.
              </p>
            </FadeIn>
          </motion.div>
          <div className="flex gap-6">
             <FadeIn delay={0.3}>
               <div className="text-center p-10 bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="block text-5xl font-display font-black text-brand-accent mb-2">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">A-Level Rate</span>
               </div>
             </FadeIn>
             <FadeIn delay={0.5}>
               <div className="text-center p-10 bg-white/10 border border-white/20 backdrop-blur-md mt-16">
                  <span className="block text-5xl font-display font-black text-brand-accent mb-2">97%</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">O-Level Rate</span>
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Department Tabs */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap gap-4 mb-24 justify-center">
            {Object.entries(departments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-10 py-5 font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-4 ${
                  activeTab === key 
                  ? "bg-brand-primary text-white shadow-2xl" 
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                }`}
              >
                <dept.icon size={20} />
                {dept.title}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div className="p-16 md:p-24 bg-white shadow-sm border border-gray-100 space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-[0.02] rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                {departments[activeTab as keyof typeof departments].title}
               </h3>
               <p className="text-xl text-gray-500 italic serif leading-relaxed">
                 {departments[activeTab as keyof typeof departments].desc}
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  {departments[activeTab as keyof typeof departments].subjects.map(s => (
                    <div key={s} className="flex items-center gap-4 text-base font-bold text-brand-primary group">
                       <div className="w-2 h-2 bg-brand-accent transition-transform group-hover:rotate-45"></div>
                       {s}
                    </div>
                  ))}
               </div>
               <div className="pt-10 border-t border-gray-100">
                 <button className="flex items-center gap-4 text-brand-secondary font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors">
                   Explore Detailed Syllabus <Library size={20} />
                 </button>
               </div>
            </div>
            <div className="overflow-hidden aspect-[4/3] shadow-2xl border-8 border-white">
              <img 
                src={departments[activeTab as keyof typeof departments].image} 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Special Needs Highlight */}
      <section className="py-32 px-4 border-t border-gray-100">
        <FadeIn>
          <div className="max-w-7xl mx-auto p-16 md:p-24 bg-brand-primary text-white shadow-3xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-10 filter grayscale"></div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-10">
                   <div className="inline-flex items-center gap-4 px-6 py-2 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest bg-brand-accent/5">
                     Inclusive Excellence
                   </div>
                   <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Dedicated <span className="italic serif text-brand-accent font-light">Special Needs</span> Department</h2>
                   <p className="text-xl text-white/70 italic serif leading-relaxed">
                     Excellence is inclusive. Our dedicated Special Needs Department ensures our visually impaired students receive exceptional, tailored support and resources to thrive academically and personally.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                         <div className="w-16 h-16 bg-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                            <Eye size={32} />
                         </div>
                         <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-1 px-2">Braille Resources</h4>
                            <p className="text-xs text-white/40 italic serif px-2">Full curriculum supports</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                         <div className="w-16 h-16 bg-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                            <Mic2 size={32} />
                         </div>
                         <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-1 px-2">Specialized Exams</h4>
                            <p className="text-xs text-white/40 italic serif px-2">Tailored proctoring</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="aspect-[4/3] overflow-hidden shadow-2xl border-8 border-white/20">
                   <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
