"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Phone from "@/public/icon/phoneHeader.svg";

const Footer = ({ contact }) => {
  const [currentLang, setCurrentLang] = useState("AZ");
  const languages = ["AZ", "EN", "RU"];
  const contactData = contact.data;

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    if (newLang && newLang !== currentLang) {
      setCurrentLang(newLang);
    }
  };

  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footerLogo">
            <Link href="/">
              <Image
                src="/icon/logoAll.svg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>
          <div className="footerLogoMobile">
            <Link href="/">
              <Image
                src="/icon/logoMobileFooter.svg"
                alt="Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>
          <div className="footerMenu">
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
          <div className="footerRight">
            <select
              className="languageSelect"
              value={currentLang}
              onChange={handleLanguageChange}
              aria-label="Dil seçimi"
            >
              {/* Seçili dili gösteren, ancak açılır listede görünmeyen option */}
              <option value={currentLang} disabled hidden>
                {currentLang}
              </option>
              {/* Diğer dilleri listele */}
              {languages
                .filter((lang) => lang !== currentLang)
                .map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
            </select>

            <Link href={`tel:+${contactData.phone}`}>
              <div className="callHeader">
                <div className="callHeaderItem">
                  <Phone />
                  <span>Get in Touch</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="footerLine"></div>
      <div className="container">
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <span>
              © <strong>2025 Konstralab industries</strong>. All rights
              reserved.
            </span>
          </div>
          <div className="footerBottomRight">
            <span>Developed and Designed by</span>
            <Link href="https://one.az/" target="_blank">
              <h2>ONE Studio</h2>
              <div className="oneazLogo">
                <Image
                  width={5100}
                  height={5100}
                  alt="oneaz"
                  src="/icon/oneazLogo.svg"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
