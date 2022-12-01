import React from "react";
import PhoneProduct from "../../../../common/components/phone-product";
import "./popular-offers-phones.css";
import { SamplePhones } from "../../../../common/constants/samplePhones.js";


const PopularOffersPhones = () => {
    return (
        <div className='popular-phones-main'>
            <div className='row'>
                {SamplePhones.map(phone => {
                    return (
                        <div className='col'>
                            <PhoneProduct productData={phone} key={phone.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularOffersPhones;