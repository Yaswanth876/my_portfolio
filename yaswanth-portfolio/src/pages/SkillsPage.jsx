import Skills from '../components/Skills'
import { motion } from 'framer-motion'

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Skills />
    </motion.div>
  )
}

export default SkillsPage
