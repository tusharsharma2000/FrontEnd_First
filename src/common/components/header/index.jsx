import React from "react";
import Logo from "../logo";
import cartIcon from "../../assets/icons/cart.svg";
import userLogo from"../../assets/icons/user.svg";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const goToLoginPage = ()=>{
        navigate("/login");
    }
    return (
        <div className="container-lg main-content">
                <div className="left-part">
                    <div>
                        <Logo darkMode/>
                    </div>
                    
                    <div class="input-group mx-4">
                        <input 
                        type="text"
                        class="form-control custom-width"
                        placeholder="Search for Products, Brands and more..."
                        aria-label="Search for Products, Brands and more..."/>
                            <span class="input-group-text" id="basic-addon2">
                                <i class="bi bi-search"></i>
                            </span>
                    </div>
                </div>
                <div className="right-part">
                    <div className="header-icons">
                        <img src={cartIcon} alt="cart-icon" />
                        <span className="cart-text mx-2">Cart</span>
                    </div>
                    <div className="header-icons marginLeft" onClick={goToLoginPage}>
                        <img src={userLogo} alt="user-icon" />
                        <span className="user-text mx-2">Sign Up/Login</span>
                    </div>
                </div>
        </div>
    )
};

export default Header;