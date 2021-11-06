import React, { Component } from 'react';
import AuthService from './AuthService';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/Login.css';

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentDidMount() {
        console.log("User loggedin: " + this.Auth.loggedIn());
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/home');
        } else {
            this.props.history.replace('/login');
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.email, this.state.password);

        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                console.log(res);
                this.props.history.replace('/home');
            })
            .catch(err => {
                alert(err);
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="container">
                <NavBar path="/login" />
                <div className="Login">
                    <div className="login-content">
                        <div className="login-form-container">
                            <h1 className="login-page-title">Accedi</h1>
                            <form method="post" className="login-form" onSubmit={this.handleFormSubmit}>
                                <label className="login-input-label">
                                    <input type="text" name="email" onChange={this.handleChange} className="login-field" id="login-email" defaultValue="" autoComplete="email" required />
                                    <label htmlFor="login-email" className="placeLabel">Email o numero di telefono</label>
                                </label>
                                <label className="login-input-label">
                                    <input type="password" name="password" onChange={this.handleChange} className="login-field" id="login-password" defaultValue="" required />
                                    <label htmlFor="login-password" className="placeLabel">Password</label>
                                </label>
                                <button type="submit" className="login-button red-button">Accedi</button>
                            </form>
                        </div>
                    </div>
                    <div className="img-gradient"></div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Login;