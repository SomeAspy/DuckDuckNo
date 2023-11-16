import "../CSS/home.css";
import logo from "../assets/logo.svg";
import { handleSearch } from "../js/handleSearch.jsx";

export default function () {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="Upside down DuckDuckGo logo" />
                <h1 className="logo-text">Duck Duck No</h1>
            </div>
            <div className="search">
                <input
                    className="search"
                    type="text"
                    name="userSearch"
                    placeholder="Search The Web"
                    id="userSearch"
                    autofocus
                    onKeyDown={handleSearch}></input>
            </div>
            <div className="footer">
                <a href="https://github.com/SomeAspy">Made by SomeAspy</a>
                <br />
                <a href="https://github.com/SomeAspy/DuckDuckNo">View Source</a>
            </div>
        </>
    );
}
