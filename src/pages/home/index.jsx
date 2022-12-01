import React from "react";
import NavbarMain from "../../common/components/navbar-main";
import Header from "../../common/components/header";
import ImageSlider from "./components/image-slider";
import PopularOffers from "./components/popular-offers";
import Footer from "../../common/components/footer";
import "./home.css";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <NavbarMain />
            <ImageSlider />
            <div className="body-main">
                <PopularOffers />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
