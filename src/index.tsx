import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';
import { lazy } from 'solid-js'

const Home = lazy(()=>import('./routes/Home'))

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    ),
    document.getElementById('root')!
)