import './Footer.css'

import React from 'react'
import Sitelogo from './logo512.png'
import Facebook_Icon from './facebook_icon.png'
import Twitter_Icon from './twitter_icon.png'
import Insta_Icon from './instagram_icon.png'

export const Footer = () => {
    let title = "React App"
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-item">
                    <div className="siteLogo">
                        <img src={Sitelogo} alt="site logo"></img>
                    </div>
                    <div className="siteTitle">
                        {title}
                    </div>
                </div>
                <div className="footer-item">

                    <div className="social-media-links">
                        <p>  Social Media Links </p>
                        <div className="socialMediaItems">
                            <img src={Twitter_Icon} alt="site logo" width="40px" height="40px"></img>
                            <img src={Facebook_Icon} alt="site logo" width="40px" height="40px"></img>
                            <img src={Insta_Icon} alt="site logo" width="40px" height="40px"></img>
                        </div>
                    </div>
                </div>
                <div className="footer-item"></div>

            </div>

        </div>
    )
}
