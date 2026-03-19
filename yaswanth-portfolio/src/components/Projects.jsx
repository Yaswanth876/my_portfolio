import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { useTheme } from '../context/ThemeContext'
import { Button } from './ui/button'

const FILTERS = ['All', 'AI/ML', 'Full Stack']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="px-6 pt-10 pb-24 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          My Work
        </p>
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          A selection of projects that highlight my full-stack and AI/ML
          engineering skills.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex gap-3 mb-10"
      >
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant="outline"
            className={`rounded-full text-sm font-medium border transition hover:-translate-y-0.5 active:scale-95
              ${activeFilter === filter
                ? 'bg-sky-500 border-sky-500 text-white'
                : isDark
                  ? 'border-gray-700 text-gray-400 hover:border-sky-500/50 hover:text-white'
                  : 'border-gray-300 text-gray-500 hover:border-sky-400 hover:text-sky-600 bg-white'
              }`}
          >
            {filter}
          </Button>
        ))}
      </motion.div>

      {/* Cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Projects

