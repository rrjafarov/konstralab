"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const About = ({ about ,t }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const aboutData = about.data;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="aboutSection">
        <div className="row">
          <div className="xl-6 lg-6 md-6 sm-12" id="bottomRow">
            <div
              className={`aboutSectionImage ${isVisible ? "slideIn" : ""}`}
              ref={imageRef}
            >
              <Image
                // src={`https://admin-konstralab.onestudio.az/storage${aboutData.image}`}
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${aboutData.image}`}
                alt="about"
                height={600}
                width={650}
              />
            </div>
          </div>


          <div className="xl-6 lg-6 md-6 sm-12" id="topRow">
            <div className="aboutSectionContent">
              <span>{t?.about || "about us"}</span>
              <h2>{aboutData.title}</h2>
              <div
                className="ptag"
                dangerouslySetInnerHTML={{
                  __html: aboutData.content,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
