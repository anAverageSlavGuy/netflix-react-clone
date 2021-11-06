import React, { Component } from 'react';
import Logo from './../images/Netflix_2015_logo.svg';
import { Link, useLocation  } from "react-router-dom";

const NavBar = (props) => {
    const location = useLocation();
    console.log("pathname",location.pathname);

    const renderAuthButton = () => {
        if (location.pathname == "/") {
            return <Link to="/login" className="red-button" data-uia="header-login-link">Accedi</Link>
        }
    }

    return (
        <nav>
            <div className="header">
                <div className="nav-logo">
                    <Link to="/"><img src={Logo} className="netflix-logo" alt="logo" /></Link>
                </div>
                {renderAuthButton()}
            </div>
        </nav>
    );
}


export default NavBar;