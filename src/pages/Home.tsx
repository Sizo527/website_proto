
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Trophy, Users, BookOpen, Sprout, Landmark, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import FadeIn from "../components/layout/FadeIn";
import AnimatedCounter from "../components/AnimatedCounter";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = [
    { label: "O-Level Pass Rate", value: "97%", icon: Trophy, color: "bg-blue-500" },
    { label: "A-Level Pass Rate", value: "100%", icon: GraduationCap, color: "bg-orange-500" },
    { label: "Students Enrolled", value: "850+", icon: Users, color: "bg-green-500" },
    { label: "Years of Excellence", value: "120+", icon: Landmark, color: "bg-brand-primary" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-brand-primary">
        {/* Background Overlay with Parallax */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050335392-9ae888147293?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Enrolment for 2026 Now Open
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black text-white leading-[0.9] mb-8">
                Excellence <br /> Defined. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue-light">Heritage</span> Honored.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-lg leading-relaxed">
                Striving for Quality in Education since 1904. Producing tomorrow's leaders through discipline and innovation.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8} direction="none">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/admissions" 
                  className="group bg-brand-secondary text-white px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-mauve transition-all border border-transparent"
                >
                  Apply via eMAP
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-primary transition-all text-center"
                >
                  Our 120-Year Story
                </Link>
              </div>
            </FadeIn>
          </motion.div>

          {/* Featured Stats Overlay */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <FadeIn key={stat.label} delay={0.6 + idx * 0.1} direction="left">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-default">
                  <div className={`w-12 h-12 ${stat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="text-4xl font-display font-black text-white mb-1">
                    <AnimatedCounter value={stat.value} duration={2.5} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/50 font-bold">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic News Ticker */}
      <div className="bg-brand-secondary text-white py-3 overflow-hidden whitespace-nowrap border-y border-white/10">
        <motion.div 
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-flex gap-20 items-center min-w-full"
        >
          <span className="flex items-center gap-4"><Trophy size={16} /> Prize Giving Day 2026: October 24th</span>
          <span className="flex items-center gap-4"><BookOpen size={16} /> Mid-term Examinations conclude this Friday</span>
          <span className="flex items-center gap-4"><Sprout size={16} /> Agri-Hub: Fresh Potato Harvest Available Now</span>
          <span className="flex items-center gap-4"><Users size={16} /> Alumni: Bezha Global Network Annual Gala approaching</span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center gap-4"><Trophy size={16} /> Prize Giving Day 2026: October 24th</span>
          <span className="flex items-center gap-4"><BookOpen size={16} /> Mid-term Examinations conclude this Friday</span>
          <span className="flex items-center gap-4"><Sprout size={16} /> Agri-Hub: Fresh Potato Harvest Available Now</span>
          <span className="flex items-center gap-4"><Users size={16} /> Alumni: Bezha Global Network Annual Gala approaching</span>
        </motion.div>
      </div>

      {/* Quick Links Section */}
      <section className="py-32 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Core Pillars</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Your Gateway to a <span className="italic font-light text-brand-secondary">Transformative</span> Educational Experience.</h3>
              </div>
              <Link to="/academics" className="group flex items-center gap-3 text-sm font-bold tracking-widest text-brand-primary">
                View All Programs <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-brand-secondary" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Link 1: Academics */}
            <FadeIn delay={0.1} direction="up">
              <Link to="/academics" className="relative aspect-[4/5] overflow-hidden group shadow-xl block">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <BookOpen className="text-brand-accent mb-4" size={32} />
                  <h4 className="text-3xl font-display font-bold text-white mb-2">Academics</h4>
                  <p className="text-white/70 text-sm mb-6">Sciences, Commercials & Arts under Heritage 5.0</p>
                  <div className="inline-flex h-12 w-12 bg-white text-brand-primary items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Quick Link 2: Student Life */}
            <FadeIn delay={0.2} direction="up">
              <Link to="/student-life" className="relative aspect-[4/5] overflow-hidden group shadow-xl mt-12 md:mt-0 block">
                <img src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <Trophy className="text-white mb-4" size={32} />
                  <h4 className="text-3xl font-display font-bold text-white mb-2">Student Life</h4>
                  <p className="text-white/70 text-sm mb-6">Champion Choir, Sports & Multi-Purpose Pavilion</p>
                  <div className="inline-flex h-12 w-12 bg-white text-brand-secondary items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Quick Link 3: Agri-Hub */}
            <FadeIn delay={0.3} direction="up">
              <Link to="/agri-hub" className="relative aspect-[4/5] overflow-hidden group shadow-xl mt-12 md:mt-24 block">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <Sprout className="text-brand-blue-light mb-4" size={32} />
                  <h4 className="text-3xl font-display font-bold text-white mb-2">Agri-Hub</h4>
                  <p className="text-white/70 text-sm mb-6">Local Poultry & Fresh Horticulture Produce</p>
                  <div className="inline-flex h-12 w-12 bg-white text-brand-primary items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Heritage Call to Action */}
      <section className="py-32 px-4 relative bg-brand-primary text-white overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue-light/5 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <div className="mb-12 inline-block p-4 border border-white/20 bg-white/5 backdrop-blur-md">
              <Landmark className="text-brand-accent w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">A <span className="italic serif font-light text-brand-accent">Legacy</span> of Academic Distinction Since 1904.</h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12">
              "Driven by our Christian values, we are committed to nurturing the next generation of resilient, innovative leaders in Matabeleland South and beyond."
            </p>
            <Link to="/about" className="inline-block py-5 px-12 bg-white text-brand-primary font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-accent hover:text-white transition-all shadow-2xl">
              Explore our Mission
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
