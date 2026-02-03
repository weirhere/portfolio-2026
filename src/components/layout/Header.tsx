import './Header.css'

type View = 'work' | 'about' | 'stack'

interface HeaderProps {
  currentView: View
  onViewChange: (view: View) => void
}

function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container container">
        <button
          className="header__logo"
          onClick={() => onViewChange('work')}
          aria-label="Go to work"
        >
          <img
            src="/images/avatar.jpg"
            alt=""
            className="header__avatar"
          />
          Andy Weir
        </button>
        <nav className="header__nav" aria-label="Main navigation">
          <button
            className={`header__nav-link ${currentView === 'work' ? 'header__nav-link--active' : ''}`}
            onClick={() => onViewChange('work')}
            aria-current={currentView === 'work' ? 'page' : undefined}
          >
            Work
          </button>
          <button
            className={`header__nav-link ${currentView === 'about' ? 'header__nav-link--active' : ''}`}
            onClick={() => onViewChange('about')}
            aria-current={currentView === 'about' ? 'page' : undefined}
          >
            About
          </button>
          <button
            className={`header__nav-link ${currentView === 'stack' ? 'header__nav-link--active' : ''}`}
            onClick={() => onViewChange('stack')}
            aria-current={currentView === 'stack' ? 'page' : undefined}
          >
            Stack
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
