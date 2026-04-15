import { site } from '../data/site'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <strong className="footer-logo">{site.brand}</strong>
          <p>{site.tagline}</p>
          <p className="footer-slogan">"{site.slogan}"</p>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul>
            <li>{site.address}</li>
            <li>
              ĐT: <a href={`tel:${site.phone.replace(/\./g, '')}`}>{site.phone}</a>
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
          <h4>Hành nghề</h4>
          <ul>
            <li>{site.barLicense}</li>
            <li>{site.memberOf}</li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Điều khoản sử dụng</a>
            </li>
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
