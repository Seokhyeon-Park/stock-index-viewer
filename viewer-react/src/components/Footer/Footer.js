import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <h2 className={styles.title}>
                    Seokbong
                </h2>
                <h2 className={styles.title}>
                    <a href='https://seokbong.tistory.com/'>blog</a> · <a href='https://github.com/Seokhyeon-Park'>github</a>
                </h2>
            </div>
        </footer>
    )
}

export default Footer;