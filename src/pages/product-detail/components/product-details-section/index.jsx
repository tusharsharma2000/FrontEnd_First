import React from "react";
import "./product-details-section.css";
import CheckIcon from "../../../../common/assets/icons/check-icon.svg";
import CardIcon from "../../../../common/assets/icons/card.svg";
import TruckIcon from "../../../../common/assets/icons/truck.svg"
import ReturnIcon from "../../../../common/assets/icons/return.svg"
import CancelIcon from "../../../../common/assets/icons/cancel.svg"
import OffersIcon from "../../../../common/assets/icons/offers";
import CartIcon from "../../../../common/assets/icons/cart";
import ColorPicker from "../color-picker";
import Form from 'react-bootstrap/Form';

const ProductDetailsSection = (props) => {
    // const { productDetail } = props;
    // const {
    //     name = "",
    //     originalPrice = "",
    //     currentPrice = "",
    //     discount = "",
    //     emi = "",
    //     offer = "",
    //     availableColors = [],
    //     keyFeatures = [],
    // } = productDetail;

    return (
        <div className="product-section-main">
            <h1 className="product-title">
                Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)
            </h1>
            <div className="key-features text-align-left section-gap">
                <span className="features-heading mb-2">KEY FEATURES</span>
                <ul>
                    <li className="feature">
                        <img src={CheckIcon} alt="check icon" />
                        <span className="ml-2">
                            Capacity 6 kg : Suitable for bachelors & couples
                        </span>
                    </li>
                    <li className="feature">
                        <img src={CheckIcon} alt="check icon" />
                        <span className="ml-2">
                            Warranty : 4 years on product, 4 years on motor
                        </span>
                    </li>
                    <li className="feature">
                        <img src={CheckIcon} alt="check icon" />
                        <span className="ml-2">
                            800 rpm : Higher the spin speed, faster the drying time
                        </span>
                    </li>

                    {/* {keyFeatures.map(featureText => {
                        return (
                            <li>
                                <img src={CheckIcon} alt='check icon' />
                                <span className='mx-2'>{featureText}</span>
                            </li>
                        );
                    })} */}

                </ul>
            </div>
            <div className="color-picker section-gap">
                <span className="color-heading">Choose Color</span>
                <div className="d-flex justify-space-between">
                    <ColorPicker color='#222C34' colorName='Charcal Black' active />
                    <ColorPicker color='#3D5971' colorName='Magnite Grey' />
                    <ColorPicker color='#1E4E95' colorName='Classic Blue' />
                    <ColorPicker color='white' colorName='White' />
                    <ColorPicker color='#E5E9EC' colorName='Silver' />

                    {/* {availableColors.map(color => {
                        return <ColorPicker color={color} key={color} />;
                    })} */}
                </div>
            </div>
            <div className="quantity section-gap d-flex align-items-center">
                <label>Select Qty.</label>
                <Form.Select aria-label="Default select example" className="custom-width-quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>

            </div>
            <div className="prices section-gap">
                <div className=" price-top-part d-flex align-items-center justify-space-between">
                    <div className="current-phone-price">₹20,990</div>
                    <div className="original-phone-price mx-4">₹23,990</div>
                    <div className="discount-on-price">10% off</div>
                </div>
                <div className="price-bottom-part">Inclusive of all taxes</div>
            </div>

            <div className="other-details section-gap">
                <div className="d-flex align-items-center justify-space-between">
                    <span>
                        <img src={CardIcon} alt="card icon" />
                    </span>
                    <span className="mx-3">No cost EMI ₹1,750/month. Standard EMI also available. T&C </span>
                </div>
                <div className="d-flex align-items-center justify-space-between">
                    <span>
                        <OffersIcon color="black" height="16" width="16"/>
                    </span>
                    <span className="my-2 custom-margin">
                        Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit
                        Card. T&C
                    </span>
                </div>
            </div>

            <div className="add-to-cart section-gap">
                <button className="add-to-cart-btn btn">
                    <CartIcon color="white"/>
                    <span className="mx-3">Add to Cart</span>
                </button>
            </div>

            <div className="quick-policies d-flex align-items-center justify-space-between section-gap">
                <div className="d-flex align-items-start">
                    <img src={TruckIcon} alt="truck icon" />
                    <span className="mx-3">
                        <div>Shipping Fee</div>
                        <div className="custom-policy-text">FREE</div>
                    </span>
                </div>
                <div className=" d-flex align-items-start mx-4">
                <img src={ReturnIcon} alt="return icon" />
                    <span className="mx-3">
                    <div>Return Policy</div>
                    <div className="custom-policy-text">30 Days</div>
                    </span>
                </div>
                <div className="d-flex align-items-start">
                <img src={CancelIcon} alt="Cancel icon" />
                    <span className="mx-3">
                    <div>Cancellation</div>
                    <div className="custom-policy-text">Allowed</div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSection;
