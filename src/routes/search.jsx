// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import '../CSS/search.css';
import logo from '../assets/logo.svg';
import { handleSearch } from '../js/handleSearch.jsx';

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const query = params.q;

if (!query) {
    window.location.replace('/');
}

async function fetchResults(searchQuery) {
    return await fetch(
        `https://cors-proxy.aspy.workers.dev?https://api.duckduckgo.com/?q=${searchQuery}&format=json&no_redirect=1`,
    )
        // We need a cors proxy because the duckduckgo api doesn't allow cross-origin requests for some inane reason. I don't know why.
        // I route it through a cloudflare worker. This is a bit of a hack, but it works. The code for the worker wasn't written by me.
        // Although CORS Proxies are inherently insecure, we aren't using them to route sensitive data.
        .then((response) => response.json())
        .then((data) => data.RelatedTopics);
}

const results = await fetchResults(query);
console.log(results);

function Result(props) {
    return (
        <div className='resultBox'>
            <div className='resultText'>
                <div className='resultTitle'>
                    <a href={props.FirstURL}>{props.Text}</a>
                </div>
                <div className='resultSnippet'>{props.Abstract}</div>
            </div>
        </div>
    );
}

export default () => {
    return (
        <>
            <div className='navbar'>
                <a href='/'>
                    <img
                        className='logo'
                        src={logo}
                        alt='Upside down DuckDuckGo logo'
                    />
                </a>
                <div className='search'>
                    <input
                        className='search'
                        type='text'
                        name='userSearch'
                        placeholder='Search The Web For Anything'
                        id='userSearch'
                        onKeyPress={handleSearch}
                    />
                </div>
            </div>
            <div className='results'>
                <Result FirstURL={results[0].FirstURL} />
            </div>
        </>
    );
};
