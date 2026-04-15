import { site } from '../data/site'

const stats = [
  { num: '15+', label: 'Năm kinh nghiệm' },
  { num: '500+', label: 'Vụ việc đã xử lý' },
  { num: '8', label: 'Lĩnh vực hành nghề' },
  { num: '98%', label: 'Khách hàng hài lòng' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-media" aria-hidden="true">
          <div className="about-frame">
            <div className="about-frame-inner"></div>
          </div>
        </div>
        <div className="about-content">
          <p className="eyebrow">Về tôi</p>
          <h2>
            Luật sư <span className="accent">{site.brandShort}</span>
          </h2>
          <p>
            Tôi là luật sư hành nghề độc lập tại TP. Hồ Chí Minh, thành viên
            Đoàn Luật sư TP.HCM, với nhiều năm kinh nghiệm trong tư vấn pháp
            lý và tranh tụng. Tôi nhận tư vấn và đại diện cho cá nhân, hộ gia
            đình cũng như doanh nghiệp vừa và nhỏ.
          </p>
          <p>
            Triết lý hành nghề của tôi đặt trên nền tảng của sự{' '}
            <strong>chính trực</strong>, <strong>trách nhiệm</strong> và{' '}
            <strong>hiệu quả</strong> — như một "đình trụ" vững chắc mà khách
            hàng có thể tin cậy tựa vào trong mọi tình huống pháp lý.
          </p>

          <ul className="about-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
