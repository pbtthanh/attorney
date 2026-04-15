const posts = [
  {
    title: 'Những điểm mới của Luật Đất đai 2024 doanh nghiệp cần lưu ý',
    date: '12/03/2026',
    tag: 'Đất đai',
    excerpt:
      'Tổng hợp các quy định mới về cấp giấy chứng nhận, thu hồi đất, bồi thường và tác động đến các dự án bất động sản đang triển khai.',
  },
  {
    title: 'Hợp đồng lao động điện tử — hiệu lực và rủi ro pháp lý',
    date: '28/02/2026',
    tag: 'Lao động',
    excerpt:
      'Phân tích giá trị pháp lý của hợp đồng lao động điện tử, cơ chế ký số, lưu trữ và tranh chấp thường gặp trong thực tiễn.',
  },
  {
    title: 'Hướng dẫn xử lý tranh chấp hợp đồng thương mại quốc tế',
    date: '15/02/2026',
    tag: 'Thương mại',
    excerpt:
      'Lựa chọn luật áp dụng, cơ quan giải quyết tranh chấp và các điều khoản trọng yếu cần có trong hợp đồng thương mại quốc tế.',
  },
]

export default function News() {
  return (
    <section id="news" className="news">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Tin tức & Bài viết</p>
          <h2>Cập nhật pháp luật</h2>
          <p className="section-sub">
            Phân tích pháp lý, bình luận văn bản và tư vấn thực tiễn từ đội
            ngũ luật sư của chúng tôi.
          </p>
        </div>

        <div className="news-grid">
          {posts.map((p) => (
            <article key={p.title} className="news-card">
              <div className="news-media" aria-hidden="true">
                <span className="news-tag">{p.tag}</span>
              </div>
              <div className="news-body">
                <time>{p.date}</time>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <a href="#" className="news-link">
                  Đọc tiếp →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
