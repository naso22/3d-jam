"use client";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SlideShow.module.scss";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SlideShow() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={100} // スライド間のスペース
        slidesPerView={2.3} // 表示するスライドの数（はみ出す部分を考慮）
        loop={true}
        centeredSlides={true} // スライドを中央に配置
        style={{ width: "100%", height: "350px" }}
      >
        <SwiperSlide>
          <div className={styles.SlideItem}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.SlideItem}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.SlideItem}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.SlideItem}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
