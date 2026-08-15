import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DeviceIntro from './components/DeviceIntro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <DeviceIntro onEnter={() => setEntered(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-void min-h-screen"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
