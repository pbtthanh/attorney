import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-inner">
        <p className="hero-eyebrow">Luật sư tư vấn pháp luật độc lập</p>
        <h1 className="hero-title">
          Đồng hành pháp lý <br />
          <span>vững như trụ đá</span>
        </h1>
        <p className="hero-slogan">"{site.slogan}"</p>
        <p className="hero-desc">
          Tôi là luật sư hành nghề độc lập, cung cấp dịch vụ tư vấn và tranh
          tụng cho cá nhân và doanh nghiệp — tận tâm, chuyên nghiệp và đặt
          lợi ích của khách hàng lên hàng đầu.
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
