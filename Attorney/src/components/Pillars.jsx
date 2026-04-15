const pillars = [
  {
    title: 'Chuyên nghiệp trong tư vấn',
    desc: 'Phân tích pháp lý sâu, đưa ra phương án tối ưu dựa trên dữ kiện thực tế và quy định pháp luật hiện hành.',
    icon: (
      <path
        d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M14 4v6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Bản lĩnh trong tranh tụng',
    desc: 'Tham gia tố tụng tại mọi cấp xét xử; bảo vệ quyền và lợi ích hợp pháp của khách hàng đến cùng.',
    icon: (
      <path
        d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z M9 12l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: 'Tận tâm trong đồng hành',
    desc: 'Đặt khách hàng ở trung tâm — lắng nghe, chủ động cập nhật và đồng hành dài hạn qua mọi giai đoạn.',
    icon: (
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container pillars-grid">
        {pillars.map((p) => (
          <article key={p.title} className="pillar">
            <span className="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">{p.icon}</svg>
            </span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
