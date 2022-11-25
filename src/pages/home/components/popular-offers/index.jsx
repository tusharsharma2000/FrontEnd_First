import React from "react";
import "./popular-offers.css";

const PopularOffers = ()=>{
    return(
        <div className="container popular-offers-main">
            <div className="top-part">
                <section className="section-heading">
                    Popular Mobile Offers
                </section>
                <button className='view-all-btn mx-2 py-1 px-2'>View All</button>
            </div>
            <div className="tabs">
                
            </div>
            <div className="bottom-part"></div>
        </div>
    );
};

export default PopularOffers;