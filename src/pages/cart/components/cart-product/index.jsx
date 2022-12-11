import React from "react";
import "./cart-product.css";
import iPhone from "../../icons/iphone.svg";
import Form from 'react-bootstrap/Form';
import Dot from "../../icons/dot";

const CartProduct = () => {
    return (
        <div className="cart-product-main d-flex align-items-center justify-space-between">
            <div className="row cart-section-gap">

                <div className="col-md-2">
                    <div className="product-image">
                        <img src={iPhone} alt="iphone" />
                    </div>
                </div>

                <div className="col-md-5 px-1">
                    <div className="cart-product-name">
                        Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)
                    </div>
                    <div className="cart-product-price">₹20,990</div>
                    <div className="price-bottom-text">Inclusive of all taxes</div>
                </div>

                <div className="col-md-1">
                    <div className="quantity-list text-align-left px-2">
                        <label>Qty.</label>
                        <Form.Select aria-label="Default select example" className="quantity-custom-width">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="color-list text-align-left">
                        <label>Color</label>
                        <Form.Select aria-label="Default select example" className="color-custom-width">
                            <option value="1">
                                <span className="">
                                    <Dot color="black" />
                                </span>
                                <span>
                                    Charcoal Black
                                </span>
                            </option>
                            <option value="1">
                                <span className="">
                                    <Dot color="black" />
                                </span>
                                <span>
                                    Charcoal Black
                                </span>
                            </option>
                            <option value="1">
                                <span className="">
                                    <Dot color="black" />
                                </span>
                                <span>
                                    Charcoal Black
                                </span>
                            </option>
                            <option value="1">
                                <span className="">
                                    <Dot color="black" />
                                </span>
                                <span>
                                    Charcoal Black
                                </span>
                            </option>
                        </Form.Select>
                    </div>
                </div>

                <div className="col-md-1 d-flex align-items-center btn-custom-left-padding">
                    <button className="remove-btn">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;