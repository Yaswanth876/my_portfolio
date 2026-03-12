import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

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
    <footer className={`border-t transition-colors ${
      isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="w-full px-6 py-5 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">

        {/* Copyright */}
        <p className={`text-sm w-full sm:w-auto text-center sm:text-left ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          © {year} Yaswanth V. All rights reserved.
        </p>

        {/* Spacer (desktop only) */}
        <div className="hidden sm:flex flex-1" />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 sm:flex-nowrap sm:gap-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`text-sm transition hover:-translate-y-0.5 ${
                isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  )
}

export default Footer
