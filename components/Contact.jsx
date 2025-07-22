import Link from "next/link";
import React from "react";

const Contact = ({ contact ,t }) => {
  const contactData = contact.data;
  return (
    <div>
      <div className="contactSection">
        <div className="row">
          <div className="xl-5 lg-5 md-8 sm-12">
            <div className="contactContent">
              <strong>{t?.talkToUs || "talk to us"}</strong>
              <span>{contactData.footer_text_title}</span>
              <div
                className="contact-ptag"
                dangerouslySetInnerHTML={{
                  __html: contactData.footer_text_content,
                }}
              ></div>

              <div className="contactLinks">
                <strong>{t?.contact || "Contact"}</strong>
                <div className="contactLink">
                  <Link href={`tel:+${contactData.phone}`}>
                    <div className="iconDiv">
                      <img src="/icon/phoneContact.svg" alt="" />
                    </div>
                    <span>+{contactData.phone}</span>
                  </Link>
                </div>
                <div className="contactLink">
                  <a href={`mailto:${contactData.email}`}>
                    <div className="iconDiv">
                      <img src="/icon/mailContact.svg" alt="" />
                    </div>
                    <span>{contactData.email}</span>
                  </a>
                </div>
                <div className="contactLink">
                  <div className="iconDiv">
                    <img src="/icon/locationContact.svg" alt="" />
                  </div>
                  <span>{contactData.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
