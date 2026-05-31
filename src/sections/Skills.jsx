import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData'; 
import { FaCode, FaServer, FaDatabase, FaTools, FaLightbulb, FaLaptopCode } from 'react-icons/fa';


const getIcon = (category) => {
  switch (category) {
    case "Languages": return <FaCode />;
    case "Frontend": return <FaLaptopCode />;
    case "Backend": return <FaServer />;
    case "Databases": return <FaDatabase />;
    case "Testing & Tools": return <FaTools />;
    case "Concepts": return <FaLightbulb />;
    default: return <FaCode />;
  }
};

const Skills = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  }

  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  return (
    <section id="skills" className="py-20 px-6 bg-black text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Technical Arsenal
          </h2>
          <p className="text-gray-300">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 text-gray-200 p-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600/10 text-blue-400 rounded-lg text-2xl group-hover:scale-110 transition-transform">
                  {getIcon(item.category)}
                </div>
                <h3 className="ml-4 text-xl font-bold text-white font-display">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;