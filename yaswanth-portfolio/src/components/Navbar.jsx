import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home',           to: '/'               },
  { label: 'Projects',       to: '/projects'       },
  { label: 'Skills',         to: '/skills'         },
  { label: 'Experience',     to: '/experience'     },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact',        to: '/contact'        },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `group relative text-sm font-medium transition-colors duration-200 px-3 py-1.5 ${
      isActive
        ? 'text-sky-400'
        : theme === 'dark'
          ? 'text-gray-400 hover:text-sky-400'
          : 'text-gray-500 hover:text-sky-600'
    }`

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      scrolled
        ? theme === 'dark'
          ? 'bg-gray-950/90 border-b border-gray-800 shadow-lg shadow-black/20'
          : 'bg-white/90 border-b border-gray-200 shadow-md shadow-black/5'
        : theme === 'dark'
          ? 'bg-gray-950/70 border-b border-gray-800/50'
          : 'bg-white/70 border-b border-gray-200/50'
    }`}>
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className={`text-xl font-bold tracking-tight transition group ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Yaswanth<span className="text-indigo-500 group-hover:text-indigo-400 transition">.</span>
        </NavLink>

        {/* Desktop links + Theme toggle + Hamburger */}
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink to={to} className={linkClass}>
                  {label}
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    theme === 'dark' ? 'bg-sky-400' : 'bg-sky-500'
                  }`} />
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-sky-400 hover:bg-sky-500/10'
                : 'text-gray-500 hover:text-sky-600 hover:bg-sky-500/10'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={`md:hidden transition-all duration-200 hover:scale-110 active:scale-95 ${
              theme === 'dark' ? 'text-gray-400 hover:text-sky-400' : 'text-gray-500 hover:text-sky-600'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 transition-colors ${
          theme === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
