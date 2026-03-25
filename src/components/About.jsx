import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Database, Layout, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: <Layout className="w-5 h-5" />, color: 'from-blue-400 to-indigo-600' },
    { name: 'Node.js', icon: <Terminal className="w-5 h-5" />, color: 'from-green-400 to-emerald-600' },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" />, color: 'from-blue-500 to-cyan-600' },
    { name: 'Tailwind CSS', icon: <Sparkles className="w-5 h-5" />, color: 'from-sky-400 to-blue-500' },
    { name: 'TypeScript', icon: <Cpu className="w-5 h-5" />, color: 'from-blue-600 to-indigo-700' },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Subtle glowing orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row gap-16 items-center"
      >
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase flex items-center gap-2">
              <span className="w-6 h-[1px] bg-blue-500" />
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Passionate developer with a love for <span className="gradient-text">cutting-edge Tech.</span>
            </h3>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-light">
            I specialize in creating pixel-perfect, responsive web applications that combine high performance with stunning design. My journey in tech is fueled by curiosity and a desire to solve complex problems through clean, maintainable code.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 pt-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <div className={`p-2 rounded-xl bg-gradient-to-tr ${skill.color} text-white shadow-lg`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap gap-4 items-center">
             <div className="px-4 py-2 rounded-full glass-morphism text-xs font-medium text-slate-300 flex items-center gap-2 border border-white/10 shadow-lg">
                <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
                Open to Opportunities
             </div>
             <div className="px-4 py-2 rounded-full glass-morphism text-xs font-medium text-slate-300 flex items-center gap-2 border border-white/10 shadow-lg">
                <Layout size={14} className="text-blue-500" />
                Based in California
             </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 relative group w-full max-w-md mx-auto"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
          <div className="relative aspect-square rounded-3xl overflow-hidden glass-morphism border border-white/10 p-2 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
             <img 
               src="https://images.unsplash.com/photo-1549692441-23381015d520?q=80&w=1974&auto=format&fit=crop" 
               alt="Developer" 
               className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
             />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
