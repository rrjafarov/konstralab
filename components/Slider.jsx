// "use client";
// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import "../app/[locale]/globals.scss";
// import { Autoplay, Navigation } from "swiper/modules";

// Fancybox.bind("[data-fancybox]", {
//   dragToClose: false,
//   Image: {
//     zoom: false,
//   },
// });

// const CareersPageSlider = ({ gallery,t }) => {
//   const slidesData = gallery?.data?.data || [];

//   return (
//     <>
//       <div className="sliderSectionTitle">
//         <span>
//           {t?.galleryTitle || "Discover the art of precision in construction"}
//         </span>
//       </div>
//       <Swiper
//         slidesPerView={5}
//         spaceBetween={-5}
//         speed={2000}
//         loop={true}
//         centeredSlides={true}
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           nextEl: ".careersCustom-next",
//           prevEl: ".careersCustom-prev",
//         }}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           480: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           767: { slidesPerView: 3 },
//           1024: { slidesPerView: 5 },
//           1280: { slidesPerView: 5 },
//         }}
//         className="mySwiper careersSwiper"
//       >
//         {slidesData.map((item) =>
//           item.gallery.map((imgUrl, idx) => (
//             <SwiperSlide key={`${item.id}-${idx}`}>
//               <Link
//                 href={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
//                 className="careersSliderGalleryImg"
//                 data-fancybox="videos"
//               >
//                 <Image
//                   src={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
//                   className="careersSliderCardImg"
//                   alt={`slide-${item.id}-${idx}`}
//                   width={400}
//                   height={400}
//                 />
//               </Link>
//             </SwiperSlide>
//           ))
//         )}
//       </Swiper>

//       <div className="careersCustom-navigation">
//         <button className="careersCustom-prev">
//           <img src="/icon/careersLeftArrow.svg" alt="" />
//         </button>
//         <button className="careersCustom-next">
//           <img src="/icon/careersRightArrow.svg" alt="" />
//         </button>
//       </div>
//     </>
//   );
// };

// export default CareersPageSlider;















"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../app/[locale]/globals.scss";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

Fancybox.bind("[data-fancybox]", {
  dragToClose: false,
  Image: {
    zoom: false,
  },
});

const CareersPageSlider = ({ gallery, t }) => {
  const slidesData = gallery?.data?.data || [];

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
        navigation={{
          nextEl: ".careersCustom-next",
          prevEl: ".careersCustom-prev",
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
              <Link
                href={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
                className="careersSliderGalleryImg"
                data-fancybox="videos"
              >
                <Image
                  src={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
                  className="careersSliderCardImg"
                  alt={`slide-${item.id}-${idx}`}
                  width={400}
                  height={400}
                />
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <div className="careersCustom-navigation">
        <button className="careersCustom-prev">
          <img src="/icon/careersLeftArrow.svg" alt="" />
        </button>
        <button className="careersCustom-next">
          <img src="/icon/careersRightArrow.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default CareersPageSlider;









































// "use client";
// import Image from "next/image";
// import React, { useRef } from "react";
// import Link from "next/link";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import "../app/[locale]/globals.scss";

// // Splide (React) importları
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

// Fancybox.bind("[data-fancybox]", {
//   dragToClose: false,
//   Image: {
//     zoom: false,
//   },
// });

// const CareersPageSlider = ({ gallery, t }) => {
//   const slidesData = gallery?.data?.data || [];
//   const splideRef = useRef(null);

//   const splideOptions = {
//     type: "loop",
//     perPage: 5,
//     perMove: 1,
//     focus: "center", // centeredSlides: true benzeri
//     gap: "-5px", // spaceBetween: -5
//     speed: 2000,
//     autoplay: true,
//     interval: 3000,
//     pauseOnHover: false,
//     resetProgress: false,
//     pagination: false,
//     arrows: false, // biz öz buttonlarımızı istifadə edəcəyik
//     breakpoints: {
//       320: { perPage: 2 },
//       480: { perPage: 2 },
//       640: { perPage: 3 },
//       767: { perPage: 3 },
//       1024: { perPage: 5 },
//       1280: { perPage: 5 },
//     },
//   };

//   // Splide mount olduqda və hər move eventində çağırılacaq
//   const handleMounted = (splide) => {
//     splideRef.current = splide;
//     updateSwiperClasses(splide.index, splide);

//     // move hadisəsində sinifləri yenilə
//     splide.on("move", (newIndex) => {
//       updateSwiperClasses(newIndex, splide);
//     });

//     // initial olaraq da yenilə (bəzən index 0 olur)
//     splide.on("mounted", () => {
//       updateSwiperClasses(splide.index, splide);
//     });
//   };

//   // Splide slide DOM-larına Swiper siniflərini əlavə/çıxaran funksiya
//   const updateSwiperClasses = (activeIndex, splide) => {
//     try {
//       const slides = splide.Components.Slides.getSlides(); // slide obyekti siyahısı
//       const count = slides.length;

//       // əvvəlcə hamısından swiper-* siniflərini sil və hər birinə 'swiper-slide' qoy
//       slides.forEach((s) => {
//         const el = s.slide;
//         if (!el) return;
//         el.classList.remove(
//           "swiper-slide-active",
//           "swiper-slide-prev",
//           "swiper-slide-next"
//         );
//         // saxla: swiper-slide class-ı bütün slide-larda olmalıdır (CSS üçün)
//         if (!el.classList.contains("swiper-slide"))
//           el.classList.add("swiper-slide");
//       });

//       if (count === 0) return;

//       const realActive = ((activeIndex % count) + count) % count;
//       const prevIndex = (realActive - 1 + count) % count;
//       const nextIndex = (realActive + 1) % count;

//       const activeEl = slides[realActive]?.slide;
//       const prevEl = slides[prevIndex]?.slide;
//       const nextEl = slides[nextIndex]?.slide;

//       if (activeEl) activeEl.classList.add("swiper-slide-active");
//       if (prevEl) prevEl.classList.add("swiper-slide-prev");
//       if (nextEl) nextEl.classList.add("swiper-slide-next");
//     } catch (err) {
//       // səhv olsa sakitcə keç (dəyişiklik tələb olunmur)
//       // console.error(err);
//     }
//   };

//   // Prev/Next üçün handlerlər (mövcud button classları dəyişməyib)
//   const goPrev = () => {
//     if (splideRef.current) splideRef.current.go("<");
//   };
//   const goNext = () => {
//     if (splideRef.current) splideRef.current.go(">");
//   };

//   return (
//     <>
//       <div className="sliderSectionTitle">
//         <span>
//           {t?.galleryTitle || "Discover the art of precision in construction"}
//         </span>
//       </div>

//       {/* Splide konteynerinə mövcud class-ları əlavə etdim ki, CSS eyni işləsin */}
//       <Splide
//         options={splideOptions}
//         onMounted={handleMounted}
//         className="mySwiper careersSwiper"
//         aria-label="Careers gallery slider"
//       >
//         {slidesData.map((item) =>
//           item.gallery.map((imgUrl, idx) => (
//             // SplideSlide render olunanda li.splide__slide olacaq; biz əlavə olaraq
//             // swiper-slide sinfini də veririk ki, əvvəlki CSS işləsin.
//             <SplideSlide
//               key={`${item.id}-${idx}`}
//               className="swiper-slide"
//             >
//               <Link
//                 href={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
//                 className="careersSliderGalleryImg"
//                 data-fancybox="videos"
//               >
//                 <Image
//                   src={`https://admin-konstralab.onestudio.az/storage${imgUrl}`}
//                   className="careersSliderCardImg"
//                   alt={`slide-${item.id}-${idx}`}
//                   width={400}
//                   height={400}
//                 />
//               </Link>
//             </SplideSlide>
//           ))
//         )}
//       </Splide>

//       <div className="careersCustom-navigation">
//         <button
//           className="careersCustom-prev"
//           onClick={goPrev}
//           type="button"
//         >
//           <img src="/icon/careersLeftArrow.svg" alt="" />
//         </button>
//         <button
//           className="careersCustom-next"
//           onClick={goNext}
//           type="button"
//         >
//           <img src="/icon/careersRightArrow.svg" alt="" />
//         </button>
//       </div>
//     </>
//   );
// };

// export default CareersPageSlider;
