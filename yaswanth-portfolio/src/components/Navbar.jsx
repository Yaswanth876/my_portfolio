import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      scrolled
        ? theme === 'dark'
          ? 'bg-gray-950/90 border-b border-gray-800 shadow-lg shadow-black/20'
          : 'bg-white/90 border-b border-gray-200 shadow-md shadow-black/5'
        : theme === 'dark'
          ? 'bg-gray-950/70 border-b border-gray-800/50'
          : 'bg-white/70 border-b border-gray-200/50'
    }`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className={`text-xl font-bold tracking-tight transition group ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Yaswanth<span className="text-indigo-500 group-hover:text-indigo-400 transition">.</span>
        </NavLink>

        {/* Desktop links + Theme toggle + Mobile menu */}
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <motion.li key={label} whileHover={{ y: -1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <NavLink to={to} className={linkClass}>
                  {label}
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    theme === 'dark' ? 'bg-sky-400' : 'bg-sky-500'
                  }`} />
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <Button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            variant="ghost"
            size="icon"
            className={`transition-all duration-200 hover:scale-110 active:scale-95 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-sky-400 hover:bg-sky-500/10'
                : 'text-gray-500 hover:text-sky-600 hover:bg-sky-500/10'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden transition-all duration-200 hover:scale-110 active:scale-95 ${
                  theme === 'dark' ? 'text-gray-400 hover:text-sky-400' : 'text-gray-500 hover:text-sky-600'
                }`}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={`md:hidden ${
                theme === 'dark'
                  ? 'bg-gray-950 border-gray-800 text-gray-100'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <SheetHeader>
                <SheetTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Navigation</SheetTitle>
                <SheetDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                  Explore sections of my portfolio.
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map(({ label, to }) => (
                  <SheetClose asChild key={label}>
                    <NavLink
                      to={to}
                      className={linkClass}
                    >
                      {label}
                    </NavLink>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
