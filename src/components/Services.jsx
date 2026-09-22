import "./Services.css";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <span className="section-tag">Dịch vụ</span>
        <h2 className="section-title">Gải pháp thiết kế toàn diện</h2>
        <p className="section-desc">Từ ý tưởng đến hiện thực hóa, chúng tôi đồng hành cùng bạn ở mọi giai đoạn.</p>
        <div className="services__grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-card__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="service-card__link">
                Tìm hiểu thêm →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}