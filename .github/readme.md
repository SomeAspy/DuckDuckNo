# DuckDuckNo [![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

>A search engine powered by [Google CSE API](https://developers.google.com/custom-search/v1/overview)

This repository contains the frontend for <https://duckduckno.com>.

> [!NOTE]
> In the interest of this project, I have enabled billing. Google CSE API provides 100 free queries per day, after which it is $5 USD per 1000 requests. [The sponsor button](https://github.com/sponsors/SomeAspy) has been added in an attempt to offset any costs incurred.

The backend can be found at [SomeAspy/DuckDuckNoBackend](https://github.com/SomeAspy/DuckDuckNoBackend)

## To Host yourself

1. Clone this repository: `git clone https://github.com/someaspy/duckduckno`
2. Install packages using a node package manager (I suggest [PNPM](https://pnpm.io/)): `pnpm i`
3. Build: `pnpm build`
4. Host: `pnpm serve` or serve the content of `dist`

I considered adding a config file to change the backend, but I deemed it unnecessary since if you are forking this for yourself and changing it you can easily change the backend.