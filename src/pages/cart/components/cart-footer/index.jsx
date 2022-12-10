import React from "react";
import PaymentIcons from "../../../../common/assets/icons/payment-icons.svg"

const CartFooter = ()=>{
    return(
        <div className="payment-icons">
            <img src={PaymentIcons} alt="payment icons" />
        </div>
    )
}

export default CartFooter;