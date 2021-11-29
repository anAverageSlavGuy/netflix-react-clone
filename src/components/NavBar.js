import React from 'react';
import Logo from './../images/Netflix_2015_logo.svg';
import { Link } from "react-router-dom";

export function HomeNavBar(props) {
    return (
        <nav>
            <div className="header">
                <div className="nav-logo">
                    <Link to="/"><img src={Logo} className="netflix-logo" alt="logo" /></Link>
                </div>
                <Link to="/login" className="red-button" data-uia="header-login-link">Accedi</Link>
            </div>
        </nav>
    );
}

export function ProfileNavBar(props) {
    return (
        <nav className="profile-nav">
            <div className="profile-header">
                <div className="profile-nav-logo">
                    <Link to="/"><img src={Logo} className="profile-netflix-logo" alt="logo" /></Link>
                </div>
                <ul className="nav-menu">
                    <li className="selected">Home</li>
                    <li>Serie TV</li>
                    <li>Film</li>
                    <li>Nuovi e popolari</li>
                    <li>La mia lista</li>
                    <li>Rivedi</li>
                </ul>
            </div>
        </nav>
    );
}

