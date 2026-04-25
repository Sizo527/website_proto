
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Sprout, ShoppingCart, Info, TrendingUp, DollarSign, Wallet } from "lucide-react";
import FadeIn from "../components/layout/FadeIn";

export default function AgriHub() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [currency, setCurrency] = useState<"USD" | "ZiG">("USD");
  const exchangeRate = 25; // Example static exchange rate 1 USD = 25 ZiG

  const products = [
    { 
      id: 1, 
      name: "Farm-Fresh Eggs", 
      desc: "Grade A Large eggs, high in protein and sustainably farmed.", 
      priceUSD: 5.50, 
      unit: "Crate (30 Eggs)", 
      category: "Poultry",
      image: "https://images.unsplash.com/photo-1582722872445-3fe061485663?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 2, 
      name: "Organic Cabbage", 
      desc: "Crispy, pesticide-free cabbages harvested daily from our horticulture garden.", 
      priceUSD: 1.00, 
      unit: "Per Head", 
      category: "Horticulture",
      image: "https://images.unsplash.com/photo-1550142414-057a84657697?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 3, 
      name: "Whole Broiler Chicken", 
      desc: "Cleaned and ready-to-cook broiler chicken. Approx 1.5kg - 2kg.", 
      priceUSD: 6.00, 
      unit: "Per Bird", 
      category: "Poultry",
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 4, 
      name: "Premium Potatoes", 
      desc: "Large Irish potatoes, perfect for mashing or frying. Fresh from the soil.", 
      priceUSD: 12.00, 
      unit: "10kg Bag", 
      category: "Horticulture",
      image: "https://images.unsplash.com/photo-1518977676601-b53f02bad675?auto=format&fit=crop&q=80&w=600"
    },
  ];

  const formatPrice = (priceUSD: number) => {
    if (currency === "USD") {
      return `$${priceUSD.toFixed(2)}`;
    } else {
      return `ZiG ${(priceUSD * exchangeRate).toFixed(2)}`;
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Header Section with Parallax */}
      <section ref={heroRef} className="bg-brand-primary text-white h-[70vh] flex items-center px-4 overflow-hidden relative">
        <motion.div 
          style={{ y: heroY }}
          className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none"
        >
          <TrendingUp size={400} className="text-white" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 w-full">
          <motion.div style={{ opacity: heroOpacity }} className="max-w-2xl">
            <FadeIn>
              <div className="flex items-center gap-3 text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 px-4 py-2 border border-brand-accent/20 bg-white/5 backdrop-blur-sm w-fit">
                <Sprout size={20} />
                Agri-Hub Enterprise
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black leading-none mb-8 tracking-tighter">
                Fresh From <br /> <span className="italic font-light text-brand-accent">Our Soil.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-lg mb-10 leading-relaxed">
                Supporting student-run innovation and vocational excellence through high-quality poultry and horticulture products.
              </p>
              <div className="flex items-center gap-4 p-2 bg-white/5 border border-white/10 w-fit">
                <button 
                  onClick={() => setCurrency("USD")}
                  className={`flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                    currency === "USD" ? "bg-white text-brand-primary shadow-lg" : "text-white hover:bg-white/5"
                  }`}
                >
                  <DollarSign size={14} /> USD
                </button>
                <button 
                  onClick={() => setCurrency("ZiG")}
                  className={`flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                    currency === "ZiG" ? "bg-brand-accent text-brand-primary shadow-lg" : "text-white hover:bg-white/5"
                  }`}
                >
                  <Wallet size={14} /> ZiG
                </button>
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30 font-bold px-2">Current Rate: 1 USD = 25 ZiG (Static Rate)</p>
            </FadeIn>
          </motion.div>
          
          <div className="hidden lg:block w-96">
            <FadeIn direction="left" delay={0.4}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
                 <h4 className="font-display font-bold text-2xl mb-4 text-brand-accent uppercase tracking-tighter">Industrialization</h4>
                 <p className="text-white/60 text-base leading-relaxed mb-10">
                   Part of Zimbabwe's Education 5.0, the Agri-Hub empowers students with practical skills while supplying the Gwanda and Bulawayo regions.
                 </p>
                 <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 text-sm text-brand-accent font-bold uppercase tracking-widest">
                      <Info size={18} />
                      Contact Orders
                    </div>
                    <p className="text-xl font-bold tracking-tight">+263 772 123 456</p>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-4">Availability</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Featured <span className="italic font-light text-brand-primary">Produce</span></h3>
            </div>
            <div className="flex gap-2">
              <span className="px-6 py-3 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest">All Products</span>
              <span className="px-6 py-3 bg-gray-100 hover:bg-brand-bg text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-colors cursor-pointer">Poultry</span>
              <span className="px-6 py-3 bg-gray-100 hover:bg-brand-bg text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-colors cursor-pointer">Horticulture</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 0.1}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden mb-8 bg-gray-100 shadow-sm border border-gray-100">
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={product.name}
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary border border-white/20">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-brand-secondary transition-all">{product.name}</h4>
                  <p className="text-base text-gray-500 leading-relaxed line-clamp-2">{product.desc}</p>
                  <div className="flex justify-between items-center py-6 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-black text-brand-primary">{formatPrice(product.priceUSD)}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold mt-1">{product.unit}</span>
                    </div>
                    <button className="h-14 w-14 bg-brand-primary text-white flex items-center justify-center hover:bg-brand-secondary hover:shadow-xl transition-all">
                      <ShoppingCart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Order Inquiry Section */}
      <section id="order-form" className="py-32 bg-brand-bg px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 shadow-2xl border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
           <div className="relative z-10 w-full">
              <FadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary mb-6">Bulk Orders</h2>
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 italic serif">Order Inquiry for Gwanda & Bulawayo</h3>
                  <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">Please fill in your details and required quantities. A member of the Mtshabezi Agri-Hub team will contact you to confirm pricing and delivery.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 px-2 block">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-brand-bg border-none p-5 focus:ring-2 focus:ring-brand-accent transition-all text-sm font-bold uppercase tracking-widest" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 px-2 block">Contact Number</label>
                    <input type="text" placeholder="+263 ..." className="w-full bg-brand-bg border-none p-5 focus:ring-2 focus:ring-brand-accent transition-all text-sm font-bold uppercase tracking-widest" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 px-2 block">Delivery Location</label>
                    <select className="w-full bg-brand-bg border-none p-5 focus:ring-2 focus:ring-brand-accent transition-all text-xs font-bold uppercase tracking-[0.2em] appearance-none cursor-pointer">
                      <option>Gwanda Town</option>
                      <option>Bulawayo (City Centre)</option>
                      <option>Bulawayo (Suburbs)</option>
                      <option>School Pickup</option>
                    </select>
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 px-2 block">Message / Requirements</label>
                    <textarea rows={5} placeholder="I would like to order 10 crates of eggs and 2 bags of potatoes..." className="w-full bg-brand-bg border-none p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm leading-relaxed" />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button className="w-full bg-brand-primary text-white py-6 font-bold uppercase tracking-[0.4em] text-sm hover:bg-brand-secondary transition-all shadow-xl active:scale-[0.98] border-none">
                      Send Order Inquiry
                    </button>
                  </div>
                </form>
              </FadeIn>
           </div>
        </div>
      </section>
    </div>
  );
}
