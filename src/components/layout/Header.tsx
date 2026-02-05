import { NavLink, Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link
          className="header__logo"
          to="/"
          aria-label="Go to work"
        >
          <img
            src="/images/avatar.jpg"
            alt=""
            className="header__avatar"
          />
          <span className="header__logo-text">Andy Weir</span>
        </Link>
        <nav className="header__nav" aria-label="Main navigation">
          <NavLink
            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
            to="/"
            end
          >
            Work
          </NavLink>
          <NavLink
            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
            to="/stack"
          >
            Stack
          </NavLink>
          <div className="header__dropdown">
            <button className="header__nav-link header__dropdown-trigger">
              Projects
              <svg className="header__dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="header__dropdown-menu">
              <a
                href="https://v0-footballclubmap.vercel.app"
                className="header__dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Football Club Map
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
