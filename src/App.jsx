import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Sparkles,
  X,
  Youtube,
} from 'lucide-react';

const skills = [
  {
    title: 'Backend & .NET',
    icon: Server,
    items: ['C#', '.NET Core', 'ASP.NET Core', 'MVC', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React.js', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Data & Cloud',
    icon: Database,
    items: ['SQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Additional',
    icon: Sparkles,
    items: ['Python', 'C++', 'React Native', 'Visual Basic', 'COBOL', 'Git'],
  },
];

const experience = [
  {
    role: 'Software Developer',
    company: 'Louisiana Farm Bureau',
    location: 'Baton Rouge, LA',
    dates: 'Aug 2022 — Jul 2025',
    bullets: [
      'Developed, optimized, and maintained mission-critical enterprise applications using C#, .NET, and React.js.',
      'Designed and implemented scalable full-stack features within Agile sprint cycles.',
      'Modernized legacy system workflows by transitioning functionality into .NET Core architectures.',
      'Collaborated across teams to troubleshoot production issues, integrate workflows, and optimize database performance.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'LeNgineer',
    location: 'Titusville, FL',
    dates: 'Jun 2021 — May 2022',
    bullets: [
      'Developed responsive frontend components for a mobile application using React.js, Redux, and Tailwind CSS.',
      'Built a real-time messaging system and secure data retrieval pipelines using Firebase and MongoDB.',
      'Contributed to sprint delivery through peer code reviews, engineering collaboration, and team support.',
    ],
  },
];

const projects = [
  {
    name: 'Autonomous Drone',
    type: 'LSU Capstone Design',
    description:
      'Autonomous flight navigation and delivery system combining software, machine learning, and hardware-to-software communication.',
    stack: ['C++', 'Python', 'Machine Learning', 'Embedded Systems'],
  },
  {
    name: 'Enterprise Application Modernization',
    type: 'Professional Work',
    description:
      'Modernized legacy workflows into maintainable .NET Core architectures while improving reliability, integrations, and database performance.',
    stack: ['C#', '.NET Core', 'React.js', 'SQL', 'REST APIs'],
  },
  {
    name: 'Real-Time Messaging Platform',
    type: 'Engineering Internship',
    description:
      'Built responsive application features and real-time messaging capabilities backed by secure cloud data retrieval pipelines.',
    stack: ['React.js', 'Redux', 'Firebase', 'MongoDB'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            JBC<span>.</span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </nav>

          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />

          <div className="container hero-content">
            <div className="eyebrow fade-in">SOFTWARE DEVELOPER · BATON ROUGE, LA</div>
            <h1 className="fade-in delay-1">
              I build reliable software for <span>real-world problems.</span>
            </h1>
            <p className="hero-copy fade-in delay-2">
              I’m Jay Bautista Crisostomo, a full-stack developer with 3+ years of professional
              experience building and modernizing applications with C#, .NET, React, SQL, and REST APIs.
            </p>
            <div className="hero-actions fade-in delay-3">
              <a className="btn btn-primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="btn btn-secondary" href="mailto:crisostomojay@outlook.com">
                <Mail size={18} /> Contact me
              </a>
              <a className="btn btn-secondary" href="/Jay_Crisostomo_Resume.pdf" target="_blank" rel="noreferrer">
                Resume <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hero-stats fade-in delay-3">
              <div><strong>3+</strong><span>Years experience</span></div>
              <div><strong>.NET</strong><span>Enterprise systems</span></div>
              <div><strong>React</strong><span>Modern interfaces</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split-section">
            <div>
              <p className="section-kicker">ABOUT</p>
              <h2>Engineer mindset.<br />Product focus.</h2>
            </div>
            <div className="about-copy">
              <p>
                I’m a Computer Engineering graduate from Louisiana State University with a background
                spanning enterprise software, modern web development, production troubleshooting,
                database optimization, and legacy application modernization.
              </p>
              <p>
                I enjoy turning complicated workflows into clean, dependable software and working
                closely with teams to ship features that are useful, maintainable, and built to last.
              </p>
              <div className="meta-row">
                <span><MapPin size={17} /> Baton Rouge, Louisiana</span>
                <span><GraduationCap size={17} /> LSU · B.S. Computer Engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">TECHNICAL SKILLS</p>
                <h2>Tools I use to ship.</h2>
              </div>
              <p>Full-stack development with a strong Microsoft/.NET foundation.</p>
            </div>

            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }) => (
                <article className="skill-card" key={title}>
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <div className="tags">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">EXPERIENCE</p>
                <h2>Professional experience.</h2>
              </div>
              <BriefcaseBusiness size={34} className="heading-icon" />
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.role}`}>
                  <div className="timeline-date">{job.dates}</div>
                  <div className="timeline-body">
                    <div className="timeline-title-row">
                      <div>
                        <h3>{job.role}</h3>
                        <p>{job.company} · {job.location}</p>
                      </div>
                    </div>
                    <ul>
                      {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="projects">
          <div className="container">
            <div className="section-heading section-heading--dark">
              <div>
                <p className="section-kicker">SELECTED WORK</p>
                <h2>Projects & engineering work.</h2>
              </div>
              <p>Examples of the systems, platforms, and technical problems I’ve worked on.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className="project-index">0{index + 1}</div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tags tags-dark">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container education-card">
            <div className="icon-box icon-box--large"><GraduationCap size={30} /></div>
            <div>
              <p className="section-kicker">EDUCATION</p>
              <h2>Louisiana State University</h2>
              <p>Bachelor of Science in Computer Engineering · May 2022 · GPA: 3.2</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="section-kicker">LET’S BUILD SOMETHING</p>
              <h2>Looking for a developer<br />who can get things done?</h2>
              <p>
                I’m interested in software development opportunities where I can contribute across
                frontend, backend, APIs, data, and product delivery.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:crisostomojay@outlook.com">
                <Mail size={18} /> Email me
              </a>
              <a
                className="btn btn-secondary btn-secondary--dark"
                href="https://www.linkedin.com/in/jay-crisostomo-5562251a8/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                className="btn btn-secondary btn-secondary--dark"
                href="https://www.youtube.com/@notahacker30"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube size={18} /> YouTube
              </a>
              <a
                className="btn btn-secondary btn-secondary--dark"
                href="https://github.com/jayisback11"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Jay Bautista Crisostomo</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
