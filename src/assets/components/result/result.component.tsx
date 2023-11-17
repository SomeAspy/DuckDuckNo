import "./result.component.css";

export default function (props: { title: string, description: string, url: string; }) {
    return (
        <div class="result-box">
            <div class="result-text">
                <a href={props.url} class="result-title">{props.title}</a>
                <div class="result-description">{props.description}</div>
            </div>
        </div>
    );
}