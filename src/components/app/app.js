import React from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import { Route, Switch } from 'react-router-dom';
import {MainPage, CatalogPage, ContactsPage} from '../pages';
import CartTable from '../cart-table';

import './app.css'

const App = () => {
    return (
        <>
            <AppHeader/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/assortiment' component={CatalogPage}/>
                    <Route path='/cart' component={CartTable}/>
                    <Route path='/contacts' component={ContactsPage}/>
                </Switch>
            <AppFooter/>
        </>
    )
}
export default App;