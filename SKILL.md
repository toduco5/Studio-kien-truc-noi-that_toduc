---
name: premium-architecture-interior-landing
description: Thiết kế và dựng landing page (HTML/CSS/JS thuần, một file, xuất bản dưới dạng Artifact) cho studio kiến trúc, nội thất, xây dựng cao cấp, hoặc bất động sản hạng sang. LUÔN dùng skill này khi người dùng nhắc đến "landing page kiến trúc", "website studio nội thất", "trang giới thiệu công ty thiết kế/xây dựng", "landing page bất động sản cao cấp", hoặc mô tả các đầu mục kiểu Hero/Về chúng tôi/Dịch vụ/Dự án/Quy trình/Đội ngũ/Đối tác/Testimonials/CTA/Footer — kể cả khi họ không gọi tên các mục đó chính xác như vậy. Bao gồm quy trình chống rập khuôn (tránh các "tell" thường gặp của thiết kế AI-generated), bảng màu/kiểu chữ mẫu cho ngành kiến trúc, kỹ thuật vẽ minh họa SVG kiểu bản vẽ kỹ thuật thay cho ảnh chụp (vì trang xuất bản không tải được ảnh ngoài), và toàn bộ pattern JS tái sử dụng được (lọc dự án, slider testimonials, marquee đối tác, form tư vấn, hiệu ứng vẽ nét hero).
---

# Landing Page Studio Kiến trúc & Nội thất Cao cấp

Skill này đúc kết quy trình dựng một landing page thương mại, cảm giác cao cấp, cho các thương hiệu trong lĩnh vực kiến trúc / nội thất / xây dựng / bất động sản hạng sang. Đọc trước `/mnt/skills/public/frontend-design/SKILL.md` nếu có — skill này là phần chuyên biệt hóa cho đúng ngành, không thay thế các nguyên tắc chống-rập-khuôn ở đó.

## Khi nào dùng

- Người dùng yêu cầu landing page cho: studio kiến trúc, công ty thiết kế nội thất, đơn vị thi công/xây dựng, chủ đầu tư bất động sản cao cấp, showroom vật liệu/nội thất.
- Yêu cầu có thể liệt kê các mục quen thuộc: Hero, Về chúng tôi/studio, Dịch vụ, Dự án tiêu biểu, Quy trình làm việc, Đội ngũ, Khách hàng/Đối tác, Testimonials, CTA tư vấn, Footer/Liên hệ — dùng làm khung sườn mặc định nếu người dùng không nêu khác.
- Yêu cầu chỉ định công nghệ "chỉ dùng HTML/CSS/JS thuần" (không React/framework) → viết **một file HTML tự chứa**, publish qua Artifact tool theo `<publishing_artifacts>`.

## Quy trình 4 bước

### 1. Định hình thương hiệu trước khi thiết kế
Trước khi chạm CSS, xác định:
- **Tên thương hiệu** ngắn, gốc gác vật liệu/văn hóa bản địa nếu phù hợp (vd. "Mộc Atelier" — Mộc = gỗ). Tránh tên tiếng Anh chung chung như "XYZ Design Studio".
- **Định vị**: tối giản Á Đông? Đương đại nhiệt đới? Tân cổ điển? Từng định vị kéo theo bảng màu/kiểu chữ khác nhau — không dùng một công thức cho mọi brief.
- **Đối tượng**: gia chủ cá nhân cao cấp, nhà đầu tư, hay chủ đầu tư dự án — quyết định giọng văn CTA (tư vấn cá nhân vs. hợp tác dự án).

### 2. Lập hệ token thiết kế — và tự phản biện để tránh rập khuôn
Viết ra trước khi code, theo đúng format của `frontend-design`:
- **Màu** (4–6 hex có tên): 1 nền ấm/tối làm chủ đạo, 2–3 màu điểm nhấn *gắn với vật liệu thật* (đồng thau, đá cẩm thạch, gỗ sồi, đất nung, đá bazan...) — không dùng mặc định `#D97757` (cam đất — dấu hiệu AI-generated) hay tối đen + xanh neon.
- **Kiểu chữ**: một serif có cá tính cho tiêu đề (Fraunces, Canela, Ogg... không phải Playfair mặc định) + một sans/mono sạch cho phần thân và số liệu. Vì ngành này làm việc với bản vẽ kỹ thuật, dùng **monospace cho các nhãn thông số** (diện tích, năm, mã dịch vụ) là lựa chọn có lý do — không phải trang trí tùy tiện.
- **Bố cục**: căn trái/lệch trục kiểu tạp chí kiến trúc thay vì căn giữa mặc định; dùng khung viền mảnh + góc "crop-mark" (như bản vẽ kỹ thuật) thay cho thẻ bo tròn kiểu SaaS-card.
- **Nguyên tắc riêng cho brief này**: viết 3–5 câu mô tả điều gì khiến thiết kế này không thể dùng lại y nguyên cho một ngành khác.

Sau khi có bản nháp token, tự hỏi: "Nếu tôi gặp brief tương tự, tôi có ra kết quả giống hệt không?" Nếu có phần nào đúng với danh sách "tell" AI-generated (nền kem + cam đất, đen + neon, thẻ bo tròn đồng loạt, nhãn ALL-CAPS khắp nơi, số thứ tự 01/02/03 gắn bừa vào nội dung không mang tính chuỗi, mũi tên → cuối mọi nút) — sửa lại và ghi chú đã đổi gì.

### 3. Kỹ thuật minh họa: vẽ nét kiểu bản vẽ kỹ thuật thay cho ảnh
Trang publish qua Artifact **không tải được ảnh từ internet** (CSP chặn), nên đừng dùng `<img src="https://...">`. Đây là cơ hội thẩm mỹ, không phải hạn chế:
- Vẽ **SVG dạng nét** (mặt bằng, mặt đứng, trục lưới, hình khối kiến trúc) làm hero visual và ảnh đại diện dự án — vừa hợp ngành, vừa tạo cảm giác "bản vẽ tay nghề" hơn ảnh stock.
- Hiệu ứng "vẽ nét" khi tải trang: set `stroke-dasharray`/`stroke-dashoffset` bằng `path.getTotalLength()` trong JS, rồi thêm class trigger transition sau một khoảng `setTimeout` ngắn. Đây là **một khoảnh khắc chuyển động chủ đích duy nhất** — không lặp lại hiệu ứng này ở nơi khác.
- Với thẻ dự án (project card), sinh SVG khác nhau theo từng dự án bằng một hàm JS nhận `color` + `seed` để tạo biến thể hình khối — tránh cảm giác lặp y hệt.
- Avatar đội ngũ: dùng khung viền + chữ cái viết tắt (monospace), không bịa ảnh chân dung.

### 4. Khung 10 mục nội dung (mặc định, có thể co giãn theo brief)

| Mục | Nội dung cốt lõi | Ghi chú |
|---|---|---|
| Header/Nav | Logo chữ + menu + nút CTA "Đặt lịch tư vấn" | sticky, có menu mobile dạng overlay |
| Hero | Eyebrow 1 dòng (mono) + tiêu đề lớn (serif, ≤14 từ) + mô tả + 2 CTA + hàng số liệu (dự án, năm kinh nghiệm, giải thưởng, tỉ lệ hài lòng) + minh họa SVG | số liệu dùng mono để có cảm giác "thông số kỹ thuật" |
| Về studio | Câu triết lý ngắn (serif, dạng trích dẫn) + đoạn giới thiệu + tên người sáng lập/năm thành lập + lưới 4 giá trị cốt lõi | KHÔNG numbering nếu 4 giá trị không theo trình tự — ở đây dùng mã 01–04 như mã tham chiếu, không phải "bước" |
| Dịch vụ | 4–6 dịch vụ, mỗi thẻ có mã (DV.01...), tên, mô tả 1 câu | lưới 3 cột, bo góc =0 |
| Dự án tiêu biểu | Bộ lọc theo loại hình (biệt thự/căn hộ/văn phòng/resort...) bằng JS thuần (`data-filter` + toggle class), mỗi thẻ: SVG minh họa, mã loại+năm, tên dự án, địa điểm, diện tích | dữ liệu dự án nên có tên riêng, địa điểm thật (thành phố VN), không ghi "Dự án 1/2/3" |
| Quy trình làm việc | 5–6 bước ĐÚNG có trình tự thời gian → numbering 01–06 chính đáng ở đây | mỗi bước: tên + mô tả 1–2 câu |
| Đội ngũ | Lưới người, mỗi người: avatar chữ cái viết tắt, tên, chức danh (mono, màu nhấn) | 4–6 người vừa đủ, tên tiếng Việt tự nhiên |
| Đối tác/Khách hàng | Marquee CSS chạy vô hạn (`@keyframes` translateX -50%, nhân đôi mảng để loop mượt), tên thương hiệu dạng wordmark serif | tôn trọng `prefers-reduced-motion`: tắt animation |
| Testimonials | Slider JS thủ công (nút prev/next, không cần thư viện), 3–4 trích dẫn kèm tên/dự án | trích dẫn cụ thể, không chung chung |
| CTA tư vấn | Nền màu nhấn đậm (khác nền chính) tương phản mạnh, form: họ tên/SĐT/email/loại công trình/ngân sách/mô tả, validate bằng `checkValidity()` + hiển thị thông báo thành công, không cần backend thật | đây là điểm nhấn màu sắc — nơi "chi tiêu" độ táo bạo của bảng màu |
| Footer | Giới thiệu ngắn thương hiệu + 3 cột link + thông tin liên hệ (địa chỉ/SĐT/email/giờ làm việc) + copyright + nút back-to-top | |

## Pattern JS tái sử dụng (không cần thư viện ngoài)

- **Menu mobile**: toggle `display` + đổi `aria-expanded`.
- **Reveal khi cuộn**: `IntersectionObserver` chỉ áp cho *tiêu đề mục* (`.sec-head`), không áp lên từng thẻ con — tránh hiệu ứng "fade-slide-up hàng loạt" bị liệt vào rập khuôn.
- **Lọc dự án**: gắn `data-filter` lên nút, `data-cat` lên thẻ, so khớp rồi toggle class ẩn.
- **Marquee**: nhân đôi nội dung trong DOM, animate `translateX(0 → -50%)` liên tục, `linear`, không giật.
- **Slider testimonials**: mảng slide, biến `idx`, hai nút prev/next, class `.active` kiểm soát hiển thị + `@keyframes fadein`.
- **Form CTA**: `e.preventDefault()` → `form.checkValidity()` → nếu hợp lệ, hiện `.success-msg`, đổi text nút tạm thời rồi reset.
- **Hero vẽ nét**: xem mục 3.

## Kỹ thuật/ràng buộc khi publish

Trang là một file HTML tự chứa, tuân theo `<publishing_artifacts>`:
- Không `<img src="https://...">`, không import ES module ngoài — chỉ font từ `fonts.googleapis.com`/`fonts.gstatic.com`, script (nếu cần) chỉ từ 4 host được phép.
- Khai báo token màu qua CSS variable, có nhánh `@media (prefers-color-scheme: dark)` và `:root[data-theme="dark"]` để tương thích chế độ tối của trình xem.
- `meta viewport` có `viewport-fit=cover`, padding theo `env(safe-area-inset-*)`.
- Responsive: sập lưới nhiều cột về 2 cột rồi 1 cột ở breakpoint ~980px và ~640px; test riêng phần form và marquee ở mobile.
- Tôn trọng `prefers-reduced-motion: reduce` — tắt animation vẽ nét, marquee, reveal.
- Dùng `view` để đọc lại `/mnt/skills/public/frontend-design/SKILL.md` mỗi lần bắt đầu brief mới — không copy nguyên bảng màu/token của lần trước sang thương hiệu khác.

## Quy trình xuất bản

1. Viết file vào `/mnt/user-data/outputs/<ten-thuong-hieu>.html` bằng `create_file`.
2. Gọi Artifact tool, action `publish`, kèm `favicon` (1 emoji phù hợp ngành, vd. 🏛️/🏠/📐) và `title`.
3. Nếu sau đó chỉnh sửa, sửa trực tiếp file rồi `publish` lại cùng `file_path` (hoặc kèm `url` nếu ở lượt trả lời khác) để cập nhật đúng artifact cũ thay vì tạo bản mới.

## Tự phản biện trước khi giao

Trước khi trình bày kết quả, tự kiểm tra bằng nguyên tắc Chanel trong `frontend-design`: bỏ bớt một chi tiết trang trí không phục vụ nội dung. Kiểm tra riêng: bảng màu có gắn với vật liệu/ngành thật không, hay chỉ là công thức đẹp chung chung? Nếu gỡ tên thương hiệu đi, thiết kế có còn nhận ra là "kiến trúc cao cấp" hay có thể dán nhãn bất kỳ ngành nào khác?