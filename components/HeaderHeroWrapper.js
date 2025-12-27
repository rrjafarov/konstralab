// components/HeaderHeroWrapper.js
"use client";
import { useState, useEffect } from "react";
import HeaderHero from "./HeaderHero";

export default function HeaderHeroWrapper({ t, contact, entryPage }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <HeaderHero t={t} className="showMobile" contact={contact} entryPage={entryPage} />
      ) : (
        <HeaderHero t={t} className="notShowMobile" contact={contact} entryPage={entryPage} />
      )}
    </>
  );
}
