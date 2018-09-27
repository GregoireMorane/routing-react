import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
                <h1>Notre histoire</h1>
                <NavLink to="/"> Accueil </NavLink>
                <NavLink to="/notre-histoire" activeStyle={{fontWeight: 'bold',color: 'red'}}> Histoire </NavLink>
            </div>
        );
    }
}

export default History;