// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export function handleSearch(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        window.location.href = `/search?q=${
            document.getElementById('userSearch').value
        }`;
    }
}
