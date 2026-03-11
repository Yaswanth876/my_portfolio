import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, BrainCircuit, Wrench, Layers } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const glimpseCategories = [
  {
    category: 'Languages',
    icon: Code2,
    iconBgDark:  'bg-indigo-950/50 border-indigo-800/50 group-hover:border-indigo-400/60 group-hover:bg-indigo-950/80',
    iconBgLight: 'bg-indigo-50 border-indigo-200 group-hover:border-indigo-400 group-hover:bg-indigo-100',
    iconColorDark:  'text-indigo-400',
    iconColorLight: 'text-indigo-600',
    skillBgDark:  'bg-indigo-950/30 text-indigo-300 border-indigo-900/60 hover:border-indigo-500/60',
    skillBgLight: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400',
    skills: ['Python', 'C', 'Java', 'JavaScript'],
  },
  {
    category: 'AI / ML Libraries',
    icon: BrainCircuit,
    iconBgDark:  'bg-purple-950/50 border-purple-800/50 group-hover:border-purple-400/60 group-hover:bg-purple-950/80',
    iconBgLight: 'bg-purple-50 border-purple-200 group-hover:border-purple-400 group-hover:bg-purple-100',
    iconColorDark:  'text-purple-400',
    iconColorLight: 'text-purple-600',
    skillBgDark:  'bg-purple-950/30 text-purple-300 border-purple-900/60 hover:border-purple-500/60',
    skillBgLight: 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    iconBgDark:  'bg-rose-950/50 border-rose-800/50 group-hover:border-rose-400/60 group-hover:bg-rose-950/80',
    iconBgLight: 'bg-rose-50 border-rose-200 group-hover:border-rose-400 group-hover:bg-rose-100',
    iconColorDark:  'text-rose-400',
    iconColorLight: 'text-rose-600',
    skillBgDark:  'bg-rose-950/30 text-rose-300 border-rose-900/60 hover:border-rose-500/60',
    skillBgLight: 'bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
  {
    category: 'MERN Stack',
    icon: Layers,
    iconBgDark:  'bg-amber-950/50 border-amber-800/50 group-hover:border-amber-400/60 group-hover:bg-amber-950/80',
    iconBgLight: 'bg-amber-50 border-amber-200 group-hover:border-amber-400 group-hover:bg-amber-100',
    iconColorDark:  'text-amber-400',
    iconColorLight: 'text-amber-600',
    skillBgDark:  'bg-amber-950/30 text-amber-300 border-amber-900/60 hover:border-amber-500/60',
    skillBgLight: 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const HomeSkillsGlimpse = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="px-6 pt-10 pb-20 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          What I Know
        </p>
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills</h2>
        <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          A quick look at my core technical skills — from programming languages
          and AI/ML libraries to developer tools and the MERN stack.
        </p>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {glimpseCategories.map(({ category, icon: Icon, iconBgDark, iconBgLight, iconColorDark, iconColorLight, skillBgDark, skillBgLight, skills }) => (
          <motion.div
            key={category}
            variants={cardVariants}
            className={`rounded-2xl p-6 border transition-all duration-300 group ${
              isDark
                ? 'bg-gray-900 border-gray-800 hover:border-indigo-500/50'
                : 'bg-white border-gray-200 hover:border-sky-400/60 shadow-sm hover:shadow-md'
            }`}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 rounded-lg border flex items-center justify-center transition ${
                isDark ? iconBgDark : iconBgLight
              }`}>
                <Icon size={18} className={isDark ? iconColorDark : iconColorLight} />
              </div>
              <h3 className={`font-semibold text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>{category}</h3>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-sm px-3 py-1.5 border rounded-lg transition-colors duration-300 ${
                    isDark ? skillBgDark : skillBgLight
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View all skills link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <Link
          to="/skills"
          className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
            isDark
              ? 'border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400'
              : 'border-sky-400/60 text-sky-700 hover:bg-sky-50 hover:border-sky-500'
          }`}
        >
          View All Skills →
        </Link>
      </motion.div>

    </section>
  )
}

export default HomeSkillsGlimpse
