import React from 'react';
import '../assets/css/home.css'


import twitterLogo from '../assets/imgs/twiter.png'
import discordLogo from '../assets/imgs/discord.png'
import igLogo from '../assets/imgs/ig.png'
import logo from '../assets/imgs/logo.png';
import logoMain from '../assets/imgs/logo-main.png';

function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="foot-data mt-3">
                    <div className="text-center mt-5">
                        <img className="foot-logo-img" src={logoMain} />
                    </div>
                    <div className="text-center mt-4">
                        <img src={logo} />
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <a href="https://www.instagram.com/sharkboyfightclub/"><img className="social-icon-footer" src={igLogo} /></a>
                        <a href="https://discord.com/invite/SharkBoyFC/"><img className="social-icon-footer" src={discordLogo} /></a>
                        <a href="https://twitter.com/SharkBoyFC/"><img className="social-icon-footer" src={twitterLogo} /></a>
                    </div>
                    <div className="text-center mt-4">
                        <div>ALL RIGHT RESERVED 2021</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
