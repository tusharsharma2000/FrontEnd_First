import React from "react";
import "./phone-product.css";
import { useNavigate } from "react-router-dom";

const PhoneProduct = (props) => {

    const { productData } = props;
  const {  imageFile,
    name,
    currentPrice,
    originalPrice,
    discount,
    offer,
    emi,
    id} = productData;

    const navigate = useNavigate();
    const goToProductDetailPage = ()=>{
        const productName = name.replaceAll(" ","-")
        navigate(`/products/${productName}/${id}`);
    }

    return(
        <div className="phone-product" onClick={goToProductDetailPage}>
                    <div className="phone-image">
                        <img src={imageFile} alt="phone"/>
                    </div>
                    <div className="phone-offer">{offer}</div>
                    <div className="phone-name">{name}</div>
                    <div className="phone-prices">
                        <div className="current-price">{currentPrice}</div>
                        <div className="original-price">{originalPrice}</div>
                        <div className="discount">{discount}</div>
                    </div>
                    <div className="emi">{emi}</div>
                </div>
    );
};

export default PhoneProduct;