import "./Projects.css";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-tag">Dự án tiêu biểu</span>
        <h2 className="section-title">Dự án đã hoàn thành</h2>
        <p className="section-desc" >Xem dự án theo loại hình hoặc địa điểm</p>
        <div className="projects__filter">
          <button className="filter-btn active" data-filter="all">Tất cả</button>
          {["Kiến trúc nhà ở", "Thương mại", "Khách sạn", "Căn hộ", "Nhà phố", "Spa"].map((cat) => (
            <button key={cat} className="filter-btn" data-filter={cat}>
              {cat}
            </button>
          ))}
        </div>
        <div className="projects__grid" data-cat="all">
          {projects.map((p) => (
            <div
              key={p.title}
              className="project-card"
              data-category={p.category}
            >
              <div className="project-card__image">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="project-card__info">
                <span className="project-card__category">{p.category}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}