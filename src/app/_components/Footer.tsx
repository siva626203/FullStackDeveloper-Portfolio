import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800/50 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-tight">SIVAKUMAR</span>
          <span className="text-zinc-700">·</span>
          <p className="text-xs text-zinc-600">
            © {currentYear} All rights reserved.
          </p>
        </div>
        <Link
          href="#home"
          className="text-xs text-zinc-600 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
        >
          Back to top
          <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </Link>
      </div>
    </footer>
  )
}
