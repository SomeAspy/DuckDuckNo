import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";

const Home = lazy(() => import("./routes/Home"));
const Search = lazy(() => import("./routes/Search"));
const ErrorPage = lazy(() => import("./routes/Error"));

render(
	() => (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/search" component={Search} />
			<Route path="/*" component={ErrorPage} />
		</Router>
	),
	document.getElementById("root")!,
);
