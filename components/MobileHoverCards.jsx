// "use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// // import "./styles.css";
// import "../app/[locale]/globals.scss";
// import { Pagination, Autoplay } from "swiper/modules";

// const MobileHoverCards = () => {
//   return (
//     <section id="production">
//       <div className="mobileHoverCards">
//         <div className="cardsSectionTitleHoverMobile">
//           From Raw Materials to Final <strong>Products</strong>
//         </div>
//         <Swiper
//           // pagination={true}
//           // slidesPerView={1}
//           // spaceBetween={0}
//           // loop={true}
//           // centeredSlides={true}
//           // modules={[Pagination, Autoplay]}
//           // autoplay={{
//           //   delay: 2500,
//           //   disableOnInteraction: false,
//           // }}
//           // className="mySwiper"

          
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           slidesPerView={1}
//           spaceBetween={0}
//           loop={false} // ✏️ loop false et
//           centeredSlides={false} // ✏️ centeredSlides false et
//           modules={[Pagination, Autoplay]}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           className="mySwiper"
//           aria-label="Product showcase carousel"

//         >
//           <SwiperSlide>
//             <div className="cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile">
//               <div className="cartIconHoverMobile">
//                 <img src="/icon/topRightIcon.svg" alt="topRight" />
//               </div>
//               <span>Construction Solutions</span>
//               <div className="cardDetailHoverMobile">
//                 <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//                 <strong>Construction Solutions</strong>
//                 <p>
//                   Innovative Building Solutions for Durable ResultsAt
//                   Konstralab, we deliver cutting-edge construction materials
//                   designed to meet the evolving demands of modern building
//                   projects.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile">
//               <div className="cartIconHoverMobile">
//                 <img src="/icon/topRightIcon.svg" alt="topRight" />
//               </div>
//               <span>Construction Solutions</span>
//               <div className="cardDetailHoverMobile">
//                 <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//                 <strong>Construction Solutions</strong>
//                 <p>
//                   Innovative Building Solutions for Durable ResultsAt
//                   Konstralab, we deliver cutting-edge construction materials
//                   designed to meet the evolving demands of modern building
//                   projects.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default MobileHoverCards;

















"use client";
import React, { useState, useEffect } from "react";

export default function MobileHoverCards({ production,t }) {
  // API'den gelen asıl dizi
  const productionItems = production.data.data;

  // Slide sayısını veriye göre dinamik ayarlıyoruz
  const totalSlides = productionItems.length;

  // İndekse göre atayacağımız hover-mobile renk/pozisyon sınıfları
  const hoverClasses = [
    "cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile",
    "cardHoverMobile cardDarkHoverMobile cardTopRightHoverMobile",
    "cardHoverMobile cardWhiteHoverMobile cardCenterHoverMobile",
    "cardHoverMobile cardDarkLightHoverMobile cardBottomLeftHoverMobile",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik kaydırma efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section id="production">
      <div className="mobileHoverCards">
        <div className="cardsSectionTitleHoverMobile">
          {/* From Raw Materials to Final <strong>Products</strong> */}
          {t?.productionTitle || "From Raw Materials to Final Products"}
        </div>

        <div className="mySwiper" style={{ position: "relative", overflow: "hidden" }}>
          <div
            className="swiper-wrapper"
            style={{
              display: "flex",
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            {productionItems.map((item, idx) => (
              <div
                key={item.id}
                className="swiper-slide"
                style={{
                  width: `${100 / totalSlides}%`,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className={hoverClasses[idx] || hoverClasses[0]}>
                  <div className="cartIconHoverMobile">
                    <img src="/icon/topRightIcon.svg" alt="icon" />
                  </div>
                  <span>{item.title}</span>
                  <div className="cardDetailHoverMobile">
                    <img src="/icon/cardHoverIcon.svg" alt="hover icon" />
                    <strong>{item.title}</strong>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination bar with moving indicator */}
        <div
          className="swiper-pagination"
          style={{
            marginTop: "7rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "12.5rem",
              height: "0.8rem",
              backgroundColor: "#d0d6e0",
              borderRadius: "7px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${(100 / totalSlides) * currentSlide}%`,
                width: `${100 / totalSlides}%`,
                height: "100%",
                backgroundColor: "#000",
                borderRadius: "4px",
                transition: "left 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}















// ! bu islek versiyadir
// "use client";
// import React, { useRef, useState, useEffect } from "react";

// const MobileHoverCards = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 4;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="production">
//       <div className="mobileHoverCards">
//         <div className="cardsSectionTitleHoverMobile">
//           From Raw Materials to Final <strong>Products</strong>
//         </div>
//         <div className="mySwiper" style={{ position: 'relative', overflow: 'hidden' }}>
//           <div 
//             className="swiper-wrapper" 
//             style={{
//               display: 'flex',
//               width: `${totalSlides * 100}%`,
//               transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
//               transition: 'transform 0.8s ease-in-out'
//             }}
//           >

//             <div className="swiper-slide" style={{ width: `${100 / totalSlides}%`, display: 'flex', justifyContent: 'center' }}>
//               <div className="cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile">
//                 <div className="cartIconHoverMobile">
//                   <img src="/icon/topRightIcon.svg" alt="topRight" />
//                 </div>
//                 <span>Construction Solutions</span>
//                 <div className="cardDetailHoverMobile">
//                   <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//                   <strong>Construction Solutions</strong>
//                   <p>
//                     Innovative Building Solutions for Durable ResultsAt
//                     Konstralab, we deliver cutting-edge construction materials
//                     designed to meet the evolving demands of modern building
//                     projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="swiper-slide" style={{ width: `${100 / totalSlides}%`, display: 'flex', justifyContent: 'center' }}>
//               <div className="cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile">
//                 <div className="cartIconHoverMobile">
//                   <img src="/icon/topRightIcon.svg" alt="topRight" />
//                 </div>
//                 <span>Construction Solutions</span>
//                 <div className="cardDetailHoverMobile">
//                   <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//                   <strong>Construction Solutions</strong>
//                   <p>
//                     Innovative Building Solutions for Durable ResultsAt
//                     Konstralab, we deliver cutting-edge construction materials
//                     designed to meet the evolving demands of modern building
//                     projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="swiper-slide" style={{ width: `${100 / totalSlides}%`, display: 'flex', justifyContent: 'center' }}>
//               <div className="cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile">
//                 <div className="cartIconHoverMobile">
//                   <img src="/icon/topRightIcon.svg" alt="topRight" />
//                 </div>
//                 <span>Construction Solutions</span>
//                 <div className="cardDetailHoverMobile">
//                   <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//                   <strong>Construction Solutions</strong>
//                   <p>
//                     Innovative Building Solutions for Durable ResultsAt
//                     Konstralab, we deliver cutting-edge construction materials
//                     designed to meet the evolving demands of modern building
//                     projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="swiper-slide" style={{ width: `${100 / totalSlides}%`, display: 'flex', justifyContent: 'center' }}>
//               <div className="cardHoverMobile cardOrangeHoverMobile cardTopLeftHoverMobile">
//                 <div className="cartIconHoverMobile">
//                   <img src="/icon/topRightIcon.svg" alt="topRight" />
//                 </div>
//                 <span>Construction Solutions</span>
//                 <div className="cardDetailHoverMobile">
//                   <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//                   <strong>Construction Solutions</strong>
//                   <p>
//                     Innovative Building Solutions for Durable ResultsAt
//                     Konstralab, we deliver cutting-edge construction materials
//                     designed to meet the evolving demands of modern building
//                     projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Pagination bar with moving indicator */}
//         <div
//           className="swiper-pagination"
//           style={{
//             marginTop: '7rem',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: "2rem 0" ,
//           }}
//         >
//           <div
//             style={{
//               position: 'relative',
//               width: '12.5rem',
//               height: '0.8rem',
//               backgroundColor: '#d0d6e0',
//               borderRadius: '7px',
//               overflow: 'hidden'
//             }}
//           >
//             <div
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: `${(100 / totalSlides) * currentSlide}%`,
//                 width: `${100 / totalSlides}%`,
//                 height: '100%',
//                 backgroundColor: '#000',
//                 borderRadius: '4px',
//                 transition: 'left 0.3s ease'
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MobileHoverCards;
