import React from 'react';
import './app.css';
import {Route, Switch} from "react-router-dom";
import {HomePage, CardPage} from "../../pages";


const App = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/cart' component={CardPage}/>
        </Switch>
    );
};

export default App;