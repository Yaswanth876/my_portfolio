import Experience from '../components/Experience'
import { motion } from 'framer-motion'

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Experience />
    </motion.div>
  )
}

export default ExperiencePage
