import React from "react";
import "./order-confirm.css";
import CartHeader from "../cart/components/cart-header";
import CartFooter from "../cart/components/cart-footer";
import CompleteIcon from "../../common/assets/icons/complete";

const OrderConfirm = ()=>{
    return(
        <div>
            <CartHeader />
            <div className="order-main">
                <div className="container">
                <div className="row">
                    <div className="col-md-9 order-left">
                        <CompleteIcon width="48px" height="48px"/>
                        <div>Congratulation!!!</div>
                        <div>Order Place Successfully</div>
                        <div>
                            <span>Order No. 4757532490967</span>
                            <span>Date 29 July 2022</span>
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                </div>
            </div>
            <CartFooter />
        </div>
    )
}

export default OrderConfirm;