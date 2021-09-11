import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'


const Header = () => {
    return (
        <header className={headerStyles.wrapper}>

            <span className={headerStyles.brand}>Nextjs Poke</span>

            <nav className={headerStyles.nav}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Search</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Favourites</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
