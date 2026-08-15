import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-faint">© {new Date().getFullYear()} {profile.name}. Built with intent.</p>
        <p className="font-mono text-[11px] text-faint">designed &amp; engineered in dark mode</p>
      </div>
    </footer>
  )
}
