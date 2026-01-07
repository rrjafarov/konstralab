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
  // import "@/app/[locale]/globals.scss"
  // import { Autoplay, Navigation } from "swiper/modules";

  // Fancybox.bind("[data-fancybox]", {
  //   dragToClose: false,
  //   Image: {
  //     zoom: false,
  //   },
  // });

  // const CareersPageSlider = ({ gallery, t }) => {
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
  //         autoplay={{
  //           delay: 2500, 
  //           disableOnInteraction: false,
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










// CareersPageSlider.jsx
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@/app/[locale]/globals.scss";
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
        autoplay={{
          delay: 2500, // hər slayd arasında gecikmə (ms)
          disableOnInteraction: false, // istifadəçi slaydı dəyişəndə də autoplay işləsin
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
// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "../app/[locale]/globals.scss";

// const CareersPageSlider = ({ gallery, t }) => {
//   const slidesData = gallery?.data?.data || [];
//   const splideRef = useRef(null);

//   useEffect(() => {
//     Fancybox.bind("[data-fancybox]", {
//       dragToClose: false,
//       Image: { zoom: false },
//     });
//     return () => Fancybox.destroy();
//   }, []);

//   return (
//     <>
//       <div className="sliderSectionTitle">
//         <span>
//           {t?.galleryTitle || "Discover the art of precision in construction"}
//         </span>
//       </div>
//       <Splide
//         ref={splideRef}
//         className="mySwiper careersSwiper"
//         options={{
//           type: "loop",
//           perPage: 4.7,
//           gap: -5,
//           focus: "center",
//           autoplay: true,
//           interval: 2500,
//           speed: 2000,
//           arrows: false,
//           pagination: false,
//           updateOnMove: true, // Added this to update active class before transition
//           breakpoints: {
//             1280: { perPage: 4.7 },
//             1024: { perPage: 4.7 },
//             767: { perPage: 3 },
//             640: { perPage: 3 },
//             480: { perPage: 2 },
//             320: { perPage: 2 },
//           },
//         }}
//       >
//         {slidesData.map((item) =>
//           item.gallery.map((imgUrl, idx) => (
//             <SplideSlide key={`${item.id}-${idx}`}>
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
//           onClick={() => splideRef.current?.splide.go("<")}
//         >
//           <img src="/icon/careersLeftArrow.svg" alt="" />
//         </button>
//         <button
//           className="careersCustom-next"
//           onClick={() => splideRef.current?.splide.go(">")}
//         >
//           <img src="/icon/careersRightArrow.svg" alt="" />
//         </button>
//       </div>
//     </>
//   );
// };

// export default CareersPageSlider;








