import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import ResumeButton from '../resume/ResumeButton'
import './Header.css'

interface HeaderProps {
  breadcrumb?: string
}

function Header({ breadcrumb }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setIsProjectsOpen(false)
  }, [location.pathname])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left">
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
          {breadcrumb && (
            <span className="header__breadcrumb">
              <span className="header__breadcrumb-sep" aria-hidden="true">/</span>
              <span className="header__breadcrumb-text">{breadcrumb}</span>
            </span>
          )}
        </div>
        {breadcrumb ? (
          <Link to="/" className="header__back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>
        ) : (
          <>
            <button
              className="header__menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="main-nav"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`header__menu-icon ${isMenuOpen ? 'header__menu-icon--open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <nav
              id="main-nav"
              className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
              aria-label="Main navigation"
            >
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
                <button className="header__nav-link header__dropdown-trigger header__dropdown-trigger--desktop">
                  Side Projects
                  <svg className="header__dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className={`header__nav-link header__dropdown-trigger header__dropdown-trigger--mobile ${isProjectsOpen ? 'header__dropdown-trigger--open' : ''}`}
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  aria-expanded={isProjectsOpen}
                >
                  Projects
                  <svg className="header__dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={`header__dropdown-menu ${isProjectsOpen ? 'header__dropdown-menu--open' : ''}`}>
                  <a
                    href="https://footballmap.andyryanweir.com"
                    className="header__dropdown-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Football Map
                  </a>
                </div>
              </div>
              <ResumeButton />
            </nav>
            {isMenuOpen && (
              <div
                className="header__backdrop"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
            )}
          </>
        )}
      </div>
    </header>
  )
}

export default Header
