import React, { Component } from 'react'
import AuthService from './AuthService';
import WithAuth from './WithAuth';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Genres from './Genres';
import '../css/Home.css';
import db from '../db';

const Auth = new AuthService();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            db: db
        };
    }

    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }

    render() {
        return (
            <div className="container">
                <NavHeader />
                <div className="main">
                    <h2 style={{ color: "white" }}>Welcome <br /> {this.props.user.first_name} {this.props.user.last_name}</h2>
                </div>
                <div className="content">
                    {<Genres db={this.state.db} />}
                </div>
                <Footer />
            </div>
        )
    }
}

export default WithAuth(Home);