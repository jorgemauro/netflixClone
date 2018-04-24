import React, {Component} from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            favorito:this.props.mylist?this.props.mylist:[],
        };
    }

    render() {
        return (
            <a key={this.props.movie.title} className="card-link" onMouseEnter={() =>this.setState({showText:true})} onMouseLeave={() =>this.setState({showText:false})}>
                <div
                    className="video-artwork is-loaded lazy-background-image"
                    style={{
                        backgroundColor: '#202020',
                        backgroundImage: `url(${imageUrl}${size}${this.props.movie.backdrop_path})`
                    }}
                >
                    {this.state.showText && <div className="content-details">
                        <div className="content-details-title">{this.props.movie.title}</div>
                        <div className="content-details-title">
                            <div>{this.props.movie.release_date ? this.props.movie.release_date.split('-')[0] : null}</div>
                            <div>Nota: {this.props.movie.vote_average}</div>
                            <div>{this.props.movie.overview ? this.props.movie.overview.substring(0, 100) + '...' : 'Esse filme ainda não tem uma descrição.'}</div>
                        </div>
                    </div>}
                    <button className="btn-add" onClick={() => this.props.addList(this.props.movie)}>
                        <SvgIcon color="primary" style={{fontSize: 30}}>
                            {!this.state.favorito.includes(this.props.movie) && <path fill="#F8F8FF"
                                                           d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"/>
                            }{this.state.favorito.includes(this.props.movie)&&<path fill="#00E676"
                                                         d="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"/>
                        }
                            </SvgIcon>
                    </button>
                </div>
            </a>
        );
    }
}

export default MovieDetails;