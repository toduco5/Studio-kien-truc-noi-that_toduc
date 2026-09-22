import "./Hero.css";
import { hero } from "../data/content";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg"></div>
      <div className="hero__content">
        <span className="hero__tag">{hero.title}</span>
        <h1 className="hero__title">
          Kiến tạo <em>không gian</em> vượt thời gian
        </h1>
        <p className="hero__desc">{hero.description}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">{hero.cta}</a>
          <a href="#projects" className="btn btn--outline">{hero.secondCta}</a>
        </div>
      </div>
      <div className="hero__scroll">
        <div className="scroll-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}