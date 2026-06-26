'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  const websiteProjects = [
    {
      title: 'Singapore Limousine',
      description: 'Premium limousine reservation platform featuring real-time booking, quotation, fleet management, international payment processing, and secure online checkout.',
      tech: ['Next.js', 'Node.js', 'Supabase', 'Stripe'],
      link: 'https://singaporelimousine.com',
    },
    {
      title: 'A Glance Limousine',
      description: 'City transfer booking platform with Google Places Autocomplete API and a secure checkout flow with Stripe integration.',
      tech: ['Next.js', 'React', 'Stripe', 'Google Maps API'],
      link: 'https://glancelimousine.com.sg/',
    },
    {
      title: 'Elyff Events',
      description: 'Event Management Company Website Provide a luxury experience for clients.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://elyffevents.com.sg/',
    },
    {
      title: 'Elyff Concierge',
      description: 'Singapore-based platform for managing and showcasing luxury concierge services, including booking and service management. Private Jet, Yacht, Limousine, and Event Management services are offered with a focus on high-end clientele.',
      tech: ['Next.js', 'Redux Thunk', 'Tailwind CSS', 'Framer Motion',"Vercel"],
      link: 'https://www.elyffconcierge.com',
    },
     {
      title: 'JSM Finance',
      description: 'A Village based small finance company website with a focus on providing financial services and solutions to the local community.',
      tech: ['Next.js', 'Redux Thunk', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://jsmfinancials.com/',
    },
    {
      title: 'Wavemaker',
      description: 'Deployed and interacted with Ethereum ERC20 smart contracts.',
      tech: ['Next.js', 'Web3.js', 'Ethereum', 'ERC20'],
      link: 'https://wavemaker-official.vercel.app',
    },
  ]

  const crmProjects = [
    {
      title: 'Jasmine CRM',
      description: 'CRM platform with integrated AWS S3 and CloudFront for media delivery, secure role-based access control, and automated pipelines.',
      tech: ['Next.js', 'Supabase', 'AWS S3', "ElectronJS"],
      link: '#',
    },
    {
      title: 'JSMFinance CRM',
      description: 'Comprehensive financial CRM system for managing client portfolios, automated reporting, and secure financial data tracking.',
      tech: ["Vite",'ReactJS', 'NestJS', 'Supabase', 'ElectronJS'],
      link: '#',
    },
    {
      title: 'Glancelimo CRM',
      description: 'Full-featured CRM solution featuring booking pipeline, automated scheduling, customer communications, and fleet reporting tools.',
      tech: ["Vite",'ReactJS', 'NestJS', 'Supabase', 'ElectronJS'],
      link: '#',
    },
    {
      title: 'Varam Dental CRM',
      description: 'Healthcare CRM designed for dental clinics to manage patient appointments, treatment histories, and automated reminders.',
      tech: ['ReactJS', 'NestJS', 'MongoDB', 'ElectronJS'],
      link: '#',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.section-title-proj', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.section-title-proj',
            start: 'top bottom-=100',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      )

      gsap.fromTo('.project-card-web', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.web-grid',
            start: 'top bottom-=50',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      )

      gsap.fromTo('.crm-section-label', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.crm-section-label',
            start: 'top bottom-=50',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        }
      )

      gsap.fromTo('.project-card-crm', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.crm-grid',
            start: 'top bottom-=50',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
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
    <section ref={sectionRef} id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title-proj text-4xl md:text-6xl font-bold tracking-tight mb-16">
          Projects<span className="text-zinc-600">.</span>
        </h2>

        {/* Websites Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-[0.25em] text-zinc-500 uppercase font-medium">Websites</span>
            <span className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-700 font-mono">{websiteProjects.length} projects</span>
          </div>
          <div className="web-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {websiteProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                className="project-card-web group bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-500 transition-all duration-500 hover:-translate-y-1 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <svg className="w-7 h-7 text-zinc-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <svg className="w-4 h-4 text-zinc-700 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.description}</p>
                <div className="mt-auto">
                  <h4 className="text-[10px] font-bold text-zinc-600 mb-2 tracking-wider">TECH STACK</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-500 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CRM Systems Section */}
        <div>
          <div className="crm-section-label flex items-center gap-4 mb-10">
            <span className="text-xs tracking-[0.25em] text-zinc-500 uppercase font-medium">CRM Systems</span>
            <span className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-700 font-mono">{crmProjects.length} projects</span>
          </div>
          <div className="crm-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {crmProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                className="project-card-crm group bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-500 transition-all duration-500 hover:-translate-y-1 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <svg className="w-7 h-7 text-zinc-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                  <svg className="w-4 h-4 text-zinc-700 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.description}</p>
                <div className="mt-auto">
                  <h4 className="text-[10px] font-bold text-zinc-600 mb-2 tracking-wider">TECH STACK</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-500 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}