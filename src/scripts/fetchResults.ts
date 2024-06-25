import type {SearchParameters} from "../types/Params";
import type {ApiResponse, Result} from "../types/backendResponse";

export default async function (query: SearchParameters): Promise<Result[]> {
    return await fetch(`https://api.duckduckno.com/search?q=${query.q}&p=${(query.p - 1).toString()}`)
        .then((response) => response.json() as unknown as ApiResponse)
        .then((data) => {
            if (data.code != 200 || data.results.length == 0) {
                console.error(data);
                throw new Error("API Fault");
            }
            return data.results;
        });
}
