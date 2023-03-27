import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ImageSwiper() {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div>
      <div className="w-96 max-nm:w-72">
        <div className="mb-5">
          <Swiper
            spaceBetween={10}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            modules={[Navigation, Thumbs]}
            slidesPerView={1}
            className="rounded-3xl"
          >
            <SwiperSlide>
              <img src="/assets/images/image-product-1.jpg" alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/image-product-2.jpg" alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/image-product-3.jpg" alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/image-product-4.jpg" alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>

        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="cursor-pointer rounded-md" src="/assets/images/image-product-1-thumbnail.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer rounded-md" src="/assets/images/image-product-2-thumbnail.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer rounded-md" src="/assets/images/image-product-3-thumbnail.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer rounded-md" src="/assets/images/image-product-4-thumbnail.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
