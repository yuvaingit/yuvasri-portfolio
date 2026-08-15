import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/resumeData'

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onOpen(project.id)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="card-hover group relative cursor-pointer rounded-2xl border border-line bg-panel p-7 hover:border-accent-dim hover:bg-navy-mid/40 overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-start justify-between mb-6">
        <span className="font-mono text-[10px] text-accent tracking-wide border border-accent-dim rounded-full px-2.5 py-1">{project.tag}</span>
        <ArrowUpRight className="w-4 h-4 text-faint transition-all duration-300 group-hover:text-accent-glow group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <motion.h3 layoutId={`title-${project.id}`} className="font-display text-xl md:text-[1.4rem] text-ink leading-snug mb-3">
        {project.name}
      </motion.h3>
      <p className="text-muted text-[14px] leading-relaxed mb-6">{project.overview}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="font-mono text-[10px] text-faint border border-line-soft rounded px-2 py-1">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[60] flex items-start md:items-center justify-center overflow-y-auto bg-void/80 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl my-8 rounded-2xl border border-line bg-panel p-7 md:p-10 max-h-[85vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 text-faint hover:text-ink transition-colors focus-ring" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <span className="font-mono text-[10px] text-accent tracking-wide border border-accent-dim rounded-full px-2.5 py-1">{project.tag}</span>
        <motion.h3 layoutId={`title-${project.id}`} className="font-display text-2xl md:text-3xl text-ink leading-snug mt-5 mb-6 pr-8">
          {project.name}
        </motion.h3>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="space-y-6">
          <div>
            <p className="font-mono text-[10px] text-faint tracking-wide mb-2">THE PROBLEM</p>
            <p className="text-[14px] text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-faint tracking-wide mb-2">THE SOLUTION</p>
            <p className="text-[14px] text-muted leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-faint tracking-wide mb-2">KEY FEATURES</p>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-[14px] text-muted flex gap-2">
                  <span className="text-accent">→</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] text-faint tracking-wide mb-2">MY CONTRIBUTION</p>
            <p className="text-[14px] text-muted leading-relaxed">{project.contribution}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-faint tracking-wide mb-3">STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[11px] text-ink/90 border border-line-soft rounded px-2.5 py-1.5">{t}</span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-accent-glow hover:text-ink transition-colors mt-2"
            >
              View repository <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const activeProject = projects.find((p) => p.id === openId)

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          index="03"
          label="Projects"
          title="Things I've actually built."
          description="Three shipped systems spanning diagnostic AI, clinical software, and enterprise tooling. Open one for the full case study."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.id} className={i === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={p} index={i} onOpen={setOpenId} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  )
}
