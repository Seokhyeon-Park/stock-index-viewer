import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div>
                    <img className={styles.icon} src="./assets/img/chart.png" />
                </div>

                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            menu 1
                        </li>
                        <li>
                            menu 2
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;