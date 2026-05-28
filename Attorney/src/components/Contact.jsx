import { useState } from 'react'
import { site } from '../data/site'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()

    if (!WEB3FORMS_KEY) {
      setStatus('error')
      setErrorMsg('Chưa cấu hình API key. Vui lòng đặt VITE_WEB3FORMS_KEY trong file .env.')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: `${site.brand} – Đặt lịch tư vấn`,
          subject: form.subject
            ? `[${site.brand}] ${form.subject} – ${form.name}`
            : `[${site.brand}] Yêu cầu tư vấn từ ${form.name}`,
          name: form.name,
          phone: form.phone,
          email: form.email,
          field_subject: form.subject,
          message: form.message,
          replyto: form.email || undefined,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Gửi yêu cầu thất bại. Vui lòng thử lại.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Không thể kết nối tới máy chủ. Vui lòng kiểm tra mạng và thử lại.')
    }
  }

  const sending = status === 'sending'

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
              <strong>Hotline / Zalo</strong>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>Giờ làm việc</strong>
              <span>{site.hours}</span>
            </li>
            <li>
              <strong>Thông tin doanh nghiệp</strong>
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="row">
            <label>
              <span>Họ và tên *</span>
              <input
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Nguyễn Văn A"
                disabled={sending}
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
                disabled={sending}
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
              disabled={sending}
            />
          </label>
          <label>
            <span>Lĩnh vực cần tư vấn</span>
            <input
              value={form.subject}
              onChange={update('subject')}
              placeholder="Ví dụ: Hôn nhân gia đình"
              disabled={sending}
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
              disabled={sending}
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={sending}
          >
            {sending ? 'Đang gửi…' : 'Gửi yêu cầu tư vấn'}
          </button>

          {status === 'sent' && (
            <p className="contact-sent">
              Đã nhận được yêu cầu của Quý khách. Chúng tôi sẽ liên hệ trong
              thời gian sớm nhất.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-error">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  )
}
