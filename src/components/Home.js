import React, { useState, useEffect } from 'react';
import {HomeNavBar} from './NavBar';
import Footer from './Footer';
import Content from './Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../css/Home.css';
import contentsList from '../contents.json';

function Home() {
    const [contents, setContents] = useState(contentsList);

    useEffect(() => {
        console.log(contents);
    }, []);

    return (
        <div className="container">
            <HomeNavBar />
            <div className="main-container">
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
                <div className="home-contents">
                    {contents.map((content, index) => {
                        return (
                            <Content key={index} item={content} />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
