import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { Separator } from './ui/separator'

const categoryStyle = {
  'AI/ML': {
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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="h-full"
    >
      <Card className={`group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 ${
        isDark
          ? 'bg-gray-900 border border-gray-800 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-500/10'
          : 'bg-white border border-gray-200 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-500/12'
      }`}>

        {/* Card shine sweep */}
        <div className="card-shine" />

        {/* Top gradient accent bar — expands on hover */}
        <div className={`h-[3px] bg-gradient-to-r ${style.bar} opacity-40 group-hover:opacity-100 transition-opacity duration-300 group-hover:h-[4px]`} />

        <CardContent className="p-6 flex flex-col gap-4 flex-1">

          {/* Header row: category badge */}
          <div className="flex items-start justify-between gap-2">
            <Badge className={`shrink-0 mt-1 ${badge}`}>
              {category}
            </Badge>
          </div>

          {/* Title */}
          <CardTitle className={`text-lg font-semibold leading-snug transition-colors duration-200 ${
            isDark
              ? 'text-white group-hover:text-sky-300'
              : 'text-gray-900 group-hover:text-sky-700'
          }`}>
            {title}
          </CardTitle>

          {/* Description */}
          <CardDescription className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {description}
          </CardDescription>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.08, y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                <Badge
                  className={`text-xs px-3 py-1 rounded-full cursor-default ${
                    isDark
                      ? 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/50 hover:border-indigo-500/60'
                      : 'bg-sky-50 text-sky-700 border border-sky-200 hover:border-sky-400'
                  }`}
                >
                  {t}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Action buttons */}
          <Separator className={isDark ? 'bg-gray-800' : 'bg-gray-100'} />
          <div className="flex items-center gap-2 pt-1">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`h-8 px-2.5 transition-all duration-200 hover:scale-105 ${
                isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                <Github size={15} />
                Code
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`h-8 px-2.5 transition-all duration-200 hover:scale-105 ${
                isDark ? 'text-sky-400 hover:text-sky-300 hover:bg-sky-500/10' : 'text-sky-600 hover:text-sky-500 hover:bg-sky-50'
              }`}
            >
              <a href={live} target="_blank" rel="noreferrer" aria-label="Live demo">
                <ExternalLink size={15} />
                Live Demo
              </a>
            </Button>
          </div>

        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
