import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ExperiencePage from './pages/ExperiencePage'
import CertificationsPage from './pages/CertificationsPage'
import ContactPage from './pages/ContactPage'
import { ThemeProvider } from './context/ThemeContext'

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col overflow-x-hidden">
    <Navbar />
    <main className="pt-20 flex-1 overflow-x-hidden">
      {children}
    </main>
    <Footer />
  </div>
)

const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
}

const PageShell = ({ children }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="min-h-full"
  >
    {children}
  </motion.div>
)

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageShell><Home /></PageShell>} />
        <Route path="/projects" element={<PageShell><ProjectsPage /></PageShell>} />
        <Route path="/skills" element={<PageShell><SkillsPage /></PageShell>} />
        <Route path="/experience" element={<PageShell><ExperiencePage /></PageShell>} />
        <Route path="/certifications" element={<PageShell><CertificationsPage /></PageShell>} />
        <Route path="/contact" element={<PageShell><ContactPage /></PageShell>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App