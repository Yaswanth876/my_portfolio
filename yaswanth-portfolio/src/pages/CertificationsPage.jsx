import Certifications from '../components/Certifications'
import { motion } from 'framer-motion'

const CertificationsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Certifications />
    </motion.div>
  )
}

export default CertificationsPage
