import styles from './Console.module.css';
import DayPicker from '../DayPicker/DayPicker';
import Button from '../Button/Button';

const Console = async () => {
    const res = await fetch('http://183.102.138.178:3000/api');
    const data = await res.json();
    console.log(data);

    return (
        <div className={styles.search}>
            <div className={styles.dateContainer}>
                <div className={styles.searchContainer}>
                    <div className={styles.tagContainer}>
                        <p className={`${styles.startTag} ${styles.tag}`}>시작</p>
                        <p className={`${styles.endTag} ${styles.tag}`}>끝</p>
                    </div>
                    <div className={styles.dayPickerContainer}>
                        <DayPicker />
                    </div>
                </div>
            </div>
            <div className={styles.indexContainer}>
                <Button index="DJX" des="다우지수" />
                <Button index="SP" des="S&P 500" />
                <Button index="NASDAQ" des="나스닥" />
                <Button index="KOSPI" des="코스피" />
            </div>
            <div className={styles.exchangeRateContainer}>
                <Button index="USD" des="달러" />
                <Button index="JPY" des="엔화" />
                <Button index="GBP" des="파운드" />
                <Button index="EUR" des="유로" />
                <Button index="BRL" des="헤알" />
            </div>
        </div>
    )
}

export default Console;