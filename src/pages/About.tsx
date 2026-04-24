
import { motion, useScroll, useTransform } from "motion/react";
import { Landmark, Target, Users, BookOpen, ShieldCheck, Heart } from "lucide-react";
import { useRef } from "react";
import FadeIn from "../components/layout/FadeIn";

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const values = [
    { title: "Academic Excellence", desc: "Consistently achieving 97%+ pass rates through dedicated mentorship.", icon: Landmark },
    { title: "Christian Values", desc: "Rooted in the Brethren in Christ Church (BICC) faith and morals.", icon: ShieldCheck },
    { title: "Heritage 5.0", desc: "Integrating research, community service, and industrialization.", icon: BookOpen },
    { title: "Holistic Growth", desc: "Developing physically fit and mentally resilient leaders.", icon: Heart },
  ];

  return (
    <div className="bg-brand-bg overflow-hidden">
      {/* Page Header with Parallax */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center bg-brand-primary text-white overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511317558624-21445e393c07?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 filter grayscale pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto text-center px-4 z-10 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black uppercase tracking-tighter mb-6">
                OUR <span className="italic font-light serif text-brand-accent">HERITAGE</span>
              </h1>
              <div className="h-1.5 bg-brand-accent mx-auto mb-8 w-24"></div>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 serif italic leading-relaxed">
                "Built on a foundation of faith, integrity, and unwavering commitment to quality education since 1904."
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* History Vertical Layout */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <FadeIn>
              <div className="inline-block px-4 py-2 border border-brand-secondary text-xs uppercase tracking-[0.3em] font-bold text-brand-secondary mb-6">
                Established 1904
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-8">A Century of Shaping <span className="text-brand-secondary italic serif font-light">Destinies</span> in Matabeleland.</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg italic serif">
                <p>
                  Founded by the Brethren in Christ Church (BICC), Mtshabezi High School has stood as a beacon of academic excellence for over 120 years. What began as a humble mission school has evolved into one of Zimbabwe's leading institutions.
                </p>
                <p>
                  Our journey is not just about time; it's about the thousands of lives transformed. We honor our heritage by continuing to provide a sanctuary where academic rigor meets spiritual grounding.
                </p>
              </div>
            </FadeIn>
            
            {/* Mission/Vision Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              <FadeIn delay={0.2}>
                <div className="p-10 bg-white border border-gray-100 shadow-sm border-t-4 border-t-brand-secondary">
                  <Target className="text-brand-secondary mb-6" size={32} />
                  <h4 className="font-display font-bold text-xl mb-4 uppercase tracking-wider">Mission</h4>
                  <p className="text-sm text-gray-500 italic serif leading-relaxed">To nurture diligent, physically fit leaders equipped with moral integrity and innovative minds.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-10 bg-brand-primary text-white border-t-4 border-t-brand-accent">
                  <Users className="text-brand-accent mb-6" size={32} />
                  <h4 className="font-display font-bold text-xl mb-4 uppercase tracking-wider">Vision</h4>
                  <p className="text-sm text-white/60 italic serif leading-relaxed">To be the national standard-bearer for heritage-based education and character development.</p>
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div className="relative">
             <FadeIn direction="left">
               <div className="relative z-10 overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               {/* Decorative Elements */}
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/20 blur-3xl z-0"></div>
               <div className="absolute top-10 -left-10 w-48 h-48 bg-brand-primary/5 border border-brand-primary/10 -rotate-12 z-0 hidden md:block"></div>
             </FadeIn>
          </div>
        </div>
      </section>


      {/* Education 5.0 Section */}
      <section className="py-32 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Pedagogical Approach</h2>
               <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Embracing Heritage-Based <span className="italic serif text-brand-primary font-light">Education 5.0</span></h3>
               <p className="text-xl text-gray-500 italic serif leading-relaxed">
                 In alignment with national pillars, we go beyond traditional teaching to integrate innovation, research, and community industrialization into our daily learning.
               </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <FadeIn key={val.title} delay={idx * 0.1}>
                <div className="p-12 border border-gray-100 bg-brand-bg hover:border-brand-accent transition-all group h-full">
                  <div className="w-16 h-16 bg-white text-brand-primary flex items-center justify-center mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <val.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">{val.title}</h4>
                  <p className="text-base text-gray-500 italic serif leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Board Section Placeholder */}
      <section className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" className="shadow-2xl mt-12 border-4 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" className="shadow-2xl border-4 border-white" />
              </div>
            </FadeIn>
          </div>
          <div className="order-1 md:order-2 space-y-10">
            <FadeIn direction="left">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary">Leadership</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight">Guided by <span className="italic serif text-brand-primary font-light">Integrity</span> & Vision.</h3>
              <p className="text-xl text-gray-600 italic serif leading-relaxed">Our administration and board are committed to maintaining the high standards expected of Mtshabezi. Led by a team of experienced educators and BICC elders, we ensure every decision serves the student's future.</p>
              <button className="px-12 py-5 border border-brand-primary text-brand-primary font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-white transition-all">
                Meet the Administration
              </button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
