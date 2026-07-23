import profileImg from '../assets/profile.jpg'

const experiences = [
  ['2025 — Present', 'Independent Full Stack Developer', 'Freelance & project-based', 'Architecting secure applications with Java, Spring Boot, and React.'],
  ['2024', 'Java Full Stack Developer Intern', 'Kapil IT Skill Hub, Hyderabad', 'Built enterprise applications, REST APIs, and optimized SQL reporting.'],
  ['2023', 'AI & ML Intern', 'Next Hub Technologies', 'Worked on data preprocessing, exploratory analysis, and Python tooling.'],
]

const projects = [
  ['Secure E2EE Burner Chat', 'A privacy-first, real-time messaging experience with client-side encryption and zero server-side logs.', ['React', 'Node.js', 'Socket.io', 'MongoDB']],
  ['Smart Irrigation System', 'An IoT-led irrigation system using predictive modelling to reduce water waste.', ['Python', 'Arduino', 'MySQL', 'REST API']],
  ['Enterprise Applications', 'Three full-stack systems built with optimized schemas, APIs, and rigorous testing.', ['Java', 'Spring MVC', 'MySQL', 'REST APIs']],
]

const skills = {
  Core: 'Java, Python, JavaScript, TypeScript, SQL',
  Backend: 'Spring Boot, Hibernate, Node.js, REST APIs, JWT',
  Frontend: 'React, HTML, CSS, responsive web design',
  Data: 'MySQL, MongoDB, query optimisation, schema design',
  Tools: 'Git, GitHub, Maven, Docker, AWS',
  Focus: 'Real-time systems, encryption, microservices',
}

function MinimalPortfolio() {
  return <>
    <section className="container hero" id="home">
      <div><p className="eyebrow">Full stack developer · India</p><h1>Surendra<br />Madduri.</h1><p className="hero-copy">I build thoughtful, reliable web applications with Java, Spring Boot, and React.</p><div className="hero-actions"><a className="button button--dark" href="#projects">Selected work</a><a className="button" href="mailto:surendramadduri665@gmail.com">Get in touch</a></div></div>
      <img className="avatar" src={profileImg} alt="Surendra Madduri" />
    </section>

    <section className="section" id="about"><div className="container"><p className="eyebrow">About</p><p className="about-copy">A full-stack developer focused on simple, scalable systems. I enjoy translating complex requirements into useful products, then improving them through careful performance and quality work.</p></div></section>

    <section className="section" id="experience"><div className="container"><p className="eyebrow">Experience</p><h2 className="section-title">A practical path through software.</h2><div className="list">{experiences.map(([period, role, company, summary]) => <article className="list-item" key={role}><div className="list-meta">{period}<br />{company}</div><div><h3>{role}</h3><p>{summary}</p></div></article>)}</div></div></section>

    <section className="section" id="projects"><div className="container"><p className="eyebrow">Selected work</p><h2 className="section-title">Projects with purpose.</h2><div className="project-grid">{projects.map(([title, description, stack]) => <article className="project" key={title}><h3>{title}</h3><p>{description}</p><div className="project-stack">{stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><a className="text-link" target="_blank" rel="noreferrer" href="https://github.com/Surendra029">View GitHub <span>→</span></a></article>)}</div></div></section>

    <section className="section" id="skills"><div className="container"><p className="eyebrow">Capabilities</p><h2 className="section-title">A compact toolkit.</h2><div className="skills">{Object.entries(skills).map(([name, items]) => <div className="skill" key={name}><h3>{name}</h3><p>{items}</p></div>)}</div></div></section>

    <section className="section" id="achievements"><div className="container"><p className="eyebrow">Highlights</p><div className="metrics"><div className="metric"><strong>25%</strong><span>faster reporting queries</span></div><div className="metric"><strong>20%</strong><span>lower API latency</span></div><div className="metric"><strong>15%</strong><span>fewer deployment bugs</span></div><div className="metric"><strong>3+</strong><span>enterprise applications</span></div></div><div className="details"><div><h3>Education</h3><div className="details-item"><strong>B.Tech, Information Technology</strong><span>NRI Institute of Technology · 2021–2025</span></div><div className="details-item"><strong>Higher Secondary</strong><span>Akanksha Jr College · 2019–2021</span></div></div><div><h3>Certifications</h3><div className="details-item"><strong>Java Full Stack Development</strong><span>KIT Skill Hub · 2024</span></div><div className="details-item"><strong>Python Programming</strong><span>Intern Certify · 2023</span></div></div></div></div></section>

    <section className="section contact" id="contact"><div className="container"><p className="eyebrow">Contact</p><h2>Let’s make something useful.</h2><p className="muted">Available for full-time opportunities, freelance work, and thoughtful collaborations.</p><div className="contact-options"><a className="text-link" href="mailto:surendramadduri665@gmail.com">Email</a><a className="text-link" target="_blank" rel="noreferrer" href="https://linkedin.com/in/madduri-surendra-nath">LinkedIn</a><a className="text-link" target="_blank" rel="noreferrer" href="https://github.com/Surendra029">GitHub</a><a className="text-link" href="tel:+918096224590">+91 80962 24590</a></div></div></section>
  </>
}

export default MinimalPortfolio
