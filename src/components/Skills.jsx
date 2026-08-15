import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills, softSkills } from '../data/resumeData'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading index="02" label="Skills" title="Tools I reach for." description="Organized by where they show up in the stack — not by an arbitrary percentage bar." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="card-hover rounded-2xl border border-line bg-panel p-6 hover:border-accent-dim hover:bg-navy-mid/40"
            >
              <p className="font-mono text-[10px] text-accent tracking-wide mb-4">{String(i + 1).padStart(2, '0')} / {group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line-soft bg-void/50 px-2.5 py-1.5 text-[12px] text-ink/90 transition-colors duration-300 hover:border-accent-dim hover:text-accent-glow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-line bg-panel p-6 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <p className="font-mono text-[10px] text-accent tracking-wide">SOFT SKILLS</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {softSkills.map((s) => (
              <span key={s} className="text-[13px] text-muted">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
