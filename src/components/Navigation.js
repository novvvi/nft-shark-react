
import React from 'react';
import logo from '../assets/imgs/logo.svg';

export default class Navigation extends React.Component {

    render() {
        return (
            <nav className="dash-nav">
                <a className="logo" href="/">
                    <img draggable="false" src={logo} alt="Logo"></img>
                </a>
                <ul className="links ml-auto">
                    {this.props.role == 1 ? <li><a href="/management">Management</a></li> : null}
                    <li><a href="/purchase">Purchase</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li onClick={this._handleLogoutClick}><a>Logout</a></li>
                </ul>
            </nav>
        );
    };

    _handleLogoutClick = () => {
        window.open(`${process.env.REACT_APP_API_API_URL}/auth/logout`, "_self");
    };

};