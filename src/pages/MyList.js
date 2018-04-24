import React, {Component} from 'react';
import '../App.css';
import MenuPrincipal from '../components/MenuPrincipal';
import MovieDetails from "../components/MovieDetails";
import {Default} from "../components/default";
import {Carousel} from '../components/Carousel';
import {connect} from 'react-redux';
const mapStateToProps = state => {
    console.log(state);
    return {
        ...state,
        mylist:state.movies.mylist,
    };
}
class MyList extends Component {
render(){
    console.log(this.props);
    const list=this.props.mylist.map((movie) => <MovieDetails key={movie.id} movie={movie}/>);
    const renderizaList=list.length>0;
    return(
        <div>
        <MenuPrincipal/>
            {renderizaList &&
            <Carousel title="Filmes favoritos">
                {list}
            </Carousel>
            }
            {!renderizaList && <Default/>}
        </div>
    );
}
}

export default connect(mapStateToProps)(MyList);