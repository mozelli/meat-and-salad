import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import OrderForm from './pages/OrderForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ Landing } />
            <Route exact path="/order-form" component={ OrderForm } />
        </BrowserRouter>
    );
}
