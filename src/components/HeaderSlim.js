import React from 'react';
import '../assets/css/home.css'

import logo from '../assets/imgs/logo.png';

function HeaderSlim() {
    const [showMobileNav, setShowMobileNav] = React.useState(false);

    const headerMenu = () => {
        setShowMobileNav(!showMobileNav);
    }
    return (
        <div className="nav-section">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/"><img src={logo} className="img-fluid" alt="Image" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={headerMenu}>
                        <span className="navbar-toggler-icon"><i className="fa fa-bars" style={{ "color": "#fff", "font-size": "28px" }} /></span>
                    </button>
                    <div className={showMobileNav ? "navbar-collapse collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto"></ul>
                        <div className="my-2 my-lg-0"><a className="nav-link" href="/dashboard"><span className="dash-btn">Dashboard</span></a></div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HeaderSlim;
