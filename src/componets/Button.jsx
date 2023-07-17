import styles from "./Button.module.css";

function Button({ text, handleClick }) {
  return (
    <div className={styles.button} onClick={handleClick}>
      <h4 className={styles.text}>{text}</h4>
    </div>
  );
}

export default Button;
