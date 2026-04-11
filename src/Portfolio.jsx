import { useState, useEffect } from 'react'

/* ——— Data ——— */
const PROFILE = {
  name: 'S.J. Karan',
  legalName: 'Jaya Shankar Karan',
  title: 'Software Engineering Student & Developer',
  institution: 'ICET',
  headline: 'Building robust software and leading development teams.',
  bio: "I'm a full-stack developer currently studying at ICET. With a background in project engineering, I focus on optimizing workflows and building scalable applications. I thrive in collaborative environments and love tackling complex, challenging problems because that’s where the real learning happens.",
}

const EXPERIENCE = [
  {
    id: 'lead-recruitiq',
    role: 'Project Co-Lead & Full-Stack Developer',
    timeline: 'Ongoing',
    project: 'RecruitIQ',
    description: 'Directing a team of 9 developers to build an AI-powered mock interview platform utilizing Angular and Spring Boot. Responsible for high-level system architecture, workflow optimization, and daily team coordination through high-pressure development cycles.',
    highlights: ['Mentoring 9 team members', 'Architecting AI data pipelines', 'Managing sprint deliverables']
  }
]

const CONTACT = {
  github: { label: 'GitHub', href: 'https://github.com/karan8639', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaya-shankar-karan-a780a32a1/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  email: { label: 'Gmail', href: 'mailto:karan26355@gmail.com', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
}

const TECH_STACK = [
  { name: 'Java', load: '95%', logo: 'https://cdn.simpleicons.org/openjdk/ffffff' },
  { name: 'Spring Boot', load: '90%', logo: 'https://cdn.simpleicons.org/springboot/ffffff' },
  { name: 'React', load: '88%', logo: 'https://cdn.simpleicons.org/react/22d3ee' },
  { name: 'Angular', load: '85%', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: '.NET', load: '80%', logo: 'https://cdn.simpleicons.org/dotnet/512BD4' },
  { name: 'MySQL', load: '92%', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
]

const PROJECTS = [
  {
    id: 'sovia',
    title: 'SoviaAtelier',
    description: 'A high-end Clothing Brand Point-of-Sale (POS) system focusing on luxury UI design and robust business logic. Ensures seamless operator flow.',
    tech: ['JavaFX', 'MySQL'],
    status: 'Completed',
    link: '#',
  },
  {
    id: 'recruitiq',
    title: 'RecruitIQ',
    description: 'An AI-powered Mock Interview Platform designed to automate CV analysis, predict candidate skill overlap, and provide actionable insights.',
    tech: ['Angular', 'Spring Boot', 'Gemini AI'],
    status: 'Team Lead',
    link: '#',
  },
  {
    id: 'finguard',
    title: 'FinGuard',
    description: 'A Fintech Risk-Scoring app built over a highly intensive 10-day sprint cycle. Focuses on investment tooling and financial compounding algorithms.',
    tech: ['Full-Stack Sprint'],
    status: '10-Day Sprint',
    link: '#',
  },
]

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

/* ——— Components ——— */

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-zinc-400 font-medium max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#22d3ee] to-[#e11d48] rounded-full" />
    </div>
  )
}

function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Subtle nav blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen bg-[#030305] text-zinc-300 font-sans selection:bg-[#22d3ee]/30 selection:text-white pb-20">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] top-[-100px] right-[-100px]" />
        <div className="glow-orb glow-orb-red w-[500px] h-[500px] bottom-[-200px] left-[-200px] opacity-10" />
      </div>

      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#030305]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToId('hero')}>
            <span className="text-lg font-black tracking-widest text-white">S.J. KARAN</span>
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#22d3ee]">Developer</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition duration-200"
              >
                {link.label}
              </button>
            ))}
            <a 
              href={CONTACT.github.href} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#030305] bg-white rounded-full hover:bg-[#22d3ee] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
            >
              Connect
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#030305]/95 backdrop-blur-2xl border-b border-white/10 py-4 px-6 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="text-left text-base font-medium text-zinc-300 hover:text-white py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 md:pt-0">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-[#22d3ee]/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]"></span>
                </span>
                <span className="text-xs font-mono tracking-wider text-[#a5f3fc] uppercase"> {PROFILE.title} </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Hi, I'm {PROFILE.name.split(' ')[0]} <br/>
                <span className="text-gradient-cyan">Software Builder</span>
              </h1>
              
              <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed mb-10">
                {PROFILE.headline} Fluent in transforming complex requirements into seamless digital experiences through code and effective collaboration.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={() => scrollToId('projects')} className="px-7 py-3.5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                  View Projects
                </button>
                <a href={CONTACT.linkedin.href} target="_blank" rel="noreferrer" className="px-7 py-3.5 glass-panel text-white font-bold rounded-lg hover:bg-white/5 transition-colors border border-white/10">
                  LinkedIn Profile
                </a>
              </div>

              {/* Socials minimal */}
              <div className="flex items-center gap-5 mt-14">
                {Object.values(CONTACT).map(social => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label={social.label}>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={social.icon}/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Picture */}
            <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2 transform transition-transform duration-700 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#22d3ee]/20 to-[#e11d48]/20 blur-xl z-0"></div>
                <img 
                  src="/hero.png" 
                  alt={PROFILE.name}
                  className="relative z-10 w-full h-full object-cover rounded-xl filter contrast-[1.05] brightness-95"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544256718-3b6102377319?q=80&w=800&auto=format&fit=crop' }}
                />
              </div>
            </div>
            
          </div>
        </section>


        {/* ABOUT & TECH SECTION */}
        <section id="about" className="py-20 md:py-32 scroll-mt-20 border-t border-white/5">
          <SectionHeading 
            title="About & Toolkit" 
            subtitle="Bridging the gap between conceptual engineering and robust software execution." 
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            <div className="glass-panel p-8 rounded-2xl border-white/5">
              <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-6">
                {PROFILE.bio}
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                My approach focuses on writing clean, maintainable code and fostering environments where developers can do their best work. When I'm not coding, you can find me researching system architectures or refining development workflows.
              </p>
            </div>
            
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {TECH_STACK.map(tech => (
                  <div key={tech.name} className="glass-panel group p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#22d3ee]/40 hover:bg-white/[0.04] transition-all duration-300">
                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0" />
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-white uppercase tracking-wider">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* EXPERIENCE & LEADERSHIP */}
        <section id="experience" className="py-20 md:py-32 scroll-mt-20 border-t border-white/5">
          <SectionHeading 
            title="Leadership & Experience" 
            subtitle="Real-world execution focusing on team dynamics and rapid delivery." 
          />
          
          <div className="mt-12">
            {EXPERIENCE.map(exp => (
              <div key={exp.id} className="glass-panel p-8 md:p-10 rounded-2xl border-l-[3px] border-l-[#e11d48] border-white/5 hover:bg-white/[0.03] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-[#a5f3fc] font-mono text-sm tracking-widest uppercase">{exp.project}</p>
                  </div>
                  <span className="inline-flex px-3 py-1 text-xs font-bold bg-white/10 text-white rounded-full h-fit">
                    {exp.timeline}
                  </span>
                </div>
                
                <p className="text-zinc-400 leading-relaxed max-w-3xl text-sm md:text-base mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300 bg-black/40 px-4 py-2 rounded-lg border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 md:py-32 scroll-mt-20 border-t border-white/5">
          <SectionHeading 
            title="Selected Projects" 
            subtitle="A showcase of systems engineered for performance, scale, and high-quality user experiences." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROJECTS.map(project => (
              <article key={project.id} className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col hover:border-[#22d3ee]/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#22d3ee] mb-4 border border-white/5 group-hover:bg-[#22d3ee]/10 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#e11d48] border border-[#e11d48]/20 bg-[#e11d48]/10 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a5f3fc] transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-400 flex-1 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono font-medium tracking-wider text-zinc-500 uppercase">
                      #{t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 font-medium">
            © {new Date().getFullYear()} {PROFILE.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href={CONTACT.github.href} className="text-zinc-500 hover:text-white transition">Github</a>
             <a href={CONTACT.linkedin.href} className="text-zinc-500 hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
