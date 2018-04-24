// src/redux/reducers/movies.js
const initialState = {
    movies: [],
    moviesTheater:[],
    moviesPopular:[],
    moviesTopRated:[],
    gender1:[],
    gender2:[],
    gender3:[],
    gender4:[],
    gender5:[],
    mylist:[],
    movieBilboard:{},
    movie: {},
    moviesSearch:[],
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'HOME_MOVIES':
            return {
                ...state,
                moviesTheater: action.moviesHome.moviesTheater,
                moviesPopular: action.moviesHome.moviesPopular,
                moviesTopRated:action.moviesHome.moviesTopRated,
                gender1:action.moviesHome.gender1,
                gender2:action.moviesHome.gender2,
                gender3:action.moviesHome.gender3,
                gender4:action.moviesHome.gender4,
                gender5:action.moviesHome.gender5,
                movieBilboard: action.moviesHome.movieBilboard,
            }
        case 'ADD_LIST': {
            let myList = state.mylist;
            myList.push(action.movie);
            return {
                ...state,
                mylist: myList
            }
        }
        case 'SEARCH':{
            return {
        ...state,
                moviesSearch:state.moviesSearch,
        }
        }
        default:
            return state
    }
}