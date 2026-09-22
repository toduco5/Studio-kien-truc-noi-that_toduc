import "./Process.css";
import { process } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <span className="section-tag">Quy trình làm việc</span>
        <h2 className="section-title">Từ ý tưởng đến bàn giao</h2>
        <p className="section-desc">Quy trình từng bước để đảm bảo dự án diễn ra suôn sẻ</p>
        <div className="process__steps">
          {process.map((step) => (
            <div key={step.step} className="step-item">
              <span className="step-number">{step.step}</span>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}