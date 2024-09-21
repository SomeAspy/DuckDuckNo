import styles from "./result.module.css";

export default function (props: {
	title: string;
	description: string;
	url: string;
}) {
	return (
		<div class={styles.resultBox}>
			<div class={styles.resultText}>
				<a href={props.url} class={styles.resultTitle}>
					{props.title}
				</a>
				<div class={styles.resultDescription}>{props.description}</div>
			</div>
		</div>
	);
}
