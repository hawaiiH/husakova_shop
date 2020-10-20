import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import ShopService from './services/shop-service';
import ShopServiceContext from './components/shop-service-context';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const shopService = new ShopService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ShopServiceContext.Provider value={shopService}>
                <Router>
                    <App/>
                </Router>
            </ShopServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

