import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(callback) {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }

        fetchData();

    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="movie-row">
            <div className="movie-row-title">{title}</div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                arrows={true}
                centerMode={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                deviceType="desktop"
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={500}
                containerClass="carousel-container movie-row-items"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="movie-item"
            >
                {movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />
                })}
            </Carousel>
        </div>
    )
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
        slidesToSlide: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default Row
