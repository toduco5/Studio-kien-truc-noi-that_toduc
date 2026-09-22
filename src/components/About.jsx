import "./About.css";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-tag">Giới thiệu</span>
        <h2 className="section-title">Về Studio KIẾN TRÚC</h2>
        <p className="section-desc">{about.description}</p>
        <div className="about__grid">
          <div className="about__values">
            {about.values.map((v, i) => (
              <div key={i} className="value-item">
                <span className="value-item__icon">{v.icon}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about__stats">
            {about.stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-item__number">{s.number}</span>
                <span className="stat-item__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}