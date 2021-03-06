// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import '../CSS/home.css';
import logo from '../assets/logo.svg';
import { handleSearch } from '../js/handleSearch.jsx';

export default function () {
    return (
        <>
            <div className='logo'>
                <img src={logo} alt='Upside down DuckDuckGo logo' />
                <h1 className='logoText'>Duck Duck No</h1>
            </div>
            <div className='search'>
                <input
                    className='search'
                    type='text'
                    name='userSearch'
                    placeholder='Search The Web'
                    id='userSearch'
                    autofocus
                    onKeyPress={handleSearch}></input>
            </div>
            <div className='footer'>
                <a href='https://github.com/SomeAspy'>Made by SomeAspy</a>
                <br />
                <a href='https://github.com/SomeAspy/DuckDuckNo'>View Source</a>
            </div>
        </>
    );
}
