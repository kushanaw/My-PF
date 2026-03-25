import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Solstice E-commerce',
      description: 'A premium, high-performance e-commerce dashboard built with React and Tailwind. Features real-time inventory and modern transitions.',
      tags: ['React', 'Next.js', 'PostgreSQL'],
      link: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop',
      color: '#3b82f6'
    },
    {
      title: 'Zenith UI Kit',
      description: 'A comprehensive, glass-morphism UI library designed for clean and modern web applications with accessibility at its core.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      color: '#a855f7'
    },
    {
      title: 'Aura Fitness App',
      description: 'An AI-powered fitness tracking application that uses real-time movement analysis to guide users through their training sessions.',
      tags: ['Node.js', 'TensorFlow', 'React Native'],
      link: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      color: '#10b981'
    },
    {
      title: 'Horizon Analytics',
      description: 'A high-level dashboard for data visualization, designed to handle massive datasets with ease and clarity using D3.js.',
      tags: ['D3.js', 'React', 'Firebase'],
      link: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="projects" className="section-container relative bg-slate-950/20 py-20">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-blue-500" />
          My Portfolio
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Featured <span className="gradient-text">Creations.</span></h3>
        <p className="max-w-2xl text-slate-400 font-light text-lg">
          I build high-performance web applications that merge elegant design with powerful functionality. Here are some of my favorite projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass-morphism border border-white/5 hover:border-white/20 transition-all hover:bg-white/10"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
               <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="p-2 rounded-xl glass-morphism text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-[-10px] group-hover:translate-y-0"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="p-2 rounded-xl glass-morphism text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-[-10px] group-hover:translate-y-0 delay-75"
                  >
                    <ExternalLink size={18} />
                  </a>
               </div>
            </div>

            {/* Project Content */}
            <div className="p-8 space-y-4">
               {/* Tags */}
               <div className="flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-slate-900/50 text-slate-400 rounded-full border border-white/5">
                     {tag}
                   </span>
                 ))}
               </div>

               <div className="flex justify-between items-start">
                  <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="text-slate-600 group-hover:text-white group-hover:rotate-45 transition-all w-6 h-6" />
               </div>

               <p className="text-slate-400 font-light leading-relaxed">
                 {project.description}
               </p>

               <div className="pt-4 flex items-center justify-between">
                  <div className="h-[2px] w-12 rounded-full transition-all group-hover:w-full duration-500" style={{ backgroundColor: project.color }} />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
         <motion.a 
            href="https://github.com" 
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl glass-morphism text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all font-semibold shadow-lg"
          >
            <Github size={20} />
            Explore More on GitHub
         </motion.a>
      </div>
    </section>
  );
};

export default Projects;
