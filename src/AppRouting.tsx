import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {getClientsAddUrl, getClientsUrl} from './AppRoutes';
import AddClient from './pages/addClients/AddClient';
import Clients from './pages/Clients';

export default function AppRouting(): React.ReactElement {
    return <>
        <BrowserRouter>
            <Route path='/'
                   exact
                   component={Clients}/>
            <Route path={getClientsUrl()}
                   exact
                   component={Clients}/>
            <Route path={getClientsAddUrl()}
                   exact
                   component={AddClient}/>
        </BrowserRouter>
    </>
}
