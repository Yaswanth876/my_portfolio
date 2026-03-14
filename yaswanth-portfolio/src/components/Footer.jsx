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

        {/* GitHub brand icon */}
        <a
          href="https://github.com/Yaswanth876"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center transition hover:-translate-y-0.5 hover:opacity-80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="22" height="22">
            <circle cx="10" cy="10" r="9.5" fill="#111" />
            <path d="M10,10 C8.5,8.5 4.2,5.2 3,3.5 A9.5,9.5 0 0,1 17,3.5 C15.8,5.2 11.5,8.5 10,10Z" fill={isDark ? "#22c55e" : "#0ea5e9"} />
            <path d="M10,10 C11.5,11.5 15.8,14.8 17,16.5 A9.5,9.5 0 0,1 3,16.5 C4.2,14.8 8.5,11.5 10,10Z" fill={isDark ? "#22c55e" : "#0ea5e9"} />
            <circle cx="10" cy="10" r="9.5" fill="none" stroke="#111" strokeWidth="0.5" />
          </svg>
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
