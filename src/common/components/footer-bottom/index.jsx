// import React from "react";
// import "./footer-bottom.css";
// import PaymentIcons from "../../assets/icons/payment-icons.svg";

// const FooterBottom = () => {
//     return (
//         <div className="footer-bottom-main container">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-9 ">
//                         <div className="left-part">
//                             <div className="left-top">
//                                 <div className="row">
//                                     <div className="col-md-3">
//                                         <div>
//                                             <h2 className="footer-list-heading">About Us</h2>
//                                         </div>
//                                         <div>
//                                             <ul>
//                                                 <div>
//                                                     <li className="footer-list-item">
//                                                         <a href="#">About Coffeee</a>
//                                                     </li>
//                                                 </div>
//                                                 <li className="footer-list-item">
//                                                     <a href="#">Company Information</a>
//                                                 </li>
//                                                 <li className="footer-list-item">
//                                                     <a href="#">News & Media</a>
//                                                 </li>
//                                                 <li className="footer-list-item">
//                                                     <a href="#">Carrier Opportunity</a>
//                                                 </li>
//                                                 <li className="footer-list-item">
//                                                     <a href="#">Code of Conduct</a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="left-bottom"></div>
//                         </div>
//                         <div className="right-part col-md-3"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FooterBottom;

import React from "react";
import "./footer-bottom.css";
import { footerLinks } from "./constants/footerOptions";
import PaymentIcons from "../../assets/icons/payment-icons.svg";
import AppDownload from "../../assets/icons/app-download.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";

const FooterBottom = () => {
    return (
        <section className='footer-bottom-main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='left-top'>
                            <div className='row'>
                                {footerLinks.map(footerLink => {
                                    return (
                                        <div
                                            className='col-md-3'
                                            key={footerLink.heading}
                                        >
                                            <h2 className='footer-list-heading'>
                                                {footerLink.heading}
                                            </h2>
                                            <ul>
                                                {footerLink.items.map(item => {
                                                    return (
                                                        <li
                                                            className='footer-list-item'
                                                            key={item}
                                                        >
                                                            <a href='#/'>
                                                                {item}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='left-bottom'>
                            <img src={PaymentIcons} alt='all payment icons' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-top'>
                            <h3 className='footer-right-subheading'>
                                Download our amazing app
                            </h3>
                            <div className='footer-right-icons'>
                                <img src={AppDownload} alt='download apps' />
                            </div>
                        </div>
                        <div className='right-bottom'>
                            <h3 className='footer-right-subheading'>
                                Connect us on
                            </h3>
                            <div className='footer-right-icons'>
                                <img src={Facebook} alt='Facebook icon' />
                                <img src={Twitter} alt='Twitter icon' />
                                <img src={Youtube} alt='Youtube icon' />
                                <img src={Instagram} alt='Instagram icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterBottom;
