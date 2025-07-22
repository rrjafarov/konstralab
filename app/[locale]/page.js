
// "use client";
// import About from "@/components/About";
// import Brands from "@/components/Brands";
// import Cards from "@/components/Cards";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import HeaderHero from "@/components/HeaderHero";
// import MobileHoverCards from "@/components/MobileHoverCards";
// import Products from "@/components/Products";
// import Slider from "@/components/Slider";
// import Image from "next/image";
// import React, { useState, useEffect, useCallback } from "react";
// import Cookies from "js-cookie";
// import axiosInstance from "@/lib/axios";

// export default function HomePage() {
//   const [showOverlay, setShowOverlay] = useState(true);
//   const [isFading, setIsFading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [about, setAbout] = useState(null);
//   const [contact, setContact] = useState(null);
//   const [gallery, setGallery] = useState(null);
//   const [entryPage, setEntryPage] = useState(null);
//   const [brands, setBrands] = useState(null);
//   const [products, setProducts] = useState(null);
//   const [production, setProduction] = useState(null);

//   // About verisi
//   useEffect(() => {
//     async function fetchAboutPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/about`, {
//           headers: { Lang: lang },
//         });
//         setAbout(data);
//       } catch (error) {
//         console.error("Failed to fetch about page data", error);
//       }
//     }
//     fetchAboutPageData();
//   }, []);

//   // Contact verisi
//   useEffect(() => {
//     async function fetchContactPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/contact`, {
//           headers: { Lang: lang },
//         });
//         setContact(data);
//       } catch (error) {
//         console.error("Failed to fetch contact page data", error);
//       }
//     }
//     fetchContactPageData();
//   }, []);

//   // Gallery verisi
//   useEffect(() => {
//     async function fetchGalleryPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/gallery`, {
//           headers: { Lang: lang },
//         });
//         setGallery(data);
//       } catch (error) {
//         console.error("Failed to fetch gallery page data", error);
//       }
//     }
//     fetchGalleryPageData();
//   }, []);

//   // EntryPage verisi
//   useEffect(() => {
//     async function fetchEntryPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/entry-page`, {
//           headers: { Lang: lang },
//         });
//         setEntryPage(data);
//       } catch (error) {
//         console.error("Failed to fetch entry page data", error);
//       }
//     }
//     fetchEntryPageData();
//   }, []);

//   useEffect(() => {
//     async function fetchBrandsData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/brands`, {
//           headers: { Lang: lang },
//         });
//         setBrands(data);
//       } catch (error) {
//         console.error("Failed to fetch brands page data", error);
//       }
//     }
//     fetchBrandsData();
//   }, []);

//   useEffect(() => {
//     async function fetchProducsData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/products`, {
//           headers: { Lang: lang },
//         });
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch products page data", error);
//       }
//     }
//     fetchProducsData();
//   }, []);

//   useEffect(() => {
//     async function fetchProductionData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en";
//       try {
//         const { data } = await axiosInstance.get(`/page-data/production`, {
//           headers: { Lang: lang },
//         });
//         setProduction(data);
//       } catch (error) {
//         console.error("Failed to fetch products page data", error);
//       }
//     }
//     fetchProductionData();
//   }, []);







//   // Mobil kontrolü
//   useEffect(() => {
//     function checkIsMobile() {
//       setIsMobile(window.innerWidth <= 768);
//     }
//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   // Overlay kapanma animasyonu
//   const finish = useCallback(() => {
//     setIsFading(true);
//     setTimeout(() => {
//       setShowOverlay(false);
//     }, 500);
//   }, []);
//   useEffect(() => {
//     const handleWheel = () => finish();
//     const handleTouchMove = () => finish();
//     window.addEventListener("wheel", handleWheel, { passive: true });
//     window.addEventListener("touchmove", handleTouchMove, { passive: true });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [finish]);

//   return (
//     <>
//       {showOverlay && (
//         <div className={`introOverlay${isFading ? " fadeOut" : ""}`}>
//           {entryPage?.data?.data
//             ?.filter(item => item.video)                     // Sadece videolu öğeler
//             .map(item => (
//               <video
//                 key={item.id}
//                 src={`https://admin-konstralab.onestudio.az/storage${item.video}`}
//                 autoPlay
//                 muted
//                 loop
//                 className="introGif"
//               />
//             ))
//           }
//           <div className="gifOverlay" />
//           <div className="overlayText">
//             <Image
//               src="/icon/logoKonstralab.svg"
//               alt="logo"
//               width={350}
//               height={300}
//             />
//           </div>
//           <div className="overlayScrool">
//             <span>
//               SCROLL
//               <img src="/icon/bottomDown.svg" alt="down arrow" />
//             </span>
//           </div>
//         </div>
//       )}

//       {!showOverlay && (
//         <main>
//           {isMobile && (
//             <HeaderHero className="showMobile" contact={contact} entryPage={entryPage} />
//           )}
//           <div className="container">
//             {!isMobile && (
//               <HeaderHero  className="notShowMobile" contact={contact} entryPage={entryPage} />
//             )}
//             <About about={about} />
//             <MobileHoverCards production={production} />
//             <Cards production={production} />
//           </div>
//           <Brands products={products} brands={brands} />
//           <Slider gallery={gallery} />
//           <div className="contactBackground">
//             <div className="container">
//               <Contact contact={contact} />
//             </div>
//           </div>
//           <div className="footerBackground">
//             <Footer contact={contact} />
//           </div>
//         </main>
//       )}
//     </>
//   );
// }











// ! sonra
"use client";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderHero from "@/components/HeaderHero";
import MobileHoverCards from "@/components/MobileHoverCards";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/lib/axios";

// getTranslations fonksiyonu
async function getTranslations() {
  try {
    const response = await axiosInstance.get("/translation-list");
    return response;
  } catch (err) {
    console.log("Failed to fetch translations", err);
  }
}

export default function HomePage() {
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

  // translations state ve t
  const [translations, setTranslations] = useState(null);
  const t = translations?.data;

  // translations fetch useEffect
  useEffect(() => {
    async function loadTranslations() {
      const result = await getTranslations();
      if (result) {
        setTranslations(result);
      }
    }
    loadTranslations();
  }, []);

  // About verisi
  useEffect(() => {
    async function fetchAboutPageData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/about`, {
          headers: { Lang: lang },
        });
        setAbout(data);
      } catch (error) {
        console.error("Failed to fetch about page data", error);
      }
    }
    fetchAboutPageData();
  }, []);

  // Contact verisi
  useEffect(() => {
    async function fetchContactPageData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/contact`, {
          headers: { Lang: lang },
        });
        setContact(data);
      } catch (error) {
        console.error("Failed to fetch contact page data", error);
      }
    }
    fetchContactPageData();
  }, []);

  // Gallery verisi
  useEffect(() => {
    async function fetchGalleryPageData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/gallery`, {
          headers: { Lang: lang },
        });
        setGallery(data);
      } catch (error) {
        console.error("Failed to fetch gallery page data", error);
      }
    }
    fetchGalleryPageData();
  }, []);

  // EntryPage verisi
  useEffect(() => {
    async function fetchEntryPageData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/entry-page`, {
          headers: { Lang: lang },
        });
        setEntryPage(data);
      } catch (error) {
        console.error("Failed to fetch entry page data", error);
      }
    }
    fetchEntryPageData();
  }, []);

  // Brands verisi
  useEffect(() => {
    async function fetchBrandsData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/brands`, {
          headers: { Lang: lang },
        });
        setBrands(data);
      } catch (error) {
        console.error("Failed to fetch brands page data", error);
      }
    }
    fetchBrandsData();
  }, []);

  // Products verisi
  useEffect(() => {
    async function fetchProducsData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/products`, {
          headers: { Lang: lang },
        });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products page data", error);
      }
    }
    fetchProducsData();
  }, []);

  // Production verisi
  useEffect(() => {
    async function fetchProductionData() {
      const lang = Cookies.get("NEXT_LOCALE") || "en";
      try {
        const { data } = await axiosInstance.get(`/page-data/production`, {
          headers: { Lang: lang },
        });
        setProduction(data);
      } catch (error) {
        console.error("Failed to fetch production page data", error);
      }
    }
    fetchProductionData();
  }, []);

  // Mobil kontrolü
  useEffect(() => {
    function checkIsMobile() {
      setIsMobile(window.innerWidth <= 768);
    }
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Overlay kapanma animasyonu
  const finish = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
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
            ?.filter(item => item.video)
            .map(item => (
              <video
                key={item.id}
                src={`https://admin-konstralab.onestudio.az/storage${item.video}`}
                autoPlay
                muted
                loop
                className="introGif"
              />
            ))
          }
          <div className="gifOverlay" />
          <div className="overlayText">
            <Image
              src="/icon/logoKonstralab.svg"
              alt="logo"
              width={350}
              height={300}
            />
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
          {isMobile && (
            <HeaderHero t={t} className="showMobile" contact={contact} entryPage={entryPage} />
          )}
          <div className="container">
            {!isMobile && (
              <HeaderHero t={t} className="notShowMobile" contact={contact} entryPage={entryPage} />
            )}
            <About t={t}  about={about} />
            <MobileHoverCards t={t}  production={production} />
            <Cards t={t}  production={production} />
          </div>
          <Brands t={t}  products={products} brands={brands} />
          <Slider t={t}  gallery={gallery} />
          <div className="contactBackground">
            <div className="container">
              <Contact t={t}  contact={contact} />
            </div>
          </div>
          <div className="footerBackground">
            <Footer t={t}  contact={contact} />
          </div>
        </main>
      )}
    </>
  );
}

// ! sonra

















// ! son versiya apiden evvel

// "use client";
// import About from "@/components/About";
// import Brands from "@/components/Brands";
// import Cards from "@/components/Cards";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import HeaderHero from "@/components/HeaderHero";
// import MobileHoverCards from "@/components/MobileHoverCards";
// import Products from "@/components/Products";
// import Slider from "@/components/Slider";
// import Image from "next/image";
// import React, { useState, useEffect, useCallback } from "react";
// import Cookies from "js-cookie"; // ✅ js-cookie import edildi
// import axiosInstance from "@/lib/axios";

// export default function HomePage() {
//   const [showOverlay, setShowOverlay] = useState(true);
//   const [isFading, setIsFading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [about, setAbout] = useState(null);
//   const [contact, setContact] = useState(null);
//   const [gallery, setGallery] = useState(null);
//   const [entryPage, setEntryPage] = useState(null);

//   // 3) Client-side data fetch useEffect’i
//   useEffect(() => {
//     async function fetchAboutPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en"; // ✅ js-cookie ilə oxundu
//       try {
//         const { data } = await axiosInstance.get(`/page-data/about`, {
//           headers: { Lang: lang }, // ✅ Lang header əlavə olundu
//         });
//         setAbout(data);
//       } catch (error) {
//         console.error("Failed to fetch about page data", error);
//       }
//     }
//     fetchAboutPageData();
//   }, []);

//   useEffect(() => {
//     async function fetchContactPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en"; // ✅ js-cookie ilə oxundu
//       try {
//         const { data } = await axiosInstance.get(`/page-data/contact`, {
//           headers: { Lang: lang }, // ✅ Lang header əlavə olundu
//         });
//         setContact(data);
//       } catch (error) {
//         console.error("Failed to fetch contact page data", error);
//       }
//     }
//     fetchContactPageData();
//   }, []);

//   useEffect(() => {
//     async function fetchGalleryPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en"; // ✅ js-cookie ilə oxundu
//       try {
//         const { data } = await axiosInstance.get(`/page-data/gallery`, {
//           headers: { Lang: lang }, // ✅ Lang header əlavə olundu
//         });
//         setGallery(data);
//       } catch (error) {
//         console.error("Failed to fetch gallery page data", error);
//       }
//     }
//     fetchGalleryPageData();
//   }, []);


//   useEffect(() => {
//     async function fetchEntryPageData() {
//       const lang = Cookies.get("NEXT_LOCALE") || "en"; // ✅ js-cookie ilə oxundu
//       try {
//         const { data } = await axiosInstance.get(`/page-data/entry-page`, {
//           headers: { Lang: lang }, // ✅ Lang header əlavə olundu
//         });
//         setEntryPage(data);
//       } catch (error) {
//         console.error("Failed to fetch entry page data", error);
//       }
//     }
//     fetchEntryPageData();
//   }, []);



//   useEffect(() => {
//     function checkIsMobile() {
//       setIsMobile(window.innerWidth <= 768);
//     }

//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   const finish = useCallback(() => {
//     setIsFading(true);
//     setTimeout(() => {
//       setShowOverlay(false);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     const handleWheel = () => finish();
//     const handleTouchMove = () => finish();
//     window.addEventListener("wheel", handleWheel, { passive: true });
//     window.addEventListener("touchmove", handleTouchMove, { passive: true });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [finish]);

//   return (
//     <>
//       {showOverlay && (
//         <div className={`introOverlay${isFading ? " fadeOut" : ""}`}>
//           <img
//             src="/images/konstralab.gif"
//             alt="Intro GIF"
//             className="introGif"
//           />
//           <div className="gifOverlay" />
//           <div className="overlayText">
//             <Image
//               src="/icon/logoKonstralab.svg"
//               alt="logo"
//               width={350}
//               height={300}
//             />
//           </div>
//           <div className="overlayScrool">
//             <span>
//               SCROLL
//               <img src="/icon/bottomDown.svg" alt="down arrow" />
//             </span>
//           </div>
//         </div>
//       )}

//       {!showOverlay && (
//         <main>
//           {isMobile && <HeaderHero className="showMobile" entryPage={entryPage} />}

//           <div className="container">
//             {!isMobile && <HeaderHero className="notShowMobile" entryPage={entryPage} />}
//             <About about={about} />
//             <MobileHoverCards />
//             <Cards />
//           </div>
//           <Brands />
//           <div className="container">
//             <Products />
//           </div>
//           <Slider gallery={gallery} />
//           <div className="contactBackground">
//             <div className="container">
//               <Contact contact={contact} />
//             </div>
//           </div>
//           <div className="footerBackground">
//             <Footer />
//           </div>
//         </main>
//       )}
//     </>
//   );
// }
