import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import MyList from './pages/MyList'
import SearchFilm from  './pages/SearchFilm'

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mylist" component={MyList}/>
                <Route exact path="/search" component={SearchFilm}/>
            </Switch>
        </div>
    );
  }
}

export default App;
