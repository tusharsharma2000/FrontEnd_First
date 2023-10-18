import React from "react";
import { useNavigate } from "react-router-dom";
import OffersIcon from "../../common/assets/icons/offers";
import "./cart.css";
import CartFooter from "./components/cart-footer";
import CartHeader from "./components/cart-header";
import CartProduct from "./components/cart-product";
import OneIcon from "./icons/1.svg";
import TwoIcon from "./icons/2.svg";
import ThreeIcon from "./icons/3.svg";
import InfoIcon from "./icons/info.svg";

const Cart = () => {
    const navigate = useNavigate();
    const goToAddressPage = ()=>{
        navigate("/cart-address");
    };

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
                                        <img src={OneIcon} alt="one icon" className="mx-1" />
                                        <span className="mx-2">Shopping Cart</span>
                                    </div>
                                    <div className="cart-top-two mx-2">
                                        
                                        <img src={TwoIcon} alt="two icon" className="mx-1" />
                                        <span className="mx-2"><div className="rule"></div>Select Address</span>
                                    </div>
                                    <div className="cart-top-three mx-2">
                                        <div className="rule"></div>
                                        <img src={ThreeIcon} alt="three icon" className="mx-1" />
                                        <span className="mx-2">Payment</span>
                                    </div>
                                </div>

                                <div className="cart-heading">Shopping Cart</div>
                                <CartProduct />
                                <hr className="horizontal-line" />
                                <CartProduct />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cart-right-top px-3">
                                <div className="apply-coupon heading">Apply Coupon</div>
                                <div className="coupon-input-field d-flex align-items-center justify-center">
                                    <OffersIcon color="#21C17A" />
                                    <input type="text" placeholder="Enter Coupon Code" className="custom-outline-none px-2"/>
                                    <button className="apply-btn pink-link">Apply</button>
                                </div>
                            </div>
                            <div className="cart-right-bottom px-3">
                                <div className="heading">Bill Details</div>
                                <div className="detail-sub-text my-2">
                                    <span className="common-detail-text">Item Total</span>
                                    <span className="common-detail-text">₹1,34,250.00</span>
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
                                <button className="add-btn" onClick={goToAddressPage}>Select Address</button>
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

export default Cart;
