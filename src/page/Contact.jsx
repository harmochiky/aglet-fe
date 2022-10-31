import React from "react";
import ContactImg from "../assets/contact/contact-image.jpg";

export default function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="container">
        <div className="inner-container">
          <div className="left">
            <div className="img-wrapper">
              <img src={ContactImg} alt="Berlin" />
            </div>
          </div>
          <div className="right">
            <h3 className="hello_text">Hello</h3>
            <p>
              my name is <b>Harmony Chikari</b>
              <br />
              and i am currently watching <br />a series called{" "}
              <b>Series Name.</b>
              <br />
            </p>
            <p>
              you can reach me on :
              <br />
              <a href="tel:+27835141538">
                <b>tel:</b>+27 83 514 1538
              </a>
              <br />
              <a href="mailto:harmochiky2@gmail.com">
                <b>email:</b> harmochiky2@gmail.com
              </a>
              <br />
            </p>
            <div className="share-section">
              <span>Share: </span>
              <img
                alt=""
                src="https://img.icons8.com/windows/32/ffffff/facebook-f--v1.png"
              />
              <img
                alt=""
                src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"
              />
              <img
                alt=""
                src="https://img.icons8.com/ios/50/ffffff/google-plus.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
