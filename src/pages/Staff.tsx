
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import FadeIn from "../components/layout/FadeIn";
import SEO from "../components/SEO";

interface StaffMember {
  name: string;
  role: string;
  img: string;
}

export default function Staff() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const leadership: StaffMember[] = [
    { name: "Mr. T. Moyo", role: "Headmaster", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. S. Ndlovu", role: "Deputy Headmaster", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  ];

  const administration: StaffMember[] = [
    { name: "Mr. E. Nkala", role: "Bursar", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. R. Mthembu", role: "Accounts Officer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. G. Dlodlo", role: "School Secretary", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  ];

  const departmentHeads: StaffMember[] = [
    { name: "Mr. B. Ncube", role: "Head of Sciences", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. N. Sibanda", role: "Head of Commercials", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. L. Maphosa", role: "Head of Arts & Humanities", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. P. Nkomo", role: "Head of Agriculture", img: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. K. Tshuma", role: "Head of ICT & Innovation", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. D. Mhlanga", role: "Head of Sports & Recreation", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  ];

  const teachingStaff: StaffMember[] = [
    { name: "Mr. S. Nyathi", role: "Mathematics", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. T. Gumede", role: "English Language", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. A. Khumalo", role: "Ndebele", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. F. Dlamini", role: "Biology", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. R. Zulu", role: "Chemistry", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. C. Mahlangu", role: "Combined Science", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. J. Bhebhe", role: "Agriculture", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. W. Siziba", role: "Food & Nutrition", img: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. H. Ngulube", role: "Accounts", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. E. Tshili", role: "Fashion & Fabrics", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. P. Gwebu", role: "Building Studies", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. N. Maseko", role: "Technical Drawing", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. V. Nyoni", role: "Metal Works", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. L. Khoza", role: "Mathematics", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. G. Mpofu", role: "English Language", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. D. Phiri", role: "Biology", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. O. Sibindi", role: "Chemistry", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. A. Luphahla", role: "Ndebele", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. I. Dzviti", role: "Agriculture", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. M. Jubane", role: "Food & Nutrition", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. T. Mlilo", role: "Combined Science", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. B. Nleya", role: "Accounts", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. F. Tshabangu", role: "Technical Drawing", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. K. Mzileni", role: "Fashion & Fabrics", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. Q. Hadebe", role: "Metal Works", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. J. Mangena", role: "Mathematics", img: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. C. Siwela", role: "English Language", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. H. Banda", role: "Biology", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. U. Ndiweni", role: "Building Studies", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. Z. Thabede", role: "Combined Science", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  ];

  const wardens: StaffMember[] = [
    { name: "Mr. S. Mguni", role: "Boys Hostel — Senior", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. T. Ncube", role: "Girls Hostel — Senior", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { name: "Mr. A. Fuzane", role: "Boys Hostel — Junior", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Mrs. N. Moyo", role: "Girls Hostel — Junior", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  ];

  const prefects = [
    { name: "Thandiwe Khumalo", role: "Head Girl" },
    { name: "Blessing Sithole", role: "Head Boy" },
    { name: "Nompilo Ngwenya", role: "Deputy Head Girl" },
    { name: "Tatenda Masuku", role: "Deputy Head Boy" },
    { name: "Siphesihle Dube", role: "Prefect" },
    { name: "Lungelo Mpofu", role: "Prefect" },
    { name: "Amahle Ndlovu", role: "Prefect" },
    { name: "Thabani Ncube", role: "Prefect" },
    { name: "Nokuthula Sibanda", role: "Prefect" },
    { name: "Simbarashe Moyo", role: "Prefect" },
    { name: "Zanele Nkomo", role: "Prefect" },
    { name: "Lwazi Bhebhe", role: "Prefect" },
    { name: "Ntombizodwa Mlilo", role: "Prefect" },
    { name: "Mpilo Tshuma", role: "Prefect" },
    { name: "Sikhanyiso Gumede", role: "Prefect" },
    { name: "Lindiwe Masuku", role: "Prefect" },
  ];

  const renderStaffGrid = (members: StaffMember[], columns: string = "lg:grid-cols-3") => (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
      {members.map((member, idx) => (
        <FadeIn key={member.name + idx} delay={Math.min(idx * 0.05, 0.4)}>
          <div className="group cursor-default bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img src={member.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h4 className="font-display font-bold text-base mb-1">{member.name}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{member.role}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );

  return (
    <div className="bg-brand-bg overflow-hidden">
      <SEO title="Meet the Staff — Mtshabezi High School" description="Leadership and teaching staff at Mtshabezi High School. Experienced educators committed to academic excellence in Gwanda, Zimbabwe." />
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center bg-brand-primary text-white overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto text-center px-4 z-10 w-full">
          <motion.div style={{ opacity: heroOpacity }}>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black tracking-tighter mb-6 text-white">
                Meet the <span className="italic font-light text-brand-accent">Team</span>
              </h1>
              <div className="h-1.5 bg-brand-accent mx-auto mb-8 w-24" />
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed">
                The dedicated educators and staff who make Mtshabezi a place of excellence.
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* School Leadership */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">School Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Guiding the <span className="italic font-light text-brand-secondary">Vision.</span></h3>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          {renderStaffGrid(leadership, "lg:grid-cols-2")}
        </div>
      </section>

      {/* Administration */}
      <section className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Administration</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold">The Backbone of <span className="italic font-light text-brand-secondary">Operations.</span></h3>
            </div>
          </FadeIn>
          {renderStaffGrid(administration)}
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Department Heads</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Leading Academic <span className="italic font-light text-brand-secondary">Departments.</span></h3>
            </div>
          </FadeIn>
          {renderStaffGrid(departmentHeads)}
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Teaching Staff</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Shaping <span className="italic font-light text-brand-secondary">Minds</span> Every Day.</h3>
            </div>
          </FadeIn>
          {renderStaffGrid(teachingStaff, "lg:grid-cols-5")}
        </div>
      </section>

      {/* Wardens */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Hostel Wardens</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Guardians of <span className="italic font-light text-brand-secondary">Boarding Life.</span></h3>
            </div>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            {renderStaffGrid(wardens, "lg:grid-cols-4")}
          </div>
        </div>
      </section>

      {/* Prefects Board */}
      <section className="py-24 px-4 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-accent mb-4">Student Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">The Prefects <span className="italic font-light text-brand-accent">Board.</span></h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {prefects.map((prefect, idx) => (
              <FadeIn key={prefect.name} delay={Math.min(idx * 0.05, 0.5)}>
                <div className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-brand-accent text-brand-primary mx-auto mb-4 flex items-center justify-center font-display font-black text-xl">
                    {prefect.name.charAt(0)}
                  </div>
                  <h4 className="font-display font-bold text-sm mb-1 text-white">{prefect.name}</h4>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">{prefect.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
