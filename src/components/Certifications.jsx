import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/resumeData'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading index="05" label="Certifications" title="Credentials on record." />

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const Comp = cert.link && cert.link !== '#' ? 'a' : 'div'
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="card-hover rounded-2xl border border-line bg-panel p-6 hover:border-accent-dim hover:bg-navy-mid/30"
              >
                <Comp
                  {...(Comp === 'a' ? { href: cert.link, target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-start gap-4"
                >
                  <span className="shrink-0 w-10 h-10 rounded-lg border border-line-soft flex items-center justify-center text-accent-glow">
                    <Award className="w-[18px] h-[18px]" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-display text-[15px] text-ink leading-snug">{cert.name}</p>
                      {Comp === 'a' && <ArrowUpRight className="w-4 h-4 text-faint shrink-0 mt-0.5" />}
                    </div>
                    <p className="text-muted text-[13px] mt-2">{cert.org}</p>
                    <p className="font-mono text-[10px] text-faint mt-2 tracking-wide">{cert.date}</p>
                  </div>
                </Comp>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
