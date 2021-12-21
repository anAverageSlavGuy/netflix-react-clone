import React, { useState, useEffect } from 'react';
import Logo from './../images/Netflix_2015_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export function HomeNavBar(props) {
    return (
        <nav>
            <div className="header">
                <div className="nav-logo">
                    <Link to="/"><img src={Logo} className="netflix-logo" alt="logo" /></Link>
                </div>
                <div className="button-group">
                    <select className="lang-select">
                        <option value="IT">Italiano</option>
                        <option value="EN">English</option>
                    </select>
                    <Link to="/login" className="red-button" data-uia="header-login-link">Accedi</Link>
                </div>
            </div>
        </nav>
    );
}

export function ProfileNavBar(props) {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }


    return (
        <nav className={`profile-nav ${show && "dark-nav"}`}>
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

