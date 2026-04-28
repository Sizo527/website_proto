
import { motion, useScroll, useTransform } from "motion/react";
import { Landmark, Target, Users, BookOpen, ShieldCheck, Heart, Cpu, Droplets, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/layout/FadeIn";
import AnimatedCounter from "../components/AnimatedCounter";
import SEO from "../components/SEO";

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const missionRef = useRef(null);
  const { scrollYProgress: missionScroll } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  });
  const missionImgY = useTransform(missionScroll, [0, 1], ["0%", "15%"]);

  const values = [
    { title: "Academic Excellence", desc: "A consistent record of 97% O-Level and 100% A-Level pass rates, placing us among Zimbabwe's most distinguished institutions.", icon: Landmark },
    { title: "Christian Foundation", desc: "Guided by the Brethren in Christ Church, our moral framework cultivates integrity, discipline, and compassion in every student.", icon: ShieldCheck },
    { title: "Heritage 5.0", desc: "We go beyond traditional teaching — integrating research, entrepreneurship, innovation, and community service into the academic experience.", icon: BookOpen },
    { title: "Holistic Development", desc: "From championship-winning choirs to competitive athletics, we nurture physically resilient and culturally aware young leaders.", icon: Heart },
  ];

  const infrastructure = [
    { title: "Innovation Centre", desc: "Equipped with interactive boards, smart screens, web cameras, and high-speed internet. All departments have been furnished with computers and projectors.", icon: Cpu },
    { title: "Computer Laboratory", desc: "A dedicated ICT lab housing 50 networked computers, providing hands-on digital skills training aligned with Education 5.0.", icon: BookOpen },
    { title: "Solar & Borehole Systems", desc: "Self-sustaining off-grid solar arrays power campus water pumps, guaranteeing reliable borehole water supply even during electricity outages.", icon: Droplets },
  ];

  return (
    <div className="bg-brand-bg overflow-hidden">
      <SEO title="Our Story — Mtshabezi High School" description="Founded in 1906, Mtshabezi is a Brethren in Christ Church boarding institution in Gwanda, shaping leaders through Heritage-Based Education 5.0 in Matabeleland South." />
      {/* Page Header with Parallax */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center bg-brand-primary text-white overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511317558624-21445e393c07?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 filter grayscale pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto text-center px-4 z-10 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black tracking-tighter mb-6 text-white">
                Our <span className="italic font-light text-brand-accent">Story</span>
              </h1>
              <div className="h-1.5 bg-brand-accent mx-auto mb-8 w-24"></div>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed">
                Built on a foundation of faith, integrity, and unwavering commitment to quality education since 1906.
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <FadeIn>
              <div className="inline-block px-4 py-2 border border-brand-secondary text-xs uppercase tracking-[0.3em] font-bold text-brand-secondary mb-6">
                Established 1906
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-8">A Century of Shaping <span className="text-brand-secondary italic serif font-light">Destinies</span> in Matabeleland.</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded in 1906 by Rev. Harvey J. Frey and Mrs. Emma Frey — missionaries who transferred from the nearby Matopo Mission — Mtshabezi began as the second Brethren in Christ Church station in southern Rhodesia. Established on a 6,000-acre farm along the Mtshabezi River in the Gwanda District, the mission was born from requests by local pupils eager for an outpost dedicated to evangelism and education.
                </p>
                <p>
                  By 1908, a brick church and a girls' boarding school had been completed — the latter providing refuge and education for young women at a time when few such opportunities existed. From these humble beginnings, Mtshabezi grew into one of Zimbabwe's most respected centres of learning, consistently producing exceptional scholars and well-rounded citizens across more than a century of unbroken service.
                </p>
                <p>
                  The school sits within the broader Mtshabezi Mission campus — a community that today includes a hospital (established 1951), a primary school, and the Ekuphileni Bible Institute (relocated to campus in 1968, meaning "where there is life"). This unique setting, where education, faith, healthcare, and community service coexist, instils in students a deep appreciation for service and social responsibility that defines the Mtshabezi character.
                </p>
                <p>
                  When the Brethren in Christ Church in Zimbabwe achieved administrative autonomy from its North American parent body in 1964, Mtshabezi stood as one of the church's proudest achievements — a lasting monument to the belief that disciplined education and moral formation can transform entire communities. Today, the school's alumni network spans continents, a testament to the enduring quality of a Mtshabezi education.
                </p>
              </div>
            </FadeIn>
            
            {/* Mission/Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              <FadeIn delay={0.2}>
                <div className="p-10 bg-white border border-gray-100 shadow-sm border-t-4 border-t-brand-secondary">
                  <Target className="text-brand-secondary mb-6" size={32} />
                  <h4 className="font-display font-bold text-xl mb-4 uppercase tracking-wider">Mission</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">To nurture diligent, morally grounded individuals who are equipped with the academic knowledge, practical skills, and innovative thinking necessary to lead and serve their communities.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-10 bg-brand-primary text-white border-t-4 border-t-brand-accent">
                  <Users className="text-brand-accent mb-6" size={32} />
                  <h4 className="font-display font-bold text-xl mb-4 uppercase tracking-wider text-white">Vision</h4>
                  <p className="text-sm text-white/60 leading-relaxed">To be recognised as the standard-bearer for heritage-based education in Zimbabwe — a school that produces leaders who are academically excellent, spiritually grounded, and ready for the modern world.</p>
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div ref={missionRef} className="relative">
             <FadeIn direction="left">
               <div className="relative z-10 overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                 <motion.img
                   style={{ y: missionImgY }}
                   src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                   className="absolute inset-0 w-full h-[120%] object-cover"
                 />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/20 blur-3xl z-0"></div>
               <div className="absolute top-10 -left-10 w-48 h-48 bg-brand-primary/5 border border-brand-primary/10 -rotate-12 z-0 hidden md:block"></div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Education 5.0 / Core Values */}
      <section className="py-32 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Pedagogical Approach</h2>
               <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Embracing Heritage-Based <span className="italic serif text-brand-primary font-light">Education 5.0</span></h3>
               <p className="text-xl text-gray-500 leading-relaxed">
                 In alignment with Zimbabwe's national educational framework, Mtshabezi integrates five critical pillars into its curriculum: teaching, research, community service, innovation, and industrialisation. This forward-thinking approach ensures that students are not only prepared for examinations, but for life beyond the classroom.
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
                  <p className="text-base text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FadeIn delay={0}>
            <div>
              <div className="text-5xl font-display font-black text-brand-accent mb-2"><AnimatedCounter value="97%" duration={2.5} /></div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">O-Level Pass Rate</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <div className="text-5xl font-display font-black text-brand-accent mb-2"><AnimatedCounter value="100%" duration={2.5} /></div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">A-Level Pass Rate</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <div className="text-5xl font-display font-black text-brand-accent mb-2"><AnimatedCounter value="120+" duration={2.5} /></div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Years of Excellence</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div>
              <div className="text-5xl font-display font-black text-brand-accent mb-2"><AnimatedCounter value="50+" duration={2.5} /></div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Teaching Staff</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Campus & Infrastructure</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Modern Facilities, <span className="italic font-light text-brand-secondary">Sustainable</span> Operations.</h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                Mtshabezi has made significant investments in its physical and digital infrastructure, ensuring that students learn in an environment that is safe, modern, and conducive to academic success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructure.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="p-12 border border-gray-100 bg-white hover:border-brand-accent transition-all group h-full shadow-sm">
                  <div className="w-16 h-16 bg-brand-bg text-brand-primary flex items-center justify-center mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
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

      {/* Boarding Life */}
      <section className="py-32 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1491845339675-bc02adfc1e2b?auto=format&fit=crop&q=80&w=600" className="shadow-2xl mt-12 border-4 border-white" />
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&q=80&w=600" className="shadow-2xl border-4 border-white" />
              </div>
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <FadeIn direction="left">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary">Boarding Life</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">A Home <span className="italic serif text-brand-primary font-light">Away</span> from Home.</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mtshabezi provides well-built and carefully maintained boarding facilities for both boys and girls. The dormitories are designed to promote a healthy balance between personal privacy and community living, with all essential amenities in place.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                In this structured and secure setting, students are free to focus on their academic and personal development. Experienced hostel wardens provide daily supervision and mentorship, ensuring the welfare of every boarder.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              <p className="text-xl text-gray-600 leading-relaxed">Our administration, together with the BICC church board, is committed to upholding the standards that have defined Mtshabezi for over a century. Led by experienced educators and guided by Christian principles, every decision is made with the student's future in mind.</p>
              <Link to="/staff" className="inline-flex items-center gap-3 px-12 py-5 border border-brand-primary text-brand-primary font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-white transition-all group">
                Meet the Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Find Us — Google Maps */}
      <section className="py-32 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Location</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Find <span className="italic font-light text-brand-secondary">Us</span></h3>
              <p className="text-lg text-gray-500 leading-relaxed mt-6">
                Mtshabezi Mission, Gwanda District, Matabeleland South Province, Zimbabwe. Approximately 75 km south of Bulawayo along the Mtshabezi River.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="aspect-[16/7] w-full border-8 border-brand-bg shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.95!2d28.8874246!3d-20.7123646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eca884082a286a5%3A0x5c9928323c094abd!2sMtshabezi%20High%20School!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mtshabezi High School location on Google Maps"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
