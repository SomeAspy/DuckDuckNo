import "./footer.component.css";

export default function(props: {github: string}) {
    return (
        <>
            <footer class='source'>
                {"This website is "}
                <a
                    href={`https://github.com/SomeAspy/duckduckno/blob/main/src/routes/${props.github}`}>
                    open source
                </a>
            </footer>
            <footer class='copyright'>
                <a href='/license.txt' class='no-link-style'>
                    <p>&copy; Aiden 2021-2023 with love</p>
                    </a>
            </footer>
        </>
    );
}