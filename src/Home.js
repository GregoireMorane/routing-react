import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Bienvenue sur l'accueil</h1>
                <NavLink to="/" activeStyle={{fontWeight: 'bold',color: 'red'}}> Accueil </NavLink>
                <NavLink to="/notre-histoire"> Histoire </NavLink>
            </div>
        );
    }
}

export default Home;