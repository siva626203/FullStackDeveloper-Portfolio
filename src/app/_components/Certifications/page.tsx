'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HackerRank from '../../../images/hackerrank.png'
import GreatLearning from '../../../images/GreatLearning.jpg'
import Mimo from '../../../images/mimo.jpg'
import Oasis from '../../../images/oasis.jpeg'
import Skillup from '../../../images/skillup.png'
import SIVAKUMAR from '../../../images/SIVAKUMAR.jpg'

import Sololearn from '../../../images/sololearn.jpeg'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Certification() {
  const sectionRef = useRef<HTMLElement>(null)

  const certifications = [
    { title: 'Bachelor of Science in IT', org: 'Sri Kaliswari College (GPA: 7.05/10.0)', image: SIVAKUMAR },
    { title: 'Frontend Developer (React)', org: 'HackerRank', image: HackerRank },
    { title: 'Web Development Internship', org: 'Oasis Infobyte', image: Oasis },
    { title: 'JavaScript', org: 'Sololearn', image: Sololearn },
    { title: 'Full Stack Development', org: 'Great Learning', image: GreatLearning },
    { title: 'Full Stack Developer', org: 'SkillUp', image: Skillup },
    { title: 'Web Development', org: 'Mimo', image: Mimo },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.section-title-cert', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.section-title-cert',
            start: 'top bottom-=100',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      )

      gsap.fromTo('.cert-card', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.cert-grid',
            start: 'top bottom-=50',
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        }
      )
    }, sectionRef)

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500)
    return () => {
      clearTimeout(timer)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="section-title-cert text-4xl md:text-6xl font-bold tracking-tight mb-16">
          Certifications<span className="text-zinc-600">.</span>
        </h2>

        <div className="cert-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-500 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-white transition-colors">{cert.title}</h3>
                <p className="text-xs text-zinc-500">{cert.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}