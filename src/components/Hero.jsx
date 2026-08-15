import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import ProfileCard from './ProfileCard'
import { profile } from '../data/resumeData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 w-[600px] h-[500px] rounded-full opacity-[0.10] blur-[130px]" style={{ background: 'radial-gradient(circle, #4C8DFF 0%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-[0.04]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center relative">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow mb-5">// hello, world</motion.p>

          <motion.h1 variants={item} className="section-heading text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] text-ink">
            I&apos;m {profile.firstName},
            <br />
            <span className="text-muted">Architecting </span>
            <span className="text-accent-glow text-glow">code.</span>
            <br />
            <span className="text-muted">Crafting </span>
            <span className="text-accent-glow text-glow">experience.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-[15px] md:text-base text-muted leading-relaxed">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-md bg-ink text-void px-5 py-3 font-mono text-[12px] tracking-wide hover:bg-accent-glow transition-colors duration-300 focus-ring"
            >
              View My Work
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-[12px] tracking-wide text-ink hover:border-accent-dim hover:bg-accent/5 transition-colors duration-300 focus-ring"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-14 flex items-center gap-8 font-mono text-[11px] text-faint">
            <div>
              <p className="text-ink text-xl font-display">9.2</p>
              <p>CGPA / 10</p>
            </div>
            <div className="w-px h-8 bg-line" />
            <div>
              <p className="text-ink text-xl font-display">3</p>
              <p>Shipped Projects</p>
            </div>
            <div className="w-px h-8 bg-line" />
            <div>
              <p className="text-ink text-xl font-display">3</p>
              <p>Internships</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProfileCard />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-faint hover:text-muted transition-colors focus-ring"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.span>
      </motion.button>
    </section>
  )
}
