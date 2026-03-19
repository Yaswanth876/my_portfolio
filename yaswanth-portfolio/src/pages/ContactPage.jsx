import Contact from '../components/Contact'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Contact />
    </motion.div>
  )
}

export default ContactPage
