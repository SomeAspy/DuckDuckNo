import { For, JSX } from "solid-js";
import "../CSS/Search.css";

import FooterComponent from "../assets/components/footer/footer.component";
import ResultComponent from "../assets/components/result/result.component";
import Logo from "../assets/logo-optimized.svg";

import handleSearch from "../scripts/searchBar";
import fetchResults from "../scripts/fetchResults";

import type { Result } from "../types/backendResponse";
import type { SearchParameters } from "../types/Params";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop.toString())
}) as unknown as SearchParameters;

console.log(params);

if (!params.q) {
    window.location.replace("/");
} else {
    if (!params.p || params.p < 1) {
        window.location.replace(`/search?q=${params.q}&p=1`);
    }

    if (params.p > 10) {
        // API Only allows 10 pages at the moment - this is a google limitation (https://developers.google.com/custom-search/v1/using_rest#search_request_metadata)
        window.location.replace(`/search?q=${params.q}&p=10`);
    }
}

let results: Result[];

try {
    results = await fetchResults(params);
} catch {
    window.location.replace("/error");
}

export default function Search(): JSX.Element{
    return (
        <>
            <div class="navbar">
                <a class="logo-element" href="/">
                    <Logo />
                </a>
                <div class='search'>
                    <input
                        class='search'
                        type='text'
                        name='search'
                        placeholder='Search The Web'
                        id='search'
                        onKeyDown={(event: KeyboardEvent) => handleSearch(event)}
                    />
                </div>
                <a class="page-button" href={`/search?q=${params.q}&p=${params.p-1}`}>
                    &lt;
                </a>
                {/*This is cursed. If we do not do it this way 1 is APPENDED instead of ADDED*/}
                <a class="page-button" href={`/search?q=${params.q}&p=${parseInt(params.p.toString())+1}`}>
                    &gt;
                </a>
            </div>
            <div class="results">
                <For each={results}>{(result) => (
                    <ResultComponent
                        title={result.title}
                        description={result.snippet}
                        url={result.link}
                    />
                    )}</For>
                </div>
            <FooterComponent github="Search.tsx"/>
        </>
    );
}