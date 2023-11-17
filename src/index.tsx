import { render } from "solid-js/web";
import { Router, Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./routes/Home"));
const Search = lazy(() => import("./routes/Search"));
const ErrorPage = lazy(() => import("./routes/Error"));

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/error" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    ),
    document.getElementById("root")!
);