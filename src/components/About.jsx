import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education, profile } from '../data/resumeData'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading index="01" label="About" title="The person behind the code." />

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-[15px] md:text-base text-muted leading-relaxed"
          >
            <p>
              I&apos;m a final-year <span className="text-ink">Computer Science Engineering</span> student at SRM
              Institute of Science and Technology, Tiruchirappalli — currently maintaining a{' '}
              <span className="text-ink">9.2 CGPA</span>. My work lives at the intersection of{' '}
              <span className="text-ink">AI, healthcare, and full-stack engineering</span>: I like problems where a
              model or an interface has to be trusted by someone whose job depends on it.
            </p>
            <p>
              That&apos;s taken shape as a CNN that reads ultrasound images to support endometriosis diagnosis, a
              clinical mentorship platform that pairs interns with AI-assisted review, and enterprise tooling like a
              Kanban-driven Micro-CRM. Alongside the build work, I&apos;ve interned across frontend engineering,
              mobile app development, and campus marketing — which keeps me equally comfortable shipping a
              component and explaining it to a room.
            </p>
            <p>
              I&apos;m drawn to <span className="text-ink">smart healthcare systems, UI/UX, and machine learning in
              medical imaging</span> — domains where good engineering has a visible, human outcome. As PR Lead for
              SRMIST&apos;s ACM Student Chapter, I also spend time making technical work legible to the people
              outside the room where it was built.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-line bg-panel p-6 md:p-7"
          >
            <p className="font-mono text-[11px] text-faint mb-5 tracking-wide">/// currently</p>
            <ul className="space-y-4">
              {profile.interests.map((interest, i) => (
                <li key={interest} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-accent mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[14px] text-ink">{interest}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-line-soft">
              <p className="font-mono text-[11px] text-faint mb-3 tracking-wide">/// languages</p>
              <p className="text-[13px] text-muted leading-relaxed">{profile.languages.join(' · ')}</p>
            </div>
          </motion.div>
        </div>

        {/* Academics */}
        <div className="mt-20 md:mt-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-8"
          >
            [01.1] Academics
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="card-hover rounded-2xl border border-line bg-panel p-6 md:p-7 hover:border-accent-dim"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-ink font-semibold">{ed.school}</p>
                    <p className="text-muted text-sm mt-1">{ed.degree}</p>
                    <p className="font-mono text-[11px] text-faint mt-3">{ed.duration} · {ed.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display text-3xl text-accent-glow text-glow">{ed.stat}</p>
                    <p className="font-mono text-[10px] text-faint mt-1">{ed.statLabel}</p>
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
