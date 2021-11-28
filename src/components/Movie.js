import React from 'react';
import MoviePlaceholder from '../images/placeholder.png';
import $ from 'jquery';

const Movie = (props) => {

    var id = props.movie.id;
    var title = props.movie.title;
    var posterUrl = props.movie.movie_banner;

    const onToggle = (e) => {
        var parent = $(e.target).closest("li.movies")[0];
        $(parent).toggleClass("active-card");
    }

    function onToggleDetails(e) {
        console.log(e);
        console.log(e.screenX);
    }

    return (
        <div className="movie-item">
            <div className="movie-card" onMouseOver={(e) => onToggleDetails(e)}>
                <div className="movie-text">
                    <div className="title">{title}</div>
                </div>
                <img className="movie-poster" src={posterUrl} alt={`"Movie" ${id}`} onError={(e) => { e.target.onerror = null; e.target.src = MoviePlaceholder }} />          
            </div>
        </div>
    );
};

export default Movie;