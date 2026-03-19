import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home',           to: '/'               },
  { label: 'Projects',       to: '/projects'       },
  { label: 'Skills',         to: '/skills'         },
  { label: 'Experience',     to: '/experience'     },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact',        to: '/contact'        },
]

const Footer = () => {
  const year = new Date().getFullYear()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`border-t transition-colors ${
      isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
    }`}
    >
      <div className="w-full px-6 py-5 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">

        {/* Brand favicon */}
        <a
          href="/"
          aria-label="Go to home"
          className="flex items-center transition hover:-translate-y-0.5 hover:opacity-80"
        >
          <img
            src="/favicon.ico"
            alt="Yaswanth logo"
            width="22"
            height="22"
            className={`rounded-sm ${isDark ? 'ring-1 ring-gray-700' : 'ring-1 ring-gray-200'}`}
          />
        </a>

        {/* Copyright */}
        <p className={`text-sm w-full sm:w-auto text-center sm:text-left ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          © {year} Yaswanth V. All rights reserved.
        </p>

        {/* Spacer (desktop only) */}
        <div className="hidden sm:flex flex-1" />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 sm:flex-nowrap sm:gap-6">
          {navLinks.map(({ label, to }) => (
            <motion.div key={label} whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
              <Link
                to={to}
                className={`text-sm transition hover:-translate-y-0.5 ${
                  isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

      </div>
    </motion.footer>
  )
}

export default Footer
