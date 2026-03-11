import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const featured = projects.slice(0, 3)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const HomeFeaturedProjects = () => {
  return (
    <section className="px-6 pt-10 pb-24 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
          What I've Built
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-xl">
          A selection of projects I'm proud of — spanning full-stack development,
          AI/ML applications, and more.
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featured.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* View all projects link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <Link
          to="/projects"
          className="px-6 py-2.5 rounded-xl border border-indigo-500/50 text-indigo-300
                     hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 text-sm font-medium"
        >
          View All Projects →
        </Link>
      </motion.div>

    </section>
  )
}

export default HomeFeaturedProjects
