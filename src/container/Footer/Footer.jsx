import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import { FooterOverlay } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.mb_logo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Our clients are at the heart of what we do.&quot;
        </p>
        <img
          src={images.s_screw}
          alt="about_small_screw"
          className="s_screw__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />

          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <div className="map-section">
          <div className="gmap-frame">
            <iframe
              id="gmap_canvas"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=380%20Finchdene%20Square,%20Unit%2014%20%20Scarborough,%20ON%20M1X%20IC9+(MB%20Design)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
            >
              <a href="https://www.gps.ie/" aria-label="GPS Systems">
                gps systems
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        {new Date().getFullYear()} MB Design. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
