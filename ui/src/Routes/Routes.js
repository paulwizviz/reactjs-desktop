// Copyright 2020 [reatjs-desktop] Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// React
import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './RouteWithLayout';

import {
    Auth as AuthView,
    Dashboard as DashboardView,
    NotFound as NotFoundView,
    MinimalLayout,
    MainLayout as MainLayoutContainer,
} from '../modules';

import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Switch>        
                <Redirect exact from="/" to="/auth"/>
                <RouteWithLayout component={AuthView} exact layout={MinimalLayout} path="/auth"/>
                <RouteWithLayout component={DashboardView} exact layout={MainLayoutContainer} path="/dashboard"/>
                <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found"/>
                <Redirect to="/not-found" />
            </Switch>
        </Router>
    );
};

export default Routes;