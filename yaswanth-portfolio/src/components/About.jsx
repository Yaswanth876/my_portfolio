import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, Award, Briefcase, Cpu, Trophy } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { label: 'Projects Built',  value: 9,  suffix: '+', icon: FolderGit2, color: 'text-indigo-400' },
  { label: 'Hackathons',      value: 3,  suffix: '',  icon: Trophy,     color: 'text-amber-400'  },
  { label: 'Certifications',  value: 4,  suffix: '',  icon: Award,      color: 'text-violet-400' },
  { label: 'Internship',      value: 1,  suffix: '',  icon: Briefcase,  color: 'text-cyan-400'   },
]

// Animated number counter
const Counter = ({ value, suffix, isDark }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out expo
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={`text-3xl font-bold text-transparent bg-clip-text ${
      isDark ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-sky-600 to-blue-700'
    }`}>
      {count}{suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const About = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 py-16 max-w-4xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-4 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          About Me
        </p>
        <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Who I Am</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-[260px_minmax(0,1fr)] gap-8 items-start mb-12"
      >
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
          <motion.div
            whileHover={{
              y: -10,
              rotate: 1.5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 260, damping: 18 },
            }}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-[2.2rem] p-[3px] shadow-2xl bg-gray-200"
          >
            <div className={`h-full w-full rounded-[1.9rem] p-[3px] ${
              isDark ? 'bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400' : 'bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-500'
            }`}>
              <img
                src="/profile.webp"
                alt="Yaswanth profile"
                className="h-full w-full rounded-[1.45rem] object-cover object-center bg-gray-200"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[
            <>
              I'm{' '}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Yaswanth</span>, a Computer Science Engineering student specializing in{' '}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Artificial Intelligence and Machine Learning</span>{' '}
              at{' '}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Thiagarajar College of Engineering</span>. I enjoy building intelligent systems and full-stack applications that solve real-world problems.
            </>,
            <>
              My work focuses on AI-powered applications, web platforms, and data-driven solutions, with experience in technologies like{' '}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Python, React, Node.js</span>, and machine learning tools. I'm passionate about learning new technologies and applying them to create practical, scalable software systems.
            </>,
            <>
              Currently, I'm seeking opportunities to grow as a{' '}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>software developer and AI engineer</span>{' '}
              while contributing to impactful projects.
            </>,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {stats.map(({ label, value, suffix, icon: Icon, color }) => (
          <motion.div
            key={label}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`rounded-2xl px-5 py-5 text-center border transition-all duration-300 group cursor-default ${
              isDark
                ? 'bg-gray-900 border-gray-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/8'
                : 'bg-white border-gray-200 hover:border-sky-400/60 shadow-sm hover:shadow-md'
            }`}
          >
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon size={20} className={`${color} mx-auto mb-2.5 opacity-70 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
            <p className="mb-1">
              <Counter value={value} suffix={suffix} isDark={isDark} />
            </p>
            <p className="text-gray-500 text-xs leading-snug">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About
