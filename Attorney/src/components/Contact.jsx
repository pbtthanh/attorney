import { useState } from 'react'
import { site } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Liên hệ</p>
          <h2>Đặt lịch tư vấn</h2>
          <p>
            Gửi yêu cầu của Quý khách qua biểu mẫu bên cạnh hoặc liên hệ trực
            tiếp qua các kênh dưới đây. Tôi sẽ phản hồi trong vòng 24 giờ làm
            việc.
          </p>

          <ul className="contact-list">
            <li>
              <strong>Địa chỉ tiếp khách</strong>
              <span>{site.address}</span>
            </li>
            <li>
              <strong>Điện thoại</strong>
              <a href={`tel:${site.phone.replace(/\./g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>Giờ làm việc</strong>
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="row">
            <label>
              <span>Họ và tên *</span>
              <input
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Nguyễn Văn A"
              />
            </label>
            <label>
              <span>Số điện thoại *</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="09xx xxx xxx"
              />
            </label>
          </div>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="email@example.com"
            />
          </label>
          <label>
            <span>Lĩnh vực cần tư vấn</span>
            <input
              value={form.subject}
              onChange={update('subject')}
              placeholder="Ví dụ: Hôn nhân gia đình"
            />
          </label>
          <label>
            <span>Nội dung *</span>
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={update('message')}
              placeholder="Mô tả ngắn gọn vấn đề của Quý khách..."
            />
          </label>

          <button type="submit" className="btn btn-primary btn-block">
            Gửi yêu cầu tư vấn
          </button>

          {sent && (
            <p className="contact-sent">
              Đã nhận được yêu cầu của Quý khách. Tôi sẽ liên hệ trong thời
              gian sớm nhất.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
