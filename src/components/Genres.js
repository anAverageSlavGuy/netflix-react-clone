import React from 'react';
import Movies from './Movies';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Genres = (props) => {

    const fetchGenres = () => {
        const { genres, movies } = props.db;
        let list = genres.map((name, index) => (
            <div key={index} className="row">
                <div className="genre">{name}</div>
                <Movies movies={movies} genre={name} />
            </div>
        ))
        return list;
    }

    return (
        <>
            {fetchGenres()}
        </>
    );
};

export default Genres;