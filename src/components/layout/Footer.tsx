import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__copyright">
          © {currentYear} Andy Weir
        </p>
        <nav className="footer__links" aria-label="Footer navigation">
          <a
            href="mailto:iamandyweir@gmail.com"
            className="footer__link"
          >
            Email
          </a>
          <a
            href="https://www.twitter.com/andyweirdesign/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/andyryanweir/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@andyweirdesign/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://dribbble.com/andyryanweir"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
