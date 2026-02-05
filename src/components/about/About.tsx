import aboutData from '../../data/about.json'
import Experience from './Experience'
import Clients from './Clients'
import './About.css'

function About() {
  const { name, bio, email, links } = aboutData

  return (
    <section className="about container container--narrow">
      <header className="about__header">
        <h1 className="about__name">{name}</h1>
      </header>

      <div className="about__bio">
        {bio.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Experience />
      <Clients />

      <div className="about__contact">
        <h2 className="about__section-title">Get in Touch</h2>
        <a href={`mailto:${email}`} className="about__email link link--underline">
          {email}
        </a>
      </div>

      <nav className="about__links" aria-label="Social links">
        <h2 className="about__section-title">Elsewhere</h2>
        <ul className="about__link-list">
          {links.map(({ label, url }) => (
            <li key={label}>
              <a
                href={url}
                className="about__link link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default About
