import React from 'react';
import '../assets/css/home.css'


import logo from '../assets/imgs/logo.png';
import twitterLogo from '../assets/imgs/twiter.png'
import discordLogo from '../assets/imgs/discord.png'
import navbar from '../assets/imgs/navbar.png'
import igLogo from '../assets/imgs/ig.png'

function Header() {
    let [showMobileNav, setShowMobileNav] = React.useState(false);

    const headerMenu = () => {
        setShowMobileNav(!showMobileNav);
    }
    return (
        <div className="nav-section">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" alt="Image" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={headerMenu}>
                        <span className="navbar-toggler-icon"><img className="social-icon-footer" src={navbar}></img></span>
                    </button>
                    <div className={showMobileNav ? "navbar-collapse collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className="navbar-nav nav-align-right">
                            {/* <li className="nav-item active"><a className="nav-link" href="">HOME</a></li> */}
                            <li className="nav-item nav-align-right mr-3"><a className="nav-link" href="#planmenu">MINT</a></li>
                            <li className="nav-item nav-align-right mr-3"><a className="nav-link" href="#teammenu">TEAM</a></li>
                            <li className="nav-item nav-align-right mr-3"><a className="nav-link" href="#roadmapmenu">ROADMAP</a></li>
                            <li className="nav-item nav-align-right mr-3">
                                <a href="https://www.instagram.com/sharkboyfightclub/"><img className="social-icon-header" src={igLogo} /></a>
                                <a href="https://discord.com/invite/SharkBoyFC/"><img className="social-icon-header" src={discordLogo} /></a>
                                <a href="https://twitter.com/SharkBoyFC/"><img className="social-icon-header" src={twitterLogo} /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
