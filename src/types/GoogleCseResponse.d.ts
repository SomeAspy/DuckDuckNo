export interface Result {
	kind: string;
	title: string;
	htmlTitle: string;
	link: string;
	displayLink: string;
	snippet: string;
	htmlSnippet: string;
	formattedUrl: string;
	htmlFormattedUrl: string;
}

export interface GoogleCseResponse {
	error?: { code: number; message: string };
	items: Result[];
}
