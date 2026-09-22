import "./Testimonials.css";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">Cá nhân hóa từ khách hàng</h2>
        <div className="testimonials__slider">
          <div className="slide__track">
            {testimonials.map((t, i) => (
              <div key={i} className="slide__card">
                <p className="slide__text">{t.text}</p>
                <div className="slide__author">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="author__image"
                  />
                  <div className="author__details">
                    <h4 className="author__name">{t.name}</h4>
                    <p className="author__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="slide__prev">←</button>
          <button className="slide__next">→</button>
        </div>
      </div>
    </section>
  );
}