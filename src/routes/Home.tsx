import { JSX } from 'solid-js';
import '../CSS/Home.css'

import Logo from '../assets/logo-optimized.svg'

export default function Home(): JSX.Element{
    return (
        <>
            <div class='logo-element'>
                <Logo />
                <h1 class='logoText'>DuckDuckNo</h1>
            </div>
        </>
    )
}