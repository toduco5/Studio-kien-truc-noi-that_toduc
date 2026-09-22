import "./CTA.css";
import { cta } from "../data/content";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">{cta.title}</h2>
          <p className="cta__subtitle">{cta.subtitle}</p>
          <form className="cta__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                name="fullname"
                placeholder="Họ và tên"
                required
              />
            </div>
            <div className="form__group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form__group">
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                required
              />
            </div>
            <div className="form__group">
              <select name="projectType" required>
                <option value="" disabled>Loại công trình</option>
                <option value="biet-thu">Biệt thự</option>
                <option value="can-ho">Căn hộ</option>
                <option value="thuong-mai">Thương mại</option>
                <option value="kha-ch-san">Khách sạn</option>
              </select>
            </div>
            <div className="form__group">
              <textarea
                name="description"
                placeholder="Mô tả dự án của bạn"
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary">
              {cta.button}
            </button>
          </form>
          <div className="cta__success" style={{ display: "none" }}>
            <p>Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  if (form.checkValidity()) {
    form.style.display = "none";
    const successMsg = document.querySelector(".cta__success");
    if (successMsg) successMsg.style.display = "block";
  }
  form.reportValidity();
}