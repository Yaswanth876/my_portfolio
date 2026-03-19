import Hero from '../components/Hero'
import About from '../components/About'
import HomeSkillsGlimpse from '../components/HomeSkillsGlimpse'
import HomeFeaturedProjects from '../components/HomeFeaturedProjects'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Hero />
      <About />
      <HomeSkillsGlimpse />
      <HomeFeaturedProjects />
    </motion.div>
  )
}

export default Home
