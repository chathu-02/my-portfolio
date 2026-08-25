import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import { projectDetails } from '../data/projectDetail.js';
import ProjectDetailsModal from '../components/ProjectDetailsModal.jsx';

function ProjectRow({ project, index, onOpen }) {
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

        {project.id === 4 ? (
          <div className="mb-2 flex justify-start">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Custom Client Project ⭐⭐⭐
            </span>
          </div>
        ) : project.id === 1 || project.id === 2 ? (
          <div className="mb-2 flex justify-start">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              University Group Project ⭐⭐
            </span>
          </div>
        ) : project.id === 3 || project.id === 5 || project.id === 6 ? (
          <div className="mb-2 flex justify-start">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Personal Project
            </span>
          </div>
        ) : null}


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
            onClick={() => onOpen(project)}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const closeModal = () => setActiveProject(null);

  const sortedProjects = useMemo(() => projectDetails, []);

  const filters = ['All', 'Next.js', 'MERN', 'PHP', 'Spring Boot', 'Mobile App'];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return sortedProjects;

    return sortedProjects.filter((project) => {
      const techLower = project.tech.map((t) => t.toLowerCase());
      
      switch (selectedFilter) {
        case 'Next.js':
          return techLower.includes('next.js');
        case 'MERN':
          return (
            techLower.includes('react.js') ||
            techLower.includes('mongodb') ||
            techLower.includes('express.js') ||
            techLower.includes('node.js')
          );
        case 'PHP':
          return techLower.includes('php');
        case 'Spring Boot':
          return techLower.includes('spring boot');
        case 'Mobile App':
          return (
            project.category?.toLowerCase() === 'mobile app' ||
            techLower.includes('kotlin / java') ||
            techLower.includes('android studio')
          );
        default:
          return true;
      }
    });
  }, [selectedFilter, sortedProjects]);

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
          className="flex items-center gap-4 mb-10"
        >
          <span className="text-cyan-400 font-mono text-sm"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-16 px-2"
        >
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`relative px-4 py-2 text-xs md:text-sm font-mono rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'border-cyan-400 text-cyan-200 bg-cyan-400/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                    : 'border-white/10 bg-white/3 text-gray-400 hover:text-white hover:border-cyan-400/30'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-cyan-400/5 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col items-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              {filteredProjects.map((project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={setActiveProject}
                />
              ))}
              {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500 font-mono text-sm">
                  No projects found matching this filter.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {activeProject ? (
        <ProjectDetailsModal project={activeProject} onClose={closeModal} />
      ) : null}
    </section>
  );
}