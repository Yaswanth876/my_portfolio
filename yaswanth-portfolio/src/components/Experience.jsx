import { motion } from 'framer-motion'
import { Briefcase, Trophy, MapPin, Calendar, Users } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// type: 'work' | 'hackathon'
const timeline = [
  {
    type: 'hackathon',
    title: '36-Hour PromptWar Hackathon',
    subtitle: 'Build with AI, Build for Clean Madurai',
    org: 'GDG Madurai × YI Madurai',
    location: 'Sethu Institute of Technology',
    date: 'February 27, 2026',
    points: [
      'Participated in a 36-hour AI hackathon organised by Google Developer Groups Madurai.',
      'Actively contributed to continuous ideation and AI-driven solution development.',
      'Built a solution focused on environmental sustainability for a cleaner, smarter Madurai.',
    ],
    accent: 'blue',
  },
  {
    type: 'hackathon',
    title: 'SIH Internal Hackathon 2025',
    subtitle: 'Smart India Hackathon — Internal Round',
    org: 'Thiagarajar College of Engineering',
    location: 'TCE, Madurai',
    date: 'September 16, 2025',
    points: [
      'Competed in TCE\'s internal selection round for Smart India Hackathon 2025.',
      'Presented an AI-driven solution to a panel of faculty evaluators.',
      'Demonstrated effort, teamwork, and innovation across a full hackathon day.',
    ],
    accent: 'green',
  },
  {
    type: 'work',
    title: 'Software Development Intern',
    subtitle: 'Full-time Internship',
    org: 'Tarcin Robotic LLP',
    location: 'KK Nagar, Madurai',
    date: 'June 25 – July 25, 2025',
    points: [
      'Developed and tested backend modules for real-time robotics software systems.',
      'Debugged and optimized application performance across multiple project sprints.',
      'Collaborated using Git-based workflows and participated in code reviews.',
      'Certificate ID: INT/SD/211398 — issued by senior authority S. Mohamed Arsath.',
    ],
    accent: 'sky',
  },
  {
    type: 'hackathon',
    title: 'iTech Hackfest 2025',
    subtitle: 'National Level Hackathon – Regional Round',
    org: 'TCE × PSG iTech × SAP India',
    location: 'Thiagarajar College of Engineering, Madurai',
    date: 'April 7, 2025',
    points: [
      'Participated in the SAP-sponsored iTech Hackfest — a national-level regional hackathon.',
      'Built a rapid-prototype solution within a competitive time-boxed environment.',
      'Collaborated with a team to ideate, design, and present a working demo to judges.',
    ],
    accent: 'amber',
  },
]

const accentMap = {
  sky:   { dot: 'bg-sky-500',   ping: 'bg-sky-500/20',   line: 'from-sky-500/70 via-sky-500/20',   icon: 'text-sky-400',   iconBg: 'bg-sky-500/10 border-sky-500/30',   orgText: 'text-sky-400',   bullet: 'bg-sky-500/70',   tag: 'bg-sky-500/15 text-sky-300 border-sky-500/30',   tagLight: 'bg-sky-50 text-sky-700 border-sky-200',   hover: 'hover:border-sky-500/50',   hoverLight: 'hover:border-sky-400/60',   orgTextLight: 'text-sky-600' },
  amber: { dot: 'bg-amber-500', ping: 'bg-amber-500/20', line: 'from-amber-500/70 via-amber-500/20', icon: 'text-amber-400', iconBg: 'bg-amber-500/10 border-amber-500/30', orgText: 'text-amber-400', bullet: 'bg-amber-500/70', tag: 'bg-amber-500/15 text-amber-300 border-amber-500/30', tagLight: 'bg-amber-50 text-amber-700 border-amber-200', hover: 'hover:border-amber-500/50', hoverLight: 'hover:border-amber-400/60', orgTextLight: 'text-amber-600' },
  green: { dot: 'bg-emerald-500', ping: 'bg-emerald-500/20', line: 'from-emerald-500/70 via-emerald-500/20', icon: 'text-emerald-400', iconBg: 'bg-emerald-500/10 border-emerald-500/30', orgText: 'text-emerald-400', bullet: 'bg-emerald-500/70', tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', tagLight: 'bg-emerald-50 text-emerald-700 border-emerald-200', hover: 'hover:border-emerald-500/50', hoverLight: 'hover:border-emerald-400/60', orgTextLight: 'text-emerald-600' },
  blue:  { dot: 'bg-blue-500',  ping: 'bg-blue-500/20',  line: 'from-blue-500/70 via-blue-500/20',  icon: 'text-blue-400',  iconBg: 'bg-blue-500/10 border-blue-500/30',  orgText: 'text-blue-400',  bullet: 'bg-blue-500/70',  tag: 'bg-blue-500/15 text-blue-300 border-blue-500/30',  tagLight: 'bg-blue-50 text-blue-700 border-blue-200',  hover: 'hover:border-blue-500/50',  hoverLight: 'hover:border-blue-400/60',  orgTextLight: 'text-blue-600' },
}

const Experience = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="experience" className="px-6 pt-10 pb-24 max-w-4xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-indigo-400' : 'text-sky-600'}`}>
          Journey
        </p>
        <h2 className={`text-2xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Experience &amp; Hackathons
        </h2>
        <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Real-world internship and competitive hackathon experiences that
          shaped my engineering skills and problem-solving mindset.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/60 via-sky-500/20 to-transparent`} />

        <div className="flex flex-col gap-10">
          {timeline.map((item, index) => {
            const a = accentMap[item.accent]
            const isWork = item.type === 'work'
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-6 flex items-center justify-center">
                  <span className={`w-3 h-3 rounded-full ${a.dot} border-2 ${isDark ? 'border-gray-950' : 'border-slate-100'} z-10 relative`} />
                  <span className={`absolute w-5 h-5 rounded-full ${a.ping} animate-ping`} />
                </div>

                {/* Card */}
                <div className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                  isDark
                    ? `bg-gray-900 border-gray-800 ${a.hover}`
                    : `bg-white border-gray-200 shadow-sm ${a.hoverLight}`
                }`}>

                  {/* Type tag + date row */}
                  <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${
                      isDark ? a.tag : a.tagLight
                    }`}>
                      {isWork
                        ? <Briefcase size={11} />
                        : <Trophy size={11} />
                      }
                      {isWork ? 'Internship' : 'Hackathon'}
                    </span>
                    <span className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <div className="mb-3">
                    <div className="flex items-start gap-2 mb-1">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${a.iconBg}`}>
                        {isWork ? <Briefcase size={14} className={a.icon} /> : <Trophy size={14} className={a.icon} />}
                      </div>
                      <h3 className={`font-semibold text-base sm:text-lg leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-sm ml-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.subtitle}</p>
                  </div>

                  {/* Org + Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 mb-5 ml-10">
                    <span className={`flex items-center gap-1.5 text-sm font-medium ${isDark ? a.orgText : a.orgTextLight}`}>
                      <Users size={13} />
                      {item.org}
                    </span>
                    <span className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="flex flex-col gap-2.5">
                    {item.points.map((point, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full ${a.bullet} shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
