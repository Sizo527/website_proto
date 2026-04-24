
import { motion, useScroll, useTransform } from "motion/react";
import { Download, FileText, CheckCircle, Info, ExternalLink, GraduationCap, Users, Globe, ArrowRight } from "lucide-react";
import { useRef } from "react";
import FadeIn from "../components/layout/FadeIn";

export default function Admissions() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const steps = [
    { title: "eMAP Registration", desc: "All Form 1 applications are processed exclusively via the national Electronic Ministry Application Platform.", icon: Globe },
    { title: "Entrance Assessment", desc: "Shortlisted candidates are invited for a holistic assessment of academic and moral fitness.", icon: FileText },
    { title: "Admission Letter", desc: "Successful applicants receive an official invitation to join the Mtshabezi family.", icon: CheckCircle },
  ];

  return (
    <div className="bg-brand-bg overflow-hidden text-brand-primary">
      {/* Banner Header with Parallax */}
      <section ref={heroRef} className="bg-brand-primary h-[60vh] text-white flex items-center relative overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center px-4 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black leading-none mb-8">SECURE YOUR <br /> <span className="text-brand-accent italic serif font-light lowercase text-5xl md:text-8xl">future.</span></h1>
              <div className="h-2 w-24 bg-brand-accent mx-auto mb-10"></div>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/60 serif italic leading-relaxed">
                 Join a legacy of excellence. We are now accepting inquiries for the 2026 Academic Year.
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* Form 1 Admissions (eMAP) */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <FadeIn>
               <div>
                  <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Form 1 Enrolment</h2>
                  <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight uppercase tracking-tighter mb-8">
                    National <span className="italic serif font-light text-brand-primary">eMAP</span> Procedure
                  </h3>
               </div>
               <p className="text-xl text-gray-500 italic serif leading-relaxed mb-10">
                 Mtshabezi High School adheres strictly to the Ministry of Primary and Secondary Education’s electronic application process.
               </p>
            </FadeIn>
            <div className="space-y-8">
               {steps.map((step, idx) => (
                 <FadeIn key={step.title} delay={idx * 0.1}>
                   <div className="flex gap-8 items-start group">
                     <div className="w-16 h-16 bg-white flex items-center justify-center text-brand-primary shadow-sm border border-gray-100 shrink-0 font-display font-black text-xl group-hover:bg-brand-primary group-hover:text-white transition-all">
                        0{idx + 1}
                     </div>
                     <div>
                        <h4 className="font-bold uppercase tracking-widest text-base mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-500 italic serif leading-relaxed">{step.desc}</p>
                     </div>
                   </div>
                 </FadeIn>
               ))}
            </div>
            <FadeIn delay={0.4}>
              <a 
                href="https://www.emap.co.zw" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-secondary transition-all shadow-xl"
              >
                Proceed to eMAP Portal <ExternalLink size={18} />
              </a>
            </FadeIn>
          </div>
          <div className="relative">
             <FadeIn direction="left">
               <div className="aspect-[4/5] overflow-hidden shadow-2xl border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1491845339675-bc02adfc1e2b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/5 rounded-full blur-[100px] z-[-1]"></div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* A-Level Requirements */}
      <section className="py-32 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-20">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">A-Level Entry</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 italic serif leading-tight">Advanced <span className="not-italic font-bold text-brand-primary uppercase">Scholarship</span></h3>
              <p className="text-xl text-gray-500 font-medium tracking-tight leading-relaxed">Our A-Level center is highly competitive, attracting the brightest minds in Zimbabwe. Entry is based on stringent O-Level achievement.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-12 bg-brand-bg border border-gray-100 flex flex-col justify-between h-full group hover:border-brand-primary transition-all">
                 <GraduationCap className="text-brand-primary mb-12" size={48} />
                 <div>
                    <h4 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter">Academic Merit</h4>
                    <p className="text-base text-gray-500 italic serif leading-relaxed mb-10">Candidates for Sciences must possess A-grades in all core science subjects and Mathematics.</p>
                    <div className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest py-6 border-t border-gray-200">Requirement 01</div>
                 </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-12 bg-brand-primary text-white shadow-2xl flex flex-col justify-between h-full border border-transparent">
                 <Users className="text-brand-accent mb-12" size={48} />
                 <div>
                    <h4 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter">Character & Conduct</h4>
                    <p className="text-base text-white/50 italic serif leading-relaxed mb-10">A clean conduct record and commitment to BICC values are essential for admission.</p>
                    <div className="text-[10px] uppercase font-bold text-brand-accent tracking-widest py-6 border-t border-white/10">Requirement 02</div>
                 </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-12 bg-white border border-gray-200 flex flex-col justify-between h-full group hover:bg-brand-secondary transition-all text-brand-primary hover:text-white">
                 <Download className="text-brand-secondary group-hover:text-white mb-12" size={48} />
                 <div>
                    <h4 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter">Application Form</h4>
                    <p className="text-base text-gray-500 italic serif leading-relaxed mb-10 group-hover:text-white/70">Download the detailed A-Level subject combination guide and application form.</p>
                    <button className="flex items-center gap-4 text-[10px] uppercase font-bold text-brand-secondary tracking-widest py-6 border-t border-gray-200 group-hover:text-white group-hover:border-white/20">
                      Download PDF <ArrowRight size={16} />
                    </button>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-4 max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <Info className="text-brand-secondary mx-auto mb-8" size={32} />
            <h3 className="text-4xl font-display font-bold uppercase tracking-tight">Common Inquiries</h3>
          </div>
        </FadeIn>
        <div className="space-y-6">
           <FadeIn delay={0.1}>
             <div className="p-10 bg-white border border-gray-100 shadow-sm">
               <h4 className="font-bold text-base uppercase tracking-wider mb-4 text-brand-primary">Can I apply mid-term?</h4>
               <p className="text-base text-gray-500 italic serif leading-relaxed">Mid-term transfers are only considered in exceptional circumstances and depend on available vacancy in specific classes.</p>
             </div>
           </FadeIn>
           <FadeIn delay={0.2}>
             <div className="p-10 bg-white border border-gray-100 shadow-sm">
               <h4 className="font-bold text-base uppercase tracking-wider mb-4 text-brand-primary">Are scholarships available?</h4>
               <p className="text-base text-gray-500 italic serif leading-relaxed">Mtshabezi offers merit-based fee reductions for students demonstrating exceptional academic or sporting talent.</p>
             </div>
           </FadeIn>
        </div>
      </section>
    </div>
  );
}
