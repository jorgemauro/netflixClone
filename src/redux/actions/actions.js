// src/redux/actions/actions.js
/** */
import axios from 'axios';
const url = "https://api.themoviedb.org/3";
const key = '5a9940cf4d7f375315e37a7f90afdd98';
const options= 'language=language%3Dpt-BR';
//busca filmes que serão apresentados na home
export const getHomeMovies=()=> {
    return(dispatch)=> {
        let promises = [];
        let moviesHome={
            moviesTopRated:[],
            moviesTheater:[],
            moviesPopular:[],
            gender1:[],
            gender2:[],
            gender3:[],
            gender4:[],
            gender5:[],
            movieBilboard:{},
        };
        promises.push(axios.get(`${url}/movie/now_playing?api_key=${key}&${options}`)
            .then((res) => {
                moviesHome.moviesTheater = res.data.results;
            }));
        promises.push(axios.get(`${url}/movie/popular?api_key=${key}&${options}`)
            .then(res => {
                moviesHome.moviesPopular = res.data.results;
            }));
        promises.push(axios.get(`${url}/movie/top_rated?api_key=${key}&${options}`)
            .then(res => {
                moviesHome.moviesTopRated = res.data.results;
            }));

        promises.push(axios.get(`${url}/discover/movie?api_key=${key}&${options}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`)
            .then(res => {
                moviesHome.gender1 = res.data.results;
            }));

        promises.push(axios.get(`${url}/discover/movie?api_key=${key}&${options}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`)
            .then(res => {
                moviesHome.gender2 = res.data.results;
            }));

        promises.push(axios.get(`${url}/discover/movie?api_key=${key}&${options}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752`)
            .then(res => {
                moviesHome.gender3 = res.data.results;
            }));

        promises.push(axios.get(`${url}/discover/movie?api_key=${key}&${options}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37`)
            .then(res => {
                moviesHome.gender4 = res.data.results;
            }));
        promises.push(axios.get(`${url}/discover/movie?api_key=${key}&${options}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`)
            .then(res => {
                moviesHome.gender5 = res.data.results;
            }));
        promises.push(axios.get(`${url}/movie/181808?api_key=${key}&${options}`)
            .then(res=>{
                moviesHome.movieBilboard=res.data
            }));
        axios.all(promises).then(()=>dispatch({type: 'HOME_MOVIES', moviesHome}));
    }
}
// adiciona a lista
export const addList = (movie)=>(dispatch)=> {
        dispatch({type:'ADD_LIST',movie});
    }

    export const searchFilm =(search)=>(dispatch)=>{
    let searchmodify=search.replace(' ','%20');
    axios.get(`${url}/search/movie?api_key=${key}&query=${searchmodify}&${options}`)
        .then(res=>{
            const moviesSearch = res.data;
            dispatch({type:'SEARCH',moviesSearch});
        });
    }

