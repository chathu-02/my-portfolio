import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard.jsx'
import { projectDetails } from '../data/projectDetail.js'

export default function Projects() {
  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">Projects</h2>
        <p className="text-center text-gray-400 mb-10">Selected works and case studies — click a card to view images or details.</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projectDetails.map((p) => (
            <motion.div key={p.id} variants={item}>
              <ProjectCard
                title={p.title}
                description={p.description}
                tech={p.tech}
                category={p.category}
                github={p.github}
                live={p.live}
                images={p.images}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
