import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={`${styles.wBtn} ${styles.wBtnIndigo}`}>
           {props.des}
           <br />
           ({props.index})
        </button>
    )
}

export default Button;