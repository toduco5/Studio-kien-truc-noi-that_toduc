import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-text">KIẾN TRÚC</span>
            <span className="footer__logo-sub">Nội thất Cao Cấp</span>
          </a>
          <p className="footer__desc">Kiến tạo không gian vượt thời gian, kết nối vẻ đẹp với chức năng.</p>
        </div>
        <div className="footer__columns">
          <div className="footer__col">
            <h4>Dịch vụ</h4>
            <ul>
              <li><a href="#">Thiết kế kiến trúc</a></li>
              <li><a href="#">Nội thất cao cấp</a></li>
              <li><a href="#">Quản lý xây dựng</a></li>
              <li><a href="#">Tư vấn cảnh quan</a></li>
              <li><a href="#">Bản vẽ 3D & render</a></li>
              <li><a href="#">Tư vấn vật liệu</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Dự án</h4>
            <ul>
              <li><a href="#">Biệt thự</a></li>
              <li><a href="#">Căn hộ</a></li>
              <li><a href="#">Thương mại</a></li>
              <li><a href="#">Khách sạn</a></li>
              <li><a href="#">Nhà phố</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Công ty</h4>
            <ul>
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#">Đội ngũ</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__info">
            <address>
              88 Lê Lợi, Quận 1, TP.HCM<br />
              0909 123 456<br />
              hello@kientruc.studio
            </address>
          </div>
          <div className="footer__social">
            <span>Follow us:</span>
            <div className="social__links">
              <a href="#">📘 Facebook</a>
              <a href="#">📷 Instagram</a>
              <a href="#">📌 Pinterest</a>
              <a href="#">💼 LinkedIn</a>
              <a href="#">🎵 TikTok</a>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2026 KIẾN TRÚC Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}