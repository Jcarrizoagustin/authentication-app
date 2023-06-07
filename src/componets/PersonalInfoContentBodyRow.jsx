import styles from "./PersonalInfoContentBodyRow.module.css";

function PersonalInfoContentBodyRow({ text, content }) {
  return (
    <div className={styles.row}>
      <div className={styles.textContainer}>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default PersonalInfoContentBodyRow;
