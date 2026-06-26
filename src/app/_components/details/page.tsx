'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import profile from '../../../images/profile.png'

export default function Details() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 })

      tl.from('.hero-greeting', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.4')
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4')
      .from(bioRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4')
      .fromTo('.social-link', {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.3')
      .from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=1')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Typewriter effect
  useEffect(() => {
    let cancelled = false
    const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Blockchain Researcher', 'Web Application Builder']
    let roleIndex = 0
    const typeElement = document.getElementById('typewriter')

    async function sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function typeRole() {
      if (cancelled || !typeElement) return
      const role = roles[roleIndex % roles.length]

      for (let i = 0; i <= role.length; i++) {
        if (cancelled) return
        typeElement.textContent = role.slice(0, i)
        await sleep(80)
      }

      await sleep(2500)

      for (let i = role.length; i >= 0; i--) {
        if (cancelled) return
        typeElement.textContent = role.slice(0, i)
        await sleep(30)
      }

      await sleep(400)
      roleIndex++
      typeRole()
    }

    const timer = setTimeout(() => typeRole(), 2200)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-5">
          <p className="hero-greeting text-zinc-500 text-sm tracking-[0.3em] uppercase font-medium">
            Hello, I&apos;m
          </p>
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
            SIVA
            <br />
            <span className="text-zinc-500">KUMAR</span>
          </h1>
          <div ref={subtitleRef} className="flex items-center gap-3 mt-2">
            <span className="w-8 h-px bg-zinc-600" />
            <span id="typewriter" className="text-lg text-zinc-400 font-light" />
            <span className="w-[2px] h-5 bg-white cursor-blink" />
          </div>
          <p ref={bioRef} className="text-zinc-500 text-sm leading-relaxed max-w-md">
            A passionate Full Stack Developer with expertise in blockchain technology,
            MERN stack, and modern web applications. Currently building premium websites
            and CRM systems for global clients.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://www.linkedin.com/in/sivakumar-web3" target="_blank" rel="noopener noreferrer"
               className="social-link px-5 py-2.5 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/siva626203" target="_blank" rel="noopener noreferrer"
               className="social-link px-5 py-2.5 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.instagram.com/sivakumar_web3" target="_blank" rel="noopener noreferrer"
               className="social-link px-5 py-2.5 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://drive.google.com/file/d/1m60uCk8Jdl8lezQYNnGFy6wGc89Uo6s-/view?usp=sharing" target="_blank" rel="noopener noreferrer"
               className="social-link px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div ref={imageRef} className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-zinc-700/20 to-transparent rounded-full blur-2xl" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-zinc-900">
              <Image
                src={profile}
                alt="Sivakumar - Full Stack Developer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 border border-zinc-800/60 rounded-full" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-zinc-800/40 rounded-full" />
            <div className="absolute top-1/2 -right-10 w-2 h-2 bg-zinc-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
      </div>
    </section>
  )
}