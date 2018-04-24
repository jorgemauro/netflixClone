import React from 'react';
const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';

const MovieDetailsOriginais =(movie)=> <div className="slider-item slider-item-0">
    <div
        className="carousel-item video-artwork is-loaded lazy-background-image"
        style={{
            backgroundColor: '#202020',
            backgroundImage: `url(${imageUrl}${size}${movie.movie.backdrop_path})`,


        }}
    >
        <a>
            <div>{movie.movie.title}</div>
            <div className="card-info-Originais">
            </div>
        </a>
    </div>
</div>
export { MovieDetailsOriginais };