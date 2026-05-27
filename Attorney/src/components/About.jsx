import { useEffect, useState } from 'react'
import { lawyers } from '../data/lawyers'

const SLIDE_INTERVAL = 3000

export default function About() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % lawyers.length)
    }, SLIDE_INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused])

  const goTo = (i) =>
    setIndex(((i % lawyers.length) + lawyers.length) % lawyers.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Về chúng tôi</p>
          <h2>
            Đội ngũ <span className="accent">Luật sư & Chuyên gia pháp lý</span>
          </h2>
          <p className="section-sub">
            Chuyên nghiệp – Bản lĩnh – Tận tâm.
          </p>
        </div>

        <div
          className="lawyer-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="slider-arrow slider-arrow-prev"
            onClick={prev}
            aria-label="Luật sư trước"
            type="button"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="lawyer-slides">
            {lawyers.map((l, i) => (
              <article
                key={l.id}
                className={`lawyer-slide ${i === index ? 'is-active' : ''}`}
                aria-hidden={i !== index}
              >
                <div className="lawyer-media">
                  <div className="lawyer-frame">
                    {l.photo ? (
                      <img
                        src={l.photo}
                        alt={l.name}
                        className="lawyer-photo"
                        loading="lazy"
                      />
                    ) : (
                      <div className="lawyer-initials" aria-hidden="true">
                        {l.initials}
                      </div>
                    )}
                  </div>
                </div>
                <div className="lawyer-content">
                  <h3>{l.name}</h3>
                  <p className="lawyer-role">{l.role}</p>
                  {l.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <button
            className="slider-arrow slider-arrow-next"
            onClick={next}
            aria-label="Luật sư kế tiếp"
            type="button"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="slider-dots" role="tablist">
          {lawyers.map((l, i) => (
            <button
              key={l.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={l.name}
              className={`slider-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
