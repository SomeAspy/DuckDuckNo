import type { JSX } from "solid-js";
import styles from "../CSS/Home.module.css";

import Footer from "../assets/components/footer/footer";
import Logo from "../assets/logo-optimized.svg";
import handleSearch from "../scripts/searchBar";

export default function Home(): JSX.Element {
	return (
		<>
			<div class={styles.logoElement}>
				<div class={styles.logoContainer}>
					<Logo />
				</div>
			</div>
			<h1 class={styles.title}>Duck Duck No</h1>
			<div class={styles.search}>
				<input
					class={styles.search}
					type="text"
					name="search"
					placeholder="Search The Web"
					id="search"
					autofocus
					onKeyDown={(event: KeyboardEvent) => {
						handleSearch(event);
					}}
				/>
			</div>
			<Footer github="Home.tsx" />
		</>
	);
}
