import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading index="04" label="Experience" title="Where I've worked." />

        <div className="relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-10 md:space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-9 md:pl-11"
              >
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border border-accent-dim bg-void flex items-center justify-center">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent-glow" />
                </span>

                <div className="card-hover rounded-2xl border border-line bg-panel p-6 md:p-7 hover:border-accent-dim hover:bg-navy-mid/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-display text-lg text-ink font-semibold">{exp.role}</h3>
                    <span className="font-mono text-[11px] text-faint">{exp.duration}</span>
                  </div>
                  <p className="text-accent-glow text-[13px] font-mono mb-4">{exp.org}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((pt) => (
                      <li key={pt} className="text-[14px] text-muted leading-relaxed flex gap-2">
                        <span className="text-faint">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-faint border border-line-soft rounded px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
