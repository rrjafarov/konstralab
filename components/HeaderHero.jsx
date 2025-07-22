"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import Phone from "@/public/icon/phoneHeader.svg";
import MobileMenuIcon from "@/public/icon/mobileMenuIcon.svg";
import MobileMenu from "@/components/MobileMenu"; // MobileMenu.jsx-in yerləşdiyi yol

const HeaderHero = ({ entryPage, contact }) => {
  const contactData = contact.data;

  const [currentLang, setCurrentLang] = useState("AZ");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const languages = ["AZ", "EN", "RU"];

  // Helper function to split first word and rest of text
  const splitFirstWord = (text) => {
    if (!text) return { firstWord: "", restText: "" };
    const words = text.trim().split(" ");
    const firstWord = words[0];
    const restText = words.slice(1).join(" ");
    return { firstWord, restText };
  };

  // Find the item that has title and sub_title (not null)
  const textData = useMemo(() => {
    return entryPage?.data?.data?.find((item) => item.title || item.sub_title);
  }, [entryPage?.data?.data]);

  const subTitleParts = useMemo(
    () => splitFirstWord(textData?.sub_title),
    [textData?.sub_title]
  );

  const titleParts = useMemo(
    () => splitFirstWord(textData?.title),
    [textData?.title]
  );

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    if (newLang && newLang !== currentLang) {
      setCurrentLang(newLang);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div id="header" style={{ position: "relative" }}>
      <div className="headerHero">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image
                src="/icon/logoAll.svg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>

          <div className="navMenu">
            <ul>
              <li>
                <Link href="#about">About Fabric</Link>
              </li>
              <li>
                <Link href="#production">Production</Link>
              </li>
              <li>
                <Link href="#products">Products</Link>
              </li>
              <li>
                <Link href="#gallery">Gallery</Link>
              </li>
              <li>
                <Link href="#contact">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="headerRight">
            <select
              className="languageSelect"
              value={currentLang}
              onChange={handleLanguageChange}
              aria-label="Dil seçimi"
            >
              <option value={currentLang} disabled hidden>
                {currentLang}
              </option>
              {languages
                .filter((lang) => lang !== currentLang)
                .map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
            </select>
            <Link href={`tel:+${contactData.phone}`}>
              <div className="callHeaderNav">
                <div className="callHeaderItem">
                  <Phone />
                  <span>Get in Touch</span>
                </div>
              </div>
            </Link>
            <div
              className="mobileMenuIcon"
              onClick={toggleMobileMenu}
              style={{ cursor: "pointer" }}
            >
              <MobileMenuIcon />
            </div>
          </div>
        </nav>

        <div className="heroImageWrapper">
          {entryPage?.data?.data
            ?.filter((item) => item.video)
            .map((item) => (
              <video
                key={item.id}
                src={`https://admin-konstralab.onestudio.az/storage${item.video}`}
                autoPlay
                muted
                loop
                className="heroGif"
              />
            ))}
        </div>

        <div className="heroBottom">
          <div className="heroBottomSubTitle">
            <span>
              {textData?.sub_title ? (
                <>
                  <strong>{subTitleParts.firstWord}</strong>
                  {subTitleParts.restText && ` ${subTitleParts.restText}`}
                </>
              ) : (
                <>
                  <strong>welcome to</strong> Konstralab industries
                </>
              )}
            </span>
          </div>
          <div className="heroBottomTitle">
            <span>
              {textData?.title ? (
                <>
                  <strong>{titleParts.firstWord}</strong>
                  {titleParts.restText && ` ${titleParts.restText}`}
                </>
              ) : (
                <>
                  <strong>Konstralab – </strong>The Strongest Intersection of
                  Aesthetics and Functionality
                </>
              )}
            </span>
          </div>
        </div>

        {/* Mobile menu slide-in/out */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "100vw",
            // maxWidth: "300px",
            backgroundColor: "#191919",
            transform: showMobileMenu ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
            zIndex: 100099999100099999,
          }}
        >
          <MobileMenu contactData={contactData} onClose={toggleMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;









// ! en son versiya
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import Phone from "@/public/icon/phoneHeader.svg";
// import MobileMenuIcon from "@/public/icon/mobileMenuIcon.svg";
// import MobileMenu from "@/components/MobileMenu"; // MobileMenu.jsx-in yerləşdiyi yol

// const HeaderHero = () => {
//   const [currentLang, setCurrentLang] = useState("AZ");
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const languages = ["AZ", "EN", "RU"];

//   const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     if (newLang && newLang !== currentLang) {
//       setCurrentLang(newLang);
//     }
//   };

//   const toggleMobileMenu = () => {
//     setShowMobileMenu((prev) => !prev);
//   };

//   return (
//     <div id="header" style={{ position: "relative" }}>
//       <div className="headerHero">
//         <nav className="navbar">
//           <div className="logo">
//             <Link href="/">
//               <Image
//                 src="/icon/logoAll.svg"
//                 alt="Logo"
//                 width={200}
//                 height={50}
//               />
//             </Link>
//           </div>

//           <div className="navMenu">
//             <ul>
//               <li>
//                 <Link href="#about">About Fabric</Link>
//               </li>
//               <li>
//                 <Link href="#production">Production</Link>
//               </li>
//               <li>
//                 <Link href="#products">Products</Link>
//               </li>
//               <li>
//                 <Link href="#gallery">Gallery</Link>
//               </li>
//               <li>
//                 <Link href="#contact">Contact us</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="headerRight">
//             <select
//               className="languageSelect"
//               value={currentLang}
//               onChange={handleLanguageChange}
//               aria-label="Dil seçimi"
//             >
//               <option value={currentLang} disabled hidden>
//                 {currentLang}
//               </option>
//               {languages
//                 .filter((lang) => lang !== currentLang)
//                 .map((lang) => (
//                   <option key={lang} value={lang}>
//                     {lang}
//                   </option>
//                 ))}
//             </select>
//             <div className="callHeaderNav">
//               <div className="callHeaderItem">
//                 <Phone />
//                 <span>Get in Touch</span>
//               </div>
//             </div>
//             <div
//               className="mobileMenuIcon"
//               onClick={toggleMobileMenu}
//               style={{ cursor: "pointer" }}
//             >
//               <MobileMenuIcon />
//             </div>
//           </div>
//         </nav>

//         <div className="heroImageWrapper">
//           <Image
//             className="heroGif"
//             src="/images/konstralab.gif"
//             alt="Hero"
//             width={1300}
//             height={750}
//             priority
//           />
//         </div>
//         <div className="heroBottom">
//           <div className="heroBottomSubTitle">
//             <span>
//               <strong>welcome to</strong> Konstralab industries
//             </span>
//           </div>
//           <div className="heroBottomTitle">
//             <span>
//               <strong>Konstralab – </strong>The Strongest Intersection of
//               Aesthetics and Functionality
//             </span>
//           </div>
//         </div>

//         {/* Mobile menu slide-in/out */}
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             right: 0,
//             height: "100vh",
//             width: "100vw",
//             // maxWidth: "300px",
//             backgroundColor: "#191919",
//             transform: showMobileMenu ? "translateX(0)" : "translateX(100%)",
//             transition: "transform 0.3s ease-in-out",
//             zIndex: 100099999100099999,
//           }}
//         >
//           <MobileMenu onClose={toggleMobileMenu} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderHero;
