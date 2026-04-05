import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { useTheme } from '../context/ThemeContext'
import { Button } from './ui/button'

const FILTERS = ['All', 'AI/ML', 'Full Stack']

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
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Filter tabs with layout animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex gap-3 mb-10"
      >
        <LayoutGroup>
          {FILTERS.map((filter) => (
            <motion.div key={filter} layout className="relative">
              <Button
                onClick={() => setActiveFilter(filter)}
                variant="outline"
                className={`rounded-full text-sm font-medium border transition-colors relative z-10
                  ${activeFilter === filter
                    ? 'bg-sky-500 border-sky-500 text-white hover:bg-sky-600'
                    : isDark
                      ? 'border-gray-700 text-gray-400 hover:border-sky-500/50 hover:text-white bg-transparent'
                      : 'border-gray-300 text-gray-500 hover:border-sky-400 hover:text-sky-600 bg-white'
                  }`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-sky-500 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {filter}
              </Button>
            </motion.div>
          ))}
        </LayoutGroup>
      </motion.div>

      {/* Cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
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
