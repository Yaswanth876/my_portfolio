import { motion } from 'framer-motion'
import { FolderGit2, Award, Briefcase, Cpu, Trophy } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { label: 'Projects Built',  value: '9+',  icon: FolderGit2, color: 'text-indigo-400' },
  { label: 'Hackathons',      value: '3',   icon: Trophy,     color: 'text-amber-400'  },
  { label: 'Certifications',  value: '4',   icon: Award,      color: 'text-violet-400' },
  { label: 'Internship',      value: '1',   icon: Briefcase,  color: 'text-cyan-400'   },
]

const About = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 py-16 max-w-4xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-4 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          About Me
        </p>
        <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Who I Am</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col gap-4 mb-12"
      >
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          I'm{' '}
          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Yaswanth</span>, a Computer Science Engineering student specializing in{' '}
          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Artificial Intelligence and Machine Learning</span>{' '}
          at{' '}
          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Thiagarajar College of Engineering</span>. I enjoy building intelligent systems and full-stack applications that solve real-world problems.
        </p>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          My work focuses on AI-powered applications, web platforms, and data-driven solutions, with experience in technologies like{' '}
          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Python, React, Node.js</span>, and machine learning tools. I'm passionate about learning new technologies and applying them to create practical, scalable software systems.
        </p>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Currently, I'm seeking opportunities to grow as a{' '}
          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>software developer and AI engineer</span>{' '}
          while contributing to impactful projects.
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {stats.map(({ label, value, icon: Icon, color }) => (
          <motion.div
            key={label}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`rounded-2xl px-5 py-5 text-center border transition-colors duration-300 group ${
              isDark
                ? 'bg-gray-900 border-gray-800 hover:border-indigo-500/50'
                : 'bg-white border-gray-200 hover:border-sky-400/60 shadow-sm hover:shadow-md'
            }`}
          >
            <Icon size={20} className={`${color} mx-auto mb-2.5 opacity-70 group-hover:opacity-100 transition-opacity`} />
            <p className={`text-3xl font-bold text-transparent bg-clip-text mb-1 ${
              isDark ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-sky-600 to-blue-700'
            }`}>{value}</p>
            <p className="text-gray-500 text-xs leading-snug">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About
