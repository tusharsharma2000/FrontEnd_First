import React from "react";
import CartHeader from "../cart/components/cart-header";
import CompleteIcon from "../../common/assets/icons/complete.jsx";
import ThreeIcon from "../cart/icons/3.svg";
import InfoIcon from "../cart/icons/info.svg";
import OffersIcon from "../../common/assets/icons/offers";
import CartFooter from "../cart/components/cart-footer";
// import FinalAddress from "./components/final-address";

const Payment = () => {
    return (
        <div>
            <div>
                <CartHeader />
            </div>
            <div className="cart-main">
                <div className="container cart-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="cart-left">
                                <div className="d-flex align-items-center justify-space-between">
                                    <div className="cart-top-one mx-3">
                                        <img
                                            src={CompleteIcon}
                                            alt="complete icon"
                                            className="mx-1"
                                        />
                                        <span className="mx-2">Shopping Cart</span>
                                    </div>
                                    <div className="cart-top-two mx-2">
                                        <div className="rule"></div>
                                        <img src={CompleteIcon} alt="two icon" className="mx-1" />
                                        <span className="mx-2">Select Address</span>
                                    </div>
                                    <div className="cart-top-three mx-2">
                                        <div className="rule"></div>
                                        <img src={ThreeIcon} alt="three icon" className="mx-1" />
                                        <span className="mx-2">Payment</span>
                                    </div>
                                </div>

                                <div className="heading-main my-3">
                                    <span className="cart-payment-heading p-3">Payment</span>
                                </div>
                                <div className="my-4 text-align-left px-3">
                                    <input type="radio" />
                                    <span className="radio-text px-2">Cash on delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            
                            <div className="cart-right-top px-3">
                                <div className="d-flex align-items-center justify-space-between">
                                    <span className="apply-coupon heading">Address</span>
                                    <button className="apply-btn pink-link">Apply</button>
                                </div>
                                <div>
                                    <div className="add-name bold-font" id="bold-font">Vijay Bisht</div>
                                    <div>101, Acecity, Sector 1, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh- 201306</div>
                                </div>
                            </div>
                            <div className="cart-right-top px-3">
                                <div className="apply-coupon heading">Apply Coupon</div>
                                <div className="coupon-input-field d-flex align-items-center ">
                                    <OffersIcon color="#21C17A" />
                                    <input
                                        type="text"
                                        placeholder="Enter Coupon Code"
                                        className="px-2"
                                    />
                                    <button className="apply-btn pink-link">Apply</button>
                                </div>
                            </div>
                            <div className="cart-right-bottom px-3">
                                <div className="heading">Bill Details</div>
                                <div className="detail-sub-text my-2">
                                    <span>Item Total</span>
                                    <span>₹1,34,250.00</span>
                                </div>
                                <div className="detail-sub-text my-2">
                                    <a href="#/">
                                        <span>Taxes & Charges</span>
                                        <img src={InfoIcon} alt="info icon" />
                                    </a>
                                    <span>₹250.00</span>
                                </div>
                                <div className="hr-rule"></div>
                                <div className="detail-sub-text my-2">
                                    <span>Total Amount</span>
                                    <span className="total-amt">1,28,250.00</span>
                                </div>
                                <button className="add-btn">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CartFooter />
            </div>
        </div>
    );
};

export default Payment;
