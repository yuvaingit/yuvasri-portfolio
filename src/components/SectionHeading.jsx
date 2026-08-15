import { motion } from 'framer-motion'

export default function SectionHeading({ index, label, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <p className="eyebrow mb-3">
        <span className="bracket">[{index}]</span> {label}
      </p>
      <h2 className="section-heading text-3xl md:text-[2.6rem] text-ink">{title}</h2>
      {description && <p className="mt-4 text-muted text-[15px] leading-relaxed max-w-xl">{description}</p>}
    </motion.div>
  )
}
