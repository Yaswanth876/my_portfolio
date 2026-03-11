import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, BrainCircuit, Wrench, Layers } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const skillCategories = [
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
    category: 'Frontend',
    icon: Layout,
    iconBgDark:  'bg-violet-950/50 border-violet-800/50 group-hover:border-violet-400/60 group-hover:bg-violet-950/80',
    iconBgLight: 'bg-violet-50 border-violet-200 group-hover:border-violet-400 group-hover:bg-violet-100',
    iconColorDark:  'text-violet-400',
    iconColorLight: 'text-violet-600',
    skillBgDark:  'bg-violet-950/30 text-violet-300 border-violet-900/60 hover:border-violet-500/60',
    skillBgLight: 'bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-400',
    skills: ['HTML', 'CSS', 'React.js'],
  },
  {
    category: 'Backend',
    icon: Server,
    iconBgDark:  'bg-cyan-950/50 border-cyan-800/50 group-hover:border-cyan-400/60 group-hover:bg-cyan-950/80',
    iconBgLight: 'bg-cyan-50 border-cyan-200 group-hover:border-cyan-400 group-hover:bg-cyan-100',
    iconColorDark:  'text-cyan-400',
    iconColorLight: 'text-cyan-600',
    skillBgDark:  'bg-cyan-950/30 text-cyan-300 border-cyan-900/60 hover:border-cyan-500/60',
    skillBgLight: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-400',
    skills: ['Node.js', 'Express.js', 'Flask'],
  },
  {
    category: 'Databases',
    icon: Database,
    iconBgDark:  'bg-emerald-950/50 border-emerald-800/50 group-hover:border-emerald-400/60 group-hover:bg-emerald-950/80',
    iconBgLight: 'bg-emerald-50 border-emerald-200 group-hover:border-emerald-400 group-hover:bg-emerald-100',
    iconColorDark:  'text-emerald-400',
    iconColorLight: 'text-emerald-600',
    skillBgDark:  'bg-emerald-950/30 text-emerald-300 border-emerald-900/60 hover:border-emerald-500/60',
    skillBgLight: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
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

const Skills = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" className="px-6 pt-10 pb-24 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          What I Know
        </p>
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills</h2>
        <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          My technical toolkit — built through academic coursework, personal
          projects, and hands-on development.
        </p>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map(({ category, icon: Icon, iconBgDark, iconBgLight, iconColorDark, iconColorLight, skillBgDark, skillBgLight, skills }) => (
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
    </section>
  )
}

export default Skills
