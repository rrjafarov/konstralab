
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Phone from "@/public/icon/phoneHeader.svg";
import MobileMenuIcon from "@/public/icon/mobileMenuIcon.svg";
import MobileMenu from "@/components/MobileMenu"; // MobileMenu.jsx-in yerləşdiyi yol

const HeaderHero = ({ entryPage, contact,t }) => {
  const contactData = contact.data;

  const [currentLang, setCurrentLang] = useState("AZ");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const languages = ["AZ", "EN", "RU"];
  const router = useRouter();

  // URL-dən cari dili təyin et
  useEffect(() => {
    const path = window.location.pathname;
    const urlLang = path.split('/')[1]?.toUpperCase();
    if (languages.includes(urlLang)) {
      setCurrentLang(urlLang);
    }
  }, []);

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
      // URL-də dili dəyişdir
      const currentPath = window.location.pathname;
      const newPath = `/${newLang.toLowerCase()}${currentPath.replace(/^\/(az|en|ru)/, '')}`;
      router.push(newPath);
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
                <Link href="#about">{t?.aboutFabric || "About Fabric"}</Link>
              </li>
              <li>
                <Link href="#production">{t?.production || "Production"}</Link>
              </li>
              <li>
                <Link href="#products">{t?.products || "Products"}</Link>
              </li>
              <li>
                <Link href="#gallery">{t?.gallery || "Gallery"}</Link>
              </li>
              <li>
                <Link href="#contact">{t?.contact || "Contact"}</Link>
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
                  <span>{t?.getInTouch || "Get in touch"}</span>
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
            <h1>
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
            </h1>
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
          <MobileMenu t={t} contactData={contactData} onClose={toggleMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
// ! son versiya dil qosulub