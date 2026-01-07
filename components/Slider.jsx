"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@/app/[locale]/globals.scss";
import { Autoplay, Navigation } from "swiper/modules";

const CareersPageSlider = ({ gallery, t }) => {
  const slidesData = gallery?.data?.data || [];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Initialize Fancybox after component mounts so the DOM is present
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,
      Image: { zoom: false },
    });

    return () => {
      try {
        Fancybox.destroy();
      } catch (e) {
        // Ignore if already destroyed
      }
    };
  }, []);

  return (
    <>
      <div className="sliderSectionTitle">
        <span>
          {t?.galleryTitle || "Discover the art of precision in construction"}
        </span>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={-5}
        speed={2000}
        loop={true}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        // Ensure Swiper picks up the refs for navigation (avoids timing issues)
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          767: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
        className="mySwiper careersSwiper"
      >
        {slidesData.map((item) =>
          item.gallery.map((imgUrl, idx) => (
            <SwiperSlide key={`${item.id}-${idx}`}>
              {/* Use a normal anchor for external hrefs so Fancybox can open the image correctly */}
              <a
                href={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
                className="careersSliderGalleryImg"
                data-fancybox="videos"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
                  className="careersSliderCardImg"
                  alt={`slide-${item.id}-${idx}`}
                  width={400}
                  height={400}
                />
              </a>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <div className="careersCustom-navigation">
        <button ref={prevRef} className="careersCustom-prev">
          <img src="/icon/careersLeftArrow.svg" alt="" />
        </button>
        <button ref={nextRef} className="careersCustom-next">
          <img src="/icon/careersRightArrow.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default CareersPageSlider;















