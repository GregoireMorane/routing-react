import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

class App extends Component {
    render() {
        return (
            <div>
                {/* <NavLink to="/"> Accueil </NavLink>
                <NavLink to="/notre-histoire"> Histoire </NavLink> */}
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/notre-histoire" component={History} />
                </Switch>
                </BrowserRouter>
          </div>
        );
    }
}

export default App;