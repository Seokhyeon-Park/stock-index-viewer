import styles from './Console.module.css';
import DayPicker from '../DayPicker/DayPicker';
import Button from '../Button/Button';
import ReactDOM from 'react-dom';

const Console = () => {
    const root = document.getElementById('console');

    fetch('http://183.102.138.178:3000/api')
        .then(async (data) => {
            // data is object type
            const json = await data.json();

            const index = document.getElementById('indexContainer');
            const exchangeRate = document.getElementById('exchangeRateContainer');

            for(const key in json) {
                console.log(key);
                if(json[key].type === 'index') {
                    
                } else if (json[key].type === 'exchange rate') {

                }
            }
            console.log("@data : " + JSON.stringify(json));
        })
        .catch((err) => {
            console.log("@err : " + err);
        })

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
            <div id="indexContainer" className={styles.indexContainer}>
                <Button index="DJX" des="다우지수" />
                <Button index="SP" des="S&P 500" />
                <Button index="NASDAQ" des="나스닥" />
                <Button index="KOSPI" des="코스피" />
            </div>
            <div id="exchangeRateContainer" className={styles.exchangeRateContainer}>
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