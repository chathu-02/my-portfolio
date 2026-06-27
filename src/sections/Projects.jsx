import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectDetails } from '../data/projectDetail.js';

function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="flex w-full justify-center mb-10"
    >
      <div className="relative w-full sm:w-125 md:w-150 group">


        {/* Hover left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400/0 group-hover:bg-cyan-400/40 transition-all duration-500 rounded-full" />

        <motion.div
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            tech={project.tech}
            category={project.category}
            github={project.github}
            live={project.live}
            images={project.images}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 scroll-mt-24 bg-[#030712] overflow-hidden">

      {/* Subtle glow — no particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-[120px]" />
      </div>

      {/* Subtle vertical line */}
      <div className="absolute left-1/2 top-40 bottom-10 w-px bg-linear-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Label — Brittany Chiang style */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col items-center">
          {projectDetails.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}