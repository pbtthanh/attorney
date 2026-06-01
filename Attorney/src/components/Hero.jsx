import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-inner">
        <p className="hero-eyebrow">{site.brand}</p>
        <h1 className="hero-title">Đồng hành pháp lý tin cậy</h1>
        <p className="hero-slogan">"{site.slogan}"</p>
        <p className="hero-desc">
          Với đội ngũ Luật sư, Chuyên gia pháp lý chuyên nghiệp, có kinh
          nghiệm thực chiến, chúng tôi tự tin mang lại cho khách hàng những
          giải pháp tối ưu nhất.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Đặt lịch tư vấn
          </a>
          <a href="#services" className="btn btn-ghost">
            Xem dịch vụ
          </a>
        </div>
      </div>
    </section>
  )
}
