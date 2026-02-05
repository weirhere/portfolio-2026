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
        </nav>
      </div>
    </header>
  )
}

export default Header
