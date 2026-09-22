# KIẾN TRÚC Studio

> Studio kiến trúc & nội thất cao cấp - Built with React + Vite

## 🚀 Chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy dev server

```bash
npm run dev
```

Dự án sẽ chạy tại `http://localhost:5173` (hoặc cổng trống tiếp theo).

### 3. Build production

```bash
npx vite build
```

Kết quả build sẽ trong thư mục `dist/`.

### 4. Preview build

```bash
npx vite preview
```

---

## 📦 Cài đặt thêm (đã hoàn tất)

Để chạy full project với Swiper slider, đã cài đặt:

```bash
npm install swiper
```

**Các package đã cài trong `package.json`:**
- `react` ^19.2.8
- `react-dom` ^19.2.8
- `swiper` ^14.2.0
- `@vitejs/plugin-react` ^4.3.4
- `vite` ^5.4.0

---

## 🛠️ Công nghệ sử dụng

| Tech | Version |
|------|---------|
| React | 19.x |
| Vite | 5.x |
| Swiper | 14.x |
| CSS | Custom Properties (Variables) |
| Fonts | Inter + Playfair Display (Google Fonts) |

---

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Header.jsx / Header.css
│   ├── Hero.jsx / Hero.css
│   ├── About.jsx / About.css
│   ├── Services.jsx / Services.css
│   ├── Projects.jsx / Projects.css
│   ├── Process.jsx / Process.css
│   ├── Team.jsx / Team.css       ← Avatar: ảnh dưới, initials trên
│   ├── Clients.jsx / Clients.css  ← Swiper auto-rotate, fade effect
│   ├── Testimonials.jsx / Testimonials.css
│   ├── CTA.jsx / CTA.css
│   └── Footer.jsx / Footer.css
├── data/
│   └── content.js                ← Dữ liệu đội ngũ, khách hàng, dự án...
├── App.jsx
├── App.css
├── main.jsx
public/
dist/
```

---

## 🎨 Các phần chính

- **Team Section** - Hiển thị ảnh thật + initials overlay trên avatar, grid 4 cột
- **Clients Section** - Swiper fade auto-rotate, nút điều hướng + pagination dots
- **Hero/About/Services/Projects/Process/Testimonials/CTA/Footer** - Full sections

---

## 📝 Notes

- Port 5173 có thể bị chiếm bởi process cũ. Nếu gặp lỗi port in use, kill process trước: `taskkill /PID <port_pid> /F`
- Dev server mặc định chạy trên `http://localhost:5173` hoặc port kế tiếp (5174, 5175...)
- Các ảnh trong `content.js` là URL bên ngoài (i.pinimg.com, unsplash.com) - cần kết nối Internet để hiển thị
