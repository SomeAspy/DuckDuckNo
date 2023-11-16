import "../CSS/home.css";
import logo from "../assets/logo.svg";
import { handleSearch } from "../js/handleSearch.jsx";

export default function () {
    return (
        <>
            <div class="logo">
                <img src={logo} alt="Upside down DuckDuckGo logo" />
                <h1 class="logo-text">Duck Duck No</h1>
            </div>
            <div class="search">
                <input
                    class="search"
                    type="text"
                    name="userSearch"
                    placeholder="Search The Web"
                    id="userSearch"
                    autofocus
                    onKeyDown={handleSearch} />
            </div>
            <div class="footer">
                <a href="https://github.com/SomeAspy">Made by SomeAspy</a>
                <br />
                <a href="https://github.com/SomeAspy/DuckDuckNo">View Source</a>
            </div>
        </>
    );
}
