import Projects from '../components/Projects'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Projects />
    </motion.div>
  )
}

export default ProjectsPage
