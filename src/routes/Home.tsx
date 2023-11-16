import { JSX } from "solid-js";
import "../CSS/Home.css";

import Logo from "../assets/logo-optimized.svg";
//import handleSearch from "../TS/search";

export default function Home(): JSX.Element{

    return (
        <>
            <div class='logo-element'>
                <div class='logo-container'>
                        <Logo />
                    </div>
                <h1 class='logo-text'>Duck Duck No</h1>
            </div>
            <div class='search-box'>
                <input
                    class='search'
                    type='text'
                    name='search'
                    placeholder='Search The Web'
                    id='search'
                    autofocus
                />
            </div>
        </>
    );
}