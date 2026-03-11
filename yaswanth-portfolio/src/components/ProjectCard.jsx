import { Github, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const categoryStyle = {
  'AI/ML':      {
    bar:       'from-purple-600 via-indigo-500 to-blue-600',
    badgeDark: 'bg-purple-500/15 text-purple-300 border border-purple-500/20',
    badgeLight:'bg-purple-50 text-purple-700 border border-purple-200',
  },
  'Full Stack': {
    bar:       'from-indigo-600 via-cyan-500 to-teal-600',
    badgeDark: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20',
    badgeLight:'bg-cyan-50 text-cyan-700 border border-cyan-200',
  },
}

const ProjectCard = ({ id, category, title, description, tech, github, live }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const style = categoryStyle[category] || {
    bar:       'from-indigo-600 via-violet-500 to-purple-600',
    badgeDark: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/20',
    badgeLight:'bg-sky-50 text-sky-700 border border-sky-200',
  }
  const badge = isDark ? style.badgeDark : style.badgeLight

  return (
    <div className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
      isDark
        ? 'bg-gray-900 border border-gray-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-500/8'
        : 'bg-white border border-gray-200 hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/10'
    }`}>

      {/* Top gradient accent bar */}
      <div className={`h-[3px] bg-gradient-to-r ${style.bar} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-6 flex flex-col gap-4 flex-1">

      {/* Header row: category badge */}
      <div className="flex items-start justify-between gap-2">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-1 ${badge}`}>
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className={`text-lg font-semibold leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className={`text-xs px-3 py-1 rounded-full ${
              isDark
                ? 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/50'
                : 'bg-sky-50 text-sky-700 border border-sky-200'
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className={`flex items-center gap-4 pt-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
          className={`flex items-center gap-1.5 text-sm transition hover:-translate-y-0.5 hover:gap-2 active:scale-95 ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-800'
          }`}
        >
          <Github size={15} />
          Code
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label="Live demo"
          className={`flex items-center gap-1.5 text-sm transition hover:-translate-y-0.5 hover:gap-2 active:scale-95 ${
            isDark ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-500'
          }`}
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
      </div>

      </div>
    </div>
  )
}

export default ProjectCard
