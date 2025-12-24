"use client";
import React, { useState, useEffect } from "react";

export default function MobileHoverCards({ production, t }) {
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
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section id="production">
      <div className="mobileHoverCards">
        <div className="cardsSectionTitleHoverMobile">
          {/* From Raw Materials to Final <strong>Products</strong> */}
          <h2>
            {t?.productionTitle || "From Raw Materials to Final Products"}
          </h2>
        </div>

        <div
          className="mySwiper"
          style={{ position: "relative", overflow: "hidden" }}
        >
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
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
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
