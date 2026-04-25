
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Trophy, Music, Speech, Users, Dumbbell, Star, ChevronRight } from "lucide-react";
import FadeIn from "../components/layout/FadeIn";

export default function StudentLife() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const activities = [
    { title: "Champion Choir", desc: "Our internationally recognized choir consistently takes gold in national choral competitions.", icon: Music, image: "https://images.unsplash.com/photo-1540609651531-16893698064a?auto=format&fit=crop&q=80&w=800" },
    { title: "Debate & Quiz", desc: "Cultivating sharp minds and public speaking excellence through vibrant debate societies.", icon: Speech, image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
    { title: "Sporting Glory", desc: "Competitive Basketball, Netball, and Athletics with top-tier provincial training.", icon: Trophy, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800" },
    { title: "Leadership Club", desc: "Nurturing tomorrow's ethical leaders through community service and team building.", icon: Users, image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-brand-bg overflow-hidden">
      {/* Dynamic Header with Parallax */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center bg-brand-primary text-white text-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 opacity-10 pointer-events-none"
        >
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border border-white/5"></div>
            ))}
          </div>
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn>
              <div className="inline-block px-6 py-2 bg-brand-accent text-brand-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
                Vibrant & Disciplined
              </div>
              <h1 className="text-5xl md:text-8xl xl:text-9xl font-display font-black leading-[0.8] mb-10 tracking-tighter">
                Beyond the <br /> <span className="text-brand-accent italic font-light text-5xl md:text-8xl">Classroom.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                At Mtshabezi, student life is a vibrant tapestry of culture, sports, and leadership. We foster physical fitness, resilience, and teamwork.
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* 800-Seat Pavilion Highlight */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <FadeIn direction="right">
               <div className="aspect-video overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1519750783826-51dbde47c1b4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -right-10 w-full h-full bg-brand-accent/5 z-0"></div>
             </FadeIn>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <FadeIn>
              <div className="flex items-center gap-4 text-brand-secondary font-bold uppercase tracking-[0.3em] text-xs px-4 py-2 border border-brand-secondary/20 bg-brand-secondary/5 w-fit">
                <Dumbbell size={20} />
                Premier Facilities
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter">
                The <span className="italic font-light text-brand-primary">Multi-Purpose</span> Pavilion
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Our impressive 800-seat pavilion serves as the heart of school spirit. From exhilarating basketball finals to national choral festivals and graduation ceremonies, this state-of-the-art facility is where memories are made.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gray-100">
                 <div className="space-y-2">
                    <span className="text-5xl font-display font-black text-brand-primary">800</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Capacity</span>
                 </div>
                 <div className="space-y-2">
                    <span className="text-5xl font-display font-black text-brand-primary">Elite</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Training Surface</span>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Extracurricular Masonry */}
      <section className="py-32 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24 max-w-2xl mx-auto">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Discovery & Growth</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">Our Diverse <span className="italic text-brand-primary font-light">Societies</span></h3>
              <p className="text-xl text-gray-500 leading-relaxed">Every student finds their niche. We encourage participation in at least two extracurricular activities to ensure a well-rounded character.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {activities.map((act, idx) => (
              <FadeIn key={act.title} delay={idx * 0.1}>
                <div className="group relative h-[500px] overflow-hidden shadow-2xl border-4 border-white shadow-brand-primary/5">
                  <img src={act.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-accent transition-all duration-500">
                      <act.icon size={28} />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-tight">{act.title}</h4>
                    <p className="text-white/70 text-base mb-8 line-clamp-2 max-w-md">{act.desc}</p>
                    <button className="flex items-center gap-3 text-brand-accent font-bold uppercase tracking-widest text-xs hover:text-white transition-colors duration-300">
                      View Gallery <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="py-32 px-4 bg-brand-bg">
        <FadeIn>
          <div className="max-w-7xl mx-auto p-16 md:p-24 bg-brand-secondary text-white flex flex-col lg:flex-row justify-between items-center gap-16 overflow-hidden relative shadow-3xl">
             <div className="absolute left-0 top-0 w-64 h-64 bg-white/5 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
             <div className="max-w-xl relative z-10 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic leading-tight">National Champion <span className="text-white/40 not-italic font-black">Choir.</span></h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  Mtshabezi High School has held the National Choral Championship for three consecutive terms, a testament to our discipline and unwavering talent.
                </p>
             </div>
             <div className="relative z-10 flex gap-6">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <Star className="text-white fill-white" size={32} />
                </div>
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all cursor-pointer mt-12">
                  <Star className="text-white fill-white" size={32} />
                </div>
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <Star className="text-white fill-white" size={32} />
                </div>
             </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
