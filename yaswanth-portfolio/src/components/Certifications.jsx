import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const certifications = [
  {
    title: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM',
    platform: 'Coursera',
    year: '2024',
    dark: {
      card:      'bg-gray-900 border-gray-800 hover:border-blue-500/60',
      gradient:  'from-blue-500/15 to-indigo-600/5',
      iconBg:    'bg-blue-900/40 border-blue-800/60 group-hover:border-blue-500/60',
      iconColor: 'text-blue-400',
      badge:     'bg-blue-900/40 text-blue-300 border-blue-800/50',
      platform:  'bg-gray-800 text-gray-400 border-gray-700',
      divider:   'border-gray-800',
      year:      'text-gray-500',
      viewLink:  'text-gray-500 hover:text-blue-400',
      title:     'text-white',
    },
    light: {
      card:      'bg-white border-blue-100 hover:border-blue-400/70',
      gradient:  'from-blue-50 to-indigo-50',
      iconBg:    'bg-blue-100 border-blue-200 group-hover:border-blue-400',
      iconColor: 'text-blue-600',
      badge:     'bg-blue-100 text-blue-700 border-blue-200',
      platform:  'bg-gray-100 text-gray-500 border-gray-200',
      divider:   'border-gray-100',
      year:      'text-gray-400',
      viewLink:  'text-gray-400 hover:text-blue-600',
      title:     'text-gray-900',
    },
    link: 'https://coursera.org',
  },
  {
    title: 'Machine Learning Introduction for Everyone',
    issuer: 'IBM',
    platform: 'Coursera',
    year: '2024',
    dark: {
      card:      'bg-gray-900 border-gray-800 hover:border-cyan-500/60',
      gradient:  'from-cyan-500/15 to-sky-600/5',
      iconBg:    'bg-cyan-900/40 border-cyan-800/60 group-hover:border-cyan-500/60',
      iconColor: 'text-cyan-400',
      badge:     'bg-cyan-900/40 text-cyan-300 border-cyan-800/50',
      platform:  'bg-gray-800 text-gray-400 border-gray-700',
      divider:   'border-gray-800',
      year:      'text-gray-500',
      viewLink:  'text-gray-500 hover:text-cyan-400',
      title:     'text-white',
    },
    light: {
      card:      'bg-white border-cyan-100 hover:border-cyan-400/70',
      gradient:  'from-cyan-50 to-sky-50',
      iconBg:    'bg-cyan-100 border-cyan-200 group-hover:border-cyan-400',
      iconColor: 'text-cyan-600',
      badge:     'bg-cyan-100 text-cyan-700 border-cyan-200',
      platform:  'bg-gray-100 text-gray-500 border-gray-200',
      divider:   'border-gray-100',
      year:      'text-gray-400',
      viewLink:  'text-gray-400 hover:text-cyan-600',
      title:     'text-gray-900',
    },
    link: 'https://coursera.org',
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    platform: 'Coursera',
    year: '2024',
    dark: {
      card:      'bg-gray-900 border-gray-800 hover:border-purple-500/60',
      gradient:  'from-purple-500/15 to-violet-600/5',
      iconBg:    'bg-purple-900/40 border-purple-800/60 group-hover:border-purple-500/60',
      iconColor: 'text-purple-400',
      badge:     'bg-purple-900/40 text-purple-300 border-purple-800/50',
      platform:  'bg-gray-800 text-gray-400 border-gray-700',
      divider:   'border-gray-800',
      year:      'text-gray-500',
      viewLink:  'text-gray-500 hover:text-purple-400',
      title:     'text-white',
    },
    light: {
      card:      'bg-white border-purple-100 hover:border-purple-400/70',
      gradient:  'from-purple-50 to-violet-50',
      iconBg:    'bg-purple-100 border-purple-200 group-hover:border-purple-400',
      iconColor: 'text-purple-600',
      badge:     'bg-purple-100 text-purple-700 border-purple-200',
      platform:  'bg-gray-100 text-gray-500 border-gray-200',
      divider:   'border-gray-100',
      year:      'text-gray-400',
      viewLink:  'text-gray-400 hover:text-purple-600',
      title:     'text-gray-900',
    },
    link: 'https://coursera.org',
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    platform: 'Swayam',
    year: '2024',
    dark: {
      card:      'bg-gray-900 border-gray-800 hover:border-emerald-500/60',
      gradient:  'from-emerald-500/15 to-green-600/5',
      iconBg:    'bg-emerald-900/40 border-emerald-800/60 group-hover:border-emerald-500/60',
      iconColor: 'text-emerald-400',
      badge:     'bg-emerald-900/40 text-emerald-300 border-emerald-800/50',
      platform:  'bg-gray-800 text-gray-400 border-gray-700',
      divider:   'border-gray-800',
      year:      'text-gray-500',
      viewLink:  'text-gray-500 hover:text-emerald-400',
      title:     'text-white',
    },
    light: {
      card:      'bg-white border-emerald-100 hover:border-emerald-400/70',
      gradient:  'from-emerald-50 to-green-50',
      iconBg:    'bg-emerald-100 border-emerald-200 group-hover:border-emerald-400',
      iconColor: 'text-emerald-600',
      badge:     'bg-emerald-100 text-emerald-700 border-emerald-200',
      platform:  'bg-gray-100 text-gray-500 border-gray-200',
      divider:   'border-gray-100',
      year:      'text-gray-400',
      viewLink:  'text-gray-400 hover:text-emerald-600',
      title:     'text-gray-900',
    },
    link: 'https://swayam.gov.in',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Certifications = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="certifications" className="px-6 pt-10 pb-24 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          Achievements
        </p>
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Certifications</h2>
        <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Industry-recognized certifications that validate my expertise in
          AI, Machine Learning, and Python development.
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {certifications.map((cert) => {
          const s = isDark ? cert.dark : cert.light
          return (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className={`group relative bg-gradient-to-br ${s.gradient} ${s.card}
                          border rounded-2xl p-6 flex flex-col gap-4
                          transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${s.iconBg}`}>
                <Award size={18} className={s.iconColor} />
              </div>

              {/* Title */}
              <h3 className={`font-semibold text-sm leading-snug flex-1 ${s.title}`}>
                {cert.title}
              </h3>

              {/* Issuer + platform badges */}
              <div className="flex flex-wrap gap-2">
                <span className={`text-xs px-2.5 py-1 border rounded-full font-medium ${s.badge}`}>
                  {cert.issuer}
                </span>
                <span className={`text-xs px-2.5 py-1 border rounded-full ${s.platform}`}>
                  {cert.platform}
                </span>
              </div>

              {/* Footer row */}
              <div className={`flex items-center justify-between pt-1 border-t ${s.divider}`}>
                <span className={`text-xs ${s.year}`}>{cert.year}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                  className={`flex items-center gap-1 text-xs transition hover:-translate-y-0.5 hover:gap-1.5 active:scale-95 ${s.viewLink}`}
                >
                  View <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Certifications
