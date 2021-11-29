import React from 'react';
import MoviePlaceholder from '../images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Movie(props) {
    const { title, backdrop_path, poster_path, adult, vote_average, genre_ids } = props.movie;
    console.log(props.movie);
    return (
        <>
            <div className="movie-card">
                {/*     <div className="movie-text">
                    <div className="title">{title}</div>
                </div> */}
                <img className="movie-poster" src={`${imageBaseUrl}${backdrop_path}`} onError={(e) => { e.target.onerror = null; e.target.src = MoviePlaceholder }} />
                <div className="movie-info">
                    <div className="movie-info-buttons">
                        <FontAwesomeIcon icon={faPlay} className="info-button-icon" />
                        <FontAwesomeIcon icon={faPlus} className="info-button-icon" />
                        <FontAwesomeIcon icon={faThumbsUp} className="info-button-icon" />
                        <FontAwesomeIcon icon={faThumbsDown} className="info-button-icon" />
                    </div>
                    <div className="movie-info-description"></div>
                    <div className="movie-info-genres">
                        <ul>
                            {/* {
                                genre_ids.map((genre) => {
                                    return <li>{genre}</li>;
                                })
                            } */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie
