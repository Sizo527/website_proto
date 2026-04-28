
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Trophy, Users, BookOpen, Sprout, GraduationCap, Cpu, Home as HomeIcon, Zap, Calendar, ChevronRight, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import FadeIn from "../components/layout/FadeIn";
import AnimatedCounter from "../components/AnimatedCounter";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImgY = useTransform(aboutScroll, [0, 1], ["0%", "15%"]);

  const stats = [
    { label: "O-Level Pass Rate", value: "97%", icon: Trophy, color: "bg-brand-accent" },
    { label: "A-Level Pass Rate", value: "100%", icon: GraduationCap, color: "bg-brand-secondary" },
    { label: "Pavilion Capacity", value: "800+", icon: Users, color: "bg-brand-blue-light" },
  ];

  const features = [
    {
      title: "Academics",
      desc: "ZIMSEC curriculum powered by Heritage-Based Education 5.0 — Sciences, Commercials & Arts.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
      icon: BookOpen,
      link: "/academics",
      accent: "brand-accent",
    },
    {
      title: "Student Life",
      desc: "800-seat pavilion, national choir champions, basketball, netball, soccer & athletics.",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1000",
      icon: Trophy,
      link: "/student-life",
      accent: "white",
    },
    {
      title: "Agri-Hub",
      desc: "Poultry, horticulture and drip irrigation — building real-world farming skills.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
      icon: Sprout,
      link: "/agri-hub",
      accent: "brand-blue-light",
    },
  ];

  const staff = [
    { name: "Mr. T. Moyo", role: "Headmaster", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. S. Ndlovu", role: "Deputy Headmaster", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. B. Ncube", role: "Head of Sciences", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. N. Sibanda", role: "Head of Commercials", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  ];

  const news = [
    { date: "Oct 24, 2026", title: "Annual Prize Giving Day", excerpt: "Join us as we celebrate academic excellence and honour our top-performing students and staff.", category: "Event" },
    { date: "Nov 15, 2026", title: "Visiting Day & Consultation", excerpt: "Parents and guardians are invited to campus for end-of-term consultations with staff.", category: "Notice" },
    { date: "Sep 08, 2026", title: "National Choir Victory", excerpt: "Mtshabezi High takes first place at the National Schools Music Festival — a proud moment for our community.", category: "Achievement" },
  ];

  const highlights = [
    { title: "Innovation Centre", desc: "Interactive boards, smart screens, and internet-connected digital learning tools across every department.", icon: Cpu },
    { title: "Boarding Facilities", desc: "Well-maintained dormitories for boys and girls, providing a safe and structured living environment.", icon: HomeIcon },
    { title: "Solar & Borehole", desc: "Reliable off-grid solar power and borehole water systems ensuring uninterrupted campus operations.", icon: Zap },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== SECTION 1: HERO ===== */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-brand-primary">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050335392-9ae888147293?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <motion.div style={{ opacity: heroOpacity }} className="max-w-3xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                </span>
                Enrolment for 2026 Now Open
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black text-white leading-[0.9] mb-8">
                Where Excellence <br />Meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue-light">Heritage.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-lg leading-relaxed">
                A Brethren in Christ Church boarding school in Gwanda, shaping tomorrow's leaders through discipline and innovation since 1904.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="none">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="group bg-brand-accent text-brand-primary px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white transition-all"
                >
                  Explore Admissions
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-primary transition-all text-center"
                >
                  Our Story
                </Link>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: SOCIAL PROOF (STATS) ===== */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-gray-200">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.15}>
              <div className="flex flex-col items-center text-center px-8 py-4">
                <div className={`w-14 h-14 ${stat.color} flex items-center justify-center text-white mb-5`}>
                  <stat.icon size={26} />
                </div>
                <div className="text-5xl font-display font-black text-brand-primary mb-2">
                  <AnimatedCounter value={stat.value} duration={2.5} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== SECTION 3: ABOUT PREVIEW ===== */}
      <section className="py-32 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Parallax Image */}
          <div ref={aboutRef} className="relative overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
            <motion.img
              style={{ y: aboutImgY }}
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
              className="absolute inset-0 w-full h-[120%] object-cover"
            />
          </div>

          <div className="space-y-8">
            <FadeIn>
              <div className="inline-block px-4 py-2 border border-brand-secondary text-xs uppercase tracking-[0.3em] font-bold text-brand-secondary mb-2">
                Established 1904
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                A Beacon of <span className="italic serif font-light text-brand-secondary">Academic Excellence</span> in Matabeleland South.
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  Nestled in the heart of Gwanda, Mtshabezi High School is proudly operated under the Brethren in Christ Church. For over a century, the school has earned its reputation as one of Zimbabwe's most distinguished academic institutions.
                </p>
                <p>
                  The school sits within a broader Mission campus that includes a hospital, a primary school, and a Bible school — a community rooted in faith, service, and education. Through the Heritage-Based Education 5.0 model, Mtshabezi prepares students not just for examinations, but for life — blending academic rigour with entrepreneurship, innovation, and real-world skills.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-brand-primary uppercase mt-4 group">
                Learn More About Us <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-brand-secondary" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: KEY FEATURES ===== */}
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
            {features.map((feat, idx) => (
              <FadeIn key={feat.title} delay={0.1 + idx * 0.1} direction="up">
                <Link to={feat.link} className={`relative aspect-[4/5] overflow-hidden group shadow-xl block ${idx === 2 ? "mt-12 md:mt-24" : idx === 1 ? "mt-12 md:mt-0" : ""}`}>
                  <ParallaxImage src={feat.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <feat.icon className={`text-${feat.accent} mb-4`} size={32} />
                    <h4 className="text-3xl font-display font-bold text-white mb-2">{feat.title}</h4>
                    <p className="text-white/70 text-sm mb-6">{feat.desc}</p>
                    <div className="inline-flex h-12 w-12 bg-white text-brand-primary items-center justify-center group-hover:bg-brand-accent transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: MEET THE STAFF PREVIEW ===== */}
      <section className="py-32 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Led by <span className="italic font-light text-brand-secondary">Experience</span> & Vision.</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 0.1}>
                <div className="group cursor-default">
                  <div className="aspect-[3/4] overflow-hidden shadow-lg mb-6 relative">
                    <img src={member.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-display font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-16">
              <Link to="/staff" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-brand-primary uppercase group border border-brand-primary px-10 py-4 hover:bg-brand-primary hover:text-white transition-all">
                View Full Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== SECTION 6: NEWS & ANNOUNCEMENTS ===== */}
      <section className="py-32 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Latest Updates</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Latest from <span className="italic font-light text-brand-secondary">Mtshabezi.</span></h3>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="bg-white border border-gray-100 p-10 shadow-sm hover:shadow-lg transition-shadow group h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <Calendar size={16} className="text-brand-secondary" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">{item.date}</span>
                    <span className="ml-auto text-[10px] uppercase tracking-widest font-bold text-brand-accent bg-brand-primary px-3 py-1">{item.category}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold mb-4 group-hover:text-brand-secondary transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.excerpt}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                      Read More <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: CTA ===== */}
      <section className="py-24 px-4 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-white">Begin Your <span className="italic font-light text-brand-accent">Journey</span> at Mtshabezi.</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Form 1 admissions are processed through the national eMAP platform. A-Level candidates may apply directly to the school.
            </p>
            <Link to="/admissions" className="inline-block py-5 px-14 bg-brand-accent text-brand-primary font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all shadow-2xl">
              View Admissions Guide
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== SECTION 8: CAMPUS HIGHLIGHTS ===== */}
      <section className="py-32 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Infrastructure</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Built to <span className="italic font-light text-brand-secondary">Empower</span> Every Learner.</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="p-12 border border-gray-100 bg-brand-bg hover:border-brand-accent transition-all group h-full">
                  <div className="w-16 h-16 bg-white text-brand-primary flex items-center justify-center mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: GALLERY TEASER ===== */}
      <section className="py-32 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Campus Life</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">A Glimpse of <span className="italic font-light text-brand-secondary">Mtshabezi.</span></h3>
              </div>
              <Link to="/gallery" className="group flex items-center gap-3 text-sm font-bold tracking-widest text-brand-primary">
                <Image size={18} className="text-brand-secondary" /> View Gallery <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-brand-secondary" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <Link to="/gallery" className="relative aspect-square overflow-hidden group">
                  <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/30 transition-colors" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: HERITAGE CTA ===== */}
      <section className="py-32 px-4 relative bg-brand-primary text-white overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue-light/5 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight text-white">
              A <span className="italic serif font-light text-brand-accent">Legacy</span> of Academic Distinction Since 1904.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12">
              Driven by our Christian values and rooted in the Brethren in Christ Church, we are committed to nurturing the next generation of resilient, innovative leaders in Matabeleland South and beyond.
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

/* Parallax image sub-component for feature cards */
function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.img
        style={{ y }}
        src={src}
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  );
}
