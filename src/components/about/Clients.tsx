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
              <span className="clients__name">{client.name}</span>
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
