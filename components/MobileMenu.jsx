// import React from "react";
// import MobileMenuCloseIcon from "@/public/icon/mobileMenuClose.svg";
// import Link from "next/link";
// import Phone from "@/public/icon/phoneHeader.svg";

// const MobileMenu = ({ contactData, onClose,t }) => {
//   return (
//     <div id="mobileMenu">
//       <div className="mobileMenuHeader">
//         <span>{t?.menu || "Menu"}</span>
//         <div
//           className="closeMobileMenu"
//           onClick={onClose}
//           style={{ cursor: "pointer" }}
//         >
//           <MobileMenuCloseIcon />
//         </div>
//       </div>
//       <div className="mobileMenuNavLinks">
//         <ul>
//           <li>
//             <Link href="#about">
//               <span>{t?.aboutFabric || "About Fabric"}</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#production">
//               <span>{t?.production || "Production"}</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#products">
//               <span>{t?.products || "Products"}</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#gallery">
//               <span>{t?.gallery || "Gallery"}</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact">
//               <span>{t?.contact || "Contact"}</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="mobileMenuLine"></div>

//       <div className="mobileMenuContact">
//         <span>{t?.contact || "Contact"}</span>
//         <div className="mobileContactLinks">
//           <div className="mobileContactLink">
//             <Link href={`tel:+${contactData.phone}`}>
//               <div className="iconDiv">
//                 <img src="/icon/phoneContactMobile.svg" alt="" />
//               </div>
//               <span>+{contactData.phone}</span>
//             </Link>
//           </div>

//           <div className="mobileContactLink">
//             <a href={`mailto:${contactData.email}`}>
//               <div className="iconDiv">
//                 <img src="/icon/mailContactMobile.svg" alt="" />
//               </div>
//               <span>{contactData.email}</span>
//             </a>
//           </div>

//           <div className="mobileContactLink">
//             <div className="iconDiv">
//               <img src="/icon/locationContactMobile.svg" alt="" />
//             </div>
//             <span>{contactData.address}</span>
//           </div>
//         </div>
//       </div>

//       <Link
//         className="mobileMenuCallButtonAll"
//         href={`tel:+${contactData.phone}`}
//       >
//         <div className="mobileMenuCallButton">
//           <div className="callHeader">
//             <div className="callHeaderItem">
//               <Phone />
//               <span>{t?.getInTouch || "Get in touch"}</span>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default MobileMenu;












import React from "react";
import MobileMenuCloseIcon from "@/public/icon/mobileMenuClose.svg";
import Link from "next/link";
import Phone from "@/public/icon/phoneHeader.svg";

const MobileMenu = ({ contactData, onClose, t }) => {
  // Bütün kliklənən linklər üçün menyunu bağlayan handler
  const handleLinkClick = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div id="mobileMenu">
      <div className="mobileMenuHeader">
        <span>{t?.menu || "Menu"}</span>
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
            <Link href="#about" onClick={handleLinkClick}>
              <span>{t?.aboutFabric || "About Fabric"}</span>
            </Link>
          </li>
          <li>
            <Link href="#production" onClick={handleLinkClick}>
              <span>{t?.production || "Production"}</span>
            </Link>
          </li>
          <li>
            <Link href="#products" onClick={handleLinkClick}>
              <span>{t?.products || "Products"}</span>
            </Link>
          </li>
          <li>
            <Link href="#gallery" onClick={handleLinkClick}>
              <span>{t?.gallery || "Gallery"}</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={handleLinkClick}>
              <span>{t?.contact || "Contact"}</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobileMenuLine"></div>

      <div className="mobileMenuContact">
        <span>{t?.contact || "Contact"}</span>
        <div className="mobileContactLinks">
          <div className="mobileContactLink">
            <Link href={`tel:+${contactData.phone}`} onClick={handleLinkClick}>
              <div className="iconDiv">
                <img src="/icon/phoneContactMobile.svg" alt="" />
              </div>
              <span>+{contactData.phone}</span>
            </Link>
          </div>

          <div className="mobileContactLink">
            <a href={`mailto:${contactData.email}`} onClick={handleLinkClick}>
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
        onClick={handleLinkClick}
      >
        <div className="mobileMenuCallButton">
          <div className="callHeader">
            <div className="callHeaderItem">
              <Phone />
              <span>{t?.getInTouch || "Get in touch"}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MobileMenu;
