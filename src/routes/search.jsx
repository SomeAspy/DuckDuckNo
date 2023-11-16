import "../CSS/search.css";
import logo from "../assets/logo.svg";
import { handleSearch } from "../js/handleSearch.jsx";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const query = params.q;
let page = parseInt(params.p);

if (!query) {
    window.location.replace("/");
}

if (!page || page < 1) {
    window.location.replace(`/search?q=${query}&p=1`);
}
if (page > 10) {
    //API only allows 10 pages
    window.location.replace(`/search?q=${query}&p=10`);
}

async function fetchResults(searchQuery) {
    return await fetch(
        `https://api.duckduckno.com/search?q=${searchQuery}&p=${page - 1}`,
    ) // minus 1 because the api starts at 0
        .then((response) => response.json())
        .then((data) => data.data);
}

const results = await fetchResults(query);

function Result(props) {
    return (
        <div className="result-box">
            <div className="result-text">
                <div className="result-title">
                    <a href={props.link}>{props.title}</a>
                </div>
                <div className="resultSnippet">{props.snippet}</div>
            </div>
        </div>
    );
}

export default () => {
    return (
        <>
            <div className="navbar">
                <a href="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="Upside down DuckDuckGo logo"
                    />
                </a>
                <div className="search">
                    <input
                        className="search"
                        type="text"
                        name="userSearch"
                        placeholder="Search The Web For Anything"
                        id="userSearch"
                        onKeyDown={handleSearch}
                    />
                </div>
            </div>
            <div className="results">
                {results.map((result) => (
                    <Result
                        key={result.title}
                        title={result.title}
                        link={result.link}
                        snippet={result.snippet}
                    />
                ))}
            </div>
            {/*
            <div className='pages'>
                <a
                    onclick={() =>
                        (window.location = `/search?q=${query}&p=${page - 1}`)
                    }>
                    <div className='pageButton'>&lt</div>
                </a>
                <div className='pageNumber'>{page}</div>
                <a
                    onclick={() =>
                        (window.location = `/search?q=${query}&p=${page + 1}`)
                    }>
                    <div className='pageButton'>&gt</div>
                </a>
            </div>
                */}
        </>
    );
};
