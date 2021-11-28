import React from 'react';
import Movie from './Movie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Movies = (props) => {

    const fetchMovies = () => {
        let list = props.movies.filter(movie => movie.genre.includes(props.genre)).map(filteredMovie => (
            <Movie key={filteredMovie.id} movie={filteredMovie} />
        ))

        return list;
    }

    return (
        <Slider {...settings}>
            {fetchMovies()}
        </Slider>

    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

export default Movies;