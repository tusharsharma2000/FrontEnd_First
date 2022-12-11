import React from "react";

const BillDetails = ()=>{
    return(
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
    )
}

export default BillDetails;