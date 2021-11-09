import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-one">
                <img width="200px" src="./pngwing.com.png" alt="" />
                <p>For Any Issue Call: 64688-49694 (Morning: 10 TO Evening: 7) OR Message Us At TravelHelp to 26969 </p>
            </div>
            <div className="app-link">
                <img src="./playstore.svg" alt="" />
                <img width="200px" src="./imgbin_iphone-app-store-png.png" alt="" />
            </div>
            <hr className="horizontal-line" />
            <span >Copyright ©2021 All rights reserved </span>

        </div>
    );
};

export default Footer;