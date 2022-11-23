import React from "react";
import NavbarMain from "../../common/components/navbar-main";
import Header from "../../common/components/header";
import ImageSlider from "./components/image-slider";
import "./home.css";


const Home = ()=>{
    return(
        <div className="home-page">
            <Header />
            <NavbarMain />
            <ImageSlider />
            <section className="common-section">Popular Offers</section>
            <section className="common-section">Payments</section>
            <section className="common-section">Footer</section>
        </div>
    )
};

export default Home;