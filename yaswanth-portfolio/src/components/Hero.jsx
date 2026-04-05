import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, ArrowDown, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const roles = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'React Developer',
  'Python Developer',
]

// Container stagger
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

// Each child fades up with custom ease
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const timer = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Animated background glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="animate-float-slow animate-pulse-glow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/12 rounded-full blur-3xl" />
        <div className="animate-float-medium absolute top-1/2 left-[15%] w-[350px] h-[350px] bg-violet-600/8 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
        <div className="animate-float-fast absolute top-1/4 right-[15%] w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-3xl" style={{ animationDelay: '0.8s' }} />
        <div className="animate-float-medium absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-cyan-600/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="animate-float-slow absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-sky-500/5 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className={`flex items-center gap-2.5 text-sm font-medium tracking-widest uppercase mb-6 border px-4 py-1.5 rounded-full ${
            isDark ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' : 'text-sky-600 border-sky-500/30 bg-sky-50'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Open to Work
        </motion.div>

        {/* Heading with shimmer */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl font-bold leading-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Hi, I'm{' '}
          <span className="text-shimmer">Yaswanth</span>
        </motion.h1>

        {/* Rotating role title */}
        <motion.div
          variants={itemVariants}
          className="h-9 md:h-10 overflow-hidden mb-6 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className={`text-xl md:text-2xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <span className={`font-semibold ${isDark ? 'text-indigo-500' : 'text-sky-500'}`}>&lt;</span>
              {roles[roleIdx]}
              <span className={`font-semibold ${isDark ? 'text-indigo-500' : 'text-sky-500'}`}>/&gt;</span>
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-base md:text-lg max-w-2xl leading-relaxed mb-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
        >
          I design and build intelligent software systems and full-stack applications
          that apply machine learning, data, and modern development technologies
          to solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="btn-ripple flex items-center justify-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50"
          >
            View Projects <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`btn-ripple px-8 py-3 border rounded-full font-medium transition-colors ${
              isDark
                ? 'border-gray-700 text-gray-300 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-400'
                : 'border-gray-300 text-gray-600 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600'
            }`}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-16"
        >
          {[
            { href: 'https://github.com/yaswanth876', label: 'GitHub', Icon: Github },
            { href: 'https://linkedin.com/in/yaswanthv876', label: 'LinkedIn', Icon: Linkedin },
          ].map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                isDark
                  ? 'border-gray-700 text-gray-400 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-400'
                  : 'border-gray-300 text-gray-500 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-500'
              }`}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll to about"
        className={`absolute bottom-8 flex flex-col items-center gap-1.5 transition-colors group ${isDark ? 'text-gray-600 hover:text-sky-400' : 'text-gray-400 hover:text-sky-600'}`}
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
