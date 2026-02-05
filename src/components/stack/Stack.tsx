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
          </a>
        ))}
      </div>
    </section>
  )
}

export default Stack
