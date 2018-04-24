import React, {Component} from 'react';
import '../App.css';
import {Search} from './Search';
import {Link} from 'react-router-dom';
import {Avatar} from './Avatar';

class MenuPrincipal extends Component {
    state = {
        value: 0,
      };

      handleChange = (event, value) => {
        this.setState({ value });
      };
  render() {

      return (
          <div className="menu-fixed">
              <div className="menu-fixed-container" style={{top:'0px',position:"relative"}}>
                  <div className="menu-fixed-main">
                      <a className="logo icon-logoUpdate active"></a>
                      <ul className="menu-fixed-links" role="navigation">
                              <Link to='/'><li key="inicio" className="menu-fixed-links-item">
                                  <div className="menu-link" role="button" aria-haspopup="true">Inicio</div>
                          </li></Link>
                          <Link to='/mylist'><li key="mylist" className="menu-fixed-links-item">
                              <div className="menu-link" role="button" aria-haspopup="true">Favoritos</div>
                          </li></Link>
                      </ul>
                  </div>
                  <div className="menu-fixed-right">
                  <Search search={this.props.search}/>
                  <Avatar style={{right:'10px'}}/>
                  </div>
              </div>
          </div>
      );
  }
}

export default MenuPrincipal;
