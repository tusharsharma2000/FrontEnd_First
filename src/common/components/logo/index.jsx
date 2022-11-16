import React from "react";
import logo from "../../assets/images/logo.svg";
import "./logo.css"

const Logo = (props) => {
    const {lightMode} = props;
    const textColor = lightMode? "white-color" : "black-color";
    return(
        <div className="d-flex align-items-center">
            <img src={logo} alt="logo  of company Coffeee" />
            <div className={`logo-text mx-2 ${textColor}`}>Coffeee</div>
        </div>
    )
};

export default Logo;