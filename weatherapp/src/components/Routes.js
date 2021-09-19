import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DenverAPI from '../pages/DenverAPI';
import BaltimoreAPI from '../pages/BaltimoreAPI';
import HagerstownAPI from '../pages/HagerstownAPI';
import MiamiAPI from '../pages/MiamiAPI';
import OrlandoAPI from '../pages/OrlandoAPI';
import OrmondBeachAPI from '../pages/OrmondBeachAPI';
import UserInput from './UserInput';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={UserInput} />
            <Route path='/BaltimoreAPI' component={BaltimoreAPI} />
            <Route path='/DenverAPI' component={DenverAPI} />
            <Route path='/HagerstownAPI' component={HagerstownAPI} />
            <Route path='/MiamiAPI' component={MiamiAPI} />
            <Route path='/OrlandoAPI' component={OrlandoAPI} />
            <Route path='/OrmondBeachAPI' component={OrmondBeachAPI} />
        </Switch>
    );
}

export default Routes