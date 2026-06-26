'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      })
      gsap.from('.nav-link', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1,
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.from('.mobile-link', {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      })
    }
  }, [isOpen])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[60] bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold tracking-tight hover:text-zinc-300 transition-colors duration-300">
          SIVAKUMAR<span className="text-zinc-600">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-zinc-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-[70] relative"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black/98 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="mobile-link text-3xl font-light text-zinc-300 hover:text-white transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}