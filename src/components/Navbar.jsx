import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-void/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <button onClick={() => goTo('home')} className="font-display text-sm md:text-base font-semibold tracking-tight text-ink focus-ring">
          yuvasri<span className="text-accent">.</span>dev
        </button>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-wide">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className={`relative px-3 py-2 rounded-md transition-colors duration-300 focus-ring ${
                  active === link.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-white/[0.04] border border-line"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => goTo('contact')}
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] px-4 py-2 rounded-md border border-accent-dim text-ink hover:bg-accent/10 transition-colors duration-300 focus-ring"
        >
          Let&apos;s talk
        </button>

        <button className="md:hidden text-ink focus-ring" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-void/95 backdrop-blur-md border-b border-line"
          >
            <ul className="flex flex-col px-6 py-3 gap-1 font-mono text-sm">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className={`w-full text-left px-2 py-2.5 rounded-md focus-ring ${active === link.id ? 'text-ink bg-white/[0.04]' : 'text-muted'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
