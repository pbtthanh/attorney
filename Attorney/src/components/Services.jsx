import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Lĩnh vực hoạt động</p>
          <h2>Dịch vụ pháp lý toàn diện</h2>
          <p className="section-sub">
            Các lĩnh vực cốt lõi, đáp ứng nhu cầu pháp lý của khách hàng cá
            nhân và doanh nghiệp.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.id} className="service-card">
              <span className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d={s.icon}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="#contact" className="service-link">
                Tư vấn ngay
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
