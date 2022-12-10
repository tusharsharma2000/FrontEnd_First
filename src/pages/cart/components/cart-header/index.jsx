import React from "react";
import "./cart-header.css";
import Logo from "../../../../common/components/logo";
import SecurePay from "../../../../common/assets/icons/secure-pay.svg";

const CartHeader = ()=>{
    return(
            <div className="cart-header container">
                {/* <div className="container d-flex align-items-center justify-space-between"> */}
                <Logo />
                <div className="secure">
                    <img src={SecurePay} alt="secure pay icon" />
                    <span className="secure-text mx-2">100 % Secure Transaction</span>
                </div>
                {/* </div> */}
            </div>
    )
}

export default CartHeader;