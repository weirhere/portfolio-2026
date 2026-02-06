import { ClientsData } from '../../types'
import clientsData from '../../data/clients.json'
import './Clients.css'

function Clients() {
  const { title, clients } = clientsData as ClientsData

  return (
    <section className="clients">
      <h2 className="clients__title">{title}</h2>
      <ul className="clients__grid">
        {clients.map((client) => (
          <li key={client.name} className="clients__item">
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="clients__link"
            >
              <span className="clients__header">
                <span className="clients__name">{client.name}</span>
                <svg className="clients__external-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5.25 2.625H3.5C3.01675 2.625 2.625 3.01675 2.625 3.5V10.5C2.625 10.9832 3.01675 11.375 3.5 11.375H10.5C10.9832 11.375 11.375 10.9832 11.375 10.5V8.75M8.75 2.625H11.375M11.375 2.625V5.25M11.375 2.625L6.125 7.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {client.industry && (
                <span className="clients__industry">{client.industry}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Clients
