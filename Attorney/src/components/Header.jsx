import { useState } from 'react'
import { site } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <path
                d="M24 4l18 8v10c0 11-7.6 19.5-18 22C13.6 41.5 6 33 6 22V12l18-8z"
                fill="url(#lg)"
              />
              <path
                d="M16 22h16M20 16l-4 6 4 6M28 16l4 6-4 6"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c5a572" />
                  <stop offset="100%" stopColor="#8a6b3b" />
                </linearGradient>
              </defs>
            </svg>
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
