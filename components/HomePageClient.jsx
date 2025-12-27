"use client";

import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/lib/axios";
import Image from "next/image";

import About from "@/components/About";
import Brands from "@/components/Brands";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderHero from "@/components/HeaderHero";
import MobileHoverCards from "@/components/MobileHoverCards";
import Slider from "@/components/Slider";

async function getTranslations() {
  try {
    const response = await axiosInstance.get("/translation-list");
    return response;
  } catch (err) {}
}

export default function HomePageClient() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [entryPage, setEntryPage] = useState(null);
  const [brands, setBrands] = useState(null);
  const [products, setProducts] = useState(null);
  const [production, setProduction] = useState(null);
  const [translations, setTranslations] = useState(null);

  const t = translations?.data;

  useEffect(() => {
    async function loadTranslations() {
      const result = await getTranslations();
      if (result) setTranslations(result);
    }
    loadTranslations();
  }, []);

  const fetchPageData = async (endpoint, setState) => {
    const lang = Cookies.get("NEXT_LOCALE") || "en";
    try {
      const { data } = await axiosInstance.get(`/page-data/${endpoint}`, {
        headers: { Lang: lang },
      });
      setState(data);
    } catch (err) {}
  };

  useEffect(() => { fetchPageData("about", setAbout); }, []);
  useEffect(() => { fetchPageData("contact", setContact); }, []);
  useEffect(() => { fetchPageData("gallery", setGallery); }, []);
  useEffect(() => { fetchPageData("entry-page", setEntryPage); }, []);
  useEffect(() => { fetchPageData("brands", setBrands); }, []);
  useEffect(() => { fetchPageData("products", setProducts); }, []);
  useEffect(() => { fetchPageData("production", setProduction); }, []);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const finish = useCallback(() => {
    setIsFading(true);
    setTimeout(() => setShowOverlay(false), 500);
  }, []);

  useEffect(() => {
    const handleWheel = () => finish();
    const handleTouchMove = () => finish();
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [finish]);

  return (
    <>
      {showOverlay && (
        <div className={`introOverlay${isFading ? " fadeOut" : ""}`}>
          {entryPage?.data?.data
            ?.filter((item) => item.video)
            .map((item) => (
              <video
                key={item.id}
                src={`https://admin-konstralab.onestudio.az/storage${item.video}`}
                autoPlay
                muted
                loop
                className="introGif"
              />
            ))}
          <div className="gifOverlay" />
          <div className="overlayText">
            <Image src="/icon/logoKonstralab.svg" alt="logo" width={350} height={300} />
          </div>
          <div className="overlayScrool">
            <span>
              {t?.scroll || "Scroll"}
              <img src="/icon/bottomDown.svg" alt="down arrow" />
            </span>
          </div>
        </div>
      )}

      {!showOverlay && (
        <main>
          {isMobile && <HeaderHero t={t} className="showMobile" contact={contact} entryPage={entryPage} />}
          <div className="container">
            {!isMobile && <HeaderHero t={t} className="notShowMobile" contact={contact} entryPage={entryPage} />}
            <About t={t} about={about} />
            <MobileHoverCards t={t} production={production} />
            <Cards t={t} production={production} />
          </div>

          <div id="products">
            <Brands t={t} products={products} brands={brands} />
          </div>

          <div id="gallery">
            <Slider t={t} gallery={gallery} />
          </div>
          <div className="contactBackground">
            <div className="container" id="contact">
              <Contact t={t} contact={contact} />
            </div>
          </div>
          <div className="footerBackground">
            <Footer t={t} contact={contact} />
          </div>
        </main>
      )}
    </>
  );
}
