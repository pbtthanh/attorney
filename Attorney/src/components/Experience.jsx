import { experience, credentials } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Hồ sơ hành nghề</p>
          <h2>Kinh nghiệm & Chuyên môn</h2>
          <p className="section-sub">
            Hơn một thập kỷ hành nghề, được rèn giũa qua nhiều vụ việc đa
            lĩnh vực.
          </p>
        </div>

        <div className="experience-grid">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.period} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-body">
                  <span className="timeline-period">{e.period}</span>
                  <h3>{e.role}</h3>
                  <p className="timeline-place">{e.place}</p>
                  <p>{e.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="credentials">
            <h3>Chứng chỉ & Thành viên</h3>
            <ul>
              {credentials.map((c) => (
                <li key={c}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
