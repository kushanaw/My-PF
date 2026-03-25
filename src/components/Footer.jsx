import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-blue-500/10">
                K
             </div>
             <div>
                <h4 className="text-xl font-bold text-white tracking-tight">Kushana.</h4>
                <p className="text-sm text-slate-500 font-medium">Software Engineer</p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-400"
          >
             {['About', 'Projects', 'Contact', 'Privacy'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors uppercase tracking-widest">{item}</a>
             ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
             {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl glass-morphism border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                >
                   <Icon size={18} />
                </a>
             ))}
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
           <p className="text-slate-500 text-sm font-medium">
              &copy; {currentYear} Kushana. Designed & Built with 
              <Heart size={14} className="inline-block mx-2 text-rose-500 fill-rose-500" />
              and Passion.
           </p>

           <button 
             onClick={scrollToTop}
             className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
           >
              Back to top
              <div className="w-8 h-8 rounded-lg glass-morphism border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                 <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </div>
           </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-t from-blue-600/5 to-transparent blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
