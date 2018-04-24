import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import MenuPrincipal from '../components/MenuPrincipal';
import {Jumbo} from '../components/Jumbo';
import {Carousel} from '../components/Carousel';
import {CarouselAuto} from '../components/CarouselAuto';
import {MovieDetailsOriginais} from '../components/MovieDetailsOriginais';
import {addList, getHomeMovies, searchFilm} from './../redux/actions/actions'
import MovieDetails from "../components/MovieDetails";

const mapStateToProps = state => {

    return {
        moviesTheater: state.movies.moviesTheater,
        moviesPopular: state.movies.moviesPopular,
        moviesTopRated: state.movies.moviesTopRated,
        gender1:state.movies.gender1,
        gender2:state.movies.gender2,
        gender3:state.movies.gender3,
        gender4:state.movies.gender4,
        gender5:state.movies.gender5,
        movieBilboard:state.movies.movieBilboard,
        movie: state.movies.movie,
    }
}

class Home extends Component {
    componentWillMount() {
        this.props.getHomeMovies();
    }
    render() {
        const movieBilboard=this.props.movieBilboard;
        const moviesTopRated = this.props.moviesTopRated.map((movie) => <MovieDetailsOriginais key={movie.id} movie={movie}/>);
        const inTheater = this.props.moviesTheater.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)}/>);
        const popular = this.props.moviesPopular.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)}/>);
        const gende1=this.props.gender1.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)} />);
        const gende2=this.props.gender2.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)}/>);
        const gende3=this.props.gender3.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)}/>);
        const gende4=this.props.gender4.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)}/>);
        const gende5=this.props.gender5.map((movie) => <MovieDetails key={movie.id} movie={movie} addList={()=>this.props.addList(movie)}/>);
        return (
            <div className="home">
                <MenuPrincipal search={()=>this.props.searchFilm}/>
                <div className="mainView">
                    <div className="lolomo is-fullbleed">
                        <Jumbo movie={{
                            movie:movieBilboard,
                            description: "A tranquila e solitária vida de Luke Skywalker sofre uma reviravolta quando ele conhece Rey," +
                            " uma jovem que mostra fortes sinais da Força." +
                            " O desejo dela de aprender o estilo dos Jedi força Luke a tomar uma decisão que mudará sua vida para sempre. Enquanto isso," +
                            " Kylo Ren e o General Hux lideram a Primeira Ordem para um ataque total contra Leia e a Resistência pela supremacia da galáxia.",
                        }}/>
                        <CarouselAuto titulo="Originais netiflix">
                            {moviesTopRated}
                        </CarouselAuto>
                        <Carousel className="rowContent" title="Nos Cinemas">
                            {inTheater}
                        </Carousel>
                        <Carousel className="rowContent" title="Populares">
                            {popular}
                        </Carousel>

                        <Carousel className="rowContent" title="Drama">
                            {gende1}
                        </Carousel>

                        <Carousel className="rowContent" title="Fantasia">
                            {gende2}
                        </Carousel>

                        <Carousel className="rowContent" title="Guerra">
                            {gende3}
                        </Carousel>

                        <Carousel className="rowContent" title="Western">
                            {gende4}
                        </Carousel>

                        <Carousel className="rowContent" title="Familia">
                            {gende5}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {getHomeMovies,addList, searchFilm})(Home);