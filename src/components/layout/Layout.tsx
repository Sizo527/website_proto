
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Agri-Hub", href: "/agri-hub" },
    { name: "Student Life", href: "/student-life" },
    { name: "Admissions", href: "/admissions" },
    { name: "Alumni", href: "/alumni" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-brand-accent" /> +263 284 22312</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-brand-accent" /> info@mtshabezi.ac.zw</span>
          </div>
          <div className="flex gap-4">
            <Link to="/portal" className="hover:text-brand-accent transition-colors">Portal Login</Link>
            <span className="opacity-30">|</span>
            <div className="flex gap-3">
              <Facebook size={14} className="hover:text-brand-accent cursor-pointer" />
              <Twitter size={14} className="hover:text-brand-accent cursor-pointer" />
              <Instagram size={14} className="hover:text-brand-accent cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-white font-display font-bold text-xl group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-display font-bold leading-none text-brand-primary">MTSHABEZI</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-medium">High School</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors relative group ${
                    location.pathname === link.href ? "text-brand-secondary" : "text-brand-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    location.pathname === link.href ? "scale-x-100" : ""
                  }`} />
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/portal" 
                className="bg-brand-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all hover:shadow-xl active:scale-95"
              >
                Portal
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-primary p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-primary text-white pt-24 px-8 md:hidden"
          >
            <ul className="flex flex-col gap-8 text-2xl font-display font-light">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link 
                    to={link.href} 
                    className={`hover:text-brand-accent transition-colors ${
                      location.pathname === link.href ? "text-brand-accent font-medium text-3xl" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link to="/portal" className="text-xl text-brand-accent">Portal Login</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-white pt-24 pb-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-white flex items-center justify-center text-brand-primary font-display font-black text-2xl shadow-xl shadow-black/20">
                M
              </div>
              <div>
                <h2 className="text-xl font-display font-bold leading-none uppercase tracking-tight">MTSHABEZI</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold">High School</p>
              </div>
            </div>
            <p className="text-white/60 text-base leading-relaxed serif italic">
              "Striving for Quality in Education since 1904. Nurturing diligent leaders through excellence and faith."
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-secondary transition-all cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-secondary transition-all cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-secondary transition-all cursor-pointer">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About our Heritage</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Enrolment & eMAP</Link></li>
              <li><Link to="/agri-hub" className="hover:text-white transition-colors">Agri-Hub Products</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-colors">Bezha Global Network</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">Contact Us</h3>
            <ul className="space-y-6 text-sm text-white/70">
              <li className="flex gap-4">
                <MapPin className="text-brand-accent shrink-0" size={20} />
                <span>P.O. Bag 5801, Gwanda,<br />Matabeleland South, Zimbabwe</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-accent shrink-0" size={20} />
                <span>+263 284 22312<br />+263 772 123 456</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <span>info@mtshabezi.ac.zw<br />admin@mtshabezi.ac.zw</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-accent">Newsletter</h3>
            <p className="text-base text-white/70 italic serif">Receive updates on events, results, and school news.</p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors w-full"
              />
              <button className="bg-brand-accent text-brand-primary py-4 px-8 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-black/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/40">
          <p>© 2026 Mtshabezi High School. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
