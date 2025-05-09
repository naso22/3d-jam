"use client";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SlideShow.module.scss";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  mainVisual: {
    url: string;
  };
  category: BlogCategory[];
};

type BlogCategory = {
  id: string;
  title: string;
};

type PostViewProps = {
  blogList: { newBlog: BlogPost[]; categoryBlog?: BlogPost[] };
};

export default function SlideShow({blogList}:PostViewProps) {
  return (
    <>
      <div className={styles.FirstView}>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={100} // スライド間のスペース
          slidesPerView={2.3} // 表示するスライドの数（はみ出す部分を考慮）
          loop={true}
          centeredSlides={true} // スライドを中央に配置
          style={{ width: "100%", height: "100%", paddingBottom: "40px" }}
          breakpoints={{
            800: {
              spaceBetween: 70,
              slidesPerView: 2.5,
            },
            490: {
              spaceBetween: 20,
              slidesPerView: 1.5,
            },
            0: {
              spaceBetween: 20,
              slidesPerView: 1.5,
            },
          }}
        >
          {
  blogList?.newBlog?.slice(0, 4).map((blog) => {
    return (
<SwiperSlide key={blog.id}>
<Link href={`/blog/${blog.id}`}>
        <img
          src={blog.mainVisual?.url}
          alt=""
        />
         </Link>
      </SwiperSlide>
     
      
    );
  })
}
        </Swiper>
      </div>
    </>
  );
}
