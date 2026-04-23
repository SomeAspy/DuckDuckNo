# DuckDuckNo

A search engine powered by [Google CSE API](https://developers.google.com/custom-search/v1/overview)

> [!NOTE]
> In the interest of this project, I have enabled billing. Google CSE API provides 100 free queries per day, after which it is $5 USD per 1000 requests. [The sponsor button](https://github.com/sponsors/SomeAspy) has been added in an attempt to offset any costs incurred.

~~The backend can be found at [SomeAspy/DuckDuckNoBackend](https://github.com/SomeAspy/DuckDuckNoBackend)~~
Now integrated with Astro!

While the duckduckgo search api is free and keyless, it is extremely limited in what it can do. The next option was bing, due to duckduckgo basing their results off of bing.

However, Microsoft does not seem to provide free access to the Bing results api. Due to that, this website uses google to find search results.

## To Host yourself

### Env Configuration

```env
KEY= YOUR GOOGLE CSE KEY
CX= YOUR GOOGLE CX VALUE
```

1. Clone this repository: `git clone https://github.com/someaspy/duckduckno`
2. Install packages using a node package manager (I suggest [PNPM](https://pnpm.io/)): `pnpm i`
3. Build: `pnpm build`
4. Host: `node dist/server/entry.mjs`
