import About from '../components/About'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <About />
    </motion.div>
  )
}

export default AboutPage
