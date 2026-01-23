// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "../app/[locale]/globals.scss";
// import { Autoplay } from "swiper/modules";
// import { FiArrowUpRight } from "react-icons/fi";

// export default function CardScatter({production}) {
//   const productionData = production.data.data
//   return (
//     <>
//       <section id="production">
//         <div className="cardContainer">
//           <div className="cardsSectionTitle">
//             From Raw Materials to Final <strong>Products</strong>
//           </div>

//           <div className="card cardOrange cardTopLeft">
//             <div className="cartIcon">
//               <img src="/icon/topRightIcon.svg" alt="topRight" />
//             </div>
//             <span>Construction Solutions</span>
//             <div className="cardDetail">
//               <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//               <strong>Construction Solutions</strong>
//               <p>
//                 Innovative Building Solutions for Durable ResultsAt Konstralab,
//                 we deliver cutting-edge construction materials designed to meet
//                 the evolving demands of modern building projects.
//               </p>
//             </div>
//           </div>

//           <div className="card cardDark cardTopRight">
//             <div className="cartIcon">
//               <img src="/icon/topRightIcon.svg" alt="topRight" />
//             </div>
//             <span>Leader Factory</span>
//             <div className="cardDetail">
//               <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//               <strong>Construction Solutions</strong>
//               <p>
//                 Innovative Building Solutions for Durable ResultsAt Konstralab,
//                 we deliver cutting-edge construction materials designed to meet
//                 the evolving demands of modern building projects.
//               </p>
//             </div>
//           </div>

//           <div className="card cardWhite cardCenter">
//             <div className="cartIcon">
//               <img src="/icon/topRightIcon.svg" alt="topRight" />
//             </div>
//             <span>Stronger structures</span>
//             <div className="cardDetail">
//               <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//               <strong>Construction Solutions</strong>
//               <p>
//                 Innovative Building Solutions for Durable ResultsAt Konstralab,
//                 we deliver cutting-edge construction materials designed to meet
//                 the evolving demands of modern building projects.
//               </p>
//             </div>
//           </div>

//           <div className="card cardDarkLight cardBottomLeft">
//             <div className="cartIcon">
//               <img src="/icon/topRightIcon.svg" alt="topRight" />
//             </div>
//             <span>Multiple Products</span>
//             <div className="cardDetail">
//               <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//               <strong>Construction Solutions</strong>
//               <p>
//                 Innovative Building Solutions for Durable ResultsAt Konstralab,
//                 we deliver cutting-edge construction materials designed to meet
//                 the evolving demands of modern building projects.
//               </p>
//             </div>
//           </div>

//           <div className="card cardOrangeLight cardBottomRight">
//             <div className="cartIcon">
//               <img src="/icon/topRightIcon.svg" alt="topRight" />
//             </div>
//             <span>Construction Solutions</span>
//             <div className="cardDetail">
//               <img src="/icon/cardHoverIcon.svg" alt="Icon hover" />
//               <strong>Construction Solutions</strong>
//               <p>
//                 Innovative Building Solutions for Durable ResultsAt Konstralab,
//                 we deliver cutting-edge construction materials designed to meet
//                 the evolving demands of modern building projects.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";
import "../app/[locale]/globals.scss";

export default function CardScatter({ production, t }) {
  // API'den gelen dizi:
  const productionItems = production.data.data;

  // Her indekse denk gelen renk/pozisyon sınıfları:
  const cardClasses = [
    "cardOrange cardTopLeft",
    "cardDark cardTopRight",
    "cardWhite cardCenter",
    "cardDarkLight cardBottomLeft",
    "cardOrangeLight cardBottomRight",
    "cardDarkLight cardBottomLeft",
  ];

  return (
    <section id="production">
      <div className="cardContainer">
        <div className="cardsSectionTitle">
          {/* From Raw Materials to Final <strong>Products</strong> */}
          {t?.productionTitle || "From Raw Materials to Final Products"}
        </div>

        {productionItems.map((item, idx) => (
          <div
            key={item.id}
            className={`card ${cardClasses[idx] || cardClasses[0]}`}
          >
            {/* Sabit küçük ikon */}
            <div className="cartIcon">
              <img src="/icon/topRightIcon.svg" alt="icon" />
            </div>

            {/* Başlık */}
            <span>{item.title}</span>

            {/* Hover detay */}
            <div className="cardDetail">
              {/* Artık buraya API’den gelen icon’u kullanıyoruz */}
              <Image
                // src={item.icon}
                // src={`https://admin-konstralab.onestudio.az/storage${item.icon}`}
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${item.icon}`}
                alt={`${item.title} icon`}
                width={40}
                height={40}
                unoptimized
              />

              {/* Başlık tekrar */}
              <strong>{item.title}</strong>

              {/* İçerik HTML’i */}
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
