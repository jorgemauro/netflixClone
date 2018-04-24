import React, {Component} from 'react';
import '../App.css';
import MenuPrincipal from '../components/MenuPrincipal';
import MovieDetails from "../components/MovieDetails";
import {Default} from "../components/default";
import {Carousel} from '../components/Carousel';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        ...state,
        moviesSearch:state.movies.moviesSearch,
    };
}
class SearchFilm extends Component {
    render(){
        const list=this.props.moviesSearch.map((movie) => <MovieDetails key={movie.id} movie={movie}/>);
        const renderizaList=list.length>0;
        return(
            <div>
                <MenuPrincipal/>
                {renderizaList &&
                <Carousel title="Filmes pesquisados">
                    {list}
                </Carousel>
                }
                {!renderizaList && <Default/>}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchFilm);