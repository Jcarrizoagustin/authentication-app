import Header from "../componets/Header";
import styles from "./PersonalInfoPage.module.css";

function PersonalInfoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
}

export default PersonalInfoPage;
