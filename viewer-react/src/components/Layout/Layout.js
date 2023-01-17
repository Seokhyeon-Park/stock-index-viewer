import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Graph from "../Graph/Graph";
import Console from "../Console/Console";
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <div className={styles.graph}>
                <Graph />
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