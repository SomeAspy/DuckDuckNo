import { JSX } from "solid-js";
import "../CSS/Home.css";
import "../CSS/Error.css";

import Logo from "../assets/logo-optimized.svg";
import FooterComponent from "../assets/components/footer/footer.component";
import handleSearch from "../scripts/searchBar";

export default function ErrorPage(): JSX.Element{
    return (
        <>
            <div class='logo-element'>
                <div class='logo-container' >
                        <Logo/>
                    </div>
            </div>
            <h1 class='title'>Duck Duck- Oh No!</h1>
            <div class='search'>
                <input
                    class='search'
                    type='text'
                    name='search'
                    placeholder='Maybe try again?'
                    id='search'
                    autofocus
                    onKeyDown={(event: KeyboardEvent) => handleSearch(event)}
                />
            </div>
            <div class="error-text">
                Something went wrong! If this continues to happen, open an issue at<br />
                <a href="https://github.com/someaspy/duckduckno/issues/new">https://github.com/someaspy/duckduckno/issues/new</a>!
            </div>
            <FooterComponent github="Home.tsx"/>
        </>
    );
}