import { useState } from 'react'
import { site } from '../data/site'
import logo from '../assets/logo.jpg'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img src={logo} alt={`${site.brand} logo`} />
          </span>
          <span className="brand-text">
            <strong>{site.brand}</strong>
            <span>{site.tagline}</span>
          </span>
        </a>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
