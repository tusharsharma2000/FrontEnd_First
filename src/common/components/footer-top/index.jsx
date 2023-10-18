import React from "react";
import "./footer-top.css";
import { features } from "./constants/features";

const FooterTop = () => {
    return (
        <div className="footer-top-main container">
            <div className="row">
                {features.map( (feature) => {
                    return (
                        <div className="col-md-3 feature-container" key={feature.title}>
                            <div>
                                <img
                                    src={feature.icon}
                                    alt="icon of the feature"
                                    className="feature-icon"
                                />
                            </div>

                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-subtitle">{feature.subTitle}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FooterTop;
