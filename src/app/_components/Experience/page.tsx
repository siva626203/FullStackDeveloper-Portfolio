'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const experience = [
    {
      company: 'Jasmine Global Process Solutions',
      role: 'Full Stack Developer [Full-Time]',
      period: 'Nov 2024 — Current',
      description: 'Led the development of a CRM platform using Next.js and MongoDB with integrated AWS S3 and CloudFront for media delivery. Implemented secure role-based access control and automated pipelines for lead management. Developed smart contract-enabled modules for blockchain-based integrations.',
    },
    {
      company: 'Riolabz',
      role: 'Junior NodeJS Developer [Full-Time]',
      period: 'May 2024 — Nov 2024',
      description: 'Built and documented scalable RESTful APIs with NestJS and Swagger. Integrated AWS Lambda and S3 for optimized backend performance. Supported frontend-backend collaboration and API testing.',
    },
    {
      company: 'NIGHATECH',
      role: 'Web3/MERN Stack Developer [Part-Time]',
      period: 'Nov 2022 — Nov 2023',
      description: 'Integrated ETH Blockchain with web3.js in a Next.js application to deploy and interact with ERC20 tokens. Developed REST APIs using Express and NodeJS with MongoDB backend. Conducted wallet connection via RainbowKit for decentralized applications.',
    },
  ]

  const techCategories = [
    {
      name: 'Frontend & UI',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML/CSS', 'UI/UX'],
    },
    {
      name: 'Backend & Cloud',
      skills: ['Node.js', 'NestJS', 'Express', 'Python', 'MongoDB', 'AWS S3', 'AWS Lambda'],
    },
    {
      name: 'Web3 & Blockchain',
      skills: ['Solidity', 'Rust', 'Ethereum', 'Web3.js', 'RainbowKit', 'ERC20 / ERC721'],
    },
    {
      name: 'Tools & Services',
      skills: ['Git/GitHub', 'GitLab', 'Jest', 'Swagger', 'Razorpay', 'SendGrid', 'Pega'],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use fromTo to guarantee the final state is opacity 1
      gsap.fromTo('.section-title-exp', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.section-title-exp',
            start: 'top bottom-=100', // Trigger earlier
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      )

      gsap.fromTo('.exp-item',
        { x: -30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.exp-item',
            start: 'top bottom-=50',
          },
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }
      )

      gsap.fromTo('.tech-card',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top bottom-=50',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
    }, sectionRef)

    // Layout shift fallback
    const timer = setTimeout(() => ScrollTrigger.refresh(), 500)
    return () => {
      clearTimeout(timer)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="section-title-exp text-4xl md:text-6xl font-bold tracking-tight mb-20">
          Experience<span className="text-zinc-600">.</span>
        </h2>

        <div className="flex flex-col gap-24 relative">
          {/* Experience Timeline */}
          <div className="w-full relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800" />
            
            <div className="flex flex-col gap-12">
              {experience.map((item, index) => (
                <div key={index} className="exp-item relative pl-8 md:pl-24 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-white group-hover:scale-150 transition-all duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">{item.company}</h3>
                    <span className="text-sm text-zinc-500 font-mono tracking-wide mt-1 md:mt-0">{item.period}</span>
                  </div>
                  <h4 className="text-lg text-zinc-400 mb-4 font-medium">{item.role}</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm md:text-base max-w-3xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Categories */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-8 text-zinc-100">Tech Stack</h3>
            <div className="tech-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((category, index) => (
                <div key={index} className="tech-card bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-600 transition-colors duration-500">
                  <h4 className="text-sm tracking-widest text-zinc-500 uppercase font-bold mb-5 pb-4 border-b border-zinc-800">{category.name}</h4>
                  <div className="flex flex-col gap-3">
                    {category.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-2 text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}