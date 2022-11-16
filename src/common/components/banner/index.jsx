import React from "react";
import "./banner.css";
import mobileLarge from "../../assets/images/mobile-large.svg";
import mobileBottom from "../../assets/images/mobile-bottom.svg";
import Logo from "../../components/logo";

const Banner = () => {
  return (
    <div className="app-banner">
      <div className="padding-50">
        <Logo lightMode/>
        <img src={mobileLarge} alt="mobile icon" className="relative top70" />
        <img src={mobileBottom} alt="mobile bottom" />
        <div className="banner-text">
          India's Leading Mobile Comparision Portal
        </div>
      </div>
    </div>
  );
};

export default Banner;
