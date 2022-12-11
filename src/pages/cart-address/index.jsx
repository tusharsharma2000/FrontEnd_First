import React from "react";
import "./cart-address.css";
import CartFooter from "../cart/components/cart-footer";
import CartHeader from "../cart/components/cart-header";
import InfoIcon from "../cart/icons/info.svg";
import OffersIcon from "../../common/assets/icons/offers";
import CompleteIcon from "../../common/assets/icons/complete.jsx";
import TwoIcon from "../cart/icons/2.svg";
import ThreeIcon from "../cart/icons/3.svg";
import { useNavigate } from "react-router-dom";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import { MDBInput } from "mdb-react-ui-kit";

const CartAddress = () => {
    const navigate = useNavigate()
    const goToPaymentPage = ()=>{
        navigate("/payment");
    }

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
                                        <img src={TwoIcon} alt="two icon" className="mx-1" />
                                        <span className="mx-2">Select Address</span>
                                    </div>
                                    <div className="cart-top-three mx-2">
                                        <div className="rule"></div>
                                        <img src={ThreeIcon} alt="three icon" className="mx-1" />
                                        <span className="mx-2">Payment</span>
                                    </div>
                                </div>

                                <div className="heading-main my-3">
                                    <span className="cart-delivery-heading">
                                        Select Delivery Address
                                    </span>
                                    <button className="add-address-btn">Add New Address</button>
                                </div>

                                <div className="address-part d-flex align-items-center justify-space-between">
                                    <span className="select-address px-3 py-2 mx-3">
                                        <input type="radio" name="address" />
                                        <span>
                                            <span className="mx-2">Vijay Bisht</span>
                                            <div>
                                                101, Acecity, Sector 1, Greater Noida West, Gautam Budh
                                                Nagar, Uttar Pradesh- 201306
                                            </div>
                                        </span>
                                    </span>
                                    <span className="select-address px-3 py-2 mx-3">
                                        <input type="radio" name="address" />
                                        <span>
                                            <span className="mx-2">Dad’s Office</span>
                                            <div>
                                                A-90, First Floor, Sector 18, Noida, Near Noida Authority,
                                                Uttar Pradesh 201301
                                            </div>
                                        </span>
                                    </span>
                                </div>

                                <div className="new-address">
                                    <div className="address-sub-heaing heading">
                                        or Create New Delivery Address
                                    </div>

                                    {/* <FloatingLabel
                                    controlId="floatingInput"
                                    label="Save Address as"
                                    className="mb-3 custon-"
                                    >
                                    <Form.Control type="text" placeholder="Save Address as"/>
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Number">
                                    <Form.Control type="number" placeholder="Number" />
                                    </FloatingLabel> */}
                                    {/* <MDBInput label="Example label" id='form1' type='text' /> */}

                                    <div className="add-address-fields my-3">
                                        <div className="fields">
                                            <input type="text" placeholder="Save Address as" className="add-field-custom"/>
                                            <input type="number" placeholder="Mobile Number" className="add-field-custom"/>
                                        </div>
                                        <div className="fields">
                                            <input type="text" placeholder="Address 1" className="add-field-custom"/>
                                            <input type="text" placeholder="Address 2" className="add-field-custom"/>
                                        </div>
                                        <div className="fields">
                                            <input type="number" placeholder="Pincode" className="add-field-custom"/>
                                            <input type="text" placeholder="State" className="add-field-custom"/>
                                        </div>
                                        <div className="fields">
                                            <input type="text" placeholder="City" className="add-field-custom"/>
                                        </div>
                                    </div>

                                    <button className="deliver-button px-3 py-2"> Deliver Here</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cart-right-top px-3">
                                <div className="apply-coupon heading">Apply Coupon</div>
                                <div className="coupon-input-field d-flex align-items-center justify-center">
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
                                <button className="add-btn" onClick={goToPaymentPage}>Proceed to Payment</button>
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

export default CartAddress;
