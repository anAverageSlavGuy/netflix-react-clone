import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Footer from './Footer';
import AuthService from './AuthService';
import db from '../db';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { db: db };
    this.Auth = new AuthService();
    this.renderContents = this.renderContents.bind(this);
  }

  componentDidMount() {
    console.log("User loggedin: " + this.Auth.loggedIn());
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/home');
    } else {
      this.props.history.replace('/');
    }
  }

  renderContents() {
    /* const { contents } = this.state.db;
    let lista = contents.map((content, index) =>
      <div key={index} className="content-item-container">
        <div className={`${(content.imageAlign === "left") ? "content-item-reverse" : "content-item"}`}>
          <div className="content-item-text">
            <h5>{content.title}</h5>
            <p>{content.description}</p>
          </div>
          <div className="content-item-image">
            <img src={content.imageUrl} alt={"Image Card " + index} />
          </div>
        </div>
      </div>
    );
    return lista; */
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="content">
          <div className="hero-banner">
            <div className="img-gradient"></div>
            <div className="our-story-card-text">
              <h1 className="our-story-card-title" data-uia="hero-title">Film, serie TV e tanto altro. Senza limiti.</h1>
              <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
              <form className="cta-form email-form" data-uia="email-form" method="GET">
                <h3 className="email-form-title">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</h3>
                <div className="email-form-body">
                  <label className="email-input" placeholder="email">
                    <input type="email" name="email" className="email-input-field" id="subscribe-mail" defaultValue="" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" />
                    <label htmlFor="subscribe-mail" className="placeLabel">Indirizzo email</label>
                  </label>
                  <div className="our-story-cta-container cta-link-wrapper">
                    <button className="red-button start-button" type="submit" autoComplete="off" tabIndex="0" role="link">
                      <span className="cta-btn-txt">Inizia</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {this.renderContents()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
