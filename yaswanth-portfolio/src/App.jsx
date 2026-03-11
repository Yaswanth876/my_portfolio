import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/projects"        element={<ProjectsPage />} />
            <Route path="/skills"          element={<SkillsPage />} />
            <Route path="/experience"      element={<ExperiencePage />} />
            <Route path="/certifications"  element={<CertificationsPage />} />
            <Route path="/contact"         element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App