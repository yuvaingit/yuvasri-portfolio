import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const BOOT_LINES = [
  { prompt: '~$', text: 'whoami' },
  { out: true, text: 'yuvasri_n — computer science engineer' },
  { prompt: '~$', text: './init_portfolio.sh' },
  { out: true, text: 'loading modules ......... ok' },
  { out: true, text: 'compiling profile ....... ok' },
  { out: true, text: 'render target: you' },
]

function useDeviceKind() {
  const [kind, setKind] = useState('laptop')
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setKind('phone')
      else if (w < 1024) setKind('tablet')
      else setKind('laptop')
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return kind
}

function BootScreen({ onEnter, compact }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [showCta, setShowCta] = useState(false)

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setShowCta(true), 300)
      return () => clearTimeout(t)
    }
    const delay = BOOT_LINES[lineIndex].out ? 260 : 420
    const t = setTimeout(() => setLineIndex((i) => i + 1), delay)
    return () => clearTimeout(t)
  }, [lineIndex])

  return (
    <div className={`h-full w-full bg-[#070A0F] flex flex-col ${compact ? 'p-3' : 'p-5 md:p-6'}`}>
      <div className="flex items-center gap-1.5 mb-3 md:mb-4 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#2b3242]" />
        <span className="w-2 h-2 rounded-full bg-[#2b3242]" />
        <span className="w-2 h-2 rounded-full bg-[#2b3242]" />
        <span className="ml-auto font-mono text-[9px] md:text-[10px] text-faint tracking-wider">portfolio.sh</span>
      </div>
      <div className="font-mono text-[10px] md:text-[13px] leading-relaxed text-muted flex-1 overflow-hidden">
        {BOOT_LINES.slice(0, lineIndex).map((line, i) =>
          line.out ? (
            <div key={i} className="text-[#5FA8FF]/80 pl-4">{line.text}</div>
          ) : (
            <div key={i} className="text-ink">
              <span className="text-accent mr-2">{line.prompt}</span>
              {line.text}
            </div>
          )
        )}
        {lineIndex < BOOT_LINES.length && (
          <span className="inline-block w-[6px] h-[12px] md:h-[14px] bg-accent align-middle animate-blink ml-1" />
        )}
      </div>

      <AnimatePresence>
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 md:mt-4 shrink-0"
          >
            <button
              onClick={onEnter}
              className="group focus-ring w-full flex items-center justify-between gap-3 rounded-md border border-accent-dim bg-accent/10 hover:bg-accent/20 transition-colors duration-300 px-3 py-2.5 md:px-4 md:py-3"
            >
              <span className="font-mono text-[10px] md:text-xs text-ink tracking-wide">View Yuvasri&apos;s Profile</span>
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-glow transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Laptop({ onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="animate-floaty"
      style={{ perspective: 1600 }}
    >
      <div className="relative mx-auto" style={{ width: 'min(62vw, 760px)' }}>
        {/* screen */}
        <div className="relative rounded-t-[14px] border border-line bg-[#0B0F16] p-[10px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
          <div className="rounded-[6px] overflow-hidden border border-line-soft" style={{ aspectRatio: '16 / 10' }}>
            <BootScreen onEnter={onEnter} />
          </div>
          <div className="absolute left-1/2 top-[2px] -translate-x-1/2 w-2 h-2 rounded-full bg-[#161C26]" />
        </div>
        {/* base */}
        <div className="relative h-[16px] rounded-b-[8px] bg-gradient-to-b from-[#12161D] to-[#0A0D12] border border-t-0 border-line">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[26%] h-[6px] rounded-b-[6px] bg-[#05070A]" />
        </div>
        <div className="mx-auto h-[6px] w-[80%] rounded-b-[10px] bg-[#05070A] border-x border-b border-line-soft" />
        {/* reflection */}
        <div className="mx-auto mt-6 h-16 opacity-20 blur-2xl" style={{ width: '70%', background: 'radial-gradient(ellipse at center, #4C8DFF 0%, transparent 70%)' }} />
      </div>
    </motion.div>
  )
}

function Tablet({ onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="animate-floaty"
    >
      <div className="mx-auto rounded-[22px] border border-line bg-[#0B0F16] p-3 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.85)]" style={{ width: 'min(74vw, 420px)' }}>
        <div className="rounded-[12px] overflow-hidden border border-line-soft" style={{ aspectRatio: '3 / 4' }}>
          <BootScreen onEnter={onEnter} />
        </div>
      </div>
    </motion.div>
  )
}

function Phone({ onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="animate-floaty"
    >
      <div className="mx-auto rounded-[30px] border border-line bg-[#0B0F16] p-2.5 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)]" style={{ width: 'min(78vw, 300px)' }}>
        <div className="rounded-[20px] overflow-hidden border border-line-soft relative" style={{ aspectRatio: '9 / 18.5' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0B0F16] rounded-b-xl z-10" />
          <BootScreen onEnter={onEnter} compact />
        </div>
      </div>
    </motion.div>
  )
}

export default function DeviceIntro({ onEnter }) {
  const kind = useDeviceKind()
  const [exiting, setExiting] = useState(false)
  const containerRef = useRef(null)

  const handleEnter = () => {
    setExiting(true)
    setTimeout(onEnter, 900)
  }

  return (
    <motion.div
      ref={containerRef}
      animate={exiting ? { opacity: 0, scale: 1.15, filter: 'blur(6px)' } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="relative min-h-screen w-full bg-void grain flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.12] blur-[120px]" style={{ background: 'radial-gradient(circle, #4C8DFF 0%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-grid bg-[size:56px_56px] opacity-[0.05]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #05070A 100%)' }} />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="eyebrow mb-8 md:mb-10 text-center"
      >
        // portfolio boot sequence
      </motion.p>

      {kind === 'laptop' && <Laptop onEnter={handleEnter} />}
      {kind === 'tablet' && <Tablet onEnter={handleEnter} />}
      {kind === 'phone' && <Phone onEnter={handleEnter} />}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-8 md:mt-10 font-mono text-[10px] text-faint text-center tracking-wide"
      >
        best viewed with sound off, curiosity on
      </motion.p>
    </motion.div>
  )
}
