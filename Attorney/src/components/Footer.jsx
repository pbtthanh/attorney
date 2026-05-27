import { site } from '../data/site'
import { services } from '../data/services'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <img src={logo} alt={`${site.brand} logo`} className="footer-logo-img" />
          <strong className="footer-logo">{site.brand}</strong>
          <p>{site.tagline}</p>
          <p className="footer-slogan">"{site.slogan}"</p>
          <p className="footer-motto">"{site.motto}"</p>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul>
            <li>
              Hotline / Zalo:{' '}
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Lĩnh vực</h4>
          <ul className="footer-links">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Thông tin doanh nghiệp</h4>
          <ul>
            <li>{site.brand}</li>
            <li>MSDN: {site.taxCode}</li>
            <li>Do {site.taxIssuer} cấp</li>
            <li>{site.memberOf}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {site.brand}. Mọi quyền được bảo lưu.
          </span>
        </div>
      </div>
    </footer>
  )
}
