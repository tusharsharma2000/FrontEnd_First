import React from "react";
import "./navbar-main.css";
import OfferIcon from "../../assets/icons/offers";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarMain = () => {
    return (
        <Navbar variant="dark" className="navbar">
            <Container>
                <div className="nav-main">
                    <div className="left-part">
                        <Nav className="me-auto">
                            <Nav.Link href="#/samsung" className='custom-nav-link'>
                                Samsung Mobiles
                            </Nav.Link>
                            <Nav.Link href="#/iphone" className='custom-nav-link'>
                                iPhones
                            </Nav.Link>
                            <Nav.Link href="#/oppo" className='custom-nav-link'>
                                Oppo Mobiles
                            </Nav.Link>
                            <Nav.Link href="#/onePlus" className='custom-nav-link'>
                                One Plus Mobiles
                            </Nav.Link>
                            <Nav.Link href="#/vivo" className='custom-nav-link'>
                                Vivo Mobiles
                            </Nav.Link>
                            <Nav.Link href="#/others" className='custom-nav-link'>
                                Others
                            </Nav.Link>
                        </Nav>
                    </div>

                    <div className="right-part">
                        <div className="offers-text">
                            <OfferIcon />
                            <span className="mx-2">
                                Offers
                            </span>
                        </div>
                        <button className='nav-btn mx-3 py-1 px-2'>New</button>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavbarMain;
