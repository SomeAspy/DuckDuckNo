import { For, JSX } from "solid-js";
import styles from "../CSS/Search.module.css";

import Footer from "../assets/components/footer/footer";
import ResultComponent from "../assets/components/result/result";
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
            <div class={styles.navbar}>
                <a class={styles.logoElement} href="/">
                    <Logo />
                </a>
                <div class={styles.search}>
                    <input
                        class={styles.search}
                        type='text'
                        name='search'
                        placeholder='Search The Web'
                        id='search'
                        onKeyDown={(event: KeyboardEvent) => handleSearch(event)}
                    />
                </div>
                <a class={styles.pageButton} href={`/search?q=${params.q}&p=${params.p-1}`}>
                    &lt;
                </a>
                {/*This is cursed. If we do not do it this way 1 is APPENDED instead of ADDED*/}
                <a class={styles.pageButton} href={`/search?q=${params.q}&p=${parseInt(params.p.toString())+1}`}>
                    &gt;
                </a>
            </div>
            <div class={styles.results}>
                <For each={results}>{(result) => (
                    <ResultComponent
                        title={result.title}
                        description={result.snippet}
                        url={result.link}
                    />
                    )}</For>
                </div>
            <Footer github="Search.tsx"/>
        </>
    );
}