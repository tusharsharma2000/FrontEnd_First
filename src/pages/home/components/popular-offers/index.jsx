import React from "react";
import "./popular-offers.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PopularOfferPhones from "../popular-offers-phones";

const PopularOffers = () => {
    return (
        <div className="container popular-offers-main">
            <div className="top-part">
                <section className="section-heading">
                    Popular Mobile Offers
                </section>
                <button className='view-all-btn mx-2 py-1 px-2'>View All</button>
            </div>
            <div className="tabs">
                <Tabs
                    defaultActiveKey="10000"
                    id="justify-tab-example"
                    className="mb-3">

                    <Tab eventKey="10000" title="Under Rs. 10,000" className="custom-tab">
                        <PopularOfferPhones />
                    </Tab>
                    <Tab eventKey="15000" title="Rs. 10,000 - Rs. 15,000" className="custom-tab">
                        <PopularOfferPhones />
                    </Tab>
                    <Tab eventKey="25000" title="Rs. 15,000 - Rs. 25,000" className="custom-tab">
                        <PopularOfferPhones />
                    </Tab>
                    <Tab eventKey="50000" title="Rs. 25,000 - Rs. 50,000" className="custom-tab">
                        <PopularOfferPhones />
                    </Tab>
                    <Tab eventKey="50000Plus" title="Above Rs. 50,000" className="custom-tab">
                        <PopularOfferPhones />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default PopularOffers;