import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, ArrowDown, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const roles = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'React Developer',
  'Python Developer',
]

// Reusable animation variants
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  },
})

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
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-6 relative"
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-[15%] w-[350px] h-[350px] bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-[15%] w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      {/* Badge */}
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate="visible"
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

      {/* Heading */}
      <motion.h1
        variants={fadeUp(0.15)}
        initial="hidden"
        animate="visible"
        className={`text-5xl md:text-7xl font-bold leading-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
          Yaswanth
        </span>
      </motion.h1>

      {/* Rotating role title */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="visible"
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
        variants={fadeUp(0.45)}
        initial="hidden"
        animate="visible"
        className={`text-base md:text-lg max-w-2xl leading-relaxed mb-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
      >
        I build intelligent, scalable, and visually stunning applications — from
        machine learning models to production-ready web experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUp(0.6)}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 hover:-translate-y-1 active:scale-[0.97]"
        >
          View Projects <ArrowRight size={16} />
        </Link>
        <Link
          to="/contact"
          className={`px-8 py-3 border rounded-full font-medium transition hover:-translate-y-1 active:scale-[0.97] ${
            isDark
              ? 'border-gray-700 text-gray-300 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-400'
              : 'border-gray-300 text-gray-600 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600'
          }`}
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={fadeUp(0.75)}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 mb-16"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${
            isDark ? 'border-gray-700 text-gray-400 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-400' : 'border-gray-300 text-gray-500 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-500'
          }`}
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${
            isDark ? 'border-gray-700 text-gray-400 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-400' : 'border-gray-300 text-gray-500 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-500'
          }`}
        >
          <Linkedin size={18} />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        variants={fadeUp(0.9)}
        initial="hidden"
        animate="visible"
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
