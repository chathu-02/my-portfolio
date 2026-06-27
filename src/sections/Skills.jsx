import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData'; 
import { FaCode, FaServer, FaDatabase, FaTools, FaLightbulb, FaLaptopCode } from 'react-icons/fa';

const getIcon = (category) => {
  switch (category) {
    case "Languages":      return <FaCode />;
    case "Frontend":       return <FaLaptopCode />;
    case "Backend":        return <FaServer />;
    case "Databases":      return <FaDatabase />;
    case "Testing & Tools":return <FaTools />;
    case "Concepts":       return <FaLightbulb />;
    default:               return <FaCode />;
  }
};

const categoryColors = {
  "Languages":       { accent: "text-blue-400",   border: "hover:border-blue-400/30",   icon: "text-blue-400",   line: "bg-blue-400"   },
  "Frontend":        { accent: "text-cyan-400",    border: "hover:border-cyan-400/30",   icon: "text-cyan-400",   line: "bg-cyan-400"   },
  "Backend":         { accent: "text-green-400",   border: "hover:border-green-400/30",  icon: "text-green-400",  line: "bg-green-400"  },
  "Databases":       { accent: "text-yellow-400",  border: "hover:border-yellow-400/30", icon: "text-yellow-400", line: "bg-yellow-400" },
  "Testing & Tools": { accent: "text-purple-400",  border: "hover:border-purple-400/30", icon: "text-purple-400", line: "bg-purple-400" },
  "Concepts":        { accent: "text-pink-400",    border: "hover:border-pink-400/30",   icon: "text-pink-400",   line: "bg-pink-400"   },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#030712] text-white overflow-hidden">

      {/* Subtle glow — matches other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Label — matches About/Projects/Contact */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Arsenal</h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 text-sm font-mono mb-14"
        >
          A curated collection of my technical skills, categorized for clarity and ease of understanding. Each skill is represented with a badge, showcasing my proficiency and experience in various technologies and tools.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillsData.map((skillItem, index) => {
            const colors = categoryColors[skillItem.category] || categoryColors["Languages"];
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`
                  group relative
                  bg-[#111] border border-white/5 ${colors.border}
                  p-6 rounded-xl
                  transition-all duration-300
                  hover:bg-white/3
                `}
              >
                {/* Accent line — extends on hover like About cards */}
                <div className={`w-6 h-0.5 ${colors.line} mb-5 group-hover:w-14 transition-all duration-300`} />

                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-lg ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(skillItem.category)}
                  </span>
                  <h3 className={`text-sm font-mono font-semibold ${colors.accent}`}>
                    // {skillItem.category.toLowerCase()}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {skillItem.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="
                        bg-white/5 text-gray-400 border border-white/8
                        px-3 py-1 rounded-full text-xs font-mono
                        hover:text-white hover:border-white/20 hover:bg-white/10
                        transition-all duration-200 cursor-default
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;