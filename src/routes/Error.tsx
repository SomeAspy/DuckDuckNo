import type { JSX } from "solid-js";

import styles from "../CSS/Error.module.css";

import Footer from "../assets/components/footer/footer";
import Logo from "../assets/logo-optimized.svg";
import handleSearch from "../scripts/searchBar";

export default function ErrorPage(): JSX.Element {
	return (
		<>
			<div class={styles.logoElement}>
				<div class={styles.logoContainer}>
					<Logo />
				</div>
			</div>
			<h1 class={styles.title}>Duck Duck- Oh No!</h1>
			<div class={styles.search}>
				<input
					class={styles.search}
					type="text"
					name="search"
					placeholder="Maybe try again?"
					id="search"
					autofocus
					onKeyDown={(event: KeyboardEvent) => {
						handleSearch(event);
					}}
				/>
			</div>
			<div class={styles.errorText}>
				Something went wrong! If this continues to happen, open an issue at
				<br />
				<a href="https://github.com/someaspy/duckduckno/issues/new">
					https://github.com/someaspy/duckduckno/issues/new
				</a>
				!
			</div>
			<Footer github="Home.tsx" />
		</>
	);
}
