
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, User, Eye, EyeOff, LayoutDashboard, FileText, PieChart, Settings, LogOut, Bell, Search, GraduationCap, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
     return (
       <div className="min-h-[80vh] flex items-center justify-center p-4 bg-brand-bg relative overflow-hidden">
          <SEO title="Student Portal — Mtshabezi High School" description="Access student results, fee statements, and school notices. Mtshabezi High School parent and student portal." />
          {/* Abstract Backdrops */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-brand-secondary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md bg-white shadow-3xl p-10 md:p-14 relative z-10 border border-gray-100"
          >
             <div className="text-center mb-10">
                <div className="w-16 h-16 bg-brand-primary flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
                   <Lock size={32} />
                </div>
                <h1 className="text-3xl font-display font-black tracking-tighter mb-2">Secure Portal</h1>
                <p className="text-sm text-gray-400">Welcome back. Please authenticate to continue.</p>
             </div>

             <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">Student/Parent ID</label>
                   <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type="text" 
                        placeholder="MTS-2024-001" 
                        required
                        className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-sm font-medium"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <div className="flex justify-between items-center px-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Password</label>
                      <button type="button" className="text-[10px] uppercase tracking-widest text-brand-secondary font-bold">Forgot?</button>
                   </div>
                   <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        required
                        className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-12 focus:ring-2 focus:ring-brand-primary transition-all text-sm font-medium"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-primary transition-colors"
                      >
                         {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                   </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-2">
                   <input type="checkbox" className="border-gray-200 text-brand-primary focus:ring-brand-primary" id="remember" />
                   <label htmlFor="remember" className="text-xs text-gray-500 font-medium cursor-pointer">Keep me logged in</label>
                </div>

                <button className="w-full bg-brand-primary text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-secondary transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                   Authenticate <ArrowRight size={16} />
                </button>
             </form>

             <div className="mt-12 text-center">
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Encountering Issues?</p>
                <p className="text-xs text-brand-secondary font-bold mt-2 cursor-pointer hover:underline underline-offset-4">Contact System Administrator</p>
             </div>
          </motion.div>
       </div>
     )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
       {/* Sidebar */}
       <aside className="w-full lg:w-72 bg-brand-primary text-white p-8 flex flex-col shrink-0 border-r border-white/10">
          <div className="flex items-center gap-4 mb-20 px-4">
             <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-primary font-display font-black text-2xl shadow-lg shadow-black/20">M</div>
             <div>
                <h2 className="text-xl font-display font-bold leading-none tracking-tight">PORTAL</h2>
                <p className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">Academic Dashboard</p>
             </div>
          </div>

          <nav className="flex-grow space-y-3">
             {[
               { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
               { id: "results", name: "Term Results", icon: GraduationCap },
               { id: "fees", name: "Fee Statements", icon: FileText },
               { id: "analytics", name: "Performance", icon: PieChart },
               { id: "settings", name: "Account Settings", icon: Settings },
             ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === item.id ? "bg-white text-brand-primary shadow-xl" : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                   <item.icon size={18} />
                   {item.name}
                </button>
             ))}
          </nav>

          <button 
             onClick={() => setIsLoggedIn(false)}
             className="flex items-center gap-4 px-6 py-5 text-xs font-bold uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all mt-auto border-t border-white/5"
          >
             <LogOut size={18} />
             Logout
          </button>
       </aside>

       {/* Sub-header / Main Content */}
       <main className="flex-grow flex flex-col h-screen overflow-hidden">
          <header className="h-24 bg-white border-b border-gray-100 flex items-center justify-between px-8 md:px-12 shrink-0">
             <div className="hidden md:flex relative group">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary" />
                <input type="text" placeholder="Search records..." className="bg-gray-50 border border-gray-100 py-3 pl-12 pr-4 text-sm w-64 focus:ring-1 focus:ring-brand-primary transition-all" />
             </div>
             <div className="flex items-center gap-8">
                <div className="relative cursor-pointer">
                   <Bell size={20} className="text-gray-400 hover:text-brand-primary transition-colors" />
                   <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold flex items-center justify-center border-2 border-white">2</span>
                </div>
                <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
                   <div className="text-right hidden sm:block">
                      <h4 className="text-sm font-bold text-gray-900 leading-none">Moyo, Sipho J.</h4>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">Class of 2026</p>
                   </div>
                   <div className="w-12 h-12 bg-brand-accent/20 border border-brand-accent/10 p-1">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
          </header>

          <div className="p-8 md:p-12 overflow-y-auto w-full">
             <AnimatePresence mode="wait">
                <motion.div 
                   key={activeTab}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="space-y-10"
                >
                   {activeTab === "dashboard" && (
                    <>
                      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                          <h2 className="text-3xl font-display font-black tracking-tight text-brand-primary">Dashboard Overview</h2>
                          <p className="text-sm text-gray-400">Welcome back, Sipho. Here is your current academic status.</p>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white border border-gray-100 p-2 text-gray-400 shadow-sm">Term 2, 2026</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="p-8 bg-white border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-primary/5">
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-6">Attendance</h4>
                            <div className="flex items-end justify-between">
                               <div className="text-4xl font-display font-black text-brand-primary">98.2<span className="text-lg">%</span></div>
                               <div className="text-[10px] font-bold text-green-500 py-1 px-3 bg-green-50 font-mono uppercase tracking-widest">+1.5%</div>
                            </div>
                         </div>
                          <div className="p-8 bg-white border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-primary/5">
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-6">Current GPA</h4>
                            <div className="flex items-end justify-between">
                               <div className="text-4xl font-display font-black text-brand-primary">14.5<span className="text-lg">/15</span></div>
                               <div className="text-[10px] font-bold text-brand-accent py-1 px-3 bg-brand-accent/10 font-mono uppercase tracking-widest">RANK: 03</div>
                            </div>
                         </div>
                          <div className="p-8 bg-brand-primary text-white shadow-2xl shadow-brand-primary/20">
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-6">Fees Status</h4>
                            <div className="flex items-end justify-between">
                               <div className="text-4xl font-display font-black text-white">PAID</div>
                               <FileText className="text-white/20" size={32} />
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                         <div className="bg-white p-10 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-8">
                               <h4 className="text-sm font-bold uppercase tracking-widest leading-none">Recent Assessments</h4>
                               <button className="text-[10px] uppercase font-bold text-brand-secondary">View All</button>
                            </div>
                            <div className="space-y-6">
                               {[
                                 { name: "Organic Chemistry Quiz", date: "Oct 12", score: "88%" },
                                 { name: "English Literature Essay", date: "Oct 10", score: "92%" },
                                 { name: "Pure Maths Midterm", date: "Oct 04", score: "96%" },
                               ].map(quiz => (
                                 <div key={quiz.name} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0 italic serif">
                                    <div className="flex gap-4 items-center">
                                       <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-brand-primary border border-gray-100">
                                          <FileText size={18} />
                                       </div>
                                       <div>
                                          <div className="text-sm font-bold text-gray-900 not-italic uppercase tracking-tight">{quiz.name}</div>
                                          <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{quiz.date}</div>
                                       </div>
                                    </div>
                                    <div className="font-display font-black text-brand-primary text-xl tracking-tighter">{quiz.score}</div>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="bg-white p-10 shadow-sm border border-gray-100">
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 leading-none">Upcoming Events</h4>
                            <div className="space-y-4">
                               <div className="p-6 bg-brand-bg border border-gray-100 border-l-4 border-brand-accent">
                                  <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest mb-1 italic serif">Tomorrow, 08:00 AM</div>
                                  <div className="font-display font-bold text-brand-primary uppercase tracking-tight">Prize Giving Day Rehearsal</div>
                               </div>
                               <div className="p-6 bg-brand-bg border border-gray-100 border-l-4 border-brand-primary">
                                  <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest mb-1 italic serif">Friday, Oct 24</div>
                                  <div className="font-display font-bold text-brand-primary uppercase tracking-tight">NATIONAL PRIZE GIVING DAY 2026</div>
                               </div>
                            </div>
                         </div>
                      </div>
                    </>
                   )}

                   {activeTab !== "dashboard" && (
                    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-20 bg-white border border-gray-100 border-dashed">
                       <h3 className="text-4xl font-display font-bold opacity-10 mb-4">{activeTab.toUpperCase()} MODULE</h3>
                       <p className="text-gray-300">Educational module restricted in preview mode. Please contact administrator for full access.</p>
                    </div>
                   )}
                </motion.div>
             </AnimatePresence>
          </div>
       </main>
    </div>
  );
}
