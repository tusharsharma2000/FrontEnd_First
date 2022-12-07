import React from "react";
import "./share-button.css";
import Share from "../../assets/icons/share.svg"

const ShareButton = ()=>{
    return(
        <button className="btn btn-share d-flex">
            <img src={Share} alt="share icon" />
            <span className="mx-2">Share</span>
        </button>
    )
}

export default ShareButton;