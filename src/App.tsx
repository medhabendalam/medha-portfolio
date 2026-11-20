import { useEffect, useState } from 'react'

const projects = [
  { n: '01', name: 'Smart Home Energy Manager', type: 'Java OOP · Individual academic project', stack: 'Java · Spring Boot · SQLite · JDBC · Maven', desc: 'A functional application for managing appliances, monitoring energy consumption, estimating electricity costs and surfacing energy-saving insights. Built with appliance management, consumption analytics, monthly comparisons and recommendations. Developed with some AI assistance.', tags: ['Java OOP', 'Energy analytics', 'AI-assisted'], links: [['Web edition','https://github.com/medhabendalam/smart-home-energy-manager-web'],['Console','https://github.com/medhabendalam/smart-home-energy-manager-console'],['Unified console','https://github.com/medhabendalam/smart-home-energy-manager-console-unified']], featured: true },
  { n: '02', name: 'Particle Field Renderer', type: 'Interactive 3D experience · Individual project', stack: 'JavaScript · Three.js · MediaPipe · WebGL · Vite', desc: 'An interactive 3D particle environment that responds to webcam-based hand tracking and gesture recognition. Developed iteratively, refining the experience through testing and feedback.', tags: ['Three.js', 'Computer vision', 'AI-assisted'], link: 'https://github.com/medhabendalam/Particle-Field-Renderer', featured: true },
  { n: '03', name: 'Smart Student Hub', type: 'Smart India Hackathon 2025 · Team project', stack: 'Ideation · Research · Documentation · Pitching', desc: 'Contributed to a centralized student achievement platform through ideation, research, documentation and pitching. The team reached the internal college round.', tags: ['SIH 2025', 'Teamwork', 'Research'] },
  { n: '04', name: 'Crowdsourced Civic Issue Reporting', type: 'Smart India Hackathon 2026 · Team project', stack: 'Ideation · Research · Documentation · Implementation', desc: 'Contributed to ideation, research, documentation, implementation and pitching for a crowdsourced civic issue reporting and tracking solution.', tags: ['SIH 2026', 'Civic technology', 'Collaboration'] },
]
const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) { nodes.forEach(node => node.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const featured = projects.filter(project => project.featured)
  const selected = projects.filter(project => !project.featured)
  return <>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu}>MB<span>.</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button>
      <nav className={menuOpen ? 'navigation open' : 'navigation'}>
        {[['About', '#about'], ['Work', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-resume" href="/Medha_Bendalam_Resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a>
      </nav>
    </header>
    <main id="home">
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE · AI &amp; ML</div>
          <h1>Curious by nature.<br /><span className="headline-accent">Creative</span> in approach<span className="lime">.</span></h1>
          <p className="hero-intro">I'm <strong>Medha Bendalam</strong>, a Computer Science and Engineering undergraduate at GITAM, exploring artificial intelligence, software development and data science through projects, collaboration and continuous learning.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="mailto:medhabendalam@gmail.com">Let's connect <Arrow /></a></div>
          <div className="hero-foot"><span>VISAKHAPATNAM, INDIA</span><span>OPEN TO LEARNING &amp; COLLABORATION</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract geometric illustration"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" /><div className="art-core"><span>M</span><i>MEDHA</i></div><div className="orbit-label label-top">IDEAS → IMPACT</div><div className="orbit-label label-bottom">LEARN / CREATE / REFINE</div><div className="art-cross cross-one" /><div className="art-cross cross-two" /></div>
        <div className="hero-index"><span>01 / 05</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>
      <section className="intro-strip section-shell reveal" id="about">
        <div className="section-kicker"><span>01</span> / A LITTLE ABOUT ME</div>
        <div className="intro-content"><h2>Building a strong foundation.<br /><em>Exploring meaningful ideas.</em></h2><div className="intro-detail"><p>I'm pursuing a B.Tech in Computer Science and Engineering (AI &amp; ML) at GITAM. My interests span artificial intelligence, machine learning, data science and software development.</p><p>I enjoy turning concepts into working projects, learning through experimentation and collaborating with others. I value thoughtful problem-solving, clear communication and improving a project through feedback.</p><div className="facts"><div><strong>9.13</strong><span>CGPA · AFTER SEM 2</span></div><div><strong>2029</strong><span>GRADUATION</span></div><div><strong>GITAM</strong><span>VISAKHAPATNAM</span></div></div></div></div>
      </section>
      <section className="projects-section section-shell" id="projects">
        <div className="section-heading reveal"><div><div className="section-kicker"><span>02</span> / FEATURED WORK</div><h2>Projects shaped by <em>curiosity.</em></h2></div><p>Selected work across software, interactive experiences and practical problem-solving.</p></div>
        <div className="featured-grid">{featured.map(project => <article className="featured-card reveal" key={project.n}><div className="featured-top"><span>{project.n} / FEATURED</span><span>↗</span></div><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.desc}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="featured-bottom"><span>{project.stack}</span><div className="project-actions">{project.links ? project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} <Arrow /></a>) : <a href={project.link} target="_blank" rel="noreferrer">Explore project <Arrow /></a>}</div></div></article>)}</div>
        <div className="section-heading selected-heading reveal"><div><div className="section-kicker"><span>03</span> / COLLABORATIVE WORK</div><h2>Ideas developed <em>together.</em></h2></div><p>Hackathon projects and collaborative experiences.</p></div>
        <div className="project-list">{selected.map(project => <article className="project-row reveal" key={project.n}><div className="project-number">{project.n}</div><div className="project-main"><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.desc}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-aside"><span className="project-stack">{project.stack}</span></div></article>)}</div>
      </section>
      <section className="toolkit-section section-shell" id="foundations">
        <div className="section-kicker"><span>04</span> / ACADEMIC FOUNDATION</div>
        <div className="toolkit-layout reveal"><h2>Learn the concepts.<br /><em>Apply them with purpose.</em></h2><div className="foundations-content"><p className="foundation-lead">My coursework and project work are helping me build a foundation in computer science while exploring practical applications.</p><div className="foundation-block"><span>RELEVANT COURSEWORK</span><p>Data Structures &amp; Algorithms · Object-Oriented Programming · Searching &amp; Sorting · Computer Organization and Architecture · Probability and Statistics</p></div><div className="foundation-block"><span>PROGRAMMING &amp; DATA</span><p>C · Java · Python · Data manipulation and analysis</p></div><div className="foundation-block"><span>AI-ASSISTED PROJECT EXPOSURE</span><p><strong>Tools:</strong> Git · GitHub · HTML · CSS · TouchDesigner</p><p><strong>Technologies:</strong> Spring Boot · SQLite · JDBC · Maven · JavaScript · Three.js · MediaPipe · WebGL · Vite · NumPy · Pandas · BeautifulSoup</p></div></div></div>
        <div className="toolkit-divider"><div className="section-kicker"><span>05</span> / EDUCATION &amp; RECOGNITION</div><div className="toolkit-grid"><div className="tool-item"><span>01 / DEGREE</span><strong>B.Tech · Computer Science &amp; Engineering</strong><p>Artificial Intelligence &amp; Machine Learning</p></div><div className="tool-item"><span>02 / INSTITUTION</span><strong>GITAM University</strong><p>Visakhapatnam · Expected 2029</p></div><div className="tool-item"><span>03 / ACADEMIC PERFORMANCE</span><strong>9.13 / 10 CGPA</strong><p>After Semesters 1 and 2</p></div><div className="tool-item"><span>04 / SCHOLARSHIP</span><strong>40% Merit-based</strong><p>Tuition scholarship</p></div></div></div>
        <div className="recognition reveal"><span className="section-kicker">HACKATHON</span><p><strong>Smart India Hackathon 2025</strong><span>Team reached the internal college round · Ideation, research, documentation and pitching</span></p></div>
      </section>
      <section className="beyond-section section-shell reveal" id="experience"><div className="section-kicker"><span>06</span> / LEADERSHIP &amp; ACTIVITIES</div><div className="beyond-layout"><h2>Creating spaces<br />to <em>learn together.</em></h2><div><p><strong>Coordinator — Workshops, Bootcamps &amp; SmartIDEAthon Domain</strong><br />Entrepreneurship Club (E-Club), GITAM · May 2025 – April 2026</p><p>Coordinated workshops, bootcamps and SmartIDEAthon activities; supported speaker outreach, resource-person coordination, session planning, participant engagement and event operations. Led and conducted Digital Marketing and Entrepreneurship workshops. Received a Certificate of Appreciation and Letter of Experience.</p><div className="interest-tags"><span>Workshop coordination</span><span>Speaker outreach</span><span>Event operations</span><span>Public speaking</span><span>Smart Ideathon volunteer</span></div></div></div></section>
      <section className="contact-section section-shell" id="contact"><div className="section-kicker"><span>07</span> / GET IN TOUCH</div><div className="contact-layout"><h2>Let's turn a good idea<br />into <em>something real.</em></h2><div className="contact-right"><p>Interested in AI, software development, data science or collaborating on a meaningful project? I'd be happy to connect.</p><a className="contact-email" href="mailto:medhabendalam@gmail.com">medhabendalam@gmail.com <Arrow /></a><div className="social-links"><a href="https://github.com/medhabendalam" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://linkedin.com/in/medha-bendalam-23a396309" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="/Medha_Bendalam_Resume.pdf" target="_blank" rel="noreferrer">Download resume <Arrow /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#home">MB<span>.</span></a><span>Designed &amp; built with intention.</span><span>© {new Date().getFullYear()} MEDHA BENDALAM</span></footer>
  </>
}
export default App
