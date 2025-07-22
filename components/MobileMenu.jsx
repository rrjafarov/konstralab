import React from "react";
import MobileMenuCloseIcon from "@/public/icon/mobileMenuClose.svg";
import Link from "next/link";
import Phone from "@/public/icon/phoneHeader.svg";

const MobileMenu = ({ contactData, onClose }) => {
  return (
    <div id="mobileMenu">
      <div className="mobileMenuHeader">
        <span>Menu</span>
        <div
          className="closeMobileMenu"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          <MobileMenuCloseIcon />
        </div>
      </div>
      <div className="mobileMenuNavLinks">
        <ul>
          <li>
            <Link href="#about">
              <span>About Fabric</span>
            </Link>
          </li>
          <li>
            <Link href="#production">
              <span>About Fabric</span>
            </Link>
          </li>
          <li>
            <Link href="#products">
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link href="#gallery">
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <span>Contact us</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobileMenuLine"></div>

      <div className="mobileMenuContact">
        <span>Contact us</span>
        <div className="mobileContactLinks">
          <div className="mobileContactLink">
            <Link href={`tel:+${contactData.phone}`}>
              <div className="iconDiv">
                <img src="/icon/phoneContactMobile.svg" alt="" />
              </div>
              <span>+{contactData.phone}</span>
            </Link>
          </div>

          <div className="mobileContactLink">
            <a href={`mailto:${contactData.email}`}>
              <div className="iconDiv">
                <img src="/icon/mailContactMobile.svg" alt="" />
              </div>
              <span>{contactData.email}</span>
            </a>
          </div>

          <div className="mobileContactLink">
            <div className="iconDiv">
              <img src="/icon/locationContactMobile.svg" alt="" />
            </div>
            <span>{contactData.address}</span>
          </div>
        </div>
      </div>

      <Link
        className="mobileMenuCallButtonAll"
        href={`tel:+${contactData.phone}`}
      >
        <div className="mobileMenuCallButton">
          <div className="callHeader">
            <div className="callHeaderItem">
              <Phone />
              <span>Get in Touch</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MobileMenu;
