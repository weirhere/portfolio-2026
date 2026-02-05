import { ExperienceData } from '../../types'
import experienceData from '../../data/experience.json'
import './Experience.css'

function formatDate(dateString: string): string {
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function Experience() {
  const { title, positions } = experienceData as ExperienceData

  return (
    <section className="experience">
      <h2 className="experience__title">{title}</h2>
      <ul className="experience__list">
        {positions.map((position) => (
          <li key={position.id + position.startDate} className="experience__item">
            <a
              href={position.url}
              target="_blank"
              rel="noopener noreferrer"
              className="experience__link"
            >
              <div className="experience__date">
                <span>{formatDate(position.startDate)}</span>
                <span className="experience__date-separator">—</span>
                <span>
                  {position.endDate ? formatDate(position.endDate) : (
                    <span className="experience__current">Current</span>
                  )}
                </span>
              </div>
              <div className="experience__content">
                {position.logo && (
                  <img
                    src={position.logo}
                    alt={`${position.company} logo`}
                    className="experience__logo"
                  />
                )}
                <div className="experience__details">
                  <h3 className="experience__role">{position.role}</h3>
                  <p className="experience__company">{position.company}</p>
                  {position.description && (
                    <p className="experience__description">{position.description}</p>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
