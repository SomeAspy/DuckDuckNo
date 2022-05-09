// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const query = params.q;

if (!query) {
    window.location.replace('/');
}

async function fetchResults(searchQuery) {
    let results;

    await fetch(
        `https://cors-proxy.aspy.workers.dev?https://api.duckduckgo.com/?q=${searchQuery}&format=json&no_redirect=1`,
    )
        // We need a cors proxy because the duckduckgo api doesn't allow cross-origin requests for some inane reason. I don't know why.
        // I route it through a cloudflare worker. This is a bit of a hack, but it works. The code for the worker wasn't written by me.
        // Although CORS Proxies are inherently insecure, we aren't using them to route sensitive data.
        .then((response) => response.json())
        .then((data) => {
            results = data.RelatedTopics;
        });
    return results;
}

console.log(await fetchResults(query));
