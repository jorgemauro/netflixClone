import React from 'react';
const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'original';

const Jumbo = (movie) =>{
    return(<div className="billboard-row">
    <div className="ptrack-container billboard-presentation-tracking">
        <div className="billboard-presentation-tracking ptrack-content">
            <div className="billboard-presentation-tracking ptrack-content">
                <div
                    className="billboard billboard-pane billboard-pane-main billboard-originals full-bleed-billboard trailer-billboard">
                    <div className="billboard-motion dismiss-mask">
                        <div className="motion-background-component bottom-layer full-screen">
                            <div className="hero-image-wrapper"><img className="hero static-image image-layer"
                                                                     src={`${imageUrl}${size}${movie.movie.movie.backdrop_path}`}
                                                                     alt="Conteúdo em destaque"/>
                                <div className="hero-vignette vignette-layer"></div>
                                <div className="hero-vignette-top vignette-layer"></div>
                            </div>
                            <div className="embedded-components button-layer"><a role="link"
                                                                                 className="nf-icon-button audio-btn button-layer"
                                                                                 aria-label="Ligar áudio"><span
                                role="presentation"
                                className="nf-icon-button-icon icon-button-audio-off"></span></a><span
                                className="maturity-rating"><span className="maturity-number">16</span></span></div>
                        </div>
                    </div>
                    <div className="info meta-layer">
                        <div className="trailer-vignette vignette-layer"
                             style={{opacity: 0, transitionDuration: "500ms", transitionDelay: "0ms"}}></div>
                        <div className="logo-and-text meta-layer">
                            <div className="billboard-title">
                                <div className="title-logo" style={{margin: '1vw 0 0 0'}} title={movie.movie.movie.title} alt="3%">
                                    <h1>{movie.movie.movie.title}</h1>
                                    <h2>Nota: {movie.movie.movie.vote_average}</h2>
                                    <h4>{movie.movie.description}</h4>
                                </div>
                            </div>
                            <div>botões</div>
                            <div className="fade-container"
                                 style={{opacity: 1, transitionDuration: "700ms", transitionDelay: "0ms"}}>
                                <div className="supplemental">{movie.destaque}</div>
                            </div>
                            <div className="synopsis-fade-container"
                                 style={{opacity: 1, transitionDuration: "700ms", transitionDelay: "0ms"}}>
                                <div className="synopsis">{movie.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);}

export {Jumbo};