"use client";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
        style={{ width: "100%", height: "100%",paddingBottom:"40px" }}
        breakpoints={{
          800: {
            spaceBetween: 70,
            slidesPerView: 2.5,
          },
          490: {
            spaceBetween: 20,
            slidesPerView: 1.5,
          },
          0:{
            spaceBetween: 20,
            slidesPerView: 1.5,
          }
        }}
      >
        <SwiperSlide>
          <img
            src="https://www.front-blog.com/wp-content/themes/MyBlogTem/asset/img/noname.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.front-blog.com/wp-content/themes/MyBlogTem/asset/img/noname.png"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.front-blog.com/wp-content/themes/MyBlogTem/asset/img/noname.png"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.front-blog.com/wp-content/themes/MyBlogTem/asset/img/noname.png"
            alt=""
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
