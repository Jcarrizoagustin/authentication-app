import styles from "./PersonalInfoContentHeader.module.css";

function PersonalInfoContentHeader() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Personal info</h3>
      <p className={styles.subtitle}>Basic info, like your name and photo</p>
    </div>
  );
}

export default PersonalInfoContentHeader;
