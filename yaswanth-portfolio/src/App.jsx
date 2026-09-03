import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { ThemeProvider } from './context/ThemeContext'
function App(){return <ThemeProvider><div className="site-shell min-h-screen"><Navbar/><main className="pt-20"><Hero/><About/><Skills/><Projects/><Experience/><Certifications/><Contact/></main><Footer/></div></ThemeProvider>}
export default App
