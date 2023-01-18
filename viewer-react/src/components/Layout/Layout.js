import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Console from "../Console/Console";
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <div className={styles.display}>
                <Display />
                </div>
                
                <div className={styles.console}>
                <Console />
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Layout;