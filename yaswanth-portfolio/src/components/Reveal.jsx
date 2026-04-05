import { motion } from 'framer-motion'

/**
 * A reusable wrapper that fades + slides up on scroll into view.
 * Props:
 *   delay  – stagger delay (seconds, default 0)
 *   y      – initial y offset (default 24)
 *   once   – animate once only (default true)
 *   className – extra classes
 */
const Reveal = ({ children, delay = 0, y = 24, once = true, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: '-60px' }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

export default Reveal
