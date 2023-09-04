export function handleSearch(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        window.location.href = `/search?q=${
            document.getElementById('userSearch').value
        }&p=1`;
    }
}
