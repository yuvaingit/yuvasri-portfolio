import { motion } from 'framer-motion'
import { Trophy, Mic, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { achievements } from '../data/resumeData'

const ICONS = {
  Hackathon: Trophy,
  Conference: Mic,
  Leadership: Users,
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading index="06" label="Achievements" title="Milestones worth mentioning." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => {
            const Icon = ICONS[ach.type] || Trophy
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="card-hover rounded-2xl border border-line bg-panel p-6 hover:border-accent-dim hover:bg-navy-mid/30 flex flex-col"
              >
                <Icon className="w-5 h-5 text-accent-glow mb-5" />
                <p className="font-mono text-[9px] text-faint tracking-widest uppercase mb-2">{ach.type}</p>
                <p className="font-display text-[15px] text-ink leading-snug mb-2">{ach.title}</p>
                <p className="text-muted text-[12.5px] leading-relaxed flex-1">{ach.detail}</p>
                <p className="font-mono text-[10px] text-faint mt-4 pt-4 border-t border-line-soft">{ach.date}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
