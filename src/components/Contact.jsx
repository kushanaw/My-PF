import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container relative bg-[#030712] py-20 overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 glass-morphism rounded-3xl overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl"
      >
        {/* Left Side: Contact Info */}
        <div className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 lg:p-16 text-white overflow-hidden relative group">
           {/* Abstract animation in background */}
           <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
             className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" 
           />

           <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                 <h2 className="text-sm font-bold tracking-widest uppercase text-white/70">
                   Contact Me
                 </h2>
                 <h3 className="text-4xl md:text-5xl font-black leading-tight">
                   Let's build <br />
                   <span className="text-white/80">something </span>
                   <span className="underline decoration-white/20 underline-offset-8">special.</span>
                 </h3>
              </div>

              <div className="space-y-6 pt-10">
                 <div className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="p-3 bg-white/10 rounded-xl group-hover/item:bg-white/20 transition-colors">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/60">Email me</p>
                       <p className="text-lg font-medium">hello@kushana.com</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 group/item cursor-pointer">
                    <div className="p-3 bg-white/10 rounded-xl group-hover/item:bg-white/20 transition-colors">
                       <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/60">Discord</p>
                       <p className="text-lg font-medium">kushana#1234</p>
                    </div>
                 </div>
              </div>

              <div className="pt-10 flex gap-4">
                 {[Github, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all shadow-lg"
                    >
                       <Icon size={24} />
                    </motion.a>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-[1.5] p-12 lg:p-16 bg-slate-950/50 backdrop-blur-3xl">
           <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-blue-500 transition-colors">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border-b border-white/10 focus:border-blue-500 text-white p-3 outline-none transition-all placeholder:text-slate-700 font-medium" 
                    />
                 </div>
                 <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-blue-500 transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border-b border-white/10 focus:border-blue-500 text-white p-3 outline-none transition-all placeholder:text-slate-700 font-medium" 
                    />
                 </div>
              </div>

              <div className="space-y-2 group">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-blue-500 transition-colors">Your Message</label>
                 <textarea 
                   rows="4" 
                   placeholder="How can I help you?" 
                   className="w-full bg-white/5 border-b border-white/10 focus:border-blue-500 text-white p-3 outline-none transition-all placeholder:text-slate-700 font-medium resize-none" 
                 />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:brightness-110 transition-all font-outfit"
              >
                 Send Message
                 <Send className="w-4 h-4 translate-y-[1px]" />
              </motion.button>
              
              <p className="text-center text-slate-500 text-xs font-medium pt-4">
                 I'll get back to you within 24 hours.
              </p>
           </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
