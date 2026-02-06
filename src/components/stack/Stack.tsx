import stackData from '../../data/stack.json'
import ToolLogo from './ToolLogo'
import './Stack.css'

function Stack() {
  const { title, description, tools } = stackData

  return (
    <section className="stack container container--narrow">
      <header className="stack__header">
        <h1 className="stack__title">{title}</h1>
        <p className="stack__description">{description}</p>
      </header>

      <div className="stack__grid">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            className="stack__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ToolLogo name={tool.logo} />
            <div className="stack__item-info">
              <span className="stack__item-name">{tool.name}</span>
              <span className="stack__item-category">{tool.category}</span>
            </div>
            <svg className="stack__external-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5.25 2.625H3.5C3.01675 2.625 2.625 3.01675 2.625 3.5V10.5C2.625 10.9832 3.01675 11.375 3.5 11.375H10.5C10.9832 11.375 11.375 10.9832 11.375 10.5V8.75M8.75 2.625H11.375M11.375 2.625V5.25M11.375 2.625L6.125 7.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Stack
