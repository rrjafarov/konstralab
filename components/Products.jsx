
// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "../app/[locale]/globals.scss";
// import { Autoplay } from "swiper/modules";

// const Products = ({ products }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const productsData = products.data.data || [];

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const desktopMarkup = (
//     <div className="productsCards">
//       <div className="row">
//         {productsData.map((product) => (
//           <div className="xl-3 lg-3 md-6 sm-6" key={product.id}>
//             <div className="productsCard">
//               <div className="productsCardImage">
//                 <Image
//                   // src="/images/boardImg.png"
//                   src={`https://admin-konstralab.onestudio.az/storage${product.image}`}
//                   alt="board"
//                   width={300}
//                   height={100}
//                 />
//               </div>
//               <div className="productsCardContent">
//                 <h1>{product.title}</h1>

//                 <div
//                   className="ptag"
//                   dangerouslySetInnerHTML={{
//                     __html: product.short_text,
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   // Dynamic mobile slides generated from productsData
//   const mobileSlides = productsData.map((product) => (
//     <SwiperSlide key={product.id}>
//       <div className="productsSliderCard">
//         <div className="productsSliderCardImage">
//           <Image
//             // src="/images/boardImg.png"
//             src={`https://admin-konstralab.onestudio.az/storage${product.image}`}
//             alt="board"
//             width={300}
//             height={100}
//           />
//         </div>
//         <div className="productsSliderCardContent">
//           <h1>{product.title}</h1>
//           <div
//             className="ptag"
//             dangerouslySetInnerHTML={{
//               __html: product.short_text,
//             }}
//           ></div>
//         </div>
//       </div>
//     </SwiperSlide>
//   ));

//   return (
//     <>
//       {!isMobile ? (
//         desktopMarkup
//       ) : (
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1.2}
//           loop={true}
//           centeredSlides={true}
//           speed={1000}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay]}
//         >
//           {mobileSlides}
//         </Swiper>
//       )}
//     </>
//   );
// };

// export default Products;






























"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "../app/[locale]/globals.scss";
import { Autoplay } from "swiper/modules";

const Products = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);
  const productsData = products.data.data || [];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopMarkup = (
    <div className="productsCards">
      <div className="row">
        {productsData.map((product) => (
          <div className="xl-3 lg-3 md-6 sm-6" key={product.id}>
            <div className="productsCard">
              <div className="productsCardImage">
                <Image
                  // src="/images/boardImg.png"
                  // src={`https://admin-konstralab.onestudio.az/storage${product.image}`}
                  src={`${process.env.NEXT_PUBLIC_IMG_URL}${product.image}`}
                  alt="board"
                  width={300}
                  height={100}
                />
              </div>
              <div className="productsCardContent">
                <h1>{product.title}</h1>

                <div
                  className="productPtag"
                  dangerouslySetInnerHTML={{
                    __html: product.short_text,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Dynamic mobile slides generated from productsData
  const mobileSlides = productsData.map((product) => (
    <SwiperSlide key={product.id}>
      <div className="productsSliderCard">
        <div className="productsSliderCardImage">
          <Image
            // src="/images/boardImg.png"
            // src={`https://admin-konstralab.onestudio.az/storage${product.image}`}
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${product.image}`}
            alt="board"
            width={300}
            height={100}
          />
        </div>
        <div className="productsSliderCardContent">
          <h1>{product.title}</h1>
          <div
            className="productPtag"
            dangerouslySetInnerHTML={{
              __html: product.short_text,
            }}
          ></div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      {!isMobile ? (
        desktopMarkup
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {mobileSlides}
        </Swiper>
      )}
    </>
  );
};

export default Products;