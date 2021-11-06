import React from 'react';
import MoviePlaceholder from '../images/placeholder.png';
import $ from 'jquery'; 

const Movie = (props) => {

    var id = props.movie.id;
    var title = props.movie.title;
    var posterUrl = props.movie.posterUrl;

    const onToggle = (e) => {
        //e.target.offsetParent.offsetParent.classList.toggle("active");
        var parent = $( e.target ).closest( "li.movies" )[0];
        $(parent).toggleClass("active-card");
    }

    return (
        <>
            <div key={id} className="movie-item">
                <div className="movie-card">
                    <div className="movie-text">
                        <div className="title">{title}</div>
                    </div>
                    <img className="movie-poster" src={posterUrl} alt={`"Movie" ${id}`} onError={(e)=>{e.target.onerror = null; e.target.src=MoviePlaceholder}}/>          </div>
                </div>
        </>
    );
};

export default Movie;