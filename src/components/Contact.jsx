import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/resumeData'

const LINKS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/yuvasrinag0281', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'github.com/yuvaingit', href: profile.github, icon: Github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading index="07" label="Contact" title="Have an opportunity in mind?" description="Let's connect — I read every message." />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-line bg-panel px-5 py-4 hover:border-accent-dim hover:bg-navy-mid/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <l.icon className="w-4 h-4 text-accent-glow" />
                  <div>
                    <p className="font-mono text-[10px] text-faint tracking-wide">{l.label}</p>
                    <p className="text-ink text-[14px]">{l.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-glow" />
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-panel p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="font-mono text-[10px] text-faint tracking-wide block mb-2">NAME</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-void border border-line-soft rounded-md px-4 py-3 text-[14px] text-ink placeholder:text-faint focus:border-accent-dim focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] text-faint tracking-wide block mb-2">EMAIL</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-void border border-line-soft rounded-md px-4 py-3 text-[14px] text-ink placeholder:text-faint focus:border-accent-dim focus:outline-none transition-colors duration-300"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] text-faint tracking-wide block mb-2">MESSAGE</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-void border border-line-soft rounded-md px-4 py-3 text-[14px] text-ink placeholder:text-faint focus:border-accent-dim focus:outline-none transition-colors duration-300 resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-ink text-void px-5 py-3.5 font-mono text-[12px] tracking-wide hover:bg-accent-glow transition-colors duration-300 focus-ring"
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4" /> Opening your mail client…
                </>
              ) : (
                <>
                  Send Message <ArrowUpRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
