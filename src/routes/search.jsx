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
    return await fetch(`https://api.duckduckno.com/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => data.results);
}

const results = await fetchResults(query);
console.log(results);

function Result(props) {
    return (
        <div className='resultBox'>
            <div className='resultText'>
                <div className='resultTitle'>
                    <a href={props.link}>{props.title}</a>
                </div>
                <div className='resultSnippet'>{props.snippet}</div>
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
                {results.map((result) => (
                    <Result
                        key={result.title}
                        title={result.title}
                        link={result.link}
                        snippet={result.snippet}
                    />
                ))}
            </div>
        </>
    );
};
