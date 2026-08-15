import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'
import photo from '../assets/yuvasri-photo.png'
import { profile, education } from '../data/resumeData'

export default function ProfileCard() {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
    setRevealed(false)
  }

  return (
    <div style={{ perspective: 1400 }} className="w-full max-w-[340px] mx-auto">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setRevealed(true)}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl border border-line bg-panel overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] cursor-pointer"
      >
        {/* backing layered cards for depth */}
        <div className="absolute inset-0 rounded-2xl border border-line-soft bg-charcoal translate-x-2 translate-y-3 -z-10" style={{ transform: 'translateZ(-40px)' }} />

        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={photo}
            alt={profile.name}
            style={{ transform: 'translateZ(30px)' }}
            className="w-full h-full object-cover"
            animate={{ scale: revealed ? 1.06 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-line bg-void/60 backdrop-blur px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-blink" />
            <span className="font-mono text-[9px] text-muted tracking-wide">open to work</span>
          </div>
        </div>

        <motion.div
          style={{ transform: 'translateZ(50px)' }}
          className="relative p-5 bg-panel"
        >
          <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
          <p className="font-mono text-[11px] text-accent-glow mt-0.5">{profile.role}</p>

          <motion.div
            initial={false}
            animate={{ height: revealed ? 'auto' : 0, opacity: revealed ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-line-soft space-y-2">
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <GraduationCap className="w-3.5 h-3.5 text-faint" />
                <span>{education[0].school}</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <MapPin className="w-3.5 h-3.5 text-faint" />
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <p className="text-center font-mono text-[10px] text-faint mt-3 tracking-wide">hover to explore</p>
    </div>
  )
}
