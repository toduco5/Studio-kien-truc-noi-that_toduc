import { useState } from "react";
import { studioName, studioTagline } from "../data/content";
import "./Header.css";

export default function Header({ activeSection }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "#hero" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Dự án", href: "#projects" },
    { label: "Quy trình", href: "#process" },
    { label: "Đội ngũ", href: "#team" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className={`header ${open || activeSection !== "hero" ? "header--solid" : ""} ${open ? "header--open" : ""}`}>
      <div className="header__inner">
        <a href="#hero" className="header__logo">
          <span className="header__logo-text">{studioName}</span>
          <span className="header__logo-sub">{studioTagline}</span>
        </a>
        <nav className={`header__nav ${open ? "header__nav--open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`header__nav-link ${activeSection === item.href.replace("#", "") ? "header__nav-link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="header__cta" onClick={() => setOpen(false)}>
            Đặt lịch tư vấn
          </a>
        </nav>
        <button
          className="header__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${open ? "hamburger--open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}