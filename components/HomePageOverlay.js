// components/HomePageOverlay.js
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function HomePageOverlay({ entryPage, t }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isFading, setIsFading] = useState(false);

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

  if (!showOverlay) return null;

  return (
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
  );
}
