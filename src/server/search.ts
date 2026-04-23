import type { GoogleCseResponse } from "../types/GoogleCseResponse";

export async function fetchResults(query: string, page: number) {
	const endpoint = encodeURI(
		`https://www.googleapis.com/customsearch/v1?${new URLSearchParams({
			key: import.meta.env.KEY!,
			cx: import.meta.env.CX!,
			q: query,
			start: (page * 10).toString(),
			fields: "items",
		}).toString()}`,
	);

	return await fetch(endpoint, {
		headers: { "User-Agent": "DDN-Backend (gzip compatible)" },
	})
		.then((response) => response.json())
		.then(async (data: GoogleCseResponse) => {
			return data;
		});
}
