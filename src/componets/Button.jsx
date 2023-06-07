import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <div className={styles.button}>
      <h4 className={styles.text}>{text}</h4>
    </div>
  );
}

export default Button;
