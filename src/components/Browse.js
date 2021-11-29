import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileNavBar } from './NavBar';
import Row from './Row';
import requests from './Requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/Browse.css';
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Browse() {

    const [bannerMovie, setBannerMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            var randomIndex = Math.floor(Math.random() * request.data.results.length)
            setBannerMovie(request.data.results[randomIndex]);

        }
        fetchData();

    }, []);

    console.log(bannerMovie);


    return (
        <div className="container">
            <ProfileNavBar />
            <div className="profile-hero-banner" style={{ backgroundImage: `url(${imageBaseUrl}${bannerMovie.backdrop_path})` }}>
                <div className="hero-banner-info">
                    <div className="banner-title">{bannerMovie.name}</div>
                    <div className="banner-episode-message">Guarda subito la stagione 1</div>
                    <div className="banner-description">{bannerMovie.overview && shorten(bannerMovie.overview, 200)}</div>
                    <div className="banner-buttons">
                        <button className="color-primary"><FontAwesomeIcon icon={faPlay} className="banner-button-icon" /><span>Riproduci</span></button>
                        <button className="color-secondary"><FontAwesomeIcon icon={faExclamationCircle} className="banner-button-icon" /><span>Altre info</span></button>
                    </div>
                </div>
            </div>
            <div className="movie-rows">
                <Row title="I più votati" fetchUrl={requests.fetchTopRated} />
                <Row title="In tendenza" fetchUrl={requests.fetchTrending} />
                <Row title="Azione" fetchUrl={requests.fetchActionMovies} />
                <Row title="Commedie" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romantici" fetchUrl={requests.fetchTopRated} />
                <Row title="Documentari" fetchUrl={requests.fetchDocumentaries} />
            </div>
        </div>
    )
}

function shorten(str, maxLen, separator = ' ') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

export default Browse

