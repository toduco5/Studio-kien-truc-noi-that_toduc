import "./Team.css";
import { team } from "../data/content";

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <span className="section-tag">Đội ngũ</span>
        <h2 className="section-title">Các thành viên của đội ngũ</h2>
        <div className="team__grid">
          {team.map((t) => (
            <div key={t.name} className="team-member">
              <div className="member__avatar">
                <img src={t.image} alt={t.name} className="avatar__image" />
                <span className="avatar-initials">{t.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="member__info">
                <h4 className="member__name">{t.name}</h4>
                <p className="member__role">{t.role}</p>
                <p className="member__exp">{t.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}