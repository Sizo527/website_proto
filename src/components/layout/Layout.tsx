
import { ReactNode, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LayoutProps {
  children: ReactNode;
}

interface NavLink {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      setShowScrollTop(currentY > 300);

      // Hide nav when scrolling down, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu and dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      children: [
        { name: "Our Story", href: "/about" },
        { name: "Meet the Staff", href: "/staff" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      children: [
        { name: "Programs & Curriculum", href: "/academics" },
        { name: "Agri-Hub", href: "/agri-hub" },
      ],
    },
    {
      name: "Student Life",
      href: "/student-life",
      children: [
        { name: "Activities & Sports", href: "/student-life" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Alumni", href: "/alumni" },
  ];

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isLinkActive = (link: NavLink): boolean => {
    if (location.pathname === link.href) return true;
    if (link.children) {
      return link.children.some((child) => location.pathname === child.href);
    }
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-brand-accent" /> +263 782 792 457</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-brand-accent" /> mtshabezihighschool@gmail.com</span>
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
        className={`sticky top-0 transition-all duration-300 ${
          isMenuOpen ? "z-[70] bg-brand-primary" : "z-50 bg-white"
        } ${
          isScrolled ? "shadow-md py-3" : "py-5"
        } ${
          navHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 flex items-center justify-center font-display font-bold text-xl group-hover:scale-105 transition-all ${isMenuOpen ? 'bg-white text-brand-primary' : 'bg-brand-primary text-white'}`}>
              M
            </div>
            <div>
              <h1 className={`text-lg md:text-xl font-display font-bold leading-none transition-colors ${isMenuOpen ? 'text-white' : 'text-brand-primary'}`}>MTSHABEZI</h1>
              <p className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${isMenuOpen ? 'text-brand-accent' : 'text-brand-secondary'}`}>High School</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-7 items-center">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && handleDropdownEnter(link.name)}
                onMouseLeave={() => link.children && handleDropdownLeave()}
              >
                {link.children ? (
                  <>
                    <button
                      className={`text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors relative group flex items-center gap-1.5 ${
                        isLinkActive(link) ? "text-brand-secondary" : "text-brand-primary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`}
                      />
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                        isLinkActive(link) ? "scale-x-100" : ""
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 bg-white shadow-xl border border-gray-100 min-w-[220px] z-50"
                        >
                          <div className="py-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className={`block px-6 py-3 text-sm font-medium tracking-wide hover:bg-brand-bg hover:text-brand-secondary transition-colors ${
                                  location.pathname === child.href
                                    ? "text-brand-secondary bg-brand-bg"
                                    : "text-brand-primary"
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors relative group ${
                      isLinkActive(link) ? "text-brand-secondary" : "text-brand-primary"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                      isLinkActive(link) ? "scale-x-100" : ""
                    }`} />
                  </Link>
                )}
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
            className={`lg:hidden p-2 focus:outline-none transition-colors ${isMenuOpen ? 'text-white' : 'text-brand-primary'}`}
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
            className="fixed inset-0 z-[60] bg-brand-primary text-white pt-24 px-8 lg:hidden overflow-y-auto"
          >
            <ul className="flex flex-col gap-6 text-2xl font-display font-light pb-12">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  {link.children ? (
                    <div className="space-y-4">
                      <Link 
                        to={link.href}
                        className={`hover:text-brand-accent transition-colors block ${
                          isLinkActive(link) ? "text-brand-accent font-medium text-3xl" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="pl-6 space-y-3 border-l border-white/10">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block text-lg font-sans font-normal hover:text-brand-accent transition-colors ${
                              location.pathname === child.href ? "text-brand-accent" : "text-white/60"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`hover:text-brand-accent transition-colors ${
                        location.pathname === link.href ? "text-brand-accent font-medium text-3xl" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
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

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-primary text-white shadow-2xl flex items-center justify-center hover:bg-brand-secondary transition-all hover:shadow-xl active:scale-90 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={22} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

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
            <p className="text-white/60 text-base leading-relaxed">
              A Brethren in Christ Church institution committed to shaping future leaders through academic excellence, faith, and innovation since 1904.
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
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/student-life" className="hover:text-white transition-colors">Student Life</Link></li>
              <li><Link to="/staff" className="hover:text-white transition-colors">Meet the Staff</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/agri-hub" className="hover:text-white transition-colors">Agri-Hub</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni Network</Link></li>
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
                <span>+263 782 792 457<br />078 387 1057</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <span>mtshabezihighschool@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-accent">Newsletter</h3>
            <p className="text-base text-white/70">Receive updates on events, results, and school news.</p>
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
