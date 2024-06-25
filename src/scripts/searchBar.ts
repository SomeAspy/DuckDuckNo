export default function handleSearch(event: KeyboardEvent) {
    if (event.key == "Enter") {
        event.preventDefault();
        const searchValue = (document.getElementById("search") as HTMLInputElement).value;
        if (searchValue) {
            window.location.href = `/search?q=${searchValue}&p=1`;
        }
    }
}
