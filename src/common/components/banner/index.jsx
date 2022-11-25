import React from "react";
import mobileLarge from "../../assets/icons/mobile-large.svg";
import mobileBottom from "../../assets/icons/mobile-bottom.svg";
import "./banner.css";
import Logo from "../logo";

const Banner = () => {
    return (
        <div className='app-banner'>
            <div className='padding-40'>
                <Logo lightMode />
                <div className="bannerImage">
                  <img
                    src={mobileLarge}
                    alt='moble icon'
                    className='relative top70 mobile'
                  />
                  <img src={mobileBottom} alt='moble icon' className="mobile-bottom"/>
                  <div className='banner-text'>
                      India’s Leading Mobile Comparison Portal
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
