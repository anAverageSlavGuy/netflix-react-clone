import React, { Component } from 'react'
import Logo from './../images/Netflix_2015_logo.svg';
import { Link } from "react-router-dom";

export default class NavHeader extends Component {
    render() {
        return (
            <div className="pinned-header">
                <Link to="/"><img src={Logo} className="logo-img" alt="logo" /></Link>
            </div>
        )
    }
}
