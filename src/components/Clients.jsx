import "./Clients.css";
import { clients } from "../data/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <span className="section-tag">Đối tác & Khách hàng</span>
        <h2 className="section-title">Các dự án tin tưởng</h2>
        <div className="clients__slider-wrapper">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={3}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            speed={1000}
            grabCursor={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            navigation={{
              prevEl: ".clients__prev",
              nextEl: ".clients__next",
            }}
            pagination={{
              el: ".clients__pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              992: { slidesPerView: 4, spaceBetween: 24 },
              1200: { slidesPerView: 5, spaceBetween: 32 },
            }}
            className="clients__swiper"
          >
            {clients.map((client, i) => (
              <SwiperSlide key={i}>
                <div className="client__item">
                  <img src={client.image} alt={client.name} className="client__logo" />
                  <span>{client.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="clients__nav">
            <button className="clients__prev">←</button>
            <div className="clients__pagination" />
            <button className="clients__next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
