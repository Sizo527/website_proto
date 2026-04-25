
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Users, Heart, Globe, MessageCircle, ArrowRight, ShieldCheck, Landmark } from "lucide-react";
import { useRef } from "react";
import FadeIn from "../components/layout/FadeIn";

export default function Alumni() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const projects = [
    { title: "Science Lab Refurbishment", goal: "$50,000", raised: "$32,500", desc: "Upgrading our Physics and Chemistry labs with modern equipment.", image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=800" },
    { title: "New Library Wing", goal: "$80,000", raised: "$15,000", desc: "Expanding our library to include digital resources and more study space.", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-brand-bg overflow-hidden">
      {/* Editorial Hero with Parallax */}
      <section ref={heroRef} className="bg-[#050505] text-white h-[85vh] flex items-center px-4 relative overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[#050505] flex items-center justify-center opacity-40 grayscale pointer-events-none"
        >
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/10 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn delay={0.2}>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6 block">Bezha Global Network</span>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.8] mb-10 translate-x-[-4px]">
                Once a <br /> <span className="text-white/40">Student,</span> <br /> Always <br /> <span className="text-brand-accent italic font-light">Family.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-xl text-white/50 max-w-lg mb-12 leading-relaxed">
                 Join over 5,000 Mtshabezi alumni worldwide. Connect, collaborate, and give back to the institution that shaped you.
              </p>
            </FadeIn>
            <FadeIn delay={0.8} direction="none">
              <button className="bg-white text-brand-primary px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-accent hover:text-white transition-all flex items-center gap-3 border-transparent">
                Join the Network <Globe size={18} />
              </button>
            </FadeIn>
          </motion.div>

          <div className="relative hidden lg:block">
             <FadeIn delay={0.8} direction="left">
               <div className="aspect-square overflow-hidden border border-white/10 p-4 bg-white/5 backdrop-blur-md">
                  <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -left-10 p-10 bg-brand-accent shadow-2xl text-brand-primary">
                  <div className="text-3xl font-display font-black">5000+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">Active Members</div>
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20 max-w-2xl mx-auto">
             <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Giving Back</h2>
             <h3 className="text-4xl font-display font-bold mb-6 italic serif font-light">Enduring <span className="text-brand-primary font-bold not-italic">Legacy</span> Projects</h3>
             <p className="text-gray-500 leading-relaxed">Help us build the future. Your contributions to these ongoing projects will leave a lasting legacy for generations of students.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {projects.map((project, idx) => {
              const percentage = Math.round((parseInt(project.raised.replace(/\D/g,'')) / parseInt(project.goal.replace(/\D/g,''))) * 100);
              return (
                <FadeIn key={project.title} delay={idx * 0.1}>
                  <div className="bg-white overflow-hidden shadow-sm border border-gray-100 group">
                     <div className="h-64 overflow-hidden relative">
                        <img src={project.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute top-6 left-6 bg-brand-primary text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                          Fundraising
                        </div>
                     </div>
                     <div className="p-12 space-y-6">
                        <h4 className="text-2xl font-display font-bold uppercase tracking-tight">{project.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                        <div className="space-y-3">
                           <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                             <span>Raised: {project.raised}</span>
                             <span>Goal: {project.goal}</span>
                           </div>
                           <div className="h-2 w-full bg-gray-100 overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${percentage}%` }}
                               transition={{ duration: 1, delay: 0.5 }}
                               className="h-full bg-brand-secondary"
                             ></motion.div>
                           </div>
                        </div>
                        <button className="w-full py-4 border-2 border-brand-primary text-brand-primary font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all mt-4">
                          Donate to this Project
                        </button>
                     </div>
                  </div>
                </FadeIn>
              )
           })}
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="p-10 bg-brand-bg space-y-6 border border-gray-100">
                  <Globe className="text-brand-secondary" size={32} />
                  <h4 className="font-display font-bold text-xl uppercase tracking-wider">Global Networking</h4>
                  <p className="text-sm text-gray-500">Access a private directory of Mtshabezi alumni across the globe for professional collaborations.</p>
               </div>
               <div className="p-10 bg-brand-bg space-y-6 border border-gray-100 md:mt-12">
                  <MessageCircle className="text-brand-primary" size={32} />
                  <h4 className="font-display font-bold text-xl uppercase tracking-wider">Mentorship</h4>
                  <p className="text-sm text-gray-500">Guide current students through career talks, university applications, and professional advice.</p>
               </div>
               <div className="p-10 bg-brand-bg space-y-6 border border-gray-100 md:mt-24">
                  <ShieldCheck className="text-brand-accent" size={32} />
                  <h4 className="font-display font-bold text-xl uppercase tracking-wider">Archive Access</h4>
                  <p className="text-sm text-gray-500">Explore digitized archives, old school photos, and magazines dating back many decades.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-bg text-center px-4 relative overflow-hidden border-t border-gray-100">
         <div className="max-w-3xl mx-auto relative z-10 text-brand-primary">
            <FadeIn>
              <div className="mb-10 inline-block p-6 bg-brand-primary text-brand-accent">
                <Heart size={64} fill="currentColor" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Your Success is <span className="italic serif text-brand-secondary font-light">Mtshabezi's</span> Story.</h2>
              <Link to="/portal" className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-slate transition-all shadow-xl">
                 Update your Details <ArrowRight size={18} />
              </Link>
            </FadeIn>
         </div>
      </section>
    </div>
  );
}
