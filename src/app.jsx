// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router';

const Search = lazy(() => import('./routes/search.jsx'));

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' component={Search} />
            </Routes>
        </Router>
    ),
    document.getElementById('app'),
);
