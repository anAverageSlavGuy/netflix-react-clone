import React from 'react';
import MoviePlaceholder from '../images/placeholder.png';
import $ from 'jquery';

function Movie(props) {
    const { title, backdrop_path, poster_path, adult, vote_average } = props.movie;
    return (
        <div className="movie-item">
            <div className="movie-card">
            {/*     <div className="movie-text">
                    <div className="title">{title}</div>
                </div> */}
                <img className="movie-poster" src="" onError={(e) => { e.target.onerror = null; e.target.src = MoviePlaceholder }} />          
            </div>
        </div>
    )
}

export default Movie
